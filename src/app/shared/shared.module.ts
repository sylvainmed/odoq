import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {DatatableComponent} from './component/datatable/datatable.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    DatatableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageNotFoundComponent,
    DatatableComponent
  ]
})
export class SharedModule {
}
