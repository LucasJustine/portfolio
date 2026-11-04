import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { TechIconComponent } from '../../components/ui/tech-icon/tech-icon';
import { TechName } from '../../lib/tech-registry';

@Component({
    selector: 'app-home',
    imports: [RouterLink, TranslatePipe, TechIconComponent],
    templateUrl: './home.html',
    styles: ':host { display: block; }',
})
export class HomeComponent {
    protected readonly mainStack: TechName[] = ['Angular', 'TypeScript', 'Java', 'PHP', 'Tailwind CSS'];

    protected readonly email = 'prenom.nom@exemple.com';
    protected readonly github = 'https://github.com/votre-compte';
    protected readonly linkedin = 'https://www.linkedin.com/in/votre-compte';
}
