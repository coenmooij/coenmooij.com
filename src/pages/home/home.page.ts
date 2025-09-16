import { Component } from '@angular/core';
import { BarComponent, SectionComponent } from '@coenmooij/ui';

@Component({
  selector: 'cm-home-page',
  imports: [
    SectionComponent,
    BarComponent,
  ],
  templateUrl: 'home.page.html',
})
export class HomePage {}
