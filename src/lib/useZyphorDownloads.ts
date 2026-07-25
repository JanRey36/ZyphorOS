import { useState, useEffect } from "react";

export type GitHubRelease = {
  tag_name: string;
  name: string;
  html_url: string;
};

export type GitHubTag = {
  name: string;
};

export type ZyphorDownloadsData = {
  desktopLatest: string | null;
  serverLatest: string | null;
  adaTags: string[];
  legacyTags: string[];
};

export function useZyphorDownloads() {
  const [data, setData] = useState<ZyphorDownloadsData>({
    desktopLatest: null,
    serverLatest: null,
    adaTags: [],
    legacyTags: [],
  });
  const [state, setState] = useState<"loading" | "success" | "rate-limited" | "error">("loading");

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      try {
        const cached = sessionStorage.getItem("zyphor_downloads_cache");
        if (cached) {
          setData(JSON.parse(cached));
          setState("success");
          return;
        }

        const [desktopRes, serverRes, adaRes, legacyRes] = await Promise.all([
          fetch("https://api.github.com/repos/zyphor-os/zyphor-os-desktop/releases/latest"),
          fetch("https://api.github.com/repos/zyphor-os/zyphor-os-server/releases/latest"),
          fetch("https://api.github.com/repos/zyphor-os/zyphor-os-desktop/tags?per_page=100"),
          fetch("https://api.github.com/repos/markjasonespelita/zyphor_os/tags?per_page=100"),
        ]);

        if (
          desktopRes.status === 403 ||
          serverRes.status === 403 ||
          adaRes.status === 403 ||
          legacyRes.status === 403
        ) {
          setState("rate-limited");
          return;
        }

        if (!desktopRes.ok || !serverRes.ok || !adaRes.ok || !legacyRes.ok) {
          throw new Error("Failed to fetch some resources");
        }

        const desktopData: GitHubRelease = await desktopRes.json();
        const serverData: GitHubRelease = await serverRes.json();
        const adaData: GitHubTag[] = await adaRes.json();
        const legacyData: GitHubTag[] = await legacyRes.json();

        const result: ZyphorDownloadsData = {
          desktopLatest: desktopData.tag_name,
          serverLatest: serverData.tag_name,
          adaTags: adaData.map((t) => t.name),
          legacyTags: legacyData.map((t) => t.name),
        };

        sessionStorage.setItem("zyphor_downloads_cache", JSON.stringify(result));

        if (mounted) {
          setData(result);
          setState("success");
        }
      } catch (err) {
        console.error("Failed to fetch downloads:", err);
        if (mounted) setState("error");
      }
    }

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  return { ...data, state };
}
