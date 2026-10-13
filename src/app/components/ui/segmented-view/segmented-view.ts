import {
    Component,
    DestroyRef,
    ElementRef,
    computed,
    effect,
    inject,
    input,
    output,
    signal,
    viewChild,
    viewChildren,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

export interface SegmentOption<T extends string = string> {
    value: T;
    label: string;
}

@Component({
    selector: 'app-segmented-view',
    templateUrl: './segmented-view.html',
    imports: [TranslatePipe],
    styles: `
    :host {
      display: block;
    }

    .segment-indicator {
      will-change: transform, width;
    }
  `,
})
export class SegmentedViewComponent<T extends string = string> {
    private readonly destroyRef = inject(DestroyRef);

    readonly options = input.required<readonly SegmentOption<T>[]>();
    readonly value = input.required<T>();
    readonly ariaLabel = input('Options');
    readonly valueChange = output<T>();

    private readonly container = viewChild.required<ElementRef<HTMLElement>>('container');
    readonly segmentButtons = viewChildren<ElementRef<HTMLButtonElement>>('segmentButton');

    readonly thumbStyle = signal({ transform: 'translateX(0px)', width: '0px' });
    readonly ready = signal(false);

    readonly selectedIndex = computed(() => {
        const index = this.options().findIndex((option) => option.value === this.value());
        return index < 0 ? 0 : index;
    });

    private resizeObserver?: ResizeObserver;

    constructor() {
        effect(() => {
            const buttons = this.segmentButtons();
            this.value();
            this.options();

            this.resizeObserver?.disconnect();

            if (buttons.length === 0) {
                return;
            }

            this.resizeObserver = new ResizeObserver(() => this.updateThumb());
            this.resizeObserver.observe(this.container().nativeElement);
            buttons.forEach((b) => this.resizeObserver!.observe(b.nativeElement));

            this.updateThumb();

            if (!this.ready()) {
                requestAnimationFrame(() => requestAnimationFrame(() => this.ready.set(true)));
            }
        });

        this.destroyRef.onDestroy(() => this.resizeObserver?.disconnect());
    }

    select(value: T): void {
        if(value === this.value()) {
            const options = this.options();
            let next = this.selectedIndex();
            next = (next + 1) % options.length;
            this.valueChange.emit(options[next].value);
            return;
        }

        if (value !== this.value()) {
            this.valueChange.emit(value);
        }
    }

    onKeydown(event: KeyboardEvent): void {
        const options = this.options();
        if (options.length === 0) return;

        let next = this.selectedIndex();
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                next = (next + 1) % options.length;
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                next = (next - 1 + options.length) % options.length;
                break;
            case 'Home':
                next = 0;
                break;
            case 'End':
                next = options.length - 1;
                break;
            default:
                return;
        }

        event.preventDefault();
        this.select(options[next].value);
        this.segmentButtons()[next]?.nativeElement.focus();
    }

    private updateThumb(): void {
        const button = this.segmentButtons()[this.selectedIndex()]?.nativeElement;
        const container = this.container().nativeElement;

        if (!button) {
            return;
        }

        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();
        const x = buttonRect.left - containerRect.left - container.clientLeft;

        this.thumbStyle.set({
            transform: `translateX(${x}px)`,
            width: `${buttonRect.width}px`,
        });
    }
}