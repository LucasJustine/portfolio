import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../../components/ui/button/button';
import { TechIconComponent } from '../../components/ui/tech-icon/tech-icon';
import { TechName } from '../../lib/tech-registry';
import { CONTACT } from '../../data/contact.data';
import { EDUCATION } from '../../data/education.data';

@Component({
    selector: 'app-home',
    imports: [TranslatePipe, ButtonComponent, TechIconComponent],
    templateUrl: './home.html',
    styles: ':host { display: block; }',
})
export class HomeComponent {
    protected readonly mainStack: TechName[] = ['Laravel', 'PHP', 'TypeScript', 'Java'];

    protected readonly contact = CONTACT;
    protected readonly education = EDUCATION;
}
