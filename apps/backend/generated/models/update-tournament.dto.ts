import { TournamentStatus, TournamentType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTournamentDto {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  name?: string;
  @ApiProperty({
    enum: TournamentStatus,
    enumName: 'TournamentStatus',
    default: 'Setup',
    required: false,
  })
  status?: TournamentStatus;
  @ApiProperty({
    enum: TournamentType,
    enumName: 'TournamentType',
    required: false,
  })
  type?: TournamentType;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    default: new Date().toISOString(),
    required: false,
  })
  createdAt?: Date;
}
