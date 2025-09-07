import { ApiProperty } from '@nestjs/swagger';
import { TournamentWinner } from './tournamentWinner.entity';
import { TournamentElimination } from './tournamentElimination.entity';
import { PlayerTournament } from './playerTournament.entity';
import { Match } from './match.entity';

export class Player {
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
    type: 'integer',
    format: 'int32',
  })
  overallWins: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  overallLosses: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  group: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  test: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  elo: number;
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
  WinnersByeEliminations?: TournamentElimination[];
  @ApiProperty({
    type: () => TournamentElimination,
    isArray: true,
    required: false,
  })
  LosersByeEliminations?: TournamentElimination[];
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
  MatchPlayer1?: Match[];
  @ApiProperty({
    type: () => Match,
    isArray: true,
    required: false,
  })
  MatchPlayer2?: Match[];
  @ApiProperty({
    type: () => Match,
    isArray: true,
    required: false,
  })
  MatchWinner?: Match[];
}
