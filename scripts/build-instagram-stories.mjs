import fs from "fs";
import path from "path";
import sharp from "sharp";

const W = 1080;
const H = 1920;
const BG = "#1c2220";
const ACCENT = "#2fd4b8";
const FG = "#e2eae8";
const MUTED = "#9fada9";
const ROOT = path.resolve("public/instagram-stories");
const LOGO = path.resolve("public/images/logo-transparent.png");
const GUARIDA = path.resolve("public/instagram-stories/source/guarida-user.png");
const ALO = path.resolve("public/instagram-stories/source/alo-user.png");

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function svgText(lines, opts = {}) {
  const {
    yStart = 280,
    lineHeight = 72,
    fontSize = 56,
    fontWeight = 700,
    fill = FG,
    x = W / 2,
  } = opts;

  const tspans = lines
    .map((line, i) => {
      const text = typeof line === "string" ? line : line.text;
      const accent = typeof line === "object" && line.accent;
      const muted = typeof line === "object" && line.muted;
      const small = typeof line === "object" && line.small;
      let attrs = "";
      if (accent) attrs += ` fill="${ACCENT}"`;
      if (muted) attrs += ` fill="${MUTED}" font-size="40" font-weight="500"`;
      if (small) attrs += ` font-size="42" font-weight="600"`;
      return `<tspan x="${x}" dy="${i === 0 ? 0 : lineHeight}"${attrs}>${esc(text)}</tspan>`;
    })
    .join("");

  return Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <text x="${x}" y="${yStart}" text-anchor="middle" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="${fontSize}" font-weight="${fontWeight}" fill="${fill}">${tspans}</text>
  </svg>`);
}

function svgLabel(text) {
  return Buffer.from(`<svg width="${W}" height="80" xmlns="http://www.w3.org/2000/svg">
    <text x="${W / 2}" y="52" text-anchor="middle" font-family="system-ui,sans-serif" font-size="28" font-weight="700" letter-spacing="6" fill="${ACCENT}">${esc(text)}</text>
  </svg>`);
}

async function logoPng(width = 300) {
  const meta = await sharp(LOGO).metadata();
  const h = Math.round(width * (meta.height / meta.width));
  return { buf: await sharp(LOGO).resize(width, h).png().toBuffer(), w: width, h };
}

async function cropBrowserChrome(imgPath) {
  const meta = await sharp(imgPath).metadata();
  const cropTop = Math.round(meta.height * 0.2);
  return sharp(imgPath)
    .extract({
      left: 0,
      top: cropTop,
      width: meta.width,
      height: meta.height - cropTop,
    })
    .png()
    .toBuffer();
}

async function screenshotCard(imgPath, cardW = 940, cardH = 680, top = 700) {
  const cropped = await cropBrowserChrome(imgPath);
  const left = Math.round((W - cardW) / 2);
  const radius = 24;

  const resized = await sharp(cropped)
    .resize(cardW, cardH, { fit: "cover", position: "top" })
    .png()
    .toBuffer();

  const mask = Buffer.from(
    `<svg width="${cardW}" height="${cardH}"><rect width="${cardW}" height="${cardH}" rx="${radius}" ry="${radius}" fill="white"/></svg>`
  );
  const clipped = await sharp(resized)
    .composite([{ input: await sharp(mask).png().toBuffer(), blend: "dest-in" }])
    .png()
    .toBuffer();

  const border = Buffer.from(
    `<svg width="${cardW + 4}" height="${cardH + 4}"><rect x="2" y="2" width="${cardW}" height="${cardH}" rx="${radius}" ry="${radius}" fill="none" stroke="rgba(226,234,232,0.15)" stroke-width="2"/></svg>`
  );

  return [
    { input: border, top: top - 2, left: left - 2 },
    { input: clipped, top, left },
  ];
}

async function renderStory(filename, layers) {
  const base = await sharp({
    create: { width: W, height: H, channels: 3, background: BG },
  })
    .png()
    .toBuffer();

  await sharp(base)
    .composite(layers)
    .png({ compressionLevel: 9 })
    .toFile(path.join(ROOT, filename));
  console.log("ok", filename);
}

async function withLogoBottom(layers) {
  const logo = await logoPng(300);
  layers.push({
    input: logo.buf,
    top: H - logo.h - 80,
    left: Math.round((W - logo.w) / 2),
  });
  return layers;
}

fs.mkdirSync(ROOT, { recursive: true });

await renderStory(
  "story-01-gancho.png",
  await withLogoBottom([
    {
      input: svgText(
        [
          { text: "¿Tenés tráfico en Instagram" },
          { text: "pero poca gente te escribe?" },
          { text: "No sos el único.", muted: true },
        ],
        { yStart: 340, lineHeight: 78, fontSize: 58 }
      ),
      top: 0,
      left: 0,
    },
  ])
);

await renderStory(
  "story-02-problema.png",
  await withLogoBottom([
    {
      input: svgText(
        [
          { text: "El problema no es" },
          { text: "que no te vean." },
          { text: "Es que cuando entran" },
          { text: "no saben qué hacer." },
        ],
        { yStart: 360, lineHeight: 74, fontSize: 54 }
      ),
      top: 0,
      left: 0,
    },
  ])
);

await renderStory(
  "story-03-whatsapp.png",
  await withLogoBottom([
    {
      input: svgText(
        [
          { text: "Respondés lo mismo" },
          { text: "10 veces por día:" },
          { text: "precio · horarios · cómo reservar", accent: true, small: true },
          { text: "Tu web debería hacer" },
          { text: "eso por vos." },
        ],
        { yStart: 320, lineHeight: 70, fontSize: 52 }
      ),
      top: 0,
      left: 0,
    },
  ])
);

await renderStory(
  "story-04-beneficios.png",
  await withLogoBottom([
    {
      input: svgText(
        [
          { text: "Una landing clara:" },
          { text: "✓  Explica en 10 segundos", small: true },
          { text: "✓  Guía al contacto directo", small: true },
          { text: "✓  Perfecta en el celular", small: true },
        ],
        { yStart: 360, lineHeight: 76, fontSize: 54 }
      ),
      top: 0,
      left: 0,
    },
  ])
);

const ctaSvg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <text x="${W / 2}" y="360" text-anchor="middle" font-family="system-ui,sans-serif" font-size="56" font-weight="700" fill="${FG}">
    <tspan x="${W / 2}" dy="0">¿Querés más consultas</tspan>
    <tspan x="${W / 2}" dy="78">y menos mensajes repetidos?</tspan>
  </text>
  <text x="${W / 2}" y="580" text-anchor="middle" font-family="system-ui,sans-serif" font-size="40" font-weight="600" fill="${ACCENT}">Escribime WEB por DM</text>
  <rect x="${(W - 640) / 2}" y="700" width="640" height="88" rx="44" fill="${ACCENT}"/>
  <text x="${W / 2}" y="754" text-anchor="middle" font-family="system-ui,sans-serif" font-size="34" font-weight="700" fill="#1c2220">agustinaderdev.com</text>
</svg>`);

await renderStory("story-05-cta.png", await withLogoBottom([{ input: ctaSvg, top: 0, left: 0 }]));

await renderStory(
  "story-06-credibilidad.png",
  await withLogoBottom([
    {
      input: svgText(
        [
          { text: "No vendo diseños lindos." },
          { text: "Hago webs que generan", accent: true },
          { text: "consultas reales.", accent: true },
        ],
        { yStart: 400, lineHeight: 80, fontSize: 56 }
      ),
      top: 0,
      left: 0,
    },
  ])
);

const label = await sharp(svgLabel("PROYECTO REAL")).png().toBuffer();
const logoSmall = await logoPng(280);

for (const [file, img, title, subtitle, url] of [
  [
    "story-07-proyecto-guarida.png",
    GUARIDA,
    "La Guarida Instrumentos",
    "Catálogo · contacto directo",
    "laguaridainstrumentos.com",
  ],
  [
    "story-08-proyecto-patagonia.png",
    ALO,
    "Alo Patagonia",
    "Turismo · WhatsApp integrado",
    "alopatagonia.com",
  ],
]) {
  const text = svgText(
    [
      { text: title },
      { text: subtitle, muted: true },
      { text: url, accent: true, small: true },
    ],
    { yStart: 220, lineHeight: 64, fontSize: 48 }
  );
  const card = await screenshotCard(img);
  await renderStory(file, [
    { input: label, top: 120, left: 0 },
    { input: text, top: 0, left: 0 },
    ...card,
    {
      input: logoSmall.buf,
      top: H - logoSmall.h - 60,
      left: Math.round((W - logoSmall.w) / 2),
    },
  ]);
}

console.log("done");
