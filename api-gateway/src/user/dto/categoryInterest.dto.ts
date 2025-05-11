import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";



export class CategoryInterestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  category: string;

  interests: string[];
}
