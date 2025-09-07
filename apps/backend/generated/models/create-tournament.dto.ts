import { TournamentStat } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTournamentDto {
  @ApiProperty({
    type: 'string',
  })
  name: string;
  @ApiProperty({
    enum: TournamentStat,
    enumName: 'TournamentStat',
    default: 'Setup',
    required: false,
  })
  tournamentStat?: TournamentStat;
  @ApiProperty({
    type: 'boolean',
    default: false,
    required: false,
  })
  isFirstRoundsValid?: boolean;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    default: new Date().toISOString(),
    required: false,
  })
  createdAt?: Date;
}
