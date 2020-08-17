import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbstractOdoqService<T> {

  baseUrl: string;

  private _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  search(): Observable<Array<T>> {
    return this._http.get<Array<T>>(`${this.baseUrl}`);
  }

  get(id: number): Observable<T> {
    return this._http.get<T>(`${this.baseUrl}/${id}`);
  }

  create(o: T): Observable<T> {
    return this._http.post<T>(`${this.baseUrl}`, o);
  }

  update(o: T): Observable<T> {
    return this._http.put<T>(`${this.baseUrl}`, o);
  }

  delete(id: number) {
    return this._http.delete(`${this.baseUrl}/${id}`);
  }
}
