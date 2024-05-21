import { Contact } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ContactEntity implements Contact {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
