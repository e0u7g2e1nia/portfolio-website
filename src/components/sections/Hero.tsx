import Image from "next/image";
import OrbitTrack from "@/components/ui/OrbitTrack";
import { content } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-hero"
      style={{
        minHeight: "clamp(500px, 80svh, 900px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 6vw",
      }}
    >
      {/* top: title + photo */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "2rem",
          marginBottom: "0",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 6rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "#2e2e2e",
            letterSpacing: "-0.02em",
          }}
        >
          {content.hero.name}
          <br />
          <span style={{ fontStyle: "italic", color: "#5a5a6a" }}>
            {content.hero.nameEn}
          </span>
        </h1>

        {/* Photo — constrained width on mobile to prevent overflow */}
        <div
          style={{
            flexShrink: 1,
            maxWidth: "clamp(110px, 38vw, 260px)",
            maxHeight: "42vh",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Image
            src="/assets/hero/DSC01554.jpg"
            alt="吴沂铮"
            width={260}
            height={390}
            style={{
              maxHeight: "42vh",
              maxWidth: "100%",
              width: "auto",
              borderRadius: "4px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
              display: "block",
              objectFit: "contain",
            }}
            priority
          />
        </div>
      </div>

      {/* Orbit track */}
      <div style={{ position: "relative", zIndex: 1, margin: "2rem 0 1.5rem" }}>
        <OrbitTrack />
      </div>

      {/* below-line: up arrow above both text items */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Up arrow — above both text items, right-aligned */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "6px" }}>
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="6" y1="14" x2="6" y2="1" stroke="#aaaaaa" strokeWidth="1.2" strokeLinecap="round"/>
            <polyline points="2,5 6,1 10,5" stroke="#aaaaaa" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>

        {/* Row: intro left, tap to explore right — same height */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "clamp(12px, 1.4vw, 15px)",
              color: "#6a6a7a",
              letterSpacing: "0.04em",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {content.hero.tagline}
          </p>
          <p
            style={{
              fontSize: "clamp(11px, 1.2vw, 13px)",
              color: "#aaaaaa",
              letterSpacing: "0.06em",
              fontStyle: "italic",
              margin: 0,
              flexShrink: 0,
            }}
          >
            tap to explore
          </p>
        </div>
      </div>

      {/* scroll to explore — pinned to bottom of hero, equidistant from text row and next section */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontSize: "clamp(11px, 1.2vw, 13px)",
            color: "#aaaaaa",
            letterSpacing: "0.06em",
            fontStyle: "italic",
            margin: 0,
          }}
        >
          scroll to explore
        </p>
        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="6" y1="1" x2="6" y2="14" stroke="#aaaaaa" strokeWidth="1.2" strokeLinecap="round"/>
          <polyline points="2,11 6,15 10,11" stroke="#aaaaaa" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>
    </section>
  );
}
