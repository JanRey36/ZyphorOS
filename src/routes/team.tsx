import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapPin, Infinity } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { TeamRevealGrid } from "@/components/ui/team-reveal-grid";
import { useScrollReveal } from "@/lib/useScrollReveal";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Zyphor OS" },
      {
        name: "description",
        content: "Meet the people behind the development and maintenance of Zyphor OS.",
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
const GITHUB_CACHE_TTL = 60 * 60 * 1000;
const LEAD_CACHE_KEY = "zyphor-os:team-lead";
const CONTRIBUTORS_CACHE_KEY = "zyphor-os:team-contributors";
const TEAM_ROLES: Record<string, string> = {
  JanRey36: "Lead Website & Documentation Maintainer",
  markjasonespelita: "Lead Operating System Maintainer",
  Isojenalyn14: "Graphic Designer",
  NicoleHonradoErvas: "Graphic Designer",
  "fen-lowcode": "Deputy OS Maintainer",
};

function getTeamRole(login: string) {
  return Object.entries(TEAM_ROLES).find(
    ([username]) => username.toLowerCase() === login.toLowerCase(),
  )?.[1];
}

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

interface CachedGitHubData<T> {
  cachedAt: number;
  data: T;
}

let leadRequest: Promise<GitHubUser | null> | null = null;
let contributorsRequest: Promise<GitHubContributor[] | null> | null = null;

function readCachedData<T>(key: string, allowStale = false): T | null {
  if (typeof window === "undefined") return null;

  try {
    const cached = JSON.parse(localStorage.getItem(key) ?? "null") as CachedGitHubData<T> | null;
    if (
      !cached ||
      !cached.data ||
      (!allowStale && Date.now() - cached.cachedAt >= GITHUB_CACHE_TTL)
    ) {
      return null;
    }
    return cached.data;
  } catch {
    return null;
  }
}

function cacheData<T>(key: string, data: T) {
  try {
    localStorage.setItem(key, JSON.stringify({ cachedAt: Date.now(), data }));
  } catch {
    // Browsers with storage disabled can still use the live GitHub response.
  }
}

async function fetchGitHubData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`GitHub request failed: ${response.status}`);
  return response.json() as Promise<T>;
}

function getLead() {
  const cachedLead = readCachedData<GitHubUser>(LEAD_CACHE_KEY);
  if (cachedLead) return Promise.resolve(cachedLead);

  if (!leadRequest) {
    leadRequest = fetchGitHubData<GitHubUser>(`https://api.github.com/users/${LEAD_USERNAME}`)
      .then((lead) => {
        cacheData(LEAD_CACHE_KEY, lead);
        return lead;
      })
      .catch(() => readCachedData<GitHubUser>(LEAD_CACHE_KEY, true))
      .finally(() => {
        leadRequest = null;
      });
  }

  return leadRequest;
}

function getContributors() {
  const cachedContributors = readCachedData<GitHubContributor[]>(CONTRIBUTORS_CACHE_KEY);
  if (cachedContributors) return Promise.resolve(cachedContributors);

  if (!contributorsRequest) {
    contributorsRequest = fetchGitHubData<GitHubContributor[]>(
      `https://api.github.com/repos/${REPO}/contributors?per_page=50`,
    )
      .then((contributors) => {
        if (!Array.isArray(contributors)) throw new Error("Invalid GitHub contributor response");
        cacheData(CONTRIBUTORS_CACHE_KEY, contributors);
        return contributors;
      })
      .catch(() => readCachedData<GitHubContributor[]>(CONTRIBUTORS_CACHE_KEY, true))
      .finally(() => {
        contributorsRequest = null;
      });
  }

  return contributorsRequest;
}

function TeamPage() {
  const [lead, setLead] = useState<GitHubUser | null>(null);
  const [contributors, setContributors] = useState<GitHubContributor[]>([]);
  const [loadingLead, setLoadingLead] = useState(true);
  const [loadingContribs, setLoadingContribs] = useState(true);

  useScrollReveal();

  useEffect(() => {
    let active = true;

    getLead().then((data) => {
      if (active && data) setLead(data);
      if (active) setLoadingLead(false);
    });

    getContributors().then((data) => {
      if (active && data) setContributors(data);
      if (active) setLoadingContribs(false);
    });

    return () => {
      active = false;
    };
  }, []);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Team"
        title="Project Team"
        description="The people behind the development and maintenance of Zyphor OS."
      />
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-16">
        <section className="text-center mb-24 reveal">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold ring-1 ring-brand/20 mb-8 uppercase tracking-widest">
            Creator And Lead OS Maintainer
          </div>

          {loadingLead ? (
            <div className="flex flex-col items-center gap-4 animate-pulse">
              <div className="h-32 w-32 rounded-full bg-surface skeleton" />
              <div className="h-6 w-64 rounded bg-surface skeleton mx-auto" />
              <div className="h-4 w-40 rounded bg-surface skeleton mx-auto" />
              <div className="h-4 w-72 rounded bg-surface skeleton mx-auto" />
              <div className="h-4 w-64 rounded bg-surface skeleton mx-auto" />
            </div>
          ) : lead ? (
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-glow blur-2xl opacity-60 rounded-full animate-pulse-glow" />
                <img
                  src={lead.avatar_url}
                  alt={lead.name ?? lead.login}
                  className="relative h-32 w-32 sm:h-36 sm:w-36 rounded-full ring-4 ring-brand/30 object-cover shadow-[0_0_30px_-5px_var(--brand)]"
                />
              </div>
              <h3 className="mt-8 text-2xl sm:text-3xl font-bold">{lead.name ?? lead.login}</h3>
              <p className="text-sm sm:text-base text-brand mt-1 font-mono">@{lead.login}</p>

              {lead.bio && (
                <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                  {lead.bio}
                </p>
              )}

              <div className="mt-10 flex items-start justify-center gap-10 sm:gap-16">
                <div className="flex flex-col items-center group">
                  <span className="text-3xl font-bold font-mono text-foreground group-hover:text-brand transition-colors duration-300">
                    {lead.followers}
                  </span>
                  <span className="text-xs sm:text-sm text-muted-foreground mt-1 uppercase tracking-widest">
                    Followers
                  </span>
                </div>
                <div className="w-px h-12 bg-border/60" />
                <div className="flex flex-col items-center group">
                  <span className="text-3xl font-bold font-mono text-foreground group-hover:text-brand transition-colors duration-300">
                    {lead.following}
                  </span>
                  <span className="text-xs sm:text-sm text-muted-foreground mt-1 uppercase tracking-widest">
                    Following
                  </span>
                </div>
                <div className="w-px h-12 bg-border/60" />
                <div className="flex flex-col items-center group">
                  <span className="text-3xl font-bold font-mono text-foreground group-hover:text-brand transition-colors duration-300">
                    {lead.public_repos}
                  </span>
                  <span className="text-xs sm:text-sm text-muted-foreground mt-1 uppercase tracking-widest">
                    Repos
                  </span>
                </div>
              </div>

              {lead.location && (
                <div className="mt-8 flex items-center gap-2 text-sm sm:text-base text-muted-foreground bg-surface/50 px-4 py-2 rounded-full border border-border/40">
                  <MapPin className="h-4 w-4 text-brand" />
                  {lead.location}
                </div>
              )}

              <a
                href={lead.html_url}
                target="_blank"
                rel="noreferrer"
                className="mt-8 btn-ghost inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold"
              >
                View GitHub Profile
              </a>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Could not load profile data.</p>
          )}
        </section>

        <section className="mb-24 reveal">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Contributors</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Developers and community members who contribute to Zyphor OS.
            </p>
          </div>

          {loadingContribs ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="h-24 w-24 rounded-full bg-surface skeleton" />
                  <div className="h-3 w-24 rounded bg-surface skeleton" />
                  <div className="h-2 w-16 rounded bg-surface skeleton" />
                </div>
              ))}
            </div>
          ) : (
            <TeamRevealGrid
              members={contributors.map((c) => ({
                id: c.login,
                name: c.login,
                role: getTeamRole(c.login),
                image: c.avatar_url,
                imageAlt: c.login,
                contributions: c.contributions,
                profileUrl: c.html_url,
              }))}
            />
          )}
        </section>

        <section className="rounded-3xl card-elevated mb-24 reveal overflow-hidden relative">
          <div className="absolute inset-0 bg-glow opacity-30 pointer-events-none" />
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/60 relative">
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center group">
              <span className="text-5xl font-extrabold text-brand font-mono group-hover:scale-110 transition-transform duration-300">
                100%
              </span>
              <span className="mt-3 text-sm font-medium text-foreground uppercase tracking-widest">
                Open Source
              </span>
            </div>
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center group">
              <span className="text-5xl font-extrabold text-brand font-mono group-hover:scale-110 transition-transform duration-300">
                Linux
              </span>
              <span className="mt-3 text-sm font-medium text-foreground uppercase tracking-widest">
                Powered Foundation
              </span>
            </div>
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center group">
              <Infinity
                className="h-12 w-12 text-brand group-hover:scale-110 group-hover:rotate-180 transition-all duration-500"
                strokeWidth={2.5}
              />
              <span className="mt-3 text-sm font-medium text-foreground uppercase tracking-widest">
                Learning Potential
              </span>
            </div>
          </div>
        </section>

        <section className="text-center space-y-6 reveal">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            The Future Belongs To Builders
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Most people consume technology. Zyphor users learn how to create it.
          </p>
          <div className="pt-6">
            <a
              href="/download"
              className="btn-brand btn-brand-hover inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold"
            >
              Get Started Now
            </a>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
