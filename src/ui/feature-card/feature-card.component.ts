import { Component, Input } from '@angular/core';

@Component({
  selector: 'cm-feature-card',
  templateUrl: 'feature-card.component.html',
  styleUrl: 'feature-card.component.scss'
})
export class FeatureCardComponent {
  @Input() featureTitle: string = '';
}
