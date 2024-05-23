import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsDateString,
} from 'class-validator';

export class CreateMovementDto {
  @IsNumber()
  @ApiProperty()
  value: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(300)
  @ApiProperty()
  description: string;

  @IsDateString()
  @ApiProperty()
  dueDate: Date;

  @IsDateString()
  @IsOptional()
  @ApiProperty({ required: null, nullable: true })
  payDate?: Date = null;

  @ApiProperty()
  accountId: number;

  @ApiProperty()
  contactId: number;

  @ApiProperty()
  entityId: number;

  @ApiProperty()
  userId: number;
}
