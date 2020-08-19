import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {mergeMap, take} from 'rxjs/operators';
import {ResolverUtilService} from './resolver-util.service';
import {Theme} from '../model/theme.model';
import {ThemeService} from '../service/theme.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeResolver implements Resolve<Theme> {

  constructor(private readonly themeService: ThemeService,
              private resolverUtilService: ResolverUtilService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Theme> | Promise<Theme> | Theme {
    const id = +route.paramMap.get('id');
    if (id) {
      return this.themeService.get(id)
        .pipe(
          take(1),
          mergeMap(theme => {
            if (theme) {
              return of(theme);
            } else {
              return this.resolverUtilService.handleUnresolved('theme', ['admin/theme', id]);
            }
          })
        );
    }
    return this.resolverUtilService.handleUnresolved('theme', ['admin/theme']);
  }

}
