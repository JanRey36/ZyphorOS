import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition rounded-md"
                activeProps={{ className: "text-foreground bg-white/5" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://github.com/zyphor-os/zyphor-os-desktop"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
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

          <button
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-border/60 pt-3">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5"
                  activeProps={{ className: "text-foreground bg-white/5" }}
                  activeOptions={{ exact: l.to === "/" }}
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
        )}
      </div>
    </header>
  );
}
