import { Component, computed, input } from '@angular/core';

type TextVariant = 'eyebrow' | 'body' | 'muted' | 'meta';

@Component({
  selector: 'app-text',
  templateUrl: './text.html',
  styles: ':host { display: block; }',
})
export class TextComponent {
  readonly element = input<'p' | 'span' | 'div'>('p');
  readonly variant = input<TextVariant>('body');
  readonly classes = computed(() => ({
    eyebrow: 'text-xs font-bold uppercase tracking-[.12em] text-primary',
    body: 'text-base leading-7 text-muted',
    muted: 'text-sm text-muted',
    meta: 'text-xs tracking-[.08em] text-muted',
  })[this.variant()]);
}
