const Jimp = require('jimp');

async function processLogo() {
  const image = await Jimp.read('public/logo.png');
  
  // To avoid any complex cropping issues, let's just make the whole image transparent 
  // first and then rely on Jimp's autocrop to trim it exactly to the used pixels.
  
  // 1. Make white background transparent for the ENTIRE image
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    // Very generous white threshold to catch all border pixels
    if (r > 200 && g > 200 && b > 200) {
      this.bitmap.data[idx + 3] = 0; 
    }
  });

  // 2. Crop the shield out of the top half manually first so we don't catch 
  // the text below, but keep a large enough area to not cut things off.
  // Original is 1024x558. Top 350px should definitely contain the whole shield and pin.
  image.crop(0, 0, image.bitmap.width, 350);

  // 3. Use autocrop to trim empty transparent space
  image.autocrop({ tolerance: 0.1 });
  
  // 4. Add a tiny bit of padding (5px) so it doesn't touch the edges of the file
  const padded = new Jimp(image.bitmap.width + 10, image.bitmap.height + 10, 0x00000000);
  padded.composite(image, 5, 5);

  await padded.writeAsync('public/logo-shield-transparent.png');
  console.log('Created logo-shield-transparent.png with absolute full visibility and padding');
}
processLogo().catch(console.error);
