"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { EMAIL } from "@/app/page";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

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

  return (
    <section
      id="contact"
      className="w-full border-t-2 border-foreground bg-background relative overflow-hidden"
    >
      {/* Grid background */}
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
        {/* Main Card with heavy shadow */}
        <div className="relative border-2 border-foreground bg-white shadow-[8px_8px_0_var(--foreground)]">

          {/* START A PROJECT badge - rotated right, larger */}
          <div className="absolute -top-8 -left-3 rotate-[-10deg] z-10">
            <span className="inline-block border-2 border-foreground bg-yellow-300 text-sm px-6 py-3 font-heading font-black uppercase tracking-[0.18em] shadow-[4px_4px_0_var(--foreground)]">
              Start a Project
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* LEFT — info */}
            <div className="p-10 md:p-14 flex flex-col justify-between gap-10">
              <div>
                <h2 className="font-heading font-black leading-[0.9] tracking-tight">
                  <span className="block text-5xl sm:text-6xl uppercase text-stroke-heading text-white">
                    LET&apos;S
                  </span>
                  <span className="block text-5xl sm:text-6xl uppercase text-stroke-heading text-white">
                    TALK
                  </span>
                  <span className="block text-5xl sm:text-6xl uppercase text-stroke-heading text-white">
                    CODE.
                  </span>
                </h2>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-xs font-mono">
                  I am currently available for <br />
                  freelance work and open to <br />
                  part-time opportunities.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 group"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border-3 border-foreground bg-foreground text-background">
                    <Mail size={16} strokeWidth={2} />
                  </span>
                  <span className="text-sm font-bold break-all">{EMAIL}</span>
                </a>

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border-3 border-foreground bg-foreground text-background">
                    <MapPin size={16} strokeWidth={2} />
                  </span>
                  <span className="text-sm font-bold">Ensenada, Baja California</span>
                </div>
              </div>
            </div>

            {/* RIGHT — form in bordered box */}
            <div className="p-10 md:p-14">
              <div className="border-3 border-foreground p-6">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
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
                      className="w-full border-3 border-foreground bg-background px-3 py-2.5 text-sm font-medium placeholder:text-foreground/40 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
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
                      className="w-full border-3 border-foreground bg-background px-3 py-2.5 text-sm font-medium placeholder:text-foreground/40 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
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
                      className="w-full border-3 border-foreground bg-background px-3 py-2.5 text-sm font-medium placeholder:text-foreground/40 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full inline-flex items-center justify-center gap-2 border-3 border-foreground bg-blue-500 px-4 py-3 text-sm font-black uppercase tracking-widest text-white shadow-[4px_4px_0_var(--foreground)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
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
