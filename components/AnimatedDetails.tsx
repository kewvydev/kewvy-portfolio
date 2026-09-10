"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

type Props = {
  summary: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function AnimatedDetails({
  summary,
  children,
  className,
}: Props) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const details = ref.current!;
    const trigger = details.querySelector("summary")!;
    const content = details.querySelector<HTMLElement>(".disclosure-content")!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let expanded = details.open;
    let animation: gsap.core.Tween | undefined;

    const finish = () => {
      animation?.kill();
      animation = undefined;
      details.open = expanded;
      content.inert = false;
      content.style.removeProperty("height");
      content.style.removeProperty("overflow");
    };

    const toggle = (event: MouseEvent) => {
      event.preventDefault();
      // Read the current frame before cancelling so rapid clicks reverse smoothly.
      const height = details.open ? content.getBoundingClientRect().height : 0;
      animation?.kill();
      content.style.removeProperty("height");
      expanded = !expanded;
      details.dataset.expanded = String(expanded);

      if (reduced.matches) {
        finish();
        return;
      }

      details.open = true;
      if (!expanded && content.contains(document.activeElement)) {
        trigger.focus({ preventScroll: true });
      }
      content.inert = !expanded;
      content.style.overflow = "hidden";
      animation = gsap.fromTo(
        content,
        { height },
        {
          height: expanded ? content.scrollHeight : 0,
          duration: 0.3,
          ease: "power3.out",
          onComplete: finish,
        },
      );
    };

    trigger.addEventListener("click", toggle);
    reduced.addEventListener("change", finish);
    // Restore natural height if wrapping changes during a transition.
    window.addEventListener("resize", finish);
    return () => {
      finish();
      delete details.dataset.expanded;
      trigger.removeEventListener("click", toggle);
      reduced.removeEventListener("change", finish);
      window.removeEventListener("resize", finish);
    };
  }, []);

  return (
    <details ref={ref} className={className}>
      <summary>{summary}</summary>
      <div className="disclosure-content">{children}</div>
    </details>
  );
}
