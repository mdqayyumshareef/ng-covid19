import { Component, OnInit, Input } from '@angular/core';
import { CountryModel } from 'src/app/store/models/country.model';

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

    @Input()
    country: CountryModel;

    constructor() { }

    ngOnInit(): void {
    }

}
