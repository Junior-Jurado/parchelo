import { HttpStatus } from '@nestjs/common';
import { EventDTO } from './dto/event.dto';
import { IEvent } from 'src/common/interfaces/event.interface';
import { Model } from 'mongoose';
export declare class EventService {
    private readonly model;
    constructor(model: Model<IEvent>);
    createEvent(eventDTO: EventDTO): Promise<IEvent>;
    findAll(): Promise<IEvent[]>;
    findOne(id: string): Promise<IEvent>;
    update(id: string, eventDTO: EventDTO): Promise<IEvent>;
    delete(id: string): Promise<{
        status: HttpStatus;
        msg: string;
    }>;
}
