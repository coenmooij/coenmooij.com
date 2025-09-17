import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'cm-button',
  imports: [RouterLink, IconComponent, NgIf],
  templateUrl: 'button.component.html',
  styleUrl: 'button.component.scss',
})
export class ButtonComponent {
  @Input() public link?: string;
  @Input() public isFullWidth: boolean = false;
  @Input() public icon?: string;
  @Input() public color: 'blue' | 'orange' | 'green' | 'pink' | 'dark' | 'neutral' | 'yellow' | 'red' | 'brown' = 'blue';
}
