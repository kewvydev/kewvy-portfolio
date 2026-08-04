import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HeroBackground from "@/components/HeroBackground";
import HeroSection from "@/components/HeroSection";
import Highlights from "@/components/Highlights";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const EMAIL = "kewvydev@outlook.com";

export const experiences = [
  {
    company: "Universidad Autónoma de Baja California",
    role: "Software Engineering Intern",
    location: "Ensenada, Baja California, Mexico",
    period: "Feb 2026 – July 2026",
    bullets: [
      "Supported the development of internal university systems. Maintained and optimized backend modules using Java with Spring Boot. Collaborated within a multidisciplinary team, applying best programming practices.",
      "Collaborated with cross-functional teams to deliver features on time using Agile methodologies and Scrum ceremonies.",
    ],
  },
  {
    company: "CleanMindset Cleaning Services",
    role: "Full Stack Developer",
    location: "Alexandria, Virginia, United States (Remote)",
    period: "Aug 2025 – Dec 2025",
    bullets: [
      "Led the full SDLC from stakeholder interviews and requirements gathering to delivery, of a full-stack booking platform that replaced a phone-only process with a self-service web app featuring dynamic pricing estimation (square footage, cleaning type, frequency discounts, extras), real-time availability, and automated workflow management.",
      "Reduced manual scheduling by ~25 hrs/week through an admin dashboard with bulk actions, appointment automation, JWT-based auth with rate limiting, and CRUD operations for appointments, blog posts, coupons, and gift cards.",
    ],
  },
  {
    company: "ISyTE Core Labs",
    role: "Infrastructure Leader",
    location: "Ensenada, Baja California, Mexico",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Installed and configured a primary Windows Server 2022, managing firewall rules and necessary ports to ensure secure connectivity for lab services.",
      "Configured security in SQL Server using logins, roles, and auditing for multi-project access, and developed stored procedures, reports, and audit logs to improve traceability and system control for SGHU.",
      "Implemented Git and GitHub as the standard version control system for all lab projects, establishing standardized development workflows.",
    ],
  },
];

export const featuredProjects = [
  {
    title: "CleanMindset",
    role: "Full Stack Developer",
    description:
      "End-to-end platform for booking residential and commercial cleaning. Features instant quoting, payments, gift cards, and an admin dashboard with team management and marketing automation.",
    contributions: [
      "Led the full SDLC from stakeholder interviews and requirements gathering to delivery of a self-service booking platform.",
      "Implemented dynamic pricing estimation, real-time availability, automated workflow management and JWT-based auth with rate limiting.",
      "Reduced manual scheduling by ~25 hrs/week through an admin dashboard with bulk actions and CRUD operations for appointments, blog posts, coupons, and gift cards.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe", "NodeMailer"],
    demo: "https://cleanmindsetcs.com",
    code: "#",
    images: ["/projects/cleanmindset.jpeg", "/projects/cleanmindset2.jpeg", "/projects/cleanmindset3.jpeg", "/projects/cleanmindset4.jpeg", "/projects/cleanmindset5.jpeg"],
    thumbnail: "/projects/cleanmindset.png",
  },
  {
    title: "Tastify",
    role: "Personal Project",
    description:
      "Learn world cuisines by playing. Interactive lessons, challenges, and global leaderboards to discover culinary cultures the fun way.",
    contributions: [
      "Designed and built the full-stack architecture from scratch using Next.js and React Server Components.",
      "Implemented gamified learning flows, progress tracking, and a leaderboard system.",
      "Integrated Clerk authentication and Cloudinary media handling for user-generated content.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Clerk Auth", "Cloudinary"],
    demo: "https://tastify-rosy.vercel.app/",
    code: "#",
    images: ["/projects/tastify.jpeg", "/projects/tastify2.jpeg", "/projects/tastify3.jpeg", "/projects/tastify4.jpeg", "/projects/tastify5.jpeg"],
    thumbnail: "/projects/tastify.png",
  },
  {
    title: "PcBuilder+",
    role: "Backend Developer",
    description:
      "Build your own PC and search for compatible parts with confidence. A user-friendly interface for creating and sharing custom PC builds.",
    contributions: [
      "Designed the RESTful API and domain model for PC components, builds, and compatibility rules.",
      "Implemented persistence and relationships using Spring Data JPA with PostgreSQL.",
      "Built search and filtering endpoints for components and build configurations.",
    ],
    technologies: ["Java 17", "Spring Boot 3", "Spring Data JPA", "Maven", "PostgreSQL"],
    demo: "#",
    code: "https://github.com/kewvydev/pc-builder-backend",
    images: ["/projects/pcbuilder.jpeg"],
    thumbnail: "/projects/pcbuilder.jpeg",
  },
];

export const otherProjects = [
  {
    title: "CodeFront ",
    description:
      "A Tech News Website that aggregates the latest news and articles from various sources, providing a one-stop platform for tech enthusiasts to stay updated.",
    tags: ["Spring Boot", "React", "Tailwind CSS", "REST APIs"],
    demo: "#",
    code: "https://github.com/kewvydev/CodeFront",
  },
  {
    title: "Gestión PIMEVA",
    description:
      "Preliminar version of a management system for the ships pier operations in Ensenada, including inventory, scheduling, and reporting.",
    tags: ["ASP.NET", "C#", "CSS", "JavaScript", "PostgreSQL"],
    demo: "#",
    code: "#",
  },
  {
    title: "SGHU (Sistema de Gestión para Horas Universitarias)",
    description:
      "An internal platform for managing extracurricular activities on the UABC FIAD campus. It replaces the ambiguous, semi-manual process previously used to manage these activities.",
    tags: ["ASP.NET", "C#", "CSS", "JavaScript", "MSSQL Server"],
    demo: "#",
    code: "#",
  },
  {
    title: "MiawChess",
    description:
      "Cute chess game with a cat theme. Play against the computer or a friend, and enjoy the adorable designs and sound effects.",
    tags: ["C++", "Raylib", "SFML"],
    demo: "#",
    code: "https://github.com/andreagori/MiawChess",
  },
];

export const highlights = [
  {
    title: "NASA Space Apps Challenge 2025",
    description: "Built under pressure, collaborated with a team, and turned a rough idea into a working technical proposal.",
    type: "Hackathon",
  },
  {
    title: "ICPC Mexico Regional Round 2025",
    description: "Practiced algorithmic thinking through timed challenges focused on logic, optimization, and clean solutions.",
    type: "Competition",
  },
  {
    title: "Elegis 3 Hackaton",
    description: "Developed a web application for a real-world problem, demonstrating teamwork, creativity, and technical skills.",
    type: "Hackaton",
  },
];

export const featuredResearch = {
  articleUrl: "/highlights/immediate-interaction-systems.pdf",
};

export const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["Python", "TypeScript", "Java", "C/C++", "C# (.NET)"],
  },
  {
    name: "Frontend",
    skills: ["React", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    name: "Backend",
    skills: ["REST APIs", "Spring Boot", "API Routes", "JWT", "Validation"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "MSSQL Server", "Drizzle", "Prisma", "Neon"],
  },
  {
    name: "Cloud / Infrastructure",
    skills: ["Google Cloud", "Azure", "AWS", "Docker", "Git/GitHub", "Ubuntu Server", "Windows Server"],
  },
  {
    name: "Soft Skills",
    skills: ["Learning Agility", "Adaptability", "Communication", "Teamwork", "Problem Solving", "Leadership", "Emotional Intelligence"],
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-yellow-300 selection:text-black">
      <HeroBackground />
      <Navbar />
      <HeroSection />

      {/* EXPERIENCE — full width background */}
      <div className="relative z-10">
        <Experience />
      </div>
      
      {/* THIS GETTING REMOVED FOR NOW, NEED TO BE REDISIGNED
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Skills categories={skillCategories} />
      </div>
      */}

      {/* PROJECTS — full width */}
      <div className="relative z-10">
        <Projects />
      </div>

      {/* HIGHLIGHTS */}
      <div className="relative z-10">
        <Highlights />
      </div>

      {/* ABOUT ME */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 md:py-28">
        <AboutMe />
      </div>

      {/* CONTACT */}
      <div className="relative z-10">
        <Contact />
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 border-t-2 border-foreground bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-heading font-black text-base uppercase tracking-widest">
              kewvy.dev
            </span>
            <p className="text-[11px] font-bold uppercase tracking-widest text-background/50">
              &copy; {new Date().getFullYear()} Built with ❤️ by Kevin Gonzalez
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
    </main>
  );
}
