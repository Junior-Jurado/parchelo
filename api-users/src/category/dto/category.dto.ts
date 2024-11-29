import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { InterestDTO } from "src/interest/dto/interest.dto";


export class CategoryDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    
    readonly interests: InterestDTO[];
}