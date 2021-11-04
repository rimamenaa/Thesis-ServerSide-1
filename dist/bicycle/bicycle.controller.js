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
exports.BicycleController = void 0;
const common_1 = require("@nestjs/common");
const create_bicycle_dto_1 = require("./dto/create-bicycle.dto");
const update_bicycle_dto_1 = require("./dto/update-bicycle.dto");
const bicycle_service_1 = require("./bicycle.service");
let BicycleController = class BicycleController {
    constructor(service) {
        this.service = service;
    }
    async index() {
        return await this.service.findAll();
    }
    async find(id) {
        return await this.service.findOne(id);
    }
    async create(bicycle) {
        return await this.service.create(bicycle);
    }
    async update(id, updateBicycleDto) {
        return await this.service.update(id, updateBicycleDto);
    }
    async delete(id) {
        return await this.service.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BicycleController.prototype, "index", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BicycleController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bicycle_dto_1.CreateBicycleDto]),
    __metadata("design:returntype", Promise)
], BicycleController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bicycle_dto_1.UpdateBicycleDto]),
    __metadata("design:returntype", Promise)
], BicycleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BicycleController.prototype, "delete", null);
BicycleController = __decorate([
    (0, common_1.Controller)('bicycle'),
    __metadata("design:paramtypes", [bicycle_service_1.BicycleService])
], BicycleController);
exports.BicycleController = BicycleController;
//# sourceMappingURL=bicycle.controller.js.map