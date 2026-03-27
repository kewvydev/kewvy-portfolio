"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Subir al inicio"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-foreground bg-yellow-300 text-foreground shadow-[4px_4px_0_var(--foreground)] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-2 opacity-0 pointer-events-none"
      }`}
    >
      <ChevronUp size={22} strokeWidth={3} />
    </button>
  );
}
