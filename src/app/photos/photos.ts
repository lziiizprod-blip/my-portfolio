import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Galerie Photos</h1>
    <div class="grid">
      <div class="card" *ngFor="let n of [1,2,3,4,5,6]">
        <img src="https://picsum.photos/seed/{{n}}/800/600" alt="Photo {{n}}">
        <div class="caption">Photo {{n}}</div>
      </div>
    </div>
  `
})
export class Photos {}
