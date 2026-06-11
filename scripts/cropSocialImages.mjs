import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'fs';
import { join, resolve } from 'path';

const root = resolve(new URL('.', import.meta.url).pathname, '..');
const srcDir = join(root, 'public/assets/social/posts');
const outDir = join(root, 'public/assets/social/processed');

mkdirSync(outDir, { recursive: true });

// Per-file crop heights keyed by ID suffix; files not matched fall back to 84%
const CROP_HEIGHTS = [
  { id: '3flayD3nTEy.png', height: 300 },  // remove white caption below photo
  { id: '65ZI6BP5Xau.png', height: 650 },  // remove bottom title text bar
  { id: '9mVt8to61Hd.png', height: 660 },  // remove partial caption at bottom
];

const files = readdirSync(srcDir).filter(f => !f.startsWith('.') && /\.(png|jpg|jpeg)$/i.test(f));

for (const filename of files) {
  const src = join(srcDir, filename);
  const out = join(outDir, filename);
  const { width, height } = await sharp(src).metadata();

  const match = CROP_HEIGHTS.find(({ id }) => filename.endsWith(id));
  const cropHeight = match ? match.height : Math.round(height * 0.84);
  const actualCrop = Math.min(cropHeight, height);

  await sharp(src)
    .extract({ left: 0, top: 0, width, height: actualCrop })
    .toFile(out);

  const marker = match ? ' (custom)' : ' (84%)';
  console.log(`✓ ${filename.slice(0, 30).padEnd(30)}${width}×${height} → ${width}×${actualCrop}${marker}`);
}
console.log('Done.');
