import { TournamentStatus, TournamentType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { TournamentPhase } from './tournamentPhase.entity';
import { ParticipantTournament } from './participantTournament.entity';
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
    enum: TournamentStatus,
    enumName: 'TournamentStatus',
  })
  status: TournamentStatus;
  @ApiProperty({
    enum: TournamentType,
    enumName: 'TournamentType',
  })
  type: TournamentType;
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
    isArray: true,
    required: false,
  })
  phases?: TournamentPhase[];
  @ApiProperty({
    type: () => ParticipantTournament,
    isArray: true,
    required: false,
  })
  participants?: ParticipantTournament[];
  @ApiProperty({
    type: () => TournamentWinner,
    isArray: true,
    required: false,
  })
  winners?: TournamentWinner[];
}
