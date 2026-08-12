import useReveal from "../useReveal";
import { skills } from "../data/profile";
import { Code, Globe, Wrench, LayoutGrid } from "lucide-react";

const ICONS = {
  Programming: Code,
  Web: Globe,
  Tools: Wrench,
  Other: LayoutGrid,
};

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="py-28 px-6 bg-[var(--color-bg-soft)]">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <span className="font-[var(--font-mono)] text-xs text-[var(--color-blue)]">
          02 — Skills
        </span>
        <h2 className="font-[var(--font-display)] font-semibold text-3xl sm:text-4xl mt-3 mb-12">
          Tools I reach for.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(skills).map(([category, items]) => {
            const Icon = ICONS[category] ?? Code;
            return (
              <div
                key={category}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-blue)]/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Icon size={18} className="text-[var(--color-blue)]" />
                  <h3 className="font-[var(--font-display)] font-medium">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="font-[var(--font-mono)] text-xs rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-muted)] px-2.5 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
