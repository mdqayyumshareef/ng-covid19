import { createSelector } from '@ngrx/store';
import { AppState } from '../app.store';

export const selectSummary = (state: AppState) => state.summary;
export const selectGlobalSummary = createSelector(selectSummary, state => state.globalSummary);
export const selectCountries = createSelector(selectSummary, state =>  state.countries)