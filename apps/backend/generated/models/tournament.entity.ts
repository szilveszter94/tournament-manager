import { TournamentStat } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Elimination } from './elimination.entity';
import { TournamentGroup } from './tournamentGroup.entity';
import { PlayerTournament } from './playerTournament.entity';
import { Match } from './match.entity';
import { TournamentWinner } from './tournamentWinner.entity';

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
    type: () => Elimination,
    required: false,
    nullable: true,
  })
  elimination?: Elimination | null;
  @ApiProperty({
    type: () => TournamentGroup,
    isArray: true,
    required: false,
  })
  groups?: TournamentGroup[];
  @ApiProperty({
    type: () => PlayerTournament,
    isArray: true,
    required: false,
  })
  players?: PlayerTournament[];
  @ApiProperty({
    type: () => Match,
    isArray: true,
    required: false,
  })
  matches?: Match[];
  @ApiProperty({
    type: () => TournamentWinner,
    isArray: true,
    required: false,
  })
  winners?: TournamentWinner[];
}
