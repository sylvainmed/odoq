import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from './core-routing.module';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,

    CoreRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ]
})
export class CoreModule {
}
