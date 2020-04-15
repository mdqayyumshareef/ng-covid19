import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.store';
import { CountryModel } from 'src/app/store/models/country.model';
import { selectCountries } from 'src/app/store/selectors/summary.selector';

@Component({
    selector: 'app-country-list',
    templateUrl: './country-list.component.html',
    styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

    countries$: Observable<CountryModel[]>;

    // Paginator
    length: number = 0; // default
    pageIndex: number = 0; // page indexing  starts form zero
    pageSize: number = 8; //default
    pageSizeOptions: number[] = [8, 16, 24];

    public get startIndex(): number {
        return (this.pageIndex * this.pageSize);
    }

    public get endIndex(): number {
        return  this.startIndex + this.pageSize
    }

    // Ng-Models
    filterOption = 1; //default

    constructor(
        private store: Store<AppState>,
    ) { }

    ngOnInit(): void {
        this.getCountries(this.startIndex, this.endIndex, this.filterOption);
    }

    pageEvent(event: any) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.getCountries(this.startIndex, this.endIndex, this.filterOption);
    }

    onChangeFilter(event: any) {
        /**
         * event.value
         * 1 = most confirmed
         * 2 = most deaths
         * 3 = most recovered
         */
        if (this.pageIndex != 0) { this.pageIndex = 0 } // Reset page index
        this.getCountries(this.startIndex, this.endIndex, event.value)
    }

    private getCountries(startIndex: number, endIndex: number, filter: number) {
        this.countries$ = this.store.select(selectCountries).pipe(
            tap(countries => this.length = countries.length),
            map(countries => countries
                .slice()
                .sort((a, b) => {
                    switch (filter) {
                        case 1:
                            return b.TotalConfirmed - a.TotalConfirmed;
                        case 2:
                            return b.TotalDeaths - a.TotalDeaths;
                        case 3:
                            return b.TotalRecovered - a.TotalRecovered;
                        default:
                            return 0;
                    }
                })
                .slice(startIndex, endIndex)
            ),
        );
    }
}
