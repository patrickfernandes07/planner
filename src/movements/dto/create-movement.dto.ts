import { ApiProperty } from '@nestjs/swagger';

export class CreateMovementDto {
  @ApiProperty()
  value: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  dueDate: Date;

  @ApiProperty({ required: null, nullable: true })
  payDate?: Date = null;

  @ApiProperty()
  accountId: number;

  @ApiProperty()
  contactId: number;

  @ApiProperty()
  entityId: number;
}
