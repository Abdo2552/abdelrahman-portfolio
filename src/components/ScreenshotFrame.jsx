import { ImageIcon } from "lucide-react";

/**
 * Renders a real screenshot if `file` is provided (drop images into
 * src/assets and pass the imported path in projects.js). Otherwise shows
 * a labeled placeholder instead of a fake/invented UI — swap in your own
 * screenshot whenever you have one.
 */
export default function ScreenshotFrame({ src, label, className = "" }) {
  return (
    <div
      className={`group relative rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg)] ${className}`}
    >
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
      </div>

      {src ? (
        <img src={src} alt={label} className="w-full aspect-video object-cover object-top" />
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 aspect-video text-[var(--color-muted)] border-2 border-dashed border-[var(--color-border)] m-2 rounded-lg">
          <ImageIcon size={22} />
          <p className="font-[var(--font-mono)] text-[11px] text-center px-4">
            Add screenshot: {label}
          </p>
        </div>
      )}
    </div>
  );
}
