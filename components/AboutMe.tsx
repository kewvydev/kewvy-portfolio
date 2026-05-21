"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const TERMINAL_LINES = [
  { prompt: "~/kevin", cmd: "cat skills.txt" },
  { output: "Full Stack & Web Development" },
  { output: "Clean Architecture & Quality Code" },
  { output: "Building applications that solve problems" },
  { prompt: "~/kevin", cmd: "echo $STATUS" },
  { output: "Ready to collaborate ✓" },
];

export default function AboutMe() {
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

      // Bio card from left
      const bioTw = gsap.fromTo(
        ".about-bio",
        { autoAlpha: 0, x: -35 },
        { autoAlpha: 1, x: 0, duration: 0.6, ease: "power2.out", paused: true }
      );
      onScroll(".about-bio", bioTw);

      // Education card from right
      const eduTw = gsap.fromTo(
        ".about-edu",
        { autoAlpha: 0, x: 25 },
        { autoAlpha: 1, x: 0, duration: 0.5, ease: "power2.out", paused: true }
      );
      onScroll(".about-edu", eduTw);

      // Photo scale + slide
      const photoTw = gsap.fromTo(
        ".about-photo",
        { autoAlpha: 0, scale: 0.9, x: 20 },
        {
          autoAlpha: 1,
          scale: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
          paused: true,
        }
      );
      onScroll(".about-photo", photoTw);

      // Quote card from below with slight rotation settle
      const quoteTw = gsap.fromTo(
        ".about-quote",
        { autoAlpha: 0, y: 25, rotation: -2 },
        {
          autoAlpha: 1,
          y: 0,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(1.2)",
          paused: true,
        }
      );
      onScroll(".about-quote", quoteTw, "top 88%");

      // Terminal card + line stagger
      const termTl = gsap.timeline({ paused: true });
      termTl.fromTo(
        ".about-terminal",
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
      termTl.fromTo(
        ".terminal-line",
        { autoAlpha: 0, x: -10 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.25,
          stagger: 0.06,
          ease: "power2.out",
        },
        "-=0.1"
      );
      onScroll(".about-terminal", termTl, "top 88%");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="about-bio md:col-span-2 border-2 border-foreground bg-white p-8 md:p-10 shadow-[4px_4px_0_var(--foreground)]">
          <h2 className="text-4xl md:text-5xl font-black font-heading mb-6 leading-[0.9]">
            ABOUT
            <br />
            <span className="text-stroke-heading text-white">ME</span>
            <span className="text-yellow-400">.</span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed max-w-lg text-muted-foreground">
            Hi! I&apos;m Kevin, a Software Engineering student passionate about technology and software development.
            I excel at communicating solutions clearly and effectively. Committed to continuous improvement,
            I seek to merge my solid technical background with the dedication to provide {" "}
            <span className="bg-yellow-300 px-1.5 font-bold border border-foreground text-foreground">
              exceptional results
            </span>
            .
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="about-edu flex-1 border-2 border-foreground bg-yellow-300 p-5 shadow-[4px_4px_0_var(--foreground)] flex flex-col justify-center">
            <GraduationCap size={20} strokeWidth={2.5} className="mb-2" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">
              Education
            </span>
            <span className="text-base font-black font-heading leading-tight mt-1">
              B.S. Software Engineering and Emerging Technologies
            </span>
          </div>

          <div className="about-photo aspect-square border-2 border-foreground bg-white shadow-[4px_4px_0_var(--foreground)] overflow-hidden relative">
            <Image src="/me.jpeg" alt="Kevin" fill className="object-cover" />
          </div>
        </div>

        <div className="about-quote border-2 border-foreground bg-foreground text-background p-6 shadow-[4px_4px_0_#facc15] flex items-center">
          <p className="text-base md:text-lg font-black font-heading leading-snug">
            &ldquo;I don&apos;t just write code, I build experiences that refuse
            to be boring.&rdquo;
          </p>
        </div>

        <div className="about-terminal md:col-span-2 border-2 border-foreground bg-foreground shadow-[4px_4px_0_var(--foreground)] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b-2 border-foreground/20">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-3 text-[11px] font-bold text-background/50 uppercase tracking-widest">
              terminal
            </span>
          </div>
          <div className="p-5 font-mono text-sm space-y-1.5">
            {TERMINAL_LINES.map((line, i) =>
              "cmd" in line ? (
                <p key={i} className="terminal-line text-green-400">
                  <span className="text-blue-400">{line.prompt}</span>
                  <span className="text-background/40">$</span> {line.cmd}
                </p>
              ) : (
                <p key={i} className="terminal-line text-background/70 pl-2">
                  {line.output}
                </p>
              )
            )}
            <p className="text-green-400 animate-pulse">▊</p>
          </div>
        </div>
      </div>
    </section>
  );
}
