import { EventDTO } from './dto/event.dto';
import { EventService } from './event.service';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(eventDTO: EventDTO): void;
    findAll(): Promise<import("./common/interfaces/event.interface").IEvent[]>;
    findOne(id: string): Promise<import("./common/interfaces/event.interface").IEvent>;
    update(id: string, eventDTO: EventDTO): Promise<import("./common/interfaces/event.interface").IEvent>;
    delete(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
}
