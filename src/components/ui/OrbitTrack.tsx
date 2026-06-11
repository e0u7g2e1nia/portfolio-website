"use client";
import { useState, useCallback, useRef } from "react";

const PATH = "M 0 55 C 350 55, 500 25, 700 40 S 1050 60, 1200 38";

const PLANETS = [
  { id: "ai-collab",   label: "AI 共创", color: "#c9a882", begin: "0s" },
  { id: "product",     label: "产品",     color: "#9eb8c4", begin: "-2.4s" },
  { id: "social",      label: "自媒体",   color: "#c49ea8", begin: "-4.8s" },
  { id: "design",      label: "设计",     color: "#9ac4b2", begin: "-7.2s" },
  { id: "photography", label: "摄影",     color: "#b8a8c9", begin: "-9.6s" },
];

export default function OrbitTrack() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tapCountRef = useRef<Record<string, number>>({});

  const handleMouseEnter = useCallback((id: string) => {
    setHoveredId(id);
    svgRef.current?.pauseAnimations();
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredId(null);
    svgRef.current?.unpauseAnimations();
  }, []);

  const handleClick = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleTouchEnd = useCallback((id: string, e: React.TouchEvent) => {
    e.preventDefault();
    const count = (tapCountRef.current[id] ?? 0) + 1;
    tapCountRef.current[id] = count;
    if (count === 1) {
      setHoveredId(id);
      svgRef.current?.pauseAnimations();
      setTimeout(() => {
        if (tapCountRef.current[id] === 1) {
          tapCountRef.current[id] = 0;
          setHoveredId(null);
          svgRef.current?.unpauseAnimations();
        }
      }, 2500);
    } else {
      tapCountRef.current[id] = 0;
      setHoveredId(null);
      svgRef.current?.unpauseAnimations();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes orbit-pulse {
          0%, 100% { opacity: 0.85; }
          50%       { opacity: 1; }
        }
        .orbit-dot { animation: orbit-pulse 2.4s ease-in-out infinite; }
      `}</style>
      <svg
        ref={svgRef}
        viewBox="0 0 1200 80"
        fill="none"
        style={{ width: "100%", display: "block", overflow: "visible" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path id="orbit-path" d={PATH} />
        </defs>

        <use href="#orbit-path" stroke="#9a9aaa" strokeWidth="0.75" fill="none" strokeLinecap="round" />
        <circle cx="2" cy="55" r="2.5" fill="#9a9aaa" opacity="0.4" />
        <circle cx="1198" cy="38" r="2.5" fill="#9a9aaa" opacity="0.4" />

        {PLANETS.map((planet) => {
          const isHovered = hoveredId === planet.id;
          return (
            <g
              key={planet.id}
              onClick={() => handleClick(planet.id)}
              onMouseEnter={() => handleMouseEnter(planet.id)}
              onMouseLeave={handleMouseLeave}
              onTouchEnd={(e) => handleTouchEnd(planet.id, e)}
              style={{ cursor: "pointer" } as React.CSSProperties}
            >
              {/* SMIL animateMotion with path attr: calcMode="linear" guarantees arc-length equal spacing */}
              {/* @ts-ignore */}
              <animateMotion dur="12s" repeatCount="indefinite" calcMode="linear" begin={planet.begin} path={PATH} />

              <circle r={18} fill="transparent" />

              <circle
                r={isHovered ? 14 : 10}
                fill={planet.color}
                className="orbit-dot"
                style={{
                  filter: `drop-shadow(0 0 ${isHovered ? 10 : 6}px ${planet.color})`,
                } as React.CSSProperties}
              />

              {isHovered && (
                <text
                  x="0"
                  y="-18"
                  textAnchor="middle"
                  fontSize="13"
                  fill={planet.color}
                  fontFamily="'PingFang SC', 'Noto Sans SC', sans-serif"
                  letterSpacing="0.5"
                  style={{ pointerEvents: "none" } as React.CSSProperties}
                >
                  {planet.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </>
  );
}
