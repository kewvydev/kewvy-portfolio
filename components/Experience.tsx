import { experiences } from "@/app/page";

const DOT_COLORS = ["bg-yellow-300", "bg-blue-500", "bg-pink-400", "bg-green-400"];

export default function Experience() {
  return (
    <section id="experience">
      {/* Heading */}
      <h2 className="text-6xl md:text-6xl font-black font-heading mb-12 leading-tight tracking-widest text-center">
        EXPERIENCE
        <span className="text-red-500"
        >
          _LOG
        </span>
      </h2>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-foreground/20 hidden md:block" />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-5 md:gap-8">
              {/* Timeline dot */}
              <div className="hidden md:flex flex-col items-center pt-5 shrink-0">
                <div
                  className={`relative z-10 w-4 h-4 border-2 border-foreground ${DOT_COLORS[i % DOT_COLORS.length]}`}
                />
              </div>

              {/* Experience card */}
              <div className="flex-1 border-2 border-foreground bg-white shadow-[5px_5px_0_var(--foreground)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all">
                {/* Card header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-5 pb-0">
                  <h3 className="text-base md:text-lg font-black font-heading uppercase leading-snug">
                    {exp.role}
                  </h3>
                  <span className="shrink-0 self-start border-2 border-foreground bg-foreground text-background px-3 py-1 text-[10px] font-bold uppercase tracking-widest font-mono">
                    {exp.period}
                  </span>
                </div>

                {/* Dashed separator */}
                <div className="mx-5 my-3 border-t-2 border-dashed border-foreground/30" />

                {/* Card body */}
                <div className="px-5 pb-5">
                  <p className="text-sm font-bold mb-3">
                    <span className="text-muted-foreground">@</span>{" "}
                    <span className="bg-yellow-300 px-1 border border-foreground">
                      {exp.company}
                    </span>
                  </p>

                  <div className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <p
                        key={j}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="text-foreground font-bold mr-1.5">
                          &gt;
                        </span>
                        {b}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
