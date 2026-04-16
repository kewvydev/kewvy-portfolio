"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Github,
  MonitorSmartphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projects } from "@/app/page";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1)),
    []
  );
  const next = useCallback(
    () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1)),
    []
  );

  // Section reveal
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const onScroll = (
        trigger: string | Element,
        anim: gsap.core.Timeline | gsap.core.Tween,
        start = "top 85%"
      ) => {
        ScrollTrigger.create({
          trigger,
          start,
          onEnter: () => anim.restart(),
          onEnterBack: () => anim.restart(),
          onLeave: () => anim.pause(0),
          onLeaveBack: () => anim.pause(0),
        });
      };

      // Heading + counter
      const headerTl = gsap.timeline({ paused: true });
      headerTl.fromTo(
        ".proj-heading",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );
      headerTl.fromTo(
        ".proj-counter",
        { autoAlpha: 0, scale: 0.8 },
        { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
        "-=0.4"
      );
      onScroll(".proj-header", headerTl, "top 80%");

      // Main card
      const cardTw = gsap.fromTo(
        ".proj-card",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          paused: true,
        }
      );
      onScroll(".proj-card", cardTw);

      // Thumbnails — y-only to avoid conflict with CSS opacity classes
      const thumbTl = gsap.timeline({ paused: true });
      thumbTl.fromTo(
        ".proj-thumb",
        { y: 20 },
        { y: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" }
      );
      onScroll(".proj-thumbs", thumbTl, "top 90%");

      // CTA strip
      const ctaTw = gsap.fromTo(
        ".proj-cta-strip",
        { autoAlpha: 0, y: 15 },
        { autoAlpha: 1, y: 0, duration: 0.4, paused: true }
      );
      onScroll(".proj-cta-strip", ctaTw, "top 92%");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Carousel transition
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (prefersReducedMotion() || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { autoAlpha: 0.3, x: 15 },
      { autoAlpha: 1, x: 0, duration: 0.35, ease: "power2.out" }
    );
  }, [current]);

  const project = projects[current];
  const num = `0${current + 1}`;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full border-y-2 border-foreground bg-yellow-300"
    >
      <div className="proj-header mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="proj-heading font-heading font-black leading-[0.9] tracking-tighter">
            <span className="block text-5xl sm:text-7xl md:text-[7rem] uppercase text-white text-stroke-heading">
              SELECTED <br /> PROJECTS
            </span>
          </h2>

          <div className="proj-counter flex flex-col items-start md:items-end gap-1 mb-3 shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/50">
              Total Projects
            </span>
            <span className="text-5xl font-black font-heading leading-none text-foreground">
              0{projects.length}
            </span>
          </div>
        </div>

        <div className="mt-8 border-t-2 border-dashed border-foreground/30" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="inline-flex items-center justify-center w-12 h-12 border-2 border-foreground bg-white shadow-[4px_4px_0_var(--foreground)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all active:scale-95"
            >
              <ChevronLeft size={22} strokeWidth={3} />
            </button>
            <button
              onClick={next}
              aria-label="Next project"
              className="inline-flex items-center justify-center w-12 h-12 border-2 border-foreground bg-white shadow-[4px_4px_0_var(--foreground)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all active:scale-95"
            >
              <ChevronRight size={22} strokeWidth={3} />
            </button>
          </div>

          <div className="flex items-center gap-2.5">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`w-3.5 h-3.5 border-2 border-foreground transition-all ${
                  i === current
                    ? "bg-foreground scale-110"
                    : "bg-white hover:bg-foreground/30"
                }`}
              />
            ))}
            <span className="ml-3 text-sm font-black font-mono text-foreground">
              {num} / 0{projects.length}
            </span>
          </div>
        </div>

        <article className="proj-card border-2 border-foreground bg-white shadow-[6px_6px_0_var(--foreground)] overflow-hidden group">
          <div className="flex items-center justify-between border-b-2 border-foreground px-6 py-3.5 bg-foreground">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-background/50">
              Featured Project
            </span>
            <span className="text-xs font-black text-background font-mono">
              {num}
            </span>
          </div>

          <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2">
            {project.image ? (
              <div className="relative w-full aspect-4/3 md:aspect-auto md:min-h-[440px] border-b-2 md:border-b-0 md:border-r-2 border-foreground overflow-hidden">
                <Image
                  key={project.image}
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="relative w-full aspect-4/3 md:aspect-auto md:min-h-[440px] border-b-2 md:border-b-0 md:border-r-2 border-foreground bg-foreground/5 flex items-center justify-center">
                <MonitorSmartphone
                  size={64}
                  strokeWidth={1.5}
                  className="text-foreground/20"
                />
                <span className="absolute bottom-4 right-5 text-[10px] font-bold uppercase tracking-widest text-foreground/30">
                  No preview
                </span>
              </div>
            )}

            <div className="relative p-8 md:p-12 flex flex-col justify-center">
              <span
                className="absolute -top-4 -right-2 text-[10rem] md:text-[14rem] font-black font-heading leading-none select-none pointer-events-none"
                style={{ color: "var(--foreground)", opacity: 0.04 }}
              >
                {num}
              </span>

              <h3 className="relative text-2xl md:text-3xl font-black font-heading uppercase leading-tight mb-4">
                {project.title}
              </h3>

              <p className="relative text-sm md:text-base leading-relaxed text-muted-foreground mb-6 max-w-md">
                {project.description}
              </p>

              <div className="relative flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] font-bold uppercase border-2 border-foreground bg-yellow-300 shadow-[2px_2px_0_var(--foreground)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="relative flex gap-3">
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-widest border-2 border-foreground bg-foreground text-background shadow-[4px_4px_0_#facc15] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                  >
                    <ArrowUpRight size={14} strokeWidth={3} />
                    Live Demo
                  </a>
                )}
                {project.code !== "#" && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-widest border-2 border-foreground bg-white shadow-[4px_4px_0_var(--foreground)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                  >
                    <Github size={14} strokeWidth={2.5} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>

        <div className="proj-thumbs mt-5 grid grid-cols-3 gap-3">
          {projects.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setCurrent(i)}
              className={`proj-thumb border-2 border-foreground overflow-hidden transition-all duration-200 ${
                i === current
                  ? "shadow-[4px_4px_0_var(--foreground)] ring-2 ring-foreground"
                  : "opacity-60 hover:opacity-100 shadow-[4px_4px_0_var(--foreground)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
              }`}
            >
              <div className="flex items-center gap-2 px-3 py-2.5 bg-foreground">
                <span className="text-[10px] font-black text-background font-mono">
                  0{i + 1}
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-background truncate">
                  {p.title}
                </span>
              </div>
              {p.image ? (
                <div className="relative w-full h-24 sm:h-32 bg-white">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-24 sm:h-32 bg-foreground/5 flex items-center justify-center">
                  <MonitorSmartphone
                    size={24}
                    strokeWidth={1.5}
                    className="text-foreground/20"
                  />
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="proj-cta-strip mt-6 border-2 border-foreground bg-foreground px-6 py-4 shadow-[4px_4px_0_#facc15] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm font-black uppercase tracking-widest text-background">
            More projects on my GitHub
          </p>
          <a
            href="https://github.com/kewvydev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-widest border-2 border-background text-background shadow-[4px_4px_0_#facc15] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
          >
            <Github size={14} strokeWidth={2.5} />
            github.com/kewvydev
            <ArrowUpRight size={14} strokeWidth={3} />
          </a>
        </div>
      </div>
    </section>
  );
}
