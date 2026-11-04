import { TechName } from "../lib/tech-registry";

export interface Project {
    id: string;
    stack: TechName[];
    /** Format AAAA-MM, sert au tri (plus récent en premier) */
    date?: string;
    repo?: string;
    demo?: string;
    images?: string[];
    imageFormat?: 'landscape' | 'portrait';
}

export const projectText = (
    project: Project,
    field: 'body' | 'title' | 'description' | 'details',
): string => `projects.items.${project.id}.${field}`;