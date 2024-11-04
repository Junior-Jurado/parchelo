import { Body, Controller, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from './dto/category.dto';

@Controller('api/v1/category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post()
    create(@Body() CategoryDTO: CategoryDTO) {
        return this.categoryService.create(CategoryDTO);
    }
}
