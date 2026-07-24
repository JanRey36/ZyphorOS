import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, HardDrive, Cpu, MemoryStick, Check, FileCode } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { latestRelease, releases } from "@/data/releases";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Download — Zyphor OS" },
      {
        name: "description",
        content:
          "Download the latest Zyphor OS ISO. Desktop and minimal editions, checksums, release notes, and hardware requirements.",
      },
      { property: "og:title", content: "Download Zyphor OS" },
      {
        property: "og:description",
        content: "Get the latest Zyphor OS ISO. Desktop and minimal editions available.",
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

function DownloadPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Download"
        title="Get Zyphor OS."
        description="Choose the edition that fits your workflow. Every ISO ships with a signed checksum and detailed release notes."
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
                  <Link
                    to="/releases"
                    className="flex-1 text-xs inline-flex items-center justify-center gap-1 rounded-md border border-border bg-surface/60 px-3 py-2 hover:bg-surface"
                  >
                    Release notes
                  </Link>
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

        {/* Recent builds */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold">Recent builds</h3>
          <div className="mt-5 divide-y divide-border/60 rounded-2xl border border-border/60 overflow-hidden">
            {releases.slice(0, 5).map((r) => (
              <div
                key={r.version}
                className="grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[minmax(0,1fr)_auto_auto_auto] items-center gap-4 px-5 py-4 bg-surface/30 hover:bg-surface/60 transition"
              >
                <div className="min-w-0">
                  <div className="text-sm font-medium truncate">{r.version}</div>
                  <div className="text-xs text-muted-foreground">
                    {r.codename ? `${r.codename} · ` : ""}
                    {new Date(r.date).toLocaleDateString()}
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-[10px] font-semibold px-2 py-1 rounded-md bg-brand/10 text-brand ring-1 ring-brand/20">
                  {r.channel}
                </span>
                <Link
                  to="/releases"
                  className="hidden sm:inline text-xs text-muted-foreground hover:text-foreground"
                >
                  Notes
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-glow"
                >
                  <Download className="h-3.5 w-3.5" /> ISO
                </a>
              </div>
            ))}
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
