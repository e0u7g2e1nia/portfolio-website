"use client";
import PhoneMockup from "@/components/ui/PhoneMockup";
import ImageCarousel from "@/components/ui/ImageCarousel";
import { content } from "@/data/content";
import { useLightbox } from "@/components/ui/Lightbox";

const MANCRAFT_SCREENS = [1, 2, 3, 4, 5, 6, 7, 8];
const YISHU_SCREENS = [1, 2, 3, 4, 5];
const LOREAL_SLIDE_SRCS = [1, 2, 3].map(
  (n) => `/assets/product/loreal/slides/page-${String(n).padStart(2, "0")}.png`
);

export default function ProductSection() {
  const openLightbox = useLightbox();
  return (
    <section id="product" className="section-product" style={{ padding: "clamp(20px, 4vw, 50px) 6vw" }}>
      <p
        style={{
          fontSize: "11px",
          letterSpacing: "0.15em",
          color: "#5a5a6a",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        {content.product.sectionLabel}
      </p>

      {/* Top: description + ManCraft phone mockups */}
      <div
        style={{
          display: "flex",
          gap: "4vw",
          alignItems: "flex-start",
          flexWrap: "wrap",
          marginBottom: "24px",
        }}
      >
        {/* Left: description */}
        <div style={{ flex: "0 0 260px" }}>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "#2e2e2e",
              marginBottom: "8px",
            }}
          >
            {content.product.loreal.title}
          </h2>
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(1rem, 1.6vw, 1.3rem)",
              fontStyle: "italic",
              color: "#7a7a8a",
              marginBottom: "20px",
            }}
          >
            {content.product.loreal.titleEn}
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#6a6a7a",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            {content.product.loreal.desc}
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {content.product.loreal.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.05em",
                  padding: "4px 12px",
                  border: "1px solid rgba(60,60,60,0.2)",
                  borderRadius: "100px",
                  color: "#6a6a7a",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: ManCraft phone mockups horizontal scroll */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: "#9a9aaa",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            {content.product.loreal.manchraftLabel}
          </p>
          <div
            className="thin-scrollbar-h"
            style={{
              display: "flex",
              gap: "12px",
              overflowX: "auto",
              paddingBottom: "6px",
            }}
          >
            {MANCRAFT_SCREENS.map((n) => {
              const src = `/assets/product/mancraft/ManCraft-${n}.png`;
              return (
                <PhoneMockup
                  key={n}
                  src={src}
                  alt={`ManCraft 页面 ${n}`}
                  height="clamp(140px, 20vw, 280px)"
                  onClick={() => openLightbox(src)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom: PPT + Video — single row, fills full width */}
      <div
        style={{
          display: "flex",
          gap: "2vw",
          flexWrap: "nowrap",
          overflowX: "auto",
          alignItems: "stretch",
        }}
      >
        {/* PPT slides */}
        <div style={{ flex: 1, minWidth: "200px" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: "#9a9aaa",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            {content.product.loreal.pptLabel}
          </p>
          <div
            style={{
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <ImageCarousel images={LOREAL_SLIDE_SRCS} aspectRatio="16/9" objectFit="contain" />
          </div>
        </div>

        {/* Video */}
        <div style={{ flex: 1, minWidth: "200px" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: "#9a9aaa",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            {content.product.loreal.videoLabel}
          </p>
          <div
            style={{
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: "12px",
              overflow: "hidden",
              background: "rgba(60,60,60,0.06)",
            }}
          >
            <video
              src="/assets/product/loreal/欧莱雅商赛-视频.mov"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              controls
              playsInline
            />
          </div>
        </div>
      </div>

      {/* 忆述光华小程序 — left: phones, right: text */}
      <div
        style={{
          display: "flex",
          gap: "4vw",
          alignItems: "flex-start",
          flexWrap: "wrap",
          paddingTop: "32px",
          borderTop: "1px solid rgba(60,60,60,0.08)",
        }}
      >
        {/* Left: phone mockups */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: "#9a9aaa",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            {content.product.yishu.label}
          </p>
          <div
            className="thin-scrollbar-h"
            style={{
              display: "flex",
              gap: "12px",
              overflowX: "auto",
              paddingBottom: "6px",
            }}
          >
            {YISHU_SCREENS.map((n) => {
              const src = `/assets/product/yishu-guanghua/忆述光华小程序-${n}.png`;
              return (
                <PhoneMockup
                  key={n}
                  src={src}
                  alt={`忆述光华小程序 页面 ${n}`}
                  height="clamp(140px, 20vw, 280px)"
                  onClick={() => openLightbox(src)}
                />
              );
            })}
          </div>
        </div>

        {/* Right: text */}
        <div style={{ flex: 1, minWidth: "220px" }}>
          {/* Title + subtitle 左，QR code 居中在右侧剩余空间 */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <div>
              <h2
                className="font-serif"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: "#2e2e2e",
                  margin: 0,
                  marginBottom: "6px",
                }}
              >
                {content.product.yishu.title}
              </h2>
              <p
                className="font-serif"
                style={{
                  fontSize: "clamp(1rem, 1.6vw, 1.3rem)",
                  fontStyle: "italic",
                  color: "#7a7a8a",
                  margin: 0,
                }}
              >
                {content.product.yishu.titleSub}
              </p>
            </div>
            {/* 剩余空间，二维码居中其中 */}
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/product/yishu-guanghua/小程序二维码.PNG"
                alt="忆述光华小程序二维码"
                style={{ width: "clamp(56px, 7vw, 80px)", height: "clamp(56px, 7vw, 80px)", objectFit: "contain" }}
              />
            </div>
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "#6a6a7a",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            {content.product.yishu.desc}
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {content.product.yishu.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.05em",
                  padding: "4px 12px",
                  border: "1px solid rgba(60,60,60,0.2)",
                  borderRadius: "100px",
                  color: "#6a6a7a",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
