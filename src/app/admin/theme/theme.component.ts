import {Component, OnInit} from '@angular/core';
import {AbstractListComponent} from '../../shared/component/abstract-list.component';
import {Theme} from '../../shared/model/theme.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ThemeService} from '../../shared/service/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent extends AbstractListComponent<Theme> implements OnInit {

  constructor(public themeService: ThemeService,
              protected readonly router: Router,
              protected readonly activatedRoute: ActivatedRoute) {
    super(router, activatedRoute);
  }

  ngOnInit(): void {
  }

}
