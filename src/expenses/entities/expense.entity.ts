import { Expense } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export class ExpenseEntity implements Expense {
  @ApiProperty()
  id: number;

  @ApiProperty()
  value: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  dueDate: Date;

  @ApiProperty({ required: false, nullable: true })
  payDate: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
