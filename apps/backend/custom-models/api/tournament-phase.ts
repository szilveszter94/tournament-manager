import { ApiProperty } from '@nestjs/swagger';
import { PhaseType } from '../../generated/client';

export class ParticipantTournamentGroup {
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
    type: [ParticipantTournamentGroup],
    required: true,
  })
  groups: ParticipantTournamentGroup[];
}

export const phaseOrders: Record<PhaseType, number> = {
  None: 0,
  GroupStage: 1,
  RoundRobin: 2,
  Swiss: 3,
  SingleElimination: 4,
  DoubleElimination: 5,
};
