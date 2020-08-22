import {Component, OnInit} from '@angular/core';
import {AbstractDetailComponent} from '../../../shared/component/abstract-detail.component';
import {Quote} from '../../../shared/model/quote.model';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {Theme} from '../../../shared/model/theme.model';
import {QuoteService} from '../../../shared/service/quote.service';
import {ToasterService} from '../../../shared/service/toaster.service';
import {TraductionService} from '../../../shared/service/traduction.service';
import {Author} from '../../../shared/model/author.model';
import {AuthorService} from '../../../shared/service/author.service';
import {ThemeService} from '../../../shared/service/theme.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss']
})
export class QuoteDetailComponent extends AbstractDetailComponent<Quote> implements OnInit {

  tags: Array<any> = [];

  allThemes: Array<Theme> = [];
  themes: Observable<Array<Theme>>;

  allAuthors: Array<Author> = [];
  authors: Observable<Array<Author>>;

  constructor(protected readonly activatedRoute: ActivatedRoute,
              protected readonly router: Router,
              protected readonly fb: FormBuilder,
              private readonly quoteService: QuoteService,
              private readonly authorService: AuthorService,
              private readonly themeService: ThemeService,
              protected readonly toasterService: ToasterService,
              protected readonly traductionService: TraductionService) {
    super(activatedRoute, router, fb, toasterService, traductionService);
    this.service = quoteService;
    this.listeUrl = 'admin/quote';
  }

  ngOnInit() {
    super.ngOnInit();
  }

  initForm() {
    super.initForm();
    this.formGroup.addControl('id', this.fb.control(this.objet ? this.objet.id : null));
    this.formGroup.addControl('author', this.fb.control(this.objet ? this.objet.author : null, Validators.required));
    this.formGroup.addControl('content', this.fb.control(this.objet ? this.objet.content : null, Validators.required));
    this.formGroup.addControl('date', this.fb.control(this.objet ? this.objet.date : null));
    this.formGroup.addControl('source', this.fb.control(this.objet ? this.objet.source : null));
    this.formGroup.addControl('themes', this.fb.control(this.objet ? this.objet.themes : null));
    this.formGroup.addControl('tags', this.fb.control(this.objet ? this.objet.tags : null));
    this.initAuthors();
    this.initThemes();
  }

  initAuthors() {
    this.authorService.search().subscribe(res => this.allAuthors = res);

    this.authors = this.formGroup.controls['author'].valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filterAuthors(name) : this.allAuthors.slice()));
  }

  initThemes() {
    this.themeService.search().subscribe(res => {
      this.allThemes = res;
    });

    this.themes = this.formGroup.controls['themes'].valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filterThemes(name) : this.allThemes.slice()));
  }


  displayFn(obj: any): string {
    return obj && obj.name ? obj.name : '';
  }

  private _filterThemes(value: string): Theme[] {
    const filterValue = value.toLowerCase();
    return this.allThemes.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  private _filterAuthors(value: string): Author[] {
    const filterValue = value.toLowerCase();
    return this.allAuthors.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
