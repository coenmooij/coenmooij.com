import { Component } from '@angular/core';
import {
  BarComponent,
  ButtonComponent,
  CategoryCardComponent,
  IconComponent,
  ImageComponent,
  SectionComponent,
} from '@coenmooij/ui';

@Component({
  selector: 'cm-home-page',
  imports: [
    SectionComponent,
    BarComponent,
    ImageComponent,
    IconComponent,
    CategoryCardComponent,
    ButtonComponent,
  ],
  templateUrl: 'home.page.html',
})
export class HomePage {
}
