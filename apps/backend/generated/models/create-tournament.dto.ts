import { ParticipantType, TournamentStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTournamentDto {
  @ApiProperty({
    type: 'string',
  })
  name: string;
  @ApiProperty({
    enum: TournamentStatus,
    enumName: 'TournamentStatus',
    default: 'Setup',
    required: false,
  })
  status?: TournamentStatus;
  @ApiProperty({
    enum: ParticipantType,
    enumName: 'ParticipantType',
  })
  type: ParticipantType;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    default: new Date().toISOString(),
    required: false,
  })
  createdAt?: Date;
}
