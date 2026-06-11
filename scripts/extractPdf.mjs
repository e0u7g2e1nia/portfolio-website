import { createCanvas } from 'canvas';
import { readFileSync, mkdirSync } from 'fs';
import { join, resolve } from 'path';
import { createWriteStream } from 'fs';

const root = resolve(new URL('.', import.meta.url).pathname, '..');
const pdfPath = join(root, 'public/assets/product/loreal/欧莱雅商赛-PPT.pdf');
const outDir = join(root, 'public/assets/product/loreal/slides');
mkdirSync(outDir, { recursive: true });

// pdfjs-dist Node.js usage
const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  '../node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs',
  import.meta.url
).href;

const data = new Uint8Array(readFileSync(pdfPath));
const loadingTask = pdfjsLib.getDocument({
  data,
  cMapUrl: join(root, 'node_modules/pdfjs-dist/cmaps/'),
  cMapPacked: true,
  standardFontDataUrl: join(root, 'node_modules/pdfjs-dist/standard_fonts/'),
  canvasFactory: {
    create(width, height) {
      const canvas = createCanvas(width, height);
      return { canvas, context: canvas.getContext('2d') };
    },
    reset(ctx, width, height) {
      ctx.canvas.width = width;
      ctx.canvas.height = height;
    },
    destroy(ctx) {
      ctx.canvas.width = 0;
      ctx.canvas.height = 0;
    },
  },
  disableFontFace: true,
  useSystemFonts: true,
});

const pdf = await loadingTask.promise;
console.log(`PDF has ${pdf.numPages} pages`);

for (let i = 1; i <= pdf.numPages; i++) {
  const page = await pdf.getPage(i);
  const scale = 2.0;
  const viewport = page.getViewport({ scale });
  const canvas = createCanvas(viewport.width, viewport.height);
  const ctx = canvas.getContext('2d');

  await page.render({ canvasContext: ctx, viewport }).promise;

  const outPath = join(outDir, `page-${String(i).padStart(2, '0')}.png`);
  const stream = canvas.createPNGStream();
  const out = createWriteStream(outPath);
  await new Promise((resolve, reject) => {
    stream.pipe(out);
    out.on('finish', resolve);
    out.on('error', reject);
  });

  console.log(`✓ Page ${i}/${pdf.numPages} → ${outPath}`);
}
console.log('PDF extraction complete.');
