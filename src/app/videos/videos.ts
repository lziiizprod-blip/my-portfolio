import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  standalone: true,
  template: `
    <h1>Vidéos</h1>
    <div class="grid">
      <div class="card">
        <iframe width="100%" height="220"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video demo" frameborder="0"
          allowfullscreen></iframe>
        <div class="caption">Vidéo démo</div>
      </div>
    </div>
  `
})
export class Videos {}
