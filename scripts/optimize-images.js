// scripts/optimize-images.js
// scripts/optimize-images.js
// NOTE: This script now gracefully degrades on platforms (like Vercel build machines)
// where sharp's native dependencies (libvips) are unavailable. In that case we skip
// conversion and exit with code 0 so the build does not fail.
// Set SKIP_IMAGE_OPTIMIZATION=1 to force skipping locally.

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

let sharpAvailable = true;
let sharp;
try {
  if (process.env.SKIP_IMAGE_OPTIMIZATION === '1' || process.env.VERCEL) {
    // Intentionally skip on Vercel (images already committed as WebP) or when flag set.
    sharpAvailable = false;
  } else {
    // Dynamic import inside try/catch so failure doesn't crash build.
    // eslint-disable-next-line unicorn/prefer-top-level-await
    sharp = (await import('sharp')).default;
  }
} catch (err) {
  sharpAvailable = false;
  console.warn('[optimize-images] sharp not available, skipping conversion:', err.message);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertToWebP(inputPath, outputPath, quality = 80) {
  if (!sharpAvailable) {
    return false; // treat as skipped
  }
  try {
    await sharp(inputPath).webp({ quality, effort: 4 }).toFile(outputPath);
    const inputStats = await fs.stat(inputPath);
    const outputStats = await fs.stat(outputPath);
    const savings = Math.round((1 - outputStats.size / inputStats.size) * 100);
    console.log(`✓ ${path.basename(inputPath)}`);
    console.log(
      `  ${Math.round(inputStats.size / 1024)}KB → ${Math.round(
        outputStats.size / 1024
      )}KB (${savings}% smaller)`
    );
    return true;
  } catch (error) {
    console.error(`✗ Failed to convert ${inputPath}:`, error.message);
    return false;
  }
}

async function findImages(dir) {
  const files = [];
  const items = await fs.readdir(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...await findImages(fullPath));
    } else if (/\.(png|jpe?g)$/i.test(item.name)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

async function optimizeImages() {
  const assetsDir = path.join(__dirname, '..', 'src', 'assets');
  
  console.log('🖼️  Starting image optimization...');
  console.log(`📁 Assets directory: ${assetsDir}\n`);
  if (!sharpAvailable) {
    console.log('[optimize-images] sharp unavailable or skipped. No conversion will be performed.');
  }
  
  try {
    const imageFiles = await findImages(assetsDir);
    
    if (imageFiles.length === 0) {
      console.log('No PNG or JPG files found.');
      return;
    }
    
    console.log(`Found ${imageFiles.length} images to optimize\n`);
    
  let converted = 0;
  let skipped = 0;
    
    for (const file of imageFiles) {
      const webpPath = file.replace(/\.(png|jpe?g)$/i, '.webp');
      
      // Check if WebP already exists and is newer
      try {
        const [originalStat, webpStat] = await Promise.all([
          fs.stat(file),
          fs.stat(webpPath).catch(() => null)
        ]);
        
        if (webpStat && webpStat.mtime > originalStat.mtime) {
          console.log(`⏭️  Skipping ${path.basename(file)} (WebP is up to date)`);
          skipped++;
          continue;
        }
      } catch (error) {
        // WebP doesn't exist, continue with conversion
      }
      
      const success = await convertToWebP(file, webpPath);
      if (success) {
        converted++;
      } else {
        skipped++;
      }
    }
    
  console.log(`\n🎉 Optimization complete!`);
  console.log(`📊 Converted: ${converted} | Skipped: ${skipped}`);
  console.log(`\n💡 Tip: Update your components to use WebP images for better performance.`);
    
  } catch (error) {
    console.error('Error during optimization:', error);
    // Do NOT fail the build if sharp is the cause; exit 0 gracefully.
    if (!sharpAvailable) {
      console.log('[optimize-images] Exiting gracefully without conversion.');
      return;
    }
    process.exit(1);
  }
}

// Run the optimization
optimizeImages();