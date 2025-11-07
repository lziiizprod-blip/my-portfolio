import { Routes } from '@angular/router';
import { Photos } from './photos/photos';
import { Videos } from './videos/videos';

export const routes: Routes = [
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: 'photos', component: Photos, title: 'Portfolio — Photos' },
  { path: 'videos', component: Videos, title: 'Portfolio — Vidéos' },
  { path: '**', redirectTo: 'photos' }
];
