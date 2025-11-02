import { ApiProperty } from '@nestjs/swagger';

export class UpdateTournamentGroupDto {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  name?: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  groupNumber?: number;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    default: new Date().toISOString(),
    required: false,
  })
  createdAt?: Date;
}
