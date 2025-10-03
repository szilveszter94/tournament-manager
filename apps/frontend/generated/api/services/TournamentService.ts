/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse } from '../models/BaseResponse';
import type { CreateTournamentDto } from '../models/CreateTournamentDto';
import type { TournamentResponse } from '../models/TournamentResponse';
import type { TournamentsResponse } from '../models/TournamentsResponse';
import type { UpdateTournamentDto } from '../models/UpdateTournamentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TournamentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a tournament by Id
     * @param id
     * @returns TournamentResponse
     * @throws ApiError
     */
    public tournamentControllerFindOne(
        id: number,
    ): CancelablePromise<TournamentResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tournament/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update the tournament by Id
     * @param id
     * @param requestBody
     * @returns TournamentResponse
     * @throws ApiError
     */
    public tournamentControllerUpdate(
        id: number,
        requestBody: UpdateTournamentDto,
    ): CancelablePromise<TournamentResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/tournament/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove a tournament from the database
     * @param id
     * @returns BaseResponse
     * @throws ApiError
     */
    public tournamentControllerDeleteParticipant(
        id: number,
    ): CancelablePromise<BaseResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/tournament/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get all tournaments
     * @param query
     * @param status
     * @param type
     * @param sortBy
     * @param sortOrder
     * @param createdFrom
     * @param createdTo
     * @param updatedFrom
     * @param updatedTo
     * @param itemsPerPage
     * @param currentPage
     * @returns TournamentsResponse
     * @throws ApiError
     */
    public tournamentControllerFindByQuery(
        query?: string,
        status?: Array<string>,
        type?: Array<string>,
        sortBy?: 'name' | 'createdAt' | 'updatedAt' | 'status' | 'type',
        sortOrder?: 'asc' | 'desc',
        createdFrom?: string,
        createdTo?: string,
        updatedFrom?: string,
        updatedTo?: string,
        itemsPerPage?: number,
        currentPage?: number,
    ): CancelablePromise<TournamentsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tournament',
            query: {
                'query': query,
                'status': status,
                'type': type,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'createdFrom': createdFrom,
                'createdTo': createdTo,
                'updatedFrom': updatedFrom,
                'updatedTo': updatedTo,
                'itemsPerPage': itemsPerPage,
                'currentPage': currentPage,
            },
        });
    }
    /**
     * Create a new tournament
     * @param requestBody
     * @returns TournamentResponse
     * @throws ApiError
     */
    public tournamentControllerCreate(
        requestBody: CreateTournamentDto,
    ): CancelablePromise<TournamentResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tournament',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
