import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { LoadSummaryAction } from 'src/app/store/actions/summary.action';
import { AppState } from 'src/app/store/app.store';
import { SummaryModel } from 'src/app/store/models/summary.model';
import { selectSummary } from 'src/app/store/selectors/summary.selector';

@Component({
    selector: 'app-global-summary',
    templateUrl: './global-summary.component.html',
    styleUrls: ['./global-summary.component.scss'],
    animations: [
        trigger('fadeIn', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(1000)
            ])
        ])
    ]
})
export class GlobalSummaryComponent implements OnInit, OnDestroy {

    summary: SummaryModel;
    loading: boolean;
    timestamp: string;
    error: Error;

    private unsubscribe: Subject<any>;

    pieChartData: any[][];
    lineChartData: any[][];

    constructor(
        private store: Store<AppState>
    ) {
        this.unsubscribe = new Subject();
    }

    ngOnInit(): void {
        this.store.select(selectSummary).pipe(
            takeUntil(this.unsubscribe),
            tap(summary => {
                this.summary = summary.globalSummary;
                this.loading = summary.loading;
                this.timestamp = summary.timestamp;
                this.error = summary.error;
            })
        ).subscribe(() => {
            this.pieChartData = [
                ['status', 'value'],
                ['Confirmed', this.summary?.TotalConfirmed],
                ['Recovered', this.summary?.TotalRecovered],
                ['Death', this.summary?.TotalDeaths]
            ];

            this.lineChartData = [
                ['Year', 'Sales', 'Expenses'],
                ['2004', 1000, 400],
                ['2005', 1170, 460],
                ['2006', 660, 1120],
                ['2007', 1030, 540]
            ];
        });
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    onRetry() {
        this.store.dispatch(new LoadSummaryAction());
    }
}
