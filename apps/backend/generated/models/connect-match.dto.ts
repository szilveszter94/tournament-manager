import { ApiProperty } from '@nestjs/swagger';

export class ConnectMatchDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
}
