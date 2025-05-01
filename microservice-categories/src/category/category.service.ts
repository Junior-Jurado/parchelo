import { HttpStatus, Injectable } from '@nestjs/common';
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

    async getAll(): Promise<ICategory[]> {
        return await this.model.find().populate('interests');
    }

    async findOne(id: String): Promise<ICategory> {
        return await this.model.findById(id).populate('interests');
    }

    async findByName(name: string): Promise<ICategory> {
        return await this.model.findOne({ name }).populate('interests');
    }

    async update(id:String, categoryDTO: CategoryDTO): Promise<ICategory> {
        return await this.model.findByIdAndUpdate(id, categoryDTO, {new: true});
    }

    async delete(id:String) {
        await this.model.findByIdAndDelete(id);
        return {
            status: HttpStatus.OK,
            message: 'Category deleted'
        };
    }

    async addInterest(categoryId: String, interestId: String): Promise<ICategory> {
        return await this.model.findByIdAndUpdate(categoryId, {
            $addToSet: { interests: interestId}, 
        },
        {
            new: true
        },
    ).populate('interests');
    }
}
