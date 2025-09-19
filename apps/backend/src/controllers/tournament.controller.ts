import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TournamentService } from '../services/tournament.service';
import {
  CreateTournamentWithPhaseDto,
  TournamentResponse,
  TournamentsResponse,
} from '../../custom-models/tournament-response';
import {
  ApiTags,
  ApiOkResponse,
  ApiExtraModels,
  ApiBody,
  ApiOperation,
} from '@nestjs/swagger';
import { UpdateTournamentDto } from '../../generated/models/update-tournament.dto';
import { BaseResponse } from '../../custom-models/base-response';

@ApiTags('tournament')
@ApiExtraModels(TournamentResponse)
@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get a tournament by Id' })
  @ApiOkResponse({ type: TournamentResponse, isArray: false })
  findOne(@Param('id') id: number): Promise<TournamentResponse> {
    return this.tournamentService.find(+id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tournaments' })
  @ApiOkResponse({ type: TournamentsResponse, isArray: false })
  findAll(): Promise<TournamentsResponse> {
    return this.tournamentService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new tournament' })
  @ApiOkResponse({ type: TournamentResponse, isArray: false })
  @ApiBody({ type: CreateTournamentWithPhaseDto })
  createWithPhase(
    @Body() entity: CreateTournamentWithPhaseDto,
  ): Promise<TournamentResponse> {
    return this.tournamentService.create(entity);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update the tournament by Id' })
  @ApiOkResponse({ type: TournamentResponse, isArray: false })
  @ApiBody({ type: UpdateTournamentDto })
  update(
    @Param('id') id: number,
    @Body() tournament: UpdateTournamentDto,
  ): Promise<TournamentResponse> {
    return this.tournamentService.update(+id, tournament);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a tournament from the database' })
  @ApiOkResponse({ type: BaseResponse })
  deleteParticipant(@Param('id') id: number): Promise<BaseResponse> {
    return this.tournamentService.delete(id);
  }
}
