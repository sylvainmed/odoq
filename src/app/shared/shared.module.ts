import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {DatatableComponent} from './component/datatable/datatable.component';
import {GridCardsComponent} from './component/grid-cards/grid-cards.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CarouselComponent} from './component/carousel/carousel.component';
import {QuoteCardComponent} from './component/quote-card/quote-card.component';
import {MatTableModule} from '@angular/material/table';
import {ButtonsToolbarComponent} from './component/buttons-toolbar/buttons-toolbar.component';
import {TranslateModule} from '@ngx-translate/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {LoaderComponent} from './component/loader/loader.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    DatatableComponent,
    GridCardsComponent,
    CarouselComponent,
    QuoteCardComponent,
    ButtonsToolbarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    TranslateModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    PageNotFoundComponent,
    DatatableComponent,
    GridCardsComponent,
    CarouselComponent,
    ButtonsToolbarComponent,
    LoaderComponent,
    QuoteCardComponent
  ]
})
export class SharedModule {
}
