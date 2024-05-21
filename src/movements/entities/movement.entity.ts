import { Movement } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class MovementEntity implements Movement {
  @ApiProperty()
  id: number;

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
