import {Component, OnInit} from '@angular/core';

declare const masonry: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allCards = [
    {
      title: 'test',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blanentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
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
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit, lacus eget interdum tempor, tellus puru et tincidunt fringilla. Pellentesque malesuada sit amet enim a vestibulum. Donec a nisl id massa iaculis pellentesque at at lorem. Sed condimentum feugiat nisi ac iaculis. '
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
    }];

  constructor() {
  }

  ngOnInit(): void {
  }


}
