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
const microservices_1 = require("@nestjs/microservices");
const constanst_1 = require("../common/constanst");
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
    update(payload) {
        return this.interestService.update(payload.id, payload.interestDTO);
    }
    delete(id) {
        return this.interestService.delete(id);
    }
};
exports.InterestController = InterestController;
__decorate([
    (0, microservices_1.MessagePattern)(constanst_1.InterestMSG.CREATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [interest_dto_1.InterestDTO]),
    __metadata("design:returntype", void 0)
], InterestController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)(constanst_1.InterestMSG.FIND_ALL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InterestController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)(constanst_1.InterestMSG.FIND_ONE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InterestController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)(constanst_1.InterestMSG.FIND_ONE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InterestController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)(constanst_1.InterestMSG.DELETE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InterestController.prototype, "delete", null);
exports.InterestController = InterestController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [interest_service_1.InterestService])
], InterestController);
//# sourceMappingURL=interest.controller.js.map