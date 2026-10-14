import { TechName } from '../lib/tech-registry';

export type SkillUsageTag = 'daily' | 'cours' | 'appris' | 'pro';

export interface Skill {
    name: TechName | string;
    tag?: SkillUsageTag;
    featured?: boolean;
}

export interface SkillCategory {
    id: string;
    name: string;
    icon?: string;
    skills: Skill[];
}

export type CategoryTextField = 'name' | 'description';

export const categoryText = (category: SkillCategory, field: CategoryTextField): string =>
    `skills.categories.${category.id}.${field}`;
