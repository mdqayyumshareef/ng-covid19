import { SummaryState, initialSummaryState } from './state/summary.state';
import { SummaryEffects } from './effects/summary.effects';
import { ActionReducerMap } from '@ngrx/store';
import { summaryReducer } from './reducers/summary.reducer';

// App State

export interface AppState {
    summary: SummaryState
}

export const initialAppState: AppState = {
    summary: initialSummaryState
} 

// App Reducers

export const appReducers: ActionReducerMap<AppState, any> = {
    summary: summaryReducer
}

// App Effects

export const appEffects = [
    SummaryEffects
];