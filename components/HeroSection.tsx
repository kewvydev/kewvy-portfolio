"use client";

import { useRef, useEffect } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { EMAIL } from "@/app/page";

const MARQUEE_ITEMS = [
  "BUILDING DIGITAL SOLUTIONS",
  "FULL STACK DEV",
  "OPEN FOR WORK",
  "AGILE METHODOLOGIES",
  "CLEAN ARCHITECTURE",
  "CLOUD SERVICES",
  "TEAM COLLABORATION",
  "USER EXPERIENCE DESIGN",
  "SDLC",
];

const BTN_BASE =
  "inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs font-black uppercase tracking-widest border-2 border-foreground hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const kevinRef = useRef<HTMLSpanElement>(null);
  const gonzalezRef = useRef<HTMLSpanElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set([kevinRef.current, gonzalezRef.current], {
        autoAlpha: 0,
        y: 60,
        skewY: 4,
      });
      gsap.set(bioRef.current, { autoAlpha: 0, y: 30, scale: 0.95 });
      gsap.set(".hero-cta", { autoAlpha: 0, y: 20 });
      gsap.set(marqueeRef.current, { autoAlpha: 0, y: 20 });

      tl.to(kevinRef.current, {
        autoAlpha: 1,
        y: 0,
        skewY: 0,
        duration: 0.7,
      });

      tl.to(
        gonzalezRef.current,
        { autoAlpha: 1, y: 0, skewY: 0, duration: 0.7 },
        "-=0.4"
      );

      tl.to(
        bioRef.current,
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.4)" },
        "-=0.2"
      );

      tl.to(
        ".hero-cta",
        { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" },
        "-=0.15"
      );

      tl.to(
        marqueeRef.current,
        { autoAlpha: 1, y: 0, duration: 0.4 },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-screen flex flex-col overflow-hidden"
    >
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center pt-24 pb-16">
        <h1 className="font-heading font-black leading-[0.9] tracking-[-0.03em]">
          <span
            ref={kevinRef}
            className="block text-[clamp(3.5rem,13vw,9.5rem)] text-foreground"
          >
            KEVIN
          </span>
          <span
            ref={gonzalezRef}
            className="block text-[clamp(3.5rem,13vw,9.5rem)] text-stroke-heading text-white"
          >
            GONZALEZ
          </span>
        </h1>

        <div
          ref={bioRef}
          className="mt-8 inline-block max-w-xl border-2 border-foreground bg-yellow-300 px-6 py-4 shadow-[4px_4px_0_var(--foreground)]"
        >
          <p className="text-sm md:text-base leading-relaxed font-medium text-foreground">
            Software Engineering Student from Baja California, Mexico. Passionate
            about emerging technologies and software development.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/kewvydev"
            target="_blank"
            rel="noopener noreferrer"
            className={`hero-cta ${BTN_BASE} bg-foreground text-background shadow-[4px_4px_0_#facc15] hover:bg-yellow-300 hover:text-foreground`}
          >
            <Github size={15} strokeWidth={2.5} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-gonzalez-torres/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hero-cta ${BTN_BASE} bg-foreground text-background shadow-[4px_4px_0_#facc15] hover:bg-yellow-300 hover:text-foreground`}
          >
            <Linkedin size={15} strokeWidth={2.5} />
            LinkedIn
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className={`hero-cta ${BTN_BASE} bg-white text-foreground shadow-[4px_4px_0_var(--foreground)] hover:bg-yellow-300`}
          >
            <Mail size={15} strokeWidth={2.5} />
            Email
          </a>
          <a
            href="/Resume_Kevin_Gonzalez.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`hero-cta ${BTN_BASE} bg-white text-foreground shadow-[4px_4px_0_var(--foreground)] hover:bg-yellow-300`}
          >
            <Download size={15} strokeWidth={2.5} />
            CV
          </a>
        </div>
      </div>

      <div
        ref={marqueeRef}
        className="relative z-10 overflow-hidden border-y-2 border-foreground bg-yellow-300"
      >
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
            (item, i) => (
              <span
                key={i}
                className="mx-4 text-xs font-black uppercase tracking-widest text-foreground"
              >
                /// {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
