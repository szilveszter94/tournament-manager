import { ApiProperty } from '@nestjs/swagger';
import { Tournament } from '../generated/models/tournament.entity';
import { BaseResponse } from './base-response';
import { CreateTournamentDto } from '../generated/models/create-tournament.dto';
import { CreateTournamentPhaseDto } from '../generated/models/create-tournamentPhase.dto';

export class CreateTournamentWithPhaseDto {
  @ApiProperty({ type: () => CreateTournamentDto, required: true })
  tournament: CreateTournamentDto;
  @ApiProperty({
    type: () => CreateTournamentPhaseDto,
    isArray: true,
    required: true,
  })
  phases: CreateTournamentPhaseDto[];
}

export class TournamentResponse extends BaseResponse {
  @ApiProperty({ type: () => Tournament, required: false })
  data?: Tournament;
}

export class TournamentsResponse extends BaseResponse {
  @ApiProperty({ type: () => Tournament, isArray: true, required: false })
  data?: Tournament[];
}
