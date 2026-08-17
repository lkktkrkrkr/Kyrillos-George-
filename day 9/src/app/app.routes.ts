import { Routes } from '@angular/router';
import { About } from './about/about';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: 'about', component: About },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: 'about', pathMatch: 'full' }
];
