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
exports.InterestController = void 0;
const common_1 = require("@nestjs/common");
const interest_service_1 = require("./interest.service");
const interest_dto_1 = require("./dto/interest.dto");
let InterestController = class InterestController {
    constructor(interestService) {
        this.interestService = interestService;
    }
    create(interestDTO) {
        return this.interestService.create(interestDTO);
    }
    findAll() {
        return this.interestService.findAll();
    }
    findOne(id) {
        return this.interestService.findOne(id);
    }
    update(id, interestDTO) {
        return this.interestService.update(id, interestDTO);
    }
    delete(id) {
        return this.interestService.delete(id);
    }
};
exports.InterestController = InterestController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [interest_dto_1.InterestDTO]),
    __metadata("design:returntype", void 0)
], InterestController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InterestController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InterestController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, interest_dto_1.InterestDTO]),
    __metadata("design:returntype", void 0)
], InterestController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InterestController.prototype, "delete", null);
exports.InterestController = InterestController = __decorate([
    (0, common_1.Controller)('api/v1/interest'),
    __metadata("design:paramtypes", [interest_service_1.InterestService])
], InterestController);
//# sourceMappingURL=interest.controller.js.map