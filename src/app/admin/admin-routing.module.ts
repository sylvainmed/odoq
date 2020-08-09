import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {QuoteListeComponent} from './quote/quote-liste/quote-liste.component';


const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [{
    path: 'quote',
    component: QuoteListeComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
