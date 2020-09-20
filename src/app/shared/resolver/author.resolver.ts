import {AuthorService} from '../service/author.service';
import {Author} from '../model/author.model';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {ResolverUtilService} from './resolver-util.service';
import {Observable, of} from 'rxjs';
import {mergeMap, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorResolver implements Resolve<Author> {

  constructor(private readonly authorService: AuthorService,
              private resolverUtilService: ResolverUtilService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Author> | Promise<Author> | Author {
    const id = route.paramMap.get('id');
    if (id) {
      return this.authorService.get(id)
        .pipe(
          take(1),
          mergeMap(author => {
            if (author) {
              return of(author);
            } else {
              return this.resolverUtilService.handleUnresolved('author', ['admin/author', id]);
            }
          })
        );
    }
    return this.resolverUtilService.handleUnresolved('author', ['admin/author']);
  }

}
