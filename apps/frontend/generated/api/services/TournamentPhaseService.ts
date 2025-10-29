/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse } from '../models/BaseResponse';
import type { GroupStagePhaseDataDto } from '../models/GroupStagePhaseDataDto';
import type { UpdateTournamentAndPhaseDto } from '../models/UpdateTournamentAndPhaseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TournamentPhaseService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Update tournamnet phase
     * @param phaseId
     * @param tournamentId
     * @param requestBody
     * @returns BaseResponse
     * @throws ApiError
     */
    public tournamentPhaseControllerUpdateTournamentPhase(
        phaseId: string,
        tournamentId: string,
        requestBody: UpdateTournamentAndPhaseDto,
    ): CancelablePromise<BaseResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tournamentPhase/{phaseId}/{tournamentId}',
            path: {
                'phaseId': phaseId,
                'tournamentId': tournamentId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create group stage phase for a tournament
     * @param tournamentId
     * @param requestBody
     * @returns BaseResponse
     * @throws ApiError
     */
    public tournamentPhaseControllerAddGrupStageToTournament(
        tournamentId: string,
        requestBody: GroupStagePhaseDataDto,
    ): CancelablePromise<BaseResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tournamentPhase/groupStage/{tournamentId}',
            path: {
                'tournamentId': tournamentId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
