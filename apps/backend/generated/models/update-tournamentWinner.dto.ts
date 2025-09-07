import { ApiProperty } from '@nestjs/swagger';

export class UpdateTournamentWinnerDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  place?: number;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    default: new Date().toISOString(),
    required: false,
  })
  createdAt?: Date;
}
