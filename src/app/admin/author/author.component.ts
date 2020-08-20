import {Component, OnInit} from '@angular/core';
import {AbstractListComponent} from '../../shared/component/abstract-list.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Author} from '../../shared/model/author.model';
import {AuthorService} from '../../shared/service/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent extends AbstractListComponent<Author> implements OnInit {

  constructor(public authorService: AuthorService,
              protected readonly router: Router,
              protected readonly activatedRoute: ActivatedRoute) {
    super(router, activatedRoute);
    this.keyTraduction = 'odoq.admin.author';
  }

  ngOnInit(): void {
  }

}
