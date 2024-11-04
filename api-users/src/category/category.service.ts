import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICategory } from 'src/common/interfaces/category.interface';
import { CATEGORY } from 'src/common/models/models';
import { CategoryDTO } from './dto/category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(CATEGORY.name)
        private readonly model: Model<ICategory>
    ) {}

    async create(categoryDTO: CategoryDTO): Promise<ICategory> {
        const newCategory = new this.model(categoryDTO);
        return await newCategory.save();
    }
}
