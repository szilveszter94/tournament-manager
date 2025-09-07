import { ApiProperty } from '@nestjs/swagger';

export class CreateTournamentWinnerDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  place: number;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    default: new Date().toISOString(),
    required: false,
  })
  createdAt?: Date;
}
