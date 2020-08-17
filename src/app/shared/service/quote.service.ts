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
      author: 'Molly Ivins',
      content: 'La satire est l\'arme des faibles contre les puissants.',
      dateCreation: new Date(),
      title: 'titre',
      upvote: 15
    },
    {
      id: 2,
      author: 'Winston Churchill',
      content: 'En temps de guerre, la vérité est si précieuse qu\'elle devrait toujours être protégée par un rempart de mensonges.',
      dateCreation: new Date(),
      title: 'titre',
      upvote: 15
    },
    {
      id: 3,
      author: 'Adolf Hitler',
      content: 'L\'art de la propagande consiste à être capable d\'éveiller l\'imagination publique en faisant appel aux sentiments des gens.',
      dateCreation: new Date(),
      title: 'titre',
      upvote: 15
    },
    {
      id: 4,
      author: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit, lacus eget interdum tempor, tellus purus interdum arcu, ac laoreet sapien ex at erat. Quisque elementum felis et tincidunt fringilla. Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. ',
      dateCreation: new Date(),
      title: 'titre',
      upvote: 15
    },
    {
      id: 5,
      author: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. ',
      dateCreation: new Date(),
      title: 'titre',
      upvote: 15
    },
    {
      id: 6,
      author: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. ',
      dateCreation: new Date(),
      title: 'titre',
      upvote: 15
    },
    {
      id: 7,
      author: 'OSS 117',
      content: 'J\'aime me beurrer la biscotte.',
      dateCreation: new Date(),
      title: 'titre',
      upvote: 15
    },
    {
      id: 8,
      author: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit, lacus eget interdum tempor, tellus purus interdum arcu, ac laoreet sapien ex at erat. Quisque elementum felis et tincidunt fringilla. Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. ',
      dateCreation: new Date(),
      title: 'titre',
      upvote: 15
    },
    {
      id: 9,
      author: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit, lacus eget interdum tempor, tellus purus interdum arcu, ac laoreet sapien ex at erat. Quisque elementum felis et tincidunt fringilla. Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. ',
      dateCreation: new Date(),
      title: 'titre',
      upvote: 15
    },
    {
      id: 10,
      author: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.esque at at lorem. Sed condimentum feugiat nisi ac iaculis. ',
      dateCreation: new Date(),
      title: 'titre',
      upvote: 15
    },
    {
      id: 11,
      author: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. ',
      dateCreation: new Date(),
      title: 'titre',
      upvote: 15
    },
    {
      id: 12,
      author: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. ',
      dateCreation: new Date(),
      title: 'titre',
      upvote: 15
    },
    {
      id: 13,
      author: 'Arthur',
      content: 'Non, moi j\'crois qu\'il faut qu’vous arrêtiez d\'essayer d\'dire des trucs. Ça vous fatigue, déjà, et pour les autres, vous vous rendez pas compte de c\'que c\'est. Moi quand vous faites ça, ça me fout une angoisse... j\'pourrais vous tuer, j\'crois. De chagrin, hein ! J\'vous jure c\'est pas bien. Il faut plus que vous parliez avec des gens.',
      dateCreation: new Date(),
      title: 'titre',
      upvote: 15
    },
    {
      id: 14,
      author: 'Léodagan',
      content: 'Bon par exemple moi j\'adore les fraises, bon bah si j\'bouffe 3 bassines de fraises en 1 heure ah bah j\'choppe la chiasse hein, j\'suis comme tout l\'monde hein...',
      dateCreation: new Date(),
      title: 'titre',
      upvote: 15
    },
    {
      id: 15,
      author: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.esque at at lorem. Sed condimentum feugiat nisi ac iaculis. ',
      dateCreation: new Date(),
      title: 'titre',
      upvote: 15
    },
    {
      id: 16,
      author: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. ',
      dateCreation: new Date(),
      title: 'titre',
      upvote: 15
    }];

  /*search(): Observable<Array<Quote>> {
    return of(this.cards);
  }*/

  // Mocké en attendant le back
  get(id: number): Observable<Quote> {
    return of(this.cards[0]);
  }
}
