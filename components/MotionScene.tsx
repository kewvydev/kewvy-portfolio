"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import "./MotionScene.css";

export default function MotionScene({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scope = ref.current;
    if (!scope) return;
    const media = gsap.matchMedia();
    let started = false;
    let disposed = false;
    let frame = 0;
    const refresh = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    const start = () => {
      if (started || disposed) return;
      started = true;
      media.add(
        {
          all: "(min-width: 0px)",
          motion: "(prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 861px)",
        },
        (context) => {
          const { motion, desktop } = context.conditions!;
          const select = gsap.utils.selector(scope);
          const entrances: {
            element: Element;
            timeline: gsap.core.Timeline;
          }[] = [];
          const entrance = (element: Element, position = "top 87%") => {
            const timeline = gsap.timeline({
              defaults: { duration: 0.65, ease: "power3.out" },
              scrollTrigger: { trigger: element, start: position, once: true },
            });
            entrances.push({ element, timeline });
            return timeline;
          };

          // Navigation state remains useful when animation is disabled.
          select("main > section").forEach((section: HTMLElement) => {
            ScrollTrigger.create({
              trigger: section,
              start: "top 40%",
              end: "bottom 40%",
              onToggle: (self) => {
                if (self.isActive) {
                  select(".site-header a[href^='#']").forEach((link) => {
                    if (!(link instanceof HTMLAnchorElement)) return;
                    if (link.hash === `#${section.id}`)
                      link.setAttribute("aria-current", "location");
                    else link.removeAttribute("aria-current");
                  });
                }
              },
            });
          });
          if (!motion) return;

          const hero = gsap.timeline({ defaults: { ease: "power3.out" } });
          hero
            .from(".hero-name .hero-line", {
              yPercent: 105,
              stagger: 0.09,
              duration: 0.75,
            })
            .from(
              ".portrait-print",
              {
                clipPath: "inset(0 0 100% 0)",
                rotation: -5,
                duration: 0.8,
                clearProps: "clipPath,transform",
              },
              0.1,
            )
            .from(
              ".hero-bottom",
              { opacity: 0, y: 18, duration: 0.5, clearProps: "all" },
              0.3,
            );
          entrances.push({ element: select("#home")[0], timeline: hero });
          gsap.to(".reading-progress", {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: scope,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.15,
            },
          });
          if (desktop) {
            const drift = gsap.timeline({
              scrollTrigger: {
                trigger: "#home",
                start: "top top",
                end: "bottom top",
                scrub: 0.65,
              },
            });
            drift
              .to(".hero-copy", { y: -65, ease: "none" }, 0)
              .to(
                ".portrait-collage",
                { y: -100, rotation: -3, ease: "none" },
                0,
              )
              .to(".portrait-outline", { rotation: 3, ease: "none" }, 0)
              .to(".hero-star", { rotation: 100, ease: "none" }, 0);
          } else {
            gsap.to(".portrait-outline", {
              rotation: 0,
              ease: "none",
              scrollTrigger: {
                trigger: ".portrait-collage",
                start: "top 80%",
                end: "bottom 20%",
                scrub: 0.3,
              },
            });
          }

          // The work index opens from below; each project then has its own shutter.
          entrance(select("#projects .section-heading")[0])
            .from("#projects .title-line", { yPercent: 105, stagger: 0.08 })
            .from(".small-orbit", { rotation: -90, scale: 0.6 }, 0.12);
          select(".project-feature").forEach(
            (project: HTMLElement, index: number) => {
              const query = gsap.utils.selector(project);
              entrance(project)
                .fromTo(
                  query(".project-shutter"),
                  { scaleX: 1, opacity: 1 },
                  { scaleX: 0, duration: 0.85, ease: "power4.inOut" },
                  0,
                )
                .from(
                  query(".project-info > h3"),
                  { x: index % 2 ? 22 : -22, opacity: 0, clearProps: "all" },
                  0.15,
                )
                .from(
                  query(".project-role, .project-info > p, .tags"),
                  { y: 14, opacity: 0, stagger: 0.07, clearProps: "all" },
                  0.25,
                );
              if (desktop)
                gsap.fromTo(
                  query(".project-visual"),
                  { y: 24 },
                  {
                    y: -24,
                    ease: "none",
                    scrollTrigger: {
                      trigger: project,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 0.5,
                    },
                  },
                );
            },
          );
          entrance(select(".project-archive")[0])
            .from(".archive-intro", { x: -20, opacity: 0, clearProps: "all" })
            .from(
              ".archive-list > details",
              { x: 22, opacity: 0, stagger: 0.07, clearProps: "all" },
              0.1,
            );

          // About folds into place around the education and CV, not around slogans.
          entrance(select("#about")[0])
            .from("#about .title-line", { xPercent: -105, stagger: 0.09 })
            .from(
              ".about-asterisk",
              { rotation: -150, scale: 0.5, duration: 0.95 },
              0.1,
            )
            .from(
              ".about-body > p, .education",
              { y: 20, opacity: 0, stagger: 0.13, clearProps: "all" },
              0.25,
            );
          if (desktop)
            gsap.to(".about-asterisk", {
              rotation: 70,
              ease: "none",
              scrollTrigger: {
                trigger: "#about",
                start: "top 60%",
                end: "bottom top",
                scrub: 0.7,
              },
            });

          // Dates arrive at a growing timeline; the descriptions remain readable.
          entrance(select("#experience .section-heading")[0]).from(
            "#experience .title-line",
            { yPercent: -105, stagger: 0.09 },
          );
          gsap.from(".experience-track span", {
            scaleY: 0,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
              trigger: ".experience-list",
              start: "top 70%",
              end: "bottom 70%",
              scrub: 0.3,
            },
          });
          select(".experience-entry").forEach((entry: HTMLElement) => {
            const query = gsap.utils.selector(entry);
            entrance(entry)
              .from(query(".experience-date"), {
                x: -18,
                opacity: 0,
                clearProps: "all",
              })
              .from(
                query(".experience-main > h3, .company, .location"),
                { y: 14, opacity: 0, stagger: 0.06, clearProps: "all" },
                0.1,
              );
          });

          // The toolkit assembles horizontally while its heading stays alongside it.
          entrance(select(".skills-title")[0]).from("#skills .title-line", {
            yPercent: 105,
            rotation: 3,
            transformOrigin: "left bottom",
            stagger: 0.1,
          });
          select(".skill-row").forEach((row: HTMLElement, index: number) => {
            entrance(row, "top 92%").from(row.querySelectorAll("li"), {
              x: index % 2 ? 20 : -20,
              opacity: 0,
              stagger: 0.025,
              duration: 0.45,
              clearProps: "all",
            });
          });

          // A research sheet lands; competition notes are stamped beneath it.
          entrance(select("#highlights .section-heading")[0]).from(
            "#highlights .title-line",
            { xPercent: 105, stagger: 0.09 },
          );
          entrance(select(".research")[0])
            .from(".research-cover", {
              rotation: -10,
              y: 45,
              opacity: 0,
              duration: 0.85,
              clearProps: "all",
            })
            .from(
              ".research-sticker",
              {
                scale: 1.4,
                rotation: 20,
                opacity: 0,
                duration: 0.35,
                clearProps: "all",
              },
              0.5,
            )
            .from(
              ".research-content",
              { x: 20, opacity: 0, clearProps: "all" },
              0.2,
            );
          select(".highlights-list article").forEach(
            (article: HTMLElement, index: number) => {
              entrance(article).from(article, {
                y: 20,
                rotation: index % 2 ? 2 : -2,
                opacity: 0,
                clearProps: "all",
              });
            },
          );

          // The last spread opens onto a stationary, usable form.
          entrance(select("#contact")[0])
            .from("#contact .title-line", { yPercent: 105, stagger: 0.1 })
            .from(
              ".contact-form",
              {
                y: 35,
                rotation: -3,
                opacity: 0,
                duration: 0.75,
                clearProps: "all",
              },
              0.2,
            );
          entrance(select(".footer")[0], "top 98%")
            .from(".footer-logo", {
              yPercent: 25,
              opacity: 0,
              clearProps: "all",
            })
            .from(
              ".footer-links a",
              { y: 10, opacity: 0, stagger: 0.06, clearProps: "all" },
              0.1,
            );

          const revealFocusedContent = (event: FocusEvent) => {
            entrances.forEach(({ element, timeline }) => {
              if (
                event.target instanceof Node &&
                element.contains(event.target)
              )
                timeline.progress(1);
            });
          };
          scope.addEventListener("focusin", revealFocusedContent);
          return () =>
            scope.removeEventListener("focusin", revealFocusedContent);
        },
        scope,
      );
      refresh();
    };
    window.addEventListener("portfolio:ready", start);
    if (document.documentElement.dataset.portfolioReady === "true") start();
    const observer = new ResizeObserver(refresh);
    observer.observe(scope);
    document.fonts.ready.then(() => {
      if (!disposed) refresh();
    });
    return () => {
      disposed = true;
      window.removeEventListener("portfolio:ready", start);
      observer.disconnect();
      cancelAnimationFrame(frame);
      media.revert();
      scope
        .querySelectorAll("[aria-current]")
        .forEach((link) => link.removeAttribute("aria-current"));
    };
  }, []);

  return (
    <div ref={ref} className="motion-scene">
      {children}
    </div>
  );
}
