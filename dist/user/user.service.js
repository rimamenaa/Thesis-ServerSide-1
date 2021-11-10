"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const auth_service_1 = require("./../auth/auth.service");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const uuid_1 = require("uuid");
const date_fns_1 = require("date-fns");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userModel, forgotPasswordModel, authService) {
        this.userModel = userModel;
        this.forgotPasswordModel = forgotPasswordModel;
        this.authService = authService;
        this.HOURS_TO_VERIFY = 4;
        this.HOURS_TO_BLOCK = 6;
        this.LOGIN_ATTEMPTS_TO_BLOCK = 5;
    }
    async create(createUserDto) {
        const user = new this.userModel(createUserDto);
        await this.isEmailUnique(user.email);
        this.setRegistrationInfo(user);
        await user.save();
        return this.buildRegistrationInfo(user);
    }
    async verifyEmail(req, verifyUuidDto) {
        const user = await this.findByVerification(verifyUuidDto.verification);
        await this.setUserAsVerified(user);
        return {
            fullName: user.fullName,
            email: user.email,
            accessToken: await this.authService.createAccessToken(user._id),
            refreshToken: await this.authService.createRefreshToken(req, user._id),
        };
    }
    async login(req, loginUserDto) {
        const user = await this.findUserByEmail(loginUserDto.email);
        const match = await bcrypt.compare(loginUserDto.password, user.password);
        if (match) {
            return {
                fullName: user.fullName,
                email: user.email,
                accessToken: await this.authService.createAccessToken(user._id),
                refreshToken: await this.authService.createRefreshToken(req, user._id),
            };
        }
        else if (!match)
            throw new common_1.UnauthorizedException();
    }
    async refreshAccessToken(refreshAccessTokenDto) {
        const userId = await this.authService.findRefreshToken(refreshAccessTokenDto.refreshToken);
        const user = await this.userModel.findById(userId);
        if (!user) {
            throw new common_1.BadRequestException('Bad request');
        }
        return {
            accessToken: await this.authService.createAccessToken(user._id),
        };
    }
    async forgotPassword(req, createForgotPasswordDto) {
        await this.findByEmail(createForgotPasswordDto.email);
        await this.saveForgotPassword(req, createForgotPasswordDto);
        return {
            email: createForgotPasswordDto.email,
            message: 'verification sent.',
        };
    }
    async forgotPasswordVerify(req, verifyUuidDto) {
        const forgotPassword = await this.findForgotPasswordByUuid(verifyUuidDto);
        await this.setForgotPasswordFirstUsed(req, forgotPassword);
        return {
            email: forgotPassword.email,
            message: 'now reset your password.',
        };
    }
    async resetPassword(resetPasswordDto) {
        const forgotPassword = await this.findForgotPasswordByEmail(resetPasswordDto);
        await this.setForgotPasswordFinalUsed(forgotPassword);
        await this.resetUserPassword(resetPasswordDto);
        return {
            email: resetPasswordDto.email,
            message: 'password successfully changed.',
        };
    }
    findAll() {
        return { hello: 'world' };
    }
    async isEmailUnique(email) {
        const user = await this.userModel.findOne({ email, verified: true });
        if (user) {
            throw new common_1.BadRequestException('Email most be unique.');
        }
    }
    setRegistrationInfo(user) {
        user.verification = (0, uuid_1.v4)();
        user.verificationExpires = (0, date_fns_1.addHours)(new Date(), this.HOURS_TO_VERIFY);
    }
    buildRegistrationInfo(user) {
        const userRegistrationInfo = {
            fullName: user.fullName,
            email: user.email,
            verified: user.verified,
        };
        return userRegistrationInfo;
    }
    async findByVerification(verification) {
        const user = await this.userModel.findOne({
            verification,
            verified: false,
            verificationExpires: { $gt: new Date() },
        });
        if (!user) {
            throw new common_1.BadRequestException('Bad request.');
        }
        return user;
    }
    async findByEmail(email) {
        const user = await this.userModel.findOne({ email, verified: true });
        if (!user) {
            throw new common_1.NotFoundException('Email not found.');
        }
        return user;
    }
    async setUserAsVerified(user) {
        user.verified = true;
        await user.save();
    }
    async findUserByEmail(email) {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new common_1.NotFoundException('Wrong email or password.');
        }
        return user;
    }
    async checkPassword(attemptPass, user) {
        const match = await bcrypt.compare(attemptPass, user.password);
        if (!match) {
            await this.passwordsDoNotMatch(user);
            throw new common_1.NotFoundException('Wrong email or password.');
        }
        return match;
    }
    isUserBlocked(user) {
        if (user.blockExpires > Date.now()) {
            throw new common_1.ConflictException('User has been blocked try later.');
        }
    }
    async passwordsDoNotMatch(user) {
        user.loginAttempts += 1;
        await user.save();
        if (user.loginAttempts >= this.LOGIN_ATTEMPTS_TO_BLOCK) {
            await this.blockUser(user);
            throw new common_1.ConflictException('User blocked.');
        }
    }
    async blockUser(user) {
        user.blockExpires = (0, date_fns_1.addHours)(new Date(), this.HOURS_TO_BLOCK);
        await user.save();
    }
    async passwordsAreMatch(user) {
        user.loginAttempts = 0;
        await user.save();
    }
    async saveForgotPassword(req, createForgotPasswordDto) {
        const forgotPassword = await this.forgotPasswordModel.create({
            email: createForgotPasswordDto.email,
            verification: (0, uuid_1.v4)(),
            expires: (0, date_fns_1.addHours)(new Date(), this.HOURS_TO_VERIFY),
            ip: this.authService.getIp(req),
            browser: this.authService.getBrowserInfo(req),
            country: this.authService.getCountry(req),
        });
        await forgotPassword.save();
    }
    async findForgotPasswordByUuid(verifyUuidDto) {
        const forgotPassword = await this.forgotPasswordModel.findOne({
            verification: verifyUuidDto.verification,
            firstUsed: false,
            finalUsed: false,
            expires: { $gt: new Date() },
        });
        if (!forgotPassword) {
            throw new common_1.BadRequestException('Bad request.');
        }
        return forgotPassword;
    }
    async setForgotPasswordFirstUsed(req, forgotPassword) {
        forgotPassword.firstUsed = true;
        forgotPassword.ipChanged = this.authService.getIp(req);
        forgotPassword.browserChanged = this.authService.getBrowserInfo(req);
        forgotPassword.countryChanged = this.authService.getCountry(req);
        await forgotPassword.save();
    }
    async findForgotPasswordByEmail(resetPasswordDto) {
        const forgotPassword = await this.forgotPasswordModel.findOne({
            email: resetPasswordDto.email,
            firstUsed: true,
            finalUsed: false,
            expires: { $gt: new Date() },
        });
        if (!forgotPassword) {
            throw new common_1.BadRequestException('Bad request.');
        }
        return forgotPassword;
    }
    async setForgotPasswordFinalUsed(forgotPassword) {
        forgotPassword.finalUsed = true;
        await forgotPassword.save();
    }
    async resetUserPassword(resetPasswordDto) {
        const user = await this.userModel.findOne({
            email: resetPasswordDto.email,
            verified: true,
        });
        user.password = resetPasswordDto.password;
        await user.save();
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __param(1, (0, mongoose_1.InjectModel)('ForgotPassword')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        auth_service_1.AuthService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map