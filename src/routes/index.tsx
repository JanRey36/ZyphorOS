import { createFileRoute, Link } from "@tanstack/react-router";
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
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import desktopAsset from "@/assets/desktop.png.asset.json";
import fileManagerAsset from "@/assets/filemanager.png.asset.json";
import zccAsset from "@/assets/zcc.jpg.asset.json";
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
    image: desktopAsset.url,
  },
  {
    title: "One CLI to rule the whole system.",
    body:
      "The Zyphor CLI abstracts installation, updates, theming, doctor checks and diagnostics behind a single, consistent command surface. Learn it once, use it everywhere.",
    image: zccAsset.url,
  },
  {
    title: "Files, apps and system tools, unified.",
    body:
      "From the file manager to the Zyphor Command Center, every surface follows the same design language. It feels like a real product, not a stack of unrelated components.",
    image: fileManagerAsset.url,
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-glow pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.18] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-brand" />
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
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-5 py-3 text-sm font-semibold text-foreground hover:bg-surface transition"
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
                  <div key={s.v}>
                    <dt className="text-2xl font-display font-semibold text-foreground">
                      {s.k}
                    </dt>
                    <dd className="text-xs text-muted-foreground mt-1">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -inset-4 bg-glow blur-2xl opacity-60" />
                <div className="relative rounded-2xl overflow-hidden border-glow card-elevated">
                  <img
                    src={desktopAsset.url}
                    alt="Zyphor OS desktop environment"
                    className="w-full h-auto block"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
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
          {features.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group card-elevated rounded-2xl p-6 transition hover:-translate-y-0.5 hover:border-brand/40"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
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

      {/* SCREENSHOTS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-sm font-medium text-brand">See it in action</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
              A desktop that feels like one product.
            </h2>
          </div>
          <Link
            to="/documentation"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
          >
            Explore the docs <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-6">
          <Shot src={desktopAsset.url} className="md:col-span-4" label="Desktop" />
          <Shot src={zccAsset.url} className="md:col-span-2" label="Command Center" />
          <Shot src={fileManagerAsset.url} className="md:col-span-3" label="File Manager" />
          <Shot src={zccAsset.url} className="md:col-span-3" label="Package Management" />
        </div>
      </section>

      {/* LATEST RELEASE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-3xl card-elevated p-8 sm:p-12">
          <div className="absolute inset-0 bg-glow opacity-70 pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/15 text-brand px-3 py-1 text-xs font-semibold ring-1 ring-brand/30">
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
                  to="/releases"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-3 text-sm font-semibold hover:bg-surface transition"
                >
                  Release notes <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-border/60 bg-background/60 p-5 font-mono text-sm">
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
<span className="text-muted-foreground">→ System healthy · 0 issues found</span>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE — alternating */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        <div>
          <p className="text-sm font-medium text-brand">Why choose Zyphor</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
            A distribution that respects your time and teaches you as you go.
          </h2>
        </div>

        {whyChoose.map((row, i) => (
          <div
            key={row.title}
            className="grid lg:grid-cols-2 gap-10 items-center"
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
              <div className="rounded-2xl overflow-hidden border-glow card-elevated">
                <img src={row.image} alt="" className="w-full h-auto block" loading="lazy" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* COMMUNITY CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-surface/60 p-10 sm:p-14 text-center">
          <div className="absolute inset-0 bg-glow opacity-60 pointer-events-none" />
          <div className="relative">
            <Terminal className="h-8 w-8 mx-auto text-brand" />
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
              Zyphor is built in the open.
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
              Contribute code, improve documentation, report issues or just join the
              conversation. There's a place for everyone.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contribute"
                className="btn-brand btn-brand-hover inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold"
              >
                Contribute
              </Link>
              <Link
                to="/community"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-5 py-3 text-sm font-semibold hover:bg-surface transition"
              >
                Join community
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
