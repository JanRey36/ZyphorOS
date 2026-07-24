import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Download,
  HardDrive,
  Cpu,
  MemoryStick,
  Check,
  FileCode,
  Search,
  ChevronDown,
  Tag,
} from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { latestRelease, releases, type ReleaseChannel } from "@/data/releases";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Download & Releases — Zyphor OS" },
      {
        name: "description",
        content:
          "Download the latest Zyphor OS ISO and browse the full release archive. Desktop and minimal editions, checksums, release notes, and hardware requirements.",
      },
      { property: "og:title", content: "Download Zyphor OS" },
      {
        property: "og:description",
        content: "Get the latest Zyphor OS ISO and browse the release archive.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DownloadPage,
});

const editions = [
  {
    name: "Zyphor OS Desktop",
    tag: "Recommended",
    desc: "Full desktop experience with LibreOffice, Zyphor Command Center and everyday tools.",
    size: "3.4 GB",
    arch: "x86_64",
  },
  {
    name: "Zyphor OS Minimal",
    tag: "Advanced",
    desc: "A lean base image for servers, VMs and users who prefer to build up from a minimal core.",
    size: "1.1 GB",
    arch: "x86_64",
  },
  {
    name: "Older Releases",
    tag: "Archive",
    desc: "Previous stable and legacy builds, available for reproducibility and testing.",
    size: "varies",
    arch: "x86_64 / arm64",
  },
];

const filters = ["Latest", "LTS", "Stable", "Legacy"] as const;
type Filter = (typeof filters)[number];

function DownloadPage() {
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
          (r.codename && r.codename.toLowerCase().includes(s)) ||
          (r.notes && r.notes.toLowerCase().includes(s)),
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
        eyebrow="Download & Releases"
        title="Get Zyphor OS."
        description="Choose the edition that fits your workflow. Every ISO ships with a signed checksum and detailed release notes. Browse the full release archive below."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {editions.map((e, i) => (
            <div
              key={e.name}
              className="card-elevated rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {e.tag}
                </span>
                {i === 0 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand/15 text-brand ring-1 ring-brand/30">
                    LATEST
                  </span>
                )}
              </div>
              <h3 className="mt-3 text-xl font-semibold">{e.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>

              <dl className="mt-5 grid grid-cols-3 text-sm">
                <div>
                  <dt className="text-xs text-muted-foreground">Version</dt>
                  <dd className="font-medium">{latestRelease.version.split("-")[0]}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Arch</dt>
                  <dd className="font-medium">{e.arch}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Size</dt>
                  <dd className="font-medium">{e.size}</dd>
                </div>
              </dl>

              <div className="mt-4 text-xs text-muted-foreground">
                Released {new Date(latestRelease.date).toLocaleDateString()}
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <a
                  href="#"
                  className="btn-brand btn-brand-hover inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold"
                >
                  <Download className="h-4 w-4" /> Download ISO
                </a>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="flex-1 text-xs inline-flex items-center justify-center gap-1 rounded-md border border-border bg-surface/60 px-3 py-2 hover:bg-surface"
                  >
                    <FileCode className="h-3.5 w-3.5" /> Checksum
                  </a>
                  <a
                    href="#releases"
                    className="flex-1 text-xs inline-flex items-center justify-center gap-1 rounded-md border border-border bg-surface/60 px-3 py-2 hover:bg-surface"
                  >
                    Release notes
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <ReqCard
            title="Minimum hardware"
            items={[
              { icon: Cpu, k: "CPU", v: "64-bit dual-core, 1.5 GHz" },
              { icon: MemoryStick, k: "RAM", v: "2 GB" },
              { icon: HardDrive, k: "Storage", v: "20 GB" },
            ]}
          />
          <ReqCard
            title="Recommended hardware"
            items={[
              { icon: Cpu, k: "CPU", v: "64-bit quad-core, 2.4 GHz+" },
              { icon: MemoryStick, k: "RAM", v: "8 GB or more" },
              { icon: HardDrive, k: "Storage", v: "40 GB SSD" },
            ]}
          />
        </div>

        {/* Install guide */}
        <div className="mt-12 card-elevated rounded-2xl p-8">
          <h3 className="text-2xl font-semibold">Installation guide</h3>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Zyphor OS installs like any modern Linux distribution. Verify the checksum,
            write the ISO to a USB drive, boot from it, and follow the installer.
          </p>
          <ol className="mt-6 space-y-3">
            {[
              "Download the ISO and verify its SHA-256 checksum.",
              "Write the ISO to a USB drive using dd, Balena Etcher or Rufus.",
              "Boot from the USB and select Install Zyphor OS.",
              "Follow the guided installer and reboot into your new system.",
              "Run `zyphor system upgrade` and `zyphor doctor scan` after first login.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand text-xs ring-1 ring-brand/30">
                  {i + 1}
                </span>
                <span className="text-sm text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Release Archive (Combined from ReleasesPage) */}
        <div id="releases" className="mt-24">
          <h2 className="text-3xl font-bold mb-2">Release Archive</h2>
          <p className="text-muted-foreground mb-8">
            Every Zyphor OS release, in one place. Searchable and filterable.
          </p>

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
        </div>
      </section>
    </SiteLayout>
  );
}

function ReqCard({
  title,
  items,
}: {
  title: string;
  items: { icon: React.ElementType; k: string; v: string }[];
}) {
  return (
    <div className="card-elevated rounded-2xl p-6">
      <div className="flex items-center gap-2">
        <Check className="h-4 w-4 text-brand" />
        <h4 className="font-semibold">{title}</h4>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map(({ icon: Icon, k, v }) => (
          <li key={k} className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
              <Icon className="h-4 w-4" />
            </span>
            <div className="flex-1 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{k}</span>
              <span className="text-sm font-medium">{v}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
