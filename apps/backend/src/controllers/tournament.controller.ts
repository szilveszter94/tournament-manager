import { Controller, Get, Param } from '@nestjs/common';
import { TournamentService } from '../services/tournament.service';
import { TournamentResponse } from '../../custom-interfaces/tournament-response';
import { TournamentListResponse } from '../../custom-interfaces/tournament-list-response';
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
  @ApiOkResponse({ type: TournamentListResponse, isArray: false })
  findAll(): Promise<TournamentListResponse> {
    return this.tournamentService.findAll();
  }
}
