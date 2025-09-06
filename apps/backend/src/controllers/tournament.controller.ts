import { Controller, Get } from '@nestjs/common';
import { TournamentService } from '../services/tournament.service';

@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Get()
  findAll(): string {
    return this.tournamentService.findAll();
  }
}
