import { PhaseType } from '../client';
import { ApiProperty } from '@nestjs/swagger';
import { TournamentKnockout } from './tournamentKnockout.entity';
import { TournamentGroup } from './tournamentGroup.entity';
import { TournamentDoubleElimination } from './tournamentDoubleElimination.entity';
import { Match } from './match.entity';
import { Tournament } from './tournament.entity';

export class TournamentPhase {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  tournamentId: number;
  @ApiProperty({
    enum: PhaseType,
    enumName: 'PhaseType',
  })
  phaseType: PhaseType;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  order: number;
  @ApiProperty({
    type: 'boolean',
  })
  isCompleted: boolean;
  @ApiProperty({
    type: () => TournamentKnockout,
    required: false,
    nullable: true,
  })
  knockout?: TournamentKnockout | null;
  @ApiProperty({
    type: () => TournamentGroup,
    isArray: true,
    required: false,
  })
  groups?: TournamentGroup[];
  @ApiProperty({
    type: () => TournamentDoubleElimination,
    required: false,
    nullable: true,
  })
  doubleElimination?: TournamentDoubleElimination | null;
  @ApiProperty({
    type: () => Match,
    isArray: true,
    required: false,
  })
  matches?: Match[];
  @ApiProperty({
    type: () => Tournament,
    required: false,
  })
  tournament?: Tournament;
}
