import type { ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils";

export function SiteLayout({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative z-0">
      <div className="fixed inset-0 bg-aurora opacity-10 pointer-events-none -z-10" />

      <Nav />
      <main key={location.pathname} className="flex-1 animate-page-enter">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-glow opacity-70 pointer-events-none animate-pulse-glow" />
      <div className="absolute inset-0 bg-grid opacity-[0.15] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 animate-fade-in-up">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1.5 text-xs font-medium text-brand mb-4 shadow-[0_0_15px_-3px_var(--brand)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand shadow-[0_0_8px_var(--brand)]"></span>
            </span>
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
