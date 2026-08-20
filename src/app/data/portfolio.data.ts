export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  demo: string;
  github: string;
  gradient: string;
  video?: string;
  videoPreview?: string;
  featured?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface Achievement {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const PROFILE = {
  name: 'Abdullah Zulfiqar',
  title: '.NET Full Stack Developer',
  tagline:
    'Building Scalable Web Applications with ASP.NET Core, Angular, and SQL Server.',
  summary:
    '.NET Full Stack Developer with 1+ years of experience building scalable, production-grade web applications using ASP.NET Core, Angular and SQL Server. Currently pursuing a BS in Information Technology Management. Passionate about clean architecture, problem solving and reliable software delivery.',
  email: 'abdullahzulfiqar137@gmail.com',
  phone: '+92 333 4320471',
  location: 'Lahore, Pakistan',
  linkedin: 'https://www.linkedin.com/in/abdullah-zulfiqar-/',
  github: 'https://github.com/abdullahzulfiqar137',
  resumeUrl: 'assets/resume/Abdullah_Zulfiqar_Resume.pdf',
};

export const EDUCATION = [
  {
    degree: 'BS in Information Technology Management',
    school: 'NCBA&E (National College of Business Administration & Economics)',
    location: 'Lahore, Pakistan',
    period: 'In Progress',
  },
];

export const LANGUAGES = [
  { name: 'English', level: 'Professional Proficiency' },
  { name: 'Urdu', level: 'Native' },
  { name: 'Punjabi', level: 'Native' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'M3 4h18v4H3zM3 10h18v4H3zM3 16h18v4H3z',
    skills: [
      { name: 'Angular', level: 92, icon: 'A' },
      { name: 'TypeScript', level: 90, icon: 'TS' },
      { name: 'JavaScript', level: 88, icon: 'JS' },
      { name: 'HTML5', level: 95, icon: '<>' },
      { name: 'CSS3', level: 92, icon: '#' },
      { name: 'Responsive Web Design', level: 90, icon: 'R' },
    ],
  },
  {
    title: 'Backend',
    icon: 'M4 6h16v12H4z',
    skills: [
      { name: 'ASP.NET Core', level: 90, icon: 'NET' },
      { name: 'C#', level: 92, icon: 'C#' },
      { name: '.NET Core Web API', level: 90, icon: 'API' },
      { name: 'Entity Framework Core', level: 88, icon: 'EF' },
      { name: 'LINQ', level: 86, icon: 'LQ' },
      { name: 'Repository Pattern', level: 85, icon: 'RP' },
      { name: 'RESTful APIs', level: 90, icon: 'REST' },
      { name: 'Code First Approach', level: 87, icon: 'CF' },
    ],
  },
  {
    title: 'Database',
    icon: 'M12 3c4 0 7 1 7 3s-3 3-7 3-7-1-7-3 3-3 7-3z',
    skills: [
      { name: 'SQL Server', level: 88, icon: 'SQL' },
      { name: 'Database Design', level: 86, icon: 'DB' },
      { name: 'SQL Queries', level: 87, icon: 'Q' },
      { name: 'Stored Procedures', level: 84, icon: 'SP' },
      { name: 'CRUD Operations', level: 90, icon: 'CRUD' },
    ],
  },
  {
    title: 'Tools',
    icon: 'M14 7l3 3-9 9H5v-3z',
    skills: [
      { name: 'Visual Studio', level: 88, icon: 'VS' },
      { name: 'VS Code', level: 92, icon: 'VC' },
      { name: 'SSMS', level: 85, icon: 'SS' },
      { name: 'Git', level: 90, icon: 'G' },
      { name: 'GitHub', level: 90, icon: 'GH' },
      { name: 'Postman', level: 88, icon: 'PM' },
      { name: 'Swagger', level: 87, icon: 'SW' },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Awatech Technology Solutions',
    role: 'Full Stack .NET Developer',
    period: '2024 — Present',
    location: 'Lahore, Pakistan',
    responsibilities: [
      'Developed Angular applications with modern, responsive user interfaces',
      'Built REST APIs using ASP.NET Core following clean architecture',
      'Implemented Entity Framework Core Code First with migrations',
      'Designed SQL Server databases with optimized schemas',
      'Performed CRUD operations using Repository and Unit of Work patterns',
      'Optimized application performance through caching, indexing and lazy loading',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'HospitalSaaS',
    tagline: 'Modern hospital management, simplified',
    description:
      'A healthcare SaaS platform designed to streamline day-to-day hospital operations through a modern, intuitive and centralized management experience.',
    tags: ['Healthcare SaaS', 'Hospital Management', 'Dashboard', 'Responsive UI', 'Full Stack'],
    demo: 'https://github.com/abdullahzulfiqar137/HospitalSaaS',
    github: 'https://github.com/abdullahzulfiqar137/HospitalSaaS',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,.42), rgba(14,165,233,.32))',
    video: 'assets/videos/hospital-saas-demo.mp4',
    featured: true,
  },
  {
    title: 'BizOps Platform',
    tagline: 'AI-powered business OS for modern teams',
    description:
      'An AI-powered business operating system featuring an AI project manager, team collaboration, task management and real-time communication for distributed teams.',
    tags: ['SaaS Platform', 'AI Project Manager', 'Team Collaboration', 'Task Management', 'Real-time'],
    demo: 'https://github.com/abdullahzulfiqar137/bizops-platform',
    github: 'https://github.com/abdullahzulfiqar137/bizops-platform',
    gradient: 'linear-gradient(135deg, rgba(123,92,255,.40), rgba(255,79,216,.30))',
    video: 'assets/videos/bizops-platform-demo.mp4',
    videoPreview: 'assets/videos/bizops-platform-preview.mp4',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Web Application Development',
    description:
      'Modern, responsive and accessible web applications built with Angular and a focus on performance.',
    icon: 'M3 4h18v4H3z',
  },
  {
    title: 'REST API Development',
    description:
      'Secure and scalable REST APIs using ASP.NET Core, following best practices and clean architecture.',
    icon: 'M4 7h16v10H4z',
  },
  {
    title: 'Database Design',
    description:
      'Optimized SQL Server schemas, stored procedures and indexing strategies for reliability at scale.',
    icon: 'M12 3c4 0 7 1 7 3s-3 3-7 3-7-1-7-3 3-3 7-3z',
  },
  {
    title: 'Full Stack Development',
    description:
      'Complete product delivery across frontend and backend with seamless integration and CI/CD.',
    icon: 'M9 3v6l-4 8h14l-4-8V3',
  },
  {
    title: 'Software Maintenance',
    description:
      'Ongoing support, refactoring, performance tuning and feature evolution for healthy codebases.',
    icon: 'M12 8a4 4 0 100 8 4 4 0 000-8z',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { value: 1, suffix: '+', label: 'Years Experience', icon: 'M12 8v4l3 3' },
  { value: 2, suffix: '', label: 'Showcased Projects', icon: 'M4 4h16v16H4z' },
  { value: 22, suffix: '+', label: 'Technologies', icon: 'M3 12l9-9 9 9' },
  { value: 100, suffix: '%', label: 'Commitment', icon: 'M12 21s-7-4-7-9a7 7 0 0114 0c0 5-7 9-7 9z' },
];

export const SOCIALS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/abdullahzulfiqar137', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdullah-zulfiqar-/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:abdullahzulfiqar137@gmail.com', icon: 'mail' },
];
