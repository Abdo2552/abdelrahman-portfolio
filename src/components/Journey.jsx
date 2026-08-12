import useReveal from "../useReveal";
import { journey } from "../data/profile";

export default function Journey() {
  const ref = useReveal();

  return (
    <section id="journey" className="py-28 px-6 bg-[var(--color-bg-soft)]">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <span className="font-[var(--font-mono)] text-xs text-[var(--color-blue)]">
          04 — Journey
        </span>
        <h2 className="font-[var(--font-display)] font-semibold text-3xl sm:text-4xl mt-3 mb-4">
          My Learning Journey
        </h2>
        <p className="text-[var(--color-muted)] max-w-2xl mb-14">
          I've been building my software engineering skills through
          university projects, personal projects, and practical
          experimentation — one project at a time.
        </p>

        <div className="relative pl-8 border-l border-[var(--color-border)] space-y-12">
          {journey.map((step) => (
            <div key={step.range} className="relative">
              <span className="absolute -left-[37px] top-1 w-3.5 h-3.5 rounded-full bg-[var(--color-blue)] ring-4 ring-[var(--color-bg-soft)]" />
              <p className="font-[var(--font-mono)] text-xs text-[var(--color-blue)] mb-1">
                {step.range}
              </p>
              <h3 className="font-[var(--font-display)] font-medium text-lg">
                {step.title}
              </h3>
              <p className="text-[var(--color-muted)] mt-1 max-w-xl leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
