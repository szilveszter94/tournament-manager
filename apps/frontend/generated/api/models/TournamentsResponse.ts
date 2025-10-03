/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pagination } from './Pagination';
import type { Tournament } from './Tournament';
export type TournamentsResponse = {
    ok: boolean;
    error?: string;
    data?: Array<Tournament>;
    pagination?: Pagination;
};

