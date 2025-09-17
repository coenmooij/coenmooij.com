import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cm-button',
  imports: [RouterLink],
  templateUrl: 'button.component.html',
  styleUrl: 'button.component.scss',
})
export class ButtonComponent {
  @Input() public link?: string;
  @Input() public isFullWidth: boolean = false;
}
