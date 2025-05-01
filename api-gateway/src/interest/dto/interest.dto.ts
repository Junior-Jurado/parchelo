import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class InterestDTO{
    id?: String;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: String;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    category: String;
}