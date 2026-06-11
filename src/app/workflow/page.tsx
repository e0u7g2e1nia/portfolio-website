"use client";
import { workflowProjects } from "@/data/workflow-projects";
import { useLightbox } from "@/components/ui/Lightbox";

// Extract display caption from image path: strip numeric prefix and extension
function captionFromPath(src: string): string {
  const filename = src.split("/").pop() ?? "";
  const noExt = filename.replace(/\.[^.]+$/, "");
  return noExt.replace(/^\d+[-.]?\d*[-.]?/, "");
}

// All GIFs: same fixed height, natural width (aspect ratio preserved)
const CARD_H = "clamp(260px, 28vw, 350px)";

function GifCard({ src, openLightbox }: { src: string; openLightbox: (s: string) => void }) {
  const caption = captionFromPath(src);
  return (
    <div style={{ flexShrink: 0, textAlign: "center" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={caption}
        onClick={() => openLightbox(src)}
        style={{
          height: CARD_H,
          width: "auto",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          display: "block",
          cursor: "zoom-in",
        }}
      />
      <p style={{
        marginTop: "6px",
        fontSize: "10px",
        color: "#9a9aaa",
        letterSpacing: "0.03em",
        lineHeight: 1.4,
      }}>
        {caption}
      </p>
    </div>
  );
}

// Natural-size card for non-module images (原图尺寸)
function NaturalGifCard({ src, openLightbox }: { src: string; openLightbox: (s: string) => void }) {
  const caption = captionFromPath(src);
  return (
    <div style={{ flexShrink: 0, textAlign: "center" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={caption}
        onClick={() => openLightbox(src)}
        style={{
          maxHeight: "clamp(240px, 50vh, 600px)",
          maxWidth: "90vw",
          width: "auto",
          height: "auto",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          display: "block",
          cursor: "zoom-in",
        }}
      />
      <p style={{
        marginTop: "6px",
        fontSize: "10px",
        color: "#9a9aaa",
        letterSpacing: "0.03em",
        lineHeight: 1.4,
      }}>
        {caption}
      </p>
    </div>
  );
}

export default function WorkflowPage() {
  const openLightbox = useLightbox();

  return (
    <main style={{ padding: "clamp(20px, 4vw, 60px) 6vw", minHeight: "80vh" }}>
      {/* Header */}
      <div style={{ marginBottom: "48px" }}>
        <a
          href="/#ai-collab"
          style={{
            fontSize: "13px",
            color: "#9a9aaa",
            textDecoration: "none",
            letterSpacing: "0.04em",
            display: "inline-block",
            marginBottom: "20px",
          }}
        >
          ← 返回
        </a>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.15em",
          color: "#c4903a",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}>
          Section 01 · AI 共创
        </p>
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.6rem)",
            fontWeight: 400,
            color: "#2e2e2e",
            lineHeight: 1.1,
          }}
        >
          Workflow &amp; Tools
        </h1>
      </div>

      {/* Projects */}
      {workflowProjects.map((project) => (
        <div
          key={project.name}
          style={{
            paddingTop: "48px",
            paddingBottom: "48px",
            borderTop: "1px solid rgba(60,60,60,0.08)",
          }}
        >
          {/* Name + optional icon */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
                fontWeight: 400,
                color: "#2e2e2e",
                lineHeight: 1.2,
              }}
            >
              {project.name}
            </h2>
            {project.icon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.icon}
                alt=""
                style={{ width: "28px", height: "28px", objectFit: "contain", borderRadius: "6px", flexShrink: 0 }}
              />
            )}
          </div>

          {/* Modules → flatten all images into one horizontal scroll row */}
          {project.modules && (
            <div
              className="thin-scrollbar-h"
              style={{ display: "flex", gap: "12px", overflowX: "auto", paddingBottom: "4px", marginBottom: "28px" }}
            >
              {project.modules.flatMap((mod) => mod.images).map((src) => (
                <GifCard key={src} src={src} openLightbox={openLightbox} />
              ))}
            </div>
          )}

          {/* Single image row — natural size */}
          {!project.modules && project.images && project.images.length > 0 && (
            <div
              className="thin-scrollbar-h"
              style={{ display: "flex", gap: "16px", overflowX: "auto", paddingBottom: "4px", marginBottom: "28px", alignItems: "flex-end" }}
            >
              {project.images.map((src) => (
                <NaturalGifCard key={src} src={src} openLightbox={openLightbox} />
              ))}
            </div>
          )}

          {/* Description — full width, wraps naturally */}
          <div style={{ marginBottom: "20px" }}>
            {project.description.split("\n").map((line, j) => (
              <p
                key={j}
                style={{
                  fontSize: "14px",
                  color: "#6a6a7a",
                  lineHeight: 1.8,
                  marginBottom: j < project.description.split("\n").length - 1 ? "8px" : 0,
                  wordBreak: "break-word",
                  overflowWrap: "anywhere",
                }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Link button */}
          {project.link && (
            <a
              href={project.link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                fontSize: "12px",
                letterSpacing: "0.06em",
                color: "#c4903a",
                textDecoration: "none",
                border: "1px solid rgba(196,144,58,0.4)",
                padding: "7px 18px",
                borderRadius: "100px",
              }}
            >
              {project.link.label} →
            </a>
          )}
        </div>
      ))}
    </main>
  );
}
