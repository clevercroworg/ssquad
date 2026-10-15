const sharp = require('sharp');
const fs = require('fs');

async function processImage() {
  const inputPath = 'public/certificate/soc 2 type 2.jpeg';
  const outputPath = 'public/certificate/soc 2 type 2_cropped.jpeg';

  try {
    // Read the image and trim away white/transparent borders
    await sharp(inputPath)
      .trim({
        background: { r: 255, g: 255, b: 255, alpha: 1 },
        threshold: 15 // Tolerance for near-white pixels
      })
      .toFile(outputPath);
    
    console.log('Successfully cropped the image!');
    
    // Replace original
    fs.renameSync(outputPath, inputPath);
    console.log('Replaced original image with cropped version.');
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

processImage();
