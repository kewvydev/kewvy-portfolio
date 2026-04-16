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
      // Bio card from left
      gsap.set(".about-bio", { autoAlpha: 0, x: -35 });
      ScrollTrigger.create({
        trigger: ".about-bio",
        start: "top 85%",
        onEnter: () => {
          gsap.to(".about-bio", {
            autoAlpha: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
          });
        },
        once: true,
      });

      // Education card from right
      gsap.set(".about-edu", { autoAlpha: 0, x: 25 });
      ScrollTrigger.create({
        trigger: ".about-edu",
        start: "top 85%",
        onEnter: () => {
          gsap.to(".about-edu", {
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.1,
          });
        },
        once: true,
      });

      // Photo scale + slide
      gsap.set(".about-photo", { autoAlpha: 0, scale: 0.9, x: 20 });
      ScrollTrigger.create({
        trigger: ".about-photo",
        start: "top 85%",
        onEnter: () => {
          gsap.to(".about-photo", {
            autoAlpha: 1,
            scale: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.2,
          });
        },
        once: true,
      });

      // Quote card from below with slight rotation settle
      gsap.set(".about-quote", { autoAlpha: 0, y: 25, rotation: -2 });
      ScrollTrigger.create({
        trigger: ".about-quote",
        start: "top 88%",
        onEnter: () => {
          gsap.to(".about-quote", {
            autoAlpha: 1,
            y: 0,
            rotation: 0,
            duration: 0.5,
            ease: "back.out(1.2)",
          });
        },
        once: true,
      });

      // Terminal card + line stagger
      gsap.set(".about-terminal", { autoAlpha: 0, y: 30 });
      gsap.set(".terminal-line", { autoAlpha: 0, x: -10 });
      ScrollTrigger.create({
        trigger: ".about-terminal",
        start: "top 88%",
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(".about-terminal", {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
          tl.to(
            ".terminal-line",
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.25,
              stagger: 0.06,
              ease: "power2.out",
            },
            "-=0.1"
          );
        },
        once: true,
      });
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
            Hi! I&apos;m Kevin, a Software Engineering student based in
            Ensenada, Mexico. I enjoy building things that live on the web, from
            interactive front-ends to robust back-end services. My curiosity
            drives me to explore new technologies and solve problems that{" "}
            <span className="bg-yellow-300 px-1.5 font-bold border border-foreground text-foreground">
              actually matter
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
