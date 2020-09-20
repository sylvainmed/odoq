import {Component} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {LoaderService} from '../../service/loader.service';

@Component({
  selector: 'app-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent {

  isLoading: Subject<boolean> = this.loaderService.isLoading;
  message: BehaviorSubject<string> = this.loaderService.message;

  constructor(private loaderService: LoaderService) {
  }
}
