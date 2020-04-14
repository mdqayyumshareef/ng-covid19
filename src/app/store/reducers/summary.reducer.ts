import { SummaryAction, SummaryActionTypes } from '../actions/summary.action';
import { initialSummaryState, SummaryState } from '../state/summary.state';

export function summaryReducer(
    state: SummaryState = initialSummaryState,
    action: SummaryAction
): SummaryState {
    switch (action.type) {
        case SummaryActionTypes.LOAD_SUMMARY:
            return {
                ...state,
                loading: true
            }
        case SummaryActionTypes.LOAD_SUMMARY_SUCCESS:
            const { Global, Countries, Date } = action.payload.response;
            return {
                ...state,
                loading: false,
                globalSummary: Global,
                countries: Countries,
                timestamp: Date,
                error: undefined
            }
        case SummaryActionTypes.LOAD_SUMMARY_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                error: error,
            }
        default:
            return state;
    }
}