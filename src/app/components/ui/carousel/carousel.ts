import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, computed, input, signal, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-carousel',
    imports: [NgOptimizedImage, TranslatePipe],
    host: { class: 'relative block' },
    template: `
    <div
      #track
      class="flex snap-x snap-mandatory overflow-x-auto border border-border [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      role="group"
      aria-roledescription="carousel"
      [attr.aria-label]="alt()"
      (scroll)="onScroll()"
    >
      @for (src of images(); track src; let i = $index) {
        <div
          class="relative aspect-video w-full shrink-0 snap-center"
          role="group"
          aria-roledescription="slide"
          [attr.aria-label]="i + 1 + ' / ' + images().length"
        >
          <img [ngSrc]="'/images/' + src" fill [alt]="alt()" class="object-fill" />
        </div>
      }
    </div>

    @if (multiple()) {
      <button type="button" class="nav left-2" [disabled]="index() === 0"
        [attr.aria-label]="'carousel.previous' | translate" (click)="go(-1)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-5" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button type="button" class="nav right-2" [disabled]="index() === images().length - 1"
        [attr.aria-label]="'carousel.next' | translate" (click)="go(1)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-5" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 6l6 6-6 6" />
        </svg>
      </button>
      <p class="mt-2 text-center text-xs text-muted" aria-live="polite">
        {{ index() + 1 }} / {{ images().length }}
      </p>
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

    private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');
    protected readonly index = signal(0);
    protected readonly multiple = computed(() => this.images().length > 1);

    protected onScroll(): void {
        const el = this.track().nativeElement;
        this.index.set(Math.round(el.scrollLeft / el.clientWidth));
    }

    protected go(step: -1 | 1): void {
        const el = this.track().nativeElement;
        el.scrollTo({ left: (this.index() + step) * el.clientWidth, behavior: 'smooth' });
    }
}
