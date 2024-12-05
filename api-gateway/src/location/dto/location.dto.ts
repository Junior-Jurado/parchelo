import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class LocationDTO {
    @ApiProperty()
    @IsNotEmpty()
    readonly address: string;
    @ApiProperty()
    @IsNotEmpty()
    readonly latitude: number;
    @ApiProperty()
    @IsNotEmpty()
    readonly longitude: number;
}