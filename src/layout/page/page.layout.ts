import { Component } from '@angular/core';
import { BannerComponent, FooterComponent, HeaderComponent, ImageComponent, PageComponent } from '@coenmooij/ui';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'cm-page-layout',
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    PageComponent,
    ImageComponent,
    BannerComponent,
    RouterLink,
  ],
  templateUrl: 'page.layout.html',
})
export class PageLayout {}
