import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import {
  Download,
  ArrowRight,
  BookOpen,
  Github,
  Layers,
  Cpu,
  Users,
  ShieldCheck,
  FileText,
  Terminal,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useScrollReveal } from "@/lib/useScrollReveal";
import image1 from "@/assets/1.jpg";
import image2 from "@/assets/2.jpg";
import image3 from "@/assets/3.jpg";
import logoImage from "@/assets/logo.png";
import { latestRelease } from "@/data/releases";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zyphor OS — Learn Linux From The Inside Out" },
      {
        name: "description",
        content:
          "Zyphor OS is a modern, learning-oriented Linux distribution based on Debian and Kali. Minimal, developer-focused, open source.",
      },
      { property: "og:title", content: "Zyphor OS — Learn Linux From The Inside Out" },
      {
        property: "og:description",
        content:
          "A modern, learning-oriented Linux distribution. Minimal, developer-focused, open source.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const features = [
  {
    icon: BookOpen,
    title: "Learning-Oriented",
    desc: "Every design choice is made to help you understand what your system is actually doing, not to hide it.",
  },
  {
    icon: Layers,
    title: "Debian / Kali Based",
    desc: "Built on a proven foundation with access to a massive package ecosystem and security tooling.",
  },
  {
    icon: ShieldCheck,
    title: "Actively Maintained",
    desc: "Regular security updates, kernel refreshes, and LTS releases with a five-year support window.",
  },
  {
    icon: Github,
    title: "Open Source",
    desc: "Fully open source. Read the code, file an issue, or send a patch — everything is transparent.",
  },
  {
    icon: Users,
    title: "Community Driven",
    desc: "Shaped by contributors, learners and educators from around the world.",
  },
  {
    icon: FileText,
    title: "Complete Office Suite",
    desc: "Ships with LibreOffice preinstalled so you can be productive the moment your desktop boots.",
  },
  {
    icon: Cpu,
    title: "Own Ecosystem",
    desc: "A unified CLI, package manager, and command center that make Zyphor OS feel like one product.",
  },
];

const whyChoose = [
  {
    title: "A minimal, controlled environment.",
    body:
      "Zyphor OS ships lean by default. No bloated defaults, no hidden services running behind your back — just the tools you asked for and a clear path to add more.",
    image: image1,
  },
  {
    title: "One CLI to rule the whole system.",
    body:
      "The Zyphor CLI abstracts installation, updates, theming, doctor checks and diagnostics behind a single, consistent command surface. Learn it once, use it everywhere.",
    image: image2,
  },
  {
    title: "Files, apps and system tools, unified.",
    body:
      "From the file manager to the Zyphor Command Center, every surface follows the same design language. It feels like a real product, not a stack of unrelated components.",
    image: image3,
  },
];

function HomePage() {
  useScrollReveal();

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.18] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                <img src={logoImage} alt="Zyphor OS Logo" className="h-4 w-4 rounded-sm animate-pulse" />
                {latestRelease.version} · {latestRelease.codename ?? "Stable"}
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                Learn Linux from{" "}
                <span className="text-gradient">the inside out.</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                Zyphor OS is a modern, learning-oriented Linux distribution built on
                Debian and Kali. Minimal by design, developer-focused, and shaped by an
                open source community.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/download"
                  className="btn-brand btn-brand-hover inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold"
                >
                  <Download className="h-4 w-4" />
                  Download Zyphor OS
                </Link>
                <Link
                  to="/about"
                  className="btn-ghost inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <dl className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
                {[
                  { k: "5 yrs", v: "LTS support" },
                  { k: "100%", v: "Open source" },
                  { k: "Debian", v: "Rock-solid base" },
                ].map((s) => (
                  <div key={s.v} className="reveal">
                    <dt className="text-2xl font-display font-semibold text-foreground">
                      {s.k}
                    </dt>
                    <dd className="text-xs text-muted-foreground mt-1">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-6 animate-fade-in">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-4 bg-glow blur-3xl opacity-80 animate-pulse-glow" />
                <img
                  src={logoImage}
                  alt="Zyphor OS Logo"
                  className="relative w-64 h-64 sm:w-80 sm:h-80 object-contain drop-shadow-[0_0_60px_rgba(0,180,255,0.4)] animate-float"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 reveal">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">Why Zyphor OS</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            Built for people who want to actually understand their system.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Zyphor OS is opinionated where it matters and transparent everywhere else.
            It teaches, it stays out of your way, and it grows with you.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <article
              key={title}
              className="group card-elevated card-hover rounded-2xl p-6 transition-all duration-300 reveal"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20 group-hover:bg-brand/20 group-hover:scale-110 transition-all duration-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </section>


      {/* LATEST RELEASE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 reveal">
        <div className="relative overflow-hidden rounded-3xl card-elevated p-8 sm:p-12">
          <div className="absolute inset-0 bg-glow opacity-70 pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/15 text-brand px-3 py-1 text-xs font-semibold ring-1 ring-brand/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                </span>
                Latest release
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
                {latestRelease.version}
              </h2>
              <p className="mt-2 text-muted-foreground">
                Codename <span className="text-foreground font-medium">
                {latestRelease.codename}
                </span>{" "}
                · Released {new Date(latestRelease.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="mt-4 text-sm text-muted-foreground max-w-lg">
                {latestRelease.notes}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/download"
                  className="btn-brand btn-brand-hover inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold"
                >
                  <Download className="h-4 w-4" /> Download ISO
                </Link>
                <Link
                  to="/download"
                  className="btn-ghost inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold"
                >
                  Release notes <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-border/60 bg-background/60 p-5 font-mono text-sm shadow-xl code-block">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span className="ml-2 text-xs text-muted-foreground">terminal</span>
              </div>
              <pre className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
<span className="text-brand">$</span> zyphor system upgrade
<span className="text-brand">$</span> zyphor setup theme dark
<span className="text-brand">$</span> zyphor doctor scan
<span className="text-muted-foreground">→ System healthy · 0 issues found</span><span className="animate-blink inline-block w-2 h-4 bg-foreground align-middle ml-1"></span>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE — alternating */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        <div className="reveal">
          <p className="text-sm font-medium text-brand">Why choose Zyphor</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
            A distribution that respects your time and teaches you as you go.
          </h2>
        </div>

        {whyChoose.map((row, i) => (
          <div
            key={row.title}
            className="grid lg:grid-cols-2 gap-10 items-center reveal"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                {row.title}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
                {row.body}
              </p>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="rounded-2xl overflow-hidden border-glow card-elevated group relative">
                 <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay z-10" />
                <img src={row.image} alt="" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* COMMUNITY CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 reveal">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-surface/60 p-10 sm:p-14 text-center">
          <div className="absolute inset-0 bg-glow opacity-60 pointer-events-none animate-pulse-glow" />
          <div className="relative">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-brand/10 text-brand ring-1 ring-brand/30 mb-4 shadow-[0_0_15px_-3px_var(--brand)] animate-float">
               <Terminal className="h-8 w-8" />
            </div>
            
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
              Zyphor is built in the open.
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
              Contribute code, improve documentation, report issues or just join the
              conversation. There's a place for everyone.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/documentation"
                className="btn-brand btn-brand-hover inline-flex items-center gap-2 rounded-lg px-8 py-3 text-sm font-semibold"
              >
                Contribute
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Shot({
  src,
  label,
  className = "",
}: {
  src: string;
  label: string;
  className?: string;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-surface/40 ${className}`}
    >
      <img
        src={src}
        alt={label}
        loading="lazy"
        className="w-full h-full object-cover aspect-[16/10] transition duration-500 group-hover:scale-[1.03]"
      />
      <figcaption className="absolute bottom-3 left-3 rounded-md bg-background/70 backdrop-blur px-2 py-1 text-xs text-muted-foreground border border-border/60">
        {label}
      </figcaption>
    </figure>
  );
}
