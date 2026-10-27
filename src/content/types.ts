import type { IconName } from '@/components/Icon';

export type ProjectId = 'hr' | 'nexio' | 'nextui' | 'auth' | 'lms' | 'playground';

export interface Dict {
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    services: string;
    skills: string;
    projects: string;
    journey: string;
    blog: string;
    contact: string;
    menu: string;
    closeMenu: string;
    toggleTheme: string;
    switchLang: string;
    switchLangShort: string;
    skip: string;
    primary: string;
  };
  hero: {
    available: string;
    greeting: string;
    name: string;
    roles: string[];
    lead: string;
    ctaProjects: string;
    ctaContact: string;
    ctaResume: string;
    stats: { value: number; suffix: string; label: string }[];
    scroll: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: { icon: IconName; title: string; text: string }[];
    motto: string;
    fact: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { icon: IconName; title: string; text: string; tags: string[] }[];
    cta: string;
    ctaButton: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: { icon: IconName; title: string; items: string[] }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    featured: string;
    code: string;
    allRepos: string;
    items: Record<ProjectId, { text: string }>;
    client: { badge: string; title: string; text: string };
  };
  journey: {
    eyebrow: string;
    title: string;
    experienceTitle: string;
    experience: { title: string; period: string; text: string; points: string[] }[];
    educationTitle: string;
    education: { title: string; text: string }[];
    certsTitle: string;
    certs: { title: string; issuer: string }[];
    nowTitle: string;
    now: string[];
  };
  blog: {
    eyebrow: string;
    title: string;
    intro: string;
    read: string;
    minutes: string;
    back: string;
    empty: string;
    latest: string;
    all: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    email: string;
    telegram: string;
    linkedin: string;
    phone: string;
    github: string;
    copy: string;
    copied: string;
    open: string;
    resumeText: string;
  };
  footer: { rights: string; built: string; top: string };
}
