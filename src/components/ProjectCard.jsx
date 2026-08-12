import { ExternalLink, CheckCircle2 } from "lucide-react";
import ScreenshotFrame from "./ScreenshotFrame";
import { GithubIcon } from "./BrandIcons";

export default function ProjectCard({ project, reverse = false }) {
  const { name, tagline, overview, features, tech, role, liveUrl, githubUrl, note, images } =
    project;

  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
      <div
        className={`grid lg:grid-cols-2 gap-0 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        {/* Visual side */}
        <div className="p-6 sm:p-8 flex flex-col gap-4 bg-[var(--color-bg-soft)]">
          <ScreenshotFrame src={images[0]?.file} label={images[0]?.label ?? name} />
          {images.length > 1 && (
            <div className="grid grid-cols-2 gap-4">
              {images.slice(1).map((img) => (
                <ScreenshotFrame key={img.label} src={img.file} label={img.label} />
              ))}
            </div>
          )}
        </div>

        {/* Content side */}
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col">
          <h3 className="font-[var(--font-display)] font-semibold text-2xl sm:text-3xl">
            {name}
          </h3>
          <p className="text-gradient font-[var(--font-mono)] text-sm mt-1">{tagline}</p>

          <p className="text-[var(--color-muted)] leading-relaxed mt-5">{overview}</p>

          <div className="mt-6">
            <p className="font-[var(--font-mono)] text-[11px] text-[var(--color-muted)] uppercase tracking-wide mb-3">
              Key features
            </p>
            <ul className="space-y-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-text)]">
                  <CheckCircle2 size={16} className="text-[var(--color-blue)] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <p className="font-[var(--font-mono)] text-[11px] text-[var(--color-muted)] uppercase tracking-wide mb-3">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="font-[var(--font-mono)] text-xs rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1.5 text-[var(--color-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="font-[var(--font-mono)] text-[11px] text-[var(--color-muted)] uppercase tracking-wide mb-2">
              My contribution
            </p>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">{role}</p>
          </div>

          {note && (
            <p className="mt-4 text-xs text-[var(--color-muted)] italic border-l-2 border-[var(--color-border)] pl-3">
              {note}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-blue)] text-white px-5 py-2.5 text-sm font-medium hover:bg-[var(--color-blue)]/90 transition-colors"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium hover:border-[var(--color-blue)]/60 hover:bg-[var(--color-bg)] transition-colors"
              >
                <GithubIcon size={15} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
