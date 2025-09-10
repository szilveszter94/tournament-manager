import { ApiProperty } from '@nestjs/swagger';
import { PlayerTournament } from './playerTournament.entity';
import { PlayerGroup } from './playerGroup.entity';
import { Match } from './match.entity';
import { TournamentWinner } from './tournamentWinner.entity';

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
  elo: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  wins: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  losses: number;
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
    type: () => PlayerTournament,
    isArray: true,
    required: false,
  })
  tournaments?: PlayerTournament[];
  @ApiProperty({
    type: () => PlayerGroup,
    isArray: true,
    required: false,
  })
  groups?: PlayerGroup[];
  @ApiProperty({
    type: () => Match,
    isArray: true,
    required: false,
  })
  matchesAsP1?: Match[];
  @ApiProperty({
    type: () => Match,
    isArray: true,
    required: false,
  })
  matchesAsP2?: Match[];
  @ApiProperty({
    type: () => Match,
    isArray: true,
    required: false,
  })
  matchesWon?: Match[];
  @ApiProperty({
    type: () => TournamentWinner,
    isArray: true,
    required: false,
  })
  podiums?: TournamentWinner[];
}
