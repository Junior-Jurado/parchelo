import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClientProxyParchelo } from 'src/common/proxy/client-proxy';
import { UserDTO } from './dto/user.dto';
import { Observable } from 'rxjs';
import { IUser } from 'src/common/interfaces/user.interface';
import { UserMSG } from 'src/common/constanst';

@Controller('api/v2/user')
export class UserController {
    constructor(private readonly clientProxy: ClientProxyParchelo){}

    private _clientProxyUser = this.clientProxy.clientProxyUsers();

    @Post()
    create(@Body() userDTO:UserDTO): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.CREATE, userDTO);
    }

    @Get()
    findAll():Observable<IUser[]> {
        return this._clientProxyUser.send(UserMSG.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id:String): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.FIND_ONE, id);
    }

    @Put(':id')
    update(@Param('id') id:String, @Body() userDTO:UserDTO): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.UPDATE, {id, userDTO})
    }

    @Delete('id')
    delete(@Param('id') id:String): Observable<any> {
        return this._clientProxyUser.send(UserMSG.DELETE, id);
    }

}
