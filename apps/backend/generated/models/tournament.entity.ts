import { TournamentStat } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { TournamentWinner } from './tournamentWinner.entity';
import { TournamentElimination } from './tournamentElimination.entity';
import { TournamentGroup } from './tournamentGroup.entity';
import { PlayerTournament } from './playerTournament.entity';
import { Match } from './match.entity';

export class Tournament {
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
  @ApiProperty({
    type: () => TournamentWinner,
    isArray: true,
    required: false,
  })
  TournamentWinner?: TournamentWinner[];
  @ApiProperty({
    type: () => TournamentElimination,
    isArray: true,
    required: false,
  })
  TournamentElimination?: TournamentElimination[];
  @ApiProperty({
    type: () => TournamentGroup,
    isArray: true,
    required: false,
  })
  TournamentGroup?: TournamentGroup[];
  @ApiProperty({
    type: () => PlayerTournament,
    isArray: true,
    required: false,
  })
  PlayerTournament?: PlayerTournament[];
  @ApiProperty({
    type: () => Match,
    isArray: true,
    required: false,
  })
  Match?: Match[];
}
