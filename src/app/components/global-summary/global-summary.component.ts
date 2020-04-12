import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadSummaryAction } from 'src/app/store/actions/summary.action';
import { AppState } from 'src/app/store/app.store';
import { CountryModel } from 'src/app/store/models/country.model';
import { SummaryModel } from 'src/app/store/models/summary.model';

@Component({
    selector: 'app-global-summary',
    templateUrl: './global-summary.component.html',
    styleUrls: ['./global-summary.component.scss']
})
export class GlobalSummaryComponent implements OnInit, OnDestroy {

    summary$: Observable<SummaryModel>;
    countries: CountryModel[];
    loading: boolean;
    error: Error;

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {
        this.summary$ = this.store.select(state => state.summary.globalSummary);
        this.store.dispatch(new LoadSummaryAction());
    }

    ngOnDestroy() {

    }
}
