import Image from "next/image";
import { GraduationCap } from "lucide-react";

const TERMINAL_LINES = [
  { prompt: "~/kevin", cmd: "cat skills.txt" },
  { output: "Full Stack & Web Development" },
  { output: "Clean Architecture & Quality Code" },
  { output: "Building applications that solve problems" },
  { prompt: "~/kevin", cmd: "echo $STATUS" },
  { output: "Ready to collaborate ✓" },
];

export default function AboutMe() {
  return (
    <section id="about">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main bio card — spans 2 cols */}
        <div className="md:col-span-2 border-2 border-foreground bg-white p-6 md:p-8 shadow-[5px_5px_0_var(--foreground)]">
          <h2 className="text-4xl md:text-5xl font-black font-heading mb-5 leading-tight">
            ABOUT
            <br />
            <span
              style={{
                WebkitTextStroke: "2px var(--foreground)",
                color: "background",
                paintOrder: "stroke fill",
              }}
            >
              ME
            </span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed max-w-lg">
            Hi! I&apos;m Kevin, a Software Engineering student based in Ensenada,
            Mexico. I enjoy building things that live on the web, from
            interactive front-ends to robust back-end services. My curiosity
            drives me to explore new technologies and solve problems that{" "}
            <span className="bg-yellow-300 px-1 font-bold border border-foreground">
              actually matter
            </span>
            .
          </p>
        </div>

        {/* Right column — stacked badges */}
        <div className="flex flex-col gap-4">
          <div className="flex-1 border-2 border-foreground bg-yellow-300 p-5 shadow-[5px_5px_0_var(--foreground)] flex flex-col justify-center">
            <GraduationCap size={20} strokeWidth={2.5} className="mb-2" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">
              Education
            </span>
            <span className="text-md font-heading leading-tight">
              B.S. Software Engineering and Emerging Technologies
            </span>
          </div>

          <div className="aspect-square border-2 border-foreground bg-white shadow-[5px_5px_0_var(--foreground)] overflow-hidden relative">
            <Image
              src="/me.jpeg"
              alt="Kevin"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Quote card */}
        <div className="border-3 border-foreground bg-foreground text-background p-6 shadow-[5px_5px_0_var(--foreground)] flex items-center">
          <p className="text-lg md:text-xl font-black font-heading leading-snug">
            &ldquo;I don&apos;t just write code, I build experiences that
            refuse to be boring.&rdquo;
          </p>
        </div>

        {/* Terminal card — spans 2 cols */}
        <div className="md:col-span-2 border-3 border-foreground bg-foreground shadow-[5px_5px_0_var(--foreground)] overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b-2 border-foreground/20">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-3 text-[11px] font-bold text-background/50 uppercase tracking-widest">
              terminal
            </span>
          </div>
          {/* Terminal body */}
          <div className="p-5 font-mono text-sm space-y-1">
            {TERMINAL_LINES.map((line, i) =>
              "cmd" in line ? (
                <p key={i} className="text-green-400">
                  <span className="text-blue-400">{line.prompt}</span>
                  <span className="text-background/40">$</span> {line.cmd}
                </p>
              ) : (
                <p key={i} className="text-background/70 pl-2">
                  {line.output}
                </p>
              )
            )}
            <p className="text-green-400 animate-pulse">▊</p>
          </div>
        </div>
      </div>
    </section>
  );
}
