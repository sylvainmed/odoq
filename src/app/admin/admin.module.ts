import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {QuoteModule} from './quote/quote.module';
import {DashboardComponent} from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    QuoteModule,

    AdminRoutingModule
  ]
})
export class AdminModule {
}
