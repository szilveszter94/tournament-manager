import { Controller, Get } from '@nestjs/common';
import { TournamentService } from '../services/tournament.service';
import { Tournament } from 'generated/interfaces/tournament.entity';

@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Get(':id')
  findAll(id: number): Promise<Tournament | null> {
    return this.tournamentService.find(id);
  }

  @Get()
  find(): Promise<Tournament[] | null> {
    return this.tournamentService.findAll();
  }
}
