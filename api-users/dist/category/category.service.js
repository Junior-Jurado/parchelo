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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const models_1 = require("../common/models/models");
let CategoryService = class CategoryService {
    constructor(model) {
        this.model = model;
    }
    async create(categoryDTO) {
        const newCategory = new this.model(categoryDTO);
        return await newCategory.save();
    }
    async getAll() {
        return await this.model.find().populate('interests');
    }
    async findOne(id) {
        return await this.model.findById(id).populate('interests');
    }
    async update(id, categoryDTO) {
        return await this.model.findByIdAndUpdate(id, categoryDTO, { new: true });
    }
    async delete(id) {
        await this.model.findByIdAndDelete(id);
        return {
            status: common_1.HttpStatus.OK,
            message: 'Category deleted'
        };
    }
    async addInterest(categoryId, interestId) {
        return await this.model.findByIdAndUpdate(categoryId, {
            $addToSet: { interests: interestId },
        }, {
            new: true
        }).populate('interests');
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(models_1.CATEGORY.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoryService);
//# sourceMappingURL=category.service.js.map