import { ApiProperty } from '@nestjs/swagger';

export class UpdateTournamentDoubleEliminationDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    default: 1,
    required: false,
  })
  roundNumber?: number;
  @ApiProperty({
    type: 'boolean',
    required: false,
  })
  isActive?: boolean;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    default: new Date().toISOString(),
    required: false,
  })
  createdAt?: Date;
}
