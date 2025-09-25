const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const inputDir = 'src/assets/images';
  const outputDir = 'src/assets/images-optimized';
  
  // Создаем папку для оптимизированных картинок
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Оптимизируем PNG
  await imagemin([`${inputDir}/**/*.png`], {
    destination: outputDir,
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8],
        speed: 1,
        strip: true
      })
    ]
  });
  
  // Оптимизируем JPG
  await imagemin([`${inputDir}/**/*.jpg`, `${inputDir}/**/*.jpeg`], {
    destination: outputDir,
    plugins: [
      imageminMozjpeg({
        quality: 80,
        progressive: true
      })
    ]
  });
  
  console.log('Images optimized!');
}

optimizeImages().catch(console.error);
