import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { InterestDTO } from "src/interest/dto/interest.dto";


export class CategoryInterestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({ type: [InterestDTO] })
  @ValidateNested({ each: true })
  @Type(() => InterestDTO)
  readonly interests: InterestDTO[];
}
