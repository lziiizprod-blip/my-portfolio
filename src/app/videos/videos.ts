import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.html',
  styleUrls: ['./videos.scss']
})
export class Videos {
  categories = [
    {
      name: 'Cinematic',
      description: 'Beautifully shot cinematic projects with storytelling and emotion.',
      image: 'assets/images/public/azd.png'
    },
    {
      name: 'Reel',
      description: 'Dynamic short reels perfect for social media and quick storytelling.',
     image: 'assets/images/public/aml.jpg'
    },
    {
      name: 'Clip Video',
      description: 'Music and promotional clips that captivate your audience.',
      image: 'assets/images/public/1717.png'
    }
  ];
}
