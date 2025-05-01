import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-aut.guard';
import { ClientProxyParchelo } from 'src/common/proxy/client-proxy';
import { CategoryDTO } from './dto/category.dto';
import { Observable } from 'rxjs';
import { ICategory } from 'src/common/interfaces/category.interface';
import { CategoryMSG } from 'src/common/constanst';

@ApiTags('Categories')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/category')
export class CategoryController {

    constructor(private readonly clientProxy: ClientProxyParchelo){}

    private _clientProxyCategory = this.clientProxy.clientProxyCategories();

    @Post()
    create(@Body() categoryDTO: CategoryDTO): Observable<ICategory> {
        return this._clientProxyCategory.send(CategoryMSG.CREATE, categoryDTO);
    }

    @Get()
    findAll(): Observable<ICategory[]> {
        return this._clientProxyCategory.send(CategoryMSG.FIND_ALL, '')
    }

}
