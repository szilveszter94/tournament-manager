import { Module } from '@nestjs/common';
import { TournamentModule } from './modules/tournament.module';
import { ConfigModule } from '@nestjs/config';
import { ParticipantModule } from './modules/participant.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TournamentModule,
    ParticipantModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
