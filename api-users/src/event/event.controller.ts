import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EventDTO } from './dto/event.dto';
import { EventService } from './event.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Events')
@Controller('api/v1/event')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Post()
    create(@Body() eventDTO:EventDTO) {
        this.eventService.createEvent(eventDTO);
    }

    @Get()
    findAll() {
        return this.eventService.findAll();
    } 

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.eventService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() eventDTO: EventDTO) {
        return this.eventService.update(id, eventDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.eventService.delete(id);
    }
}
