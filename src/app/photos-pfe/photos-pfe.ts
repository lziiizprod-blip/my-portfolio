import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photos-pfe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photos-pfe.html',
  styleUrl: './photos-pfe.scss',
})
export class PhotosPfe {
  pfePhotos = [
    { image: 'assets/images/pfe/1.jpg', title: 'PFE Project 1' },
    { image: 'assets/images/pfe/2.jpg', title: 'PFE Project 2' },
    { image: 'assets/images/pfe/3.jpg', title: 'PFE Project 3' },
    { image: 'assets/images/pfe/4.jpg', title: 'PFE Project 4' },
    { image: 'assets/images/pfe/5.jpg', title: 'PFE Project 5' },
    { image: 'assets/images/pfe/6.jpg', title: 'PFE Project 6' }
  ];
}