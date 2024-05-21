import { ApiProperty } from '@nestjs/swagger';
export class CreateExpenseDto {
  @ApiProperty()
  value: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  dueDate: Date;

  @ApiProperty({ required: null, nullable: true })
  payDate?: Date = null;
}
