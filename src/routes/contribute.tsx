import { createFileRoute } from "@tanstack/react-router";
import {
  GitFork,
  GitPullRequest,
  Bug,
  Lightbulb,
  Palette,
  FileText,
  Terminal,
} from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contribute")({
  head: () => ({
    meta: [
      { title: "Contribute — Zyphor OS" },
      {
        name: "description",
        content:
          "Contribute to Zyphor OS. Fork, submit pull requests, report bugs, suggest features, or help with design and documentation.",
      },
      { property: "og:title", content: "Contribute to Zyphor OS" },
      {
        property: "og:description",
        content:
          "How to contribute code, documentation, design and ideas to Zyphor OS.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContributePage,
});

const steps = [
  {
    icon: GitFork,
    title: "1. Fork the repository",
    body: "Fork the Zyphor OS repository on GitHub to your own account.",
    code: "gh repo fork zyphor-os/zyphor",
  },
  {
    icon: Terminal,
    title: "2. Clone locally",
    body: "Clone your fork and set up the development environment.",
    code: "git clone git@github.com:you/zyphor.git\ncd zyphor && ./scripts/setup",
  },
  {
    icon: GitPullRequest,
    title: "3. Submit a Pull Request",
    body: "Push your branch and open a PR against the main repository.",
    code: "git push origin feature/my-change",
  },
];

const ways = [
  {
    icon: Bug,
    title: "Report Bugs",
    body: "File a clear, reproducible bug report with logs from `zyphor doctor report`.",
  },
  {
    icon: Lightbulb,
    title: "Suggest Features",
    body: "Propose new features via GitHub Discussions before opening a PR.",
  },
  {
    icon: Palette,
    title: "Design Contributions",
    body: "Icons, illustrations, themes and UX improvements are always welcome.",
  },
  {
    icon: FileText,
    title: "Documentation",
    body: "Improve guides, fix typos, translate pages — docs are how people learn.",
  },
];

function ContributePage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contribute"
        title="Help shape Zyphor OS."
        description="Every commit, issue, translation and design improvement makes Zyphor better. Here's how to get involved."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Steps */}
        <div>
          <h2 className="text-2xl font-bold">How to contribute code</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {steps.map(({ icon: Icon, title, body, code }) => (
              <div key={title} className="card-elevated rounded-2xl p-6 flex flex-col">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{body}</p>
                <pre className="mt-4 rounded-md bg-background/60 border border-border/60 px-3 py-2 text-xs font-mono text-muted-foreground whitespace-pre-wrap">
                  {code}
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Other ways */}
        <div>
          <h2 className="text-2xl font-bold">Other ways to help</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ways.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="card-elevated rounded-2xl p-6 hover:-translate-y-0.5 transition"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* UI components note */}
        <div className="card-elevated rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-glow opacity-60 pointer-events-none" />
          <div className="relative max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              Contribute UI components.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The Zyphor design system is open. If you build a component that fits our
              guidelines — clean spacing, accessible defaults, keyboard-friendly — we'd
              love to review it.
            </p>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 btn-brand btn-brand-hover inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold"
            >
              Open the design repo
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
