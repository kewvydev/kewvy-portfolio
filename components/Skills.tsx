"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

type SkillCategory = {
  name: string;
  skills: string[];
};

type SkillsProps = {
  categories: SkillCategory[];
};

export default function Skills({ categories }: SkillsProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const totalSkills = categories.reduce(
    (total, category) => total + category.skills.length,
    0
  );

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

      // Header block from left
      const headerTw = gsap.fromTo(
        ".skills-header",
        { autoAlpha: 0, x: -30 },
        { autoAlpha: 1, x: 0, duration: 0.5, ease: "power2.out", paused: true }
      );
      onScroll(".skills-header", headerTw, "top 80%");

      // Stat cards pop
      const statTl = gsap.timeline({ paused: true });
      statTl.fromTo(
        ".skills-stat",
        { autoAlpha: 0, y: 20, scale: 0.9 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(1.4)",
        }
      );
      onScroll(".skills-stats", statTl, "top 80%");

      // Per-category: card slide-up + tags pop-in
      gsap.utils
        .toArray<HTMLElement>(".skills-category")
        .forEach((cat) => {
          const tags = cat.querySelectorAll(".skill-tag");
          const tl = gsap.timeline({ paused: true });
          tl.fromTo(
            cat,
            { autoAlpha: 0, y: 25 },
            { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" }
          );
          tl.fromTo(
            tags,
            { autoAlpha: 0, scale: 0.7 },
            {
              autoAlpha: 1,
              scale: 1,
              duration: 0.3,
              stagger: 0.03,
              ease: "back.out(1.8)",
            },
            "-=0.2"
          );
          onScroll(cat, tl, "top 88%");
        });
    }, sectionRef);

    return () => ctx.revert();
  }, [categories]);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="skills-container border-2 border-foreground bg-white p-6 md:p-8 shadow-[6px_6px_0_var(--foreground)]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="skills-header lg:col-span-2 border-2 border-foreground bg-foreground text-background p-6 md:p-8 shadow-[4px_4px_0_var(--foreground)]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-background/50 mb-3">
              Technical Profile
            </p>
            <h2 className="text-4xl md:text-5xl font-black font-heading leading-[0.95]">
              SKILLS<span className="text-yellow-300">.</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-background/70 max-w-xl leading-relaxed">
              Tools and technologies I use to build complete products, from the
              interface to infrastructure and deployment.
            </p>
          </div>

          <div className="skills-stats grid grid-cols-2 lg:grid-cols-1 gap-5">
            <div className="skills-stat border-2 border-foreground bg-yellow-300 p-5 shadow-[4px_4px_0_var(--foreground)]">
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-foreground/50">
                Total Skills
              </p>
              <p className="text-4xl font-black font-heading leading-none mt-2">
                {totalSkills}
              </p>
            </div>
            <div className="skills-stat border-2 border-foreground bg-green-400 p-5 shadow-[4px_4px_0_var(--foreground)]">
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-foreground/50">
                Status
              </p>
              <p className="text-sm md:text-base font-black uppercase tracking-wide mt-2">
                Production Ready
              </p>
            </div>
          </div>
        </div>

        <div className="my-6 border-t-2 border-dashed border-foreground/30" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="skills-category border-2 border-foreground bg-background shadow-[4px_4px_0_var(--foreground)]"
            >
              <div className="flex items-center justify-between border-b-2 border-foreground px-4 py-3">
                <p className="text-xs font-black uppercase tracking-[0.15em]">
                  {category.name}
                </p>
                <span
                  className="w-3.5 h-3.5 border-2 border-foreground"
                  style={{
                    background:
                      index % 4 === 0
                        ? "var(--chart-2)"
                        : index % 4 === 1
                          ? "var(--chart-1)"
                          : index % 4 === 2
                            ? "var(--chart-4)"
                            : "var(--chart-5)",
                  }}
                />
              </div>

              <div className="p-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-3 py-1.5 text-xs font-bold uppercase border-2 border-foreground bg-accent shadow-[2px_2px_0_var(--foreground)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t-2 border-foreground/20 pt-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Modules: {categories.length}
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Last Update: Live
          </p>
        </div>
      </div>
    </section>
  );
}
