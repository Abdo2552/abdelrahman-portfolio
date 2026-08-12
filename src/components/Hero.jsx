import { ArrowRight, Mail, Circle } from "lucide-react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center trace-grid overflow-hidden"
    >
      {/* Ambient gradient glow — kept subtle per the "not overly colorful" brief */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-[var(--color-blue)]/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="inline-flex items-center gap-2 font-[var(--font-mono)] text-xs text-[var(--color-muted)] border border-[var(--color-border)] rounded-full px-3 py-1.5 mb-8">
          <Circle size={8} className="fill-[var(--color-blue)] text-[var(--color-blue)] animate-pulse" />
          Software Engineering student · {profile.university}
        </div>

        <h1 className="font-[var(--font-display)] font-semibold leading-[1.05] text-5xl sm:text-6xl lg:text-7xl tracking-tight">
          {profile.name.split(" ")[0]}{" "}
          {profile.name.split(" ").slice(1).join(" ")}
        </h1>

        <p className="mt-4 font-[var(--font-mono)] text-lg sm:text-xl text-gradient font-medium">
          Software Engineer
        </p>

        <p className="mt-6 max-w-xl text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
          Software Engineering student passionate about building practical
          software solutions, exploring modern technologies, and turning
          ideas into real projects.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-[var(--color-blue)] text-white px-6 py-3 text-sm font-medium hover:bg-[var(--color-blue)]/90 transition-colors"
          >
            View My Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-blue)]/60 hover:bg-[var(--color-surface)] transition-colors"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
