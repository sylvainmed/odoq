import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuoteListeComponent} from './quote-liste/quote-liste.component';


const routes: Routes = [{
  path: 'quote',
  children: [
    {
      path: '',
      component: QuoteListeComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule {
}
