//#region node_modules/.nitro/vite/services/ssr/index.js
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-DGZ1yzJc.mjs").then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	console.error(/* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response("Internal Server Error", {
		status: 500,
		headers: { "content-type": "text/plain; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
var server_default = { async fetch(request, env, ctx) {
	try {
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response("Internal Server Error", {
			status: 500,
			headers: { "content-type": "text/plain; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default };
