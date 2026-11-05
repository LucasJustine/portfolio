import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TechIconComponent } from '../tech-icon/tech-icon';

const MAX_VISIBLE = 3;

@Component({
    selector: 'app-tech-stack',
    imports: [TechIconComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <ul class="flex flex-nowrap items-center gap-x-3">
      @for (tech of shown(); track tech) {
        <li class="flex shrink-0 items-center gap-1.5 text-[13px] text-muted">
          <app-tech-icon [name]="tech" [size]="20" aria-hidden="true" />
          {{ tech }}
        </li>
      }
      @if (hidden().length) {
        <li class="shrink-0 text-[13px] font-medium text-muted" [attr.title]="hidden().join(', ')">
          +{{ hidden().length }}
        </li>
      }
    </ul>
  `,
    styles: ':host { display: block; }',
})
export class TechStackComponent {
    readonly techs = input.required<readonly string[]>();

    protected readonly shown = computed(() => this.techs().slice(0, MAX_VISIBLE));
    protected readonly hidden = computed(() => this.techs().slice(MAX_VISIBLE));
}
