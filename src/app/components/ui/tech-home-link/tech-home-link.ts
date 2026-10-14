import { Component, computed, input } from '@angular/core';
import { getTechHome, TechName } from '../../../lib/tech-registry';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-tech-home-link',
    template: `
    @if (href()) {
      <a
        [href]="href()"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
      >
        <ng-container *ngTemplateOutlet="content" />
      </a>
    } @else {
      <span class="inline-flex items-center gap-1.5">
        <ng-container *ngTemplateOutlet="content" />
      </span>
    }

    <ng-template #content><ng-content /></ng-template>
    
  `,
    styles: `
    :host {
      display: inline-flex;
    }
  `,
    imports: [NgTemplateOutlet],
})
export class TechHomeLinkComponent {
    readonly name = input<TechName | string>('');

    protected readonly href = computed(() => {
        const n = this.name();
        return n ? getTechHome(n) : undefined;
    });
}
