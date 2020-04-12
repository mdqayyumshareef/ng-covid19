import { Action } from '@ngrx/store';
import { SummaryResponse } from '../models/response-models/summary.response';

export enum SummaryActionTypes {
    LOAD_SUMMARY = '[SUMMARY] Load Summary',
    LOAD_SUMMARY_SUCCESS = '[SUMMARY] Load Summary Success',
    LOAD_SUMMARY_FAILURE = '[SUMMARY] Load Summary Failure',
}

export class LoadSummaryAction implements Action {
    readonly type = SummaryActionTypes.LOAD_SUMMARY;
}

export class LoadSummarySucessAction implements Action {
    readonly type = SummaryActionTypes.LOAD_SUMMARY_SUCCESS;
    constructor(
        public payload: { response: SummaryResponse }
    ) { }
}

export class LoadSummaryFailureAction implements Action {
    readonly type = SummaryActionTypes.LOAD_SUMMARY_FAILURE;
    constructor(
        public payload: { error: Error }
    ) { }
}

export type SummaryAction =
    | LoadSummaryAction
    | LoadSummarySucessAction
    | LoadSummaryFailureAction



