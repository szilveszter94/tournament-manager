/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tournament } from '../models/Tournament';
import type { TournamentResponse } from '../models/TournamentResponse';
import type { TournamentsResponse } from '../models/TournamentsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TournamentService {
    /**
     * @param id
     * @returns TournamentResponse
     * @throws ApiError
     */
    public static tournamentControllerFindOne(
        id: number,
    ): CancelablePromise<TournamentResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tournament/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns TournamentsResponse
     * @throws ApiError
     */
    public static tournamentControllerFindAll(): CancelablePromise<TournamentsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tournament',
        });
    }
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static tournamentControllerCreate(
        requestBody: Tournament,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tournament',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
