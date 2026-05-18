export const projects = [
  {
    num: '01', id: 'auticare', color: 'cyan',
    name: 'AutiCare',
    sub: 'ASD Healthcare Support Platform',
    link: 'https://auticare-frontend-main.vercel.app',
    linkLabel: '↗ Live Demo',
    stack: ['React 18','Vite','Tailwind CSS','Zustand','TanStack Query','Recharts','Zod','Vercel'],
    desc: 'Healthcare platform serving ASD families with consolidated care coordination across three distinct user roles.',
    bullets: [
      '3-role system (Doctor / Therapist / Parent) with protected routing, Zustand auth state, and React Router v6 nested layouts',
      'TanStack Query for cache-aware fetching, background re-validation, full loading/error state coverage across every async op',
      'Recharts dashboards surfacing patient progress, therapy trends, and daily feedback metrics for evidence-based clinical decisions',
      'React Hook Form + Zod schema validation — typed payloads, zero client-side data errors across all forms',
    ],
  },
  {
    num: '02', id: 'mukth', color: 'purple',
    name: 'Mukth',
    sub: 'RTL Arabic Quran Memorisation Platform · Co-Founded',
    link: 'https://github.com/yousefmoo/Mukth--',
    linkLabel: '↗ GitHub',
    stack: ['React 18','Vite','Tailwind CSS','Supabase (PostgreSQL)','RTL Arabic UI','Vercel'],
    desc: 'MENA-focused platform engineered for bidirectional Arabic text and localised experiences for Gen Z users.',
    bullets: [
      'Fully bidirectional RTL interface with custom Arabic font stacks, Islamic geometric SVG patterns, and glassmorphism styling — cross-browser compatible',
      'Supabase PostgreSQL schema covering curriculum plans, teacher profiles, student enrolments, and pricing tiers',
      'Tokens-driven content architecture — all data managed from a single config file, enabling zero-code updates across 14 components',
      'Co-founded the product — responsible for full technical architecture, execution, and MENA market strategy',
    ],
  },
  {
    num: '03', id: 'heroes', color: 'indigo',
    name: 'Heroes Gym System',
    sub: 'Offline-First Desktop App · Electron.js + React + SQLite',
    link: null, linkLabel: 'Private',
    stack: ['Electron.js','React','SQLite','IPC Bridge','QR Check-In','Offline-First','Recharts'],
    desc: 'High-performance desktop management system built for the Egyptian market — zero cloud dependency, zero latency.',
    bullets: [
      'Complete offline-first architecture: member records, QR check-in, subscription management, payments, equipment tracking, and analytics dashboards',
      'Designed full system from scratch — persistent SQLite storage via Electron IPC bridge, no internet required',
      'Engineered for Egyptian market infrastructure with localised data processing for low-connectivity environments',
      'Built for co-owned gym Al Abtal (الأبطال) — a real production deployment in active daily use',
    ],
  },
  {
    num: '04', id: 'jodolist', color: 'green',
    name: 'JO-DO-LIST',
    sub: 'State-Driven Task Management Application',
    link: 'https://github.com/yousefmoo/JO-DO-LIST',
    linkLabel: '↗ GitHub',
    stack: ['React 18','JavaScript','Vite','LocalStorage Persistence','CRUD'],
    desc: 'Lightweight yet robust task management app with real-time state and full data persistence.',
    bullets: [
      'Full CRUD system with real-time state updates and localStorage persistence — zero data loss, no backend dependency',
      'Memoised selector logic for filtering, sorting, and priority management — instant UI response on all operations',
      'Clean component architecture with reusable base components across all 4 CRUD operations',
    ],
  },
  {
    num: '05', id: 'comforta', color: 'amber',
    name: 'Comforta',
    sub: 'Modern E-Commerce Web Application · Team Project',
    link: 'https://github.com/MustafaMohammed141/Comforta',
    linkLabel: '↗ GitHub',
    stack: ['React 18','Vite','Tailwind CSS','Component Architecture','Team Collaboration'],
    desc: 'Collaborative React e-commerce project with responsive product listings and shared design system.',
    bullets: [
      'Responsive product listings, cart state management, and Tailwind CSS utility-class styling',
      'Vite build optimisations — tree-shaking, lazy loading — consistent layout integrity across all breakpoints',
      'Contributed reusable components and shared Tailwind design system used across the full team codebase',
    ],
  },
]

export const experience = [
  {
    role: 'MERN Stack Developer',
    org: 'Digital Egypt Pioneers Initiative (DEPI) — Ministry of Communications',
    period: 'Jun 2024 – Sep 2024',
    loc: 'Cairo, Egypt',
    color: 'indigo',
    bullets: [
      'Ranked Top 1% of 15,000 participants — highest tier in Egypt\'s most competitive MERN stack programme',
      'Built full-stack apps with React 18 + Node.js/Express.js: JWT auth, MongoDB pipelines, RESTful API design under production constraints',
      'Reduced API response latency by 25% via MongoDB indexing redesign and compound query optimisation',
      'Delivered responsive production UIs within Agile sprint cycles — standups, planning, and retrospectives',
    ],
  },
  {
    role: 'React.js Developer',
    org: 'Information Technology Institute (ITI)',
    period: 'Jun 2024 – Sep 2024',
    loc: 'Cairo, Egypt',
    color: 'cyan',
    bullets: [
      'Built and deployed 4 React applications consuming live REST APIs — React.memo, code splitting, useCallback/useMemo optimisations',
      'Component-based architecture with reusable design systems and WCAG 2.1 accessibility standards',
      'Developed fully RTL Arabic SaaS interface (Mukth) — bidirectional text rendering for MENA-market audiences',
    ],
  },
  {
    role: 'Software Engineering Trainee',
    org: 'ALX Africa',
    period: 'Jun 2023 – Sep 2024',
    loc: 'Remote',
    color: 'green',
    bullets: [
      'Intensive 12-month programme: Git/GitHub workflows, clean architecture, Agile, distributed team collaboration',
      'Curriculum spanning system design, OOP principles (Python, C), and real-world engineering practices at scale',
    ],
  },
]

export const skills = [
  {
    label: 'Frontend', color: 'indigo',
    items: [
      { name: 'React 18 + Hooks', pct: 92 },
      { name: 'JavaScript ES6+', pct: 93 },
      { name: 'TypeScript', pct: 85 },
      { name: 'Tailwind CSS + RTL', pct: 90 },
      { name: 'TanStack Query', pct: 82 },
      { name: 'Zustand / Redux Toolkit', pct: 83 },
      { name: 'React Hook Form + Zod', pct: 85 },
    ],
  },
  {
    label: 'Backend & Database', color: 'cyan',
    items: [
      { name: 'Node.js', pct: 72 },
      { name: 'Express.js', pct: 70 },
      { name: 'MongoDB + Mongoose', pct: 68 },
      { name: 'Supabase (PostgreSQL)', pct: 72 },
      { name: 'REST API Design', pct: 80 },
      { name: 'JWT Authentication', pct: 78 },
    ],
  },
  {
    label: 'DevOps & Tooling', color: 'green',
    items: [
      { name: 'Git / GitHub', pct: 90 },
      { name: 'GitHub Actions CI/CD', pct: 75 },
      { name: 'Vercel / Netlify', pct: 85 },
      { name: 'Vitest + React Testing Library', pct: 72 },
      { name: 'Electron.js Desktop', pct: 72 },
      { name: 'Agile / Scrum', pct: 80 },
    ],
  },
  {
    label: 'Learning — AI & Data', color: 'amber',
    items: [
      { name: 'Python', pct: 45 },
      { name: 'Pandas + NumPy', pct: 40 },
      { name: 'Scikit-Learn', pct: 30 },
      { name: 'n8n Workflow Automation', pct: 70 },
      { name: 'Matplotlib / Power BI', pct: 35 },
    ],
  },
]

export const certs = [
  { name: 'DEPI — MERN Stack Developer Certification', org: 'Ministry of Communications, Egypt · 2025', badge: '★ Top 1% of 15,000', color: 'amber' },
  { name: 'React.js Track Certification', org: 'Information Technology Institute (ITI), Cairo · 2024', color: 'cyan' },
  { name: 'Software Engineering Programme', org: 'ALX Africa · 2024', color: 'green' },
  { name: 'Full-Stack Web Development Bootcamp', org: 'Udemy · 2024', color: 'indigo' },
  { name: 'Node.js, Express.js & MongoDB Bootcamp', org: 'Udemy', color: 'indigo' },
  { name: 'JavaScript Algorithms & Data Structures', org: 'Udemy', color: 'indigo' },
]
