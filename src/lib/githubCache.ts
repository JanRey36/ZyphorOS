const CACHE_PREFIX = "zyphor-os:github:";
const CACHE_TTL = 60 * 60 * 1000;

interface CachedResponse<T> {
  cachedAt: number;
  data: T;
}

export class GitHubRequestError extends Error {
  constructor(public readonly status: number) {
    super(`GitHub request failed: ${status}`);
  }
}

const pendingRequests = new Map<string, Promise<unknown>>();

function cacheKey(url: string) {
  return `${CACHE_PREFIX}${encodeURIComponent(url)}`;
}

function readCachedResponse<T>(url: string, allowStale = false): T | null {
  if (typeof window === "undefined") return null;

  try {
    const cached = JSON.parse(
      localStorage.getItem(cacheKey(url)) ?? "null",
    ) as CachedResponse<T> | null;
    if (
      !cached ||
      cached.data === undefined ||
      (!allowStale && Date.now() - cached.cachedAt >= CACHE_TTL)
    ) {
      return null;
    }
    return cached.data;
  } catch {
    return null;
  }
}

function writeCachedResponse<T>(url: string, data: T) {
  try {
    localStorage.setItem(cacheKey(url), JSON.stringify({ cachedAt: Date.now(), data }));
  } catch {
    // Storage may be unavailable in private browsing or when it is disabled.
  }
}

/**
 * Gets public GitHub data once per URL per browser hour. Simultaneous consumers
 * share the same request, and a stale successful response is used on a 403.
 */
export function getGitHubJson<T>(url: string): Promise<T> {
  const freshData = readCachedResponse<T>(url);
  if (freshData !== null) return Promise.resolve(freshData);

  const pendingRequest = pendingRequests.get(url) as Promise<T> | undefined;
  if (pendingRequest) return pendingRequest;

  const request = fetch(url)
    .then(async (response) => {
      if (!response.ok) throw new GitHubRequestError(response.status);
      const data = (await response.json()) as T;
      writeCachedResponse(url, data);
      return data;
    })
    .catch((error: unknown) => {
      const staleData = readCachedResponse<T>(url, true);
      if (staleData !== null) return staleData;
      throw error;
    })
    .finally(() => {
      pendingRequests.delete(url);
    });

  pendingRequests.set(url, request);
  return request;
}
