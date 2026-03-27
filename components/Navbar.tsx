"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

const navButtonBase =
  "px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-150";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "pt-3" : "pt-6"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          {/* Logo - Rectángulo izquierdo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="border-2 border-foreground bg-white px-3 py-1 shadow-[4px_4px_0_var(--foreground)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150"
          >
            <span className="text-lg font-heading font-extrabold uppercase tracking-widest text-foreground">
              kewvy.dev
            </span>
          </a>

          {/* Desktop Navigation - Rectángulo derecho */}
          <div className="hidden md:flex items-center border-2 border-foreground bg-white shadow-[4px_4px_0_var(--foreground)]">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`${navButtonBase} text-foreground hover:bg-yellow-300 ${
                  index !== navItems.length - 1
                    ? "border-r-2 border-foreground"
                    : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden border-3 border-foreground bg-yellow-300 p-2.5 shadow-[4px_4px_0_var(--foreground)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={20} strokeWidth={2.5} className="text-foreground" />
            ) : (
              <Menu size={20} strokeWidth={2.5} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-3 border-2 border-foreground bg-background shadow-[4px_4px_0_var(--foreground)]">
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
        )}
      </nav>
    </header>
  );
}
