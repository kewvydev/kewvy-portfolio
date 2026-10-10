"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import EditorialTitle from "@/components/EditorialTitle";
import { EMAIL } from "@/lib/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
    if (status !== "sending") setStatus("idle");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error("Failed to send");
      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="contact section-space"
      data-status={status}
    >
      <div className="contact-copy">
        <EditorialTitle lines={["LET’S", "TALK."]} />
        <p>Open to remote work and internships.</p>
        <a className="contact-email" href={`mailto:${EMAIL}`}>
          {EMAIL} <ArrowUpRight size={22} />
        </a>
      </div>
      <div className="contact-signal" aria-hidden="true">
        <span className="contact-signal-plate" />
        <Image
          src="/art/contact-signal.png"
          alt=""
          width={1122}
          height={1402}
          sizes="(max-width: 760px) 78vw, (max-width: 1100px) 27vw, 310px"
        />
      </div>
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        aria-busy={status === "sending"}
      >
        <div className="form-heading">
          <span>A note to Kevin</span>
          <Send size={23} />
        </div>
        <fieldset disabled={status === "sending"}>
          <div className="form-field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              maxLength={120}
              placeholder="Name or company"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="you@company.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              required
              maxLength={5000}
              rows={5}
              placeholder="Project details or role information"
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button
            className="button button-dark send-button"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send message"}
            <ArrowUpRight size={20} />
          </button>
        </fieldset>
        <p
          className={`form-status status-${status}`}
          role="status"
          aria-live="polite"
        >
          {status === "sent"
            ? "Message sent. Thanks for reaching out!"
            : status === "error"
              ? "Your message couldn’t be sent. Please try again, or use the email link."
              : ""}
        </p>
      </form>
    </section>
  );
}
