import { ArrowRight, Mail, Circle } from "lucide-react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center trace-grid overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] lg:w-[640px] lg:h-[640px] rounded-full bg-[var(--color-blue)]/10 blur-[100px] sm:blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 w-full">
        {/* Status Badge */}
        <div className="inline-flex max-w-full items-center gap-2 font-[var(--font-mono)] text-[10px] sm:text-xs text-[var(--color-muted)] border border-[var(--color-border)] rounded-full px-3 py-2 mb-6 sm:mb-8">
          <Circle
            size={8}
            className="shrink-0 fill-[var(--color-blue)] text-[var(--color-blue)] animate-pulse"
          />

          <span className="leading-relaxed">
            Software Engineering student · {profile.university}
          </span>
        </div>

        {/* Name */}
        <h1 className="font-[var(--font-display)] font-semibold leading-[1.05] text-4xl sm:text-6xl lg:text-7xl tracking-tight break-words">
          {profile.name.split(" ")[0]}{" "}
          {profile.name.split(" ").slice(1).join(" ")}
        </h1>

        {/* Role */}
        <p className="mt-4 font-[var(--font-mono)] text-base sm:text-xl text-gradient font-medium">
          Software Engineer
        </p>

        {/* Description */}
        <p className="mt-5 sm:mt-6 max-w-xl text-[var(--color-muted)] text-sm sm:text-lg leading-relaxed">
          Software Engineering student passionate about building practical
          software solutions, exploring modern technologies, and turning ideas
          into real projects.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-blue)] text-white px-5 sm:px-6 py-3.5 text-sm font-medium hover:bg-[var(--color-blue)]/90 transition-colors"
          >
            View My Projects
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--color-border)] px-5 sm:px-6 py-3.5 text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-blue)]/60 hover:bg-[var(--color-surface)] transition-colors"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}