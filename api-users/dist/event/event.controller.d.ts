import { EventDTO } from './dto/event.dto';
import { EventService } from './event.service';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(eventDTO: EventDTO): void;
}
