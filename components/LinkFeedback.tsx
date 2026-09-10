"use client";

import { useEffect, useState } from "react";

export default function LinkFeedback() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const clicked = (event: MouseEvent) => {
      const link =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>(
              "a[target='_blank'], a[download]",
            )
          : null;
      if (!link || event.defaultPrevented) return;
      setMessage(
        link.hasAttribute("download")
          ? "CV download requested."
          : "Opening link in a new tab.",
      );
      clearTimeout(timeout);
      timeout = setTimeout(() => setMessage(""), 2500);
    };
    document.addEventListener("click", clicked);
    return () => {
      document.removeEventListener("click", clicked);
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div
      className="link-feedback"
      role="status"
      data-visible={Boolean(message)}
    >
      {message}
    </div>
  );
}
