import { HttpStatus } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from './dto/category.dto';
import { InterestService } from 'src/interest/interest.service';
export declare class CategoryController {
    private readonly categoryService;
    private readonly interestService;
    constructor(categoryService: CategoryService, interestService: InterestService);
    create(CategoryDTO: CategoryDTO): Promise<import("../common/interfaces/category.interface").ICategory>;
    getAll(): Promise<import("../common/interfaces/category.interface").ICategory[]>;
    getById(id: String): Promise<import("../common/interfaces/category.interface").ICategory>;
    update(id: String, categoryDTO: CategoryDTO): Promise<import("../common/interfaces/category.interface").ICategory>;
    delete(id: String): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    addInterest(categoryId: String, interestId: String): Promise<import("../common/interfaces/category.interface").ICategory>;
}
