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
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="flex items-center gap-2 font-[var(--font-display)] font-semibold tracking-tight text-[var(--color-text)]"
        >
          <TerminalSquare size={20} className="text-[var(--color-blue)]" />
          AEH
        </a>

        <ul className="hidden md:flex items-center gap-8 font-[var(--font-mono)] text-[13px] text-[var(--color-muted)]">
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

        <button
          className="md:hidden text-[var(--color-text)]"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-[var(--color-border)]">
          <ul className="flex flex-col px-6 py-4 gap-4 font-[var(--font-mono)] text-sm text-[var(--color-muted)]">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 hover:text-[var(--color-text)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
