import { ApiProperty } from '@nestjs/swagger';

export class CreateIncomeDto {
  @ApiProperty()
  value: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  dueDate: Date;

  @ApiProperty()
  movementId: number;

  @ApiProperty({ required: null, nullable: true })
  payDate?: Date = null;
}
