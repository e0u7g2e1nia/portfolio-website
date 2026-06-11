"use client";

const NAV_ITEMS = [
  { label: "AI 共创", href: "ai-collab" },
  { label: "产品", href: "product" },
  { label: "设计", href: "design" },
  { label: "摄影", href: "photography" },
  { label: "自媒体", href: "social" },
];

export default function Navigation() {
  const handleNavClick = (_label: string, href: string) => {
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: "20px",
        right: "28px",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        gap: "4px",
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRadius: "100px",
        padding: "8px 20px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
        border: "1px solid rgba(255,255,255,0.6)",
      }}
    >
      {NAV_ITEMS.map((item) => (
        <button
          key={item.label}
          onClick={() => handleNavClick(item.label, item.href)}
          style={{
            background: "none",
            border: "none",
            padding: "4px 10px",
            fontSize: "12.5px",
            letterSpacing: "0.04em",
            color: "#6a6a7a",
            fontWeight: 400,
            fontFamily: "'PingFang SC', sans-serif",
            transition: "color 0.2s",
            borderRadius: "100px",
          }}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
