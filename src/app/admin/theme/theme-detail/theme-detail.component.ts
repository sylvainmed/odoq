import {Component, OnInit} from '@angular/core';
import {AbstractDetailComponent} from '../../../shared/component/abstract-detail.component';
import {Theme} from '../../../shared/model/theme.model';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {ToasterService} from '../../../shared/service/toaster.service';
import {TraductionService} from '../../../shared/service/traduction.service';
import {ThemeService} from '../../../shared/service/theme.service';

@Component({
  selector: 'app-theme-detail',
  templateUrl: './theme-detail.component.html',
  styleUrls: ['./theme-detail.component.scss']
})
export class ThemeDetailComponent extends AbstractDetailComponent<Theme> implements OnInit {

  constructor(protected readonly activatedRoute: ActivatedRoute,
              protected readonly router: Router,
              protected readonly fb: FormBuilder,
              private readonly themeService: ThemeService,
              protected readonly toasterService: ToasterService,
              protected readonly traductionService: TraductionService) {
    super(activatedRoute, router, fb, toasterService, traductionService);
    this.service = themeService;
    this.listeUrl = 'admin/theme';
  }

  initForm() {
    super.initForm();
    this.formGroup.addControl('id', this.fb.control(this.objet ? this.objet.id : null));
    this.formGroup.addControl('name', this.fb.control(this.objet ? this.objet.name : null));
  }
}
