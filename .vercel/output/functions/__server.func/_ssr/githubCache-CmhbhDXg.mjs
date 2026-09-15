//#region node_modules/.nitro/vite/services/ssr/assets/githubCache-CmhbhDXg.js
var CACHE_PREFIX = "zyphor-os:github:";
var CACHE_TTL = 3600 * 1e3;
var GitHubRequestError = class extends Error {
	status;
	constructor(status) {
		super(`GitHub request failed: ${status}`);
		this.status = status;
	}
};
var pendingRequests = /* @__PURE__ */ new Map();
function cacheKey(url) {
	return `${CACHE_PREFIX}${encodeURIComponent(url)}`;
}
function readCachedResponse(url, allowStale = false) {
	if (typeof window === "undefined") return null;
	try {
		const cached = JSON.parse(localStorage.getItem(cacheKey(url)) ?? "null");
		if (!cached || cached.data === void 0 || !allowStale && Date.now() - cached.cachedAt >= CACHE_TTL) return null;
		return cached.data;
	} catch {
		return null;
	}
}
function writeCachedResponse(url, data) {
	try {
		localStorage.setItem(cacheKey(url), JSON.stringify({
			cachedAt: Date.now(),
			data
		}));
	} catch {}
}
/**
* Gets public GitHub data once per URL per browser hour. Simultaneous consumers
* share the same request, and a stale successful response is used on a 403.
*/
function getGitHubJson(url) {
	const freshData = readCachedResponse(url);
	if (freshData !== null) return Promise.resolve(freshData);
	const pendingRequest = pendingRequests.get(url);
	if (pendingRequest) return pendingRequest;
	const request = fetch(url).then(async (response) => {
		if (!response.ok) throw new GitHubRequestError(response.status);
		const data = await response.json();
		writeCachedResponse(url, data);
		return data;
	}).catch((error) => {
		const staleData = readCachedResponse(url, true);
		if (staleData !== null) return staleData;
		throw error;
	}).finally(() => {
		pendingRequests.delete(url);
	});
	pendingRequests.set(url, request);
	return request;
}
//#endregion
export { getGitHubJson as n, GitHubRequestError as t };
