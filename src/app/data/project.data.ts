import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
    { id: 'aca', stack: ['PHP', 'Livewire', 'DSFR', 'Java' ], images: ['Image1.png', 'fff.png'] },
    { id: 'dashboard',stack: ['Angular', 'TypeScript'] },
    { id: 'booking', stack: ['Vue.js', 'JavaScript'] },
    { id: 'portfolio', stack: ['Angular', 'Tailwind CSS'], repo: 'https://github.com/votre-compte/portfolio' },
    { id: 'parcoursup', date: '2026-01', stack: ['Kotlin', 'Android'], repo: 'https://github.com/YannisJustine/android_parcoursup' },
    { id: 'trains', date: '2025-01', stack: ['Java', 'REST', 'Tomcat', 'SQLite'], repo: 'https://github.com/LucasJustine/SYIW_24_25' },
    { id: 'ihm', date: '2022-12', stack: ['Java'], repo: 'https://github.com/LucasJustine/IHM' },
    { id: 'jsonInspector', date: '2023-02', stack: ['Java'], repo: 'https://github.com/LucasJustine/JSON_Inspector' },
    { id: 'kickoff', date: '2026-09', stack: [], repo: 'https://github.com/LucasJustine/kickoff-matchup' },
];
