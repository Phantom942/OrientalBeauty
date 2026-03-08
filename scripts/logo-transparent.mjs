/**
 * Rendre le fond du logo transparent (blanc / clair → alpha 0)
 * Usage: node scripts/logo-transparent.mjs
 */
import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { copyFile } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '../public');
const logoPath = join(publicDir, 'logo.png');
const faviconPath = join(publicDir, 'favicon.png');

const threshold = 245; // Pixels R,G,B >= 245 → transparent

const { data, info } = await sharp(logoPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  if (r >= threshold && g >= threshold && b >= threshold) {
    data[i + 3] = 0;
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(logoPath);

await copyFile(logoPath, faviconPath);

console.log('✓ Logo et favicon rendus transparents');
