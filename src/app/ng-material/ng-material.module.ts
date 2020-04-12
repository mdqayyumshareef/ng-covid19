import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

const materialComponents = [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
];

@NgModule({
    imports: [...materialComponents],
    exports: [...materialComponents]

})
export class NgMaterialModule { }
