type SkillCategory = {
  name: string;
  skills: string[];
};

type SkillsProps = {
  categories: SkillCategory[];
};

export default function Skills({ categories }: SkillsProps) {
  const totalSkills = categories.reduce(
    (total, category) => total + category.skills.length,
    0
  );

  return (
    <section id="skills">
      <div className="border-2 border-foreground bg-background p-2 shadow-[6px_6px_0_var(--foreground)]">
        <div className="border-2 border-foreground p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 border-2 border-foreground bg-foreground text-background p-5 md:p-6 shadow-[4px_4px_0_var(--foreground)]">
              <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-background/65 mb-2">
                Technical Profile
              </p>
              <h2 className="text-4xl md:text-5xl font-black font-heading leading-[0.95]">
                SKILLS
                <span
                  className="ml-2"
                  style={{ color: "var(--chart-2)" }}
                >
                  CORE
                </span>
              </h2>
              <p className="mt-3 text-sm md:text-base text-background/80 max-w-xl leading-relaxed">
                Herramientas y tecnologias con las que construyo productos
                completos, desde la interfaz hasta infraestructura y despliegue.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="border-2 border-foreground bg-yellow-300 p-4 shadow-[4px_4px_0_var(--foreground)]">
                <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-foreground/60">
                  Total Skills
                </p>
                <p className="text-3xl font-black font-heading leading-none mt-1">
                  {totalSkills}
                </p>
              </div>
              <div className="border-2 border-foreground bg-green-400 p-4 shadow-[4px_4px_0_var(--foreground)]">
                <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-foreground/60">
                  Status
                </p>
                <p className="text-sm md:text-base font-black uppercase tracking-wide mt-1">
                  Production Ready
                </p>
              </div>
            </div>
          </div>

          <div className="my-5 border-t-2 border-dashed border-foreground/40" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="border-2 border-foreground bg-background shadow-[4px_4px_0_var(--foreground)]"
              >
                <div className="flex items-center justify-between border-b-2 border-foreground/20 px-4 py-3">
                  <p className="text-xs font-black uppercase tracking-[0.12em]">
                    {category.name}
                  </p>
                  <span
                    className="w-3.5 h-3.5 border-2 border-foreground"
                    style={{
                      background:
                        index % 4 === 0
                          ? "var(--chart-2)"
                          : index % 4 === 1
                            ? "var(--chart-1)"
                            : index % 4 === 2
                              ? "var(--chart-4)"
                              : "var(--chart-5)",
                    }}
                  />
                </div>

                <div className="p-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs md:text-sm font-bold uppercase border-2 border-foreground bg-accent shadow-[3px_3px_0_var(--foreground)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t-2 border-foreground/20 pt-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Modules: {categories.length}
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Last Update: Live
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
