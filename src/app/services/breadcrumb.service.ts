import { Service, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { BreadcrumbItem } from '../components/breadcrumb/breadcrumb';

interface Crumb {
    key?: string;      // clé de traduction (data.breadcrumb de la route)
    segment: string;   // segment d'URL, utilisé si aucune clé n'est définie
    path: string;
}

@Service()
export class BreadcrumbService {
    private readonly router = inject(Router);
    private readonly translate = inject(TranslateService);
    private readonly crumbs = signal<Crumb[]>([]);

    readonly items = computed<BreadcrumbItem[]>(() => {
        this.translate.currentLang();

        const crumbs = this.crumbs();
        if (!crumbs.length) {
            return []; 
        }

        return [
            { label: this.translate.instant('breadcrumb.home'), path: '/' },
            ...crumbs.map((crumb) => ({
                label: crumb.key ? this.translate.instant(crumb.key) : crumb.segment,
                path: crumb.path,
            })),
        ];
    });

    constructor() {
        this.router.events
            .pipe(filter((e) => e instanceof NavigationEnd), takeUntilDestroyed())
            .subscribe(() => this.crumbs.set(this.build()));
    }

    private build(): Crumb[] {
        const crumbs: Crumb[] = [];
        let url = '';
        let route: ActivatedRouteSnapshot | null = this.router.routerState.snapshot.root.firstChild;

        while (route) {
            const segment = route.url.map((s) => s.path).join('/');
            if (segment) {
                url += '/' + segment;
                crumbs.push({ key: route.data['breadcrumb'], segment, path: url });
            }
            route = route.firstChild;
        }

        return crumbs;
    }
}