import { createFileRoute } from "@tanstack/react-router";
import { Github, MessageSquare, Bug, Lightbulb, Users, Shield } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Zyphor OS" },
      {
        name: "description",
        content:
          "Join the Zyphor OS community. Contribute code, report bugs, discuss ideas, and help shape a modern learning-oriented Linux distribution.",
      },
      { property: "og:title", content: "Zyphor OS Community" },
      {
        property: "og:description",
        content: "Contribute, report issues, and join discussions with the Zyphor OS community.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CommunityPage,
});

const cards = [
  {
    icon: Github,
    title: "GitHub",
    body: "All source code, issue tracking and pull requests live on GitHub.",
    cta: "Open GitHub",
    href: "https://github.com/",
  },
  {
    icon: Bug,
    title: "Report a Bug",
    body: "Found something broken? File a detailed report and help us fix it fast.",
    cta: "File an issue",
    href: "#",
  },
  {
    icon: Lightbulb,
    title: "Feature Requests",
    body: "Have an idea that would make Zyphor better? Propose it to the community.",
    cta: "Suggest a feature",
    href: "#",
  },
  {
    icon: MessageSquare,
    title: "Discussions",
    body: "Ask questions, share workflows and help other users.",
    cta: "Join discussions",
    href: "#",
  },
  {
    icon: Users,
    title: "Contributors",
    body: "Meet the people who build, document and maintain Zyphor OS.",
    cta: "See contributors",
    href: "#",
  },
  {
    icon: Shield,
    title: "Community Guidelines",
    body: "How we work together — a short, honest code of conduct.",
    cta: "Read guidelines",
    href: "#",
  },
];

function CommunityPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Community"
        title="Built by contributors, for learners."
        description="Zyphor OS is open source and community-driven. Anyone can help — from filing an issue to shipping a feature."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, body, cta, href }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group card-elevated rounded-2xl p-6 hover:-translate-y-0.5 hover:border-brand/40 transition flex flex-col"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{body}</p>
              <span className="mt-4 text-sm font-semibold text-brand group-hover:text-brand-glow">
                {cta} →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 card-elevated rounded-3xl p-8 sm:p-12">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <Stat n="2.4k+" label="GitHub stars" />
            <Stat n="180+" label="Contributors" />
            <Stat n="12" label="Language locales" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="text-4xl font-display font-bold text-gradient">{n}</div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
