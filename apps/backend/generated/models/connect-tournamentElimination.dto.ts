import { ApiProperty } from '@nestjs/swagger';

export class ConnectTournamentEliminationDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
}
