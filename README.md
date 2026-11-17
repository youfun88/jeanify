# jeanify

Static marketing site for **Jean Riley** — San Diego Realtor®.
React compiled ahead of time + CSS + assets. Served on GitHub Pages.

## Deploy (CI/CD)

Push to `main` → `.github/workflows/deploy.yml` publishes the repo root to GitHub Pages.

CI does **not** build. The `*.compiled.js` files, every prerendered page (`index.html`,
`about/`, `faq/`, `zh/` …), `articles/*.html` and `sitemap.xml` are committed artifacts,
so **run `npm run build` and commit the output** whenever you touch a `.jsx` file,
`data.js`, `articles-content*.js` or a build script.

## Local preview

```sh
npm run serve    # http://localhost:8000
```

## Build

```sh
npm install      # once — Babel, for the JSX transform
npm run build    # compile JSX + regenerate article pages and sitemap
```

| Command | Does |
| --- | --- |
| `npm run build:js` | Every root `*.jsx` → `*.compiled.js` (preset-react, wrapped in an IIFE) |
| `npm run build:articles` | `articles-content*.js` → `articles/*.html` and `zh/articles/*.html` |
| `npm run build:pages` | Prerenders every app page, English and Chinese, + `sitemap.xml` |
| `npm run build:card` | `card/` (digital business card) |
| `npm run build:v2` | `index.html` → `v2/index.html`, the white-background review build |
| `npm run build` | All of the above, then `check:zh` |

## Layout

```
index.html, about/, faq/ …   GENERATED — prerendered pages (tools/build-pages.mjs)
zh/                          GENERATED — the Chinese version of every page and article
data.js                      Listings, testimonials, videos, FAQs, i18n copy
articles-content.js          Article bodies — single source of truth (English)
articles-content-zh.js       Chinese article bodies, zipped onto the English by index
*.jsx  →  *.compiled.js
articles/                    GENERATED — do not hand-edit
sitemap.xml                  GENERATED — do not hand-edit
tools/                       Build scripts (tools/home-schema.json: the home page's
                             RealEstateAgent JSON-LD)
v2/                          White-background review build — light.css is hand-written,
                             index.html is GENERATED from ../index.html
```

### Routing and SEO

Every page is a real URL with its own static HTML, in English and Chinese:

| Page | English | Chinese |
| --- | --- | --- |
| Home | `/` | `/zh/` |
| About, FAQ, Videos, Contact, Home valuation | `/about/`, `/faq/`, `/videos/`, `/contact/`, `/estimator/` | same under `/zh/` |
| 1031 Exchange | `/1031-exchange/` | `/zh/1031-exchange/` |
| Listings | `/listings/`, `/listings/active/`, `/listing/<id>/` | same under `/zh/` |
| Guides | `/guides/buyer/`, `/guides/seller/`, `/guides/1031/` | same under `/zh/` |
| Resources index | `/articles/` | `/zh/articles/` |
| Articles | `/articles/<slug>.html` | `/zh/articles/<slug>.html` |

- **App pages** are rendered at build time by `tools/build-pages.mjs` with the real React
  components (`react-dom/server`, React 18.3.1 — the same version as `vendor/`). In the
  browser `app.jsx` hydrates that markup, so content is visible before any script runs, and
  in-app navigation uses `history.pushState`. Each page's `<title>` and description live in
  `PAGE_META` in `core.jsx` (keep titles ≤ 60 characters); its JSON-LD is in
  `tools/build-pages.mjs` (BreadcrumbList on every page but home; FAQPage on `/faq/` and
  `/1031-exchange/`, built from the same `data.js` FAQs the page shows).
- **The URL decides the language.** `routePath(route, lang)` / `pathRoute(path)` in
  `core.jsx` map between app routes (`"exchange"`, `"guides/buyer"`) and URLs. Links use
  `go.link(route)`, which gives a real `href` plus an in-app click handler. The EN / 中文
  toggle links to the same page in the other language. Every page pair carries a
  self-canonical and hreflang `en` / `zh-Hant` / `x-default` (English).
- **Old `#/` links** (`/#/faq`, `/index.html#/exchange`) are forwarded to the real path by a
  small inline script in each page's `<head>` (built from `routePath`), so bookmarks keep
  working. A visitor who last chose 中文 lands on the Chinese page.
- **Articles** are standalone static pages from `tools/build-articles.mjs` (no React), so if
  you add a block type, implement it in **both** `ArticleBlock` (`pages.jsx`) and
  `renderBlock` (`tools/build-articles.mjs`). `tools/check-zh.mjs` checks the Chinese overlay
  lines up with the English.
- **v2** keeps hash routing (`window.JR_ROUTER = "hash"`) and renders client-side, because
  it is a single file under `/v2/`.

Articles carry a quick-answer block, question-form headings and comparison tables on
purpose — those are the structures answer engines extract most reliably.

### Adding an article

1. Append an entry to `window.JR_ARTICLES` in `articles-content.js` (keep `metaTitle` ≤ 60
   characters), and its Chinese body to `articles-content-zh.js`.
2. Optionally drop a hero image in `uploads/articles/` and set `image` (omit it and the
   card falls back to a typographic placeholder).
3. `npm run build`, then commit the regenerated pages and `sitemap.xml`. Add it to `llms.txt`.

### Domain

The site is served at **https://www.soldbyjean.com** — a GitHub Pages custom domain.
The bare `soldbyjean.com` redirects to `www` (GitHub does this because the custom domain
is the `www` name and the apex also points at GitHub).

- **DNS** is hosted at Cloudflare (account yufansapp@gmail.com; the registrar, NameBright,
  only holds the nameservers). The apex has the four GitHub Pages `A` records
  (`185.199.108.153` – `185.199.111.153`) and `www` is a `CNAME` to `youfun88.github.io`.
- **HTTPS is Cloudflare's**, not GitHub's: all five records are **Proxied** (orange cloud),
  SSL/TLS mode is **Full**, Universal SSL issues the certificate, and **Always Use HTTPS**
  does the http → https redirect. GitHub cannot issue its own certificate behind the
  proxy, so leave GitHub's "Enforce HTTPS" off — turning both on risks a redirect loop.
  To go back to a GitHub certificate, set the records to DNS only, wait for GitHub to
  issue it, then enable "Enforce HTTPS" in Settings → Pages.
- **GitHub** holds the domain in Settings → Pages → Custom domain. Because this repo
  deploys with Actions, that setting is what counts; the `CNAME` file is kept as a record.
- **In the repo** the origin is set in `tools/agent.mjs`, `tools/build-articles.mjs` and `tools/build-pages.mjs`
  (both overridable with `JEANIFY_SITE`), and written out in `tools/build-pages.mjs`, `llms.txt`,
  `robots.txt` and `404.html`. Change them together.

`https://youfun88.github.io/jeanify/…` and `https://soldbyjean.com/…` redirect to
`https://www.soldbyjean.com/…` with the path kept.
