import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { firstValueFrom, Observable } from 'rxjs';
import { IEvent } from 'src/common/interfaces/event.interface';
import { ClientProxyParchelo } from 'src/common/proxy/client-proxy';
import { EventDTO } from './dto/event.dto';
import { EventMSG, UserMSG } from 'src/common/constanst';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-aut.guard';

@ApiTags('Events')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/event')
export class EventController {
    constructor(private readonly clientProxy: ClientProxyParchelo) {}

    private _clientProxyEvent = this.clientProxy.clientProxyEvents();

    private _clientProxyUser = this.clientProxy.clientProxyUsers();

    @Post()
    create(@Body() eventDTO: EventDTO): Observable<IEvent> {
        return this._clientProxyEvent.send(EventMSG.CREATE, eventDTO);
    }

    @Get()
    findAll(): Observable<IEvent[]> {
        return this._clientProxyEvent.send(EventMSG.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IEvent> {
        return this._clientProxyEvent.send(EventMSG.FIND_ONE, id);
    }

    @Patch(':id')
    update(@Param(':id') id:string, @Body() eventDTO:EventDTO): Observable<IEvent> {
        return this._clientProxyEvent.send(EventMSG.UPDATE, { id, eventDTO });
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._clientProxyEvent.send(EventMSG.DELETE, id);
    }

    @Post(':eventID/user/:userID')
    async addAttendee(
        @Param('eventID') eventID: string,
        @Param('userID') userID: string,
    ) {
        const user = await firstValueFrom(
            this._clientProxyUser.send(UserMSG.FIND_ONE, userID)
        );

        if(!user) throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);


        const event = await firstValueFrom(
            this._clientProxyEvent.send(EventMSG.FIND_ONE, eventID)
        );

        if(!event) throw new HttpException('Event Not Found', HttpStatus.NOT_FOUND);

        return this._clientProxyEvent.send(EventMSG.ADD_ATTENDEE, { eventID, userID })
    }
}
