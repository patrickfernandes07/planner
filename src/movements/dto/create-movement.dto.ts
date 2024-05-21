import { ApiProperty } from '@nestjs/swagger';

export class CreateMovementDto {
  @ApiProperty()
  accountId: number;

  @ApiProperty()
  contactId: number;

  @ApiProperty()
  entityId: number;
}
