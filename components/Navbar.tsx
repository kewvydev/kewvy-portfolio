"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Work", "#projects"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Toolkit", "#skills"],
  ["Field notes", "#highlights"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <span className="reading-progress" aria-hidden="true" />
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="Kevin Gonzalez, home">
          kewvy<span aria-hidden="true">✳</span>
        </a>
        <div className="desktop-nav">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <a className="nav-contact" href="#contact">
          Let’s talk <ArrowUpRight size={18} />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <div id="mobile-nav" className="mobile-nav" hidden={!open}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={20} />
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            Let’s talk
            <ArrowUpRight size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
}
