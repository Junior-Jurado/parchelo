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
exports.EventController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const client_proxy_1 = require("../common/proxy/client-proxy");
const event_dto_1 = require("./dto/event.dto");
const constanst_1 = require("../common/constanst");
const swagger_1 = require("@nestjs/swagger");
const jwt_aut_guard_1 = require("../auth/guards/jwt-aut.guard");
let EventController = class EventController {
    constructor(clientProxy) {
        this.clientProxy = clientProxy;
        this._clientProxyEvent = this.clientProxy.clientProxyEvents();
        this._clientProxyUser = this.clientProxy.clientProxyUsers();
    }
    create(eventDTO) {
        return this._clientProxyEvent.send(constanst_1.EventMSG.CREATE, eventDTO);
    }
    findAll() {
        return this._clientProxyEvent.send(constanst_1.EventMSG.FIND_ALL, '');
    }
    findOne(id) {
        return this._clientProxyEvent.send(constanst_1.EventMSG.FIND_ONE, id);
    }
    update(id, eventDTO) {
        return this._clientProxyEvent.send(constanst_1.EventMSG.UPDATE, { id, eventDTO });
    }
    delete(id) {
        return this._clientProxyEvent.send(constanst_1.EventMSG.DELETE, id);
    }
    async addAttendee(eventID, userID) {
        const user = await (0, rxjs_1.firstValueFrom)(this._clientProxyUser.send(constanst_1.UserMSG.FIND_ONE, userID));
        if (!user)
            throw new common_1.HttpException('User Not Found', common_1.HttpStatus.NOT_FOUND);
        const event = await (0, rxjs_1.firstValueFrom)(this._clientProxyEvent.send(constanst_1.EventMSG.FIND_ONE, eventID));
        if (!event)
            throw new common_1.HttpException('Event Not Found', common_1.HttpStatus.NOT_FOUND);
        return this._clientProxyEvent.send(constanst_1.EventMSG.ADD_ATTENDEE, { eventID, userID });
    }
};
exports.EventController = EventController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [event_dto_1.EventDTO]),
    __metadata("design:returntype", rxjs_1.Observable)
], EventController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], EventController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], EventController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)(':id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, event_dto_1.EventDTO]),
    __metadata("design:returntype", rxjs_1.Observable)
], EventController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], EventController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(':eventID/user/:userID'),
    __param(0, (0, common_1.Param)('eventID')),
    __param(1, (0, common_1.Param)('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "addAttendee", null);
exports.EventController = EventController = __decorate([
    (0, swagger_1.ApiTags)('Events'),
    (0, common_1.UseGuards)(jwt_aut_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('api/v2/event'),
    __metadata("design:paramtypes", [client_proxy_1.ClientProxyParchelo])
], EventController);
//# sourceMappingURL=event.controller.js.map