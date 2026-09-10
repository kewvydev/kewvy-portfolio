"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Intro() {
  const ref = useRef<HTMLDialogElement>(null);
  const finishRef = useRef<() => void>(() => {});

  useLayoutEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const root = document.documentElement;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let finished = false;
    let timeline: gsap.core.Timeline | undefined;
    root.dataset.portfolioReady = "false";
    document.body.style.overflow = "hidden";
    dialog.showModal();

    const reveal = () => {
      if (root.dataset.portfolioReady === "true") return;
      root.dataset.portfolioReady = "true";
      window.dispatchEvent(new Event("portfolio:ready"));
    };
    const finish = () => {
      if (finished) return;
      finished = true;
      timeline?.kill();
      dialog.close();
      document.body.style.overflow = previousOverflow;
      reveal();
      if (
        previousFocus instanceof HTMLElement &&
        previousFocus !== document.body
      ) {
        previousFocus.focus({ preventScroll: true });
      }
    };
    finishRef.current = finish;
    // A stalled timeline must never leave the page locked.
    const timeout = window.setTimeout(finish, 2800);
    const context = gsap.context(() => {
      if (reduced.matches) {
        timeline = gsap
          .timeline({ onComplete: finish })
          .to(dialog, { opacity: 0, duration: 0.15, delay: 0.25 });
        return;
      }
      const counter = { value: 0 };
      timeline = gsap.timeline({ onComplete: finish });
      timeline
        .from(".intro-monogram", {
          scale: 0.46,
          rotation: -14,
          opacity: 0,
          duration: 0.72,
          ease: "back.out(1.35)",
        })
        .from(".intro-name span", {
          yPercent: 110,
          stagger: 0.07,
          duration: 0.55,
          ease: "power4.out",
        }, 0.12)
        .to(
          counter,
          {
            value: 100,
            duration: 0.95,
            ease: "power2.inOut",
            onUpdate: () => {
              const number = dialog.querySelector(".intro-count");
              if (number)
                number.textContent = String(Math.round(counter.value)).padStart(
                  3,
                  "0",
                );
            },
          },
          0,
        )
        .fromTo(
          ".intro-meter span",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.95, ease: "power2.inOut" },
          0,
        )
        .call(reveal, [], 1.05)
        .to(
          ".intro-name, .intro-bottom, .intro-meter",
          { y: -22, opacity: 0, duration: 0.25, stagger: 0.025 },
          1.05,
        )
        .to(
          ".intro-monogram",
          {
            scale: 2.65,
            rotation: 7,
            opacity: 0,
            duration: 0.62,
            ease: "power4.in",
          },
          1.02,
        )
        .to(
          ".intro-panel",
          {
            yPercent: -101,
            duration: 0.65,
            stagger: 0.08,
            ease: "power4.inOut",
          },
          1.28,
        );
    }, dialog);
    reduced.addEventListener("change", finish);
    return () => {
      clearTimeout(timeout);
      reduced.removeEventListener("change", finish);
      context.revert();
      dialog.close();
      document.body.style.overflow = previousOverflow;
      delete root.dataset.portfolioReady;
    };
  }, []);

  return (
    <dialog
      ref={ref}
      className="intro"
      aria-label="Loading Kevin Gonzalez portfolio"
      onCancel={(event) => {
        event.preventDefault();
        finishRef.current();
      }}
    >
      <div className="intro-panels" aria-hidden="true">
        <div className="intro-panel" />
        <div className="intro-panel" />
        <div className="intro-panel" />
      </div>
      <div className="intro-content">
        <div className="intro-identity" aria-hidden="true">
          <div className="intro-monogram">
            <Image
              src="/favicon.png"
              alt=""
              width={1254}
              height={1254}
              sizes="(max-width: 600px) 56vw, 34vw"
              priority
            />
          </div>
          <div className="intro-name">
            <div>
              <span>KEVIN</span>
            </div>
            <div>
              <span>GONZALEZ</span>
            </div>
          </div>
        </div>
        <div className="intro-bottom">
          <span>Baja California, Mexico</span>
          <span className="intro-count" aria-hidden="true">
            000
          </span>
        </div>
        <div className="intro-meter" aria-hidden="true">
          <span />
        </div>
      </div>
    </dialog>
  );
}
