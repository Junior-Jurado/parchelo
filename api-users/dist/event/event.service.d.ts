import { EventDTO } from './dto/event.dto';
import { IEvent } from 'src/common/interfaces/event.interface';
import { Model } from 'mongoose';
export declare class EventService {
    private readonly model;
    constructor(model: Model<IEvent>);
    createEvent(eventDTO: EventDTO): Promise<IEvent>;
}
