import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from './core-routing.module';
import {HomeComponent} from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {TemplateComponent} from './template/template.component';
import {SearchComponent} from './search/search.component';
import {TimelineComponent} from './timeline/timeline.component';
import {TranslateModule} from '@ngx-translate/core';
import {FooterComponent} from './footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {SearchBarComponent} from './search/search-bar/search-bar.component';
import {httpInterceptorProviders} from './interceptors/interceptors';


@NgModule({
  declarations: [HomeComponent, TemplateComponent, SearchComponent, TimelineComponent, FooterComponent, SearchBarComponent],
  imports: [
    CommonModule,

    CoreRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    SharedModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    httpInterceptorProviders
  ]
})
export class CoreModule {
}
