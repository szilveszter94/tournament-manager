import { Module } from '@nestjs/common';
import { TournamentModule } from './modules/tournament.module';

@Module({
  imports: [TournamentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
