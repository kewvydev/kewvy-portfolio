import { Github, Linkedin, Mail, Download } from "lucide-react";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HeroBackground from "@/components/HeroBackground";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

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
      "Owned the full software development lifecycle (SDLC) for new features, from initial stakeholder interviews and requirements gathering through development, testing, and final validation.",
      "Architected and developed a full-stack booking platform, transforming a phone-only booking process into a self-service web application with a dynamic pricing estimation engine that calculates service costs based on square footage ranges, cleaning types, frequency discounts, and optional extras, real-time availability, and automated workflow management.",
      "Reduced manual scheduling operations by ˜25 hours/week through an admin dashboard featuring bulk actions, appointment status automation, JWT-based authentication with rate limiting, and comprehensive CRUD operations for appointments, blog posts, coupons, and gift cards.",
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
    name: "Languages",
    skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Spring Boot", "Node.js", "Tailwind CSS", "Express"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Linux", "Vercel", "Figma"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "SQL Server", "MongoDB", "MySQL"],
  },
  {
    name: "Concepts",
    skills: ["REST APIs", "Agile / Scrum", "CI/CD", "Testing", "SDLC"],
  },
];

const MARQUEE_ITEMS = [
  "BUILDING DIGITAL SOLUTIONS",
  "FULL STACK DEV",
  "OPEN FOR WORK",
  "AGILE METHODOLOGIES",
  "CLEAN ARCHITECTURE",
  "CLOUD SERVICES",
  "TEAM COLLABORATION",
  "USER EXPERIENCE DESIGN",
  // add more jeje
];

const BTN_BASE =
  "inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-black uppercase tracking-widest border-2 border-foreground shadow-[4px_4px_0_var(--foreground)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-yellow-300 selection:text-black">
      <HeroBackground />
      <Navbar />
      {/* HERO */}
      <section className="relative z-10 min-h-screen flex flex-col overflow-hidden">

        {/* Main content — centered */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center pt-24 pb-16">
          {/* Status pill */}
          <div className="mb-8 inline-flex items-center gap-2 border-2 border-foreground bg-white px-4 py-1.5 text-[11px] font-black uppercase tracking-widest shadow-[3px_3px_0_var(--foreground)]">
            <span className="h-2 w-2 bg-green-500 border border-foreground" />
            SOFTWARE ENGINEERING STUDENT
          </div>

          {/* Headline */}
          <h1 className="font-heading font-black leading-[0.9] tracking-[-0.03em]">
            <span className="block text-[clamp(3.5rem,13vw,9.5rem)] text-foreground">
              KEVIN
            </span>
            <span
              className="block text-[clamp(3.5rem,13vw,9.5rem)] text-stroke-heading text-white">
              GONZALEZ
            </span>
          </h1>

          {/* One-liner */}
          <div className={`${BTN_BASE} mt-6 max-w-lg bg-yellow-300 text-foreground cursor-default`}>
            <p className="text-sm md:text-base leading-relaxed font-medium normal-case tracking-normal">
              Full Stack Developer and Software Engineering Student from Baja California, Mexico. Passionate about emerging technologies and software development.
            </p>
          </div>

          {/* CTA row */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/kewvydev"
              target="_blank"
              rel="noopener noreferrer"
              className={`${BTN_BASE} bg-white text-foreground hover:bg-yellow-300 hover:text-foreground`}
            >
              <Github size={15} strokeWidth={2.5} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-gonzalez-torres/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${BTN_BASE} bg-white text-foreground hover:bg-yellow-300 hover:text-foreground`}
            >
              <Linkedin size={15} strokeWidth={2.5} />
              LinkedIn
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className={`${BTN_BASE} bg-white text-foreground hover:bg-yellow-300`}
            >
              <Mail size={15} strokeWidth={2.5} />
              Email
            </a>
            <a
              href="/Resume_Kevin_Gonzalez.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${BTN_BASE} bg-white text-foreground hover:bg-yellow-300`}
            >
              <Download size={15} strokeWidth={2.5} />
              CV
            </a>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative z-10 overflow-hidden border-3 border-foreground bg-yellow-300">
          <div className="flex animate-marquee whitespace-nowrap py-3">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
              (item, i) => (
                <span
                  key={i}
                  className="mx-3 text-xs font-black uppercase tracking-widest text-foreground"
                >
                  /// {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 md:py-24 space-y-24">

        {/* EXPERIENCE */}
        <Experience />

        {/* TECHNICAL SKILLS */}
        <Skills categories={skillCategories} />

      </div>

      {/* PROJECTS — full width */}
      <div className="relative z-10">
        <Projects />
      </div>

      {/* ABOUT ME */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 md:py-24 space-y-24">
        <AboutMe />
      </div>

      {/* CONTACT */}
      <div className="relative z-10">
        <Contact />
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 border-t-3 border-foreground bg-yellow-300 p-8 text-center">
        <p className="text-xs font-black uppercase tracking-widest text-foreground">
          &copy; {new Date().getFullYear()} Made with ❤️ by Kevin Gonzalez. <br />
          This is an early version of my portfolio. Please check back soon for updates!
        </p>
      </footer>
    </main>
  );
}
