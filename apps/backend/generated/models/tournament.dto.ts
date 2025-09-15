import { TournamentStatus, TournamentType } from '@prisma/client';
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
}
