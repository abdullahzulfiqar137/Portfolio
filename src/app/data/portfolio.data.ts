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

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  grade?: string;
}

export const PROFILE = {
  name: 'Abdullah Zulfiqar',
  title: '.NET Full Stack Developer',
  tagline:
    'Building Scalable Web Applications with ASP.NET Core (.NET 8), Angular & SQL Server.',
  summary:
    'Results-driven .NET Full Stack Developer with 1+ year of hands-on experience designing and delivering scalable web applications using C#, ASP.NET Core (.NET 8), Angular, TypeScript, Entity Framework Core, and SQL Server. Experienced in architecting secure RESTful APIs, implementing Repository & Clean Architecture patterns, optimizing database queries, and developing responsive Single Page Applications (SPAs). Focused on writing maintainable, clean code, optimizing performance, and building reliable enterprise software.',
  email: 'abdullahzulfiqar137@gmail.com',
  phone: '+92 333 4320471',
  location: 'Lahore, Pakistan',
  linkedin: 'https://www.linkedin.com/in/abdullah-zulfiqar-/',
  github: 'https://github.com/abdullahzulfiqar137',
  resumeUrl: 'assets/resume/Abdullah_Zulfiqar_Resume.pdf',
};

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Information Technology and Management',
    school: 'National College of Business Administration and Economics (NCBA&E)',
    location: 'Lahore, Pakistan',
    period: 'Expected 2027',
  },
  {
    degree: 'Associate Degree Program (ADP) in Information Technology Management',
    school: 'Riphah International University',
    location: 'Lahore, Pakistan',
    period: 'Completed (2022 – 2024)',
  },
];

export const LANGUAGES = [
  { name: 'English', level: 'Professional Working' },
  { name: 'Urdu', level: 'Native' },
  { name: 'Punjabi', level: 'Native' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend Development',
    icon: 'M4 6h16v12H4zM4 10h16M10 14h6',
    skills: [
      { name: 'C#', level: 94, icon: 'C#' },
      { name: '.NET 8 / ASP.NET Core', level: 92, icon: 'NET' },
      { name: '.NET Web API', level: 92, icon: 'API' },
      { name: 'Entity Framework Core (Code-First)', level: 90, icon: 'EF' },
      { name: 'LINQ', level: 88, icon: 'LQ' },
      { name: 'RESTful APIs', level: 92, icon: 'REST' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: 'M3 4h18v4H3zM3 10h18v4H3zM3 16h18v4H3z',
    skills: [
      { name: 'Angular', level: 94, icon: 'NG' },
      { name: 'TypeScript', level: 92, icon: 'TS' },
      { name: 'JavaScript (ES6+)', level: 90, icon: 'JS' },
      { name: 'RxJS', level: 88, icon: 'RX' },
      { name: 'Reactive Forms', level: 90, icon: 'RF' },
      { name: 'HTML5 & CSS3 / SCSS', level: 94, icon: '<>' },
      { name: 'Responsive Web Design', level: 92, icon: 'RWD' },
    ],
  },
  {
    title: 'Architecture & Security',
    icon: 'M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V13H5V8.3l7-3.89v8.59z',
    skills: [
      { name: 'Clean Architecture', level: 90, icon: 'CA' },
      { name: 'Repository Pattern', level: 90, icon: 'RP' },
      { name: 'Dependency Injection (DI)', level: 92, icon: 'DI' },
      { name: 'SOLID Principles', level: 90, icon: 'SLD' },
      { name: 'JWT Authentication', level: 90, icon: 'JWT' },
      { name: 'ASP.NET Core Identity', level: 88, icon: 'ID' },
    ],
  },
  {
    title: 'Database Management',
    icon: 'M12 3c4 0 7 1 7 3s-3 3-7 3-7-1-7-3 3-3 7-3zm0 5c4 0 7 1 7 3s-3 3-7 3-7-1-7-3 3-3 7-3zm0 5c4 0 7 1 7 3s-3 3-7 3-7-1-7-3 3-3 7-3z',
    skills: [
      { name: 'Microsoft SQL Server', level: 90, icon: 'SQL' },
      { name: 'T-SQL & Stored Procedures', level: 88, icon: 'SP' },
      { name: 'Schema Design & Normalization', level: 88, icon: 'DB' },
      { name: 'Indexing & Query Optimization', level: 86, icon: 'OPT' },
      { name: 'CRUD Operations & Migrations', level: 92, icon: 'CRUD' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: 'M14 7l3 3-9 9H5v-3zM19 4a2 2 0 012 2l-2 2-2-2 2-2z',
    skills: [
      { name: 'Visual Studio 2022', level: 92, icon: 'VS' },
      { name: 'VS Code', level: 94, icon: 'VSC' },
      { name: 'SSMS', level: 88, icon: 'SS' },
      { name: 'Git & GitHub', level: 92, icon: 'GIT' },
      { name: 'Postman', level: 90, icon: 'PM' },
      { name: 'Swagger / OpenAPI', level: 90, icon: 'SWG' },
      { name: 'GitHub Pages', level: 90, icon: 'GHP' },
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
      'Architected and implemented high-performance RESTful APIs in ASP.NET Core (.NET 8) utilizing the Repository Pattern and Dependency Injection for scalable business logic.',
      'Engineered dynamic, modular frontend features in Angular and TypeScript using RxJS and Reactive Forms for clean state management and input validation.',
      'Implemented Entity Framework Core (Code-First) with automated database migrations, ensuring structured data access layers and transactional integrity.',
      'Designed and optimized SQL Server database schemas, stored procedures, and indexes to boost query execution speed and resolve latency bottlenecks.',
      'Secured endpoints with JWT authentication and role-based authorization; streamlined frontend–backend integration through Swagger and Postman.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'BizOps Platform',
    tagline: 'Enterprise Business Operations System',
    description:
      'Developed backend APIs supporting core business processes, multi-role user authentication, and transaction workflows with robust data validation. Implemented SQL Server data persistence and transactional integrity using Entity Framework Core with optimized LINQ queries. Constructed intuitive Angular dashboard interfaces with reusable components, reactive forms, and role-based navigation guards.',
    tags: [
      'Angular',
      'ASP.NET Core',
      'EF Core',
      'SQL Server',
      'JWT Auth',
      'Clean Architecture',
      'Reactive Forms',
    ],
    demo: 'https://github.com/abdullahzulfiqar137/bizops-platform',
    github: 'https://github.com/abdullahzulfiqar137/bizops-platform',
    gradient:
      'linear-gradient(135deg, rgba(123,92,255,.40), rgba(255,79,216,.30))',
    video: 'assets/videos/bizops-platform-demo.mp4',
    videoPreview: 'assets/videos/bizops-platform-preview.mp4',
    featured: true,
  },
  {
    title: 'Developer Portfolio',
    tagline: 'Personal Showcase & Technical Portfolio',
    description:
      'Built reusable, mobile-first Angular components and responsive layouts to showcase full-stack projects and technical skills. Achieved 95+ Google Lighthouse scores through asset optimization and route lazy-loading; deployed via GitHub Pages.',
    tags: [
      'Angular',
      'TypeScript',
      'SCSS',
      'GitHub Pages',
      'Responsive Design',
      'Lighthouse 95+',
    ],
    demo: 'https://abdullahzulfiqar137.github.io/Portfolio/',
    github: 'https://github.com/abdullahzulfiqar137/Portfolio',
    gradient:
      'linear-gradient(135deg, rgba(59,130,246,.40), rgba(147,51,234,.30))',
    featured: false,
  },
  {
    title: 'HospitalSaaS',
    tagline: 'Modern healthcare management platform',
    description:
      'A full-stack healthcare SaaS platform with role-based access for Admins, Doctors and Staff. Features patient registration, appointment scheduling, real-time sync, billing management and an analytics dashboard built for reliable clinical operations.',
    tags: [
      'ASP.NET Core',
      'Angular',
      'SQL Server',
      'Entity Framework',
      'REST API',
      'Role-Based Auth',
    ],
    demo: 'https://github.com/abdullahzulfiqar137/HospitalSaaS',
    github: 'https://github.com/abdullahzulfiqar137/HospitalSaaS',
    gradient:
      'linear-gradient(135deg, rgba(16,185,129,.42), rgba(14,165,233,.32))',
    video: 'assets/videos/hospital-saas-demo.mp4',
    featured: false,
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Full Stack Web Applications',
    description:
      'End-to-end web applications built with Angular on the frontend and ASP.NET Core on the backend, focusing on responsiveness, scalability, and UX.',
    icon: 'M3 4h18v4H3zM3 10h18v4H3zM3 16h18v4H3z',
  },
  {
    title: 'RESTful API Architecture',
    description:
      'Secure, high-performance RESTful APIs built with ASP.NET Core (.NET 8) following Clean Architecture, Repository Pattern, and Dependency Injection.',
    icon: 'M4 7h16v10H4zM4 11h16',
  },
  {
    title: 'Database Design & Optimization',
    description:
      'Relational schema design, T-SQL stored procedures, Entity Framework Core Code-First migrations, indexing, and query optimization in SQL Server.',
    icon: 'M12 3c4 0 7 1 7 3s-3 3-7 3-7-1-7-3 3-3 7-3zm0 5c4 0 7 1 7 3s-3 3-7 3-7-1-7-3 3-3 7-3zm0 5c4 0 7 1 7 3s-3 3-7 3-7-1-7-3 3-3 7-3z',
  },
  {
    title: 'Frontend SPA Development',
    description:
      'Modular Single Page Applications (SPAs) engineered in Angular and TypeScript using RxJS, Reactive Forms, and modern component architectures.',
    icon: 'M9 3v6l-4 8h14l-4-8V3',
  },
  {
    title: 'Authentication & Authorization',
    description:
      'Robust security implementations using JWT tokens, ASP.NET Core Identity, password hashing, and role-based route navigation guards.',
    icon: 'M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z',
  },
  {
    title: 'Performance & Lighthouse Tuning',
    description:
      'Performance audit and optimization across frontend assets, lazy loading, and database queries to achieve 95+ Google Lighthouse scores.',
    icon: 'M12 8a4 4 0 100 8 4 4 0 000-8z',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { value: 1, suffix: '+', label: 'Years Experience', icon: 'M12 8v4l3 3' },
  { value: 3, suffix: '+', label: 'Featured Projects', icon: 'M4 4h16v16H4z' },
  { value: 25, suffix: '+', label: 'Technologies & Tools', icon: 'M3 12l9-9 9 9' },
  { value: 100, suffix: '%', label: 'Code Quality Commitment', icon: 'M12 21s-7-4-7-9a7 7 0 0114 0c0 5-7 9-7 9z' },
];

export const SOCIALS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/abdullahzulfiqar137', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdullah-zulfiqar-/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:abdullahzulfiqar137@gmail.com', icon: 'mail' },
];
