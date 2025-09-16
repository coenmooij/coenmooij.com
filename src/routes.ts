import { Routes } from '@angular/router';
import { HomePage } from '@coenmooij/pages';
import { PageLayout } from './layout';

export const routes: Routes = [
  {
    path: '', component: PageLayout, children: [
      {path: '', pathMatch: 'full', component: HomePage},
    ],
  },

];
