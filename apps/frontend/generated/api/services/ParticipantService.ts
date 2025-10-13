/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse } from '../models/BaseResponse';
import type { CreateParticipantDto } from '../models/CreateParticipantDto';
import type { ParticipantResponse } from '../models/ParticipantResponse';
import type { ParticipantsResponse } from '../models/ParticipantsResponse';
import type { UpdateParticipantDto } from '../models/UpdateParticipantDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ParticipantService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get participants by query and type
     * @param type
     * @param query
     * @returns ParticipantsResponse
     * @throws ApiError
     */
    public participantControllerGetAutocompleteParticipant(
        type: 'Individual' | 'Team',
        query: string,
    ): CancelablePromise<ParticipantsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/participant/autocomplete',
            query: {
                'type': type,
                'query': query,
            },
        });
    }
    /**
     * Get all participants
     * @param lossesTo
     * @param lossesFrom
     * @param winsTo
     * @param winsFrom
     * @param eloTo
     * @param eloFrom
     * @param updatedTo
     * @param updatedFrom
     * @param createdTo
     * @param createdFrom
     * @param sortOrder
     * @param sortBy
     * @param type
     * @param itemsPerPage
     * @param currentPage
     * @param query
     * @returns ParticipantsResponse
     * @throws ApiError
     */
    public participantControllerFindByQuery(
        lossesTo?: string,
        lossesFrom?: string,
        winsTo?: string,
        winsFrom?: string,
        eloTo?: string,
        eloFrom?: string,
        updatedTo?: string,
        updatedFrom?: string,
        createdTo?: string,
        createdFrom?: string,
        sortOrder?: 'asc' | 'desc',
        sortBy?: 'name' | 'type' | 'elo' | 'wins' | 'losses' | 'createdAt' | 'updatedAt',
        type?: Array<'Individual' | 'Team'>,
        itemsPerPage?: number,
        currentPage?: number,
        query?: string,
    ): CancelablePromise<ParticipantsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/participant',
            query: {
                'lossesTo': lossesTo,
                'lossesFrom': lossesFrom,
                'winsTo': winsTo,
                'winsFrom': winsFrom,
                'eloTo': eloTo,
                'eloFrom': eloFrom,
                'updatedTo': updatedTo,
                'updatedFrom': updatedFrom,
                'createdTo': createdTo,
                'createdFrom': createdFrom,
                'sortOrder': sortOrder,
                'sortBy': sortBy,
                'type': type,
                'itemsPerPage': itemsPerPage,
                'currentPage': currentPage,
                'query': query,
            },
        });
    }
    /**
     * Create a new participant
     * @param requestBody
     * @returns ParticipantResponse
     * @throws ApiError
     */
    public participantControllerCreate(
        requestBody: CreateParticipantDto,
    ): CancelablePromise<ParticipantResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/participant',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a participant by Id
     * @param id
     * @returns ParticipantResponse
     * @throws ApiError
     */
    public participantControllerFindOne(
        id: string,
    ): CancelablePromise<ParticipantResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/participant/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update the participant by Id
     * @param id
     * @param requestBody
     * @returns ParticipantResponse
     * @throws ApiError
     */
    public participantControllerUpdate(
        id: string,
        requestBody: UpdateParticipantDto,
    ): CancelablePromise<ParticipantResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/participant/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove a participant from the database
     * @param id
     * @returns BaseResponse
     * @throws ApiError
     */
    public participantControllerDeleteParticipant(
        id: string,
    ): CancelablePromise<BaseResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/participant/{id}',
            path: {
                'id': id,
            },
        });
    }
}
