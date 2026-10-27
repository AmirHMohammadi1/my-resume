import type { ProjectId } from './types';

export interface ProjectMeta {
  id: ProjectId;
  name: string;
  repo: string; // GitHub repository name under siteConfig.contact.github
  tags: string[];
  featured: boolean;
}

/** Language-independent data for the six featured GitHub projects. */
export const projects: ProjectMeta[] = [
  {
    id: 'hr',
    name: 'HR-Management-System',
    repo: 'HR-Management-System',
    tags: ['Next.js 15', 'NestJS 10', 'TypeScript'],
    featured: true,
  },
  {
    id: 'nexio',
    name: 'nexio-Dashboard',
    repo: 'nexio-Dashboard',
    tags: ['Next.js 16', 'Tailwind CSS 4', 'TypeScript'],
    featured: true,
  },
  {
    id: 'nextui',
    name: 'NEXTUI',
    repo: 'NEXTUI',
    tags: ['Next.js', 'UI Library', 'TypeScript'],
    featured: false,
  },
  {
    id: 'auth',
    name: 'secure-express-auth',
    repo: 'secure-express-auth',
    tags: ['Express.js', 'JWT', 'Security'],
    featured: false,
  },
  {
    id: 'lms',
    name: 'Express-LMS',
    repo: 'Express-LMS',
    tags: ['Node.js', 'Express', 'MVC', 'Bootstrap'],
    featured: false,
  },
  {
    id: 'playground',
    name: 'fullstack-learning-playground',
    repo: 'fullstack-learning-playground',
    tags: ['GraphQL', 'TypeScript', 'REST'],
    featured: false,
  },
];
