import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ClientProxyParchelo } from 'src/common/proxy/client-proxy';
import { UserDTO } from './dto/user.dto';
import { Observable } from 'rxjs';
import { IUser } from 'src/common/interfaces/user.interface';
import { UserMSG } from 'src/common/constanst';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-aut.guard';
import { UserModule } from './user.module';
import { CategoryDTO } from 'src/category/dto/category.dto';
import { CategoryInterestDTO } from './dto/categoryInterest.dto';

@ApiTags('Users')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/user')
export class UserController {
    constructor(private readonly clientProxy: ClientProxyParchelo){}

    private _clientProxyUser = this.clientProxy.clientProxyUsers();

    // @Post()
    // create(@Body() userDTO:UserDTO): Observable<IUser> {
    //     return this._clientProxyUser.send(UserMSG.CREATE, userDTO);
    // }

    @Post(':id/addInterests')
    AddCategoriesInterest(@Param('id') id: string, @Body() categoryInterestDTO: CategoryInterestDTO): Observable<IUser> {
        const payload = {
            interests: categoryInterestDTO,
            userId: id,
          };
        
        return this._clientProxyUser.send(UserMSG.ADD_CATEGORY_INTEREST, payload)
    }


    @Get()
    findAll():Observable<IUser[]> {
        return this._clientProxyUser.send(UserMSG.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id:String): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.FIND_ONE, id);
    }

    @Get('findEmail/:email')
    findByEmail(@Param('email') email: string): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.FIND_BY_EMAIL, email)
    }

    @Put(':id')
    update(@Param('id') id:String, @Body() userDTO:UserDTO): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.UPDATE, {id, userDTO})
    }

    @Delete(':id')
    delete(@Param('id') id:String): Observable<any> {
        return this._clientProxyUser.send(UserMSG.DELETE, id);
    }

}
