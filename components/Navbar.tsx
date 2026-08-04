"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Highlights", href: "#highlights" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const navButtonBase =
  "px-5 py-2.5 text-xs font-black uppercase tracking-widest transition-all duration-150";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Entrance animation
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const targets = [
        logoRef.current,
        desktopNavRef.current,
        mobileToggleRef.current,
      ].filter(Boolean);

      gsap.set(targets, { autoAlpha: 0, y: -20 });
      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
        clearProps: "transform,opacity,visibility",
      });
    });

    return () => ctx.revert();
  }, []);

  // Mobile menu animation
  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (prefersReducedMotion()) {
      menu.style.display = isOpen ? "block" : "none";
      return;
    }

    if (isOpen) {
      gsap.set(menu, { display: "block", autoAlpha: 0, y: -10 });
      const links = menu.querySelectorAll("a");
      gsap.set(links, { autoAlpha: 0, x: -15 });

      const tl = gsap.timeline();
      tl.to(menu, { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out" });
      tl.to(
        links,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.2,
          stagger: 0.04,
          ease: "power2.out",
        },
        "-=0.1"
      );
    } else {
      gsap.to(menu, {
        autoAlpha: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          menu.style.display = "none";
        },
      });
    }
  }, [isOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "pt-3 pb-3 bg-background/90 backdrop-blur-sm border-b-2 border-foreground"
          : "pt-6"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <a
            ref={logoRef}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="border-2 border-foreground bg-white px-4 py-1.5 shadow-[4px_4px_0_var(--foreground)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150"
          >
            <span className="text-base font-heading font-black uppercase tracking-widest text-foreground">
              kewvy.dev
            </span>
          </a>

          <div
            ref={desktopNavRef}
            className="hidden md:flex items-center border-2 border-foreground bg-white shadow-[4px_4px_0_var(--foreground)]"
          >
            {navItems.map((item, index) => {
              const isLast = index === navItems.length - 1;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`${navButtonBase} ${
                    isLast
                      ? "bg-yellow-300 text-foreground hover:bg-foreground hover:text-background"
                      : "text-foreground hover:bg-yellow-300"
                  } ${
                    index !== navItems.length - 1
                      ? "border-r-2 border-foreground"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <button
            ref={mobileToggleRef}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden border-2 border-foreground bg-yellow-300 p-2.5 shadow-[4px_4px_0_var(--foreground)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={20} strokeWidth={2.5} className="text-foreground" />
            ) : (
              <Menu size={20} strokeWidth={2.5} className="text-foreground" />
            )}
          </button>
        </div>

        <div
          ref={mobileMenuRef}
          className="md:hidden mt-3 border-2 border-foreground bg-background shadow-[4px_4px_0_var(--foreground)]"
          style={{ display: "none" }}
        >
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`block ${navButtonBase} text-foreground hover:bg-yellow-300 px-5 py-3 ${
                index !== navItems.length - 1
                  ? "border-b-2 border-foreground"
                  : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
