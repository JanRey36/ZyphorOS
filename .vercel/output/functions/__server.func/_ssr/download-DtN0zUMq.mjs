import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as CodeXml, D as ExternalLink, O as Download, P as Check, S as HardDrive, _ as LoaderCircle, d as Package, f as Monitor, h as MemoryStick, j as CircleAlert, k as Cpu, l as Server, y as Layers } from "../_libs/lucide-react.mjs";
import { i as useScrollReveal, n as SiteLayout, r as cn, t as PageHeader } from "./useScrollReveal-BA44SaI7.mjs";
import { t as useZyphorDownloads } from "./useZyphorDownloads-Dm9zGf_H.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/download-DtN0zUMq.js
var import_jsx_runtime = require_jsx_runtime();
function DownloadPage() {
	const { desktopLatest, serverLatest, adaTags, legacyTags, state } = useZyphorDownloads();
	useScrollReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Download & Releases",
		title: "Get Zyphor OS.",
		description: "Choose the edition that fits your workflow. From the flagship Desktop edition to the lightweight Server and Minimal bases."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-24",
		children: [
			state === "rate-limited" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBanner, {
				icon: CircleAlert,
				variant: "warn",
				message: "GitHub API rate limit reached. Showing cached release data. If data is stale, visit GitHub directly."
			}),
			state === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBanner, {
				icon: CircleAlert,
				variant: "warn",
				message: "Could not reach GitHub. Showing last known release data. Refresh to try again."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-6 w-6 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold",
						children: "Latest Releases"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditionCard, {
							title: "Zyphor OS Desktop",
							description: "The flagship experience. A beautiful, intuitive, and powerful desktop environment for daily drivers and developers.",
							icon: Monitor,
							version: desktopLatest,
							loading: state === "loading",
							url: "https://github.com/zyphor-os/zyphor-os-desktop"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditionCard, {
							title: "Zyphor OS Server",
							description: "Lean, headless, and optimized for performance. Perfect for hosting, cloud deployments, and homelabs.",
							icon: Server,
							version: serverLatest,
							loading: state === "loading",
							url: "https://github.com/zyphor-os/zyphor-os-server"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditionCard, {
							title: "Zyphor OS Horizon",
							description: "The experimental edge. Test drive the latest features and next-generation architecture before they reach stable.",
							icon: Layers,
							version: "v1.0.0-beta-2026.06.14-r1",
							loading: false,
							url: "https://github.com/zyphor-os/zyphor-os-desktop"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditionCard, {
							title: "Zyphor OS Minimal",
							description: "The skeleton codebase. Build your own custom Zyphor-based distribution from the ground up.",
							icon: CodeXml,
							version: "Rolling Release",
							loading: false,
							url: "https://github.com/zyphor-os/zyphor-os-minimal"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-2 reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqCard, {
					title: "Minimum hardware",
					items: [
						{
							icon: Cpu,
							k: "CPU",
							v: "64-bit dual-core, 1.5 GHz"
						},
						{
							icon: MemoryStick,
							k: "RAM",
							v: "2 GB"
						},
						{
							icon: HardDrive,
							k: "Storage",
							v: "20 GB"
						}
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqCard, {
					title: "Recommended hardware",
					items: [
						{
							icon: Cpu,
							k: "CPU",
							v: "64-bit quad-core, 2.4 GHz+"
						},
						{
							icon: MemoryStick,
							k: "RAM",
							v: "8 GB or more"
						},
						{
							icon: HardDrive,
							k: "Storage",
							v: "40 GB SSD"
						}
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-elevated rounded-2xl p-8 reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-semibold",
						children: "Installation guide"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground max-w-2xl",
						children: "Zyphor OS installs like any modern Linux distribution. Write the ISO to a USB drive, boot from it, and follow the installer."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 space-y-3",
						children: [
							"Download the ISO from the GitHub Releases page.",
							"Write the ISO to a USB drive using dd, Balena Etcher or Rufus.",
							"Boot from the USB and select Install Zyphor OS.",
							"Follow the guided installer and reboot into your new system.",
							"Run `zyphor system upgrade` and `zyphor doctor scan` after first login."
						].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand text-xs ring-1 ring-brand/30",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: step
							})]
						}, i))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "archives",
				className: "reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-6 w-6 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold",
						children: "Release Archives"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-elevated rounded-2xl p-6 flex flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold mb-2",
								children: "New Source (Ada Lovelace LTS)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mb-6",
								children: "The modern Zyphor OS codebase. Long-term support releases carrying the Ada Lovelace codename."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 bg-background/50 rounded-xl border border-border/60 overflow-hidden flex flex-col",
								children: state === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-8 flex justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-brand" })
								}) : adaTags.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-8 text-center text-sm text-muted-foreground",
									children: "No releases found."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "divide-y divide-border/60 max-h-[400px] overflow-y-auto",
									children: adaTags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `https://github.com/zyphor-os/zyphor-os-desktop/releases/tag/${tag}`,
										target: "_blank",
										rel: "noreferrer",
										className: "flex items-center justify-between p-4 hover:bg-surface transition group",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-sm font-medium",
											children: tag
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" })]
									}) }, tag))
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-elevated rounded-2xl p-6 flex flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold mb-2",
								children: "Legacy Codebase"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mb-6",
								children: "The original stable releases from the legacy repository. Maintained for archival purposes."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 bg-background/50 rounded-xl border border-border/60 overflow-hidden flex flex-col",
								children: state === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-8 flex justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-brand" })
								}) : legacyTags.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-8 text-center text-sm text-muted-foreground",
									children: "No releases found."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "divide-y divide-border/60 max-h-[400px] overflow-y-auto",
									children: legacyTags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `https://github.com/markjasonespelita/zyphor_os/releases/tag/${tag}`,
										target: "_blank",
										rel: "noreferrer",
										className: "flex items-center justify-between p-4 hover:bg-surface transition group",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-sm font-medium",
											children: tag
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" })]
									}) }, tag))
								})
							})
						]
					})]
				})]
			})
		]
	})] });
}
function EditionCard({ title, description, icon: Icon, version, loading, url }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-elevated rounded-2xl p-6 flex flex-col h-full group hover:-translate-y-1 transition-all duration-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20 group-hover:bg-brand group-hover:text-white transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
				}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-24 bg-surface rounded-full animate-pulse" }) : version ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex items-center rounded-full bg-surface px-3 py-1 text-xs font-mono font-medium ring-1 ring-border",
					children: version
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-bold mb-2",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground flex-1 mb-6",
				children: description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: url,
				target: "_blank",
				rel: "noreferrer",
				className: "btn-brand btn-brand-hover inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold shadow-sm transition-all",
				children: ["View on GitHub", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })]
			})
		]
	});
}
function StatusBanner({ icon: Icon, variant, message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-start gap-3 rounded-xl border px-4 py-3 text-sm", variant === "warn" ? "border-amber-500/30 bg-amber-500/10 text-amber-400" : "border-brand/30 bg-brand/10 text-brand"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: message })]
	});
}
function ReqCard({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-elevated rounded-2xl p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "font-semibold",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-5 space-y-3",
			children: items.map(({ icon: Icon, k, v }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted-foreground",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium",
						children: v
					})]
				})]
			}, k))
		})]
	});
}
//#endregion
export { DownloadPage as component };
