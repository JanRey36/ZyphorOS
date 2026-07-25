import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapPin, Github, Infinity } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Zyphor OS" },
      {
        name: "description",
        content:
          "Meet the people behind the development and maintenance of Zyphor OS.",
      },
      { property: "og:title", content: "Project Team — Zyphor OS" },
      { property: "og:description", content: "The people behind Zyphor OS." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: TeamPage,
});

const REPO = "zyphor-os/zyphor-os-desktop";
const LEAD_USERNAME = "markjasonespelita";

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  location: string | null;
  html_url: string;
}

interface GitHubContributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

function TeamPage() {
  const [lead, setLead] = useState<GitHubUser | null>(null);
  const [contributors, setContributors] = useState<GitHubContributor[]>([]);
  const [loadingLead, setLoadingLead] = useState(true);
  const [loadingContribs, setLoadingContribs] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${LEAD_USERNAME}`)
      .then((r) => r.json())
      .then((d: GitHubUser) => setLead(d))
      .catch(() => {})
      .finally(() => setLoadingLead(false));

    fetch(`https://api.github.com/repos/${REPO}/contributors?per_page=50`)
      .then((r) => r.json())
      .then((d: GitHubContributor[]) =>
        setContributors(Array.isArray(d) ? d : [])
      )
      .catch(() => {})
      .finally(() => setLoadingContribs(false));
  }, []);

  return (
    <SiteLayout>
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">

        {/* ── Page Title ── */}
        <div className="text-center pt-16 pb-12">
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "'Courier New', Courier, monospace" }}
          >
            Project Team
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            The people behind the development and maintenance of Zyphor OS.
          </p>
        </div>

        {/* ── Lead Maintainer ── */}
        <section className="text-center mb-24">
          <h2 className="text-lg sm:text-xl font-semibold tracking-wide mb-8">
            Creator And Lead OS Maintainer
          </h2>

          {loadingLead ? (
            <div className="flex flex-col items-center gap-4 animate-pulse">
              <div className="h-32 w-32 rounded-full bg-white/10 mx-auto" />
              <div className="h-6 w-64 rounded bg-white/10 mx-auto" />
              <div className="h-4 w-40 rounded bg-white/10 mx-auto" />
              <div className="h-4 w-72 rounded bg-white/10 mx-auto" />
              <div className="h-4 w-64 rounded bg-white/10 mx-auto" />
            </div>
          ) : lead ? (
            <div className="flex flex-col items-center">
              <img
                src={lead.avatar_url}
                alt={lead.name ?? lead.login}
                className="h-32 w-32 sm:h-36 sm:w-36 rounded-full ring-2 ring-brand/50 object-cover"
              />
              <h3 className="mt-6 text-2xl sm:text-3xl font-bold">{lead.name ?? lead.login}</h3>
              <p className="text-sm sm:text-base text-brand/80 mt-1">@{lead.login}</p>

              {lead.bio && (
                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                  {lead.bio}
                </p>
              )}

              {/* Stats */}
              <div className="mt-8 flex items-start justify-center gap-16">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold">{lead.followers}</span>
                  <span className="text-xs sm:text-sm text-muted-foreground mt-1">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold">{lead.following}</span>
                  <span className="text-xs sm:text-sm text-muted-foreground mt-1">Following</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold">{lead.public_repos}</span>
                  <span className="text-xs sm:text-sm text-muted-foreground mt-1">Repositories</span>
                </div>
              </div>

              {lead.location && (
                <div className="mt-6 flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                  <MapPin className="h-4 w-4 text-brand" />
                  {lead.location}
                </div>
              )}

              <a
                href={lead.html_url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md border border-border/70 bg-surface/40 px-6 py-2.5 text-sm font-medium hover:bg-surface hover:border-brand/50 hover:text-brand transition"
              >
                View GitHub Profile
              </a>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Could not load profile data.</p>
          )}
        </section>

        {/* ── Contributors ── */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-lg sm:text-xl font-semibold tracking-wide mb-2">Contributors</h2>
            <p className="text-sm text-muted-foreground">
              Developers and community members who contribute to Zyphor OS.
            </p>
          </div>

          {loadingContribs ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-3 animate-pulse">
                  <div className="h-24 w-24 rounded-full bg-white/10" />
                  <div className="h-3 w-24 rounded bg-white/10" />
                  <div className="h-2 w-16 rounded bg-white/10" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              {contributors.map((c) => (
                <div key={c.login} className="flex flex-col items-center text-center">
                  <img
                    src={c.avatar_url}
                    alt={c.login}
                    className="h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover ring-1 ring-white/10"
                  />
                  <p className="mt-4 text-sm sm:text-base font-semibold break-all leading-snug px-2">
                    {c.login}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {c.contributions} contribution{c.contributions !== 1 ? "s" : ""}
                  </p>
                  <a
                    href={c.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs border border-border/60 rounded-md px-3 py-1.5 text-muted-foreground hover:text-brand hover:border-brand/50 transition whitespace-nowrap"
                  >
                    <Github className="h-3 w-3" />
                    GitHub Profile
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ── Stats banner ── */}
        <section className="rounded-2xl bg-white/5 border border-white/10 mb-24">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            <div className="flex flex-col items-center py-10 px-4 text-center">
              <span
                className="text-4xl sm:text-5xl font-extrabold text-brand"
                style={{ fontFamily: "'Courier New', Courier, monospace" }}
              >
                100%
              </span>
              <span className="mt-2 text-sm sm:text-base text-muted-foreground">Open Source</span>
            </div>
            <div className="flex flex-col items-center py-10 px-4 text-center">
              <span
                className="text-4xl sm:text-5xl font-extrabold text-brand"
                style={{ fontFamily: "'Courier New', Courier, monospace" }}
              >
                Linux
              </span>
              <span className="mt-2 text-sm sm:text-base text-muted-foreground">Powered Foundation</span>
            </div>
            <div className="flex flex-col items-center py-10 px-4 text-center">
              <Infinity className="h-10 w-10 sm:h-12 sm:w-12 text-brand" strokeWidth={2} />
              <span className="mt-2 text-sm sm:text-base text-muted-foreground">Learning Potential</span>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="text-center space-y-4">
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "'Courier New', Courier, monospace" }}
          >
            The Future Belongs To Builders
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Most people consume technology. Zyphor users learn how to create it.
          </p>
          <div className="pt-4">
            <a
              href="/download"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition shadow-lg shadow-cyan-500/20"
            >
              Get Started Now
            </a>
          </div>
        </section>

      </div>
    </SiteLayout>
  );
}
