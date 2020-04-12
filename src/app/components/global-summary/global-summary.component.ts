import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-global-summary',
    templateUrl: './global-summary.component.html',
    styleUrls: ['./global-summary.component.scss']
})
export class GlobalSummaryComponent implements OnInit {

    constructor(
        private apiSerice: ApiService
    ) { }

    ngOnInit(): void {
        this.apiSerice.getSummary()
            .subscribe((res) => {
                console.log(res);

            }, err => {
                console.error(err);

            })
    }

}
