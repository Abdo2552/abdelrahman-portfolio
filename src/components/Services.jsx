import useReveal from "../useReveal";
import { services } from "../data/profile";
import { Terminal } from "lucide-react";

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="py-28 px-6">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <span className="font-[var(--font-mono)] text-xs text-[var(--color-blue)]">
          05 — Services
        </span>
        <h2 className="font-[var(--font-display)] font-semibold text-3xl sm:text-4xl mt-3 mb-14">
          What I can help with.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 hover:-translate-y-1 hover:border-[var(--color-blue)]/50 transition-all duration-300"
            >
              <Terminal size={16} className="text-[var(--color-blue)] mb-3" />
              <p className="text-sm font-medium text-[var(--color-text)]">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
