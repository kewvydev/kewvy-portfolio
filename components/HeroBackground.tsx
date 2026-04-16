"use client";

import { useRef, useEffect } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  const FIGURE_BASE =
    "border-2 border-foreground shadow-[4px_4px_0_var(--foreground)]";

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(".shape-blue", {
        y: 15,
        x: -8,
        rotation: "+=10",
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".shape-pink", {
        y: -12,
        x: 10,
        rotation: "-=8",
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".shape-diamond-1", {
        y: 8,
        rotation: "+=15",
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".shape-diamond-2", {
        y: -10,
        x: -5,
        rotation: "-=12",
        duration: 4.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".shape-watermark", {
        y: 10,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none select-none"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className={`shape-blue absolute top-[24%] left-[6%] w-12 h-12 bg-blue-500 rotate-6 ${FIGURE_BASE}`}
      />

      <div
        className={`shape-pink absolute top-[40%] right-[7%] w-16 h-16 rounded-full bg-pink-300 ${FIGURE_BASE}`}
      />

      <div
        className={`shape-diamond-1 absolute bottom-[24%] left-[15%] w-5 h-5 bg-yellow-300 rotate-45 ${FIGURE_BASE}`}
      />
      <div
        className={`shape-diamond-2 absolute top-[18%] right-[20%] w-4 h-4 bg-green-400 rotate-45 ${FIGURE_BASE}`}
      />

      <span className="shape-watermark absolute top-[8%] right-[3%] text-8xl font-black text-foreground/5 tracking-widest font-heading">
        PORTFOLIO
      </span>
    </div>
  );
}
