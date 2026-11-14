/**
 * Captura mockups mobile del viewport real (sin recortar el layout).
 * Uso: node scripts/capture-mobile-mockups.mjs
 */
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = join(ROOT, "public/images/mockups");
const CHROME_CANDIDATES = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

function resolveBrowser() {
  for (const path of CHROME_CANDIDATES) {
    if (existsSync(path)) return path;
  }
  throw new Error(
    "No se encontró Chrome/Chromium. Definí PUPPETEER_EXECUTABLE_PATH.",
  );
}

const MOBILE_UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";

const SITES = [
  ["dr-chinski", "https://rinoplastia.com.ar/"],
  ["rhinoscopy", "https://www.rhinoscopy.com.ar/es"],
  ["alo-patagonia", "https://www.alopatagonia.com/"],
  ["la-guarida", "https://www.laguaridainstrumentos.com/"],
  ["dra-karla-armijos", "https://www.drakarmijos.com/"],
  ["dr-lopez-moris", "https://drlopezmoris.com/"],
];

const WIDTH = 390;
const HEIGHT = 844;

await mkdir(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: resolveBrowser(),
  headless: true,
  args: ["--hide-scrollbars", "--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  for (const [id, url] of SITES) {
    const page = await browser.newPage();
    await page.setViewport({
      width: WIDTH,
      height: HEIGHT,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
    });
    await page.setUserAgent(MOBILE_UA);
    await page.setExtraHTTPHeaders({
      "Accept-Language": "es-AR,es;q=0.9,en;q=0.8",
    });

    await page.goto(url, { waitUntil: "networkidle2", timeout: 90_000 });
    await page.evaluate(() => {
      const style = document.createElement("style");
      style.textContent = `
        a[href*="wa.me"],
        a[href*="api.whatsapp.com"],
        [class*="whatsapp" i],
        [id*="whatsapp" i] {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
      window.scrollTo(0, 0);
    });
    await new Promise((resolve) => setTimeout(resolve, 600));

    const out = join(OUT_DIR, `${id}-mobile.jpg`);
    const buffer = await page.screenshot({ type: "jpeg", quality: 90 });
    await sharp(buffer).jpeg({ quality: 86, mozjpeg: true }).toFile(out);
    const meta = await sharp(out).metadata();
    console.log(`OK ${id} ${meta.width}x${meta.height}`);
    await page.close();
  }
} finally {
  await browser.close();
}
