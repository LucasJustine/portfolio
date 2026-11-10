import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../../components/ui/button/button';

@Component({
    selector: 'app-not-found',
    imports: [TranslatePipe, ButtonComponent],
    styles: ':host { display: block; }',
    template: `
        <section class="py-12 sm:py-16" aria-labelledby="not-found-title">
            <h1 id="not-found-title" class="mb-2 text-[clamp(1.75rem,3.6vw,2rem)] leading-[1.1] font-bold tracking-tight">
                {{ 'notFound.title' | translate }}
            </h1>
            <p class="mb-8 max-w-[60ch] text-muted">{{ 'notFound.lead' | translate }}</p>
            <app-button routerLink="/">{{ 'notFound.back' | translate }}</app-button>
        </section>
    `,
})
export class NotFoundComponent {}
