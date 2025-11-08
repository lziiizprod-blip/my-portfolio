import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Photos } from './photos/photos';
import { Videos } from './videos/videos';
import { Contact } from './contact/contact';
import { PhotosPfe } from './photos-pfe/photos-pfe';
import { PhotosEvents } from './photos-events/photos-events';
import { PhotosPortraits } from './photos-portraits/photos-portraits';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home' },
  { path: 'photos', component: Photos, title: 'Photography' },
  { path: 'photos/pfe', component: PhotosPfe, title: 'PFE Gallery' },
  { path: 'photos/events', component: PhotosEvents, title: 'Event Photography' }, // CORRIGÉ
  { path: 'photos/portraits', component: PhotosPortraits, title: 'Portrait Photography' }, // CORRIGÉ
  { path: 'videos', component: Videos, title: 'Videography' },
  { path: 'contact', component: Contact, title: 'Contact' },
  { path: '**', redirectTo: 'home' }
];