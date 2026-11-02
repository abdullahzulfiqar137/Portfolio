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
    'Architecting Scalable Web Applications with ASP.NET Core (.NET 8), Angular & SQL Server.',
  summary:
    'Results-driven .NET Full Stack Developer with 1+ year of hands-on experience designing and delivering scalable, enterprise-grade web applications using C#, ASP.NET Core (.NET 8), Angular, TypeScript, Entity Framework Core, and SQL Server. Experienced in architecting secure RESTful APIs, implementing Repository & Clean Architecture patterns, writing automated unit tests (xUnit), optimizing relational databases, and developing responsive Single Page Applications (SPAs). Comfortable collaborating in distributed, asynchronous remote environments with flexible overlap across US (EST), UK (GMT), and European (CET) time zones.',
  email: 'abdullahzulfiqar137@gmail.com',
  phone: '+92 333 4320471',
  whatsappUrl:
    'https://wa.me/923334320471?text=Hi%20Abdullah%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.',
  location: 'Lahore, Pakistan',
  status: 'Available Worldwide · US / UK / EU Timezone Overlap',
  timezone: 'PKT (UTC+5) · Flexible overlap with US (EST) & Europe (GMT/CET)',
  remoteReadiness: 'Full-Time Remote · Contract · Distributed Team Ready',
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
    title: 'Testing & Quality Assurance',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    skills: [
      { name: 'xUnit & NUnit', level: 88, icon: 'xU' },
      { name: 'Moq & Unit Testing', level: 88, icon: 'MQ' },
      { name: 'Integration Testing', level: 86, icon: 'INT' },
      { name: 'API Automated Testing', level: 90, icon: 'API' },
      { name: 'Jasmine & Karma', level: 84, icon: 'JK' },
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
    title: 'DevOps, Tools & Platforms',
    icon: 'M14 7l3 3-9 9H5v-3zM19 4a2 2 0 012 2l-2 2-2-2 2-2z',
    skills: [
      { name: 'Docker & Containers', level: 84, icon: 'DKR' },
      { name: 'GitHub Actions (CI/CD)', level: 86, icon: 'CI' },
      { name: 'Git & GitHub (PR Workflows)', level: 92, icon: 'GIT' },
      { name: 'Postman & Swagger / OpenAPI', level: 92, icon: 'SWG' },
      { name: 'Visual Studio 2022 & VS Code', level: 94, icon: 'VS' },
      { name: 'SSMS', level: 88, icon: 'SS' },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Awatech Technology Solutions',
    role: 'Full Stack .NET Developer',
    period: '2024 — Present',
    location: 'Lahore, Pakistan (Hybrid / Remote)',
    responsibilities: [
      'Architected and implemented high-performance RESTful APIs in ASP.NET Core (.NET 8) utilizing Repository and Dependency Injection patterns, powering 20+ core business endpoints and transactional workflows.',
      'Engineered dynamic, modular frontend features in Angular and TypeScript using RxJS and Reactive Forms for clean asynchronous state management, route guards, and client-side validation.',
      'Automated database migrations and schema evolution with Entity Framework Core (Code-First), ensuring transactional integrity and zero data loss across deployments.',
      'Optimized SQL Server database schemas, stored procedures, and composite indexes, cutting critical query execution times by ~35% and resolving latency bottlenecks under peak load.',
      'Authored automated unit and integration tests with xUnit and Moq to validate business logic and controller endpoints, increasing code reliability for regression-free releases.',
      'Secured 15+ multi-role API endpoints using JWT authentication and ASP.NET Core Identity with role-based authorization; streamlined team collaboration via Swagger/OpenAPI and Postman collections.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'BizOps Platform',
    tagline: 'Enterprise Business Operations & ERP System',
    description:
      'Engineered a scalable full-stack enterprise operations platform supporting multi-role authentication, transaction workflows, and data auditing. Built secure ASP.NET Core REST APIs following Clean Architecture and Repository patterns, with Entity Framework Core and SQL Server handling ACID-compliant transactions. Designed modular Angular dashboards with reactive forms, role guards, and real-time state streams. Backed by automated xUnit tests.',
    tags: [
      'Angular',
      'ASP.NET Core (.NET 8)',
      'EF Core',
      'SQL Server',
      'Clean Architecture',
      'xUnit & Moq',
      'JWT Auth',
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
    tagline: 'High-Performance Engineering Showcase',
    description:
      'Crafted a high-performance, mobile-responsive developer showcase following modern Linear/Vercel design principles. Features standalone Angular components, obsidian glassmorphism, responsive code mockups, and automated CI/CD pipeline deployments via GitHub Actions with a verified 95+ Google Lighthouse score.',
    tags: [
      'Angular',
      'TypeScript',
      'GitHub Actions (CI/CD)',
      'Responsive Design',
      'Lighthouse 95+',
      'CSS3 / SCSS',
    ],
    demo: 'https://abdullahzulfiqar137.github.io/Portfolio/',
    github: 'https://github.com/abdullahzulfiqar137/Portfolio',
    gradient:
      'linear-gradient(135deg, rgba(59,130,246,.40), rgba(147,51,234,.30))',
    featured: false,
  },
  {
    title: 'HospitalSaaS',
    tagline: 'Multi-Tenant Clinical & Healthcare Platform',
    description:
      'Engineered an enterprise healthcare management SaaS with granular role-based access control for Administrators, Doctors, and Staff. Features patient registration, appointment scheduling, billing workflows, and a clinical analytics dashboard. Designed with ASP.NET Core RESTful APIs, Entity Framework Core, and SQL Server for secure, reliable clinical data management.',
    tags: [
      'ASP.NET Core',
      'Angular',
      'SQL Server',
      'Entity Framework Core',
      'RESTful API',
      'Role-Based Security',
      'JWT Auth',
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
    title: 'Automated Testing & CI/CD',
    description:
      'Robust test suites written in xUnit and Moq ensuring high regression confidence, paired with automated GitHub Actions CI/CD pipelines.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Authentication & Security',
    description:
      'Enterprise security implementations using JWT tokens, ASP.NET Core Identity, password hashing, and role-based route navigation guards.',
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
  { value: 3, suffix: '+', label: 'Enterprise Projects', icon: 'M4 4h16v16H4z' },
  { value: 25, suffix: '+', label: 'Technologies & Tools', icon: 'M3 12l9-9 9 9' },
  { value: 95, suffix: '+', label: 'Google Lighthouse Score', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
];

export const SOCIALS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/abdullahzulfiqar137', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdullah-zulfiqar-/', icon: 'linkedin' },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/923334320471?text=Hi%20Abdullah%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.',
    icon: 'whatsapp',
  },
  { label: 'Email', href: 'mailto:abdullahzulfiqar137@gmail.com', icon: 'email' },
];
