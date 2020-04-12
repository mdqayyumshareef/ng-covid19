import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private readonly baseURL: string = environment.baseURL;

    constructor(
        private http: HttpClient
    ) { }

    getSummary() {
        return this.http.get(this.baseURL.concat('/summary'));
    }
}
