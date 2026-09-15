import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as getGitHubJson, t as GitHubRequestError } from "./githubCache-CmhbhDXg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useZyphorDownloads-mRczCrRB.js
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
				const [desktopData, serverData, adaData, legacyData] = await Promise.all([
					getGitHubJson("https://api.github.com/repos/zyphor-os/zyphor-os-desktop/releases/latest"),
					getGitHubJson("https://api.github.com/repos/zyphor-os/zyphor-os-server/releases/latest"),
					getGitHubJson("https://api.github.com/repos/zyphor-os/zyphor-os-desktop/tags?per_page=100"),
					getGitHubJson("https://api.github.com/repos/markjasonespelita/zyphor_os/tags?per_page=100")
				]);
				const result = {
					desktopLatest: desktopData.tag_name,
					serverLatest: serverData.tag_name,
					adaTags: adaData.map((t) => t.name),
					legacyTags: legacyData.map((t) => t.name)
				};
				if (mounted) {
					setData(result);
					setState("success");
				}
			} catch (err) {
				console.error("Failed to fetch downloads:", err);
				if (mounted) setState(err instanceof GitHubRequestError && err.status === 403 ? "rate-limited" : "error");
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
