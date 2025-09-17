import { Component } from '@angular/core';
import { BarComponent, ImageComponent, SectionComponent } from '@coenmooij/ui';

@Component({
  selector: 'cm-home-page',
  imports: [
    SectionComponent,
    BarComponent,
    ImageComponent,
  ],
  templateUrl: 'home.page.html',
})
export class HomePage {}
