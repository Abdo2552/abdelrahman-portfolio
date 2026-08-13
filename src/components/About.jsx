import useReveal from "../useReveal";
import { profile } from "../data/profile";
import { GraduationCap, Code2, MapPin } from "lucide-react";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-20 sm:py-28 px-5 sm:px-6">
      <div
        ref={ref}
        className="reveal max-w-6xl mx-auto grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-14"
      >
        <div>
          <span className="font-[var(--font-mono)] text-xs text-[var(--color-blue)]">
            01 — About
          </span>

          <h2 className="font-[var(--font-display)] font-semibold text-2xl sm:text-4xl leading-tight mt-3">
            A student who builds things to understand them.
          </h2>
        </div>

        <div className="space-y-5 sm:space-y-6 text-[var(--color-muted)] leading-relaxed text-sm sm:text-lg">
          <p>
            I'm a Software Engineering student at{" "}
            <span className="text-[var(--color-text)]">
              {profile.university}
            </span>
            , and most of what I know about programming, I've learned by
            actually building things — not just reading about them. That
            usually means starting a project, running into a problem I
            didn't expect, and figuring out how to fix it.
          </p>

          <p>
            I like object-oriented programming because it forces you to
            think clearly about how a system is structured before you write
            a single line. That mindset carries over into the web
            development work I do too, where I care about the code being
            readable, not just working.
          </p>

          <p>
            Outside of university coursework, I spend time on personal
            projects to practice problem solving and pick up technologies
            that aren't necessarily part of the curriculum. It's slow,
            iterative learning, but it's the kind that sticks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4">
            <InfoCard
              icon={<GraduationCap size={18} />}
              label="Studying"
              value={profile.department}
            />

            <InfoCard
              icon={<Code2 size={18} />}
              label="Graduating"
              value={profile.gradYear}
            />

            <InfoCard
              icon={<MapPin size={18} />}
              label="Based in"
              value={profile.location}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-4">
      <div className="text-[var(--color-blue)] mb-2">
        {icon}
      </div>

      <p className="font-[var(--font-mono)] text-[10px] sm:text-[11px] text-[var(--color-muted)] uppercase tracking-wide">
        {label}
      </p>

      <p className="text-[var(--color-text)] font-medium mt-1 break-words">
        {value}
      </p>
    </div>
  );
}