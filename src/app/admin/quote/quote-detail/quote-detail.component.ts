import {Component, OnInit} from '@angular/core';
import {AbstractDetailComponent} from '../../../shared/component/abstract-detail.component';
import {Quote} from '../../../shared/model/quote.model';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Theme} from '../../../shared/model/theme.model';
import {MatChipInputEvent} from '@angular/material/chips';
import {QuoteService} from '../../../shared/service/quote.service';
import {ToasterService} from '../../../shared/service/toaster.service';
import {TraductionService} from '../../../shared/service/traduction.service';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss']
})
export class QuoteDetailComponent extends AbstractDetailComponent<Quote> implements OnInit {

  tags: Array<any> = [];
  themes: Array<Theme> = [];

  constructor(protected readonly activatedRoute: ActivatedRoute,
              protected readonly router: Router,
              protected readonly fb: FormBuilder,
              private readonly quoteService: QuoteService,
              protected readonly toasterService: ToasterService,
              protected readonly traductionService: TraductionService) {
    super(activatedRoute, router, fb, toasterService, traductionService);
    this.service = quoteService;
    this.listeUrl = 'admin/quote';
  }

  ngOnInit() {
    super.ngOnInit();
    this.initForm();
  }

  initForm() {
    super.initForm();
    this.formGroup.addControl('id', this.fb.control(this.objet ? this.objet.id : null));
    this.formGroup.addControl('author', this.fb.control(this.objet ? this.objet.author : null));
    this.formGroup.addControl('title', this.fb.control(this.objet ? this.objet.title : null));
    this.formGroup.addControl('subTitle', this.fb.control(this.objet ? this.objet.subTitle : null));
    this.formGroup.addControl('content', this.fb.control(this.objet ? this.objet.content : null));
    this.formGroup.addControl('date', this.fb.control(this.objet ? this.objet.date : null));
    this.formGroup.addControl('source', this.fb.control(this.objet ? this.objet.source : null));
    this.formGroup.addControl('tags', this.fb.control(this.objet ? this.objet.tags : null));
  }

  /** ajouter un tag dans la liste sélectionnée */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /** Supprimer un tag de la liste sélectionnée */
  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}
