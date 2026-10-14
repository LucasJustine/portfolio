import { Routes } from '@angular/router';
import { SkillsComponent } from './sections/skills/skills';

export const routes: Routes = [
    { path: 'competencies', component: SkillsComponent, data: { breadcrumb: 'breadcrumb.skills' } },
];