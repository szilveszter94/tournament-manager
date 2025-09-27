import { ApiProperty } from '@nestjs/swagger';
import { Tournament } from '../generated/models/tournament.entity';
import { BaseResponse } from './base-response';

export class TournamentResponse extends BaseResponse {
  @ApiProperty({ type: () => Tournament, required: false })
  data?: Tournament;
}

export class TournamentsResponse extends BaseResponse {
  @ApiProperty({ type: () => Tournament, isArray: true, required: false })
  data?: Tournament[];
}
