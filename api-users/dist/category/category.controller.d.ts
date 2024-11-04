import { CategoryService } from './category.service';
import { CategoryDTO } from './dto/category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(CategoryDTO: CategoryDTO): Promise<import("../common/interfaces/category.interface").ICategory>;
}
