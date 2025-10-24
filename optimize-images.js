const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const imagesDir = path.join(__dirname, 'images');
  const logoPath = path.join(imagesDir, 'logo.png');

  if (!fs.existsSync(logoPath)) {
    console.log('Logo not found');
    return;
  }

  console.log('Optimizing logo.png...');

  // Create optimized PNG (smaller size)
  await sharp(logoPath)
    .resize(150, 150, { fit: 'cover' })
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(path.join(imagesDir, 'logo-optimized.png'));
  console.log('Created logo-optimized.png');

  // Create WebP version
  await sharp(logoPath)
    .resize(150, 150, { fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(path.join(imagesDir, 'logo.webp'));
  console.log('Created logo.webp');

  // Create AVIF version
  await sharp(logoPath)
    .resize(150, 150, { fit: 'cover' })
    .avif({ quality: 80 })
    .toFile(path.join(imagesDir, 'logo.avif'));
  console.log('Created logo.avif');

  // Create 2x versions for retina displays
  await sharp(logoPath)
    .resize(300, 300, { fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(path.join(imagesDir, 'logo@2x.webp'));
  console.log('Created logo@2x.webp');

  await sharp(logoPath)
    .resize(300, 300, { fit: 'cover' })
    .avif({ quality: 80 })
    .toFile(path.join(imagesDir, 'logo@2x.avif'));
  console.log('Created logo@2x.avif');

  console.log('\nOptimization complete!');
  
  // Get file sizes
  const sizes = {
    original: fs.statSync(logoPath).size,
    optimizedPng: fs.statSync(path.join(imagesDir, 'logo-optimized.png')).size,
    webp: fs.statSync(path.join(imagesDir, 'logo.webp')).size,
    avif: fs.statSync(path.join(imagesDir, 'logo.avif')).size,
  };
  
  console.log('\nFile sizes:');
  console.log(`Original PNG: ${(sizes.original / 1024).toFixed(2)} KB`);
  console.log(`Optimized PNG: ${(sizes.optimizedPng / 1024).toFixed(2)} KB`);
  console.log(`WebP: ${(sizes.webp / 1024).toFixed(2)} KB`);
  console.log(`AVIF: ${(sizes.avif / 1024).toFixed(2)} KB`);
  console.log(`\nSavings: ${((1 - sizes.avif / sizes.original) * 100).toFixed(2)}% with AVIF`);
}

optimizeImages().catch(console.error);
