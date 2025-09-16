import { Component } from '@angular/core';
import { FooterComponent, HeaderComponent } from '@coenmooij/ui';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'cm-page-layout',
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
  ],
  templateUrl: 'page.layout.html',
})
export class PageLayout {}
