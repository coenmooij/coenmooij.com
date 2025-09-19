import { Routes } from '@angular/router';
import { ComingSoonPage, HomePage } from '@coenmooij/pages';
import { PageLayout } from './layout';

export const routes: Routes = [
  {path: '**', component: ComingSoonPage},
  {
    path: '', component: PageLayout, children: [
      {path: '', pathMatch: 'full', component: HomePage},
    ],
  },

];
