import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.store';
import { LoadSummaryAction } from './store/actions/summary.action';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {
        this.store.dispatch(new LoadSummaryAction());
    }
}
