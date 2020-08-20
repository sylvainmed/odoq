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
import {MatTableModule} from '@angular/material/table';
import {QuoteDetailComponent} from './quote/quote-detail/quote-detail.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import {ThemeComponent} from './theme/theme.component';
import {ThemeDetailComponent} from './theme/theme-detail/theme-detail.component';
import { AuthorComponent } from './author/author.component';
import { AuthorDetailComponent } from './author/author-detail/author-detail.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    DashboardComponent,
    QuoteComponent,
    AdminMenuComponent,
    QuoteDetailComponent,
    ThemeComponent,
    ThemeDetailComponent,
    AuthorComponent,
    AuthorDetailComponent
  ],
    imports: [
        CommonModule,
        TranslateModule,

        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        ReactiveFormsModule,

        SharedModule,

        MatDatepickerModule,
        MatChipsModule,

        // /!\ à laisser en dernier !
        AdminRoutingModule,
        MatCheckboxModule,
    ]
})
export class AdminModule {
}
