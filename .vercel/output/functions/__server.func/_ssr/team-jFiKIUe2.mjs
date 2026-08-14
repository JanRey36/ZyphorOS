import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as Infinity$1, g as MapPin, w as Github } from "../_libs/lucide-react.mjs";
import { i as useScrollReveal, n as SiteLayout, t as PageHeader } from "./useScrollReveal-BA44SaI7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team-jFiKIUe2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var REPO = "zyphor-os/zyphor-os-desktop";
var LEAD_USERNAME = "markjasonespelita";
function TeamPage() {
	const [lead, setLead] = (0, import_react.useState)(null);
	const [contributors, setContributors] = (0, import_react.useState)([]);
	const [loadingLead, setLoadingLead] = (0, import_react.useState)(true);
	const [loadingContribs, setLoadingContribs] = (0, import_react.useState)(true);
	useScrollReveal();
	(0, import_react.useEffect)(() => {
		fetch(`https://api.github.com/users/${LEAD_USERNAME}`).then((r) => r.json()).then((d) => setLead(d)).catch(() => {}).finally(() => setLoadingLead(false));
		fetch(`https://api.github.com/repos/${REPO}/contributors?per_page=50`).then((r) => r.json()).then((d) => setContributors(Array.isArray(d) ? d : [])).catch(() => {}).finally(() => setLoadingContribs(false));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Team",
		title: "Project Team",
		description: "The people behind the development and maintenance of Zyphor OS."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "text-center mb-24 reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold ring-1 ring-brand/20 mb-8 uppercase tracking-widest",
					children: "Creator And Lead OS Maintainer"
				}), loadingLead ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-4 animate-pulse",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-32 w-32 rounded-full bg-surface skeleton" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-64 rounded bg-surface skeleton mx-auto" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-40 rounded bg-surface skeleton mx-auto" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-72 rounded bg-surface skeleton mx-auto" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-64 rounded bg-surface skeleton mx-auto" })
					]
				}) : lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 bg-glow blur-2xl opacity-60 rounded-full animate-pulse-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: lead.avatar_url,
								alt: lead.name ?? lead.login,
								className: "relative h-32 w-32 sm:h-36 sm:w-36 rounded-full ring-4 ring-brand/30 object-cover shadow-[0_0_30px_-5px_var(--brand)]"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 text-2xl sm:text-3xl font-bold",
							children: lead.name ?? lead.login
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm sm:text-base text-brand mt-1 font-mono",
							children: ["@", lead.login]
						}),
						lead.bio && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl",
							children: lead.bio
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex items-start justify-center gap-10 sm:gap-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-3xl font-bold font-mono text-foreground group-hover:text-brand transition-colors duration-300",
										children: lead.followers
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs sm:text-sm text-muted-foreground mt-1 uppercase tracking-widest",
										children: "Followers"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-12 bg-border/60" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-3xl font-bold font-mono text-foreground group-hover:text-brand transition-colors duration-300",
										children: lead.following
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs sm:text-sm text-muted-foreground mt-1 uppercase tracking-widest",
										children: "Following"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-12 bg-border/60" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-3xl font-bold font-mono text-foreground group-hover:text-brand transition-colors duration-300",
										children: lead.public_repos
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs sm:text-sm text-muted-foreground mt-1 uppercase tracking-widest",
										children: "Repos"
									})]
								})
							]
						}),
						lead.location && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-2 text-sm sm:text-base text-muted-foreground bg-surface/50 px-4 py-2 rounded-full border border-border/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-brand" }), lead.location]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: lead.html_url,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-8 btn-ghost inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold",
							children: "View GitHub Profile"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Could not load profile data."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-24 reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl sm:text-3xl font-bold tracking-tight mb-3",
						children: "Contributors"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm sm:text-base text-muted-foreground",
						children: "Developers and community members who contribute to Zyphor OS."
					})]
				}), loadingContribs ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-10",
					children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24 w-24 rounded-full bg-surface skeleton" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-24 rounded bg-surface skeleton" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-16 rounded bg-surface skeleton" })
						]
					}, i))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10",
					children: contributors.map((c, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: c.html_url,
						target: "_blank",
						rel: "noreferrer",
						className: "group flex flex-col items-center text-center p-4 rounded-2xl hover:bg-surface/30 transition-colors border border-transparent hover:border-border/50 reveal",
						style: { transitionDelay: `${idx % 4 * 50}ms` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-brand/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.avatar_url,
									alt: c.login,
									className: "relative h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover ring-2 ring-transparent group-hover:ring-brand/30 transition-all duration-300"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm font-semibold break-all leading-snug group-hover:text-brand transition-colors",
								children: c.login
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground mt-1 mb-4",
								children: [
									c.contributions,
									" contribution",
									c.contributions !== 1 ? "s" : ""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "btn-ghost inline-flex items-center justify-center gap-2 rounded-lg px-4 py-1.5 text-xs font-semibold opacity-80 group-hover:opacity-100 w-full mt-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-3 w-3" }), " Profile"]
							})
						]
					}, c.login))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl card-elevated mb-24 reveal overflow-hidden relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-glow opacity-30 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/60 relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center justify-center py-12 px-4 text-center group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-5xl font-extrabold text-brand font-mono group-hover:scale-110 transition-transform duration-300",
								children: "100%"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-3 text-sm font-medium text-foreground uppercase tracking-widest",
								children: "Open Source"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center justify-center py-12 px-4 text-center group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-5xl font-extrabold text-brand font-mono group-hover:scale-110 transition-transform duration-300",
								children: "Linux"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-3 text-sm font-medium text-foreground uppercase tracking-widest",
								children: "Powered Foundation"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center justify-center py-12 px-4 text-center group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Infinity$1, {
								className: "h-12 w-12 text-brand group-hover:scale-110 group-hover:rotate-180 transition-all duration-500",
								strokeWidth: 2.5
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-3 text-sm font-medium text-foreground uppercase tracking-widest",
								children: "Learning Potential"
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "text-center space-y-6 reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl sm:text-5xl font-bold tracking-tight text-foreground",
						children: "The Future Belongs To Builders"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-muted-foreground max-w-xl mx-auto",
						children: "Most people consume technology. Zyphor users learn how to create it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/download",
							className: "btn-brand btn-brand-hover inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold",
							children: "Get Started Now"
						})
					})
				]
			})
		]
	})] });
}
//#endregion
export { TeamPage as component };
