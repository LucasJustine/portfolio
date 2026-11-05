import { SkillCategory } from '../models/skill.model';

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        id: 'languages',
        name: 'Langages',
        icon: 'languages',
        skills: [
            {
                name: 'PHP',
                tag: 'work',
                featured: true,
            },
            {
                name: 'Java',
                tag: 'course',
            },
            {
                name: 'TypeScript',
                tag: 'selfTaught',
            },
            {
                name: 'JavaScript',
                tag: 'course',
            },
            {
                name: 'HTML5 & CSS3',
                tag: 'course',
            },
            {
                name: 'C',
                tag: 'course',
            },
            {
                name: 'Kotlin',
                tag: 'course',
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
                tag: 'selfTaught',
                featured: true,
            },
            {
                name: 'Vue.js',
                tag: 'selfTaught',
            },
            {
                name: 'Livewire',
                tag: 'work',
                featured: true,
            },
            {
                name: 'Tailwind CSS',
                tag: 'selfTaught',
            },
            {
                name: 'DSFR',
                tag: 'work',
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
                tag: 'work',
                featured: true,
            },
            {
                name: 'Spring Boot',
                tag: 'selfTaught',
            },
            {
                name: 'WebSocket',
                tag: 'course',
            },
            {
                name: 'REST',
                tag: 'course',
            },
            {
                name: 'JWT & OAuth 2.0',
                tag: 'selfTaught',
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
                tag: 'course',
                featured: true,
            },
            {
                name: 'Redis',
                tag: 'course',
            },
        ],
    },
    {
        id: 'tools',
        name: 'Outils & DevOps',
        icon: 'wrench',
        skills: [
            {
                name: 'Git',
                tag: 'daily',
            },
            {
                name: 'Docker',
                tag: 'course',
            },
        ],
    },
];
