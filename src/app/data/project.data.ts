import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
    { id: 'aca', date: '2026-07', stack: ['PHP', 'Livewire', 'DSFR', 'Java' ], images: ['aca/presentation.png'] },
    { id: 'booking', date: '2026-01', stack: ['Vue.js', 'JavaScript'] },
    { id: 'portfolio', date: '2026-11', stack: ['Angular', 'Tailwind CSS'], repo: 'https://github.com/votre-compte/portfolio' },
    { id: 'parcoursup', imageFormat: 'portrait', date: '2026-01', stack: ['Kotlin', 'Android'], repo: 'https://github.com/YannisJustine/android_parcoursup', images: ['parcoursup/accueil.jpg', 'parcoursup/formation.jpg', 'parcoursup/map.jpg' ] },
    { id: 'trains', date: '2025-01', stack: ['Java', 'REST', 'Tomcat', 'SQLite'], repo: 'https://github.com/LucasJustine/SYIW_24_25' },
    { id: 'ihm', date: '2022-12', stack: ['Java'], repo: 'https://github.com/LucasJustine/IHM' },
    { id: 'jsonInspector', date: '2023-02', stack: ['Java'], repo: 'https://github.com/LucasJustine/JSON_Inspector' },
    { id: 'kickoff', date: '2026-11', stack: [], repo: 'https://github.com/LucasJustine/kickoff-matchup' },
];
