import { Body, Controller, Post } from '@nestjs/common';
import { EventDTO } from './dto/event.dto';
import { EventService } from './event.service';

@Controller('api/v1/event')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Post()
    create(@Body() eventDTO:EventDTO) {
        this.eventService.createEvent(eventDTO);
    }
}
