import { NgTemplateOutlet } from '@angular/common';
import {
    Component,
    TemplateRef,
    computed,
    contentChild,
    input,
    signal,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-show-more',
    standalone: true,
    imports: [NgTemplateOutlet, TranslatePipe],
    templateUrl: './show-more.html',
    styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class ShowMoreComponent<T = unknown> {
    readonly items = input.required<readonly T[]>();

    readonly limit = input<number>(3);

    readonly gridClass = input<string>(
        'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'
    );

    readonly forceExpanded = input<boolean>(false);

    readonly moreLabel = input<string>('skills.showMore');

    readonly lessLabel = input<string>('skills.showLess');

    readonly itemTemplate = contentChild<
        TemplateRef<{ $implicit: T; index: number }>
    >('itemTemplate');


    readonly isExpanded = signal<boolean>(false);

    readonly expanded = computed(() => this.forceExpanded() || this.isExpanded());

    readonly visibleItems = computed(() => {
        const list = this.items();
        if (this.expanded() || list.length <= this.limit()) {
            return list;
        }
        return list.slice(0, this.limit());
    });

    readonly hasMore = computed(() => this.items().length > this.limit());

    readonly hiddenCount = computed(() =>
        Math.max(0, this.items().length - this.limit())
    );

    toggle(): void {
        this.isExpanded.update((v) => !v);
    }
}
