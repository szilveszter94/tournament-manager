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
        id: string,
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
        id: string,
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
        id: string,
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
     * @param updatedTo
     * @param updatedFrom
     * @param createdTo
     * @param createdFrom
     * @param sortOrder
     * @param sortBy
     * @param type
     * @param status
     * @param itemsPerPage
     * @param currentPage
     * @param query
     * @returns TournamentsResponse
     * @throws ApiError
     */
    public tournamentControllerFindByQuery(
        updatedTo?: string,
        updatedFrom?: string,
        createdTo?: string,
        createdFrom?: string,
        sortOrder?: 'asc' | 'desc',
        sortBy?: 'name' | 'createdAt' | 'updatedAt' | 'status' | 'type',
        type?: Array<'Individual' | 'Team'>,
        status?: Array<'RegisterPlayers' | 'Started' | 'Over'>,
        itemsPerPage?: number,
        currentPage?: number,
        query?: string,
    ): CancelablePromise<TournamentsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tournament',
            query: {
                'updatedTo': updatedTo,
                'updatedFrom': updatedFrom,
                'createdTo': createdTo,
                'createdFrom': createdFrom,
                'sortOrder': sortOrder,
                'sortBy': sortBy,
                'type': type,
                'status': status,
                'itemsPerPage': itemsPerPage,
                'currentPage': currentPage,
                'query': query,
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
