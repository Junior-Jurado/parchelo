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

    private removeDiacritics(text: string): string {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
  

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

    async findByName(name: string): Promise<ICategory | null> {
        const normalizeName = this.removeDiacritics(name).toLowerCase();
    
        const categories = await this.model.find().populate('interests');
    
        // Retorna null si no encuentra ninguna categoría que coincida
        const foundCategory = categories.find((cat) => {
            const normalizedCategory = this.removeDiacritics(cat.name).toLowerCase();
            return normalizeName === normalizedCategory;
        });
    
        return foundCategory || null;
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
