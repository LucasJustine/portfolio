import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

type ButtonVariant = 'primary' | 'secondary';

const BASE =
  'inline-block border px-5 py-3 text-sm font-bold no-underline transition duration-100 active:scale-[.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'border-primary bg-primary text-on-primary hover:bg-primary-hover',
  secondary: 'border-foreground text-foreground hover:bg-panel-hover',
};

@Component({
  selector: 'app-button',
  imports: [NgTemplateOutlet, RouterLink],
  host: { class: 'inline-block' },
  template: `
    @if (routerLink(); as route) {
      <a [routerLink]="route" [class]="classes()"><ng-container *ngTemplateOutlet="content" /></a>
    } @else if (href(); as url) {
      <a
        [href]="url"
        [attr.target]="external() ? '_blank' : null"
        [attr.rel]="external() ? 'noopener noreferrer' : null"
        [attr.download]="download() ? '' : null"
        [class]="classes()"
      ><ng-container *ngTemplateOutlet="content" /></a>
    } @else {
      <button [type]="type()" [class]="classes()"><ng-container *ngTemplateOutlet="content" /></button>
    }

    <ng-template #content><ng-content /></ng-template>
  `,
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly routerLink = input<string | string[]>();
  readonly href = input<string>();
  readonly external = input(false);
  readonly download = input(false);
  readonly type = input<'button' | 'submit' | 'reset'>('button');

  protected readonly classes = computed(() => `${BASE} ${VARIANTS[this.variant()]}`);
}
