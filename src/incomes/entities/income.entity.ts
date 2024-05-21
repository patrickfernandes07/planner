import { Income } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class IncomeEntity implements Income {
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
  movementId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
