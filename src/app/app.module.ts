import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { GlobalSummaryComponent } from './components/global-summary/global-summary.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { appEffects, appReducers } from './store/app.store';
import { StoreModule } from '@ngrx/store';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryComponent } from './components/country-list/country/country.component';
import { InternationalNumberPipe } from './pipes/international-number.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        GlobalSummaryComponent,
        CountryListComponent,
        CountryComponent,
        InternationalNumberPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgMaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot(appEffects),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
