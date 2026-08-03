import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { I as Boxes, T as GraduationCap, d as Palette, f as Package, m as Minimize2, s as Terminal } from "../_libs/lucide-react.mjs";
import { a as useScrollReveal, n as SiteLayout, t as PageHeader } from "./useScrollReveal-BKRdfTJB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CTfrywbF.js
var import_jsx_runtime = require_jsx_runtime();
var pillars = [
	{
		icon: Minimize2,
		title: "Minimal and Controlled Environment",
		body: "Zyphor OS ships lean by default. You decide what runs on your machine — nothing sneaks in behind your back."
	},
	{
		icon: Terminal,
		title: "CLI Abstraction Layer",
		body: "A single, consistent command surface for installation, updates, theming and diagnostics. Learn it once, use it everywhere."
	},
	{
		icon: Package,
		title: "Unified Package Management",
		body: "One tool that manages system packages, applications and configuration state — no more juggling half a dozen commands."
	},
	{
		icon: Boxes,
		title: "Independent Package Ecosystem",
		body: "Zyphor maintains its own repository alongside the Debian base to keep distribution-specific tooling stable across releases."
	},
	{
		icon: Palette,
		title: "Branding and Identity",
		body: "A consistent visual language across desktop, CLI and tooling — Zyphor OS feels like one product, not a collection of parts."
	},
	{
		icon: GraduationCap,
		title: "Educational and Learning-Oriented Design",
		body: "Every default is chosen to help you understand your system. Zyphor teaches while you use it."
	}
];
var timeline = [
	{
		year: "Mar 30, 2026",
		title: "Project inception",
		body: "First successful boot and the initial Zyphor OS codebase release."
	},
	{
		year: "Apr 16, 2026",
		title: "First stable release",
		body: "Released Zyphor OS v1.0.0 after completing the beta development cycle."
	},
	{
		year: "Jun 3, 2026",
		title: "Open-source contributors",
		body: "Welcomed the first community contributors for security testing and graphic design."
	},
	{
		year: "Jun 16, 2026",
		title: "New GitHub & documentation",
		body: "Migrated development to the new GitHub organization, launched the official documentation website, and released the final v1 stable version."
	},
	{
		year: "Jun 30, 2026",
		title: "Ada Lovelace LTS",
		body: "Released v2.0.0-2026.06.30-r6, the first Long-Term Support (LTS) release under the Ada Lovelace codename."
	},
	{
		year: "Jul 11, 2026",
		title: "Windows app support",
		body: "Successfully ran the first Windows (.exe) application on Zyphor OS using Wine."
	}
];
function AboutPage() {
	useScrollReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "About",
		title: "A Linux distribution that teaches while you use it.",
		description: "Zyphor OS was created to make Linux approachable without hiding what makes it powerful."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-5 gap-12 items-center reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold tracking-tight",
							children: "About Zyphor OS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg text-muted-foreground leading-relaxed",
							children: "Zyphor OS is a modern, learning-oriented Linux distribution built on the Debian and Kali foundations. It exists for people who want to move beyond copy-pasting commands and actually understand the system underneath."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg text-muted-foreground leading-relaxed",
							children: "Every default, every command and every tool has been chosen to be transparent, consistent and educational."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-elevated rounded-3xl p-8 relative overflow-hidden group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-widest text-brand",
								children: "Created by"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-2xl font-bold",
								children: "Mark Jason P. Espelita"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground leading-relaxed",
								children: "Founder and lead maintainer of the Zyphor OS project."
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-brand",
						children: "Philosophy & Vision"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl sm:text-4xl font-bold tracking-tight",
						children: "Six principles guide every decision."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: pillars.map(({ icon: Icon, title, body }, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-elevated card-hover rounded-2xl p-6 transition-all duration-300 reveal group",
							style: { transitionDelay: `${idx * 50}ms` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20 group-hover:bg-brand/20 group-hover:scale-110 transition-all duration-300",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-lg font-semibold",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: body
								})
							]
						}, title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-elevated rounded-3xl p-10 sm:p-16 relative overflow-hidden reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-glow opacity-60 pointer-events-none animate-pulse-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-3xl mx-auto text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl sm:text-4xl font-bold tracking-tight",
							children: "Why Zyphor exists?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg text-muted-foreground leading-relaxed",
							children: "Most distributions optimize either for beginners or for experts. Zyphor OS tries to bridge that gap: a system that's approachable enough for a first-time Linux user, but honest enough that the same user is a step closer to expert every time they use it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg text-muted-foreground leading-relaxed",
							children: "Zyphor doesn't hide the terminal, and it doesn't hide the concepts. It teaches them, one command at a time."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-brand",
						children: "Roadmap"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl sm:text-4xl font-bold tracking-tight",
						children: "Where we've been, where we're going."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 relative max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-2 bottom-2 w-px bg-border/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "relative space-y-12",
							children: timeline.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "relative pl-12 reveal",
								style: { transitionDelay: `${i * 100}ms` },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute left-[11px] top-1.5 flex items-center justify-center h-5 w-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute h-full w-full rounded-full bg-brand/20 animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_8px_var(--brand)]" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-2.5 py-0.5 text-xs font-semibold text-brand tracking-widest uppercase mb-2",
										children: t.year
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-semibold text-foreground",
										children: t.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-base text-muted-foreground leading-relaxed",
										children: t.body
									})
								]
							}, i))
						})]
					})
				]
			})
		]
	})] });
}
//#endregion
export { AboutPage as component };
