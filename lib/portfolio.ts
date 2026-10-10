export const EMAIL = "kewvydev@outlook.com";

export const experiences = [
  {
    company: "UABC Systems Development Department",
    role: "Software Engineering Intern II",
    location: "Ensenada, Baja California, Mexico",
    period: "Aug 2026 – Present",
    bullets: [
      "Co-designing a hybrid AWS and on-premises architecture to modernize incident management across 20+ university systems, integrating existing infrastructure with AI-driven investigation workflows.",
      "Developing Spring Boot backend and REST API integrations to connect university services with AWS-based incident investigation pipelines.",
      "Designing multi-agent orchestration workflows with AWS Step Functions and Amazon Bedrock AgentCore to coordinate 8 specialized agents across evidence collection, root-cause diagnosis, validation, and incident reproduction.",
    ],
  },
  {
    company: "UABC Systems Development Department",
    role: "Software Engineering Intern",
    location: "Ensenada, Baja California, Mexico",
    period: "Feb 2026 – Jul 2026",
    bullets: [
      "Maintained and optimized backend modules for internal university systems, boosting reliability and performance by 45%.",
      "Designed and built a new internal university system module using Java Spring Boot, delivering core functionality of enabling students to submit bug reports across 20+ university systems.",
      "Led early-stage requirement analysis across stakeholder interviews, shaping the scope of 3 university system enhancements.",
    ],
  },
  {
    company: "CleanMindset Cleaning Services",
    role: "Fullstack Developer",
    location: "Alexandria, Virginia, United States (Remote)",
    period: "Aug 2025 – Jan 2026",
    bullets: [
      "Owned end-to-end SDLC for new features, translating stakeholder interviews into developed, tested, and validated releases, delivering 6-10 features per sprint.",
      "Architected a full-stack booking platform, replacing a phone-only booking process with a self-service app supporting dynamic pricing and real-time availability, driving 70% of new bookings through self-service within 2 months of launch.",
      "Built an admin dashboard with bulk actions and status automation, reducing manual scheduling by ~25 hours per week.",
      "Implemented CI/CD pipelines with GitHub Actions to automate testing, reducing manual QA effort and catching issues earlier.",
    ],
  },
];

export const featuredProjects = [
  {
    title: "CleanMindset",
    role: "Fullstack Developer",
    description:
      "Self-service cleaning bookings with instant estimates, secure payments, appointment tracking, and customer reviews.",
    contributions: [
      "Built a slot-based booking flow with an instant estimate wizard and secure in-page Stripe payments.",
      "Developed token-based appointment tracking with expiration handling and Stripe integration.",
      "Created a customer review system with appointment validation and content moderation.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Stripe",
      "Nodemailer",
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
      "Culinary learning app with lessons, gamified progress, leaderboards, and premium subscriptions.",
    contributions: [
      "Built a gamification system with points, streaks, leaderboards, and badges.",
      "Integrated premium subscriptions with webhook-based state sync and a self-service billing portal.",
      "Used Clerk for authentication and Cloudinary for media management.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Clerk Auth",
      "Cloudinary",
      "GCP",
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
    skills: ["React", "React Native", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["REST APIs", "Spring Boot", "Node.js", "FastAPI", "SQL"],
  },
  {
    name: "Database & Cloud",
    skills: [
      "PostgreSQL",
      "SQL Server",
      "Prisma",
      "Drizzle",
      "AWS",
      "GCP",
      "AWS Step Functions",
    ],
  },
  {
    name: "DevOps & Testing",
    skills: [
      "Git",
      "Docker",
      "GitHub Actions (CI/CD)",
      "Postman",
      "Playwright",
      "Selenium",
    ],
  },
  {
    name: "AI & Agents",
    skills: [
      "Agent Skills",
      "MCPs",
      "Spec-Driven Development",
      "Amazon Bedrock AgentCore",
      "OpenCode",
      "Cursor",
      "Codex",
      "Claude Code",
    ],
  },
];
