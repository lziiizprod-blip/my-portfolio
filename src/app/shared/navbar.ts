import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="nav">
      <a class="brand" routerLink="/photos">Mon Portfolio</a>
      <nav>
        <a routerLink="/photos" routerLinkActive="active">Photos</a>
        <a routerLink="/videos" routerLinkActive="active">Vidéos</a>
      </nav>
    </header>
  `,
  styles: [`
    .nav{position:sticky;top:0;display:flex;gap:24px;align-items:center;
      padding:16px 24px;border-bottom:1px solid #eee;background:#fff}
    .brand{font-weight:700;text-decoration:none;color:#111}
    nav a{margin-right:16px;text-decoration:none;color:#444}
    .active{color:#000;font-weight:600;border-bottom:2px solid #000;padding-bottom:2px}
  `]
})
export class NavbarComponent {}
