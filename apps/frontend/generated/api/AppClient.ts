/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { MatchService } from './services/MatchService';
import { ParticipantService } from './services/ParticipantService';
import { ParticipantTournamentService } from './services/ParticipantTournamentService';
import { TournamentService } from './services/TournamentService';
import { TournamentPhaseService } from './services/TournamentPhaseService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class AppClient {
    public readonly match: MatchService;
    public readonly participant: ParticipantService;
    public readonly participantTournament: ParticipantTournamentService;
    public readonly tournament: TournamentService;
    public readonly tournamentPhase: TournamentPhaseService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '1.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.match = new MatchService(this.request);
        this.participant = new ParticipantService(this.request);
        this.participantTournament = new ParticipantTournamentService(this.request);
        this.tournament = new TournamentService(this.request);
        this.tournamentPhase = new TournamentPhaseService(this.request);
    }
}

