import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  imports: [NgTemplateOutlet],
})
export class ButtonComponent {
  readonly href = input<string>();
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly variant = input<ButtonVariant>('primary');
  readonly active = input(false);
}
