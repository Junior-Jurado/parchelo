import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { EventDTO } from './dto/event.dto';
import { EventService } from './event.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-aut.guard';

@ApiTags('Events')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
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
