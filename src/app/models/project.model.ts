import { TechName } from "../lib/tech-registry";

export interface Project {
    id: string;
    stack: TechName[];
    repo?: string;
    demo?: string;
    imgSrc?: string;
    imgWidth?: number;
    imgHeight?: number;
}

export const projectText = (
    project: Project,
    field: 'body' | 'title' | 'description' | 'details',
): string => `projects.items.${project.id}.${field}`;