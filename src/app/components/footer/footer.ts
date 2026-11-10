import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CONTACT } from '../../data/contact.data';

const LINK =
    'text-sm font-medium text-foreground no-underline transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary';

@Component({
    selector: 'app-footer',
    imports: [TranslatePipe],
    host: { class: 'block' },
    template: `
        <footer class="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border py-6">
            <p class="text-sm text-muted">© {{ year }} Lucas Justine</p>
            <nav [attr.aria-label]="'footer.label' | translate">
                <ul class="flex flex-wrap gap-x-5 gap-y-2">
                    <li><a [href]="'mailto:' + contact.email" [class]="link">{{ 'footer.email' | translate }}</a></li>
                    <li><a [href]="contact.github" target="_blank" rel="noopener noreferrer" [class]="link">GitHub</a></li>
                    <li><a [href]="contact.linkedin" target="_blank" rel="noopener noreferrer" [class]="link">LinkedIn</a></li>
                </ul>
            </nav>
        </footer>
    `,
})
export class FooterComponent {
    protected readonly contact = CONTACT;
    protected readonly link = LINK;
    protected readonly year = new Date().getFullYear();
}
