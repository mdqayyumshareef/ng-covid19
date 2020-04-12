import { ApiService } from 'src/app/services/api.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from "@ngrx/effects";
import { LoadSummaryAction, SummaryActionTypes, LoadSummarySucessAction, LoadSummaryFailureAction } from '../actions/summary.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class SummaryEffects {

    @Effect()
    loadSummaryAction$ = this.actions$.pipe(
        ofType<LoadSummaryAction>(SummaryActionTypes.LOAD_SUMMARY),
        mergeMap(() => {
            return this.apiService.getSummary().pipe(
                map(result => new LoadSummarySucessAction({response: result})),
                catchError(err => of(new LoadSummaryFailureAction({error: err})))
            )
        })
    )

    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ) {}    
}