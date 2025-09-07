import { ApiProperty } from '@nestjs/swagger';

export class CreateTournamentGroupDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  groupNumber: number;
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
