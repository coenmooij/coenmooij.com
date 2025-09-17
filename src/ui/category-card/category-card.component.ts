import { Component, Input } from '@angular/core';

@Component({
  selector: 'cm-category-card',
  templateUrl: 'category-card.component.html',
  styleUrl: 'category-card.component.scss',
})
export class CategoryCardComponent {
  @Input({ required: true}) public category!: string;
}
