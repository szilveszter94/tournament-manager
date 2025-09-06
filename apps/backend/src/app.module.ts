import { Module } from '@nestjs/common';
import { TournamentController } from './controllers/tournament.controller';
import { TournamentService } from './services/tournament.service';

@Module({
  imports: [],
  controllers: [TournamentController],
  providers: [TournamentService],
})
export class AppModule {}
