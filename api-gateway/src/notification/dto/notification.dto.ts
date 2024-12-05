import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsBoolean } from "class-validator";
import { Types } from "mongoose";

export class NotificationDTO {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    readonly user: Types.ObjectId; 

    @ApiProperty({ type: String, required: false })
    @IsOptional()
    readonly event: Types.ObjectId | null;

    @ApiProperty()
    @IsNotEmpty()
    readonly message: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    readonly read: boolean; 

    @ApiProperty()
    @IsNotEmpty()
    readonly send_date: Date;
}
