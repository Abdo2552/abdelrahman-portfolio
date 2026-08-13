import { ExternalLink, CheckCircle2 } from "lucide-react";
import ScreenshotFrame from "./ScreenshotFrame";
import { GithubIcon } from "./BrandIcons";

export default function ProjectCard({ project, reverse = false }) {
  const {
    name,
    tagline,
    overview,
    features,
    tech,
    role,
    liveUrl,
    githubUrl,
    note,
    images,
  } = project;

  return (
    <div className="w-full min-w-0 rounded-2xl sm:rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Visual side */}
        <div className="min-w-0 p-4 sm:p-6 lg:p-8 flex flex-col gap-3 sm:gap-4 bg-[var(--color-bg-soft)]">
          <ScreenshotFrame
            src={images[0]?.file}
            label={images[0]?.label ?? name}
          />

          {images.length > 1 && (
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {images.slice(1).map((img) => (
                <ScreenshotFrame
                  key={img.label}
                  src={img.file}
                  label={img.label}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content side */}
        <div className="min-w-0 p-5 sm:p-8 lg:p-10 flex flex-col">
          <h3 className="font-[var(--font-display)] font-semibold text-xl sm:text-2xl lg:text-3xl break-words">
            {name}
          </h3>

          <p className="text-gradient font-[var(--font-mono)] text-xs sm:text-sm mt-1 break-words">
            {tagline}
          </p>

          <p className="text-[var(--color-muted)] leading-relaxed text-sm sm:text-base mt-4 sm:mt-5">
            {overview}
          </p>

          {/* Key Features */}
          <div className="mt-5 sm:mt-6">
            <p className="font-[var(--font-mono)] text-[10px] sm:text-[11px] text-[var(--color-muted)] uppercase tracking-wide mb-3">
              Key features
            </p>

            <ul className="space-y-2.5">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-[var(--color-text)] leading-relaxed"
                >
                  <CheckCircle2
                    size={16}
                    className="text-[var(--color-blue)] shrink-0 mt-0.5"
                  />

                  <span className="min-w-0 break-words">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mt-5 sm:mt-6">
            <p className="font-[var(--font-mono)] text-[10px] sm:text-[11px] text-[var(--color-muted)] uppercase tracking-wide mb-3">
              Technologies
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="max-w-full break-words font-[var(--font-mono)] text-[10px] sm:text-xs rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-2 sm:px-2.5 py-1.5 text-[var(--color-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Contribution */}
          <div className="mt-5 sm:mt-6">
            <p className="font-[var(--font-mono)] text-[10px] sm:text-[11px] text-[var(--color-muted)] uppercase tracking-wide mb-2">
              My contribution
            </p>

            <p className="text-sm text-[var(--color-muted)] leading-relaxed break-words">
              {role}
            </p>
          </div>

          {/* Note */}
          {note && (
            <p className="mt-4 text-xs text-[var(--color-muted)] italic border-l-2 border-[var(--color-border)] pl-3 leading-relaxed">
              {note}
            </p>
          )}

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-blue)] text-white px-5 py-3 text-sm font-medium hover:bg-[var(--color-blue)]/90 transition-colors"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--color-border)] px-5 py-3 text-sm font-medium hover:border-[var(--color-blue)]/60 hover:bg-[var(--color-bg)] transition-colors"
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