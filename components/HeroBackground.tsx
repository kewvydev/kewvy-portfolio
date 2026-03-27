export default function HeroBackground() {
  const FIGURE_BASE =
    "border-2 border-foreground shadow-[4px_4px_0_var(--foreground)]";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none select-none">
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Blue square */}
      <div
        className={`absolute top-[24%] left-[6%] w-12 h-12 bg-blue-500 rotate-6 ${FIGURE_BASE}`}
      />

      {/* Pink circle */}
      <div
        className={`absolute top-[40%] right-[7%] w-16 h-16 rounded-full bg-pink-300 ${FIGURE_BASE}`}
      />

      {/* Accent diamonds */}
      <div
        className={`absolute bottom-[24%] left-[15%] w-5 h-5 bg-yellow-300 rotate-45 ${FIGURE_BASE}`}
      />
      <div
        className={`absolute top-[18%] right-[20%] w-4 h-4 bg-green-400 rotate-45 ${FIGURE_BASE}`}
      />

      {/* Faint CODE watermark */}
      <span className="absolute top-[8%] right-[3%] text-8xl font-black text-foreground/5 tracking-widest font-heading">
        PORTFOLIO
      </span>
    </div>
  );
}
