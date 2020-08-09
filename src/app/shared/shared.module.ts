import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {DatatableComponent} from './component/datatable/datatable.component';
import {GridCardsComponent} from './component/grid-cards/grid-cards.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CarouselComponent} from './component/carousel/carousel.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    DatatableComponent,
    GridCardsComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PageNotFoundComponent,
    DatatableComponent,
    GridCardsComponent,
    CarouselComponent
  ]
})
export class SharedModule {
}
