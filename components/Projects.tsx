"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Github,
  MonitorSmartphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projects } from "@/app/page";

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1)),
    [],
  );
  const next = useCallback(
    () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1)),
    [],
  );

  const project = projects[current];
  const num = `0${current + 1}`;

  return (
    <section
      id="projects"
      className="w-full border-y-2 border-foreground bg-yellow-300"
    >
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="font-heading font-black leading-[0.9] tracking-tighter">
            <span className="block text-5xl sm:text-7xl md:text-[7rem] uppercase text-white text-stroke-heading">
              SELECTED <br /> PROJECTS
            </span>
          </h2>

          <div className="flex flex-col items-start md:items-end gap-1 mb-3 shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/60">
              Total Projects
            </span>
            <span className="text-5xl font-black font-heading leading-none text-foreground">
              0{projects.length}
            </span>
          </div>
        </div>

        <div className="mt-8 border-t-2 border-dashed border-foreground/40" />
      </div>

      {/* Carousel */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        {/* Navigation arrows + counter */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="inline-flex items-center justify-center w-12 h-12 border-2 border-foreground bg-background shadow-[3px_3px_0_var(--foreground)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all active:scale-95"
            >
              <ChevronLeft size={22} strokeWidth={3} />
            </button>
            <button
              onClick={next}
              aria-label="Next project"
              className="inline-flex items-center justify-center w-12 h-12 border-2 border-foreground bg-background shadow-[3px_3px_0_var(--foreground)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all active:scale-95"
            >
              <ChevronRight size={22} strokeWidth={3} />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`w-3 h-3 border-2 border-foreground transition-all ${
                  i === current
                    ? "bg-foreground scale-125"
                    : "bg-background hover:bg-foreground/30"
                }`}
              />
            ))}
            <span className="ml-3 text-sm font-black font-mono text-foreground">
              {num} / 0{projects.length}
            </span>
          </div>
        </div>

        {/* Main card */}
        <article className="border-2 border-foreground bg-background shadow-[6px_6px_0_var(--foreground)] overflow-hidden group">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b-2 border-foreground px-5 py-3 bg-foreground">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-background/60">
              Featured Project
            </span>
            <span className="text-xs font-black text-background font-mono">
              {num}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image — takes full half of the card */}
            {project.image ? (
              <div className="relative w-full aspect-4/3 md:aspect-auto md:min-h-[420px] border-b-2 md:border-b-0 md:border-r-2 border-foreground overflow-hidden">
                <Image
                  key={project.image}
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="relative w-full aspect-4/3 md:aspect-auto md:min-h-[420px] border-b-2 md:border-b-0 md:border-r-2 border-foreground bg-foreground/5 flex items-center justify-center">
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

            {/* Content */}
            <div className="relative p-8 md:p-10 flex flex-col justify-center">
              <span
                className="absolute -top-4 -right-2 text-[10rem] md:text-[14rem] font-black font-heading leading-none select-none pointer-events-none"
                style={{ color: "var(--foreground)", opacity: 0.04 }}
              >
                {num}
              </span>

              <h3 className="relative text-2xl md:text-4xl font-black font-heading uppercase leading-tight mb-4 text-stroke-base text-white">
                {project.title}
              </h3>

              <p className="relative text-sm md:text-base leading-relaxed text-muted-foreground mb-6 max-w-md">
                {project.description}
              </p>

              <div className="relative flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] font-bold uppercase border-2 border-foreground bg-yellow-300 shadow-[2px_2px_0_var(--foreground)]"
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-widest border-2 border-foreground bg-foreground text-background shadow-[3px_3px_0_#facc15] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-widest border-2 border-foreground bg-background shadow-[3px_3px_0_var(--foreground)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
                  >
                    <Github size={14} strokeWidth={2.5} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* Thumbnail strip */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {projects.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setCurrent(i)}
              className={`border-2 border-foreground overflow-hidden transition-all duration-200 ${
                i === current
                  ? "shadow-[4px_4px_0_var(--foreground)] ring-2 ring-foreground"
                  : "opacity-60 hover:opacity-100 shadow-[3px_3px_0_var(--foreground)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
              }`}
            >
              <div className="flex items-center gap-2 px-3 py-2 bg-foreground">
                <span className="text-[10px] font-black text-background font-mono">
                  0{i + 1}
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-background truncate">
                  {p.title}
                </span>
              </div>
              {p.image ? (
                <div className="relative w-full h-20 sm:h-28 bg-background">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-20 sm:h-28 bg-foreground/5 flex items-center justify-center">
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

        {/* Bottom CTA strip */}
        <div className="mt-6 border-2 border-foreground bg-foreground px-6 py-4 shadow-[5px_5px_0_#facc15] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm font-black uppercase tracking-widest text-background">
            More projects on my GitHub
          </p>
          <a
            href="https://github.com/kewvydev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-widest border-2 border-background text-background shadow-[3px_3px_0_#facc15] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
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
