import { Component, computed, input } from '@angular/core';
import { getTechColor, getTechEntry, getTechIconPath, getTechMono, TechName } from '../../../lib/tech-registry';

@Component({
    selector: 'app-tech-icon',
    template: `
    @if (path(); as d) {
      <span
        [title]="name()"
        [attr.aria-label]="name()"
        role="img"
        class="inline-flex shrink-0 items-center justify-center rounded-[5px] shadow-[0_0_0_0.5px_rgba(0,0,0,0.08)_inset]"
        [style.width.px]="size()"
        [style.height.px]="size()"
        [style.background]="color()"
        [style.padding.px]="pad()"
      >
        <svg viewBox="0 0 24 24" class="h-full w-full" [style.fill]="fg()" aria-hidden="true">
          <path [attr.d]="d" />
        </svg>
      </span>
    } @else {
      <span
        [title]="name()"
        class="inline-flex shrink-0 items-center justify-center rounded-[5px] font-mono font-bold tracking-tight shadow-[0_0_0_0.5px_rgba(0,0,0,0.08)_inset]"
        [style.width.px]="size()"
        [style.height.px]="size()"
        [style.background]="color()"
        [style.color]="fg()"
        [style.font-size.px]="fontSize()"
        style="line-height: 1;"
      >
        {{ monogram() }}
      </span>
    }
  `,
    styles: `
    :host {
      display: inline-flex;
      vertical-align: middle;
    }
  `,
})
export class TechIconComponent {
    readonly name = input<TechName | string>('');
    readonly size = input<number>(22);

    protected readonly entry = computed(() => getTechEntry(this.name()));
    protected readonly path = computed(() => getTechIconPath(this.name()));
    protected readonly color = computed(() => getTechColor(this.name()) || 'var(--color-primary, #000091)');
    protected readonly monogram = computed(() => getTechMono(this.name()));
    protected readonly fg = computed(() => this.entry()?.fg || '#ffffff');
    protected readonly pad = computed(() => Math.max(3, Math.round(this.size() * 0.16)));
    protected readonly fontSize = computed(() => Math.round(this.size() * 0.42));
}