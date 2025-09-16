import { Component } from '@angular/core';
import { FooterComponent, HeaderComponent, ImageComponent, PageComponent } from '@coenmooij/ui';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'cm-page-layout',
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    PageComponent,
    ImageComponent,
  ],
  templateUrl: 'page.layout.html',
})
export class PageLayout {}
