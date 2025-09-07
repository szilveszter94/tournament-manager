/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TournamentListResponse } from '../models/TournamentListResponse';
import type { TournamentResponse } from '../models/TournamentResponse';
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
     * @returns TournamentListResponse
     * @throws ApiError
     */
    public static tournamentControllerFindAll(): CancelablePromise<TournamentListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tournament',
        });
    }
}
