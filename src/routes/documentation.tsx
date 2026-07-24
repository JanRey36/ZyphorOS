import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Rocket,
  Package,
  Terminal,
  Settings,
  LifeBuoy,
  HelpCircle,
  Code2,
  Search,
} from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/documentation")({
  head: () => ({
    meta: [
      { title: "Documentation — Zyphor OS" },
      {
        name: "description",
        content:
          "Learn how to install, configure and master Zyphor OS. Guides, package management, CLI reference and troubleshooting.",
      },
      { property: "og:title", content: "Zyphor OS Documentation" },
      {
        property: "og:description",
        content: "Guides, CLI reference and troubleshooting for Zyphor OS.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DocsPage,
});

const sections = [
  {
    icon: Rocket,
    title: "Getting Started",
    desc: "Your first hour with Zyphor OS — from ISO to a fully configured desktop.",
  },
  {
    icon: BookOpen,
    title: "Installation",
    desc: "USB, dual-boot, virtual machine and network install walkthroughs.",
  },
  {
    icon: Package,
    title: "Package Manager",
    desc: "Add, remove and pin packages with the unified Zyphor package manager.",
  },
  {
    icon: Terminal,
    title: "CLI",
    desc: "The complete `zyphor` command reference and everyday recipes.",
  },
  {
    icon: Settings,
    title: "System Administration",
    desc: "Users, services, networking, storage and system-wide configuration.",
  },
  {
    icon: LifeBuoy,
    title: "Troubleshooting",
    desc: "Common issues, doctor reports, and how to recover a broken system.",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    desc: "Quick answers to the questions we hear most often.",
  },
  {
    icon: Code2,
    title: "Developer Guide",
    desc: "Build packages, contribute upstream and integrate with the Zyphor CLI.",
  },
];

const faqs = [
  {
    q: "Is Zyphor OS based on Debian or Kali?",
    a: "Both. Zyphor OS is built on the Debian base with selected components and tooling drawn from Kali, giving you a stable foundation with modern security tooling available out of the box.",
  },
  {
    q: "How long is each LTS release supported?",
    a: "Every LTS release receives security and stability updates for 5 years from its initial release date.",
  },
  {
    q: "Can I switch themes from the command line?",
    a: "Yes. Run `zyphor setup theme dark` or `zyphor setup theme light` to switch appearance without touching desktop settings manually.",
  },
  {
    q: "Does Zyphor OS have its own package repository?",
    a: "Yes. Zyphor maintains an independent package ecosystem alongside its Debian base, so distribution-specific tooling stays consistent across releases.",
  },
];

function DocsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Documentation"
        title="Everything you need to run Zyphor OS."
        description="From your very first boot to advanced system administration — the docs teach the concepts, not just the commands."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        {/* Search */}
        <div className="max-w-2xl">
          <label className="relative block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              placeholder="Search the documentation…"
              className="w-full rounded-xl border border-border bg-surface/60 pl-11 pr-4 py-3.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition"
            />
          </label>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map(({ icon: Icon, title, desc }) => (
            <Link
              key={title}
              to="/documentation"
              className="group card-elevated rounded-2xl p-6 hover:-translate-y-0.5 hover:border-brand/40 transition"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20 group-hover:bg-brand/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </Link>
          ))}
        </div>

        {/* Quickstart snippet */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl font-bold">Quickstart</h2>
            <p className="mt-3 text-muted-foreground">
              Once installed, three commands will get you fully up to date and
              configured. That's the whole point of the CLI abstraction layer:
              everything the system does is one verb away.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-background/60 p-5 font-mono text-sm">
            <pre className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
<span className="text-brand"># update all packages</span>
$ zyphor system upgrade

<span className="text-brand"># set theme</span>
$ zyphor setup theme dark

<span className="text-brand"># health check</span>
$ zyphor doctor scan
            </pre>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold">Frequently asked questions</h2>
          <div className="mt-6 card-elevated rounded-2xl px-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
