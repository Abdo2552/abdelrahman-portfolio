import { ImageIcon } from "lucide-react";

/**
 * Responsive project screenshot frame.
 */
export default function ScreenshotFrame({ src, label, className = "" }) {
  return (
    <div
      className={`group relative w-full min-w-0 rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg)] ${className}`}
    >
      {/* Browser header */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27c93f]" />
      </div>

      {src ? (
        <div className="w-full overflow-hidden">
          <img
            src={src}
            alt={label}
            loading="lazy"
            className="block w-full h-auto aspect-video object-cover object-top"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 aspect-video text-[var(--color-muted)] border-2 border-dashed border-[var(--color-border)] m-2 rounded-lg">
          <ImageIcon size={20} />

          <p className="font-[var(--font-mono)] text-[10px] sm:text-[11px] text-center px-4 break-words">
            Add screenshot: {label}
          </p>
        </div>
      )}
    </div>
  );
}