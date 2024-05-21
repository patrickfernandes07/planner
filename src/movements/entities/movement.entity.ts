import { Movement } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class MovementEntity implements Movement {
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
  accountId: number;

  @ApiProperty()
  contactId: number;

  @ApiProperty()
  entityId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
