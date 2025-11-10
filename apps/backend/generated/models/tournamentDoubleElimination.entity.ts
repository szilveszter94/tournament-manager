import { ApiProperty } from '@nestjs/swagger';
import { TournamentPhase } from './tournamentPhase.entity';
import { ParticipantDoubleElimination } from './participantDoubleElimination.entity';
import { Match } from './match.entity';

export class TournamentDoubleElimination {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  tournamentPhaseId: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  roundNumber: number;
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
    type: () => TournamentPhase,
    required: false,
  })
  tournamentPhase?: TournamentPhase;
  @ApiProperty({
    type: () => ParticipantDoubleElimination,
    isArray: true,
    required: false,
  })
  participantDoubleEliminations?: ParticipantDoubleElimination[];
  @ApiProperty({
    type: () => Match,
    isArray: true,
    required: false,
  })
  matches?: Match[];
}
