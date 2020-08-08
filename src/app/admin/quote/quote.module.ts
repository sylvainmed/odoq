import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuoteListeComponent} from './quote-liste/quote-liste.component';
import {QuoteRoutingModule} from './quote-routing.module';


@NgModule({
  declarations: [
    QuoteListeComponent
  ],
  imports: [
    CommonModule,

    QuoteRoutingModule
  ]
})
export class QuoteModule {
}
