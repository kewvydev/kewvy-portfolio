export const EMAIL = "kewvydev@outlook.com";

export const experiences = [
  {
    company: "Universidad Autónoma de Baja California",
    role: "Software Engineering Intern",
    location: "Ensenada, Baja California, Mexico",
    period: "Feb 2026 – Present",
    bullets: [
      "Maintained and optimized backend modules for internal university systems, boosting reliability and performance by 45%.",
      "Designed and built a new internal university system module using Java Spring Boot, delivering core functionality of enabling students to submit bug reports across 20+ university systems.",
      "Led early-stage requirement analysis across stakeholder interviews, shaping the scope of 3 university system enhancements over 8 sprints."
    ],
  },
  {
    company: "CleanMindset Cleaning Services",
    role: "Full Stack Developer",
    location: "Alexandria, Virginia, United States (Remote)",
    period: "Aug 2025 – Jan 2026",
    bullets: [
      "Owned end-to-end SDLC for new features, translating stakeholder interviews into developed, tested, and validated releases, delivering 6-10 features per sprint.",
      "Architected a full-stack booking platform, replacing a phone-only booking process with a self-service app supporting dynamic pricing and real-time availability, driving 70% of new bookings through self-service within 2 months of launch.",
      "Built an admin dashboard with bulk actions and status automation, reducing manual scheduling by ˜25 hrs/week.",
      "Implemented CI/CD pipelines with GitHub Actions to automate testing, reducing manual QA effort and catching issues earlier.",
    ],
  },
  {
    company: "ISyTE Core Labs",
    role: "Infrastructure Leader",
    location: "Ensenada, Baja California, Mexico",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Configured Windows Server 2022, firewall rules, and ports for lab services.",
      "Managed SQL Server logins, roles, and auditing. Built stored procedures, reports, and audit logs for SGHU.",
      "Introduced Git and GitHub workflows across lab projects.",
    ],
  },
];

export const featuredProjects = [
  {
    title: "CleanMindset",
    role: "Full Stack Developer",
    description:
      "Residential and commercial cleaning bookings with instant quotes, payments, and gift cards. Includes team management and marketing tools.",
    contributions: [
      "Led stakeholder interviews, requirements, development, and delivery.",
      "Built dynamic pricing, real-time availability, workflow automation, and JWT authentication with rate limiting.",
      "Reduced manual scheduling by ~25 hours/week. Built bulk actions and management tools for appointments, blog posts, coupons, and gift cards.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Stripe",
      "NodeMailer",
    ],
    demo: "https://cleanmindsetcs.com",
    code: "#",
    images: [
      "/projects/cleanmindset.jpeg",
      "/projects/cleanmindset2.jpeg",
      "/projects/cleanmindset3.jpeg",
      "/projects/cleanmindset4.jpeg",
      "/projects/cleanmindset5.jpeg",
    ],
    thumbnail: "/projects/cleanmindset.jpeg",
  },
  {
    title: "Tastify",
    role: "Personal Project",
    description:
      "World-cuisine learning app with interactive lessons, challenges, progress tracking, and global leaderboards.",
    contributions: [
      "Built the full-stack architecture with Next.js and React Server Components.",
      "Implemented lessons, progress tracking, and leaderboards.",
      "Integrated Clerk authentication and Cloudinary for user-generated media.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Clerk Auth",
      "Cloudinary",
    ],
    demo: "https://tastify-rosy.vercel.app/",
    code: "#",
    images: [
      "/projects/tastify.jpeg",
      "/projects/tastify2.jpeg",
      "/projects/tastify3.jpeg",
      "/projects/tastify4.jpeg",
      "/projects/tastify5.jpeg",
    ],
    thumbnail: "/projects/tastify.jpeg",
  },
  {
    title: "PcBuilder+",
    role: "Backend Developer",
    description:
      "PC component search and compatibility checking for creating and sharing custom builds.",
    contributions: [
      "Designed the REST API, component model, and compatibility rules.",
      "Implemented persistence with Spring Data JPA and PostgreSQL.",
      "Built component search and configuration filters.",
    ],
    technologies: [
      "Java 17",
      "Spring Boot 3",
      "Spring Data JPA",
      "Maven",
      "PostgreSQL",
    ],
    demo: "#",
    code: "https://github.com/kewvydev/pc-builder-backend",
    images: ["/projects/pcbuilder.jpeg"],
    thumbnail: "/projects/pcbuilder.jpeg",
  },
];

export const otherProjects = [
  {
    title: "CodeFront",
    description:
      "Tech news aggregator combining articles from multiple sources well known in the tech industry.",
    tags: ["Spring Boot", "React", "Tailwind CSS", "REST APIs"],
    demo: "#",
    code: "https://github.com/kewvydev/CodeFront",
  },
  {
    title: "Gestión PIMEVA",
    description:
      "Preliminary system for pier operations in Ensenada: inventory, scheduling, and reporting across all pier agencies.",
    tags: ["ASP.NET", "C#", "CSS", "JavaScript", "PostgreSQL"],
    demo: "#",
    code: "#",
  },
  {
    title: "SGHU (Sistema de Gestión para Horas Universitarias)",
    description:
      "Platform for extracurricular activities at UABC FIAD, replacing all the semi-manual management process unifying all in one system.",
    tags: ["ASP.NET", "C#", "CSS", "JavaScript", "MSSQL Server"],
    demo: "#",
    code: "#",
  },
  {
    title: "MiawChess",
    description:
      "Cat-themed chess game with computer and two-player modes, cute custom graphics, and sound effects.",
    tags: ["C++", "Raylib", "SFML"],
    demo: "#",
    code: "https://github.com/andreagori/MiawChess",
  },
];

export const highlights = [
  {
    title: "NASA Space Apps Challenge 2025",
    description: "Developed a technical proposal for a space-related challenge.",
    type: "Hackathon",
  },
  {
    title: "ICPC Mexico Regional Round 2025",
    description:
      "Participated in timed algorithmic problem-solving challenges.",
    type: "Competition",
  },
  {
    title: "Elegis 3 Hackaton",
    description:
      "Developed a web solution with a team during the hackathon.",
    type: "Hackaton",
  },
];

export const featuredResearch = {
  articleUrl: "/highlights/immediate-interaction-systems.pdf",
};

export const skillCategories = [
  {
    name: "Languages",
    skills: ["Java", "TypeScript", "JavaScript", "Python"],
  },
  {
    name: "Frontend",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "UI/UX",
    ],
  },
  {
    name: "Backend",
    skills: [
      "REST APIs",
      "Spring Boot",
      "Next.js API Routes",
      "Node.js",
      "FastAPI",
      "SQL",
    ],
  },
  {
    name: "Database",
    skills: [
      "PostgreSQL",
      "MSSQL Server",
      "Drizzle",
      "Prisma",
      "Supabase",
      "Neon",
    ],
  },
  {
    name: "Cloud",
    skills: ["AWS", "Azure", "Google Cloud Platform"],
  },
  {
    name: "DevOps",
    skills: [
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Bash Scripting",
      "Git/GitHub",
      "Ubuntu Server",
    ],
  },
  {
    name: "Testing & Tools",
    skills: ["Postman", "Jira", "Trello", "Playwright", "Selenium"],
  },
  {
    name: "AI & Agents",
    skills: [
      "Agent Skills",
      "MCPs",
      "Spec-Driven Development",
      "OpenCode",
      "Cursor",
      "Codex",
      "Claude Code",
      "Gemini API",
    ],
  },
];
