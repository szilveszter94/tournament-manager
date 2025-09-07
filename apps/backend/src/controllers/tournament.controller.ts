import { Controller, Get, Param } from '@nestjs/common';
import { TournamentService } from '../services/tournament.service';
import {
  TournamentResponse,
  TournamentsResponse,
} from '../../custom-models/tournament-response';
import { ApiTags, ApiOkResponse, ApiExtraModels } from '@nestjs/swagger';

@ApiTags('tournament')
@ApiExtraModels(TournamentResponse)
@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Get(':id')
  @ApiOkResponse({ type: TournamentResponse, isArray: false })
  findOne(@Param('id') id: number): Promise<TournamentResponse> {
    return this.tournamentService.find(+id);
  }

  @Get()
  @ApiOkResponse({ type: TournamentsResponse, isArray: false })
  findAll(): Promise<TournamentsResponse> {
    return this.tournamentService.findAll();
  }
}
