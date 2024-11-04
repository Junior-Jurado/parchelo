import { IsNotEmpty, IsString } from "class-validator";
import { Interest } from "src/user/dto/user.dto";

export class CategoryDTO {
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    readonly interests: Interest[];
}