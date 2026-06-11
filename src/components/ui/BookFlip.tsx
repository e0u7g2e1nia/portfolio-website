"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function BookFlip({
  frontSrc,
  backSrc,
  width = 240,
  height = 336,
  tiltY = -12,
  tiltX = 2,
  autoInterval = 5000,
}: {
  frontSrc: string;
  backSrc: string;
  width?: number | string;
  height?: number | string;
  tiltY?: number;
  tiltX?: number;
  autoInterval?: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setFlipped((v) => !v);
    }, autoInterval);
  }, [autoInterval]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleClick = () => {
    setFlipped((v) => !v);
    startTimer();
  };

  const sizesValue = typeof width === "number" ? `${width}px` : "30vw";

  return (
    <div
      onClick={handleClick}
      title={flipped ? "点击查看封面" : "点击查看封底"}
      style={{ width, flexShrink: 0, filter: "drop-shadow(6px 12px 28px rgba(0,0,0,0.13))" }}
    >
      <div style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}>
        <div
          style={{
            width,
            height,
            transformStyle: "preserve-3d",
            transform: `rotateY(${tiltY}deg) rotateX(${tiltX}deg)`,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              transformStyle: "preserve-3d",
              transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              boxShadow: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backfaceVisibility: "hidden",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <Image
                src={frontSrc}
                alt="封面"
                fill
                style={{ objectFit: "cover" }}
                sizes={sizesValue}
              />
            </div>

            <div
              style={{
                position: "absolute",
                inset: 0,
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <Image
                src={backSrc}
                alt="封底"
                fill
                style={{ objectFit: "cover" }}
                sizes={sizesValue}
              />
            </div>
          </div>
        </div>
      </div>

      <p
        style={{
          marginTop: "10px",
          fontSize: "11px",
          color: "#a0a0b0",
          textAlign: "center",
          letterSpacing: "0.04em",
        }}
      >
        {flipped ? "↩ 点击查看封面" : "↪ 点击查看封底"}
      </p>
    </div>
  );
}
