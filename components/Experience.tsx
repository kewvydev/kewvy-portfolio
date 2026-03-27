import { experiences } from "@/app/page";
import { MapPin } from "lucide-react";

const ACCENT_BG = ["bg-yellow-300", "bg-blue-400", "bg-pink-400", "bg-green-400"];

export default function Experience() {
  return (
    <section
      id="experience"
      // className="w-full bg-yellow-300 border-b-2 border-foreground"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-muted-foreground mb-3">
              CAREER JOURNEY
            </p>
            <h2 className="text-5xl md:text-6xl font-black font-heading leading-[0.9] tracking-tight text-stroke-heading text-white">
              EXPERIENCE
              <span className="text-red-500">_PATH</span>
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 border-x-2 border-foreground bg-background" />

          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                <article
                  className={`relative border-2 border-foreground bg-white p-5 shadow-[5px_5px_0_var(--foreground)] w-full md:w-[calc(50%-2.25rem)] ${
                    i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div
                    className={`absolute -top-2 -left-2 w-4 h-4 border-2 border-foreground ${ACCENT_BG[i % ACCENT_BG.length]}`}
                  />

                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest font-mono border-2 border-foreground bg-foreground text-background px-2.5 py-1 inline-block">
                      {exp.period}
                    </p>
                    <span
                      className={`md:hidden w-8 h-8 border-2 border-foreground ${ACCENT_BG[i % ACCENT_BG.length]} flex items-center justify-center text-xs font-black font-mono`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-3 text-base md:text-lg font-black font-heading uppercase leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                    <MapPin size={11} />
                    {exp.location}
                  </p>
                  <p className="text-sm font-bold mt-2">
                    <span className="text-muted-foreground">@</span>{" "}
                    <span className="bg-yellow-300 px-1 border border-foreground">
                      {exp.company}
                    </span>
                  </p>
                  <div className="my-3 border-t-2 border-dashed border-foreground/20" />
                  <div className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <p key={j} className="text-sm leading-relaxed text-muted-foreground">
                        <span className="text-foreground font-bold mr-1.5">&gt;</span>
                        {b}
                      </p>
                    ))}
                  </div>
                </article>

                <span
                  className={`hidden md:flex absolute top-6 left-1/2 -translate-x-1/2 w-11 h-11 border-2 border-foreground ${ACCENT_BG[i % ACCENT_BG.length]} shadow-[3px_3px_0_var(--foreground)] font-black font-mono text-sm items-center justify-center`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t-2 border-foreground/20 pt-3 flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
            entries: {experiences.length}
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
            chronological order
          </p>
        </div>
      </div>
    </section>
  );
}
