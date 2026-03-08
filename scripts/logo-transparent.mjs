/**
 * Rendre le fond du logo transparent (blanc / clair → alpha 0)
 * Usage: node scripts/logo-transparent.mjs
 */
import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { copyFile, access } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '../public');
const logoPath = join(publicDir, 'logo.png');
const faviconPath = join(publicDir, 'favicon.png');
const origPath = join(publicDir, 'logo-original.png');
const inputPath = await access(origPath).then(() => origPath).catch(() => logoPath);

// Fond clair → transparent (blanc, crème, #faf9f7…)
const LIGHT_THRESHOLD = 200; // luminance moyenne au-dessus → transparent

const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const luminance = (r + g + b) / 3;
  if (luminance >= LIGHT_THRESHOLD) {
    data[i + 3] = 0;
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(logoPath);

await copyFile(logoPath, faviconPath);

console.log('✓ Logo et favicon rendus transparents');
