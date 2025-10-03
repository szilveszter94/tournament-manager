import { ParticipantType } from '../client';
import { ApiProperty } from '@nestjs/swagger';
import { ParticipantTournament } from './participantTournament.entity';
import { ParticipantGroup } from './participantGroup.entity';
import { Match } from './match.entity';
import { TournamentWinner } from './tournamentWinner.entity';

export class Participant {
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
    enum: ParticipantType,
    enumName: 'ParticipantType',
  })
  type: ParticipantType;
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
    type: () => ParticipantTournament,
    isArray: true,
    required: false,
  })
  tournaments?: ParticipantTournament[];
  @ApiProperty({
    type: () => ParticipantGroup,
    isArray: true,
    required: false,
  })
  groups?: ParticipantGroup[];
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
