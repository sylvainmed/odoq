import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Quote} from '../model/quote.model';
import {Observable, of} from 'rxjs';
import {mergeMap, take} from 'rxjs/operators';
import {QuoteService} from '../service/quote.service';
import {ResolverUtilService} from './resolver-util.service';

@Injectable({
  providedIn: 'root'
})
export class QuoteResolver implements Resolve<Quote> {

  constructor(private readonly quoteService: QuoteService,
              private resolverUtilService: ResolverUtilService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Quote> | Promise<Quote> | Quote {
    const id = +route.paramMap.get('id');
    if (id !== null) {
      return this.quoteService.get(id)
        .pipe(
          take(1),
          mergeMap(quote => {
            if (quote) {
              return of(quote);
            } else {
              return this.resolverUtilService.handleUnresolved('quote', ['quote', id]);
            }
          })
        );
    }
    return this.resolverUtilService.handleUnresolved('quote', ['quote', id]);
  }

}
