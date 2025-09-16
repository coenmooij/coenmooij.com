import { Component, Input } from '@angular/core';

@Component({
  selector: 'cm-image',
  templateUrl: 'image.component.html',
  styleUrl: 'image.component.scss'
})
export class ImageComponent {
  @Input({required: true}) public url!: string;
  @Input({required: true}) public description!: string;
}
