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
    'Dynamic and results-oriented .NET Full Stack Developer with 1+ year of hands-on experience designing and developing robust, scalable web applications. Proficient in high-performance backend systems with ASP.NET Core, C#, Entity Framework Core and SQL Server, and intuitive, responsive frontends with Angular and modern web technologies.',
  email: 'abdullahzulfiqar137@gmail.com',
  phone: '+92 333 4320471',
  location: 'Lahore, Pakistan',
  linkedin: 'https://www.linkedin.com/in/abdullah-zulfiqar-',
  github: 'https://github.com/abdullahzulfiqar137',
  resumeUrl: 'assets/resume/abdullah-zulfiqar-resume.txt',
};

export const EDUCATION = [
  {
    degree: 'BS Information Technology Management (Post ADP)',
    school: 'NCBA&E (National College of Business Administration & Economics)',
    location: 'Lahore, Pakistan',
    period: 'In Progress — 5th Semester',
  },
  {
    degree: 'Associate Degree Program (ADP) in Information Technology Management',
    school: 'Riphah International University',
    location: 'Lahore, Pakistan',
    period: 'Completed',
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
      'Developed highly responsive, user-centric frontend applications using Angular, TypeScript, HTML5, CSS3 and JavaScript',
      'Designed and implemented scalable, secure RESTful APIs using ASP.NET Core and .NET Core Web API',
      'Implemented Entity Framework Core using the Code First approach for efficient ORM-based data management',
      'Designed, optimized and maintained SQL Server databases with proper schema design, indexing and query optimization',
      'Implemented full CRUD operations and integrated RESTful APIs for smooth frontend-backend communication',
      'Troubleshot and resolved critical bugs while optimizing application performance for enterprise solutions',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Student Management System',
    tagline: 'End-to-end academic platform',
    description:
      'A complete student management platform with role-based access, secure JWT authentication, attendance, grades and reporting built on ASP.NET Core Web API and Angular.',
    tags: ['ASP.NET Core Web API', 'Angular', 'SQL Server', 'JWT Authentication'],
    demo: 'https://github.com/abdullahzulfiqar137',
    github: 'https://github.com/abdullahzulfiqar137',
    gradient: 'linear-gradient(135deg, rgba(77,163,255,.35), rgba(123,92,255,.35))',
    featured: true,
  },
  {
    title: 'Inventory Management System',
    tagline: 'Real-time stock control',
    description:
      'A robust inventory and warehouse management system with stock tracking, purchase orders, supplier management and analytics dashboards.',
    tags: ['.NET Core', 'Angular', 'SQL Server'],
    demo: 'https://github.com/abdullahzulfiqar137',
    github: 'https://github.com/abdullahzulfiqar137',
    gradient: 'linear-gradient(135deg, rgba(42,246,255,.30), rgba(77,163,255,.35))',
    featured: true,
  },
  {
    title: 'AI Powered Business OS',
    tagline: 'SaaS for modern teams',
    description:
      'An AI-powered business operating system featuring an AI project manager, team collaboration, task management and real-time communication for distributed teams.',
    tags: ['SaaS Platform', 'AI Project Manager', 'Team Collaboration', 'Task Management', 'Real-time'],
    demo: 'https://github.com/abdullahzulfiqar137',
    github: 'https://github.com/abdullahzulfiqar137',
    gradient: 'linear-gradient(135deg, rgba(123,92,255,.40), rgba(255,79,216,.30))',
    featured: true,
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
  { value: 12, suffix: '+', label: 'Projects Completed', icon: 'M4 4h16v16H4z' },
  { value: 22, suffix: '+', label: 'Technologies Mastered', icon: 'M3 12l9-9 9 9' },
  { value: 18, suffix: '+', label: 'Happy Clients', icon: 'M12 21s-7-4-7-9a7 7 0 0114 0c0 5-7 9-7 9z' },
];

export const SOCIALS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/abdullahzulfiqar137', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdullah-zulfiqar-', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:abdullahzulfiqar137@gmail.com', icon: 'mail' },
];
