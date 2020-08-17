import {Injectable} from '@angular/core';
import {Quote} from '../model/quote.model';
import {AbstractOdoqService} from './abstract-odoq.service';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService extends AbstractOdoqService<Quote> {

  constructor(protected http: HttpClient) {
    super(http);
    this.baseUrl = 'quotes';
  }

  cards = [
    {
      id: 1,
      title: 'Molly Ivins',
      content: 'La satire est l\'arme des faibles contre les puissants.'
    },
    {
      id: 2,
      title: 'Winston Churchill',
      content: 'En temps de guerre, la vérité est si précieuse qu\'elle devrait toujours être protégée par un rempart de mensonges.'
    },
    {
      id: 3,
      title: 'Adolf Hitler',
      content: 'L\'art de la propagande consiste à être capable d\'éveiller l\'imagination publique en faisant appel aux sentiments des gens.'
    },
    {
      id: 4,
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit, lacus eget interdum tempor, tellus purus interdum arcu, ac laoreet sapien ex at erat. Quisque elementum felis et tincidunt fringilla. Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      id: 5,
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      id: 6,
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      id: 7,
      title: 'OSS 117',
      content: 'J\'aime me beurrer la biscotte.'
    },
    {
      id: 8,
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit, lacus eget interdum tempor, tellus purus interdum arcu, ac laoreet sapien ex at erat. Quisque elementum felis et tincidunt fringilla. Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      id: 9,
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit, lacus eget interdum tempor, tellus purus interdum arcu, ac laoreet sapien ex at erat. Quisque elementum felis et tincidunt fringilla. Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      id: 10,
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.esque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      id: 11,
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      id: 12,
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      id: 13,
      title: 'Arthur',
      content: 'Non, moi j\'crois qu\'il faut qu’vous arrêtiez d\'essayer d\'dire des trucs. Ça vous fatigue, déjà, et pour les autres, vous vous rendez pas compte de c\'que c\'est. Moi quand vous faites ça, ça me fout une angoisse... j\'pourrais vous tuer, j\'crois. De chagrin, hein ! J\'vous jure c\'est pas bien. Il faut plus que vous parliez avec des gens.'
    },
    {
      id: 14,
      title: 'Léodagan',
      content: 'Bon par exemple moi j\'adore les fraises, bon bah si j\'bouffe 3 bassines de fraises en 1 heure ah bah j\'choppe la chiasse hein, j\'suis comme tout l\'monde hein...'
    },
    {
      id: 15,
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.esque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      id: 16,
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    }];

  search(): Observable<Array<Quote>> {
    return of(this.cards);
  }

  // Mocké en attendant le back
  get(id: number): Observable<Quote> {
    return of(this.cards[0]);
  }
}
