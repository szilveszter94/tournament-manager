import { PhaseType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Elimination } from './elimination.entity';
import { TournamentGroup } from './tournamentGroup.entity';
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
