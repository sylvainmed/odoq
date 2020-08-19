import {Injectable} from '@angular/core';
import {AbstractOdoqService} from './abstract-odoq.service';
import {HttpClient} from '@angular/common/http';
import {Theme} from '../model/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService extends AbstractOdoqService<Theme> {

  constructor(protected http: HttpClient) {
    super(http);
    this.baseUrl = 'themes';
  }
}
