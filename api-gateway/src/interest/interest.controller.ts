import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IInterest } from 'src/common/interfaces/interest.interface';
import { ClientProxyParchelo } from 'src/common/proxy/client-proxy';
import { InterestDTO } from './dto/interest.dto';
import { InterestMSG } from 'src/common/constanst';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-aut.guard';

@ApiTags('Interest')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/interest')
export class InterestController {
    constructor(private readonly clientProxy: ClientProxyParchelo) {}

    private _clientProxyInterest = this.clientProxy.clientProxyInterests();

    @Post()
    create(@Body() interestDTO: InterestDTO): Observable<IInterest> {
        return this._clientProxyInterest.send(InterestMSG.CREATE, interestDTO);
    }

    @Get()
    findAll():Observable<IInterest[]> {
        return this._clientProxyInterest.send(InterestMSG.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id: String): Observable<IInterest> {
        return this._clientProxyInterest.send(InterestMSG.FIND_ONE, id);
    }

    @Patch(':id')
    update(@Param('id') id:String, @Body() interestDTO: InterestDTO): Observable<IInterest> {
        return this._clientProxyInterest.send(InterestMSG.UPDATE, { id, interestDTO });
    }

    @Delete(':id')
    delete(@Param('id') id:String): Observable<any> {
        return this._clientProxyInterest.send(InterestMSG.DELETE, id);
    }
}
