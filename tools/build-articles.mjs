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
 * Chinese pages are built from the articles-content-zh.js overlay (zipped by index —
 * tools/check-zh.mjs keeps the two aligned) at zh/articles/<slug>.html, and each pair
 * carries hreflang en / zh-Hant / x-default.
 *
 * The articles index (/articles/) and sitemap.xml are written by tools/build-pages.mjs.
 *
 * Run:  npm run build:articles
 * Output: articles/<slug>.html, zh/articles/<slug>.html
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { siteCss } from "./site-css.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

// Production origin. The SPA's own canonical (index.html) points here too — if the
// site moves domains, change it in both places.
const SITE = process.env.JEANIFY_SITE || "https://www.soldbyjean.com";

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
const load = async (file, key) => {
  const w = {};
  new Function("window", await readFile(join(ROOT, file), "utf8"))(w);
  return w[key];
};
const ARTICLES = await load("articles-content.js", "JR_ARTICLES");
const ARTICLES_ZH = await load("articles-content-zh.js", "JR_ARTICLES_ZH");
if (!Array.isArray(ARTICLES) || !ARTICLES.length) {
  console.error("No articles found in articles-content.js");
  process.exit(1);
}
const DATA = await load("data.js", "JR_DATA");
const CSS = await siteCss();

const esc = (s) => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

// JSON-LD is injected inside a <script> element, so "<" must not survive raw.
const jsonld = (obj) => JSON.stringify(obj, null, 2).replace(/</g, "\\u003c");

const headingId = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// ---- language ----
// Every Chinese string below is the one ArticleDetail (pages.jsx) already shows.
const CAT_ZH = { "Buyer Guide": "買家指南", "Seller Guide": "賣家指南", "Investor": "投資人", "Market": "市場分析", "International": "海外買家" };
const T = {
  en: {
    html: "en", inLang: "en-US", home: "Home", res: "Resources", by: "By", updated: " · Updated ",
    answer: "The short answer", toc: "On this page", faqEy: "FAQ", faqH: "Frequently asked", sources: "Sources",
    disclaimer: "Market figures are current as of the date shown and change frequently. Nothing here is tax or legal advice — for your specific situation, consult a CPA or attorney.",
    keep: "Keep reading", related: "Related articles", next: "Next Step", nextH: "Questions about your own situation?", cta: "Schedule a Consultation",
    photo: "Photo by ", on: " on ", footer: "Equal Housing Opportunity · MLS Member", locale: "en_US", altLocale: "zh_TW",
    cat: (c) => c, read: (r) => r + " read", cardRead: (r) => r,
    date: (iso) => { const [y, m, d] = iso.split("-").map(Number); return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }); },
    title: (a) => a.metaTitle, desc: (a) => a.metaDesc, h1: (a) => a.title, dek: (a) => a.dek, ans: (a) => a.answer,
  },
  zh: {
    html: "zh-Hant", inLang: "zh-Hant", home: "首頁", res: "資源", by: "作者", updated: " · 更新於 ",
    answer: "重點摘要", toc: "本頁內容", faqEy: "常見問題", faqH: "常見問題", sources: "資料來源",
    disclaimer: "文中市場數據截至標示日期，並會持續變動。本文不構成稅務或法律建議，請就個人情況諮詢會計師或律師。",
    keep: "延伸閱讀", related: "相關文章", next: "下一步", nextH: "想討論您的個人情況？", cta: "預約諮詢",
    photo: "照片：", on: "，來源 ", footer: "公平住房機會 · MLS 會員", locale: "zh_TW", altLocale: "en_US",
    cat: (c) => CAT_ZH[c] || c, read: (r) => r.replace(/\s*min$/, " 分鐘") + "閱讀", cardRead: (r) => r.replace(/\s*min$/, " 分鐘"),
    date: (iso) => { const [y, m, d] = iso.split("-").map(Number); return `${y} 年 ${m} 月 ${d} 日`; },
    title: (a) => a.titleZh + " | Jean Riley 聖地牙哥地產經紀", desc: (a) => a.dekZh, h1: (a) => a.titleZh, dek: (a) => a.dekZh, ans: (a) => a.answerZh,
  },
};
const prefix = (lang) => (lang === "zh" ? "/zh" : "");
const artPath = (slug, lang) => `${prefix(lang)}/articles/${slug}.html`;
const appPath = (p, lang) => (lang === "zh" ? "/zh" + p : p);   // same scheme as routePath in core.jsx

// Articles without a photo fall through to the CSS gradient placeholder.
const cardImg = (a) => a.image
  ? `<div class="article-img has-image" style="background-image:url(/${encodeURI(a.image.replace(/^\//, "").replace(/\.(jpe?g|png)$/i, ".webp"))});background-size:cover;background-position:center"></div>`
  : `<div class="article-img"></div>`;

// Mirrors ArticleBlock in pages.jsx. Add block types to both. `b` is the English block
// (it supplies the anchor id, so URLs stay ASCII); `d` is the block shown.
function renderBlock(b, d = b) {
  switch (b.t) {
    case "h":
      return `<h2 class="art-h" id="${headingId(b.x)}">${esc(d.x)}</h2>`;
    case "ul":
      return `<ul class="art-list">${d.x.map((li) => `<li>${esc(li)}</li>`).join("")}</ul>`;
    case "ol":
      return `<ol class="art-list art-list-num">${d.x.map((li) => `<li>${esc(li)}</li>`).join("")}</ol>`;
    case "callout":
      return `<aside class="art-callout">${esc(d.x)}</aside>`;
    case "table":
      return `<div class="art-table-wrap"><table class="art-table">` +
        `<thead><tr>${d.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>` +
        `<tbody>${d.rows.map((r) => `<tr>` +
          r.map((c, j) => j === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`).join("") +
        `</tr>`).join("")}</tbody></table></div>`;
    default:
      return `<p class="art-p">${esc(d.x)}</p>`;
  }
}

function articleSchema(a, url, lang, faqs) {
  const t = T[lang];
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": t.h1(a),
      "description": t.desc(a),
      "abstract": t.ans(a),
      "articleSection": t.cat(a.category),
      "url": url,
      "mainEntityOfPage": { "@type": "WebPage", "@id": url },
      "datePublished": a.date,
      "dateModified": a.updated || a.date,
      ...(lang === "en" ? { "wordCount": countWords(a) } : {}),
      "inLanguage": t.inLang,
      ...(a.image ? { "image": SITE + "/" + a.image.replace(/^\//, "") } : {}),
      "author": {
        "@type": "Person",
        "name": AGENT.name,
        "jobTitle": "Realtor®",
        "url": SITE + appPath("/about/", lang),
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
      "inLanguage": t.inLang,
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": t.home, "item": SITE + appPath("/", lang) },
        { "@type": "ListItem", "position": 2, "name": t.res, "item": SITE + appPath("/articles/", lang) },
        { "@type": "ListItem", "position": 3, "name": t.h1(a), "item": url },
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

const GA = `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-YS26F5FFHR');
addEventListener('load',function(){setTimeout(function(){var s=document.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtag/js?id=G-YS26F5FFHR';document.head.appendChild(s);},1500);});</script>
<script src="https://admin.shiptolive.com/stl-track.js" data-site="soldbyjean" data-leads="1" defer></script>`;

function head(a, lang, url, enUrl, zhUrl, faqs) {
  const t = T[lang];
  return `<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(t.title(a))}</title>
<meta name="description" content="${esc(t.desc(a))}" />
<meta name="author" content="${esc(AGENT.name)}" />
<meta name="robots" content="index, follow, max-image-preview:large" />
<link rel="canonical" href="${url}" />
<link rel="alternate" hreflang="en" href="${enUrl}" />
<link rel="alternate" hreflang="zh-Hant" href="${zhUrl}" />
<link rel="alternate" hreflang="x-default" href="${enUrl}" />
<meta property="og:type" content="article" />
<meta property="og:title" content="${esc(t.title(a))}" />
<meta property="og:description" content="${esc(t.desc(a))}" />
<meta property="og:url" content="${url}" />
<meta property="og:locale" content="${t.locale}" />
<meta property="og:locale:alternate" content="${t.altLocale}" />
<meta property="og:site_name" content="Jeanify · Jean Riley Real Estate" />
<meta property="article:published_time" content="${a.date}" />
<meta property="article:modified_time" content="${a.updated || a.date}" />
<meta property="article:section" content="${esc(t.cat(a.category))}" />
${a.image ? `<meta property="og:image" content="${SITE}/${a.image.replace(/^\//, "")}" />` : ""}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(t.title(a))}" />
<meta name="twitter:description" content="${esc(t.desc(a))}" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<meta name="theme-color" content="#0b0d10" />
${CSS}
${articleSchema(a, url, lang, faqs).map((s) => `<script type="application/ld+json">\n${jsonld(s)}\n</script>`).join("\n")}
${GA}`;
}

function nav(lang, enPath, zhPath) {
  const n = DATA.i18n[lang].nav;
  const toggle = (cls) => `<div class="lang-toggle${cls}"><a href="${enPath}" hreflang="en" lang="en"${lang === "en" ? ` class="active" aria-current="true"` : ""}>EN</a><a href="${zhPath}" hreflang="zh-Hant" lang="zh-Hant"${lang === "zh" ? ` class="active" aria-current="true"` : ""}>中文</a></div>`;
  const link = (p, label, active) => `<a class="nav-link${active ? " active" : ""}" href="${appPath(p, lang)}">${esc(label)}</a>`;
  return `<nav class="nav scrolled">
  <a class="nav-brand" href="${appPath("/", lang)}" aria-label="Jeanify — Home">
    <img class="nav-brand-img" src="/uploads/jeanify-logo-brass.webp" alt="Jeanify" width="300" height="133" />
  </a>
  <div class="nav-links">
    ${link("/", n.home)}
    ${link("/about/", n.about)}
    ${link("/articles/", n.articles, true)}
    ${link("/faq/", n.faq)}
    ${link("/1031-exchange/", n.exchange)}
    ${link("/contact/", n.contact)}
  </div>
  <div class="nav-right">
    <span class="nav-phone">${AGENT.phoneDisplay}</span>
    ${toggle("")}
  </div>
  ${toggle(" nav-lang-solo")}
</nav>`;
}

const footer = (lang) => `<footer class="footer">
  <div class="container">
    <div class="footer-bottom" style="border-top:none;">
      <span>© 2026 ${esc(AGENT.name)} · ${esc(AGENT.license)} · ${esc(AGENT.brokerage)}</span>
      <span>${T[lang].footer}</span>
    </div>
  </div>
</footer>`;

let written = 0;
for (const lang of ["en", "zh"]) {
  const t = T[lang];
  for (const a of ARTICLES) {
    const z = lang === "zh" ? ARTICLES_ZH[a.slug] : null;
    if (lang === "zh" && !z) { console.warn(`  !  no Chinese body for ${a.slug} — skipped`); continue; }
    const enPath = artPath(a.slug, "en"), zhPath = artPath(a.slug, "zh");
    const url = SITE + artPath(a.slug, lang);
    const sections = a.sections.map((b, i) => [b, z ? z.sections[i] || b : b]);
    const headings = sections.filter(([b]) => b.t === "h");
    const faqs = z ? z.faqs : a.faqs;
    const related = (a.related || []).map((s) => ARTICLES.find((x) => x.slug === s)).filter(Boolean);
    const home = appPath("/", lang), res = appPath("/articles/", lang);

    const html = `<!DOCTYPE html>
<html lang="${t.html}">
<head>
${head(a, lang, url, SITE + enPath, SITE + zhPath, faqs)}
</head>
<body>
${nav(lang, enPath, zhPath)}

<main>
<article class="page-fade">
  <header class="page-head">
    <div class="container-tight">
      <div class="breadcrumbs">
        <a href="${home}">${t.home}</a><span>/</span><a href="${res}">${t.res}</a><span>/</span>${esc(t.cat(a.category))}
      </div>
      <span class="eyebrow">${esc(t.cat(a.category))}</span>
      <h1 style="margin-top:20px">${esc(t.h1(a))}</h1>
      <p class="lede">${esc(t.dek(a))}</p>
      <div class="art-byline">
        <span>${t.by} <strong>${esc(AGENT.name)}</strong> · ${esc(AGENT.license)}</span>
        <span>${t.date(a.date)}${a.updated && a.updated !== a.date ? t.updated + t.date(a.updated) : ""}</span>
        <span>${esc(t.read(a.read))}</span>
      </div>
    </div>
  </header>

  <div class="section">
    <div class="container-tight">
      <div class="art-answer">
        <span class="eyebrow no-rule">${t.answer}</span>
        <p>${esc(t.ans(a))}</p>
      </div>

${headings.length > 2 ? `      <nav class="art-toc" aria-label="${t.toc}">
        <span class="eyebrow no-rule">${t.toc}</span>
        <ol>
${headings.map(([b, d]) => `          <li><a href="#${headingId(b.x)}">${esc(d.x)}</a></li>`).join("\n")}
        </ol>
      </nav>` : ""}

      <div class="art-body">
${sections.map(([b, d]) => "        " + renderBlock(b, d)).join("\n")}
      </div>
${a.credit ? `      <div class="article-credit" style="margin-top:32px">
        ${t.photo}<a href="${esc(a.credit.url)}?utm_source=jean_riley&amp;utm_medium=referral" target="_blank" rel="noopener noreferrer">${esc(a.credit.name)}</a>${t.on}<a href="https://unsplash.com/?utm_source=jean_riley&amp;utm_medium=referral" target="_blank" rel="noopener noreferrer">Unsplash</a>
      </div>` : ""}
    </div>
  </div>

  <section class="section" style="background:var(--bg-elev)">
    <div class="container">
      <div class="sect-head"><div class="sect-head-title">
        <span class="eyebrow">${t.faqEy}</span>
        <h2 style="margin-top:16px">${t.faqH}</h2>
      </div></div>
      <div class="container-tight" style="padding:0">
${faqs.map((f) => `        <div class="faq-item open">
          <div class="faq-q"><h3>${esc(f.q)}</h3></div>
          <div class="faq-a" style="max-height:none;margin-top:16px">${esc(f.a)}</div>
        </div>`).join("\n")}
      </div>
    </div>
  </section>

  <section class="section-sm">
    <div class="container-tight">
      <span class="eyebrow">${t.sources}</span>
      <ul class="art-sources">
${a.sources.map((s) => `        <li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.name)}</a></li>`).join("\n")}
      </ul>
      <p class="art-disclaimer">${t.disclaimer}</p>
    </div>
  </section>
${related.length ? `
  <section class="section">
    <div class="container">
      <div class="sect-head"><div class="sect-head-title">
        <span class="eyebrow">${t.keep}</span>
        <h2 style="margin-top:16px">${t.related}</h2>
      </div></div>
      <div class="grid-3">
${related.map((r) => `        <a class="article-card" href="${artPath(r.slug, lang)}">
          ${cardImg(r)}
          <div class="article-meta">${esc(t.cat(r.category))} · ${esc(t.cardRead(r.read))}</div>
          <h3>${esc(t.h1(r))}</h3>
          <p class="article-dek">${esc(t.dek(r))}</p>
        </a>`).join("\n")}
      </div>
    </div>
  </section>` : ""}

  <section class="section-sm">
    <div class="container-tight" style="padding:48px 32px;text-align:center;border:1px solid var(--line);background:var(--bg-elev)">
      <span class="eyebrow no-rule">${t.next}</span>
      <h2 style="margin:16px 0 24px">${t.nextH}</h2>
      <a class="btn btn-primary arrow-right" href="${appPath("/contact/", lang)}">${t.cta}</a>
      <p style="margin-top:24px;color:var(--ink-faint);font-size:14px">
        ${esc(AGENT.name)} · <a href="tel:${AGENT.phone}" style="color:var(--brass)">${AGENT.phoneDisplay}</a> ·
        <a href="mailto:${AGENT.email}" style="color:var(--brass)">${AGENT.email}</a>
      </p>
    </div>
  </section>
</article>
</main>

${footer(lang)}
</body>
</html>
`;

    const file = join(ROOT, artPath(a.slug, lang).slice(1));
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html, "utf8");
    written++;
    console.log(`  →  ${artPath(a.slug, lang).slice(1)}${lang === "en" ? `  (${countWords(a)} words, ${a.faqs.length} FAQ)` : ""}`);
  }
}
console.log(`\n${written} article page(s) generated for ${SITE}`);
