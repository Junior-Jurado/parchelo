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
const rxjs_1 = require("rxjs");
const client_proxy_1 = require("../common/proxy/client-proxy");
const interest_dto_1 = require("./dto/interest.dto");
const constanst_1 = require("../common/constanst");
const swagger_1 = require("@nestjs/swagger");
const jwt_aut_guard_1 = require("../auth/guards/jwt-aut.guard");
let InterestController = class InterestController {
    constructor(clientProxy) {
        this.clientProxy = clientProxy;
        this._clientProxyInterest = this.clientProxy.clientProxyInterests();
    }
    create(interestDTO) {
        return this._clientProxyInterest.send(constanst_1.InterestMSG.CREATE, interestDTO);
    }
    findAll() {
        return this._clientProxyInterest.send(constanst_1.InterestMSG.FIND_ALL, '');
    }
    findOne(id) {
        return this._clientProxyInterest.send(constanst_1.InterestMSG.FIND_ONE, id);
    }
    update(id, interestDTO) {
        return this._clientProxyInterest.send(constanst_1.InterestMSG.UPDATE, { id, interestDTO });
    }
    delete(id) {
        return this._clientProxyInterest.send(constanst_1.InterestMSG.DELETE, id);
    }
};
exports.InterestController = InterestController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [interest_dto_1.InterestDTO]),
    __metadata("design:returntype", rxjs_1.Observable)
], InterestController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], InterestController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], InterestController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, interest_dto_1.InterestDTO]),
    __metadata("design:returntype", rxjs_1.Observable)
], InterestController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], InterestController.prototype, "delete", null);
exports.InterestController = InterestController = __decorate([
    (0, swagger_1.ApiTags)('Interest'),
    (0, common_1.UseGuards)(jwt_aut_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('api/v2/interest'),
    __metadata("design:paramtypes", [client_proxy_1.ClientProxyParchelo])
], InterestController);
//# sourceMappingURL=interest.controller.js.map