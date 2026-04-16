"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { EMAIL } from "@/app/page";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const sectionRef = useRef<HTMLElement>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Card entrance
      gsap.set(".contact-card", { autoAlpha: 0, y: 40 });
      ScrollTrigger.create({
        trigger: ".contact-card",
        start: "top 82%",
        onEnter: () => {
          gsap.to(".contact-card", {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        },
        once: true,
      });

      // Badge wobble settle
      gsap.set(".contact-badge", { autoAlpha: 0, rotation: -20, scale: 0.7 });
      ScrollTrigger.create({
        trigger: ".contact-card",
        start: "top 80%",
        onEnter: () => {
          gsap.to(".contact-badge", {
            autoAlpha: 1,
            rotation: -8,
            scale: 1,
            duration: 0.5,
            ease: "back.out(2)",
            delay: 0.3,
          });
        },
        once: true,
      });

      // Left side from left
      gsap.set(".contact-left", { autoAlpha: 0, x: -30 });
      ScrollTrigger.create({
        trigger: ".contact-left",
        start: "top 85%",
        onEnter: () => {
          gsap.to(".contact-left", {
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.2,
          });
        },
        once: true,
      });

      // Form from right
      gsap.set(".contact-form", { autoAlpha: 0, x: 30 });
      ScrollTrigger.create({
        trigger: ".contact-form",
        start: "top 85%",
        onEnter: () => {
          gsap.to(".contact-form", {
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.3,
          });
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const inputBase =
    "w-full border-2 border-foreground bg-background px-4 py-3 text-sm font-medium placeholder:text-foreground/30 focus:outline-none focus:shadow-[4px_4px_0_var(--foreground)] transition-shadow";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full border-t-2 border-foreground bg-background relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="contact-card relative border-2 border-foreground bg-white shadow-[6px_6px_0_var(--foreground)]">
          <div className="contact-badge absolute -top-5 -left-2 rotate-[-8deg] z-10">
            <span className="inline-block border-2 border-foreground bg-yellow-300 px-5 py-2 font-heading font-black text-sm uppercase tracking-widest text-foreground shadow-[4px_4px_0_var(--foreground)]">
              Start a Project
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="contact-left p-10 md:p-14 flex flex-col justify-center gap-8">
              <div>
                <h2 className="font-heading font-black leading-[0.9] tracking-tight">
                  <span className="block text-5xl sm:text-6xl uppercase">
                    LET&apos;S TALK
                  </span>
                  <span className="block text-5xl sm:text-6xl uppercase text-stroke-heading text-white">
                    CODE<span className="text-yellow-400">.</span>
                  </span>
                </h2>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-xs">
                  Currently available for freelance work and open to part-time
                  opportunities.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-sm font-bold text-foreground hover:text-yellow-600 transition-colors"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 border-2 border-foreground bg-yellow-300 shrink-0">
                    <Mail size={14} strokeWidth={2.5} />
                  </span>
                  {EMAIL}
                </a>
                <div className="flex items-center gap-3 text-sm font-bold text-muted-foreground">
                  <span className="inline-flex items-center justify-center w-8 h-8 border-2 border-foreground bg-white shrink-0">
                    <MapPin size={14} strokeWidth={2.5} />
                  </span>
                  Baja California, Mexico
                </div>
              </div>
            </div>

            <div className="contact-form p-8 md:p-14 border-t-2 md:border-t-0 md:border-l-2 border-foreground">
              <div className="border-2 border-foreground p-6">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.25em] text-foreground">
                      Identity
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Name / Company"
                      value={form.name}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.25em] text-foreground">
                      Coordinates
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.25em] text-foreground">
                      Transmission
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Project details..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full inline-flex items-center justify-center gap-2.5 border-2 border-foreground bg-foreground text-background px-4 py-3.5 text-sm font-black uppercase tracking-widest shadow-[4px_4px_0_#facc15] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send size={14} strokeWidth={2.5} />
                    {status === "sent"
                      ? "Message Sent!"
                      : status === "sending"
                        ? "Transmitting..."
                        : status === "error"
                          ? "Failed — Try Again"
                          : "Transmit Data"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
