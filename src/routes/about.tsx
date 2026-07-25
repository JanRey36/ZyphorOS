import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Minimize2,
  Terminal,
  Package,
  Boxes,
  Palette,
  GraduationCap,
} from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { useScrollReveal } from "@/lib/useScrollReveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Zyphor OS" },
      {
        name: "description",
        content:
          "Zyphor OS is a learning-oriented Linux distribution created by Mark Jason P. Espelita. Discover its philosophy, vision and roadmap.",
      },
      { property: "og:title", content: "About Zyphor OS" },
      {
        property: "og:description",
        content:
          "Philosophy, vision and roadmap of the Zyphor OS project.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Minimize2,
    title: "Minimal and Controlled Environment",
    body:
      "Zyphor OS ships lean by default. You decide what runs on your machine — nothing sneaks in behind your back.",
  },
  {
    icon: Terminal,
    title: "CLI Abstraction Layer",
    body:
      "A single, consistent command surface for installation, updates, theming and diagnostics. Learn it once, use it everywhere.",
  },
  {
    icon: Package,
    title: "Unified Package Management",
    body:
      "One tool that manages system packages, applications and configuration state — no more juggling half a dozen commands.",
  },
  {
    icon: Boxes,
    title: "Independent Package Ecosystem",
    body:
      "Zyphor maintains its own repository alongside the Debian base to keep distribution-specific tooling stable across releases.",
  },
  {
    icon: Palette,
    title: "Branding and Identity",
    body:
      "A consistent visual language across desktop, CLI and tooling — Zyphor OS feels like one product, not a collection of parts.",
  },
  {
    icon: GraduationCap,
    title: "Educational and Learning-Oriented Design",
    body:
      "Every default is chosen to help you understand your system. Zyphor teaches while you use it.",
  },
];

const timeline = [
  { year: "2024", title: "Project inception", body: "First internal builds — legacy codebase." },
  { year: "2024", title: "Public preview", body: "First public preview released as v0.9.0." },
  { year: "2025", title: "Unified CLI", body: "Introduction of the `zyphor` command surface." },
  { year: "2026", title: "Ada Lovelace LTS", body: "First LTS release under the new naming scheme." },
  { year: "Next", title: "Babbage LTS", body: "Second LTS milestone — coming in the next cycle." },
];

function AboutPage() {
  useScrollReveal();

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="A Linux distribution that teaches while you use it."
        description="Zyphor OS was created to make Linux approachable without hiding what makes it powerful."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <div className="grid lg:grid-cols-5 gap-12 items-center reveal">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold tracking-tight">About Zyphor OS</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Zyphor OS is a modern, learning-oriented Linux distribution built on the
              Debian and Kali foundations. It exists for people who want to move beyond
              copy-pasting commands and actually understand the system underneath.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Every default, every command and every tool has been chosen to be
              transparent, consistent and educational.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="card-elevated rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-xs font-semibold uppercase tracking-widest text-brand">Created by</div>
              <div className="mt-2 text-2xl font-bold">Mark Jason P. Espelita</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Founder and lead maintainer of the Zyphor OS project.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal">
          <p className="text-sm font-medium text-brand">Philosophy &amp; Vision</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            Six principles guide every decision.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, body }, idx) => (
              <article
                key={title}
                className="card-elevated card-hover rounded-2xl p-6 transition-all duration-300 reveal group"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20 group-hover:bg-brand/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="card-elevated rounded-3xl p-10 sm:p-16 relative overflow-hidden reveal">
          <div className="absolute inset-0 bg-glow opacity-60 pointer-events-none animate-pulse-glow" />
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why Zyphor exists?</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Most distributions optimize either for beginners or for experts. Zyphor OS
              tries to bridge that gap: a system that's approachable enough for a first-time
              Linux user, but honest enough that the same user is a step closer to expert
              every time they use it.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Zyphor doesn't hide the terminal, and it doesn't hide the concepts. It
              teaches them, one command at a time.
            </p>
          </div>
        </div>

        <div className="reveal">
          <p className="text-sm font-medium text-brand">Roadmap</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">Where we've been, where we're going.</h2>

          <div className="mt-12 relative max-w-2xl">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-border/60" />
            <ol className="relative space-y-12">
              {timeline.map((t, i) => (
                <li key={i} className="relative pl-12 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <span className="absolute left-[11px] top-1.5 flex items-center justify-center h-5 w-5">
                    <span className="absolute h-full w-full rounded-full bg-brand/20 animate-ping" />
                    <span className="h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_8px_var(--brand)]" />
                  </span>

                  <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-2.5 py-0.5 text-xs font-semibold text-brand tracking-widest uppercase mb-2">
                    {t.year}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{t.title}</h3>
                  <p className="mt-2 text-base text-muted-foreground leading-relaxed">{t.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
