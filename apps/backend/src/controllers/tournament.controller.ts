import { Controller, Get } from '@nestjs/common';
import { TournamentService } from '../services/tournament.service';
import { ServiceResponse } from 'custom-interfaces/service-response';
import { ApiTags } from '@nestjs/swagger';
import { Tournament } from 'generated/interfaces/tournament.entity';

@ApiTags('tournament')
@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Get(':id')
  findAll(id: number): Promise<ServiceResponse<Tournament>> {
    return this.tournamentService.find(+id);
  }

  @Get()
  find(): Promise<ServiceResponse<Tournament[]>> {
    return this.tournamentService.findAll();
  }
}
