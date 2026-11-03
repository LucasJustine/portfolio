import { Routes } from '@angular/router';
import { ProjectsComponent } from './sections/projects/projects';
import { SkillsComponent } from './sections/skills/skills';

export const routes: Routes = [
    { path: 'projects', component: ProjectsComponent, data: { breadcrumb: 'breadcrumb.projects' } },
    { path: 'competencies', component: SkillsComponent, data: { breadcrumb: 'breadcrumb.skills' } },
];