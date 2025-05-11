import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ClientProxyParchelo } from 'src/common/proxy/client-proxy';
import { UserDTO } from './dto/user.dto';
import { firstValueFrom, Observable } from 'rxjs';
import { IUser } from 'src/common/interfaces/user.interface';
import { CategoryMSG, InterestMSG, UserMSG } from 'src/common/constanst';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-aut.guard';
import { CategoryInterestDTO } from './dto/categoryInterest.dto';

@ApiTags('Users')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/user')
export class UserController {
    constructor(private readonly clientProxy: ClientProxyParchelo){}

    private _clientProxyUser = this.clientProxy.clientProxyUsers();
    private _clientProxyCategory = this.clientProxy.clientProxyCategories();
    private _clientProxyInterest = this.clientProxy.clientProxyInterests();

    @Post(':id/addInterests')
    async AddCategoryInterest(@Param('id') id: string, @Body() data: CategoryInterestDTO[]){//: Observable<IUser> {
        
        for (const d of data) {
            try {
                const category = await firstValueFrom(
                    this._clientProxyCategory.send(CategoryMSG.FIND_BY_NAME, d.category)
                );
    
                if (!category) {
                    return {
                        status: HttpStatus.NOT_FOUND,
                        message: `La categoría ${d.category} no existe.`
                    }
                }
                d.category = category._id;

                const interestResult = await firstValueFrom(
                    this._clientProxyInterest.send(InterestMSG.VALIDATE, d.interests)
                );
                
                if (typeof interestResult === 'string') {
                    return {
                        status: HttpStatus.NOT_FOUND,
                        message: interestResult
                    };
                }
                
                d.interests = interestResult.map(i => i._id);
            } catch (error) {
                console.error(`Error al buscar la categoría: ${d.category}`, error);
                // Puedes devolver un error global aquí, si lo prefieres
                return {
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Hubo un problema al procesar la solicitud.',
                    error: error.message
                };
            } 
        }

        const payload = {
            interests: data,
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
