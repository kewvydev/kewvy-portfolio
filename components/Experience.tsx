"use client";

import { useRef, useEffect } from "react";
import { experiences } from "@/app/page";
import { MapPin } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const ACCENT_BG = [
  "bg-yellow-300",
  "bg-blue-400",
  "bg-pink-400",
  "bg-green-400",
];

export default function Experience() {
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

      // Heading timeline
      const htl = gsap.timeline({ paused: true });
      htl.fromTo(
        ".exp-label",
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.4 }
      );
      htl.fromTo(
        ".exp-heading",
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.15"
      );
      htl.fromTo(
        ".exp-badge",
        { autoAlpha: 0, scale: 0.8 },
        { autoAlpha: 1, scale: 1, duration: 0.4, ease: "back.out(1.5)" },
        "-=0.2"
      );
      onScroll(".exp-header", htl, "top 80%");

      // Cards — alternate from left/right
      gsap.utils.toArray<HTMLElement>(".exp-card").forEach((card, i) => {
        const fromX = i % 2 === 0 ? -40 : 40;
        const tw = gsap.fromTo(
          card,
          { autoAlpha: 0, x: fromX },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            paused: true,
          }
        );
        onScroll(card, tw);
      });

      // Timeline dots
      gsap.utils.toArray<HTMLElement>(".exp-dot").forEach((dot) => {
        const tw = gsap.fromTo(
          dot,
          { autoAlpha: 0, scale: 0 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.35,
            ease: "back.out(2.5)",
            paused: true,
          }
        );
        onScroll(dot, tw);
      });

      // Footer
      const ftw = gsap.fromTo(
        ".exp-footer",
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.4, paused: true }
      );
      onScroll(".exp-footer", ftw, "top 92%");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="exp-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
              Career Journey // 01
            </p>
            <h2 className="exp-heading text-5xl md:text-6xl font-black font-heading leading-[0.9] tracking-tight text-stroke-heading text-white">
              EXPERIENCE
              <span className="text-yellow-400">_PATH</span>
            </h2>
          </div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-foreground/20" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="exp-card relative">
                <article
                  className={`relative border-2 border-foreground bg-white p-6 shadow-[4px_4px_0_var(--foreground)] w-full md:w-[calc(50%-2.25rem)] ${
                    i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div
                    className={`absolute -top-2 -left-2 w-4 h-4 border-2 border-foreground ${ACCENT_BG[i % ACCENT_BG.length]}`}
                  />

                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest font-mono border-2 border-foreground bg-foreground text-background px-3 py-1.5 inline-block">
                      {exp.period}
                    </p>
                    <span
                      className={`md:hidden w-8 h-8 border-2 border-foreground ${ACCENT_BG[i % ACCENT_BG.length]} flex items-center justify-center text-xs font-black font-mono`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base md:text-lg font-black font-heading uppercase leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1.5">
                    <MapPin size={11} />
                    {exp.location}
                  </p>
                  <p className="text-sm font-bold mt-2">
                    <span className="text-muted-foreground">@</span>{" "}
                    <span className="bg-yellow-300 px-1.5 border border-foreground">
                      {exp.company}
                    </span>
                  </p>
                  <div className="my-4 border-t-2 border-dashed border-foreground/15" />
                  <div className="space-y-2.5">
                    {exp.bullets.map((b, j) => (
                      <p
                        key={j}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="text-foreground font-bold mr-1.5">
                          &gt;
                        </span>
                        {b}
                      </p>
                    ))}
                  </div>
                </article>

                <span
                  className={`exp-dot hidden md:flex absolute top-6 left-1/2 -translate-x-1/2 w-10 h-10 border-2 border-foreground ${ACCENT_BG[i % ACCENT_BG.length]} shadow-[4px_4px_0_var(--foreground)] font-black font-mono text-sm items-center justify-center`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="exp-footer mt-12 border-t-2 border-foreground/20 pt-4 flex items-center justify-between">
          <p>
            
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
            my {new Date().getFullYear()} experience_PATH!
          </p>
        </div>
      </div>
    </section>
  );
}
