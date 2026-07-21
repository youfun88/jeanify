/* Generate crawlable static article pages from articles-content.js.
 *
 * Why this exists: the site is a hash-routed SPA, and search engines and AI
 * crawlers treat everything after "#" as the same URL. Without these files all
 * six articles would collapse into one indexable page sharing a single <title>,
 * a single meta description and no per-article schema.
 *
 * Each generated page gets its own canonical URL, title, description, Open Graph
 * tags, and Article + FAQPage + BreadcrumbList JSON-LD. The in-app SPA route
 * (#/articles/<slug>) renders the same content from the same source file, so the
 * two never drift.
 *
 * Run:  npm run build:articles
 * Output: articles/<slug>.html, articles/index.html
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = join(ROOT, "articles");

// Production origin. The SPA's own canonical (index.html) points here too — if the
// site moves domains, change it in both places.
const SITE = process.env.JEANIFY_SITE || "https://jeanriley.com";

const AGENT = {
  name: "Jean Riley",
  license: "DRE# 02004228",
  phone: "+1-858-598-3888",
  phoneDisplay: "(858) 598-3888",
  email: "Jean@CentermacSD.com",
  brokerage: "Jeanify",
  logo: SITE + "/uploads/jeanify-logo-brass.png",
};

// articles-content.js is a browser file that assigns to `window`. Give it one.
const src = await readFile(join(ROOT, "articles-content.js"), "utf8");
const sandbox = { window: {} };
new Function("window", src)(sandbox.window);
const ARTICLES = sandbox.window.JR_ARTICLES;
if (!Array.isArray(ARTICLES) || !ARTICLES.length) {
  console.error("No articles found in articles-content.js");
  process.exit(1);
}

const esc = (s) => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

// JSON-LD is injected inside a <script> element, so "<" must not survive raw.
const jsonld = (obj) => JSON.stringify(obj, null, 2).replace(/</g, "\\u003c");

const headingId = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Articles without a photo fall through to the CSS gradient placeholder.
const cardImg = (a) => a.image
  ? `<div class="article-img has-image" style="background-image:url(../${encodeURI(a.image)});background-size:cover;background-position:center"></div>`
  : `<div class="article-img"></div>`;

const longDate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  });
};

// Mirrors ArticleBlock in pages.jsx. Add block types to both.
function renderBlock(b) {
  switch (b.t) {
    case "h":
      return `<h2 class="art-h" id="${headingId(b.x)}">${esc(b.x)}</h2>`;
    case "ul":
      return `<ul class="art-list">${b.x.map((li) => `<li>${esc(li)}</li>`).join("")}</ul>`;
    case "ol":
      return `<ol class="art-list art-list-num">${b.x.map((li) => `<li>${esc(li)}</li>`).join("")}</ol>`;
    case "callout":
      return `<aside class="art-callout">${esc(b.x)}</aside>`;
    case "table":
      return `<div class="art-table-wrap"><table class="art-table">` +
        `<thead><tr>${b.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>` +
        `<tbody>${b.rows.map((r) => `<tr>` +
          r.map((c, j) => j === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`).join("") +
        `</tr>`).join("")}</tbody></table></div>`;
    default:
      return `<p class="art-p">${esc(b.x)}</p>`;
  }
}

function articleSchema(a, url) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": a.title,
      "description": a.metaDesc,
      "abstract": a.answer,
      "articleSection": a.category,
      "url": url,
      "mainEntityOfPage": { "@type": "WebPage", "@id": url },
      "datePublished": a.date,
      "dateModified": a.updated || a.date,
      "wordCount": countWords(a),
      "inLanguage": "en-US",
      ...(a.image ? { "image": SITE + "/" + a.image.replace(/^\//, "") } : {}),
      "author": {
        "@type": "Person",
        "name": AGENT.name,
        "jobTitle": "Realtor®",
        "url": SITE + "/#/about",
        "identifier": AGENT.license,
        "worksFor": { "@type": "RealEstateOrganization", "name": AGENT.brokerage },
      },
      "publisher": {
        "@type": "RealEstateAgent",
        "@id": SITE + "/#agent",
        "name": AGENT.name,
        "logo": { "@type": "ImageObject", "url": AGENT.logo },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": a.faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/" },
        { "@type": "ListItem", "position": 2, "name": "Articles", "item": SITE + "/articles/" },
        { "@type": "ListItem", "position": 3, "name": a.title, "item": url },
      ],
    },
  ];
}

function countWords(a) {
  const text = [a.answer, ...a.sections.flatMap((b) =>
    b.t === "table" ? [...b.head, ...b.rows.flat()] : Array.isArray(b.x) ? b.x : [b.x]
  )].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

const chrome = {
  head: (a, url) => `<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(a.metaTitle)}</title>
<meta name="description" content="${esc(a.metaDesc)}" />
<meta name="author" content="${esc(AGENT.name)}" />
<meta name="robots" content="index, follow, max-image-preview:large" />
<link rel="canonical" href="${url}" />
<meta property="og:type" content="article" />
<meta property="og:title" content="${esc(a.metaTitle)}" />
<meta property="og:description" content="${esc(a.metaDesc)}" />
<meta property="og:url" content="${url}" />
<meta property="og:site_name" content="Jeanify · Jean Riley Real Estate" />
<meta property="article:published_time" content="${a.date}" />
<meta property="article:modified_time" content="${a.updated || a.date}" />
<meta property="article:section" content="${esc(a.category)}" />
${a.image ? `<meta property="og:image" content="${SITE}/${a.image.replace(/^\//, "")}" />` : ""}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(a.metaTitle)}" />
<meta name="twitter:description" content="${esc(a.metaDesc)}" />
<link rel="icon" href="../favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="../apple-touch-icon.png" />
<meta name="theme-color" content="#0b0d10" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="../styles.css" />
${articleSchema(a, url).map((s) => `<script type="application/ld+json">\n${jsonld(s)}\n</script>`).join("\n")}`,

  nav: `<nav class="nav scrolled">
  <a class="nav-brand" href="../index.html" aria-label="Jeanify — Home">
    <img class="nav-brand-img" src="../uploads/jeanify-logo-brass.png" alt="Jeanify" />
  </a>
  <div class="nav-links">
    <a class="nav-link" href="../index.html#/home">Home</a>
    <a class="nav-link" href="../index.html#/about">About</a>
    <a class="nav-link active" href="./">Articles</a>
    <a class="nav-link" href="../index.html#/faq">FAQ</a>
    <a class="nav-link" href="../index.html#/exchange">1031 Exchange</a>
    <a class="nav-link" href="../index.html#/contact">Contact</a>
  </div>
  <div class="nav-right"><span class="nav-phone">${AGENT.phoneDisplay}</span></div>
</nav>`,

  footer: `<footer class="footer">
  <div class="container">
    <div class="footer-bottom" style="border-top:none;">
      <span>© 2026 ${esc(AGENT.name)} · ${esc(AGENT.license)} · ${esc(AGENT.brokerage)}</span>
      <span>Equal Housing Opportunity · MLS Member</span>
    </div>
  </div>
</footer>`,
};

await mkdir(OUT_DIR, { recursive: true });

for (const a of ARTICLES) {
  const url = `${SITE}/articles/${a.slug}.html`;
  const headings = a.sections.filter((s) => s.t === "h");
  const related = (a.related || []).map((s) => ARTICLES.find((x) => x.slug === s)).filter(Boolean);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
${chrome.head(a, url)}
</head>
<body>
${chrome.nav}

<article class="page-fade">
  <header class="page-head">
    <div class="container-tight">
      <div class="breadcrumbs">
        <a href="../index.html">Home</a><span>/</span><a href="./">Articles</a><span>/</span>${esc(a.category)}
      </div>
      <span class="eyebrow">${esc(a.category)}</span>
      <h1 style="margin-top:20px">${esc(a.title)}</h1>
      <p class="lede">${esc(a.dek)}</p>
      <div class="art-byline">
        <span>By <strong>${esc(AGENT.name)}</strong> · ${esc(AGENT.license)}</span>
        <span>${longDate(a.date)}${a.updated && a.updated !== a.date ? " · Updated " + longDate(a.updated) : ""}</span>
        <span>${esc(a.read)} read</span>
      </div>
    </div>
  </header>

  <div class="section">
    <div class="container-tight">
      <div class="art-answer">
        <span class="eyebrow no-rule">The short answer</span>
        <p>${esc(a.answer)}</p>
      </div>

${headings.length > 2 ? `      <nav class="art-toc" aria-label="On this page">
        <span class="eyebrow no-rule">On this page</span>
        <ol>
${headings.map((h) => `          <li><a href="#${headingId(h.x)}">${esc(h.x)}</a></li>`).join("\n")}
        </ol>
      </nav>` : ""}

      <div class="art-body">
${a.sections.map((b) => "        " + renderBlock(b)).join("\n")}
      </div>
${a.credit ? `      <div class="article-credit" style="margin-top:32px">
        Photo by <a href="${esc(a.credit.url)}?utm_source=jean_riley&amp;utm_medium=referral" target="_blank" rel="noopener noreferrer">${esc(a.credit.name)}</a>
        on <a href="https://unsplash.com/?utm_source=jean_riley&amp;utm_medium=referral" target="_blank" rel="noopener noreferrer">Unsplash</a>
      </div>` : ""}
    </div>
  </div>

  <section class="section" style="background:var(--bg-elev)">
    <div class="container">
      <div class="sect-head"><div class="sect-head-title">
        <span class="eyebrow">FAQ</span>
        <h2 style="margin-top:16px">Frequently asked</h2>
      </div></div>
      <div class="container-tight" style="padding:0">
${a.faqs.map((f) => `        <div class="faq-item open">
          <div class="faq-q"><span>${esc(f.q)}</span></div>
          <div class="faq-a" style="max-height:none;margin-top:16px">${esc(f.a)}</div>
        </div>`).join("\n")}
      </div>
    </div>
  </section>

  <section class="section-sm">
    <div class="container-tight">
      <span class="eyebrow">Sources</span>
      <ul class="art-sources">
${a.sources.map((s) => `        <li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.name)}</a></li>`).join("\n")}
      </ul>
      <p class="art-disclaimer">Market figures are current as of the date shown and change frequently. Nothing here is tax or legal advice — for your specific situation, consult a CPA or attorney.</p>
    </div>
  </section>
${related.length ? `
  <section class="section">
    <div class="container">
      <div class="sect-head"><div class="sect-head-title">
        <span class="eyebrow">Keep reading</span>
        <h2 style="margin-top:16px">Related articles</h2>
      </div></div>
      <div class="grid-3">
${related.map((r) => `        <a class="article-card" href="./${r.slug}.html">
          ${cardImg(r)}
          <div class="article-meta">${esc(r.category)} · ${esc(r.read)}</div>
          <h3>${esc(r.title)}</h3>
          <p class="article-dek">${esc(r.dek)}</p>
        </a>`).join("\n")}
      </div>
    </div>
  </section>` : ""}

  <section class="section-sm">
    <div class="container-tight" style="padding:48px 32px;text-align:center;border:1px solid var(--line);background:var(--bg-elev)">
      <span class="eyebrow no-rule">Next Step</span>
      <h2 style="margin:16px 0 24px">Questions about your own situation?</h2>
      <a class="btn btn-primary arrow-right" href="../index.html#/contact">Schedule a Consultation</a>
      <p style="margin-top:24px;color:var(--ink-faint);font-size:14px">
        ${esc(AGENT.name)} · <a href="tel:${AGENT.phone}" style="color:var(--brass)">${AGENT.phoneDisplay}</a> ·
        <a href="mailto:${AGENT.email}" style="color:var(--brass)">${AGENT.email}</a>
      </p>
    </div>
  </section>
</article>

${chrome.footer}
</body>
</html>
`;

  await writeFile(join(OUT_DIR, `${a.slug}.html`), html, "utf8");
  console.log(`  →  articles/${a.slug}.html  (${countWords(a)} words, ${a.faqs.length} FAQ)`);
}

// ---- index ----
const indexUrl = `${SITE}/articles/`;
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Articles — San Diego Real Estate Guides | Jean Riley, Realtor®</title>
<meta name="description" content="Working guides for San Diego buyers, sellers and 1031 investors — La Jolla buying, pre-listing preparation, Mello-Roos, comparative market analysis, exchange timing and buying from overseas." />
<meta name="robots" content="index, follow, max-image-preview:large" />
<link rel="canonical" href="${indexUrl}" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Articles — San Diego Real Estate Guides | Jean Riley" />
<meta property="og:url" content="${indexUrl}" />
<link rel="icon" href="../favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="../apple-touch-icon.png" />
<meta name="theme-color" content="#0b0d10" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="../styles.css" />
<script type="application/ld+json">
${jsonld({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Articles — Jean Riley, San Diego Realtor®",
  "url": indexUrl,
  "hasPart": ARTICLES.map((a) => ({
    "@type": "Article",
    "headline": a.title,
    "url": `${SITE}/articles/${a.slug}.html`,
    "datePublished": a.date,
    "description": a.metaDesc,
  })),
})}
</script>
</head>
<body>
${chrome.nav}
<div class="page-fade">
  <header class="page-head">
    <div class="container">
      <div class="breadcrumbs"><a href="../index.html">Home</a><span>/</span>Articles</div>
      <span class="eyebrow">Resources</span>
      <h1 style="margin-top:20px">Written for the <em>committed</em>.</h1>
      <p class="lede">Working playbooks and field notes for buyers, sellers and 1031 investors — the same frameworks I use with private clients, made public.</p>
    </div>
  </header>
  <section class="section">
    <div class="container">
      <div class="grid-3">
${ARTICLES.map((a) => `        <a class="article-card" href="./${a.slug}.html">
          ${cardImg(a)}
          <div class="article-meta">${esc(a.category)} · ${esc(a.read)}</div>
          <h3>${esc(a.title)}</h3>
          <p class="article-dek">${esc(a.dek)}</p>
        </a>`).join("\n")}
      </div>
    </div>
  </section>
</div>
${chrome.footer}
</body>
</html>
`;

await writeFile(join(OUT_DIR, "index.html"), indexHtml, "utf8");
console.log(`  →  articles/index.html`);

// ---- sitemap ----
// Generated here rather than hand-maintained so article URLs and lastmod dates
// can't drift. The hash-route entries are listed for completeness, but only the
// static /articles/*.html pages are independently indexable.
const hashRoutes = [
  ["", "weekly", "1.0"],
  ["#/about", "monthly", "0.9"],
  ["#/faq", "monthly", "0.8"],
  ["#/listings", "weekly", "0.9"],
  ["#/listings/active", "weekly", "0.7"],
  ["#/videos", "weekly", "0.8"],
  ["#/guides/buyer", "monthly", "0.6"],
  ["#/guides/seller", "monthly", "0.6"],
  ["#/guides/1031", "monthly", "0.6"],
  ["#/exchange", "monthly", "0.8"],
  ["#/contact", "yearly", "0.9"],
  ["#/estimator", "yearly", "0.8"],
];

const urls = [
  ...hashRoutes.map(([p, cf, pr]) =>
    `  <url>\n    <loc>${SITE}/${p}</loc>\n    <changefreq>${cf}</changefreq>\n    <priority>${pr}</priority>\n  </url>`),
  `  <url>\n    <loc>${SITE}/articles/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>`,
  ...ARTICLES.map((a) =>
    `  <url>\n    <loc>${SITE}/articles/${a.slug}.html</loc>\n    <lastmod>${a.updated || a.date}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`),
];

await writeFile(
  join(ROOT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<!-- Generated by tools/build-articles.mjs — do not edit by hand. -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
  "utf8"
);
console.log(`  →  sitemap.xml  (${urls.length} URLs)\n\n${ARTICLES.length} article page(s) + index generated for ${SITE}`);
