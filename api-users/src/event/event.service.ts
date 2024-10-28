import { HttpStatus, Injectable } from '@nestjs/common';
import { EventDTO } from './dto/event.dto';
import { IEvent } from 'src/common/interfaces/event.interface';
import { InjectModel } from '@nestjs/mongoose';
import { EVENT } from 'src/common/models/models';
import { Model } from 'mongoose';

@Injectable()
export class EventService {
    
    constructor(@InjectModel(EVENT.name) private readonly model: Model<IEvent>, ) {}

    async createEvent(eventDTO: EventDTO): Promise<IEvent> {
        const newEvent = new this.model(eventDTO);
        return await newEvent.save();
    }

    async findAll(): Promise<IEvent[]> {
        return await this.model.find();
    }

    async findOne(id: string): Promise<IEvent> {
        return await this.model.findById(id);
    }

    async update(id: string, eventDTO: EventDTO): Promise<IEvent> {
        return await this.model.findByIdAndUpdate(id, eventDTO, {new: true});
    }
    
    async delete(id: string) {
        this.model.findByIdAndDelete(id);
        return {
            status: HttpStatus.OK,
            msg: 'Event Deleted',
        };

    }
}
