import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as House, E as Github, L as Box, R as BookOpen, b as Lightbulb, c as Shield, g as Menu, i as User, k as Download, o as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as useScrollReveal, n as SiteLayout, r as cn } from "./useScrollReveal-BKRdfTJB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/documentation-BAHmRQQ-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var zcc_jpg_default = "/assets/2-MiokMX8I.jpg";
var profile_login_1_default = "/assets/profile-login-1-DSNwx6cn.jpg";
var profile_login_2_default = "/assets/profile-login-2-CzGlUgk-.jpg";
var profile_login_3_default = "/assets/profile-login-3-BlNA6Bsi.jpg";
var navSections = [
	{
		title: "Getting Started",
		items: [
			{
				id: "__home",
				label: "Home",
				Icon: House,
				isHomeLink: true
			},
			{
				id: "introduction",
				label: "Introduction",
				Icon: BookOpen
			},
			{
				id: "installation",
				label: "Installation",
				Icon: Download
			}
		]
	},
	{
		title: "How To",
		items: [{
			id: "profile-management",
			label: "Manage Profile",
			Icon: User
		}, {
			id: "firewall-management",
			label: "Manage Firewall",
			Icon: Shield
		}]
	},
	{
		title: "Custom Packages",
		items: [
			{
				id: "zyphor-cli",
				label: "Zyphor CLI",
				Icon: Box
			},
			{
				id: "zyphor-command-center",
				label: "Zyphor Command Center",
				Icon: Box
			},
			{
				id: "zylearn",
				label: "ZyLearn",
				Icon: Box
			},
			{
				id: "zyphor-updates",
				label: "Zyphor Updates",
				Icon: Box
			},
			{
				id: "zysh",
				label: "Zysh",
				Icon: Box
			}
		]
	},
	{
		title: "Contributing",
		items: [{
			id: "contributing-packages",
			label: "Packages",
			Icon: Box
		}]
	}
];
var sectionIds = navSections.flatMap((s) => s.items).filter((item) => !item.isHomeLink).map((item) => item.id);
function DocsPage() {
	const [sidebarOpen, setSidebarOpen] = (0, import_react.useState)(false);
	const [activeSection, setActiveSection] = (0, import_react.useState)("introduction");
	const [repoData, setRepoData] = (0, import_react.useState)(null);
	const [releaseData, setReleaseData] = (0, import_react.useState)(null);
	const observerRef = (0, import_react.useRef)(null);
	const isManualScroll = (0, import_react.useRef)(false);
	useScrollReveal();
	(0, import_react.useEffect)(() => {
		const REPO = "zyphor-os/zyphor-os-desktop";
		fetch(`https://api.github.com/repos/${REPO}`).then((r) => r.json()).then((data) => setRepoData(data)).catch(() => {});
		fetch(`https://api.github.com/repos/${REPO}/releases/latest`).then((r) => r.json()).then((data) => setReleaseData(data)).catch(() => {});
	}, []);
	(0, import_react.useEffect)(() => {
		observerRef.current?.disconnect();
		observerRef.current = new IntersectionObserver((entries) => {
			if (isManualScroll.current) return;
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible.length > 0) setActiveSection(visible[0].target.id);
		}, {
			rootMargin: "-100px 0px -40% 0px",
			threshold: [
				0,
				.25,
				.5,
				.75,
				1
			]
		});
		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observerRef.current.observe(el);
		});
		return () => observerRef.current?.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(min-width: 1024px)");
		const handler = (e) => {
			if (e.matches) setSidebarOpen(false);
		};
		mq.addEventListener("change", handler);
		return () => mq.removeEventListener("change", handler);
	}, []);
	const handleNavClick = (id) => {
		setSidebarOpen(false);
		setActiveSection(id);
		isManualScroll.current = true;
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
		setTimeout(() => {
			isManualScroll.current = false;
		}, 1e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "hidden lg:flex flex-col w-72 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-border/60 bg-surface/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, {
					navSections,
					activeSection,
					repoData,
					onNavClick: handleNavClick
				})
			}),
			sidebarOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
				onClick: () => setSidebarOpen(false),
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: cn("fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-72 flex flex-col border-r border-border/60 bg-background overflow-y-auto transition-transform duration-300 ease-in-out lg:hidden", sidebarOpen ? "translate-x-0" : "-translate-x-full"),
				"aria-label": "Documentation navigation",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, {
					navSections,
					activeSection,
					repoData,
					onNavClick: handleNavClick
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0 flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sticky top-16 z-30 flex items-center gap-3 px-4 py-3 border-b border-border/60 bg-background/80 backdrop-blur lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSidebarOpen(true),
						className: "p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition",
						"aria-label": "Open sidebar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium text-muted-foreground",
						children: "Documentation"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex-1 mx-auto w-full max-w-5xl px-6 py-10 lg:px-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "introduction",
							className: "mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem] reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2 mb-3",
									children: releaseData?.tag_name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center rounded-full bg-brand/15 text-brand text-xs font-semibold px-2.5 py-0.5 ring-1 ring-brand/30",
										children: releaseData.tag_name
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center rounded-full bg-surface-2 text-muted-foreground text-xs font-semibold px-2.5 py-0.5 ring-1 ring-border/60 animate-pulse",
										children: "v…."
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-3xl sm:text-4xl font-bold tracking-tight",
									children: "Introduction"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-lg text-muted-foreground",
									children: "Everything you need to know to get up and running quickly."
								}),
								repoData && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [repoData.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-muted-foreground",
									children: repoData.description
								}), repoData.topics && repoData.topics.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-1.5",
									children: repoData.topics.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center rounded-full bg-surface-2 text-muted-foreground text-xs px-2.5 py-0.5 ring-1 ring-border/40",
										children: topic
									}, topic))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoAlert, { children: [
									"Tip: visit the",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://github.com/zyphor-os/zyphor-os-desktop",
										target: "_blank",
										rel: "noreferrer",
										className: "underline underline-offset-2 hover:text-brand transition",
										children: "GitHub repository"
									}),
									" ",
									"for the latest source code and release notes."
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "installation",
							className: "mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem] reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
								level: 2,
								children: "Installation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "ISO File Size: 3.5GB" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Download the latest ISO version in the Github README.md file:",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://github.com/zyphor-os/zyphor-os-desktop",
										target: "_blank",
										rel: "noreferrer",
										className: "underline underline-offset-2 hover:text-brand transition",
										children: "GitHub repository"
									}),
									" "
								] })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "profile-management",
							className: "mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem] reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
									level: 2,
									children: "Profile Management"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 text-muted-foreground leading-relaxed",
									children: [
										"Zyphor OS provides an integrated Profile Management feature through",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleNavClick("zyphor-command-center"),
											className: "text-brand hover:underline font-medium",
											children: "Zyphor Command Center"
										}),
										", allowing users to personalize and manage their system profile with ease. Users can update their profile information and upload a custom profile image that is automatically optimized for system use. The selected profile image is synchronized across the desktop environment, including the Start Menu panel icon and the LightDM login screen, providing a more personal and consistent user experience throughout Zyphor OS."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-xl overflow-hidden border border-border/60 bg-surface/40",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: profile_login_1_default,
												alt: "Profile Login 1",
												className: "w-full h-auto"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-xl overflow-hidden border border-border/60 bg-surface/40",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: profile_login_2_default,
												alt: "Profile Login 2",
												className: "w-full h-auto"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-xl overflow-hidden border border-border/60 bg-surface/40",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: profile_login_3_default,
												alt: "Profile Login 3",
												className: "w-full h-auto"
											})
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "firewall-management",
							className: "mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem] reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
									level: 2,
									children: "Manage Firewall"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-muted-foreground leading-relaxed",
									children: [
										"Zyphor OS uses ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "font-semibold text-foreground",
											children: "UFW (Uncomplicated Firewall)"
										}),
										" to provide a simple and reliable way to manage firewall rules and protect your system from unauthorized network access."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 space-y-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border/60 bg-surface/30 p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-semibold text-lg",
													children: "Enable the Firewall"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children: "Turn on the firewall to start protecting your system from unauthorized incoming connections."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
													className: "mt-3",
													children: "sudo ufw enable"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border/60 bg-surface/30 p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-semibold text-lg",
													children: "Check Firewall Status"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children: "Check whether the firewall is active and view the currently configured firewall rules."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
													className: "mt-3",
													children: "sudo ufw status"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border/60 bg-surface/30 p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-semibold text-lg",
													children: "Allow a Port"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children: "Allow incoming connections to a specific port. For example, the following command allows SSH connections on port 22."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
													className: "mt-3",
													children: "sudo ufw allow 22/tcp"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border/60 bg-surface/30 p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-semibold text-lg",
													children: "Deny a Port"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children: "Block incoming connections to a specific port."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
													className: "mt-3",
													children: "sudo ufw deny 22/tcp"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border/60 bg-surface/30 p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-semibold text-lg",
													children: "Remove a Firewall Rule"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children: "Remove an existing firewall rule when it is no longer needed."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
													className: "mt-3",
													children: "sudo ufw delete allow 22/tcp"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border/60 bg-surface/30 p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-semibold text-lg",
													children: "Disable the Firewall"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children: "Temporarily disable UFW if firewall protection is not required."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
													className: "mt-3",
													children: "sudo ufw disable"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WarnAlert, {
											className: "mt-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "font-semibold block mb-1",
												children: "Warning:"
											}), "Before enabling UFW on a remote server, make sure the required management ports, such as SSH (port 22), are allowed. Otherwise, you may lose remote access to the system."]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "zyphor-cli",
							className: "mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem] reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
									level: 2,
									children: "Zyphor CLI"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-muted-foreground",
									children: [
										"Installation:",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor pkg install zyphor-cli" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoAlert, {
									className: "mt-4",
									children: "Note: Zyphor CLI is pre-installed and available by default after operating system installation."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 text-muted-foreground leading-relaxed",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "font-semibold text-foreground",
											children: "Zyphor CLI Abstraction Layer"
										}),
										" ",
										"— A unified command framework that transforms complex Linux operations into simple, consistent, and easy-to-remember commands for developers, administrators, and everyday users."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
									className: "mt-4",
									children: "zyphor help"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 overflow-x-auto rounded-xl border border-border/60",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-border/60 bg-surface/60",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-4 py-3 text-left font-semibold text-foreground w-[18%]",
													children: "Category"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-4 py-3 text-left font-semibold text-foreground w-[35%]",
													children: "Command"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-4 py-3 text-left font-semibold text-foreground",
													children: "Description"
												})
											]
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: cliCommands.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: cn("border-b border-border/40 transition", i % 2 === 0 ? "bg-surface/20" : "bg-transparent"),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-4 py-3 font-mono text-xs text-brand/80 font-medium whitespace-nowrap",
													children: row.category
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-4 py-3",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: row.command })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-4 py-3 text-muted-foreground leading-relaxed",
													children: row.description
												})
											]
										}, i)) })]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "zyphor-command-center",
							className: "mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem] reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
									level: 2,
									children: "Zyphor Command Center"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-muted-foreground",
									children: [
										"Installation:",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor pkg install zyphor-comand-center" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoAlert, {
									className: "mt-4",
									children: "Note: Zyphor Command Center is pre-installed and available by default after operating system installation."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 text-muted-foreground leading-relaxed",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "font-semibold text-foreground",
											children: "Zyphor Command Center"
										}),
										" ",
										"— A graphical management interface built on top of Zyphor CLI, providing an intuitive point-and-click experience for non-technical users. Perform system updates, install software, manage services, configure development environments, mount network shares, run diagnostics, and customize system settings without memorizing terminal commands."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 rounded-xl border border-border/60 bg-surface/40 overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: zcc_jpg_default,
										alt: "Zyphor Command Center screenshot",
										className: "w-full h-auto block",
										onError: (e) => {
											const target = e.currentTarget;
											target.style.display = "none";
											const parent = target.parentElement;
											if (parent && !parent.querySelector(".img-placeholder")) {
												const placeholder = document.createElement("div");
												placeholder.className = "img-placeholder flex flex-col items-center justify-center gap-3 py-16 text-muted-foreground";
												placeholder.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/></svg>
                        <span class="text-sm">Zyphor Command Center</span>`;
												parent.appendChild(placeholder);
											}
										}
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "zylearn",
							className: "mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem] reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
									level: 2,
									children: "ZyLearn"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-muted-foreground",
									children: [
										"Installation:",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor pkg install zylearn" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WarnAlert, {
									className: "mt-4",
									children: [
										"Note: ZyLearn is",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "font-semibold",
											children: "NOT"
										}),
										" pre-installed and available by default after operating system installation."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 text-muted-foreground leading-relaxed",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "font-semibold text-foreground",
											children: "ZyLearn"
										}),
										" ",
										"is an interactive learning tool designed to teach Linux distribution development through practical, real-world experience. Rather than relying solely on documentation or videos, ZyLearn provides a working project that users can explore, modify, and build themselves."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-muted-foreground leading-relaxed",
									children: [
										"When launched, ZyLearn automatically clones the",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor-os-minimal" }),
										" project into the current directory and includes a comprehensive",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "GUIDE.md" }),
										" file containing step-by-step instructions for Linux operating system development."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-muted-foreground leading-relaxed",
									children: "ZyLearn serves as a hands-on educational environment for students, Linux enthusiasts, and aspiring distribution maintainers who want to understand how modern Linux distributions are built from the ground up."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-8 text-lg font-semibold tracking-tight",
									children: "Available Commands"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 overflow-x-auto rounded-xl border border-border/60",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-border/60 bg-surface/60",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3 text-left font-semibold text-foreground w-[30%]",
												children: "Command"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3 text-left font-semibold text-foreground",
												children: "Description"
											})]
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: zyLearnCommands.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: cn("border-b border-border/40", i % 2 === 0 ? "bg-surface/20" : "bg-transparent"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3 align-top",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: row.command })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3 text-muted-foreground leading-relaxed align-top",
												children: row.description
											})]
										}, i)) })]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "zyphor-updates",
							className: "mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem] reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
									level: 2,
									children: "Zyphor Updates"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-muted-foreground",
									children: [
										"Installation:",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor pkg install zyphor-updates" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WarnAlert, {
									className: "mt-4",
									children: [
										"Note: Zyphor Updates is",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "font-semibold",
											children: "NOT"
										}),
										" pre-installed and available by default after operating system installation."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 text-muted-foreground leading-relaxed",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "font-semibold text-foreground",
											children: "Zyphor Updates"
										}),
										" ",
										"is the official post-installation package for Zyphor OS. It provides a curated collection of software, developer tools, desktop enhancements, system utilities, multimedia applications, and Zyphor-specific components that extend the base operating system experience."
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "zysh",
							className: "mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem] reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
									level: 2,
									children: "Zysh"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-muted-foreground",
									children: [
										"Installation:",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor pkg install zysh" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WarnAlert, {
									className: "mt-4",
									children: [
										"Note: Zysh is not included in the default Zyphor OS installation. It is automatically installed as part of the",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "font-semibold",
											children: "zyphor-updates"
										}),
										" ",
										"package."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 text-muted-foreground leading-relaxed",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "font-semibold text-foreground",
											children: "Zysh"
										}),
										" ",
										"is the official Zsh customization layer for Zyphor OS. It enhances the standard Zsh shell with Zyphor-specific branding, version information, color schemes, and terminal experience improvements. Rather than replacing Zsh, Zysh operates on top of it, extending and customizing the shell to provide a consistent and recognizable command-line environment across the Zyphor OS ecosystem."
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "contributing-packages",
							className: "mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem] reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
									level: 2,
									children: "Contributing to Packages"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-muted-foreground leading-relaxed",
									children: "Zyphor OS maintains its own collection of official packages that are developed specifically for the distribution. These packages include system utilities, desktop enhancements, command-line tools, themes, configuration packages, applications, and other components that make up the Zyphor OS experience."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-5 space-y-2 text-sm text-muted-foreground list-decimal list-inside ml-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor-cli" }), " - shell script"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor-command-center" }), " - python"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor-command-center-web" }), " - php"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zylearn" }), " - C++"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor-updates" }), " - Debian config file"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zysh" }), " - shell script"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyshell" }), " - C (removed temporary)"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zycamera-launcher" }), " - C++"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "fastfetch-config-1" }), " - filesystem config and Debian config file"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "grub-screensaver-1" }), " - filesystem config and Debian config file"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor-display-mac-v1" }), " - filesystem config and Debian config file (optional - for v1 Stable)"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor-os-release" }), " - filesystem config and Debian config file"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor-repo-config" }), " - filesystem config and Debian config file"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor-whats-new" }), " - filesystem config, html and Debian config file"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor-wallpapers-default-2026-2027" }), " - filesystem config, images and Debian config file"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor-wallpapers-nature" }), " - filesystem config, images and Debian config file"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor-wallpapers-pragmata" }), " - filesystem config, images and Debian config file"] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-8 text-lg font-semibold tracking-tight text-foreground",
									children: "How to Contribute?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-muted-foreground leading-relaxed",
									children: "Want to help improve Zyphor OS? Awesome! You can contribute by updating existing packages, creating new ones, fixing bugs, improving the documentation, or adding new features."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-4 space-y-3 text-sm text-muted-foreground list-disc list-inside ml-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "font-semibold text-foreground",
												children: "Step 1:"
											}),
											" Fork the ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "https://github.com/zyphor-os/zyphor-os-desktop" }),
											" repository."
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "font-semibold text-foreground",
												children: "Step 2:"
											}),
											" Clone your fork:",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-5 mt-1 block",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "git clone https://github.com/YOUR_USERNAME/zyphor-os-desktop" })
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "font-semibold text-foreground",
												children: "Step 3:"
											}),
											" Open the ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "/pkg" }),
											" folder."
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "font-semibold text-foreground",
											children: "Step 4:"
										}), " Find the package you want to update, or create a new one."] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "font-semibold text-foreground",
											children: "Step 5:"
										}), " Make your changes and test them."] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "font-semibold text-foreground",
											children: "Step 6:"
										}), " Commit your changes and push them to your GitHub fork."] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "font-semibold text-foreground",
											children: "Step 7:"
										}), " Open a Pull Request so the Zyphor OS maintainers can review your work."] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-8 text-lg font-semibold tracking-tight text-foreground",
									children: "How to Test a Package?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-muted-foreground leading-relaxed",
									children: [
										"The easiest way to test a package is by installing ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor-cli" }),
										". It comes with a command that builds packages for you:",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-2 block",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor build package PACKAGE_NAME" })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-muted-foreground leading-relaxed",
									children: [
										"For example, if you're updating the ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zylearn" }),
										" package in Ada Lovelace LTS:"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
									className: "mt-4 space-y-3 text-sm text-muted-foreground list-decimal list-inside ml-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "cd pkg/v2/zylearn" }) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
											"Update the version number in ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "DEBIAN/control" }),
											"."
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Edit the files you want to change." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
											"Go back to the package directory:",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-5 mt-1 block",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "cd .." })
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
											"Build the package:",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-5 mt-1 block",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "zyphor build package zylearn" })
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
											"A ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: ".deb" }),
											" file will be created, ready for testing."
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WarnAlert, {
									className: "mt-6",
									children: "💡 Always test your package in a virtual machine or another safe environment before installing it on your main system."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
							className: "border-t border-border/60 pt-6 pb-8 text-sm text-muted-foreground",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Zyphor OS"
							]
						})
					]
				})]
			})
		]
	}) });
}
function SidebarContent({ navSections, activeSection, repoData, onNavClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5 px-5 py-4 border-b border-border/60 bg-surface/30 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-5 w-5 text-brand shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-sm tracking-tight",
					children: "Documentation"
				})]
			}),
			repoData?.html_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-5 py-3 border-b border-border/40 shrink-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: repoData.html_url,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-3.5 w-3.5" }), "GitHub"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex-1 overflow-y-auto py-3 px-2",
				"aria-label": "Docs navigation",
				children: navSections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60",
						children: section.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: section.items.map((item) => {
						const isActive = activeSection === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "isHomeLink" in item ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.Icon, { className: "h-3.5 w-3.5 shrink-0" }), item.label]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onNavClick(item.id),
							className: cn("w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-left", isActive ? "bg-brand/15 text-brand font-medium ring-1 ring-brand/20" : "text-muted-foreground hover:text-foreground hover:bg-white/5"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.Icon, { className: cn("h-3.5 w-3.5 shrink-0", isActive ? "text-brand" : "") }), item.label]
						}) }, item.id);
					}) })]
				}, section.title))
			})
		]
	});
}
function SectionHeading({ level, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(`h${level}`, {
		className: cn("font-bold tracking-tight", level === 2 ? "text-2xl sm:text-3xl" : "text-xl"),
		children
	});
}
function InlineCode({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
		className: "font-mono text-[0.85em] bg-surface-2/80 text-brand px-1.5 py-0.5 rounded-md ring-1 ring-border/40",
		children
	});
}
function CodeBlock({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: cn("rounded-xl border border-border/60 bg-surface/60 px-5 py-4 font-mono text-sm text-muted-foreground overflow-x-auto", className),
		children
	});
}
function InfoAlert({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-start gap-3 rounded-xl border border-brand/30 bg-brand/8 px-4 py-3.5 text-sm text-brand/80", className),
		role: "note",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "h-4 w-4 shrink-0 mt-0.5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children })]
	});
}
function WarnAlert({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/8 px-4 py-3.5 text-sm text-amber-400/90", className),
		role: "note",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 shrink-0 mt-0.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children })]
	});
}
var cliCommands = [
	{
		category: "SYSTEM",
		command: "zyphor system upgrade",
		description: "Upgrade all installed system packages to their latest available versions from configured repositories, ensuring security updates, bug fixes, and feature improvements are applied."
	},
	{
		category: "SYSTEM",
		command: "zyphor system clean",
		description: "Remove package caches, temporary files, and unused dependencies to free disk space and keep the system optimized."
	},
	{
		category: "SYSTEM",
		command: "zyphor system info",
		description: "Display detailed information about the operating system, kernel version, hardware resources, and system environment."
	},
	{
		category: "SETUP",
		command: "zyphor setup dev <target>",
		description: "Automatically configure a complete development environment for the selected programming language or technology stack."
	},
	{
		category: "SETUP",
		command: "zyphor setup dev php",
		description: "Install and configure PHP, Composer, Node.js, and other tools commonly required for modern PHP application development."
	},
	{
		category: "SETUP",
		command: "zyphor setup dev node",
		description: "Install Node.js runtime and package management tools for building JavaScript and TypeScript applications."
	},
	{
		category: "SETUP",
		command: "zyphor setup dev composer",
		description: "Install Composer and configure the environment for managing PHP packages and project dependencies."
	},
	{
		category: "SETUP",
		command: "zyphor setup dev git",
		description: "Generate SSH keys, configure Git settings, and prepare secure authentication for GitHub and Git-based workflows."
	},
	{
		category: "SETUP",
		command: "zyphor setup pentest recon",
		description: "Install reconnaissance and scanning tools such as Nmap, Masscan, Amass, and Gobuster for network and target discovery."
	},
	{
		category: "SETUP",
		command: "zyphor setup pentest web",
		description: "Install web application testing tools including Sqlmap, Nikto, Burp Suite, ZAP, and Wpscan for auditing web apps."
	},
	{
		category: "SETUP",
		command: "zyphor setup pentest wireless",
		description: "Install wireless auditing tools such as Aircrack-ng, Kismet, and Wifite for testing Wi-Fi networks you own or are authorized to assess."
	},
	{
		category: "SETUP",
		command: "zyphor setup pentest passwords",
		description: "Install password auditing tools including John the Ripper, Hashcat, Hydra, and Medusa for credential strength testing."
	},
	{
		category: "SETUP",
		command: "zyphor setup pentest sniffing",
		description: "Install traffic analysis tools such as Wireshark, Tcpdump, and Bettercap, and configure non-root packet capture."
	},
	{
		category: "SETUP",
		command: "zyphor setup pentest forensics",
		description: "Install forensics and analysis tools including Autopsy, Sleuth Kit, Binwalk, and Volatility3 for investigating systems and files."
	},
	{
		category: "SETUP",
		command: "zyphor setup pentest exploitation",
		description: "Install exploitation framework tools such as Metasploit, Exploit-DB, and SET for authorized penetration testing engagements."
	},
	{
		category: "SETUP",
		command: "zyphor setup pentest full",
		description: "Install the complete pentest toolkit, covering recon, web, wireless, passwords, sniffing, forensics, and exploitation in one run."
	},
	{
		category: "SETUP",
		command: "zyphor setup theme light",
		description: "Apply the Windows-10 inspired desktop theme for a bright and familiar user experience."
	},
	{
		category: "SETUP",
		command: "zyphor setup theme dark",
		description: "Apply the Kali-Dark inspired desktop theme optimized for developers and low-light environments."
	},
	{
		category: "PACKAGE",
		command: "zyphor pkg install <pkg>",
		description: "Install software packages from configured repositories while automatically resolving required dependencies."
	},
	{
		category: "PACKAGE",
		command: "zyphor pkg remove <pkg>",
		description: "Uninstall a package and optionally remove associated dependencies that are no longer required."
	},
	{
		category: "PACKAGE",
		command: "zyphor pkg search <key>",
		description: "Search available repositories for packages matching a keyword, name, or partial package identifier."
	},
	{
		category: "PACKAGE",
		command: "zyphor pkg list",
		description: "Display all currently installed packages along with their versions and installation status."
	},
	{
		category: "SERVICE",
		command: "zyphor service restart <name>",
		description: "Restart a running service to apply configuration changes or recover from operational issues."
	},
	{
		category: "NETWORK / STORAGE",
		command: "zyphor smb mount",
		description: "Connect and mount a remote SMB/CIFS network share, making it accessible like a local directory."
	},
	{
		category: "FTP",
		command: "zyphor ftp upload",
		description: "Transfer files securely from the local system to a configured FTP server."
	},
	{
		category: "SSH",
		command: "zyphor ssh connect",
		description: "Establish a secure encrypted shell session to a remote server for administration and maintenance."
	},
	{
		category: "SSH",
		command: "zyphor ssh cmd",
		description: "Execute commands on a remote server over SSH without opening an interactive terminal session."
	},
	{
		category: "DOCTOR",
		command: "zyphor doctor scan",
		description: "Analyze the system for configuration issues, missing dependencies, broken packages, and common problems."
	},
	{
		category: "DOCTOR",
		command: "zyphor doctor fix",
		description: "Attempt to automatically repair issues detected during a diagnostic scan."
	},
	{
		category: "DOCTOR",
		command: "zyphor doctor report",
		description: "Generate a comprehensive diagnostic report for troubleshooting and technical support purposes."
	},
	{
		category: "BUILD",
		command: "zyphor build package [dir]",
		description: "Build a Debian package from a project directory, simplifying software packaging and distribution."
	},
	{
		category: "BUILD",
		command: "zyphor build repo",
		description: "Generate repository metadata files such as Packages.gz for hosting a Debian-compatible package repository."
	},
	{
		category: "CORE",
		command: "zyphor help",
		description: "Display the complete Zyphor CLI command reference, categories, usage examples, and available options."
	}
];
var zyLearnCommands = [
	{
		command: "zylearn setup skeleton",
		description: "Install the Zyphor OS learning skeleton environment in the current directory. This command downloads and prepares the zyphor-os-minimal project, including the GUIDE.md documentation that walks learners through Linux distribution development step by step."
	},
	{
		command: "zylearn show logs",
		description: "Display recorded learning activity logs, including completed lessons, executed learning tasks, and progress information generated by ZyLearn."
	},
	{
		command: "zylearn clear logs",
		description: "Remove all stored learning activity logs and reset ZyLearn progress history for a fresh learning experience."
	},
	{
		command: "zylearn --help",
		description: "Display command usage information, available commands, options, and examples for the ZyLearn learning environment."
	},
	{
		command: "zylearn --version",
		description: "Show the installed ZyLearn version and release information."
	}
];
//#endregion
export { DocsPage as component };
