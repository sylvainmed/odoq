import {Component, OnInit} from '@angular/core';
import {Quote} from '../../shared/model/quote.model';
import {QuoteService} from '../../shared/service/quote.service';
import {Pageable} from '../../shared/model/paging/pageable.model';
import {Page} from '../../shared/model/paging/page.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mainQuote: any;

  isLoadingQuotes: boolean = true;

  allCards: Array<Quote> = [];

  ngOnInit(): void {
    this.getRandomQuote();
    this.initQuotes();
  }

  index: number = 0;

  constructor(private quoteService: QuoteService) {
  }

  /**
   * Méthode qui renvoi une quote aléatoire pour alimenter le carousel
   */
  getRandomQuote() {
    if (this.index % 2 === 0) {
      this.mainQuote = 'Quand on répète un gros mensonge suffisament souvent, les gens finissent par y croire.';
    } else {
      this.mainQuote = 'C\'est l\'ignorance, et non la connaissance, qui dresse les hommes les uns contre les autres.';
    }
  }

  initQuotes() {
    this.quoteService.search().subscribe((res: Page<Quote>) => {
        this.allCards = res.content;
      },
      (err) => (console.log(err)),
      () => this.isLoadingQuotes = false);
  }

  /**
   * Action du clic sur la quote suivante
   */
  handleNextQuote() {
    console.log('next');
    this.index++;
    this.getRandomQuote();
  }

  /**
   * Action du clic sur la quote précédente
   */
  handleLastQuote() {
    console.log('before');
    this.index++;
    this.getRandomQuote();
  }

}
