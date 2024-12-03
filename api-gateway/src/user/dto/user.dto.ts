import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CategoryDTO } from "src/category/dto/category.dto";


export class UserDTO {
    @ApiProperty()
    @IsNotEmpty()
    readonly name: String;
    @ApiProperty()
    readonly last_name: String;
    @ApiProperty()
    readonly email: String;
    @ApiProperty()
    readonly password: String;
    @ApiProperty()
    readonly main_picture_profile: String;
    @ApiProperty()
    readonly min_picture_profile: String;
    @ApiProperty()
    readonly max_picuture_profile: String;
    @ApiProperty()
    readonly description: String;
    @ApiProperty()
    readonly birthdate: Date;

    @ApiProperty()
    @IsOptional()
    readonly categories: CategoryDTO[];
}
