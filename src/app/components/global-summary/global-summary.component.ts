import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { LoadSummaryAction } from 'src/app/store/actions/summary.action';
import { AppState } from 'src/app/store/app.store';
import { CountryModel } from 'src/app/store/models/country.model';
import { SummaryModel } from 'src/app/store/models/summary.model';
import { selectGlobalSummary, selectCountries, selectSummary } from 'src/app/store/selectors/summary.selector';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
    selector: 'app-global-summary',
    templateUrl: './global-summary.component.html',
    styleUrls: ['./global-summary.component.scss']
})
export class GlobalSummaryComponent implements OnInit, OnDestroy {

    summary$: Observable<SummaryModel>;
    loading: boolean;
    timestamp: string;
    error: Error;

    private unsubscribe: Subject<any>;

    constructor(
        private store: Store<AppState>
    ) { 
        this.unsubscribe = new Subject();
    }

    ngOnInit(): void {
        this.summary$ = this.store.select(selectGlobalSummary);
        this.store.select(selectSummary).pipe(
            takeUntil(this.unsubscribe),
            tap(summary => {
                this.loading = summary.loading;
                this.timestamp = summary.timestamp;
                this.error = summary.error;
            })
        ).subscribe();
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    onRetry() {
        this.store.dispatch(new LoadSummaryAction());
    }
}
