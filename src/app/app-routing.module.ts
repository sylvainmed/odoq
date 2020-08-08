import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/component/page-not-found/page-not-found.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  // {path: 'login', component: LoginComponent},

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    // canActivateChild: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
    // canActivateChild: [AuthGuard]
  },
  /*{
    path: 'facture',
    loadChildren: () => import('./facture/facture.module').then(m => m.FactureModule),
    canActivateChild: [AuthGuard]
  },*/
  // {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
