import {Injectable} from '@angular/core';
import {AbstractOdoqService} from './abstract-odoq.service';
import {HttpClient} from '@angular/common/http';
import {Author} from '../model/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends AbstractOdoqService<Author> {

  constructor(protected http: HttpClient) {
    super(http);
    this.baseUrl = 'authors';
  }
}
