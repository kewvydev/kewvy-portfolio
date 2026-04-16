"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useRef, useCallback } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export default function ScrollToTopButton() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const isShown = useRef(false);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const reduced = prefersReducedMotion();

    gsap.set(btn, { autoAlpha: 0, scale: 0.6, y: 10 });

    const handleScroll = () => {
      const shouldShow = window.scrollY > 320;
      if (shouldShow === isShown.current) return;
      isShown.current = shouldShow;

      if (reduced) {
        gsap.set(btn, {
          autoAlpha: shouldShow ? 1 : 0,
          scale: 1,
          y: 0,
          pointerEvents: shouldShow ? "auto" : "none",
        });
        return;
      }

      if (shouldShow) {
        gsap.to(btn, {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.35,
          ease: "back.out(2)",
          onStart: () => {
            btn.style.pointerEvents = "auto";
          },
        });
      } else {
        gsap.to(btn, {
          autoAlpha: 0,
          scale: 0.6,
          y: 10,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => {
            btn.style.pointerEvents = "none";
          },
        });
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    const btn = btnRef.current;
    if (btn && !prefersReducedMotion()) {
      gsap.to(btn, {
        scale: 0.85,
        duration: 0.1,
        ease: "power2.in",
        onComplete: () => {
          gsap.to(btn, { scale: 1, duration: 0.2, ease: "back.out(3)" });
        },
      });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      ref={btnRef}
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center border-2 border-foreground bg-yellow-300 text-foreground shadow-[4px_4px_0_var(--foreground)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      <ChevronUp size={22} strokeWidth={3} />
    </button>
  );
}
