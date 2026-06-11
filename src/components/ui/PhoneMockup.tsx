export default function PhoneMockup({
  src,
  alt,
  height = 260,
  onClick,
}: {
  src: string;
  alt: string;
  height?: number | string;
  onClick?: () => void;
}) {
  const h = typeof height === "number" ? `${height}px` : height;
  return (
    <div style={{ flexShrink: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onClick={onClick}
        style={{
          height: h,
          width: "auto",
          display: "block",
          cursor: onClick ? "zoom-in" : undefined,
        }}
      />
    </div>
  );
}
