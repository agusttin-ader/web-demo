/**
 * Captura mockups mobile 393×852 (zona de estado arriba, UI del sitio debajo).
 * Uso: node scripts/capture-mobile-mockups.mjs
 */
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import { existsSync } from "node:fs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = join(ROOT, "public/images/mockups");
const BRAVE = "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser";
const CHROME_CANDIDATES = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  BRAVE,
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
  ["rhinoscopy", "https://www.rhinoscopy.com.ar/"],
  ["alo-patagonia", "https://www.alopatagonia.com/"],
  ["la-guarida", "https://www.laguaridainstrumentos.com/"],
  ["dra-karla-armijos", "https://www.drakarmijos.com/"],
  ["dr-lopez-moris", "https://drlopezmoris.com/"],
];

const WIDTH = 393;
const HEIGHT = 852;
const SAFE_TOP = 47;

async function applyMockupSafeArea(page, insetTop) {
  await page.evaluate((inset) => {
    const bg =
      getComputedStyle(document.documentElement).backgroundColor || "#000";

    let style = document.getElementById("mockup-safe-area-style");
    if (!style) {
      style = document.createElement("style");
      style.id = "mockup-safe-area-style";
      document.head.appendChild(style);
    }
    style.textContent = `
      html {
        background: ${bg} !important;
      }
      body {
        margin: 0;
        box-sizing: border-box;
      }
      body::before {
        content: "";
        display: block;
        height: ${inset}px;
        width: 100%;
        background: ${bg};
      }
    `;

    document.querySelectorAll("*").forEach((el) => {
      if (!(el instanceof HTMLElement)) return;
      const st = getComputedStyle(el);
      if (st.position !== "fixed" && st.position !== "sticky") return;
      const top = Number.parseFloat(st.top);
      if (Number.isNaN(top) || top > inset + 4) return;
      el.style.top = `${top + inset}px`;
    });
  }, insetTop);
}

await mkdir(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: resolveBrowser(),
  headless: true,
  args: [
    "--hide-scrollbars",
    "--font-render-hinting=medium",
    "--no-sandbox",
    "--disable-setuid-sandbox",
  ],
});

try {
  for (const [id, url] of SITES) {
    const page = await browser.newPage();
    const client = await page.createCDPSession();

    await client.send("Emulation.setDeviceMetricsOverride", {
      width: WIDTH,
      height: HEIGHT,
      deviceScaleFactor: 1,
      mobile: true,
    });
    await page.setUserAgent(MOBILE_UA);

    await page.evaluateOnNewDocument(() => {
      const ensureViewport = () => {
        let vp = document.querySelector('meta[name="viewport"]');
        if (!vp) {
          vp = document.createElement("meta");
          vp.name = "viewport";
          document.head?.appendChild(vp);
        }
        const content = vp.getAttribute("content") || "";
        if (!/viewport-fit=cover/.test(content)) {
          vp.setAttribute(
            "content",
            `${content}${content ? ", " : ""}viewport-fit=cover`.replace(
              /^,\s*/,
              "",
            ),
          );
        }
      };
      ensureViewport();
      document.addEventListener("DOMContentLoaded", ensureViewport, {
        once: true,
      });
    });

    await page.goto(url, { waitUntil: "networkidle2", timeout: 90_000 });
    await applyMockupSafeArea(page, SAFE_TOP);
    await page.evaluate(() => {
      document.documentElement.style.overflowX = "clip";
      document.body.style.overflowX = "clip";
      window.scrollTo(0, 0);
    });
    await page.evaluate(() => new Promise((r) => setTimeout(r, 1500)));

    const out = join(OUT_DIR, `${id}-mobile.jpg`);
    await page.screenshot({
      path: out,
      type: "jpeg",
      quality: 90,
      clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT },
    });

    console.log(`OK ${id} -> ${out}`);
    await page.close();
  }
} finally {
  await browser.close();
}
