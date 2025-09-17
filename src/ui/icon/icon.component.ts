import { Component, Input } from '@angular/core';

@Component({
  selector: 'cm-icon',
  templateUrl: 'icon.component.html',
})
export class IconComponent {
  @Input({required: true}) public icon!: string;
  @Input() public set: 'regular' | 'solid' | 'brands' = 'solid';
}
