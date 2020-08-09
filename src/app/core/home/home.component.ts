import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allCards = [
    {
      title: 'Molly Ivins',
      content: 'La satire est l\'arme des faibles contre les puissants.'
    },
    {
      title: 'Winston Churchill',
      content: 'En temps de guerre, la vérité est si précieuse qu\'elle devrait toujours être protégée par un rempart de mensonges.'
    },
    {
      title: 'Adolf Hitler',
      content: 'L\'art de la propagande consiste à être capable d\'éveiller l\'imagination publique en faisant appel aux sentiments des gens.'
    },
    {
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit, lacus eget interdum tempor, tellus purus interdum arcu, ac laoreet sapien ex at erat. Quisque elementum felis et tincidunt fringilla. Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      title: 'OSS 117',
      content: 'J\'aime me beurrer la biscotte.'
    },
    {
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit, lacus eget interdum tempor, tellus purus interdum arcu, ac laoreet sapien ex at erat. Quisque elementum felis et tincidunt fringilla. Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit, lacus eget interdum tempor, tellus purus interdum arcu, ac laoreet sapien ex at erat. Quisque elementum felis et tincidunt fringilla. Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.esque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      title: 'Arthur',
      content: 'Non, moi j\'crois qu\'il faut qu’vous arrêtiez d\'essayer d\'dire des trucs. Ça vous fatigue, déjà, et pour les autres, vous vous rendez pas compte de c\'que c\'est. Moi quand vous faites ça, ça me fout une angoisse... j\'pourrais vous tuer, j\'crois. De chagrin, hein ! J\'vous jure c\'est pas bien. Il faut plus que vous parliez avec des gens.'
    },
    {
      title: 'Léodagan',
      content: 'Bon par exemple moi j\'adore les fraises, bon bah si j\'bouffe 3 bassines de fraises en 1 heure ah bah j\'choppe la chiasse hein, j\'suis comme tout l\'monde hein...'
    },
    {
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.esque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    },
    {
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
    }];

  ngOnInit(): void {
    // pwet
  }


}
