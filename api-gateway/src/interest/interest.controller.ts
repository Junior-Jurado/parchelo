import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { map, Observable, switchMap, throwError } from 'rxjs';
import { IInterest } from 'src/common/interfaces/interest.interface';
import { ClientProxyParchelo } from 'src/common/proxy/client-proxy';
import { InterestDTO } from './dto/interest.dto';
import { CategoryMSG, InterestMSG } from 'src/common/constanst';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-aut.guard';

@ApiTags('Interest')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/interest')
export class InterestController {
    constructor(private readonly clientProxy: ClientProxyParchelo) {}

    private _clientProxyInterest = this.clientProxy.clientProxyInterests();
    private _clientProxyCategory = this.clientProxy.clientProxyCategories();

    @Post()
    create(@Body() interestDTO: InterestDTO): Observable<IInterest> {
        return this._clientProxyCategory
            .send(CategoryMSG.FIND_BY_NAME, interestDTO.category)
            .pipe(
            switchMap((category) => {
                if (!category) {
                return throwError(() => new Error("No existe una categoría con el nombre proporcionado"));
                }

                // Si existe la categoría, creamos el interés
                return this._clientProxyInterest.send(InterestMSG.CREATE, interestDTO).pipe(
                switchMap((interest: IInterest) => {
                    
                    const payload = {
                        categoryId: category._id,
                        interestId: interest._id,
                    };

                    // Asociamos el interés a la categoría
                    return this._clientProxyCategory.send(CategoryMSG.ADD_INTEREST, payload).pipe(
                    // Finalmente devolvemos el interés creado
                    map(() => interest)
                    );
                })
                );
            })
        );
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
