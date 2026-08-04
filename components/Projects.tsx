"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  ArrowUpRight,
  Github,
  MonitorSmartphone,
  ChevronLeft,
  ChevronRight,
  Diamond,
  X,
} from "lucide-react";
import { featuredProjects, otherProjects } from "@/app/page";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

function ProjectImageCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  useEffect(() => {
    if (!trackRef.current) return;
    gsap.to(trackRef.current, {
      // The track is wider than the viewport, so one slide is only 1/N of it.
      xPercent: -(current * (100 / images.length)),
      duration: 0.4,
      ease: "power2.out",
    });
  }, [current, images.length]);

  useEffect(() => {
    if (!isModalOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  if (images.length === 0) {
    return (
      <div className="relative aspect-[16/9] w-full bg-[#f7eadb] flex items-center justify-center">
        <MonitorSmartphone
          size={64}
          strokeWidth={1.5}
          className="text-foreground/20"
        />
        <span className="absolute bottom-4 right-5 text-[10px] font-bold uppercase tracking-widest text-foreground/30">
          No preview
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full overflow-hidden bg-transparent group">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f7eadb]">
        <div
          ref={trackRef}
          className="flex h-full w-full"
          style={{ width: `${images.length * 100}%` }}
        >
          {images.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-full w-full shrink-0 cursor-zoom-in"
              style={{ width: `${100 / images.length}%` }}
              role="button"
              tabIndex={0}
              aria-label={`Open ${title} image ${i + 1} larger`}
              onClick={() => setIsModalOpen(true)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setIsModalOpen(true);
                }
              }}
            >
              <Image
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <span className="pointer-events-none absolute right-3 top-3 border-2 border-foreground bg-yellow-300 px-2 py-1 text-[10px] font-black uppercase tracking-widest shadow-[3px_3px_0_var(--foreground)]">
          Click me!
        </span>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-6 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-9 h-9 border-2 border-foreground bg-yellow-300 shadow-[3px_3px_0_var(--foreground)] hover:shadow-none transition-shadow active:scale-95"
          >
            <ChevronLeft size={18} strokeWidth={3} />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-6 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-9 h-9 border-2 border-foreground bg-yellow-300 shadow-[3px_3px_0_var(--foreground)] hover:shadow-none transition-shadow active:scale-95"
          >
            <ChevronRight size={18} strokeWidth={3} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 border-2 border-foreground bg-white px-2 py-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`w-2.5 h-2.5 border border-foreground transition-all ${
                  i === current ? "bg-[#ff6b5f]" : "bg-foreground/15 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
      </div>

      {isModalOpen && typeof document !== "undefined" &&
        createPortal(
          <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image viewer`}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative flex max-h-[calc(100vh-2rem)] w-[94vw] max-w-[1400px] flex-col overflow-hidden border-2 border-foreground bg-[#fffdf5] p-3 shadow-[8px_8px_0_#facc15] md:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-2 border-foreground pb-3">
              <span className="text-xs font-black uppercase tracking-[0.25em]">
                {title} <span aria-hidden="true">/</span> Image {current + 1}/
                {images.length}
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close image viewer"
                className="inline-flex h-9 w-9 items-center justify-center border-2 border-foreground bg-yellow-300 shadow-[3px_3px_0_var(--foreground)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                <X size={18} strokeWidth={3} />
              </button>
            </div>

            <div className="relative my-4 aspect-[16/9] w-full shrink-0 overflow-hidden border-2 border-foreground bg-black">
              <Image
                src={images[current]}
                alt={`${title} screenshot ${current + 1}`}
                fill
                sizes="(max-width: 768px) 92vw, 1100px"
                className="object-cover"
              />
            </div>

            {images.length > 1 && (
              <div className="flex items-center justify-between border-t-2 border-foreground pt-3">
                <button
                  onClick={prev}
                  aria-label="Previous image"
                className="inline-flex items-center gap-2 border-2 border-foreground bg-white px-3 py-2 text-xs font-black uppercase shadow-[3px_3px_0_var(--foreground)] transition-shadow hover:shadow-none active:scale-95"
                >
                  <ChevronLeft size={16} strokeWidth={3} />
                  Prev
                </button>
                <div className="flex items-center gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`View image ${i + 1}`}
                      className={`h-3 w-3 border-2 border-foreground ${
                        i === current ? "bg-yellow-300" : "bg-white"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  aria-label="Next image"
                  className="inline-flex items-center gap-2 border-2 border-foreground bg-white px-3 py-2 text-xs font-black uppercase shadow-[3px_3px_0_var(--foreground)] transition-shadow hover:shadow-none active:scale-95"
                >
                  Next
                  <ChevronRight size={16} strokeWidth={3} />
                </button>
              </div>
            )}
          </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

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

      const headerTl = gsap.timeline({ paused: true });
      headerTl.fromTo(
        ".proj-heading",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );
      headerTl.fromTo(
        ".proj-subheading",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.4"
      );
      onScroll(".proj-header", headerTl, "top 80%");

      const featuredCards = gsap.utils.toArray<HTMLElement>(".featured-card");
      featuredCards.forEach((card) => {
        const anim = gsap.fromTo(
          card,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out", paused: true }
        );
        onScroll(card, anim, "top 82%");
      });

      const otherCards = gsap.utils.toArray<HTMLElement>(".other-card");
      otherCards.forEach((card, i) => {
        const anim = gsap.fromTo(
          card,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: i * 0.08,
            paused: true,
          }
        );
        onScroll(card, anim, "top 90%");
      });

      const ctaTl = gsap.fromTo(
        ".proj-cta-strip",
        { autoAlpha: 0, y: 15 },
        { autoAlpha: 1, y: 0, duration: 0.4, paused: true }
      );
      onScroll(".proj-cta-strip", ctaTl, "top 92%");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full border-y-2 border-foreground bg-yellow-300"
    >
      <div className="proj-header mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
              Selected Work // 02
            </p>
            <h2 className="proj-heading font-heading font-black leading-[0.9] tracking-tighter">
              <span className="block text-5xl sm:text-7xl md:text-[7rem] uppercase text-white text-stroke-heading">
                SELECTED <br /> PROJECTS
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-8 border-t-2 border-dashed border-foreground/30" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-6">
        <div className="space-y-12 md:space-y-16">
          {featuredProjects.map((project, index) => {
            const num = `0${index + 1}`;
            return (
              <article
                key={project.title}
                className={`featured-card relative border-2 border-foreground bg-[#fffdf5] shadow-[8px_8px_0_var(--foreground)] overflow-hidden ${
                  index % 2 === 1 ? "md:-rotate-[0.35deg]" : "md:rotate-[0.35deg]"
                }`}
              >
                <div className="flex items-center justify-between border-b-2 border-foreground px-4 py-3 bg-foreground">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-background">
                    Featured // Case {num}
                  </span>
                  <span className="h-3 w-3 border-2 border-background bg-[#ff6b5f]" />
                </div>

                <div className="grid grid-cols-1">
                  <div className="flex items-center justify-center bg-[#f7eadb] p-0">
                    <ProjectImageCarousel
                      images={project.images}
                      title={project.title}
                    />
                  </div>

                  <div className="relative border-t-2 border-foreground p-6 md:p-10">
                    <span className="absolute right-5 top-4 font-mono text-xs font-black text-foreground/40">
                      / {num}
                    </span>

                    <div className="relative mb-6 pr-10">
                      <h3 className="text-3xl md:text-5xl font-black font-heading uppercase leading-[0.9] tracking-tight mb-4">
                        {project.title}
                      </h3>
                      <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest border-2 border-foreground bg-[#ff6b5f] shadow-[3px_3px_0_var(--foreground)]">
                        {project.role}
                      </span>
                    </div>

                    <p className="relative text-sm leading-relaxed text-muted-foreground mb-7">
                      {project.description}
                    </p>

                    <div className="relative mb-7 border-l-4 border-yellow-300 bg-[#f7eadb] p-4">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/60 mb-3">
                        Contributions
                      </h4>
                      <ul className="space-y-2">
                        {project.contributions.map((contribution, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-xs leading-relaxed"
                          >
                            <Diamond
                              size={10}
                              strokeWidth={3}
                              className="mt-1 shrink-0 text-yellow-500"
                            />
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative mb-7">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/60 mb-3">
                        Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-[10px] font-bold uppercase border-2 border-foreground bg-white shadow-[2px_2px_0_var(--foreground)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-black uppercase tracking-widest border-2 border-foreground bg-foreground text-background shadow-[4px_4px_0_#facc15] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                        >
                          <ArrowUpRight size={14} strokeWidth={3} />
                          Demo
                        </a>
                      )}
                      {project.code !== "#" && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-black uppercase tracking-widest border-2 border-foreground bg-white shadow-[4px_4px_0_var(--foreground)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                        >
                          <Github size={14} strokeWidth={2.5} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-10 pb-20">
        <div className="mb-8">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-foreground/60">
            Other Projects
          </h3>
          <div className="mt-3 border-t-2 border-dashed border-foreground/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherProjects.map((project) => (
            <article
              key={project.title}
              className="other-card border-2 border-foreground bg-white shadow-[4px_4px_0_var(--foreground)] p-5 hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h4 className="text-lg font-black font-heading uppercase leading-tight">
                  {project.title}
                </h4>
                <div className="flex items-center gap-2 shrink-0">
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} demo`}
                      className="inline-flex items-center justify-center w-8 h-8 border-2 border-foreground bg-white shadow-[2px_2px_0_var(--foreground)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                      <ArrowUpRight size={14} strokeWidth={3} />
                    </a>
                  )}
                  {project.code !== "#" && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} code`}
                      className="inline-flex items-center justify-center w-8 h-8 border-2 border-foreground bg-white shadow-[2px_2px_0_var(--foreground)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                      <Github size={14} strokeWidth={2.5} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-bold uppercase border border-foreground bg-background"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="proj-cta-strip mt-8 border-2 border-foreground bg-foreground px-6 py-4 shadow-[4px_4px_0_#facc15] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
