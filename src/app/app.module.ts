import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppRoutingModule} from './app-routing.module';
import {AppConfService} from './shared/service/app-conf.service';
import {httpInterceptorProviders} from './shared/interceptors/interceptors';
import {MatSnackBarModule} from '@angular/material/snack-bar';

export function initializeApp(appConfig: AppConfService) {
  return () => appConfig.getConf();
}

export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr'},
    TranslateModule,
    AppConfService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfService], multi: true
    },
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
