import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class EventDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly title: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly description: string;


}