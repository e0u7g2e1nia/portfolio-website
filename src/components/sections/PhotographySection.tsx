import { readdirSync } from "fs";
import { join } from "path";
import sharp from "sharp";
import { content } from "@/data/content";
import PhotoStripClient from "@/components/sections/PhotoStripClient";

type Photo = {
  src: string;
  type: "portrait" | "landscape";
  natW: number;
  natH: number;
};

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function readPhotos(dir: string, type: "portrait" | "landscape"): Promise<Photo[]> {
  const base = join(process.cwd(), "public/assets/photography", dir);
  const files = readdirSync(base).filter(
    (f) => !f.startsWith(".") && /\.(jpg|jpeg|png|webp)$/i.test(f)
  );
  return Promise.all(
    files.map(async (f) => {
      const { width = 1, height = 1 } = await sharp(join(base, f)).metadata();
      return {
        src: `/assets/photography/${dir}/${f}`,
        type,
        natW: width,
        natH: height,
      };
    })
  );
}

async function buildGallery(): Promise<Photo[]> {
  try {
    const [portraits, landscapes] = await Promise.all([
      readPhotos("portrait", "portrait"),
      readPhotos("landscape", "landscape"),
    ]);

    const sp = shuffleArray(portraits);
    const sl = shuffleArray(landscapes);

    const result: Photo[] = [];
    const maxGroups = Math.min(Math.floor(sp.length / 3), sl.length);
    for (let g = 0; g < maxGroups; g++) {
      result.push(sp[g * 3], sp[g * 3 + 1], sp[g * 3 + 2], sl[g]);
    }
    return result;
  } catch {
    return [];
  }
}

// Responsive height — CSS clamp value, not a pixel constant
const STRIP_H_CSS = "clamp(160px, 22vw, 300px)";

export default async function PhotographySection() {
  const photos = await buildGallery();
  const items = photos.length > 0 ? [...photos, ...photos] : [];

  return (
    <section id="photography" style={{ padding: "clamp(20px, 4vw, 50px) 0 clamp(20px, 4vw, 50px) 6vw", overflow: "hidden" }}>
      <div style={{ paddingRight: "6vw", marginBottom: "40px" }}>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "#5a9a8a",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          {content.photography.sectionLabel}
        </p>
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
          {content.photography.title}
        </h2>
        <p style={{ fontSize: "13px", color: "#8a8a9a", lineHeight: 1.7 }}>
          {content.photography.desc}
        </p>
      </div>

      {items.length === 0 ? (
        <p style={{ padding: "0 6vw", color: "#b0b0b8", fontSize: "13px" }}>
          摄影作品待上传
        </p>
      ) : (
        <div>
          <PhotoStripClient items={items.map(p => ({ src: p.src, natW: p.natW, natH: p.natH }))} />
        </div>
      )}
    </section>
  );
}
