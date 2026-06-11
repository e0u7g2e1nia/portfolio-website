"use client";
import { useEffect, useState } from "react";
import { useLightbox } from "@/components/ui/Lightbox";

export default function ImageCarousel({
  images,
  aspectRatio = "16/9",
  objectFit = "contain",
  autoPlay = false,
  autoPlayInterval = 3000,
}: {
  images: string[];
  aspectRatio?: string;
  objectFit?: "cover" | "contain";
  autoPlay?: boolean;
  autoPlayInterval?: number;
}) {
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const openLightbox = useLightbox();

  useEffect(() => {
    if (!autoPlay || images.length <= 1 || hovered) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), autoPlayInterval);
    return () => clearInterval(id);
  }, [autoPlay, autoPlayInterval, images.length, hovered]);

  if (images.length === 0) return null;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % images.length);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio,
        overflow: "hidden",
        background: "rgba(0,0,0,0.04)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images[idx]}
        alt=""
        onClick={() => openLightbox(images[idx])}
        style={{ width: "100%", height: "100%", objectFit, display: "block", cursor: "zoom-in" }}
      />

      {/* Arrows — visible on hover */}
      {hovered && images.length > 1 && (
        <>
          <button
            onClick={prev}
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.88)",
              border: "none",
              borderRadius: "50%",
              width: "34px",
              height: "34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              zIndex: 2,
            }}
          >
            {/* Left-pointing filled triangle */}
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
              <polygon points="9,1 1,7 9,13" fill="#3c3c3c" />
            </svg>
          </button>

          <button
            onClick={next}
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.88)",
              border: "none",
              borderRadius: "50%",
              width: "34px",
              height: "34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              zIndex: 2,
            }}
          >
            {/* Right-pointing filled triangle */}
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
              <polygon points="1,1 9,7 1,13" fill="#3c3c3c" />
            </svg>
          </button>
        </>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            right: "12px",
            fontSize: "11px",
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.06em",
            textShadow: "0 1px 3px rgba(0,0,0,0.4)",
            pointerEvents: "none",
          }}
        >
          {idx + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
