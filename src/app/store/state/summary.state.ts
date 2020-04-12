import { SummaryModel } from '../models/summary.model';
import { CountryModel } from '../models/country.model';

export interface SummaryState {
    loading: boolean;
    globalSummary: SummaryModel;
    countries: CountryModel[];
    timestamp: string;
    error: Error;
}

export const initialSummaryState: SummaryState = {
    loading: false,
    globalSummary: undefined,
    countries: [],
    timestamp: undefined,
    error: undefined,
}