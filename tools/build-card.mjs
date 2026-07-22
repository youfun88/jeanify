/* Generate the digital business card.
 *
 * Outputs:
 *   card/index.html       — the page a scanned QR code lands on
 *   card/jean-riley.vcf   — vCard 3.0, so "Save to Contacts" works natively
 *   uploads/card-qr.svg   — QR pointing at CARD_URL, shown on the contact page
 *
 * vCard 3.0 rather than 4.0: iOS and Android both handle 3.0 reliably, and the
 * embedded photo works. Lines are CRLF-terminated and folded at 75 octets per
 * RFC 2426 — iOS silently rejects the photo otherwise.
 *
 * Run:  npm run build:card
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import QRCode from "qrcode";
import { AGENT, SITE, CARD_URL } from "./agent.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "card");

const esc = (s) => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

// vCard escaping: comma, semicolon, backslash and newline are structural.
const vEsc = (s) => String(s).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

// Fold to 75 octets, continuation lines begin with a single space.
function fold(line) {
  if (line.length <= 75) return line;
  const out = [line.slice(0, 75)];
  let rest = line.slice(75);
  while (rest.length > 74) { out.push(" " + rest.slice(0, 74)); rest = rest.slice(74); }
  if (rest.length) out.push(" " + rest);
  return out.join("\r\n");
}

// ---- vCard ----
const photo = await readFile(join(ROOT, "assets/jean-portrait.jpg")).then(
  (b) => b.toString("base64"),
  () => null
);

const lines = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  `N:${vEsc(AGENT.last)};${vEsc(AGENT.first)};;;`,
  `FN:${vEsc(AGENT.name)}`,
  `ORG:${vEsc(AGENT.brokerage)}`,
  `TITLE:${vEsc(AGENT.title + " · " + AGENT.license)}`,
  `TEL;TYPE=CELL,VOICE:${AGENT.phone}`,
  `TEL;TYPE=WORK,VOICE:${AGENT.phone}`,
  `EMAIL;TYPE=INTERNET,PREF:${AGENT.email}`,
  `ADR;TYPE=WORK:;;${vEsc(AGENT.street)};${vEsc(AGENT.city)};${AGENT.region};${AGENT.postal};${AGENT.country}`,
  `URL:${CARD_URL}`,
  `X-SOCIALPROFILE;TYPE=youtube:${AGENT.youtube}`,
  `NOTE:${vEsc(AGENT.tagline + " Languages: " + AGENT.languages + ". Zillow: " + AGENT.zillow)}`,
  ...(photo ? [`PHOTO;ENCODING=b;TYPE=JPEG:${photo}`] : []),
  "END:VCARD",
];

await mkdir(OUT, { recursive: true });
await writeFile(join(OUT, "jean-riley.vcf"), lines.map(fold).join("\r\n") + "\r\n", "utf8");

// ---- QR ----
// Error-correction M tolerates a logo overlay or a bit of print wear while
// keeping the module count low enough to scan from a phone screen.
const qrSvg = await QRCode.toString(CARD_URL, {
  type: "svg",
  errorCorrectionLevel: "M",
  margin: 1,
  color: { dark: "#0b0d10", light: "#ffffff" },
});
await mkdir(join(ROOT, "uploads"), { recursive: true });
await writeFile(join(ROOT, "uploads/card-qr.svg"), qrSvg, "utf8");

// ---- Card page ----
const mapUrl = "https://maps.google.com/?q=" + encodeURIComponent(
  `${AGENT.street}, ${AGENT.city}, ${AGENT.region} ${AGENT.postal}`
);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(AGENT.name)} — ${esc(AGENT.title)} · ${esc(AGENT.brokerage)}</title>
<meta name="description" content="${esc(AGENT.name)}, ${esc(AGENT.title)} (${esc(AGENT.license)}). ${esc(AGENT.tagline)} Tap to call, email, or save to your contacts." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="${CARD_URL}" />
<meta property="og:type" content="profile" />
<meta property="og:title" content="${esc(AGENT.name)} — ${esc(AGENT.title)}" />
<meta property="og:description" content="${esc(AGENT.tagline)}" />
<meta property="og:url" content="${CARD_URL}" />
<meta property="og:image" content="${SITE}/assets/jean-portrait.jpg" />
<link rel="icon" href="../favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="../apple-touch-icon.png" />
<meta name="theme-color" content="#0b0d10" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="../styles.css" />
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "${esc(AGENT.name)}",
  "jobTitle": "${esc(AGENT.title)}",
  "identifier": "${esc(AGENT.license)}",
  "telephone": "${AGENT.phone}",
  "email": "${AGENT.email}",
  "url": "${CARD_URL}",
  "image": "${SITE}/assets/jean-portrait.jpg",
  "worksFor": { "@type": "RealEstateOrganization", "name": "${esc(AGENT.brokerage)}" },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "${esc(AGENT.street)}",
    "addressLocality": "${AGENT.city}",
    "addressRegion": "${AGENT.region}",
    "postalCode": "${AGENT.postal}",
    "addressCountry": "US"
  },
  "sameAs": ["${AGENT.youtube}", "${AGENT.zillow}"]
}
</script>
</head>
<body class="card-body">
<main class="card-wrap">
  <article class="card">
    <div class="card-top">
      <img class="card-logo" src="../uploads/jeanify-logo-brass.png" alt="Jeanify" width="699" height="309" />
      <img class="card-portrait" src="../assets/jean-portrait.jpg" alt="${esc(AGENT.name)}" width="128" height="128" />
      <h1 class="card-name">${esc(AGENT.name)}</h1>
      <p class="card-title">${esc(AGENT.title)} · ${esc(AGENT.brokerage)}</p>
      <p class="card-license">${esc(AGENT.license)}</p>
      <p class="card-tagline">${esc(AGENT.tagline)}</p>
    </div>

    <a class="card-save" href="./jean-riley.vcf" download="jean-riley.vcf">
      <span class="card-save-icon" aria-hidden="true">↓</span>
      Save to Contacts
    </a>
    <p class="card-save-note">Adds Jean to your phone's address book</p>

    <div class="card-rows">
      <a class="card-row" href="tel:${AGENT.phone}">
        <span class="card-row-k">Phone</span>
        <span class="card-row-v">${esc(AGENT.phoneDisplay)}</span>
      </a>
      <a class="card-row" href="mailto:${AGENT.email}">
        <span class="card-row-k">Email</span>
        <span class="card-row-v">${esc(AGENT.email)}</span>
      </a>
      <a class="card-row" href="${mapUrl}" target="_blank" rel="noopener noreferrer">
        <span class="card-row-k">Office</span>
        <span class="card-row-v">${esc(AGENT.street)}<br />${AGENT.city}, ${AGENT.region} ${AGENT.postal}</span>
      </a>
      <div class="card-row card-row-static">
        <span class="card-row-k">Languages</span>
        <span class="card-row-v">${esc(AGENT.languages)}</span>
      </div>
    </div>

    <div class="card-links">
      <a href="../index.html">Website</a>
      <a href="${AGENT.youtube}" target="_blank" rel="noopener noreferrer">YouTube</a>
      <a href="${AGENT.zillow}" target="_blank" rel="noopener noreferrer">Zillow</a>
      <a href="../index.html#/contact">Contact form</a>
    </div>

    <div class="card-qr-block">
      <img class="card-qr" src="../uploads/card-qr.svg" alt="QR code linking to this card" width="132" height="132" loading="lazy" />
      <p>Scan or share this card</p>
    </div>
  </article>

  <p class="card-foot">© 2026 ${esc(AGENT.name)} · ${esc(AGENT.license)} · ${esc(AGENT.brokerage)}<br />Equal Housing Opportunity</p>
</main>
</body>
</html>
`;

await writeFile(join(OUT, "index.html"), html, "utf8");

console.log(`  →  card/index.html`);
console.log(`  →  card/jean-riley.vcf  (${photo ? "with" : "no"} embedded photo)`);
console.log(`  →  uploads/card-qr.svg  →  ${CARD_URL}`);
