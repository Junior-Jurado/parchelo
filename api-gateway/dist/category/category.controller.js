"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_aut_guard_1 = require("../auth/guards/jwt-aut.guard");
let CategoryController = class CategoryController {
};
exports.CategoryController = CategoryController;
exports.CategoryController = CategoryController = __decorate([
    (0, swagger_1.ApiTags)('Categories'),
    (0, common_1.UseGuards)(jwt_aut_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('api/v2/category')
], CategoryController);
//# sourceMappingURL=category.controller.js.map