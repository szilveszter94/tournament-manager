import { ApiProperty } from '@nestjs/swagger';

export class ConnectPlayerTournamentDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
}
