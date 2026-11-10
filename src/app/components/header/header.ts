import { Component, DestroyRef, DOCUMENT, ElementRef, effect, inject, signal, viewChild } from '@angular/core';
import { IsActiveMatchOptions, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Locale, LocalService, Theme } from '../../services/local.service';
import { SegmentedViewComponent, SegmentOption } from '../ui/segmented-view/segmented-view';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    imports: [TranslatePipe, SegmentedViewComponent, RouterLink, RouterLinkActive],
    styles: `
    dialog {
      transform: translateX(100%);
      transition:
        transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
        overlay 300ms allow-discrete,
        display 300ms allow-discrete;
    }
    dialog[open] {
      transform: none;
      @starting-style {
        transform: translateX(100%);
      }
    }
  `,
})
export class HeaderComponent {
    public readonly localService = inject(LocalService);
    private readonly root = inject(DOCUMENT).documentElement;
    private readonly menu = viewChild.required<ElementRef<HTMLDialogElement>>('menu');

    readonly menuOpen = signal(false);

    readonly activeOptions: IsActiveMatchOptions = {
        paths: 'exact',
        fragment: 'exact',
        queryParams: 'ignored',
        matrixParams: 'ignored',
    };

    readonly links = [
        { label: 'header.about', route: '/', fragment: 'a-propos' },
        { label: 'header.education', route: '/', fragment: 'parcours' },
        { label: 'header.projects', route: '/projects', fragment: undefined },
        { label: 'header.skills', route: '/competencies', fragment: undefined },
        { label: 'header.contact', route: '/', fragment: 'contact' },
    ];

    readonly localeOptions: readonly SegmentOption<Locale>[] = [
        { value: 'fr', label: 'FR' },
        { value: 'en', label: 'EN' },
    ];
    readonly themeOptions: readonly SegmentOption<Theme>[] = [
        { value: 'light', label: 'header.lightTheme' },
        { value: 'dark', label: 'header.darkTheme' },
    ];

    constructor() {
        effect(() => {
            const el = this.menu().nativeElement;
            const open = this.menuOpen();
            if (open && !el.open) el.showModal();
            else if (!open && el.open) el.close();
            this.root.classList.toggle('modal-open', open);
        });

        const desktop = matchMedia('(min-width: 720px)');
        const onChange = (e: MediaQueryListEvent) => {
            if (e.matches) this.closeMenu();
        };
        desktop.addEventListener('change', onChange);

        inject(DestroyRef).onDestroy(() => {
            desktop.removeEventListener('change', onChange);
            this.root.classList.remove('modal-open');
        });
    }

    openMenu(): void {
        this.menuOpen.set(true);
    }

    closeMenu(): void {
        this.menuOpen.set(false);
    }
}