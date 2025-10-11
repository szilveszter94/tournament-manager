import { Module } from '@nestjs/common';
import { TournamentModule } from './modules/tournament.module';
import { ConfigModule } from '@nestjs/config';
import { ParticipantModule } from './modules/participant.module';
import { ParticipantTournamentModule } from './modules/participantTournament.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TournamentModule,
    ParticipantModule,
    ParticipantTournamentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
