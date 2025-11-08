import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photos.html',
  styleUrls: ['./photos.scss']
})
export class Photos {
  categories = [
    {
      name: 'Street Photography',
      description: 'Capturing real life moments from the streets.',
      image: 'assets/images/public/1.jpg'
    },
    {
      name: 'Event Photography',
      description: 'Immortalizing events, concerts, and emotions.',
      image: 'assets/images/public/aa.jpg'
    },
    {
      name: 'Portrait Photography',
      description: 'Expressing people through portraiture.',
      image: 'assets/images/public/aml.jpg'
    }
  ];
}

