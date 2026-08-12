import useReveal from "../useReveal";
import { featuredProjects, otherProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="py-28 px-6">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <span className="font-[var(--font-mono)] text-xs text-[var(--color-blue)]">
          03 — Projects
        </span>
        <h2 className="font-[var(--font-display)] font-semibold text-3xl sm:text-4xl mt-3 mb-14">
          Things I've built.
        </h2>

        <div className="space-y-10">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} reverse={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="font-[var(--font-display)] font-medium text-xl mb-2">
            Other Projects
          </h3>
          <p className="text-[var(--color-muted)] text-sm mb-8">
            Smaller university and practice projects — kept brief since they
            don't have public repos or screenshots yet.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProjects.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 hover:border-[var(--color-blue)]/40 transition-colors"
              >
                <h4 className="font-[var(--font-display)] font-medium">{p.name}</h4>
                <p className="text-[var(--color-muted)] text-sm mt-2 leading-relaxed">
                  {p.text}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-[var(--font-mono)] text-[10px] rounded border border-[var(--color-border)] px-2 py-1 text-[var(--color-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
