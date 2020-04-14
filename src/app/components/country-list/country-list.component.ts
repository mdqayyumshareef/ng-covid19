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

    constructor(
        private store: Store<AppState>,
    ) { }

    ngOnInit(): void {
        const startIndex: number = (this.pageIndex * this.pageSize);
        const endIndex: number = (startIndex + this.pageSize);

       this.getCountries(startIndex, endIndex);
    }

    pageEvent(event: any) {
        const startIndex: number = (event.pageIndex * event.pageSize);
        const endIndex: number = (startIndex + event.pageSize);

        this.getCountries(startIndex, endIndex);
    }

    private getCountries(startIndex: number, endIndex: number) {
        this.countries$ = this.store.select(selectCountries).pipe(
            tap(countries => this.length = countries.length),
            map(countries => countries
                .slice()
                .sort((a, b) => (b.TotalConfirmed - a.TotalConfirmed))
                .slice(startIndex, endIndex)
            ),
        );
    }
}
