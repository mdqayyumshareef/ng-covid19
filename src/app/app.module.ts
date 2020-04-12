import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { GlobalSummaryComponent } from './components/global-summary/global-summary.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        GlobalSummaryComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgMaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
