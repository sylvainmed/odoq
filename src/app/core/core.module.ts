import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from './core-routing.module';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,

        CoreRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        SharedModule
    ]
})
export class CoreModule {
}
