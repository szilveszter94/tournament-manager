import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TournamentService } from '../services/tournament.service';
import {
  TournamentResponse,
  TournamentsResponse,
} from '../../custom-models/tournament-response';
import {
  ApiTags,
  ApiOkResponse,
  ApiExtraModels,
  ApiBody,
} from '@nestjs/swagger';
import { Tournament } from '../../generated/models/tournament.entity';

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

  @Post()
  @ApiOkResponse()
  @ApiBody({ type: Tournament })
  create(@Body() tournament: Tournament): Promise<TournamentResponse> {
    return this.tournamentService.update(tournament);
  }
}
