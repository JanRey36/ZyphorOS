import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Facebook, L as BookOpen, O as Download, m as Menu, n as X, w as Github } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useScrollReveal-DGsG-_Ds.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_default = "/assets/logo-BxOMS6c-.png";
function Logo({ size = 32 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-2.5 group",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: logo_default,
			alt: "Zyphor OS",
			width: size,
			height: size,
			className: "rounded-lg ring-1 ring-white/10 group-hover:ring-brand/50 transition",
			style: {
				width: size,
				height: size
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-display font-semibold tracking-tight text-lg",
			children: ["Zyphor", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-brand",
				children: " OS"
			})]
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/documentation",
		label: "Documentation"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/team",
		label: "Team"
	}
];
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const menuRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const handler = (e) => {
			if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
		};
		document.addEventListener("mousedown", handler);
		return () => document.removeEventListener("mousedown", handler);
	}, [open]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		ref: menuRef,
		className: cn("sticky top-0 z-50 w-full transition-all duration-300", scrolled ? "bg-background/75 backdrop-blur-2xl border-b border-border/50 shadow-[0_1px_24px_-6px_rgba(0,0,0,0.5)]" : "bg-transparent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-16 items-center justify-between gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden lg:flex items-center gap-1",
						"aria-label": "Primary",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "relative px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-white/5 group",
							activeProps: { className: "relative px-3.5 py-2 text-sm text-foreground font-medium rounded-lg" },
							activeOptions: { exact: l.to === "/" },
							children: ({ isActive }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-brand transition-all duration-300", isActive ? "w-4/5 opacity-100" : "w-0 opacity-0 group-hover:w-2/5 group-hover:opacity-40") })] })
						}, l.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden lg:flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://github.com/zyphor-os/zyphor-os-desktop",
							target: "_blank",
							rel: "noreferrer",
							className: "p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/6 transition-all duration-200",
							"aria-label": "GitHub",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/download",
							className: "btn-brand btn-brand-hover inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors",
						onClick: () => setOpen((v) => !v),
						"aria-label": "Toggle menu",
						"aria-expanded": open,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("block transition-all duration-200", open ? "rotate-90 opacity-0 absolute" : "rotate-0 opacity-100"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("block transition-all duration-200", !open ? "rotate-90 opacity-0 absolute" : "rotate-0 opacity-100"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("lg:hidden overflow-hidden transition-all duration-300 ease-in-out", open ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border/50 pt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-col gap-1",
						"aria-label": "Mobile",
						children: [links.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							onClick: () => setOpen(false),
							className: "px-3 py-2.5 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-200",
							activeProps: { className: "px-3 py-2.5 text-sm rounded-lg text-foreground bg-brand/10 font-medium border border-brand/20" },
							activeOptions: { exact: l.to === "/" },
							style: { transitionDelay: open ? `${i * 35}ms` : "0ms" },
							children: l.label
						}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/download",
							onClick: () => setOpen(false),
							className: "btn-brand btn-brand-hover inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download Zyphor OS"]
						})]
					})
				})
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 border-t border-border/60 bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground max-w-xs",
							children: "A modern, learning-oriented Linux distribution. Minimal, developer-focused, and built to help you understand your system from the inside out."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterColumn, {
						title: "Quick Links",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
								to: "/",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
								to: "/download",
								children: "Download"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
								to: "/about",
								children: "About"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterColumn, {
						title: "Resources",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
								to: "/documentation",
								children: "Documentation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
								to: "/documentation",
								children: "Getting Started"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
								to: "/documentation",
								children: "FAQ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
								to: "/team",
								children: "Team"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterColumn, {
						title: "Community",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
								to: "/team",
								children: "Team"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://github.com/zyphor-os/zyphor-os-desktop",
								target: "_blank",
								rel: "noreferrer",
								className: "text-sm text-muted-foreground hover:text-foreground transition",
								children: "GitHub"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "text-sm text-muted-foreground hover:text-foreground transition",
								children: "Discussions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "text-sm text-muted-foreground hover:text-foreground transition",
								children: "Report an Issue"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Zyphor OS. Released under an open source license. Created by Mark Jason P. Espelita."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
							href: "https://github.com/zyphor-os/zyphor-os-desktop",
							label: "GitHub",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
							href: "https://www.facebook.com/profile.php?id=61573426796629",
							label: "Facebook Page",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
							href: "https://www.facebook.com/groups/1297494746772755",
							label: "Facebook Group",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
							href: "/documentation",
							label: "Docs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-4 w-4" })
						})
					]
				})]
			})]
		})
	});
}
function FooterColumn({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
		className: "text-sm font-semibold text-foreground mb-3",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-2",
		children
	})] });
}
function FooterLink({ to, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: "text-sm text-muted-foreground hover:text-foreground transition w-fit",
		children
	});
}
function SocialIcon({ href, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": label,
		className: "p-2 rounded-md border border-border/60 text-muted-foreground hover:text-foreground hover:border-brand/50 hover:bg-white/5 transition",
		children
	});
}
function SiteLayout({ children }) {
	const location = useLocation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-background text-foreground relative z-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fixed inset-0 bg-aurora opacity-10 pointer-events-none -z-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 animate-page-enter",
				children
			}, location.pathname),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function PageHeader({ eyebrow, title, description, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("relative overflow-hidden", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-glow opacity-70 pointer-events-none animate-pulse-glow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-[0.15] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 animate-fade-in-up",
				children: [
					eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1.5 text-xs font-medium text-brand mb-4 shadow-[0_0_15px_-3px_var(--brand)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-brand shadow-[0_0_8px_var(--brand)]" })]
						}), eyebrow]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground",
						children: title
					}),
					description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed",
						children: description
					})
				]
			})
		]
	});
}
function useScrollReveal() {
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.classList.add("revealed");
				else entry.target.classList.remove("revealed");
			});
		}, {
			threshold: .1,
			rootMargin: "0px 0px -50px 0px"
		});
		const observeElements = () => {
			document.querySelectorAll(".reveal:not(.revealed)").forEach((el) => {
				observer.observe(el);
			});
		};
		observeElements();
		const mutationObserver = new MutationObserver(() => {
			observeElements();
		});
		mutationObserver.observe(document.body, {
			childList: true,
			subtree: true
		});
		return () => {
			observer.disconnect();
			mutationObserver.disconnect();
		};
	}, []);
}
//#endregion
export { useScrollReveal as a, logo_default as i, SiteLayout as n, cn as r, PageHeader as t };
