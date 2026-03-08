/**
 * Conversion PNG → WEBP pour les images avant/après
 * Place les PNG dans public/images/ puis exécute: npm run images:webp
 */
import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputDir = join(__dirname, '../public/images');
const outputDir = join(__dirname, '../public/images/avant-apres');

await mkdir(outputDir, { recursive: true });

const files = await readdir(inputDir);
const pngFiles = files.filter((f) => f.endsWith('.png'));

if (pngFiles.length === 0) {
  console.log('Aucun fichier PNG dans public/images/. Ajoutez vos images puis relancez.');
  process.exit(0);
}

for (const file of pngFiles) {
  const inputPath = join(inputDir, file);
  const outputFile = file.replace('.png', '.webp');
  const outputPath = join(outputDir, outputFile);

  try {
    await sharp(inputPath).webp({ quality: 85 }).toFile(outputPath);
    console.log(`✓ ${file} → avant-apres/${outputFile}`);
  } catch (err) {
    console.error(`✗ ${file}:`, err.message);
  }
}

console.log('\nConversion terminée.');
