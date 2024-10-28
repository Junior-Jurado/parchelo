import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class EventDTO {
    @IsNotEmpty()
    @IsString()
    readonly title: string;
    @IsNotEmpty()
    @IsString()
    readonly description: string;


}