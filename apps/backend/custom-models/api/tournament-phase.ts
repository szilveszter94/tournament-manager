import { ApiProperty } from '@nestjs/swagger';
import { PhaseType } from '../../generated/client';
import { UpdateTournamentDto } from '../../generated/models/update-tournament.dto';
import { UpdateTournamentPhaseDto } from '../../generated/models/update-tournamentPhase.dto';

export class ParticipantTournamentGroupDto {
  @ApiProperty({
    description: 'The name of the group (e.g., Group A, Group B)',
    example: 'Group A',
  })
  name: string;
  @ApiProperty({
    description: 'The order of the group',
    type: Number,
  })
  serialNumber: number;
  @ApiProperty({
    description: 'List of participants belonging to this group',
    type: [Number],
  })
  participantIds: number[];
}

export class GroupStagePhaseDataDto {
  @ApiProperty({
    type: [ParticipantTournamentGroupDto],
    required: true,
  })
  groups: ParticipantTournamentGroupDto[];
}

export class ParticipantIdsDataDto {
  @ApiProperty({
    type: [Number],
    required: true,
  })
  participantIds: number[];
}

export const phaseOrders: Record<PhaseType, number> = {
  None: 0,
  GroupStage: 1,
  RoundRobin: 2,
  Swiss: 3,
  SingleElimination: 4,
  DoubleElimination: 5,
};

export class UpdateTournamentAndPhaseDto {
  @ApiProperty({ type: () => UpdateTournamentDto, required: true })
  tournamentEntity?: UpdateTournamentDto;
  @ApiProperty({ type: () => UpdateTournamentPhaseDto, required: true })
  phaseEntity?: UpdateTournamentPhaseDto;
}
