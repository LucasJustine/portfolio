import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { PROJECTS } from '../../data/project.data';
import { Project, projectText } from '../../models/project.model';
import { ButtonComponent } from '../../components/ui/button/button';
import { CardComponent } from '../../components/ui/card/card';
import { CarouselComponent } from '../../components/ui/carousel/carousel';
import { ModalComponent } from '../../components/ui/modal/modal';
import { ShowMoreComponent } from '../../components/ui/show-more/show-more';
import { TechIconComponent } from '../../components/ui/tech-icon/tech-icon';

@Component({
    selector: 'app-projects',
    imports: [TranslatePipe, ButtonComponent, CardComponent, CarouselComponent, ModalComponent, ShowMoreComponent, TechIconComponent],
    templateUrl: './projects.html',
    styles: ':host { display: block; }',
})
export class ProjectsComponent {
    protected readonly projectText = projectText;
    protected readonly projects = [...PROJECTS].sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));

    protected readonly selected = signal<Project | null>(null);
    protected readonly modalOpen = signal(false);

    protected open(project: Project): void {
        this.selected.set(project);
        this.modalOpen.set(true);
    }
}