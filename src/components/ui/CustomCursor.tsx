"use client";
import { useEffect, useRef } from "react";
import { useLightboxOpen } from "@/components/ui/Lightbox";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);
  const lightboxOpen = useLightboxOpen();

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const onEnter = () => {
      isHovering.current = true;
      el.style.width = "28px";
      el.style.height = "28px";
      el.style.opacity = "0.85";
    };

    const onLeave = () => {
      isHovering.current = false;
      el.style.width = "18px";
      el.style.height = "18px";
      el.style.opacity = "1";
    };

    document.addEventListener("mousemove", move);

    const clickables = document.querySelectorAll("a, button, [role='button']");
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const observer = new MutationObserver(() => {
      const all = document.querySelectorAll("a, button, [role='button']");
      all.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        background: "radial-gradient(circle, #ffca79 0%, rgba(255, 208, 88, 0) 100%)",
        filter: "blur(3px)",
        pointerEvents: "none",
        zIndex: 10000,
        opacity: 1,
        transform: "translate(-100px, -100px)",
        transition: "width 0.2s ease, height 0.2s ease",
        marginLeft: "-9px",
        marginTop: "-9px",
        mixBlendMode: lightboxOpen ? "screen" : "multiply",
      }}
    />
  );
}
