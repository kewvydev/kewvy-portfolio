"use client";

import { useState } from "react";
import { Github, Linkedin, FileText, Copy, Check } from "lucide-react";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";

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
  },
  {
    title: "Tastify",
    description:
      "Tastify description...",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Clerk Auth", "Cloudinary"],
    demo: "#",
    code: "#",
  },
  {
    title: "PcBuilder+",
    description:
      "PcBuilder+ description...",
    tags: ["Java 17", "Spring Boot 3", "Spring Data JPA", "Maven", "PostgreSQL"],
    demo: "#",
    code: "#",
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

const ICON_LINK =
  "inline-flex items-center justify-center w-12 h-12 border-2 border-black bg-white shadow-[3px_3px_0_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard may be unavailable */
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-yellow-300 selection:text-black">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24 space-y-24">
        {/* HERO */}
        <section>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.05] mb-6">
            Hi! Im Kevin
          </h1>

          <p className="text-sm md:text-base leading-relaxed max-w-2xl mb-10 opacity-80">
            A Software Engineering student passionate about technology and
            software development. I excel at communicating solutions clearly and
            effectively. Committed to continuous improvement, I seek to merge my
            solid technical background with the dedication to provide exceptional
            favor. My goal is to contribute to dynamic teams, leveraging my
            technical competencies and communication skills.
          </p>

          <div className="flex items-center gap-3 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className={ICON_LINK}
            >
              <Github size={22} strokeWidth={2.5} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className={ICON_LINK}
            >
              <Linkedin size={22} strokeWidth={2.5} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume"
              className={ICON_LINK}
            >
              <FileText size={22} strokeWidth={2.5} />
            </a>
          </div>

          <div className="inline-flex items-center border-2 border-black shadow-[3px_3px_0_black] bg-white">
            <span className="px-4 py-2.5 text-sm select-all">{EMAIL}</span>
            <button
              onClick={handleCopy}
              aria-label={copied ? "Email copied" : "Copy email to clipboard"}
              className="px-3 py-2.5 border-l-2 border-black hover:bg-yellow-300 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </section>

        {/* ABOUT ME */}
        <AboutMe />

        {/* EXPERIENCE */}
        <Experience />

        {/* TECHNICAL SKILLS */}
        <section>
          <h2 className="text-3xl md:text-4xl font-black mb-10">
            Technical Skills
          </h2>

          <div className="space-y-6">
            {skillCategories.map((cat) => (
              <div key={cat.name}>
                <h3 className="text-sm font-bold uppercase tracking-wide mb-3 opacity-60">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-bold border-2 border-black bg-white shadow-[3px_3px_0_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-yellow-300 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="text-3xl md:text-4xl font-black mb-10">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <article
                key={i}
                className="border-2 border-black p-5 bg-white shadow-[5px_5px_0_black] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all flex flex-col"
              >
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm leading-relaxed opacity-75 mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-bold border border-black bg-yellow-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 text-sm font-bold border-2 border-black bg-black text-white hover:bg-yellow-300 hover:text-black transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 text-sm font-bold border-2 border-black bg-white hover:bg-yellow-300 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
