/* Prerender every app page to static HTML, in English and Chinese.
 *
 * Why: AI assistants and most crawlers don't run JavaScript, so a client-rendered page
 * is an empty <div id="root"> to them. This renders each route with the real React
 * components (ReactDOMServer.renderToString, React 18.3.1 — the same version as
 * vendor/) and writes it to its real URL:
 *
 *   /                 /zh/
 *   /about/           /zh/about/            …and so on for every route in ROUTES,
 *   /listing/<id>/    /zh/listing/<id>/     plus one page per closing in data.js
 *
 * Each page gets its own <title>, meta description (PAGE_META in core.jsx), canonical,
 * hreflang en / zh-Hant / x-default, Open Graph tags and JSON-LD. In the browser the
 * app hydrates the markup (app.jsx), so visitors see content before any script runs.
 *
 * Also writes sitemap.xml (every real URL with its hreflang alternates).
 *
 * Run after `npm run build:js` and `npm run build:articles` (npm run build does both).
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { siteCss } from "./site-css.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = process.env.JEANIFY_SITE || "https://www.soldbyjean.com";

// ---- load the browser modules into this process ----
// They are IIFEs that read and write `window`, and use React as a global.
globalThis.window = globalThis;
globalThis.React = React;
// Node has its own (experimental) localStorage; a prerender must not see any.
Object.defineProperty(globalThis, "localStorage", { value: undefined, configurable: true });
for (const f of [
  "data.js", "articles-content.js", "articles-content-zh.js",
  "tweaks-panel.compiled.js", "core.compiled.js", "home.compiled.js",
  "listings.compiled.js", "pages.compiled.js", "forms.compiled.js", "app.compiled.js",
]) {
  new Function(await readFile(join(ROOT, f), "utf8"))();
}
const { routePath, pageMeta, TWEAK_DEFAULTS, FONT_PAIRS, D } = window.JR_CORE;
const App = window.JR_APP;
const ARTICLES = window.JR_ARTICLES;
const ARTICLES_ZH = window.JR_ARTICLES_ZH;
const FAQS = D.faqs;

const esc = (s) => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const jsonld = (obj) => JSON.stringify(obj, null, 2).replace(/</g, "\\u003c");
const abs = (path) => SITE + path;

// ---- routes ----
// [route, changefreq, priority, inSitemap]
const ROUTES = [
  ["home", "weekly", "1.0"],
  ["about", "monthly", "0.9"],
  ["articles", "weekly", "0.9"],
  ["faq", "monthly", "0.8"],
  ["exchange", "monthly", "0.8"],
  ["listings", "weekly", "0.9"],
  ["listings/active", "weekly", "0.7", false], // always "none currently": noindex + out of the sitemap until it lists homes
  ["videos", "weekly", "0.8"],
  ["guides/buyer", "monthly", "0.6"],
  ["guides/seller", "monthly", "0.6"],
  ["guides/1031", "monthly", "0.6"],
  ["contact", "yearly", "0.9"],
  ["estimator", "yearly", "0.8"],
  // One short page per featured closing. Prerendered so the in-app links resolve on a
  // fresh load, but left out of the sitemap: each is a few facts and a Zillow link.
  ...D.listings.map((l) => ["listing/" + l.id, null, null, false]),
];
const LANGS = ["en", "zh"];

// ---- shared head pieces ----
const NAV = { en: D.i18n.en.nav, zh: D.i18n.zh.nav };
const GA = `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-YS26F5FFHR');
addEventListener('load',function(){setTimeout(function(){var s=document.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtag/js?id=G-YS26F5FFHR';document.head.appendChild(s);},1500);});</script>
<script src="https://admin.shiptolive.com/stl-track.js" data-site="soldbyjean" data-leads="1" defer></script>`;

// Old links and bookmarks used hash routes (/#/faq). Forward them to the real page
// before anything paints. A reader who last chose 中文 lands on the Chinese page.
// routePath is core.jsx's own function, inlined so the two can't disagree.
const HASH_FORWARD = `<script>(function(){if(window.JR_ROUTER==="hash")return;var h=location.hash;if(!/^#\\/./.test(h))return;var l=null;try{l=localStorage.getItem("jeanify.lang")}catch(e){}var zh=/^\\/zh(\\/|$)/.test(location.pathname)||l==="zh";var routePath=${routePath.toString()};location.replace(routePath(h.slice(2),zh?"zh":"en"))})();</script>`;

// The app writes these custom properties onto <html> from the tweak defaults as soon
// as it mounts (app.jsx). Writing the same values into the static HTML means nothing
// moves when it does.
const pair = FONT_PAIRS[TWEAK_DEFAULTS.fontPair];
const HTML_STYLE = [
  `--brass:${TWEAK_DEFAULTS.accent}`, `--brass-bright:${TWEAK_DEFAULTS.accent}`,
  `--font-display:${pair.display}`, `--font-body:${pair.body}`,
  ...(TWEAK_DEFAULTS.density === "compact"
    ? ["--pad-sect:80px", "--pad-sect-sm:48px"]
    : ["--pad-sect:120px", "--pad-sect-sm:72px"]),
].join(";");

// The page is complete HTML, so the app's scripts are not needed to show it — only to
// make it interactive (menu, FAQ accordions, forms, in-app navigation; plain links work
// without them). They load once the page has finished loading, or at the visitor's
// first tap or key press if that comes sooner, so they don't compete with the hero
// photo and fonts for bandwidth. async=false keeps them executing in order.
// React 18.3.1 production builds are self-hosted in vendor/ (copied unchanged from cdnjs).
const APP_SCRIPTS = [
  "vendor/react.production.min.js", "vendor/react-dom.production.min.js",
  "data.js", "articles-content.js", "tweaks-panel.compiled.js", "core.compiled.js",
  "home.compiled.js", "listings.compiled.js", "pages.compiled.js", "forms.compiled.js",
  "app.compiled.js",
];
// Each URL carries a hash of the file's contents (?v=…). Cloudflare and browsers keep
// these files for hours; without the hash a deploy could serve fresh HTML with an old
// script, and the old script re-renders stale text over the page once it loads.
const { createHash } = await import("node:crypto");
const VERSIONED_SCRIPTS = await Promise.all(APP_SCRIPTS.map(async (f) =>
  f + "?v=" + createHash("sha256").update(await readFile(join(ROOT, f))).digest("hex").slice(0, 10)));
const SCRIPTS = `<script>(function(){var s=${JSON.stringify(VERSIONED_SCRIPTS)},d=0;function go(){if(d)return;d=1;removeEventListener("pointerdown",go,true);removeEventListener("keydown",go,true);s.forEach(function(u){var e=document.createElement("script");e.src=u;e.async=false;document.body.appendChild(e)})}if(document.readyState==="complete")go();else addEventListener("load",go);addEventListener("pointerdown",go,true);addEventListener("keydown",go,true)})();</script>
`;

const CSS = await siteCss();

// ---- JSON-LD ----
const HOME_SCHEMA = JSON.parse(await readFile(join(ROOT, "tools", "home-schema.json"), "utf8"));
const AGENT_ID = SITE + "/#agent";

function crumbs(route, lang) {
  const n = NAV[lang];
  const [main, sub] = route.split("/");
  const home = [n.home, routePath("home", lang)];
  let trail;
  if (main === "guides") {
    const g = { buyer: lang === "en" ? "The Buyer's Guide" : "買家指南", seller: lang === "en" ? "The Seller's Guide" : "賣家指南", "1031": lang === "en" ? "1031 Exchange Primer" : "1031 交換入門" }[sub];
    trail = [home, [n.articles, routePath("articles", lang)], [g, routePath(route, lang)]];
  } else if (main === "listing") {
    const l = D.listings.find((x) => x.id === sub);
    trail = [home, [n.listings, routePath("listings", lang)], [l.street, routePath(route, lang)]];
  } else if (route === "listings/active") {
    trail = [home, [n.listings, routePath("listings", lang)], [lang === "en" ? "Active Listings" : "在售房源", routePath(route, lang)]];
  } else {
    trail = [home, [n[main], routePath(route, lang)]];
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": trail.map(([name, path], i) => ({ "@type": "ListItem", "position": i + 1, "name": name, "item": abs(path) })),
  };
}

const pick = (lang, zh, en) => (lang === "zh" && zh ? zh : en);
const faqPage = (items, lang) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": lang === "zh" ? "zh-Hant" : "en-US",
  "mainEntity": items.map((f) => ({
    "@type": "Question",
    "name": pick(lang, f.qZh, f.q),
    "acceptedAnswer": { "@type": "Answer", "text": pick(lang, f.aZh, f.a) },
  })),
});

const articleUrl = (a, lang) => abs((lang === "zh" ? "/zh" : "") + `/articles/${a.slug}.html`);

function schemaFor(route, lang, meta, url) {
  const out = [];
  if (route === "home") {
    out.push(...HOME_SCHEMA);
    out.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": lang === "en" ? "Articles — Jean Riley, San Diego Realtor®" : "文章 — Jean Riley 聖地牙哥地產經紀",
      "itemListElement": ARTICLES.map((a, i) => ({ "@type": "ListItem", "position": i + 1, "url": articleUrl(a, lang), "name": pick(lang, a.titleZh, a.title) })),
    });
    const hf = (D.pageFaqs || {}).home;
    if (hf && hf.items && hf.items.length) out.push(faqPage(hf.items, lang));
    return out;
  }
  const page = { "@context": "https://schema.org", "name": meta.title, "description": meta.description, "url": url, "inLanguage": lang === "zh" ? "zh-Hant" : "en-US" };
  if (route === "about") out.push({ ...page, "@type": "AboutPage", "mainEntity": { "@id": AGENT_ID } });
  if (route === "contact") out.push({ ...page, "@type": "ContactPage", "mainEntity": { "@id": AGENT_ID } });
  if (route === "articles") out.push({
    ...page, "@type": "CollectionPage",
    "hasPart": ARTICLES.map((a) => ({ "@type": "Article", "headline": pick(lang, a.titleZh, a.title), "url": articleUrl(a, lang), "datePublished": a.date })),
  });
  // Exactly the questions and answers the page shows.
  if (route === "faq") out.push(faqPage(FAQS, lang));
  if (route === "exchange") out.push(faqPage(FAQS.filter((f) => f.g === "investing"), lang));
  const pf = (D.pageFaqs || {})[route];
  if (pf && pf.items && pf.items.length) out.push(faqPage(pf.items, lang));
  out.push(crumbs(route, lang));
  return out;
}

// ---- render ----
function render(route, lang) {
  return renderToString(React.createElement(App, { initial: { route, lang } }));
}

function page(route, lang) {
  const meta = pageMeta(route, lang);
  const path = routePath(route, lang);
  const url = abs(path);
  const en = abs(routePath(route, "en"));
  const zh = abs(routePath(route, "zh"));
  const isHome = route === "home";
  const body = render(route, lang);
  const ogImage = SITE + "/uploads/hero-san-diego-dusk.jpg";

  const html = `<!DOCTYPE html>
<html lang="${lang === "zh" ? "zh-Hant" : "en"}" style="${esc(HTML_STYLE)}">
<head>
<!-- GENERATED by tools/build-pages.mjs from the .jsx sources — do not hand-edit. -->
<base href="/" />
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(meta.title)}</title>
<meta name="description" content="${esc(meta.description)}" />
${isHome && lang === "en" ? `<meta name="keywords" content="Jean Riley, Sold by Jean, San Diego Realtor, San Diego real estate, La Jolla homes, Mira Mesa, Carmel Valley, Carlsbad, Rancho Santa Fe, 1031 exchange San Diego, Jeanify, Mandarin speaking realtor San Diego, DRE 02004228" />\n` : ""}<meta name="author" content="Jean Riley" />
<meta name="robots" content="${route === "listings/active" ? "noindex, follow" : "index, follow, max-image-preview:large"}" />
<link rel="canonical" href="${url}" />
<link rel="alternate" hreflang="en" href="${en}" />
<link rel="alternate" hreflang="zh-Hant" href="${zh}" />
<link rel="alternate" hreflang="x-default" href="${en}" />

<meta property="og:type" content="website" />
<meta property="og:title" content="${esc(meta.title)}" />
<meta property="og:description" content="${esc(meta.description)}" />
<meta property="og:image" content="${ogImage}" />
<meta property="og:url" content="${url}" />
<meta property="og:locale" content="${lang === "zh" ? "zh_TW" : "en_US"}" />
<meta property="og:locale:alternate" content="${lang === "zh" ? "en_US" : "zh_TW"}" />
<meta property="og:site_name" content="Jeanify · Jean Riley Real Estate" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(meta.title)}" />
<meta name="twitter:description" content="${esc(meta.description)}" />
<meta name="twitter:image" content="${ogImage}" />

<link rel="icon" href="favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="apple-touch-icon.png" />
<meta name="theme-color" content="#0b0d10" />
${HASH_FORWARD}
<link rel="preload" as="image" href="uploads/jeanify-logo-brass.webp" type="image/webp" fetchpriority="high" />
${isHome ? `<!-- The hero photo is a CSS background: fetch it now rather than after styles.css
     is parsed. Same files and media query as .hero-bg in styles.css. -->
<link rel="preload" as="image" href="uploads/hero-san-diego-dusk-portrait.webp" type="image/webp" media="(max-aspect-ratio: 2/3)" fetchpriority="high" />
<link rel="preload" as="image" href="uploads/hero-san-diego-dusk.webp" type="image/webp" media="not all and (max-aspect-ratio: 2/3)" fetchpriority="high" />
` : ""}${CSS}
${schemaFor(route, lang, meta, url).map((s) => `<script type="application/ld+json">\n${jsonld(s)}\n</script>`).join("\n")}
${GA}
</head>
<body>
<div id="root">${body}</div>
<!-- /root -->

${SCRIPTS}
</body>
</html>
`;
  return { path, html };
}

let n = 0;
for (const [route] of ROUTES) {
  for (const lang of LANGS) {
    const { path, html } = page(route, lang);
    const file = join(ROOT, path.endsWith("/") ? path + "index.html" : path);
    await mkdir(dirname(file), { recursive: true });
    const prev = await readFile(file, "utf8").catch(() => null);
    if (prev !== html) await writeFile(file, html, "utf8");
    n++;
  }
}
console.log(`  →  ${n} prerendered pages (${ROUTES.length} routes × ${LANGS.length} languages)`);

// ---- sitemap ----
const alt = (en, zh) =>
  `    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>\n` +
  `    <xhtml:link rel="alternate" hreflang="zh-Hant" href="${zh}"/>\n` +
  `    <xhtml:link rel="alternate" hreflang="x-default" href="${en}"/>`;
const entry = (loc, { lastmod, cf, pr, en, zh }) =>
  `  <url>\n    <loc>${loc}</loc>\n` +
  (lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : "") +
  (cf ? `    <changefreq>${cf}</changefreq>\n` : "") +
  (pr ? `    <priority>${pr}</priority>\n` : "") +
  (en ? alt(en, zh) + "\n" : "") +
  `  </url>`;

const urls = [];
for (const [route, cf, pr, inMap] of ROUTES) {
  if (inMap === false) continue;
  const en = abs(routePath(route, "en")), zh = abs(routePath(route, "zh"));
  for (const loc of [en, zh]) urls.push(entry(loc, { cf, pr, en, zh }));
}
for (const a of ARTICLES) {
  const en = articleUrl(a, "en"), zh = articleUrl(a, "zh");
  const has = ARTICLES_ZH[a.slug];
  for (const loc of has ? [en, zh] : [en]) {
    urls.push(entry(loc, { lastmod: a.updated || a.date, cf: "monthly", pr: "0.8", en: has ? en : null, zh }));
  }
}
// Listed under SITE because a sitemap may only contain URLs on its own host.
urls.push(entry(SITE + "/card/", { cf: "yearly", pr: "0.6" }));

await writeFile(
  join(ROOT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<!-- Generated by tools/build-pages.mjs — do not edit by hand. -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`,
  "utf8",
);
console.log(`  →  sitemap.xml  (${urls.length} URLs)`);
