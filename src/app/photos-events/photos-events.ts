import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photos-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photos-events.html',
  styleUrl: './photos-events.scss',
})
export class PhotosEvents {
  eventPhotos = [
    { image: 'assets/images/events/event1.jpg', title: 'Concert Night' },
    { image: 'assets/images/events/event2.jpg', title: 'Wedding Celebration' },
    { image: 'assets/images/events/event3.jpg', title: 'Festival Moments' },
    { image: 'assets/images/events/event4.jpg', title: 'Corporate Event' },
    { image: 'assets/images/events/event5.jpg', title: 'Sports Competition' },
    { image: 'assets/images/events/event6.jpg', title: 'Cultural Festival' }
  ];
}