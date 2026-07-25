import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { useScrollReveal } from "@/lib/useScrollReveal";

import img1 from "../assets/showcase/image1.jpg";
import img2 from "../assets/showcase/image2.jpg";
import img3 from "../assets/showcase/image3.jpg";
import img4 from "../assets/showcase/image4.jpg";
import img5 from "../assets/showcase/image5.jpg";
import img6 from "../assets/showcase/image6.jpg";
import img7 from "../assets/showcase/image7.jpg";
import img8 from "../assets/showcase/image8.jpg";
import img9 from "../assets/showcase/image9.jpg";
import img10 from "../assets/showcase/image10.jpg";
import img11 from "../assets/showcase/image11.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Zyphor OS" },
      {
        name: "description",
        content:
          "A visual tour of Zyphor OS. Browse screenshots from the desktop, applications, and command-line tools.",
      },
      { property: "og:title", content: "Gallery — Zyphor OS" },
      {
        property: "og:description",
        content: "Screenshots and showcase images of Zyphor OS.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GalleryPage,
});

const showcaseImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,
];

function Lightbox({
  index,
  total,
  src,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  total: number;
  src: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) { dx < 0 ? onNext() : onPrev(); }
    touchStartX.current = null;
  };

  const content = (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 99999,
        backgroundColor: "rgba(0,0,0,0.95)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 24px", zIndex: 10
      }}>
        <span style={{ fontFamily: "monospace", fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
          {index + 1} / {total}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          aria-label="Close"
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: 44, height: 44, borderRadius: "50%",
            background: "rgba(255,255,255,0.12)", border: "none",
            color: "white", cursor: "pointer",
          }}
        >
          <X size={24} />
        </button>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
        style={{
          position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 48, height: 48, borderRadius: "50%",
          background: "rgba(255,255,255,0.12)", border: "none",
          color: "white", cursor: "pointer", zIndex: 10,
        }}
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
        style={{
          position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 48, height: 48, borderRadius: "50%",
          background: "rgba(255,255,255,0.12)", border: "none",
          color: "white", cursor: "pointer", zIndex: 10,
        }}
      >
        <ChevronRight size={28} />
      </button>

      <div
        style={{
          position: "absolute",
          top: 80, bottom: 80, left: 80, right: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <img
          key={src}
          src={src}
          alt={`Zyphor OS screenshot ${index + 1}`}
          draggable={false}
          onClick={(e) => e.stopPropagation()}
          style={{
            pointerEvents: "auto",
            display: "block",
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            borderRadius: 12,
            boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        />
      </div>

      <div style={{
        position: "absolute", bottom: 24, left: 0, right: 0,
        display: "flex", justifyContent: "center", alignItems: "center", gap: 8, zIndex: 10
      }}>
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            style={{
              borderRadius: 9999,
              transition: "all 0.3s",
              background: i === index ? "var(--brand, #60c0f0)" : "rgba(255,255,255,0.25)",
              width: i === index ? 24 : 8,
              height: 8,
            }}
          />
        ))}
      </div>
    </div>
  );

  return createPortal(content, document.body);
}

function GalleryPage() {
  useScrollReveal();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const total = showcaseImages.length;

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex((i) => i !== null ? (i - 1 + total) % total : null), [total]);
  const next = useCallback(() => setLightboxIndex((i) => i !== null ? (i + 1) % total : null), [total]);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Showcase"
        title="Gallery"
        description="A visual tour of Zyphor OS — from the polished desktop environment to its powerful command-line tools."
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-16">
        <div className="flex flex-wrap justify-center -mx-3">
          {showcaseImages.map((src, idx) => (
            <div
              key={idx}
              className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6 reveal"
              style={{ transitionDelay: `${(idx % 4) * 80}ms` }}
            >
              <button
                onClick={() => openLightbox(idx)}
                className="group relative w-full block rounded-2xl overflow-hidden border border-border/40 hover:border-brand/40 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background touch-manipulation"
                aria-label={`View screenshot ${idx + 1} in full size`}
              >
                <div className="absolute inset-0 bg-brand/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <div className="bg-background/80 backdrop-blur-sm rounded-full p-3 shadow-lg ring-1 ring-brand/30">
                    <ZoomIn className="h-5 w-5 text-brand" />
                  </div>
                </div>
                <img
                  src={src}
                  alt={`Zyphor OS screenshot ${idx + 1}`}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          total={total}
          src={showcaseImages[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </SiteLayout>
  );
}
