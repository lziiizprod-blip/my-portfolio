import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // AJOUTER CETTE LIGNE

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, RouterLink], // AJOUTER RouterLink ici
  templateUrl: './photos.html',
  styleUrls: ['./photos.scss']
})
export class Photos {
  categories = [
    {
      name: 'PFE',
      description: 'Projects and academic work from my final year studies.',
      image: 'assets/images/pfe/1.jpg',
      route: '/photos/pfe'
    },
    {
      name: 'Event Photography',
      description: 'Immortalizing events, concerts, and emotions.',
      image: 'assets/images/public/aml.jpg',
      route: '/photos/events'
    },
    {
      name: 'Portrait Photography',
      description: 'Expressing people through portraiture.',
      image: 'assets/images/public/aml.jpg',
      route: '/photos/portraits'
    }
  ];
}