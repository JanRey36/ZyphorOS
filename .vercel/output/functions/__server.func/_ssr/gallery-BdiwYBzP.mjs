import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as require_react_dom } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as ChevronRight, N as ChevronLeft, n as X, t as ZoomIn } from "../_libs/lucide-react.mjs";
import { a as useScrollReveal, n as SiteLayout, t as PageHeader } from "./useScrollReveal-DGsG-_Ds.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-BdiwYBzP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
var showcaseImages = [
	"/assets/image1-D2ia5u4C.jpg",
	"/assets/image2-tnV4m9_x.jpg",
	"/assets/image3-BSL54F7V.jpg",
	"/assets/image4-B79Q0M1Q.jpg",
	"/assets/image5-2VWAiTr7.jpg",
	"/assets/image6-CRH2WvAd.jpg",
	"/assets/image7-Bhq1awa3.jpg",
	"/assets/image8-DX6oQQGt.jpg",
	"/assets/image9-10SGPzOf.jpg",
	"/assets/image10-DoGAao3O.jpg",
	"/assets/image11-uR4xYemJ.jpg"
];
function Lightbox({ index, total, src, onClose, onPrev, onNext }) {
	const touchStartX = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const original = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = original;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowLeft") onPrev();
			if (e.key === "ArrowRight") onNext();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		onClose,
		onPrev,
		onNext
	]);
	const onTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
	};
	const onTouchEnd = (e) => {
		if (touchStartX.current === null) return;
		const dx = e.changedTouches[0].clientX - touchStartX.current;
		if (Math.abs(dx) > 50) dx < 0 ? onNext() : onPrev();
		touchStartX.current = null;
	};
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			position: "fixed",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			zIndex: 99999,
			backgroundColor: "rgba(0,0,0,0.95)",
			backdropFilter: "blur(20px)",
			WebkitBackdropFilter: "blur(20px)"
		},
		onTouchStart,
		onTouchEnd,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Image viewer",
		onClick: onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "16px 24px",
					zIndex: 10
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					style: {
						fontFamily: "monospace",
						fontSize: "14px",
						color: "rgba(255,255,255,0.6)"
					},
					children: [
						index + 1,
						" / ",
						total
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.stopPropagation();
						onClose();
					},
					"aria-label": "Close",
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: 44,
						height: 44,
						borderRadius: "50%",
						background: "rgba(255,255,255,0.12)",
						border: "none",
						color: "white",
						cursor: "pointer"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 24 })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					onPrev();
				},
				"aria-label": "Previous",
				style: {
					position: "absolute",
					left: 16,
					top: "50%",
					transform: "translateY(-50%)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: 48,
					height: 48,
					borderRadius: "50%",
					background: "rgba(255,255,255,0.12)",
					border: "none",
					color: "white",
					cursor: "pointer",
					zIndex: 10
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 28 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					onNext();
				},
				"aria-label": "Next",
				style: {
					position: "absolute",
					right: 16,
					top: "50%",
					transform: "translateY(-50%)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: 48,
					height: 48,
					borderRadius: "50%",
					background: "rgba(255,255,255,0.12)",
					border: "none",
					color: "white",
					cursor: "pointer",
					zIndex: 10
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 28 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "absolute",
					top: 80,
					bottom: 80,
					left: 80,
					right: 80,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					pointerEvents: "none"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: `Zyphor OS screenshot ${index + 1}`,
					draggable: false,
					onClick: (e) => e.stopPropagation(),
					style: {
						pointerEvents: "auto",
						display: "block",
						maxWidth: "100%",
						maxHeight: "100%",
						objectFit: "contain",
						borderRadius: 12,
						boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
						userSelect: "none",
						WebkitUserSelect: "none"
					}
				}, src)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "absolute",
					bottom: 24,
					left: 0,
					right: 0,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: 8,
					zIndex: 10
				},
				children: Array.from({ length: total }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
					borderRadius: 9999,
					transition: "all 0.3s",
					background: i === index ? "var(--brand, #60c0f0)" : "rgba(255,255,255,0.25)",
					width: i === index ? 24 : 8,
					height: 8
				} }, i))
			})
		]
	}), document.body);
}
function GalleryPage() {
	useScrollReveal();
	const [lightboxIndex, setLightboxIndex] = (0, import_react.useState)(null);
	const total = showcaseImages.length;
	const openLightbox = (0, import_react.useCallback)((idx) => setLightboxIndex(idx), []);
	const closeLightbox = (0, import_react.useCallback)(() => setLightboxIndex(null), []);
	const prev = (0, import_react.useCallback)(() => setLightboxIndex((i) => i !== null ? (i - 1 + total) % total : null), [total]);
	const next = (0, import_react.useCallback)(() => setLightboxIndex((i) => i !== null ? (i + 1) % total : null), [total]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Showcase",
			title: "Gallery",
			description: "A visual tour of Zyphor OS — from the polished desktop environment to its powerful command-line tools."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap justify-center -mx-3",
				children: showcaseImages.map((src, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full sm:w-1/2 lg:w-1/3 px-3 mb-6 reveal",
					style: { transitionDelay: `${idx % 4 * 80}ms` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => openLightbox(idx),
						className: "group relative w-full block rounded-2xl overflow-hidden border border-border/40 hover:border-brand/40 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background touch-manipulation",
						"aria-label": `View screenshot ${idx + 1} in full size`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-brand/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-background/80 backdrop-blur-sm rounded-full p-3 shadow-lg ring-1 ring-brand/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { className: "h-5 w-5 text-brand" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: `Zyphor OS screenshot ${idx + 1}`,
								loading: "lazy",
								draggable: false,
								className: "w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
							})
						]
					})
				}, idx))
			})
		}),
		lightboxIndex !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
			index: lightboxIndex,
			total,
			src: showcaseImages[lightboxIndex],
			onClose: closeLightbox,
			onPrev: prev,
			onNext: next
		})
	] });
}
//#endregion
export { GalleryPage as component };
