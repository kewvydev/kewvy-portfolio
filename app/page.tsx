import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HeroBackground from "@/components/HeroBackground";
import HeroSection from "@/components/HeroSection";
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
    period: "Feb 2026 – Present",
    bullets: [
      "Supported the development of internal university systems. Maintained and optimized backend modules using Java with Spring Boot. Collaborated within a multidisciplinary team, applying best programming practices.",
      "Collaborated with cross-functional teams to deliver features on time using Agile methodologies and Scrum ceremonies.",
    ],
  },
  {
    company: "CleanMindset Cleaning Services",
    role: "Full Stack Developer",
    location: "Alexandria, Virginia, United States",
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

export const projects = [
  {
    title: "CleanMindset Web Application",
    description:
      "CleanMindset description...",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe", "NodeMailer"],
    demo: "https://cleanmindsetcs.com",
    code: "#",
    image: "/projects/cleanmindset.png",
  },
  {
    title: "Tastify",
    description:
      "Tastify description...",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Clerk Auth", "Cloudinary"],
    demo: "https://tastify-rosy.vercel.app/",
    code: "https://github.com/kewvydev/Tastify",
     image: "/projects/tastify.png",
  },
  {
    title: "PcBuilder+",
    description:
      "PcBuilder+ description...",
    tags: ["Java 17", "Spring Boot 3", "Spring Data JPA", "Maven", "PostgreSQL"],
    demo: "#",
    code: "https://github.com/kewvydev/pc-builder-backend",
    image: "/projects/pcbuilder.jpeg",
  },
];

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
    skills: ["Google Cloud", "Azure", "Docker", "Git/GitHub", "Ubuntu Server", "Windows Server"],
  },
  {
    name: "Languages",
    skills: ["Spanish (Native)", "English (Advanced / B2)"],
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* TECHNICAL SKILLS */}
        <Skills categories={skillCategories} />
      </div>

      {/* PROJECTS — full width */}
      <div className="relative z-10">
        <Projects />
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
              &copy; {new Date().getFullYear()} Kevin Gonzalez &mdash; Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
    </main>
  );
}
