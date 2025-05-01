import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from './dto/category.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CategoryMSG } from 'src/common/constanst';


@Controller()
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @MessagePattern(CategoryMSG.CREATE)
    create(@Payload() CategoryDTO: CategoryDTO) {
        return this.categoryService.create(CategoryDTO);
    }

    @MessagePattern(CategoryMSG.FIND_ALL)
    getAll(){
        return this.categoryService.getAll();
    }

    @MessagePattern(CategoryMSG.FIND_ONE)
    getById(@Payload() payload){
        return this.categoryService.findOne(payload.id);
    }

    @MessagePattern(CategoryMSG.FIND_BY_NAME)
    getByName(@Payload() payload) {
        return this.categoryService.findByName(payload);
    }

    @MessagePattern(CategoryMSG.UPDATE)
    update(@Payload() payload){
        return this.categoryService.update(payload.id, payload.categoryDTO);
    }

    @MessagePattern(CategoryMSG.UPDATE)
    delete(@Payload() id: string)  {
        return this.categoryService.delete(id);
    }

    @MessagePattern(CategoryMSG.ADD_INTEREST)
    addInterest(@Payload() payload) {
        return this.categoryService.addInterest(payload.categoryId, payload.interestId);
    }



}
