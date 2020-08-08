import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatatableComponent} from '../shared/component/datatable/datatable.component';
import {AdminRoutingModule} from './admin-routing.module';
import {QuoteListeComponent} from './quote/quote-liste/quote-liste.component';
import {QuoteModule} from './quote/quote.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DatatableComponent,
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
