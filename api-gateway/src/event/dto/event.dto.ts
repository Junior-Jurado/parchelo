import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsArray, IsDate } from "class-validator";
import { Types } from "mongoose";
import { LocationDTO } from "src/location/dto/location.dto";

export class WhatsAppGroupDTO {
    @ApiProperty()
    @IsString()
    readonly link: string;
}

export class EventDTO {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    readonly title: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    readonly date: Date;

    @ApiProperty()
    @IsNotEmpty()
    readonly location: LocationDTO;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly event_image: string;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    readonly creator: Types.ObjectId;

    @ApiProperty({ type: [String] })
    @IsArray()
    readonly attendees: Types.ObjectId[];

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly interest: Types.ObjectId;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly max_attendees: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly min_attendees: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    readonly creation_date: Date;

    @ApiProperty()
    @IsOptional()
    readonly whatsapp_group?: WhatsAppGroupDTO;
    
}


