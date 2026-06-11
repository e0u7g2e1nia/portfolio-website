"use client";
import { useState } from "react";

export default function TiltedCarousel({
  images,
  width,
  height,
  tiltY = -10,
  tiltX = 2,
  label,
}: {
  images: string[];
  width: number | string;
  height: number | string;
  tiltY?: number;
  tiltX?: number;
  label?: string;
}) {
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % images.length);
  };

  const btnBase: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(255,255,255,0.88)",
    border: "none",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    zIndex: 2,
  };

  return (
    <div style={{ flexShrink: 0, width, filter: "drop-shadow(6px 12px 28px rgba(0,0,0,0.13))" }}>
      <div style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}>
        <div
          style={{
            width,
            height,
            transform: `rotateY(${tiltY}deg) rotateX(${tiltX}deg)`,
            transformStyle: "preserve-3d",
            boxShadow: "none",
            borderRadius: "4px",
            overflow: "hidden",
            position: "relative",
            cursor: "pointer",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[idx]}
            alt={`${label ?? ""} p.${idx + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />

          {hovered && images.length > 1 && (
            <>
              <button onClick={prev} style={{ ...btnBase, left: "10px" }}>
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none">
                  <polygon points="8,1 1,6.5 8,12" fill="#3c3c3c" />
                </svg>
              </button>
              <button onClick={next} style={{ ...btnBase, right: "10px" }}>
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none">
                  <polygon points="1,1 8,6.5 1,12" fill="#3c3c3c" />
                </svg>
              </button>
            </>
          )}

          {images.length > 1 && (
            <div
              style={{
                position: "absolute",
                bottom: "8px",
                right: "10px",
                fontSize: "10px",
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "0.06em",
                textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                pointerEvents: "none",
              }}
            >
              {idx + 1} / {images.length}
            </div>
          )}
        </div>
      </div>

      {label && (
        <p
          style={{
            marginTop: "10px",
            fontSize: "11px",
            color: "#a0a0b0",
            textAlign: "center",
            letterSpacing: "0.04em",
          }}
        >
          {label}
        </p>
      )}
    </div>
  );
}
