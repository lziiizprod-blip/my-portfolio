import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Photos } from './photos/photos';
import { Videos } from './videos/videos';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home' },
  { path: 'photos', component: Photos, title: 'Photography' },
  { path: 'videos', component: Videos, title: 'Videography' },
  { path: 'contact', component: Contact, title: 'Contact' },
  { path: '**', redirectTo: 'home' } // page inconnue → redirection vers Home
];
