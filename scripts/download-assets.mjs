import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

async function download(url, destPath) {
  if (existsSync(destPath)) return `SKIP ${destPath}`;
  const dir = dirname(destPath);
  mkdirSync(dir, { recursive: true });
  try {
    const res = await fetch(url);
    if (!res.ok) return `FAIL ${url} → ${res.status}`;
    const buf = await res.arrayBuffer();
    writeFileSync(destPath, Buffer.from(buf));
    return `OK   ${destPath}`;
  } catch (e) {
    return `ERR  ${url} → ${e.message}`;
  }
}

async function batchDownload(items, concurrency = 4) {
  const results = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const res = await Promise.all(batch.map(([url, dest]) => download(url, dest)));
    results.push(...res);
    res.forEach(r => console.log(r));
  }
  return results;
}

const FONTS_BASE = 'https://skatefantom.com/wp-content/themes/fantom-magazine/dist/fonts';
const THEME_IMG = 'https://skatefantom.com/wp-content/themes/fantom-magazine/dist/images';
const WP_UP = 'https://skatefantom.com/wp-content/uploads';
const CDN = 'https://cdn.shopify.com/s/files/1/0638/3226/0790/files';
const FAVICON_BASE = 'https://skatefantom.com/wp-content/uploads/2024/01';

const assets = [
  // Fonts
  [`${FONTS_BASE}/Druk-Bold.woff2`,                     join(ROOT, 'public/fonts/Druk-Bold.woff2')],
  [`${FONTS_BASE}/Druk-Heavy.woff2`,                    join(ROOT, 'public/fonts/Druk-Heavy.woff2')],
  [`${FONTS_BASE}/ArialNarrow-Bold.woff2`,              join(ROOT, 'public/fonts/ArialNarrow-Bold.woff2')],
  [`${FONTS_BASE}/HelveticaNowDisplay-Bold.woff2`,      join(ROOT, 'public/fonts/HelveticaNowDisplay-Bold.woff2')],
  [`${FONTS_BASE}/HelveticaNowDisplay-Medium.woff2`,    join(ROOT, 'public/fonts/HelveticaNowDisplay-Medium.woff2')],
  [`${FONTS_BASE}/HelveticaNowDisplay-Regular.woff2`,   join(ROOT, 'public/fonts/HelveticaNowDisplay-Regular.woff2')],

  // Favicons
  [`${FAVICON_BASE}/cropped-favicon-32x32.png`,         join(ROOT, 'public/seo/favicon-32x32.png')],
  [`${FAVICON_BASE}/cropped-favicon-192x192.png`,       join(ROOT, 'public/seo/favicon-192x192.png')],
  [`${FAVICON_BASE}/cropped-favicon-180x180.png`,       join(ROOT, 'public/seo/apple-touch-icon.png')],

  // Theme images (play buttons, newsletter SVG, skater illustration)
  [`${THEME_IMG}/play-button.svg`,                      join(ROOT, 'public/images/play-button.svg')],
  [`${THEME_IMG}/play-button-xl.svg`,                   join(ROOT, 'public/images/play-button-xl.svg')],
  [`${THEME_IMG}/newsletter-signup-header.svg`,         join(ROOT, 'public/images/newsletter-signup-header.svg')],
  [`${THEME_IMG}/newsletter-signup-header__mobile.svg`, join(ROOT, 'public/images/newsletter-signup-header-mobile.svg')],
  [`${THEME_IMG}/illustrations/skater-illustration-01.png`, join(ROOT, 'public/images/skater-illustration-01.png')],

  // Hero slider images
  [`${WP_UP}/2026/05/Fantom_Feral_Tee_Banner_Desktop_5x3_min-1024x614.jpg`, join(ROOT, 'public/images/hero-feral-tee-desktop.jpg')],
  [`${WP_UP}/2026/05/Fantom_Feral_Tee_Banner_Mobile_min-1024x1024.jpg`,     join(ROOT, 'public/images/hero-feral-tee-mobile.jpg')],
  [`${WP_UP}/2026/05/Fantom09_Cover_Slider_01_min-1024x640.jpg`,            join(ROOT, 'public/images/hero-issue9-desktop.jpg')],
  [`${WP_UP}/2026/05/Fantom09_Cover_Slider_mobile_01-1024x1024.jpg`,        join(ROOT, 'public/images/hero-issue9-mobile.jpg')],

  // Embedded video thumbnail
  [`${WP_UP}/2026/04/thumbnail.jpg`, join(ROOT, 'public/images/video-streets-thumbnail.jpg')],

  // Product images (Shopify CDN)
  [`${CDN}/Fantom09_Tee_Square_400x400.jpg?v=1777583337`,               join(ROOT, 'public/images/product-feral-tee.jpg')],
  [`${CDN}/Fantom_McKee_Poster-zine_square_400x400.jpg?v=1769724441`,   join(ROOT, 'public/images/product-mckee-poster-zine.jpg')],
  [`${CDN}/Fantom_McKee_tee_02_square_400x400.jpg?v=1769716627`,        join(ROOT, 'public/images/product-mckee-tee-moth.jpg')],
  [`${CDN}/Fantom_McKee_tee_01_square_400x400.jpg?v=1769716771`,        join(ROOT, 'public/images/product-mckee-tee-widow.jpg')],

  // Spin Stories thumbnails
  [`${WP_UP}/2026/05/Fantom09_LRG_Music_Nova-Twins_WebFt1.jpg`,     join(ROOT, 'public/images/spin-nova-twins.jpg')],
  [`${WP_UP}/2026/02/Fantom08_MED_McKee_WebFt.jpg`,                 join(ROOT, 'public/images/spin-deadly-allure.jpg')],
  [`${WP_UP}/2026/01/Fantom08_LRG_Dreamwife_Web-ft.jpg`,            join(ROOT, 'public/images/spin-dreamwife.jpg')],
  [`${WP_UP}/2026/01/Fantom08_LRG_Warpaint_web_00.jpg`,             join(ROOT, 'public/images/spin-warpaint.jpg')],
  [`${WP_UP}/2026/03/Fantom08_Caro_Downhill_Web.jpg`,               join(ROOT, 'public/images/spin-easiest-way-down.jpg')],
  [`${WP_UP}/2026/01/Fantom08_LRG_Miret_Web.jpg`,                   join(ROOT, 'public/images/spin-miret.jpg')],
  [`${WP_UP}/2026/01/Fantom08_LRG_Riblet_webft.jpg`,                join(ROOT, 'public/images/spin-riblet.jpg')],
  [`${WP_UP}/2026/01/Fantom08_LRG_RSOTY2025_WEb_01.jpg`,            join(ROOT, 'public/images/spin-rsoty.jpg')],
  [`${WP_UP}/2025/09/Fantom07_Web-Rollercon_01.jpg`,                 join(ROOT, 'public/images/spin-vegas.jpg')],
  [`${WP_UP}/2025/09/Fantom07_Web-Manuela_01.jpg`,                   join(ROOT, 'public/images/spin-manuela.jpg')],
  [`${WP_UP}/2025/09/Fantom07_Web-Upchuck_01.jpg`,                   join(ROOT, 'public/images/spin-upchuck.jpg')],
  [`${WP_UP}/2025/09/Fantom07_Web-Alli_01.jpg`,                      join(ROOT, 'public/images/spin-alli.jpg')],

  // Skate Flicks thumbnails
  [`${WP_UP}/2026/03/Cailey-Thumbnail.jpg`,                           join(ROOT, 'public/images/skate-cailey.jpg')],
  [`${WP_UP}/2025/12/Mascara-Cover-photo.jpg`,                        join(ROOT, 'public/images/skate-mascara.jpg')],
  [`${WP_UP}/2025/11/fleeting_passages_thumbnail.jpg`,                 join(ROOT, 'public/images/skate-fleeting-passages.jpg')],
  [`${WP_UP}/2025/03/alli_video_thumbnail.jpg`,                        join(ROOT, 'public/images/skate-alli-fantom.jpg')],
  [`${WP_UP}/2025/02/portada-video-2.jpg`,                             join(ROOT, 'public/images/skate-arely-cielo.jpg')],
];

console.log(`Downloading ${assets.length} assets...`);
await batchDownload(assets, 6);
console.log('Done.');
