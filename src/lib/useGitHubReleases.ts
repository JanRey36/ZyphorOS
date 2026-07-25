"use client";
import { useState, useEffect } from "react";
import releasesJson from "@/documentation/zyphor-os/releases.json";

export type ReleaseChannel = "LTS" | "Stable" | "Beta" | "Legacy";

export interface ReleaseAsset {
  name: string;
  browser_download_url: string;
  size: number;
  content_type: string;
}

export interface GithubRelease {
  id: number;
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  prerelease: boolean;
  draft: boolean;
  assets: ReleaseAsset[];
  html_url: string;
}

export interface NormalizedRelease {
  version: string;
  codename?: string;
  date: string;
  channel: ReleaseChannel;
  notes: string;
  latest: boolean;
  assets: ReleaseAsset[];
  isoAsset?: ReleaseAsset;
  checksumAsset?: ReleaseAsset;
  githubUrl?: string;
}

function inferChannel(tag: string, prerelease: boolean): ReleaseChannel {
  if (prerelease) return "Beta";
  if (/LTS/i.test(tag)) return "LTS";
  if (/Legacy|v0\./i.test(tag)) return "Legacy";
  return "Stable";
}

function inferCodename(tag: string, bodyOrName: string): string | undefined {
  const tagMatch = tag.match(/-LTS-([A-Za-z]+(?:[A-Za-z]+))-/);
  if (tagMatch) {
    return tagMatch[1].replace(/([a-z])([A-Z])/g, "$1 $2");
  }
  const bodyMatch = bodyOrName.match(/\b([A-Z][a-z]+ [A-Z][a-z]+)\b/);
  return bodyMatch?.[1];
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "—";
  const gb = bytes / (1024 ** 3);
  if (gb >= 0.5) return `${gb.toFixed(1)} GB`;
  const mb = bytes / (1024 ** 2);
  return `${mb.toFixed(0)} MB`;
}

function normalizeGitHubRelease(r: GithubRelease, isLatest: boolean): NormalizedRelease {
  const channel = inferChannel(r.tag_name, r.prerelease);
  const codename = inferCodename(r.tag_name, r.name + " " + r.body);

  const isoAsset = r.assets.find((a) =>
    a.name.toLowerCase().endsWith(".iso")
  );
  const checksumAsset = r.assets.find((a) =>
    /sha256|md5|checksum/i.test(a.name)
  );

  const notes = r.body
    .replace(/^#{1,3}\s.*$/gm, "")
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/`/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .split("\n\n")[0]
    .slice(0, 280);

  return {
    version: r.tag_name,
    codename,
    date: r.published_at,
    channel,
    notes: notes || "No release notes provided.",
    latest: isLatest,
    assets: r.assets,
    isoAsset,
    checksumAsset,
    githubUrl: r.html_url,
  };
}

function normalizeStaticReleases(): NormalizedRelease[] {
  return (releasesJson as any[]).map((r, i) => ({
    version: r.version,
    codename: r.codename,
    date: r.date,
    channel: r.channel as ReleaseChannel,
    notes: r.notes ?? "No release notes provided.",
    latest: r.latest ?? i === 0,
    assets: [],
  }));
}

const CACHE_KEY = "zyphor_gh_releases";
const CACHE_TTL = 5 * 60 * 1000;

interface CacheEntry {
  ts: number;
  data: NormalizedRelease[];
}

function readCache(): NormalizedRelease[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const entry: CacheEntry = JSON.parse(raw);
    if (Date.now() - entry.ts > CACHE_TTL) return null;
    return entry.data;
  } catch {
    return null;
  }
}

function writeCache(data: NormalizedRelease[]) {
  try {
    const entry: CacheEntry = { ts: Date.now(), data };
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch { /* quota */ }
}

export type FetchState = "idle" | "loading" | "ok" | "rate-limited" | "error";

export function useGitHubReleases() {
  const [releases, setReleases] = useState<NormalizedRelease[]>([]);
  const [state, setState] = useState<FetchState>("idle");

  useEffect(() => {
    const cached = readCache();
    if (cached) {
      setReleases(cached);
      setState("ok");
      return;
    }

    setState("loading");

    const REPO = "zyphor-os/zyphor-os-desktop";
    fetch(
      `https://api.github.com/repos/${REPO}/releases?per_page=30`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    )
      .then(async (res) => {
        if (res.status === 403 || res.status === 429) {
          setState("rate-limited");
          setReleases(normalizeStaticReleases());
          return;
        }
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const raw: GithubRelease[] = await res.json();
        const visible = raw.filter((r) => !r.draft);
        const normalized = visible.map((r, i) =>
          normalizeGitHubRelease(r, i === 0)
        );
        writeCache(normalized);
        setReleases(normalized);
        setState("ok");
      })
      .catch(() => {
        setState("error");
        setReleases(normalizeStaticReleases());
      });
  }, []);

  const latest = releases.find((r) => r.latest) ?? releases[0] ?? null;

  return { releases, latest, state };
}

export { formatBytes };
