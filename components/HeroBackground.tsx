export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
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
      <div className="absolute top-[28%] left-[7%] w-11 h-11 bg-blue-500 rotate-6" />

      {/* Pink circle */}
      <div className="absolute top-[42%] right-[7%] w-16 h-16 rounded-full bg-pink-300" />

      {/* Faint CODE watermark */}
      <span className="absolute top-[6%] right-[2%] text-8xl font-black text-foreground/4 tracking-widest font-heading">
        CODE
      </span>
    </div>
  );
}
