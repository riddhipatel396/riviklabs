import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("rivik-theme", next ? "dark" : "light"); } catch {}
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300",
            scrolled ? "glass shadow-card" : "bg-transparent",
          )}
        >
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-foreground">
            <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent text-white text-sm">
              R
            </span>
            <span className="tracking-tight">Rivik Labs</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="h-9 w-9 grid place-items-center rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
              className="md:hidden h-9 w-9 grid place-items-center rounded-full hover:bg-secondary"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-2 shadow-card animate-fade-in">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm text-foreground rounded-xl hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
