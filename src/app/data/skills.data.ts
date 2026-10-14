import { SkillCategory } from '../models/skill.model';

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        id: 'languages',
        name: 'Langages',
        icon: 'languages',
        skills: [
            {
                name: 'PHP',
                tag: 'pro',
                featured: true,
            },
            {
                name: 'Java',
                tag: 'cours',
            },
            {
                name: 'TypeScript',
                tag: 'appris',
            },
            {
                name: 'JavaScript',
                tag: 'cours',
            },
            {
                name: 'HTML5 & CSS3 / SCSS',
                tag: 'cours',
            },
        ],
    },
    {
        id: 'frontend',
        name: 'Frontend',
        icon: 'layout',
        skills: [
            {
                name: 'Angular',
                tag: 'appris',
                featured: true,
            },
            {
                name: 'Vue.js',
                tag: 'appris',
            },
            {
                name: 'Livewire',
                tag: 'pro',
                featured: true,
            },
            {
                name: 'Tailwind CSS',
                tag: 'appris',
            },
        ],
    },
    {
        id: 'backend',
        name: 'Backend',
        icon: 'server',
        skills: [
            {
                name: 'Laravel',
                tag: 'pro',
                featured: true,
            },
            {
                name: 'Spring Boot',
                tag: 'appris',
            },

        ],
    },
    {
        id: 'database',
        name: 'Bases de données & Cache',
        icon: 'database',
        skills: [
            {
                name: 'MySQL',
                tag: 'cours',
                featured: true,
            },
            {
                name: 'Redis',
                tag: 'cours',
            },
        ],
    },
];