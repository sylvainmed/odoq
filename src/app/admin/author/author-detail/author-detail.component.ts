import {Component, OnInit} from '@angular/core';
import {AbstractDetailComponent} from '../../../shared/component/abstract-detail.component';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {ToasterService} from '../../../shared/service/toaster.service';
import {TraductionService} from '../../../shared/service/traduction.service';
import {AuthorService} from '../../../shared/service/author.service';
import {Author} from '../../../shared/model/author.model';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent extends AbstractDetailComponent<Author> implements OnInit {

  constructor(protected readonly activatedRoute: ActivatedRoute,
              protected readonly router: Router,
              protected readonly fb: FormBuilder,
              private readonly authorService: AuthorService,
              protected readonly toasterService: ToasterService,
              protected readonly traductionService: TraductionService) {
    super(activatedRoute, router, fb, toasterService, traductionService);
    this.service = authorService;
    this.listeUrl = 'admin/author';
  }

  initForm() {
    super.initForm();
    this.formGroup.addControl('id', this.fb.control(this.objet ? this.objet.id : null));
    this.formGroup.addControl('name', this.fb.control(this.objet ? this.objet.name : null));
    this.formGroup.addControl('fictional', this.fb.control(this.objet ? this.objet.fictional : null));
    this.formGroup.addControl('source', this.fb.control(this.objet ? this.objet.source : null));
    this.formGroup.addControl('function', this.fb.control(this.objet ? this.objet.function : null));
  }
}
