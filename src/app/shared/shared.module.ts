import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {DatatableComponent} from './component/datatable/datatable.component';
import { GridCardsComponent } from './component/grid-cards/grid-cards.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    DatatableComponent,
    GridCardsComponent
  ],
    imports: [
        CommonModule,
        MatCardModule
    ],
  exports: [
    PageNotFoundComponent,
    DatatableComponent,
    GridCardsComponent
  ]
})
export class SharedModule {
}
