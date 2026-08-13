import { useEffect, useState } from "react";
import { Menu, X, TerminalSquare } from "lucide-react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 font-[var(--font-display)] font-semibold tracking-tight text-[var(--color-text)]"
        >
          <TerminalSquare
            size={20}
            className="text-[var(--color-blue)] shrink-0"
          />

          <span>AEH</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-[var(--font-mono)] text-[13px] text-[var(--color-muted)]">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-[var(--color-text)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-[var(--color-border)]">
          <ul className="flex flex-col px-5 py-4 gap-1 font-[var(--font-mono)] text-sm text-[var(--color-muted)]">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center min-h-[44px] px-3 rounded-lg hover:bg-[var(--color-surface)] hover:text-[var(--color-text)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}