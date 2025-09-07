import { ApiProperty } from '@nestjs/swagger';

export class ConnectTournamentDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
}
