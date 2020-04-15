import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { LoadSummaryAction } from 'src/app/store/actions/summary.action';
import { AppState } from 'src/app/store/app.store';
import { SummaryModel } from 'src/app/store/models/summary.model';
import { selectGlobalSummary, selectSummary } from 'src/app/store/selectors/summary.selector';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-global-summary',
    templateUrl: './global-summary.component.html',
    styleUrls: ['./global-summary.component.scss'],
    animations: [
        trigger('fadeIn', [
            transition('void => *', [
                style({opacity: 0}),
                animate(1000)
            ])
        ])
    ]
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
