import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[var(--color-muted)]">
        <p className="font-[var(--font-mono)] text-xs">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-[var(--font-mono)] text-xs">Built with React &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
