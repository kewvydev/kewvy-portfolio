import Image from "next/image";
import { ArrowUpRight, Github, MonitorSmartphone } from "lucide-react";
import { projects } from "@/app/page";

const ACCENT_COLORS = [
  { bg: "bg-background", text: "text-foreground", num: "text-foreground/10" },
  { bg: "bg-foreground", text: "text-background", num: "text-background/10" },
  { bg: "bg-green-400", text: "text-foreground", num: "text-foreground/10" },
];

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="w-full bg-yellow-300 border-y-2 border-foreground">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="font-heading font-black leading-[0.9] tracking-tighter">
            <span className="block text-5xl sm:text-7xl md:text-[7rem] text-foreground uppercase">
              SELECTED
            </span>
            <span
              className="block text-5xl sm:text-7xl md:text-[7rem] uppercase"
              style={{
                WebkitTextStroke: "3px var(--foreground)",
                color: "transparent",
              }}
            >
              WORKS
            </span>
          </h2>

          <div className="flex flex-col items-start md:items-end gap-1 mb-3 shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/60">
              Total Projects
            </span>
            <span className="text-5xl font-black font-heading leading-none text-foreground">
              0{projects.length}
            </span>
          </div>
        </div>

        {/* Dashed separator */}
        <div className="mt-8 border-t-2 border-dashed border-foreground/40" />
      </div>

      {/* Bento grid */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-[auto_auto] gap-4">

          {/* Featured card — big, spans 7 cols */}
          <article className="md:col-span-7 md:row-span-2 border-2 border-foreground bg-background shadow-[6px_6px_0_var(--foreground)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-150 flex flex-col overflow-hidden group">
            {/* Card top bar */}
            <div className="flex items-center justify-between border-b-2 border-foreground px-5 py-3 bg-foreground">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-background/60">
                Featured Project
              </span>
              <span className="text-xs font-black text-background font-mono">01</span>
            </div>

            {/* Image */}
            {featured.image ? (
              <div className="relative w-full h-52 border-b-2 border-foreground overflow-hidden shrink-0">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ) : (
              <div className="relative w-full h-52 border-b-2 border-foreground bg-foreground/5 flex items-center justify-center shrink-0">
                <MonitorSmartphone size={48} strokeWidth={1.5} className="text-foreground/20" />
                <span className="absolute bottom-3 right-4 text-[10px] font-bold uppercase tracking-widest text-foreground/30">
                  No preview
                </span>
              </div>
            )}

            {/* Content */}
            <div className="relative flex-1 p-6 md:p-8 flex flex-col">
              <span
                className="absolute -top-4 -right-2 text-[10rem] md:text-[14rem] font-black font-heading leading-none select-none pointer-events-none"
                style={{ color: "var(--foreground)", opacity: 0.04 }}
              >
                01
              </span>

              <h3 className="relative text-2xl md:text-3xl font-black font-heading uppercase leading-tight mb-4">
                {featured.title}
              </h3>

              <p className="relative text-sm leading-relaxed text-muted-foreground mb-6 max-w-md flex-1">
                {featured.description}
              </p>

              <div className="relative flex flex-wrap gap-2 mb-8">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] font-bold uppercase border-2 border-foreground bg-yellow-300 shadow-[2px_2px_0_var(--foreground)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="relative flex gap-3">
                <a
                  href={featured.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-widest border-2 border-foreground bg-foreground text-background shadow-[3px_3px_0_#facc15] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
                >
                  <ArrowUpRight size={14} strokeWidth={3} />
                  Live Demo
                </a>
                {featured.code !== "#" && (
                  <a
                    href={featured.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-widest border-2 border-foreground bg-background shadow-[3px_3px_0_var(--foreground)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
                  >
                    <Github size={14} strokeWidth={2.5} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>

          {/* Secondary cards — right column, 5 cols each */}
          {rest.map((project, i) => {
            const colorIdx = i + 1;
            const accent = ACCENT_COLORS[colorIdx % ACCENT_COLORS.length];
            const num = `0${i + 2}`;

            return (
              <article
                key={project.title}
                className={`md:col-span-5 border-2 border-foreground ${accent.bg} shadow-[5px_5px_0_var(--foreground)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150 flex flex-col overflow-hidden group`}
              >
                <div className={`flex items-center justify-between border-b-2 border-foreground px-4 py-2.5 ${colorIdx % 2 === 0 ? "bg-yellow-300" : "bg-foreground/10"}`}>
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${accent.text} opacity-60`}>
                    Project
                  </span>
                  <span className={`text-xs font-black font-mono ${accent.text}`}>{num}</span>
                </div>

                {/* Image */}
                {project.image ? (
                  <div className="relative w-full h-36 border-b-2 border-foreground overflow-hidden shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className={`relative w-full h-36 border-b-2 border-foreground flex items-center justify-center shrink-0 ${colorIdx % 2 === 0 ? "bg-foreground/5" : "bg-background/5"}`}>
                    <MonitorSmartphone size={36} strokeWidth={1.5} className={`${accent.text} opacity-20`} />
                    <span className={`absolute bottom-2 right-3 text-[10px] font-bold uppercase tracking-widest ${accent.text} opacity-30`}>
                      No preview
                    </span>
                  </div>
                )}

                <div className="relative flex-1 p-5 md:p-6 flex flex-col">
                  <span
                    className={`absolute -top-2 -right-1 text-[7rem] font-black font-heading leading-none select-none pointer-events-none ${accent.num}`}
                  >
                    {num}
                  </span>

                  <h3 className={`relative text-xl md:text-2xl font-black font-heading uppercase leading-tight mb-3 ${accent.text}`}>
                    {project.title}
                  </h3>

                  <p className={`relative text-sm leading-relaxed mb-5 flex-1 ${accent.text} opacity-70`}>
                    {project.description}
                  </p>

                  <div className="relative flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 text-[10px] font-bold uppercase border border-foreground ${colorIdx % 2 === 0 ? "bg-yellow-300 text-foreground" : "bg-foreground text-background"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="relative flex gap-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-black uppercase tracking-wider border-2 border-foreground shadow-[3px_3px_0_var(--foreground)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all ${colorIdx % 2 === 0 ? "bg-foreground text-background" : "bg-yellow-300 text-foreground"}`}
                    >
                      <ArrowUpRight size={12} strokeWidth={3} />
                      Demo
                    </a>
                    {project.code !== "#" && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-black uppercase tracking-wider border-2 border-foreground shadow-[3px_3px_0_var(--foreground)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all ${colorIdx % 2 === 0 ? "bg-background text-foreground" : "bg-foreground text-background"}`}
                      >
                        <Github size={12} strokeWidth={2.5} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-6 border-2 border-foreground bg-foreground px-6 py-4 shadow-[5px_5px_0_#facc15] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm font-black uppercase tracking-widest text-background">
            More projects on my GitHub
          </p>
          <a
            href="https://github.com/kewvydev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-widest border-2 border-background text-background shadow-[3px_3px_0_#facc15] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
          >
            <Github size={14} strokeWidth={2.5} />
            github.com/kewvydev
            <ArrowUpRight size={14} strokeWidth={3} />
          </a>
        </div>
      </div>
    </section>
  );
}
