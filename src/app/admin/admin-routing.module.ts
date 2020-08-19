import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {QuoteComponent} from './quote/quote.component';
import {QuoteDetailComponent} from './quote/quote-detail/quote-detail.component';
import {QuoteResolver} from '../shared/resolver/quote.resolver';
import {ThemeComponent} from './theme/theme.component';
import {ThemeDetailComponent} from './theme/theme-detail/theme-detail.component';
import {ThemeResolver} from '../shared/resolver/theme.resolver';

const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [{
    path: 'quote',
    component: QuoteComponent,
    children: [
      {
        path: 'add',
        component: QuoteDetailComponent
      }, {
        path: ':id',
        component: QuoteDetailComponent,
        resolve: {
          objet: QuoteResolver
        },
      }]
  },
    {
      path: 'theme',
      component: ThemeComponent,
      children: [
        {
          path: 'add',
          component: ThemeDetailComponent
        }, {
          path: ':id',
          component: ThemeDetailComponent,
          resolve: {
            objet: ThemeResolver
          },
        }]
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
