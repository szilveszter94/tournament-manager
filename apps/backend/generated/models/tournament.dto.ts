import { ParticipantType, PhaseType, TournamentStatus } from '../client';
import { ApiProperty } from '@nestjs/swagger';

export class TournamentDto {
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
    enum: PhaseType,
    enumName: 'PhaseType',
    nullable: true,
  })
  phase: PhaseType | null;
  @ApiProperty({
    enum: TournamentStatus,
    enumName: 'TournamentStatus',
  })
  status: TournamentStatus;
  @ApiProperty({
    enum: ParticipantType,
    enumName: 'ParticipantType',
  })
  type: ParticipantType;
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
}
