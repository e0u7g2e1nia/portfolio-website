"use client";
import { createContext, useContext, useState, useCallback, useEffect } from "react";

type LightboxCtx = { open: (src: string) => void; isOpen: boolean };
const Ctx = createContext<LightboxCtx>({ open: () => {}, isOpen: false });

export function useLightbox() { return useContext(Ctx).open; }
export function useLightboxOpen() { return useContext(Ctx).isOpen; }

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [src, setSrc] = useState<string | null>(null);
  const open = useCallback((s: string) => setSrc(s), []);
  const close = useCallback(() => setSrc(null), []);

  useEffect(() => {
    if (!src) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [src, close]);

  return (
    <Ctx.Provider value={{ open, isOpen: !!src }}>
      {children}
      {src && (
        <div
          className="lightbox-overlay"
          onClick={close}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.88)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw", maxHeight: "90vh",
              objectFit: "contain", borderRadius: "4px",
              boxShadow: "0 8px 48px rgba(0,0,0,0.5)",
            }}
          />
          <button
            className="lightbox-close"
            onClick={close}
            style={{
              position: "absolute", top: "16px", right: "20px",
              background: "none", border: "none",
              color: "rgba(255,255,255,0.8)", fontSize: "32px",
              lineHeight: 1, padding: "4px",
            }}
          >
            ×
          </button>
        </div>
      )}
    </Ctx.Provider>
  );
}
