import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useZyphorDownloads-Dm9zGf_H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useZyphorDownloads() {
	const [data, setData] = (0, import_react.useState)({
		desktopLatest: null,
		serverLatest: null,
		adaTags: [],
		legacyTags: []
	});
	const [state, setState] = (0, import_react.useState)("loading");
	(0, import_react.useEffect)(() => {
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
					fetch("https://api.github.com/repos/markjasonespelita/zyphor_os/tags?per_page=100")
				]);
				if (desktopRes.status === 403 || serverRes.status === 403 || adaRes.status === 403 || legacyRes.status === 403) {
					setState("rate-limited");
					return;
				}
				if (!desktopRes.ok || !serverRes.ok || !adaRes.ok || !legacyRes.ok) throw new Error("Failed to fetch some resources");
				const desktopData = await desktopRes.json();
				const serverData = await serverRes.json();
				const adaData = await adaRes.json();
				const legacyData = await legacyRes.json();
				const result = {
					desktopLatest: desktopData.tag_name,
					serverLatest: serverData.tag_name,
					adaTags: adaData.map((t) => t.name),
					legacyTags: legacyData.map((t) => t.name)
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
	return {
		...data,
		state
	};
}
//#endregion
export { useZyphorDownloads as t };
