import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SummaryResponse } from '../models/response-models/summary.response';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private readonly baseURL: string = environment.baseURL;

    constructor(
        private http: HttpClient
    ) { }

    getSummary(): Observable<SummaryResponse> {
        return this.http.get<SummaryResponse>(this.baseURL.concat('/summary'));
    }
}
