import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Github, Download } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/documentation", label: "Documentation" },
  { to: "/team", label: "Team" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close on outside click */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  /* Close on route change (escape too) */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      ref={menuRef}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/75 backdrop-blur-2xl border-b border-border/50 shadow-[0_1px_24px_-6px_rgba(0,0,0,0.5)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-white/5 group"
                activeProps={{
                  className:
                    "relative px-3.5 py-2 text-sm text-foreground font-medium rounded-lg",
                }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {/* Active underline pill */}
                    <span
                      className={cn(
                        "absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-brand transition-all duration-300",
                        isActive ? "w-4/5 opacity-100" : "w-0 opacity-0 group-hover:w-2/5 group-hover:opacity-40",
                      )}
                    />
                  </>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://github.com/zyphor-os/zyphor-os-desktop"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/6 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <Link
              to="/download"
              className="btn-brand btn-brand-hover inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold"
            >
              <Download className="h-4 w-4" />
              Download
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={cn(
                "block transition-all duration-200",
                open ? "rotate-90 opacity-0 absolute" : "rotate-0 opacity-100",
              )}
            >
              <Menu className="h-5 w-5" />
            </span>
            <span
              className={cn(
                "block transition-all duration-200",
                !open ? "rotate-90 opacity-0 absolute" : "rotate-0 opacity-100",
              )}
            >
              <X className="h-5 w-5" />
            </span>
          </button>
        </div>

        {/* Mobile menu — animated slide-down */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            open ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0",
          )}
        >
          <div className="border-t border-border/50 pt-3">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {links.map((l, i) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-200"
                  activeProps={{ className: "px-3 py-2.5 text-sm rounded-lg text-foreground bg-brand/10 font-medium border border-brand/20" }}
                  activeOptions={{ exact: l.to === "/" }}
                  style={{ transitionDelay: open ? `${i * 35}ms` : "0ms" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/download"
                onClick={() => setOpen(false)}
                className="btn-brand btn-brand-hover inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold mt-2"
              >
                <Download className="h-4 w-4" />
                Download Zyphor OS
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
