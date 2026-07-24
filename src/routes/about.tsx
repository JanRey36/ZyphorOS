import { createFileRoute } from "@tanstack/react-router";
import {
  Minimize2,
  Terminal,
  Package,
  Boxes,
  Palette,
  GraduationCap,
} from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";

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
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="A Linux distribution that teaches while you use it."
        description="Zyphor OS was created to make Linux approachable without hiding what makes it powerful."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Intro */}
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold tracking-tight">About Zyphor OS</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Zyphor OS is a modern, learning-oriented Linux distribution built on the
              Debian and Kali foundations. It exists for people who want to move beyond
              copy-pasting commands and actually understand the system underneath.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every default, every command and every tool has been chosen to be
              transparent, consistent and educational.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="card-elevated rounded-2xl p-6">
              <div className="text-xs uppercase tracking-wider text-brand">Created by</div>
              <div className="mt-2 text-lg font-semibold">Mark Jason P. Espelita</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Founder and lead maintainer of the Zyphor OS project.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy pillars */}
        <div>
          <p className="text-sm font-medium text-brand">Philosophy &amp; Vision</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Six principles guide every decision.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="card-elevated rounded-2xl p-6 hover:-translate-y-0.5 transition"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Why Zyphor exists */}
        <div className="card-elevated rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-glow opacity-60 pointer-events-none" />
          <div className="relative max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">Why Zyphor exists.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Most distributions optimize either for beginners or for experts. Zyphor OS
              tries to bridge that gap: a system that's approachable enough for a first-time
              Linux user, but honest enough that the same user is a step closer to expert
              every time they use it.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Zyphor doesn't hide the terminal, and it doesn't hide the concepts. It
              teaches them, one command at a time.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <p className="text-sm font-medium text-brand">Roadmap</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Where we've been, where we're going.</h2>

          <ol className="mt-10 relative border-l border-border/60 space-y-8 pl-6">
            {timeline.map((t, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[31px] top-1.5 inline-flex h-3 w-3 rounded-full bg-brand ring-4 ring-brand/20" />
                <div className="text-xs text-brand font-semibold uppercase tracking-wider">
                  {t.year}
                </div>
                <h3 className="mt-1 font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SiteLayout>
  );
}
