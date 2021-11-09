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
exports.UserController = void 0;
const roles_decorator_1 = require("./../auth/decorators/roles.decorator");
const reset_password_dto_1 = require("./dto/reset-password.dto");
const create_forgot_password_dto_1 = require("./dto/create-forgot-password.dto");
const login_user_dto_1 = require("./dto/login-user.dto");
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const verify_uuid_dto_1 = require("./dto/verify-uuid.dto");
const user_service_1 = require("./user.service");
const passport_1 = require("@nestjs/passport");
const refresh_access_token_dto_1 = require("./dto/refresh-access-token.dto");
const roles_guard_1 = require("../auth/guards/roles.guard");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async register(createUserDto) {
        return await this.userService.create(createUserDto);
    }
    async verifyEmail(req, verifyUuidDto) {
        return await this.userService.verifyEmail(req, verifyUuidDto);
    }
    async login(req, loginUserDto) {
        return await this.userService.login(req, loginUserDto);
    }
    async refreshAccessToken(refreshAccessTokenDto) {
        return await this.userService.refreshAccessToken(refreshAccessTokenDto);
    }
    async forgotPassword(req, createForgotPasswordDto) {
        return await this.userService.forgotPassword(req, createForgotPasswordDto);
    }
    async forgotPasswordVerify(req, verifyUuidDto) {
        return await this.userService.forgotPasswordVerify(req, verifyUuidDto);
    }
    async resetPassword(resetPasswordDto) {
        return await this.userService.resetPassword(resetPasswordDto);
    }
    findAll() {
        return this.userService.findAll();
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('verify-email'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, verify_uuid_dto_1.VerifyUuidDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "verifyEmail", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('refresh-access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refresh_access_token_dto_1.RefreshAccessTokenDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "refreshAccessToken", null);
__decorate([
    (0, common_1.Post)('forgot-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_forgot_password_dto_1.CreateForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('forgot-password-verify'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, verify_uuid_dto_1.VerifyUuidDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "forgotPasswordVerify", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Get)('data'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map