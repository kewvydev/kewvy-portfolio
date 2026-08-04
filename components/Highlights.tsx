"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Award, Code2, Trophy } from "lucide-react";
import { featuredResearch, highlights } from "@/app/page";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const icons = [Trophy, Code2, Award];
const accentColors = ["bg-yellow-300", "bg-[#ff6b5f]", "bg-blue-400"];

export default function Highlights() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const reveal = (selector: string, x = 0, y = 24) => {
        gsap.utils.toArray<HTMLElement>(selector).forEach((element, index) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, x, y },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              duration: 0.6,
              delay: index * 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
              },
            }
          );
        });
      };

      reveal(".highlights-heading", 0, 35);
      reveal(".highlight-featured", 0, 40);
      reveal(".highlight-card", 0, 25);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="highlights"
      ref={sectionRef}
      className="w-full border-b-2 border-foreground"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="highlights-heading mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
              Beyond the builds // 03
            </p>
            <h2 className="font-heading text-5xl font-black uppercase leading-[0.88] tracking-tighter text-white text-stroke-heading sm:text-7xl md:text-[7rem]">
              HIGHLIGHTS
            </h2>
          </div>
        </div>

        <article className="highlight-featured overflow-hidden border-2 border-foreground bg-[#fffdf5] shadow-[8px_8px_0_var(--foreground)]">
          <div className="flex items-center justify-between border-b-2 border-foreground bg-foreground px-4 py-3">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-background">
              Featured // Research
            </span>
          </div>

          <div className="mx-auto max-w-6xl p-6 md:p-10 lg:p-12">
            <div className="grid gap-8 md:grid-cols-[1.35fr_0.65fr] md:items-end md:gap-12">
              <h3 className="max-w-4xl font-heading text-3xl font-black uppercase leading-[0.92] tracking-tight md:text-5xl lg:text-6xl">
                The Impact of Immediate Interaction Systems in User Experience of Traditional Digital Interfaces
              </h3>
              <div>
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-foreground/50">
                  Abstract / overview
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  An in-depth academic research project exploring how short-form content platforms and LLM-based assistants influence tolerance, efficiency, and satisfaction when people interact with traditional digital interfaces.
                </p>
              </div>
            </div>

            <div className="mt-9 border-l-4 border-yellow-300 bg-[#f7eadb] p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-foreground/60">Context</p>
              <p className="mt-2 text-xs leading-relaxed">
                Developed for a university course and prepared in the style of an IEEE Access submission. The paper was not submitted for review, but the investigation remains a meaningful part of my academic work.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {['UX Research', 'HCI', 'Usability', 'Cognitive Workload'].map((tag) => (
                <span key={tag} className="border-2 border-foreground bg-white px-2 py-1 text-[10px] font-bold uppercase shadow-[2px_2px_0_var(--foreground)]">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={featuredResearch.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border-2 border-foreground bg-foreground px-5 py-3 text-xs font-black uppercase tracking-widest text-background shadow-[4px_4px_0_#facc15] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
            >
              Read article
              <ArrowUpRight size={15} strokeWidth={3} />
            </a>
          </div>
        </article>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article key={highlight.title} className="highlight-card group relative border-2 border-foreground bg-white p-5 shadow-[4px_4px_0_var(--foreground)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--foreground)]">
                <div className={`mb-7 flex h-11 w-11 items-center justify-center border-2 border-foreground ${accentColors[index % accentColors.length]} shadow-[3px_3px_0_var(--foreground)]`}>
                  <Icon size={21} strokeWidth={2.5} />
                </div>
                <span className="absolute right-5 top-5 font-mono text-xs font-black text-foreground/35">0{index + 1}</span>
                <h4 className="font-heading text-xl font-black uppercase leading-tight">{highlight.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{highlight.description}</p>
                <div className="mt-6 flex items-center justify-between border-t-2 border-dashed border-foreground/20 pt-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">{highlight.type}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
