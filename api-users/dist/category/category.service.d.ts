import { Model } from 'mongoose';
import { ICategory } from 'src/common/interfaces/category.interface';
import { CategoryDTO } from './dto/category.dto';
export declare class CategoryService {
    private readonly model;
    constructor(model: Model<ICategory>);
    create(categoryDTO: CategoryDTO): Promise<ICategory>;
}
