import { SummaryModel } from '../models/summary.model';
import { CountryModel } from '../models/country.model';

export interface SummaryState {
    loading: boolean;
    globalSummary: SummaryModel;
    countries: CountryModel[];
    error: Error;
}

export const initialSummaryState: SummaryState = {
    loading: false,
    globalSummary: {
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths:0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
    },
    countries: [],
    error: undefined,
}