import { Controller, Get, Param } from '@nestjs/common';
import { TournamentService } from '../services/tournament.service';
import {
  ServiceResponse,
  ApiServiceResponse,
} from 'custom-interfaces/service-response';
import { ApiTags, ApiOkResponse, ApiExtraModels } from '@nestjs/swagger';
import { Tournament } from 'generated/models/tournament.entity';

@ApiTags('tournament')
@ApiExtraModels(Tournament, ServiceResponse)
@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Get(':id')
  @ApiOkResponse(ApiServiceResponse(Tournament))
  findOne(@Param('id') id: number): Promise<ServiceResponse<Tournament>> {
    return this.tournamentService.find(+id);
  }

  @Get()
  @ApiOkResponse(ApiServiceResponse(Tournament, true))
  findAll(): Promise<ServiceResponse<Tournament[]>> {
    return this.tournamentService.findAll();
  }
}
