import { SummaryModel } from '../summary.model';
import { CountryModel } from '../country.model';

export interface SummaryResponse {
    Global: SummaryModel;
    Countries: CountryModel[];
}