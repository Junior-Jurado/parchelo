import { IsNotEmpty, IsString } from "class-validator";

export class InterestDTO{
    id?: String;
    @IsNotEmpty()
    @IsString()
    name: String;
}