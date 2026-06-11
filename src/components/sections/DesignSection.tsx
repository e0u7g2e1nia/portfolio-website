"use client";
import BookFlip from "@/components/ui/BookFlip";
import TiltedCarousel from "@/components/ui/TiltedCarousel";
import { content } from "@/data/content";
import { useLightbox } from "@/components/ui/Lightbox";

const BROCHURE_PAGES = Array.from({ length: 15 }, (_, i) =>
  `/assets/design/book/brochure/page-${String(i + 1).padStart(2, "0")}.png`
);

const DESIGN_ITEM_ASSETS = [
  { src: "/assets/design/posters/忆述光华-展会背板图-AI智能体.png" },
  { src: "/assets/design/posters/忆述光华-展会背板图-情感陪伴.png" },
  { src: "/assets/design/rollup/忆述光华-易拉宝.png" },
  { src: "/assets/design/rollup/https-::mp.weixin.qq.com:s:iHI-Br5PRh9D2TVspSRwKg.webp", link: "https://mp.weixin.qq.com/s/iHI-Br5PRh9D2TVspSRwKg" },
  { src: "/assets/design/rollup/https-::mp.weixin.qq.com:s:6-gRbDHTVkMIxW2OFH3Rmg.jpg", link: "https://mp.weixin.qq.com/s/6-gRbDHTVkMIxW2OFH3Rmg" },
  { src: "/assets/design/rollup/https-::mp.weixin.qq.com:s:66z7z94_XGYhN0c2VUznrA.jpg", link: "https://mp.weixin.qq.com/s/66z7z94_XGYhN0c2VUznrA" },
  { src: "/assets/design/rollup/https-::mp.weixin.qq.com:s:MABiNyLpm6NiuG7oQtladQ.jpg", link: "https://mp.weixin.qq.com/s/MABiNyLpm6NiuG7oQtladQ" },
  { src: "/assets/design/rollup/https-::mp.weixin.qq.com:s:mcYjjVn9W0_1cEn7gE_8Fg.jpg", link: "https://mp.weixin.qq.com/s/mcYjjVn9W0_1cEn7gE_8Fg" },
  { src: "/assets/design/rollup/https-::mp.weixin.qq.com:s:pbS7buULDOM0cQFxOSfiRA.png", link: "https://mp.weixin.qq.com/s/pbS7buULDOM0cQFxOSfiRA" },
  { src: "/assets/design/rollup/https-:mp.weixin.qq.com:s:Y7ZJ1ONSOma2OgJd4aVeJA.jpg", link: "https://mp.weixin.qq.com/s/Y7ZJ1ONSOma2OgJd4aVeJA" },
];

const DESIGN_ITEMS = DESIGN_ITEM_ASSETS.map((asset, i) => ({
  ...asset,
  label: content.design.items[i].label,
}));

// Responsive height shared by all three media items (book, video, brochure)
const MEDIA_H = "clamp(180px, 22vw, 254px)";
// Widths maintain natural aspect ratios: book=181:254, brochure=360:254
const BOOK_W = "clamp(128px, 15.7vw, 181px)";
const BROCHURE_W = "clamp(255px, 31.2vw, 360px)";
// Gallery item height
const GALLERY_H = "clamp(160px, 18vw, 220px)";

export default function DesignSection() {
  const openLightbox = useLightbox();
  return (
    <section id="design" className="section-design" style={{ padding: "clamp(20px, 4vw, 50px) 0" }}>
      <div style={{ padding: "0 6vw", marginBottom: "32px" }}>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "#6aaa90",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          {content.design.sectionLabel}
        </p>

        <div className="design-media-grid">
          {/* ── Card 1: Book ── */}
          <div className="design-media-card">
            <BookFlip
              frontSrc="/assets/design/book/穿越烽火到和平-封面.png"
              backSrc="/assets/design/book/穿越烽火到和平-封底.png"
              width={BOOK_W}
              height={MEDIA_H}
              tiltY={-12}
              tiltX={2}
              autoInterval={5000}
            />
            <div className="design-media-card-text" style={{ paddingTop: "40px", width: BOOK_W }}>
              <h2
                className="font-serif"
                style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)", fontWeight: 400, lineHeight: 1.3, color: "#2e2e2e", marginBottom: "10px" }}
              >
                {content.design.book.title}
              </h2>
              <p style={{ fontSize: "12px", color: "#9a9aaa", lineHeight: 1.7 }}>{content.design.book.desc}</p>
            </div>
          </div>

          {/* ── Card 2: Video ── */}
          <div className="design-media-card">
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                lineHeight: 0,
                display: "inline-block",
              }}
            >
              <video
                className="design-media-card-video"
                src="/assets/design/video/video.MP4"
                poster="/assets/design/video/cover.JPG"
                style={{ height: MEDIA_H, width: "auto", display: "block" }}
                controls
                playsInline
                loop
              />
            </div>
            <div className="design-media-card-text" style={{ paddingTop: "40px" }}>
              <h2
                className="font-serif"
                style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)", fontWeight: 400, lineHeight: 1.3, color: "#2e2e2e", marginBottom: "10px" }}
              >
                {content.design.video.title}
              </h2>
              <p style={{ fontSize: "12px", color: "#9a9aaa", lineHeight: 1.7 }}>{content.design.video.desc}</p>
            </div>
          </div>

          {/* ── Card 3: Brochure ── */}
          <div className="design-media-card">
            <TiltedCarousel
              images={BROCHURE_PAGES}
              width={BROCHURE_W}
              height={MEDIA_H}
              tiltY={10}
              tiltX={2}
            />
            <div className="design-media-card-text" style={{ paddingTop: "40px", width: BROCHURE_W }}>
              <h2
                className="font-serif"
                style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)", fontWeight: 400, lineHeight: 1.3, color: "#2e2e2e", marginBottom: "10px" }}
              >
                {content.design.brochure.title}
              </h2>
              <p style={{ fontSize: "12px", color: "#9a9aaa", lineHeight: 1.7 }}>{content.design.brochure.desc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery divider */}
      <div style={{ padding: "0 6vw" }}>
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(60,60,60,0.12)",
            margin: "0 0 32px",
          }}
        />
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.1em",
            color: "#a0a0b0",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          {content.design.galleryLabel}
        </p>
      </div>

      {/* Design gallery — fills full width, single row */}
      <div
        className="thin-scrollbar-h"
        style={{
          display: "flex",
          gap: "2vw",
          padding: "0 6vw 32px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
      >
        {DESIGN_ITEMS.map((item, i) => (
          <div
            key={i}
            style={{ flexShrink: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.label}
              onClick={() => openLightbox(item.src)}
              style={{
                height: GALLERY_H,
                width: "auto",
                borderRadius: "8px",
                display: "block",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                objectFit: "contain",
                cursor: "zoom-in",
              }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <p
              style={{
                marginTop: "6px",
                fontSize: "10px",
                color: "#8a8a9a",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer"
                  style={{ color: "#c4903a", textDecoration: "none" }}>
                  {item.label} ↗
                </a>
              ) : item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
