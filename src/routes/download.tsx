import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  HardDrive,
  Cpu,
  MemoryStick,
  Check,
  Search,
  ChevronDown,
  Tag,
  AlertCircle,
  Loader2,
  Calendar,
  FileArchive,
  ShieldCheck,
  Sparkles,
  FileText,
} from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import {
  useGitHubReleases,
  formatBytes,
  type NormalizedRelease,
  type ReleaseChannel,
} from "@/lib/useGitHubReleases";

// ─── Route ────────────────────────────────────────────────────────────────────

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

// ─── Constants ────────────────────────────────────────────────────────────────

const FILTERS = ["All", "LTS", "Stable", "Beta", "Legacy"] as const;
type Filter = (typeof FILTERS)[number];

const CHANNEL_STYLES: Record<ReleaseChannel, string> = {
  LTS: "bg-violet-500/15 text-violet-400 ring-violet-500/30",
  Stable: "bg-brand/10 text-brand ring-brand/20",
  Beta: "bg-amber-500/10 text-amber-400 ring-amber-500/20",
  Legacy: "bg-muted text-muted-foreground ring-border",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

function DownloadPage() {
  const { releases, latest, state } = useGitHubReleases();
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<Filter>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list = releases;
    if (filter !== "All") {
      list = list.filter((r) => r.channel === (filter as ReleaseChannel));
    }
    if (q.trim()) {
      const s = q.toLowerCase();
      list = list.filter(
        (r) =>
          r.version.toLowerCase().includes(s) ||
          (r.codename && r.codename.toLowerCase().includes(s)) ||
          r.notes.toLowerCase().includes(s),
      );
    }
    // Exclude the latest from the archive list so it only appears in the hero
    if (latest) {
      list = list.filter((r) => !r.latest);
    }
    return list;
  }, [q, filter, releases, latest]);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Download & Releases"
        title="Get Zyphor OS."
        description="Choose the edition that fits your workflow. Every ISO ships with a signed checksum and detailed release notes. Browse the full release archive below."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* ── Status Banner ── */}
        {state === "rate-limited" && (
          <StatusBanner
            icon={AlertCircle}
            variant="warn"
            message="GitHub API rate limit reached. Showing cached release data. Download links may not be available — visit GitHub directly for assets."
          />
        )}
        {state === "error" && (
          <StatusBanner
            icon={AlertCircle}
            variant="warn"
            message="Could not reach GitHub. Showing last known release data. Refresh to try again."
          />
        )}

        {/* ── Latest Release Hero ── */}
        {state === "loading" ? (
          <LatestSkeleton />
        ) : latest ? (
          <LatestHero release={latest} />
        ) : null}

        {/* ── Hardware Requirements ── */}
        <div className="grid gap-5 lg:grid-cols-2">
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

        {/* ── Installation Guide ── */}
        <div className="card-elevated rounded-2xl p-8">
          <h3 className="text-2xl font-semibold">Installation guide</h3>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Zyphor OS installs like any modern Linux distribution. Verify the
            checksum, write the ISO to a USB drive, boot from it, and follow the
            installer.
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

        {/* ── Release Archive ── */}
        <div id="releases">
          <div className="flex items-center gap-3 mb-2">
            <FileArchive className="h-5 w-5 text-brand" />
            <h2 className="text-3xl font-bold">Release Archive</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Every Zyphor OS release, in one place. Data is fetched live from
            GitHub Releases.
          </p>

          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-6">
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
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
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

          {/* List */}
          {state === "loading" ? (
            <ArchiveSkeleton />
          ) : (
            <div className="grid gap-3">
              {filtered.length === 0 && (
                <div className="text-sm text-muted-foreground border border-border/60 rounded-lg p-6 text-center">
                  No releases match your search.
                </div>
              )}
              {filtered.map((r) => {
                const open = openId === r.version;
                return (
                  <ReleaseRow
                    key={r.version}
                    release={r}
                    open={open}
                    onToggle={() => setOpenId(open ? null : r.version)}
                  />
                );
              })}
            </div>
          )}

          {/* Version scheme */}
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            <div className="card-elevated rounded-2xl p-6">
              <h3 className="font-semibold">Standard release format</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Regular builds use the format below. Each version is dated and
                revisioned.
              </p>
              <code className="mt-4 block rounded-md bg-background/60 border border-border/60 px-3 py-2 text-xs font-mono">
                vX.X.X-yyyy-mm-dd-rX
              </code>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <h3 className="font-semibold">LTS release format</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Long-term support builds carry an alphabetical codename beginning
                with Ada Lovelace.
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

// ─── Latest Hero ──────────────────────────────────────────────────────────────

function LatestHero({ release }: { release: NormalizedRelease }) {
  const isoSize = release.isoAsset ? formatBytes(release.isoAsset.size) : "~3.5 GB";
  const isoArch = release.isoAsset
    ? release.isoAsset.name.includes("arm64") || release.isoAsset.name.includes("aarch64")
      ? "arm64"
      : "x86_64"
    : "x86_64";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-brand/5 via-background to-background p-8 lg:p-12">
      {/* Glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
        {/* Left: info */}
        <div>
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/15 text-brand text-xs font-semibold px-3 py-1 ring-1 ring-brand/30">
              <Sparkles className="h-3 w-3" /> Latest Release
            </span>
            {release.channel && (
              <span
                className={cn(
                  "text-xs px-2.5 py-0.5 rounded-full ring-1 font-medium",
                  CHANNEL_STYLES[release.channel],
                )}
              >
                {release.channel}
              </span>
            )}
          </div>

          <h2 className="text-4xl font-bold tracking-tight font-mono">
            {release.version}
          </h2>

          {release.codename && (
            <p className="mt-1 text-lg text-muted-foreground flex items-center gap-1.5">
              <Tag className="h-4 w-4" />
              {release.codename}
            </p>
          )}

          <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(release.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
            {release.notes}
          </p>

          {/* Meta grid */}
          <dl className="mt-6 grid grid-cols-3 gap-4 max-w-sm">
            <div>
              <dt className="text-xs text-muted-foreground">Architecture</dt>
              <dd className="mt-1 text-sm font-semibold">{isoArch}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">ISO Size</dt>
              <dd className="mt-1 text-sm font-semibold">{isoSize}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Channel</dt>
              <dd className="mt-1 text-sm font-semibold">{release.channel}</dd>
            </div>
          </dl>
        </div>

        {/* Right: download actions */}
        <div className="flex flex-col gap-3">
          {release.isoAsset ? (
            <a
              href={release.isoAsset.browser_download_url}
              download
              className="btn-brand btn-brand-hover inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-semibold shadow-lg shadow-brand/20 transition-all hover:scale-[1.02]"
            >
              <Download className="h-5 w-5" />
              Download ISO
              <span className="ml-auto text-xs opacity-70">{isoSize}</span>
            </a>
          ) : (
            <a
              href={`https://github.com/zyphor-os/zyphor-os-desktop/releases/tag/${release.version}`}
              target="_blank"
              rel="noreferrer"
              className="btn-brand btn-brand-hover inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-semibold shadow-lg shadow-brand/20 transition-all hover:scale-[1.02]"
            >
              <Download className="h-5 w-5" />
              View on GitHub
            </a>
          )}

          {release.checksumAsset && (
            <a
              href={release.checksumAsset.browser_download_url}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 px-6 py-3 text-sm font-semibold hover:bg-surface transition"
            >
              <ShieldCheck className="h-4 w-4 text-brand" />
              Download SHA-256 Checksum
            </a>
          )}

          <a
            href="#releases"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 px-6 py-3 text-sm font-semibold hover:bg-surface transition"
          >
            <FileText className="h-4 w-4" />
            Browse All Releases
          </a>

          {release.isoAsset && (
            <p className="text-xs text-muted-foreground text-center pt-1">
              {release.isoAsset.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Release Row (Archive) ────────────────────────────────────────────────────

function ReleaseRow({
  release: r,
  open,
  onToggle,
}: {
  release: NormalizedRelease;
  open: boolean;
  onToggle: () => void;
}) {
  const isoSize = r.isoAsset ? formatBytes(r.isoAsset.size) : null;

  return (
    <article className="card-elevated rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
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
                CHANNEL_STYLES[r.channel],
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
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(r.date).toLocaleDateString()}
            </span>
            {isoSize && (
              <>
                <span>·</span>
                <span>{isoSize}</span>
              </>
            )}
          </div>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-200",
            open && "rotate-180 text-foreground",
          )}
        />
      </button>

      {open && (
        <div className="border-t border-border/60 px-5 py-5 bg-background/40 space-y-4">
          <p className="text-sm text-muted-foreground">{r.notes}</p>

          {/* Assets */}
          <div className="flex flex-wrap gap-2">
            {r.isoAsset ? (
              <a
                href={r.isoAsset.browser_download_url}
                download
                className="btn-brand btn-brand-hover inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-xs font-semibold"
              >
                <Download className="h-3.5 w-3.5" /> Download ISO
                {isoSize && (
                  <span className="opacity-70 text-[10px]">{isoSize}</span>
                )}
              </a>
            ) : (
              <a
                href={`https://github.com/zyphor-os/zyphor-os-desktop/releases/tag/${r.version}`}
                target="_blank"
                rel="noreferrer"
                className="btn-brand btn-brand-hover inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-xs font-semibold"
              >
                <Download className="h-3.5 w-3.5" /> View on GitHub
              </a>
            )}

            {r.checksumAsset && (
              <a
                href={r.checksumAsset.browser_download_url}
                download
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-3.5 py-2 text-xs font-semibold hover:bg-surface"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-brand" /> SHA-256
              </a>
            )}

            {/* Show all other assets */}
            {r.assets
              .filter(
                (a) =>
                  a !== r.isoAsset && a !== r.checksumAsset,
              )
              .map((a) => (
                <a
                  key={a.name}
                  href={a.browser_download_url}
                  download
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-3.5 py-2 text-xs text-muted-foreground font-semibold hover:bg-surface"
                >
                  <Download className="h-3.5 w-3.5" />
                  {a.name}
                  <span className="opacity-60">{formatBytes(a.size)}</span>
                </a>
              ))}
          </div>
        </div>
      )}
    </article>
  );
}

// ─── Skeletons ────────────────────────────────────────────────────────────────

function LatestSkeleton() {
  return (
    <div className="rounded-3xl border border-border/40 bg-surface/30 p-8 lg:p-12 animate-pulse">
      <div className="h-6 w-32 rounded-full bg-surface mb-4" />
      <div className="h-10 w-64 rounded-lg bg-surface mb-3" />
      <div className="h-4 w-40 rounded bg-surface mb-6" />
      <div className="h-4 w-full max-w-lg rounded bg-surface mb-2" />
      <div className="h-4 w-4/5 max-w-lg rounded bg-surface" />
      <div className="mt-8 flex items-center gap-2">
        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          Fetching latest release from GitHub…
        </span>
      </div>
    </div>
  );
}

function ArchiveSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-16 rounded-xl bg-surface/40 animate-pulse border border-border/40"
        />
      ))}
    </div>
  );
}

// ─── Status Banner ────────────────────────────────────────────────────────────

function StatusBanner({
  icon: Icon,
  variant,
  message,
}: {
  icon: React.ElementType;
  variant: "warn" | "info";
  message: string;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border px-4 py-3 text-sm",
        variant === "warn"
          ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
          : "border-brand/30 bg-brand/10 text-brand",
      )}
    >
      <Icon className="h-4 w-4 mt-0.5 shrink-0" />
      <p>{message}</p>
    </div>
  );
}

// ─── Requirements Card ────────────────────────────────────────────────────────

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
