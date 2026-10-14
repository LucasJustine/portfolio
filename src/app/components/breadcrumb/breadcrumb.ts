import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (items().length) {
      <nav aria-label="Fil d'Ariane" class="breadcrumb">
        <ol>
          @for (item of items(); track $index; let last = $last) {
            <li>
              @if (last) {
                <span aria-current="page">{{ item.label }}</span>
              } @else if (item.path) {
                <a [routerLink]="item.path" class="link-underline">{{ item.label }}</a>
              } @else {
                <span>{{ item.label }}</span>
              }
            </li>
          }
        </ol>
      </nav>
    }
  `,
  styles: `
    .breadcrumb {
        margin: 1rem 0 2rem;
    }

    .breadcrumb ol {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .breadcrumb li:not(:last-child)::after {
      content: '/';
      margin-left: 0.5rem;
      opacity: 0.5;
    }
    .breadcrumb a {
      color: inherit;
      text-decoration: none;
    }

    .breadcrumb [aria-current='page'] {
      font-weight: 600;
    }
  `,
})
export class BreadcrumbComponent {
  readonly items = input<BreadcrumbItem[]>([]);
}