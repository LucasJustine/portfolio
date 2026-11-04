import { Routes } from '@angular/router';
import { ProjectsComponent } from './sections/projects/projects';
import { SkillsComponent } from './sections/skills/skills';
import { HomeComponent } from './sections/home/home';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'projects', component: ProjectsComponent, data: { breadcrumb: 'breadcrumb.projects' } },
    { path: 'competencies', component: SkillsComponent, data: { breadcrumb: 'breadcrumb.skills' } },
];