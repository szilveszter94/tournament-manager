import { ApiProperty } from '@nestjs/swagger';

export class UpdateTournamentGroupDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  groupNumber?: number;
  @ApiProperty({
    type: 'boolean',
    default: false,
    required: false,
  })
  isGroupMatchesEnded?: boolean;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    default: new Date().toISOString(),
    required: false,
  })
  createdAt?: Date;
}
