import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { ICategory } from 'src/common/interfaces/category.interface';
import { CategoryDTO } from './dto/category.dto';
export declare class CategoryService {
    private readonly model;
    constructor(model: Model<ICategory>);
    create(categoryDTO: CategoryDTO): Promise<ICategory>;
    getAll(): Promise<ICategory[]>;
    findOne(id: String): Promise<ICategory>;
    update(id: String, categoryDTO: CategoryDTO): Promise<ICategory>;
    delete(id: String): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    addInterest(categoryId: String, interestId: String): Promise<ICategory>;
}
