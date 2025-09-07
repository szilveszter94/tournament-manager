import { TournamentStat } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class TournamentDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
  @ApiProperty({
    type: 'string',
  })
  name: string;
  @ApiProperty({
    enum: TournamentStat,
    enumName: 'TournamentStat',
  })
  tournamentStat: TournamentStat;
  @ApiProperty({
    type: 'boolean',
  })
  isFirstRoundsValid: boolean;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  createdAt: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  updatedAt: Date;
}
