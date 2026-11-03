import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PROJECTS } from '../../data/project.data';
import { Project, projectText } from '../../models/project.model';
import { CardComponent } from '../../components/ui/card/card';
import { ModalComponent } from '../../components/ui/modal/modal';
import { TechIconComponent } from '../../components/ui/tech-icon/tech-icon';

@Component({
    selector: 'app-projects',
    imports: [TranslatePipe, CardComponent, ModalComponent, TechIconComponent],
    templateUrl: './projects.html',
    styles: ':host { display: block; }',
})
export class ProjectsComponent {
    protected readonly projectText = projectText;
    protected readonly projects = PROJECTS;

    protected readonly selected = signal<Project | null>(null);
    protected readonly modalOpen = signal(false);

    protected open(project: Project): void {
        this.selected.set(project);
        this.modalOpen.set(true);
    }
}