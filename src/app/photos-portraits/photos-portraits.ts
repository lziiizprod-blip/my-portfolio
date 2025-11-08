import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photos-portraits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photos-portraits.html',
  styleUrl: './photos-portraits.scss',
})
export class PhotosPortraits {
  portraitPhotos = [
    { image: 'assets/images/portraits/portrait1.jpg', title: 'Portrait Session 1' },
    { image: 'assets/images/portraits/portrait2.jpg', title: 'Creative Portrait' },
    { image: 'assets/images/portraits/portrait3.jpg', title: 'Studio Portrait' },
    { image: 'assets/images/portraits/portrait4.jpg', title: 'Natural Light' },
    { image: 'assets/images/portraits/portrait5.jpg', title: 'Black & White' },
    { image: 'assets/images/portraits/portrait6.jpg', title: 'Environmental Portrait' }
  ];
}