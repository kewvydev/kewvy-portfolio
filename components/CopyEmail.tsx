"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { EMAIL } from "@/lib/portfolio";

export default function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timeout.current), []);
  async function copy() {
    clearTimeout(timeout.current);
    try {
      await navigator.clipboard.writeText(EMAIL);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    timeout.current = setTimeout(() => setStatus("idle"), 4000);
  }
  return (
    <div className="copy-email">
      <button
        type="button"
        onClick={copy}
        className="copy-button"
        data-copied={status === "copied"}
      >
        {status === "copied" ? <Check size={16} /> : <Copy size={16} />}
        {status === "copied" ? "Copied" : "Copy email"}
      </button>
      <span className="copy-status" role="status">
        {status === "copied"
          ? "Email copied to clipboard."
          : status === "error"
            ? "Couldn’t copy. Select the email address above."
            : ""}
      </span>
    </div>
  );
}
