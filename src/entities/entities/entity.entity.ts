import { Entity } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class EntityEntity implements Entity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
