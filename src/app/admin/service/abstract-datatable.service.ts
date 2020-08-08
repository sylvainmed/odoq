import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Pageable} from '../../shared/model/paging/pageable.model';
import {Page} from '../../shared/model/paging/page.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractDatatableService<T> {

  private _httpClient: HttpClient;

  searchUrl: string;

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  search(pageable: Pageable): Observable<Page<T>>{
    const effectiveUrl = this.addPageableQueryParameters(this.searchUrl, pageable);
    const body = {
    };
    return this._httpClient.post<Page<T>>(effectiveUrl, body);
  }

  addPageableQueryParameters(url: string, pageable: Pageable): string{
    return '';
  }
}
