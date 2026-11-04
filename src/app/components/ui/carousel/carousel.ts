import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, afterNextRender, computed, input, signal, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

export type CarouselFormat = 'landscape' | 'portrait';

@Component({
    selector: 'app-carousel',
    imports: [NgOptimizedImage, TranslatePipe],
    host: { class: 'relative block', '(window:resize)': 'onScroll()' },
    template: `
    <div
      #track
      class="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      [class]="portrait() ? 'gap-3' : 'border border-border'"
      role="group"
      aria-roledescription="carousel"
      [attr.aria-label]="alt()"
      (scroll)="onScroll()"
    >
      @for (src of images(); track src; let i = $index) {
        <div
          class="relative shrink-0 snap-start bg-background-alt"
          [class]="portrait() ? 'aspect-[9/19.5] w-[calc((100%-1.5rem)/3)] max-sm:w-[calc((100%-0.75rem)/2)]' : 'aspect-video w-full'"
          role="group"
          aria-roledescription="slide"
          [attr.aria-label]="i + 1 + ' / ' + images().length"
        >
          <img [ngSrc]="'/images/' + src" fill [alt]="alt()" [class]="portrait() ? 'object-contain' : 'object-cover'" />
        </div>
      }
    </div>

    @if (canScroll()) {
      <button type="button" class="nav left-2" [disabled]="atStart()"
        [attr.aria-label]="'carousel.previous' | translate" (click)="go(-1)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-5" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button type="button" class="nav right-2" [disabled]="atEnd()"
        [attr.aria-label]="'carousel.next' | translate" (click)="go(1)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-5" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 6l6 6-6 6" />
        </svg>
      </button>
    }
  `,
    styles: `
    .nav {
      position: absolute;
      top: calc(50% - 1.25rem);
      display: flex;
      height: 2.5rem;
      width: 2.5rem;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--color-border);
      background: var(--color-background);
      color: var(--color-foreground);
      transition: background-color 100ms, opacity 100ms;
    }
    .nav:hover:not(:disabled) { background: var(--color-panel-hover); }
    .nav:disabled { opacity: 0.4; cursor: default; }
    .nav:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
  `,
})
export class CarouselComponent {
    readonly images = input.required<string[]>();
    readonly alt = input.required<string>();
    readonly format = input<CarouselFormat>('landscape');

    private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');
    protected readonly portrait = computed(() => this.format() === 'portrait');
    protected readonly atStart = signal(true);
    protected readonly atEnd = signal(true);
    protected readonly canScroll = computed(() => !(this.atStart() && this.atEnd()));

    constructor() {
        afterNextRender(() => this.onScroll());
    }

    protected onScroll(): void {
        const el = this.track().nativeElement;
        this.atStart.set(el.scrollLeft <= 1);
        this.atEnd.set(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    }

    protected go(direction: -1 | 1): void {
        const el = this.track().nativeElement;
        const [first, second] = Array.from(el.children) as HTMLElement[];
        const step = second ? second.offsetLeft - first.offsetLeft : el.clientWidth;
        el.scrollBy({ left: direction * step, behavior: 'smooth' });
    }
}
