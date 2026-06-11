"use client";
import { socialPosts } from "@/data/social-posts";
import { content } from "@/data/content";

function filenameToUrl(filename: string): string {
  const name = filename.trim().replace(/\.[^.]+$/, "");
  const url = name.replace("-::", "://").replace(/:(?!\/\/)/g, "/");
  return url.startsWith("http://") ? url.replace("http://", "https://") : url;
}

function coverToSrc(cover: string): string {
  return `/assets/social/cover/${encodeURIComponent(cover.trim())}`;
}

export default function SocialSection() {
  return (
    <section id="social" className="section-social" style={{ padding: "clamp(20px, 4vw, 50px) 6vw" }}>
      <p
        style={{
          fontSize: "11px",
          letterSpacing: "0.15em",
          color: "#c47a7a",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        {content.social.sectionLabel}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "24px",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
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
            {content.social.title}
          </h2>
          <p
            style={{
              fontSize: "13px",
              color: "#8a8a9a",
              lineHeight: 1.7,
              maxWidth: "320px",
            }}
          >
            {content.social.desc}
          </p>
        </div>

        <div style={{ textAlign: "right" }}>
          <p
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 700,
              color: "#2e2e2e",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            —
          </p>
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.12em",
              color: "#a0a0b0",
              textTransform: "uppercase",
              marginTop: "4px",
            }}
          >
            {content.social.statsLabel}
          </p>
        </div>
      </div>

      {/* Posts — single row, fills full width, horizontal scroll on small screens */}
      <div
        style={{
          display: "flex",
          gap: "2vw",
          flexWrap: "nowrap",
          overflowX: "auto",
          alignItems: "flex-start",
          paddingBottom: "8px",
        }}
      >
        {socialPosts.map((post) => {
          const url = filenameToUrl(post.filename);
          const coverSrc = coverToSrc(post.cover);
          return (
            <a
              key={post.filename}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: "rgba(60,60,60,0.05)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  lineHeight: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "none";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coverSrc}
                  alt={post.title}
                  style={{
                    height: "clamp(160px, 18vw, 220px)",
                    width: "auto",
                    display: "block",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "8px",
                  padding: "0 2px",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.04em",
                    color: "#3c3c3c",
                    textTransform: "uppercase",
                  }}
                >
                  {post.label}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "#8a8a9a",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <HeartIcon />
                  {post.likes.toLocaleString()}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function HeartIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#c47a7a" }}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}
