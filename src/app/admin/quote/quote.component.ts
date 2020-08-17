import {Component, OnInit} from '@angular/core';
import {QuoteService} from '../../shared/service/quote.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  constructor(public quoteService: QuoteService,
              private router: Router,
              protected readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  navigateToDetail(o: any) {
    this.router.navigate([`${o.id}`], {relativeTo: this.activatedRoute}).then();
  }

  navigateToCreation() {
    this.router.navigate([`add`], {relativeTo: this.activatedRoute}).then();
  }

}
