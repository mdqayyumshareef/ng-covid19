import { SummaryModel } from './summary.model';

export interface CountryModel extends SummaryModel {
    Country: string;
    CountryCode: string;
    Slug: string;
    Date: string;
}
