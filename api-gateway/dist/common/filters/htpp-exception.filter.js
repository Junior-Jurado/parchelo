"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AllExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let AllExceptionFilter = AllExceptionFilter_1 = class AllExceptionFilter {
    constructor() {
        this.logger = new common_1.Logger(AllExceptionFilter_1.name);
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        const req = ctx.getRequest();
        let status = exception?.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = exception?.message || 'Internal server error';
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            const response = exception.getResponse();
            message = typeof response === 'object' ? JSON.stringify(response) : response;
        }
        if (host.getType() === 'rpc') {
            if (exception instanceof microservices_1.RpcException) {
                const error = exception.getError();
                if (typeof error === 'object' && error !== null) {
                    return {
                        statusCode: error.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                        message: error.message || 'Internal server error'
                    };
                }
                return {
                    statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    message: error || 'Internal server error'
                };
            }
            return {
                statusCode: status,
                message: exception?.message || 'Internal server error'
            };
        }
        res.status(status).json({
            timestamp: new Date().toISOString(),
            path: req.url,
            error: message,
        });
    }
};
exports.AllExceptionFilter = AllExceptionFilter;
exports.AllExceptionFilter = AllExceptionFilter = AllExceptionFilter_1 = __decorate([
    (0, common_1.Catch)()
], AllExceptionFilter);
//# sourceMappingURL=htpp-exception.filter.js.map