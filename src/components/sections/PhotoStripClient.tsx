"use client";
import { useLightbox } from "@/components/ui/Lightbox";

type Photo = { src: string; natW: number; natH: number };

const STRIP_H_CSS = "clamp(160px, 22vw, 300px)";

export default function PhotoStripClient({ items }: { items: Photo[] }) {
  const openLightbox = useLightbox();
  if (items.length === 0) return null;

  return (
    <div className="photo-gallery-outer" style={{ overflow: "hidden" }}>
      <div
        className="photo-strip"
        style={{
          display: "flex",
          gap: "12px",
          paddingRight: "12px",
          alignItems: "center",
          width: "max-content",
        }}
      >
        {items.map((photo, i) => (
          <div
            key={i}
            onClick={() => openLightbox(encodeURI(photo.src))}
            style={{
              flexShrink: 0,
              height: STRIP_H_CSS,
              aspectRatio: `${photo.natW} / ${photo.natH}`,
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
              lineHeight: 0,
              cursor: "zoom-in",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={encodeURI(photo.src)}
              alt=""
              width={photo.natW}
              height={photo.natH}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
