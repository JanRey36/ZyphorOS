import { useState, useEffect } from "react";
import { getGitHubJson, GitHubRequestError } from "@/lib/githubCache";

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
        const [desktopData, serverData, adaData, legacyData] = await Promise.all([
          getGitHubJson<GitHubRelease>(
            "https://api.github.com/repos/zyphor-os/zyphor-os-desktop/releases/latest",
          ),
          getGitHubJson<GitHubRelease>(
            "https://api.github.com/repos/zyphor-os/zyphor-os-server/releases/latest",
          ),
          getGitHubJson<GitHubTag[]>(
            "https://api.github.com/repos/zyphor-os/zyphor-os-desktop/tags?per_page=100",
          ),
          getGitHubJson<GitHubTag[]>(
            "https://api.github.com/repos/markjasonespelita/zyphor_os/tags?per_page=100",
          ),
        ]);

        const result: ZyphorDownloadsData = {
          desktopLatest: desktopData.tag_name,
          serverLatest: serverData.tag_name,
          adaTags: adaData.map((t) => t.name),
          legacyTags: legacyData.map((t) => t.name),
        };

        if (mounted) {
          setData(result);
          setState("success");
        }
      } catch (err) {
        console.error("Failed to fetch downloads:", err);
        if (mounted)
          setState(
            err instanceof GitHubRequestError && err.status === 403 ? "rate-limited" : "error",
          );
      }
    }

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  return { ...data, state };
}
