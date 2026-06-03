"use client";

import { useRef, useEffect, useState } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

type SkillCategory = {
  name: string;
  skills: string[];
};

type SkillsProps = {
  categories: SkillCategory[];
};

const CATEGORY_COLORS = [
  "var(--chart-2)",
  "var(--chart-1)",
  "var(--chart-4)",
  "var(--chart-5)",
];

export default function Skills({ categories }: SkillsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = prefersReducedMotion();

  const totalSkills = categories.reduce(
    (total, category) => total + category.skills.length,
    0
  );

  // Animate tags whenever the active tab changes
  useEffect(() => {
    if (reduced) return;
    if (!panelRef.current) return;

    const tags = panelRef.current.querySelectorAll<HTMLElement>(".skill-tag");
    if (!tags.length) return;

    gsap.fromTo(
      tags,
      { autoAlpha: 0, y: 12, scale: 0.92 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.3,
        stagger: 0.04,
        ease: "back.out(1.4)",
        overwrite: true,
      }
    );
  }, [activeIndex, reduced]);

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

      // Tabs stagger in
      const tabs = gsap.utils.toArray<HTMLElement>(".skills-tab");
      if (tabs.length) {
        const tabTl = gsap.timeline({ paused: true });
        tabTl.fromTo(
          tabs,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: "power2.out",
          }
        );
        onScroll(".skills-tabs", tabTl, "top 85%");
      }

      // Panel reveal
      const panelTw = gsap.fromTo(
        ".skills-panel",
        { autoAlpha: 0, y: 15 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out", paused: true }
      );
      onScroll(".skills-panel", panelTw, "top 85%");
    }, sectionRef);

    return () => ctx.revert();
  }, [categories]);

  const activeCategory = categories[activeIndex];
  const tabId = (i: number) => `skills-tab-${i}`;
  const panelId = (i: number) => `skills-panel-${i}`;

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

        {/* Brutalist Tabs */}
        <div
          className="skills-tabs grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
          role="tablist"
          aria-label="Skill categories"
        >
          {categories.map((category, index) => {
            const isActive = activeIndex === index;
            const accent = CATEGORY_COLORS[index % CATEGORY_COLORS.length];

            return (
              <button
                key={category.name}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={panelId(index)}
                id={tabId(index)}
                onClick={() => setActiveIndex(index)}
                className={`skills-tab relative flex flex-col items-start justify-between gap-2 px-3 py-3 md:px-4 md:py-4 border-2 border-foreground text-left transition-all duration-150 ${
                  isActive
                    ? "bg-foreground text-background shadow-none translate-x-[3px] translate-y-[3px]"
                    : "bg-background text-foreground shadow-[3px_3px_0_var(--foreground)] hover:shadow-[2px_2px_0_var(--foreground)] hover:translate-x-[1px] hover:translate-y-[1px]"
                }`}
              >
                <span
                  className={`w-3 h-3 border-2 ${
                    isActive ? "border-background" : "border-foreground"
                  }`}
                  style={{ background: accent }}
                />
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.12em] leading-tight">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Panel */}
        <div
          ref={panelRef}
          className="skills-panel mt-5 md:mt-6 border-2 border-foreground bg-white p-5 md:p-8 shadow-[4px_4px_0_var(--foreground)]"
          role="tabpanel"
          aria-labelledby={tabId(activeIndex)}
          id={panelId(activeIndex)}
        >
          <div className="flex items-center justify-between mb-4 md:mb-6 border-b-2 border-dashed border-foreground/20 pb-3">
            <div className="flex items-center gap-3 min-w-0">
              <span
                className="w-4 h-4 border-2 border-foreground shrink-0"
                style={{
                  background:
                    CATEGORY_COLORS[activeIndex % CATEGORY_COLORS.length],
                }}
              />
              <h3 className="text-lg md:text-xl font-black uppercase tracking-[0.15em] truncate">
                {activeCategory.name}
              </h3>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground shrink-0 ml-3">
              {activeCategory.skills.length} skills
            </span>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4">
            {activeCategory.skills.map((skill) => (
              <span
                key={skill}
                className="skill-tag px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base font-bold uppercase border-2 border-foreground bg-accent shadow-[3px_3px_0_var(--foreground)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-default select-none"
              >
                {skill}
              </span>
            ))}
          </div>
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
