import { Account } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class AccountEntity implements Account {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  entityId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
