import { HttpStatus } from '@nestjs/common';
import { InterestDTO } from './dto/interest.dto';
import { Model } from 'mongoose';
import { IInterest } from 'src/common/interfaces/interest.interface';
export declare class InterestService {
    private readonly model;
    constructor(model: Model<IInterest>);
    create(interestDTO: InterestDTO): Promise<IInterest>;
    findAll(): Promise<IInterest[]>;
    findOne(id: String): Promise<IInterest>;
    update(id: String, interestDTO: InterestDTO): Promise<IInterest>;
    delete(id: String): Promise<{
        status: HttpStatus;
        message: string;
    }>;
}
