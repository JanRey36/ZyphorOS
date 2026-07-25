import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Cpu, D as FileText, E as Github, R as BookOpen, k as Download, l as ShieldCheck, r as Users, s as Terminal, x as Layers, z as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as useScrollReveal, i as logo_default, n as SiteLayout } from "./useScrollReveal-BKRdfTJB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DOO_LErJ.js
var import_jsx_runtime = require_jsx_runtime();
var _1_default = "/assets/1-BiWIRq-y.jpg";
var _2_default = "/assets/2-MiokMX8I.jpg";
var _3_default = "/assets/3-BozdWlTw.jpg";
var releases = [
	{
		version: "v1.13.0-LTS-AdaLovelace-u21",
		codename: "Ada Lovelace",
		date: "2026-06-24",
		channel: "LTS",
		latest: true,
		notes: "Theme switching via CLI, unified appearance management, and improved Zyphor Command Center."
	},
	{
		version: "v1.12.4-LTS-AdaLovelace-u18",
		codename: "Ada Lovelace",
		date: "2026-04-10",
		channel: "LTS",
		notes: "Kernel refresh, security patches, package manager stability improvements."
	},
	{
		version: "v1.12.0-LTS-AdaLovelace-u12",
		codename: "Ada Lovelace",
		date: "2026-01-15",
		channel: "LTS",
		notes: "First LTS release under the new alphabetical codename scheme."
	},
	{
		version: "v1.11.2-2025-11-08-r3",
		date: "2025-11-08",
		channel: "Stable",
		notes: "Bugfix release for the standard channel."
	},
	{
		version: "v1.11.0-2025-09-30-r1",
		date: "2025-09-30",
		channel: "Stable",
		notes: "Introduction of the unified CLI abstraction layer."
	},
	{
		version: "v1.10.0-2025-06-14-r1",
		date: "2025-06-14",
		channel: "Stable",
		notes: "Independent package ecosystem foundation."
	},
	{
		version: "v0.9.4",
		date: "2024-12-02",
		channel: "Legacy",
		notes: "Legacy codebase — early Debian/Kali derivative."
	},
	{
		version: "v0.9.0",
		date: "2024-08-18",
		channel: "Legacy",
		notes: "First public preview of Zyphor OS."
	},
	{
		version: "v0.8.2",
		date: "2024-05-04",
		channel: "Legacy",
		notes: "Internal milestone build — legacy codebase."
	}
];
var latestRelease = releases.find((r) => r.latest) ?? releases[0];
var features = [
	{
		icon: BookOpen,
		title: "Learning-Oriented",
		desc: "Every design choice is made to help you understand what your system is actually doing, not to hide it."
	},
	{
		icon: Layers,
		title: "Debian / Kali Based",
		desc: "Built on a proven foundation with access to a massive package ecosystem and security tooling."
	},
	{
		icon: ShieldCheck,
		title: "Actively Maintained",
		desc: "Regular security updates, kernel refreshes, and LTS releases with a five-year support window."
	},
	{
		icon: Github,
		title: "Open Source",
		desc: "Fully open source. Read the code, file an issue, or send a patch — everything is transparent."
	},
	{
		icon: Users,
		title: "Community Driven",
		desc: "Shaped by contributors, learners and educators from around the world."
	},
	{
		icon: FileText,
		title: "Complete Office Suite",
		desc: "Ships with LibreOffice preinstalled so you can be productive the moment your desktop boots."
	},
	{
		icon: Cpu,
		title: "Own Ecosystem",
		desc: "A unified CLI, package manager, and command center that make Zyphor OS feel like one product."
	}
];
var whyChoose = [
	{
		title: "A minimal, controlled environment.",
		body: "Zyphor OS ships lean by default. No bloated defaults, no hidden services running behind your back — just the tools you asked for and a clear path to add more.",
		image: _1_default
	},
	{
		title: "One CLI to rule the whole system.",
		body: "The Zyphor CLI abstracts installation, updates, theming, doctor checks and diagnostics behind a single, consistent command surface. Learn it once, use it everywhere.",
		image: _2_default
	},
	{
		title: "Files, apps and system tools, unified.",
		body: "From the file manager to the Zyphor Command Center, every surface follows the same design language. It feels like a real product, not a stack of unrelated components.",
		image: _3_default
	}
];
function HomePage() {
	useScrollReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-aurora opacity-70 pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-[0.18] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-12 gap-12 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-6 animate-fade-in-up",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: logo_default,
											alt: "Zyphor OS Logo",
											className: "h-4 w-4 rounded-sm animate-pulse"
										}),
										latestRelease.version,
										" · ",
										latestRelease.codename ?? "Stable"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight",
									children: [
										"Learn Linux from",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gradient",
											children: "the inside out."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-lg text-muted-foreground max-w-xl",
									children: "Zyphor OS is a modern, learning-oriented Linux distribution built on Debian and Kali. Minimal by design, developer-focused, and shaped by an open source community."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/download",
										className: "btn-brand btn-brand-hover inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download Zyphor OS"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/about",
										className: "btn-ghost inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold",
										children: ["Learn more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-10 grid grid-cols-3 gap-6 max-w-lg",
									children: [
										{
											k: "5 yrs",
											v: "LTS support"
										},
										{
											k: "100%",
											v: "Open source"
										},
										{
											k: "Debian",
											v: "Rock-solid base"
										}
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "reveal",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-2xl font-display font-semibold text-foreground",
											children: s.k
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "text-xs text-muted-foreground mt-1",
											children: s.v
										})]
									}, s.v))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-6 animate-fade-in",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-center justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 bg-glow blur-3xl opacity-80 animate-pulse-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo_default,
									alt: "Zyphor OS Logo",
									className: "relative w-64 h-64 sm:w-80 sm:h-80 object-contain drop-shadow-[0_0_60px_rgba(0,180,255,0.4)] animate-float",
									loading: "eager"
								})]
							})
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 reveal",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-brand",
						children: "Why Zyphor OS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl sm:text-4xl font-bold tracking-tight",
						children: "Built for people who want to actually understand their system."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Zyphor OS is opinionated where it matters and transparent everywhere else. It teaches, it stays out of your way, and it grows with you."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: features.map(({ icon: Icon, title, desc }, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group card-elevated card-hover rounded-2xl p-6 transition-all duration-300 reveal",
					style: { transitionDelay: `${idx * 50}ms` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20 group-hover:bg-brand/20 group-hover:scale-110 transition-all duration-300",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-semibold",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground leading-relaxed",
							children: desc
						})
					]
				}, title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 reveal",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl card-elevated p-8 sm:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-glow opacity-70 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid lg:grid-cols-2 gap-8 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-brand/15 text-brand px-3 py-1 text-xs font-semibold ring-1 ring-brand/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-2 w-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-brand" })]
							}), "Latest release"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl sm:text-4xl font-bold tracking-tight",
							children: latestRelease.version
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-muted-foreground",
							children: [
								"Codename ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-medium",
									children: latestRelease.codename
								}),
								" ",
								"· Released ",
								new Date(latestRelease.date).toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground max-w-lg",
							children: latestRelease.notes
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/download",
								className: "btn-brand btn-brand-hover inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download ISO"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/download",
								className: "btn-ghost inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold",
								children: ["Release notes ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border/60 bg-background/60 p-5 font-mono text-sm shadow-xl code-block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 mb-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-red-400/70" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-400/70" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-green-400/70" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 text-xs text-muted-foreground",
									children: "terminal"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("pre", {
							className: "text-muted-foreground leading-relaxed whitespace-pre-wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brand",
									children: "$"
								}),
								" zyphor system upgrade",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brand",
									children: "$"
								}),
								" zyphor setup theme dark",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brand",
									children: "$"
								}),
								" zyphor doctor scan",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "→ System healthy · 0 issues found"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-blink inline-block w-2 h-4 bg-foreground align-middle ml-1" })
							]
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 space-y-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-brand",
					children: "Why choose Zyphor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl",
					children: "A distribution that respects your time and teaches you as you go."
				})]
			}), whyChoose.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-10 items-center reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: i % 2 === 1 ? "lg:order-2" : "",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl sm:text-3xl font-semibold tracking-tight",
						children: row.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground leading-relaxed max-w-lg",
						children: row.body
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: i % 2 === 1 ? "lg:order-1" : "",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl overflow-hidden border-glow card-elevated group relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: row.image,
							alt: "",
							className: "w-full h-auto block transition-transform duration-700 group-hover:scale-105",
							loading: "lazy"
						})]
					})
				})]
			}, row.title))]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 reveal",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl border border-border/60 bg-surface/60 p-10 sm:p-14 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-glow opacity-60 pointer-events-none animate-pulse-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex items-center justify-center p-3 rounded-full bg-brand/10 text-brand ring-1 ring-brand/30 mb-4 shadow-[0_0_15px_-3px_var(--brand)] animate-float",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-8 w-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl sm:text-4xl font-bold tracking-tight",
							children: "Zyphor is built in the open."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl mx-auto text-muted-foreground",
							children: "Contribute code, improve documentation, report issues or just join the conversation. There's a place for everyone."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/documentation",
								className: "btn-brand btn-brand-hover inline-flex items-center gap-2 rounded-lg px-8 py-3 text-sm font-semibold",
								children: "Contribute"
							})
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { HomePage as component };
