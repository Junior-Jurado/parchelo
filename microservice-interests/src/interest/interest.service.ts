import { HttpStatus, Injectable } from '@nestjs/common';
import { InterestDTO } from './dto/interest.dto';

import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { INTEREST } from 'src/common/models/models';
import { IInterest } from 'src/common/interfaces/interest.interface';

@Injectable()
export class InterestService {
    constructor(
        @InjectModel(INTEREST.name) 
        private readonly model: Model<IInterest>) {}

    async create(interestDTO: InterestDTO): Promise<IInterest> {
        const existing = await this.model.findOne({ name: interestDTO.name });
    
        if (existing) {
            return existing;
        }

        const newInterest = new this.model(interestDTO);
        return await newInterest.save();
    }
        

    async findAll(): Promise<IInterest[]> {
        return await this.model.find();
    }
    
    async findOne(id: String): Promise<IInterest> {
        return await this.model.findById(id);
    }

    async update(id: String, interestDTO: InterestDTO): Promise<IInterest> {
        return await this.model.findByIdAndUpdate(id, interestDTO);
    }

    async delete(id: String) {
        await this.model.findByIdAndDelete(id);
        return {
            status: HttpStatus.OK,
            message: 'Interest Deleted'
        }
    }

    async validateInterests(interests: string[]): Promise<IInterest[] | string> {
        const allInterests = await this.model.find();
        const foundInterests: IInterest[] = [];
    
        for (const name of interests) {
            const normalizedName = this.removeDiacritics(name).toLowerCase();
    
            const match = allInterests.find((int) => {
                const dbName = this.removeDiacritics(int.name).toLowerCase();
                return dbName === normalizedName;
            });
    
            if (!match) {
                return `El interés ${name} no existe.`;
            }
    
            foundInterests.push(match);
        }
    
        return foundInterests;
    }

    private removeDiacritics(str: string): string {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    
}
