import { DoubleEliminationBracket } from '../client';
import { ApiProperty } from '@nestjs/swagger';
import { TournamentDoubleElimination } from './tournamentDoubleElimination.entity';
import { Participant } from './participant.entity';

export class ParticipantDoubleElimination {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  tournamentDoubleEliminationId: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  participantId: number;
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
    enum: DoubleEliminationBracket,
    enumName: 'DoubleEliminationBracket',
  })
  doubleEliminationBracket: DoubleEliminationBracket;
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
    type: () => TournamentDoubleElimination,
    required: false,
  })
  elimination?: TournamentDoubleElimination;
  @ApiProperty({
    type: () => Participant,
    required: false,
  })
  participant?: Participant;
}
