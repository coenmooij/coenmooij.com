import { Component, Input } from '@angular/core';

@Component({
  selector: 'cm-section',
  templateUrl: 'section.component.html',
  styleUrl: 'section.component.scss'
})
export class SectionComponent {
  @Input() public name?: string;
}
