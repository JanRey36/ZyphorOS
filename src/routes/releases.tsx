import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Download, ChevronDown, Tag } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { releases, type ReleaseChannel } from "@/data/releases";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/releases")({
  head: () => ({
    meta: [
      { title: "Releases — Zyphor OS" },
      {
        name: "description",
        content:
          "Searchable archive of every Zyphor OS release. LTS, stable and legacy builds with release notes and download links.",
      },
      { property: "og:title", content: "Zyphor OS Releases" },
      {
        property: "og:description",
        content: "Every Zyphor OS release, searchable and filterable.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ReleasesPage,
});

const filters = ["Latest", "LTS", "Stable", "Legacy"] as const;
type Filter = (typeof filters)[number];

function ReleasesPage() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<Filter>("Latest");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list = releases;
    if (filter !== "Latest") {
      list = list.filter((r) => r.channel === (filter as ReleaseChannel));
    }
    if (q.trim()) {
      const s = q.toLowerCase();
      list = list.filter(
        (r) =>
          r.version.toLowerCase().includes(s) ||
          r.codename?.toLowerCase().includes(s) ||
          r.notes?.toLowerCase().includes(s),
      );
    }
    return list;
  }, [q, filter]);

  const grouped = {
    LTS: releases.filter((r) => r.channel === "LTS"),
    Stable: releases.filter((r) => r.channel === "Stable"),
    Legacy: releases.filter((r) => r.channel === "Legacy"),
  };

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Releases"
        title="Every Zyphor OS release, in one place."
        description="Zyphor OS ships LTS releases every 6 months with a 5-year support window. Codenames follow an alphabetical scheme beginning with Ada Lovelace."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        {/* Search + filters */}
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search versions, codenames, notes…"
              className="w-full rounded-lg border border-border bg-surface/60 pl-9 pr-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-3 py-1.5 text-xs rounded-md border transition",
                  filter === f
                    ? "border-brand/50 bg-brand/15 text-brand"
                    : "border-border text-muted-foreground hover:text-foreground hover:bg-surface",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered results */}
        <div className="mt-8 grid gap-3">
          {filtered.length === 0 && (
            <div className="text-sm text-muted-foreground border border-border/60 rounded-lg p-6 text-center">
              No releases match your search.
            </div>
          )}
          {filtered.map((r) => {
            const open = openId === r.version;
            return (
              <article
                key={r.version}
                className="card-elevated rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(open ? null : r.version)}
                  className="w-full text-left px-5 py-4 flex flex-wrap items-center gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-sm truncate">{r.version}</span>
                      {r.latest && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand/15 text-brand ring-1 ring-brand/30">
                          LATEST
                        </span>
                      )}
                      <span
                        className={cn(
                          "text-[10px] px-2 py-0.5 rounded-full ring-1",
                          r.channel === "LTS" &&
                            "bg-brand-2/15 text-brand-2 ring-brand-2/30",
                          r.channel === "Stable" &&
                            "bg-brand/10 text-brand ring-brand/20",
                          r.channel === "Legacy" &&
                            "bg-muted text-muted-foreground ring-border",
                        )}
                      >
                        {r.channel}
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground flex items-center gap-2 flex-wrap">
                      {r.codename && (
                        <span className="inline-flex items-center gap-1">
                          <Tag className="h-3 w-3" /> {r.codename}
                        </span>
                      )}
                      <span>·</span>
                      <span>{new Date(r.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-muted-foreground transition",
                      open && "rotate-180 text-foreground",
                    )}
                  />
                </button>
                {open && (
                  <div className="border-t border-border/60 px-5 py-5 bg-background/40">
                    <p className="text-sm text-muted-foreground">
                      {r.notes ?? "No detailed notes for this release."}
                    </p>
                    <div className="mt-4 flex gap-2">
                      <a
                        href="#"
                        className="btn-brand btn-brand-hover inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-xs font-semibold"
                      >
                        <Download className="h-3.5 w-3.5" /> Download ISO
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-3.5 py-2 text-xs font-semibold hover:bg-surface"
                      >
                        SHA-256
                      </a>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Release format explainers */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <div className="card-elevated rounded-2xl p-6">
            <h3 className="font-semibold">Standard release format</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Regular builds use the format below. Each version is dated and revisioned.
            </p>
            <code className="mt-4 block rounded-md bg-background/60 border border-border/60 px-3 py-2 text-xs font-mono">
              vX.X.X-yyyy-mm-dd-rX
            </code>
          </div>
          <div className="card-elevated rounded-2xl p-6">
            <h3 className="font-semibold">LTS release format</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Long-term support builds carry an alphabetical codename beginning with
              Ada Lovelace.
            </p>
            <code className="mt-4 block rounded-md bg-background/60 border border-border/60 px-3 py-2 text-xs font-mono">
              vX.X.X-LTS-Codename-uX
            </code>
          </div>
        </div>

        {/* Grouped archive */}
        <div className="mt-16 space-y-10">
          <ArchiveGroup
            title="Ada Lovelace · LTS"
            description="Current LTS line with a 5-year support window."
            list={grouped.LTS}
          />
          <ArchiveGroup
            title="Stable channel"
            description="Rolling stable releases between LTS milestones."
            list={grouped.Stable}
          />
          <ArchiveGroup
            title="Legacy codebase"
            description="Historical builds preserved for reproducibility."
            list={grouped.Legacy}
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function ArchiveGroup({
  title,
  description,
  list,
}: {
  title: string;
  description: string;
  list: typeof releases;
}) {
  return (
    <div>
      <div className="flex items-end justify-between flex-wrap gap-2">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <span className="text-xs text-muted-foreground">
          {list.length} release{list.length === 1 ? "" : "s"}
        </span>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((r) => (
          <div
            key={r.version}
            className="card-elevated rounded-xl p-4 hover:-translate-y-0.5 transition"
          >
            <div className="text-xs text-muted-foreground">
              {new Date(r.date).toLocaleDateString()}
            </div>
            <div className="mt-1 font-mono text-sm truncate">{r.version}</div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand/10 text-brand ring-1 ring-brand/20">
                {r.channel}
              </span>
              <a
                href="#"
                className="text-xs font-semibold text-brand hover:text-brand-glow inline-flex items-center gap-1"
              >
                <Download className="h-3.5 w-3.5" /> ISO
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
