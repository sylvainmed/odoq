import {AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Subscription} from 'rxjs';
import {Quote} from '../../model/quote.model';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.scss']
})
export class GridCardsComponent implements AfterViewInit, OnDestroy {

  private subscriptions = new Subscription();

  @ViewChildren('masonryBrick') gridCells: QueryList<ElementRef>;
  @ViewChild('masonry') grid: ElementRef;

  @Input() cardsList: Array<Quote>;

  @HostListener('window:resize')
  reloadMasonry() {
    this.masonry(10, 3, 2, 1);
  }

  ngAfterViewInit(): void {
    // on écoute les changements du tableau de cards affichés à l'écran, si il change, on recalcule la hauteur du conteneur
    this.subscriptions.add(
      this.gridCells.changes.subscribe(() => {
        this.reloadMasonry();
      }));
  }

  /**
   * Calcul la hauteur nécessaire pour afficher correctement toutes les cards
   * @param gridGutter
   * @param dGridCol
   * @param tGridCol
   * @param mGridCol
   */
  masonry(gridGutter: number, dGridCol: number, tGridCol: number, mGridCol: number) {
    if (this.gridCells && this.gridCells.length > 0) {
      const gcLength = this.gridCells.length; // Total number of cells in the masonry
      let gHeight = 0; // Initial height of our masonry
      // Calculate the net height of all the cells in the masonry
      this.gridCells.forEach(elem => {
        gHeight += elem.nativeElement.offsetHeight + gridGutter;
      });
      /*
       * Calculate and set the masonry height based on the columns
       * provided for big, medium, and small screen devices.
       */
      if (window.screen.width >= 1024) {
        this.grid.nativeElement.style.height = gHeight / dGridCol + gHeight / (gcLength + 1) + 'px';
      } else if (window.screen.width < 1024 && window.screen.width >= 768) {
        this.grid.nativeElement.style.height = gHeight / tGridCol + gHeight / (gcLength + 1) + 'px';
      } else {
        this.grid.nativeElement.style.height = gHeight / mGridCol + gHeight / (gcLength + 1) + 'px';
      }
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
