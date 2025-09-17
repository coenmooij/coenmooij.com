import { Component } from '@angular/core';
import {
  BarComponent,
  ButtonComponent,
  CategoryCardComponent, FeatureCardComponent,
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
    FeatureCardComponent,
  ],
  templateUrl: 'home.page.html',
})
export class HomePage {
}
