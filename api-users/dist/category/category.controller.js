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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const category_dto_1 = require("./dto/category.dto");
const interest_service_1 = require("../interest/interest.service");
const swagger_1 = require("@nestjs/swagger");
let CategoryController = class CategoryController {
    constructor(categoryService, interestService) {
        this.categoryService = categoryService;
        this.interestService = interestService;
    }
    create(CategoryDTO) {
        return this.categoryService.create(CategoryDTO);
    }
    getAll() {
        return this.categoryService.getAll();
    }
    getById(id) {
        return this.categoryService.findOne(id);
    }
    update(id, categoryDTO) {
        return this.categoryService.update(id, categoryDTO);
    }
    delete(id) {
        return this.categoryService.delete(id);
    }
    async addInterest(categoryId, interestId) {
        const interest = await this.interestService.findOne(interestId);
        console.log(interest);
        if (!interest)
            throw new common_1.HttpException('Interest Not Found', common_1.HttpStatus.NOT_FOUND);
        return this.categoryService.addInterest(categoryId, interestId);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.CategoryDTO]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, category_dto_1.CategoryDTO]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(':categoryId/interest/:interestId'),
    __param(0, (0, common_1.Param)('categoryId')),
    __param(1, (0, common_1.Param)('interestId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String,
        String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "addInterest", null);
exports.CategoryController = CategoryController = __decorate([
    (0, swagger_1.ApiTags)('Categories'),
    (0, common_1.Controller)('api/v1/category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        interest_service_1.InterestService])
], CategoryController);
//# sourceMappingURL=category.controller.js.map