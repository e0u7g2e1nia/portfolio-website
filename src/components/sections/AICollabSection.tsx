"use client";
import ImageCarousel from "@/components/ui/ImageCarousel";
import { content } from "@/data/content";

const AI_GENERATED = Array.from(
  { length: 13 },
  (_, i) =>
    `/assets/ai-collab/ai-generated/final-image-${String(i).padStart(2, "0")}.png`
);

const PROJECTS = [
  {
    ...content.aiCollab.projects[0],
    link: "https://unfinished-entry.vercel.app/",
    images: [
      "/assets/ai-collab/game-clip-1.gif",
      "/assets/ai-collab/game-clip-2.gif",
      "/assets/ai-collab/game-clip-3.gif",
    ],
    mediaLabel: "",
  },
  {
    ...content.aiCollab.projects[1],
    link: "/workflow",
    images: ["/assets/ai-collab/workflow/封面图.JPG"],
    mediaLabel: "",
  },
  {
    ...content.aiCollab.projects[2],
    link: "",
    images: AI_GENERATED,
    mediaLabel: "",
  },
];

export default function AICollabSection() {
  return (
    <section id="ai-collab" style={{ padding: "clamp(20px, 4vw, 50px) 6vw" }}>
      <p
        style={{
          fontSize: "11px",
          letterSpacing: "0.15em",
          color: "#c4903a",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        {content.aiCollab.sectionLabel}
      </p>

      <div style={{ display: "flex", gap: "4vw", alignItems: "flex-end", flexWrap: "wrap", marginBottom: "40px" }}>
        <h2
          className="font-serif"
          style={{
            fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            color: "#2e2e2e",
          }}
        >
          {content.aiCollab.title}
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "#6a6a7a",
            lineHeight: 1.8,
            flex: 1,
          }}
        >
          {content.aiCollab.desc}
        </p>
      </div>

      {/* Cards — single row, fill full width, scroll on small screens */}
      <div
        style={{
          display: "flex",
          gap: "2vw",
          flexWrap: "nowrap",
          overflowX: "auto",
          paddingBottom: "8px",
          alignItems: "stretch",
        }}
      >
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            style={{
              flex: 1,
              minWidth: "240px",
              flexShrink: 0,
              background: "rgba(60,60,60,0.04)",
              borderRadius: "12px",
              border: "1px solid rgba(60,60,60,0.07)",
              overflow: "hidden",
            }}
          >
            {p.images.length > 0 ? (
              <ImageCarousel images={p.images} aspectRatio="16/9" objectFit="cover" autoPlay autoPlayInterval={4000} />
            ) : (
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  background: "rgba(60,60,60,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  color: "#b0b0b8",
                  letterSpacing: "0.06em",
                }}
              >
                {p.mediaLabel}
              </div>
            )}

            <div style={{ padding: "16px 20px 20px" }}>
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  color: "#c4903a",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                {p.tag}
              </span>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#2e2e2e",
                  marginBottom: "6px",
                }}
              >
                {p.title}
              </p>
              <p style={{ fontSize: "13px", color: "#8a8a9a", lineHeight: 1.6, marginBottom: "12px" }}>
                {p.desc}
              </p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "12px", color: "#c4903a", textDecoration: "none", letterSpacing: "0.04em" }}
                >
                  查看项目 →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
