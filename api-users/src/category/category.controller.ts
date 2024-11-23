import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from './dto/category.dto';
import { InterestService } from 'src/interest/interest.service';

@Controller('api/v1/category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService,
        private readonly interestService: InterestService
    ) {}

    @Post()
    create(@Body() CategoryDTO: CategoryDTO) {
        return this.categoryService.create(CategoryDTO);
    }

    @Get()
    getAll(){
        return this.categoryService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: String){
        return this.categoryService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: String, @Body() categoryDTO: CategoryDTO){
        return this.categoryService.update(id, categoryDTO);
    }

    @Delete(':id')
    delete(@Param('id') id:String)  {
        return this.categoryService.delete(id);
    }

    @Post(':categoryId/interest/:interestId')
    async addInterest(
        @Param('categoryId') categoryId: String,
        @Param('interestId') interestId: String) {

            const interest = await this.interestService.findOne(interestId);
            console.log(interest);
            if(!interest)
                throw new HttpException('Interest Not Found', HttpStatus.NOT_FOUND);

            return this.categoryService.addInterest(categoryId, interestId);
        }

}
