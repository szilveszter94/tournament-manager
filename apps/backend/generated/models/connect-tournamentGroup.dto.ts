import { ApiProperty } from '@nestjs/swagger';

export class ConnectTournamentGroupDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
}
