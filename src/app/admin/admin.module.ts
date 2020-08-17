import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {TranslateModule} from '@ngx-translate/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {QuoteComponent} from './quote/quote.component';
import {AdminMenuComponent} from './admin-menu/admin-menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {OdoqListComponent} from './shared/odoq-list/odoq-list.component';
import {MatTableModule} from '@angular/material/table';
import {QuoteDetailComponent} from './quote/quote-detail/quote-detail.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    QuoteComponent,
    AdminMenuComponent,
    OdoqListComponent,
    QuoteDetailComponent
  ],
  imports: [
    CommonModule,

    MatToolbarModule,
    TranslateModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,

    MatSidenavModule,
    MatListModule,
    MatTableModule,
    SharedModule,


    // /!\ à laisser en dernier !
    AdminRoutingModule,
  ]
})
export class AdminModule {
}
