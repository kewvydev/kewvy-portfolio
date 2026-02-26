import { experiences } from "@/app/page";

export default function Experience() {
    return (
        <section>
          <h2 className="text-3xl md:text-4xl font-black mb-10">Experience</h2>

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div key={i} className="flex gap-5">
                {/* timeline track */}
                <div className="flex flex-col items-center pt-1">
                  <div className="w-3.5 h-3.5 border-2 border-black bg-yellow-300 shrink-0" />
                  {i < experiences.length - 1 && (
                    <div className="w-[2px] bg-black flex-1" />
                  )}
                </div>

                {/* content */}
                <div className="pb-10">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="text-lg font-bold leading-snug">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-semibold tracking-wide uppercase opacity-50">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold mb-2 opacity-60">
                    {exp.company}
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed opacity-75">
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
    )
}