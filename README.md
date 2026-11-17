# jeanify

Static marketing site for **Jean Riley** — San Diego Realtor®.
React compiled ahead of time + CSS + assets. Served on GitHub Pages.

## Deploy (CI/CD)

Push to `main` → `.github/workflows/deploy.yml` publishes the repo root to GitHub Pages.

CI does **not** build. The `*.compiled.js` files and `articles/*.html` are committed
artifacts, so **run `npm run build` and commit the output** whenever you touch a
`.jsx` file or `articles-content.js`.

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
| `npm run build:articles` | `articles-content.js` → `articles/*.html` + `sitemap.xml` |
| `npm run build:v2` | `index.html` → `v2/index.html`, the white-background review build |
| `npm run build` | Both |

## Layout

```
index.html            SPA shell + JSON-LD + <noscript> crawler fallback
data.js               Listings, testimonials, videos, FAQs, i18n copy
articles-content.js   Article bodies — single source of truth
*.jsx  →  *.compiled.js
articles/             GENERATED — do not hand-edit
sitemap.xml           GENERATED — do not hand-edit
tools/                Build scripts
v2/                   White-background review build — light.css is hand-written,
                      index.html is GENERATED from ../index.html
```

### Routing and SEO

The app is hash-routed (`#/about`, `#/articles/<slug>`), which crawlers collapse into a
single URL. So each article is published **twice**:

- `#/articles/<slug>` — the in-app route, rendered by `ArticleDetail` in `pages.jsx`
- `articles/<slug>.html` — a static page with its own `<title>`, meta description,
  canonical URL and `Article` + `FAQPage` + `BreadcrumbList` JSON-LD

Both render from `articles-content.js`, so they cannot drift apart in content. If you add
a new block type, implement it in **both** `ArticleBlock` (`pages.jsx`) and `renderBlock`
(`tools/build-articles.mjs`).

Articles carry a quick-answer block, question-form headings and comparison tables on
purpose — those are the structures answer engines extract most reliably.

### Adding an article

1. Append an entry to `window.JR_ARTICLES` in `articles-content.js`.
2. Optionally drop a hero image in `uploads/articles/` and set `image` (omit it and the
   card falls back to a typographic placeholder).
3. `npm run build`, then commit the regenerated `articles/` and `sitemap.xml`.
4. Add a line to the `<noscript>` article list and the `ItemList` JSON-LD in `index.html`.

### Domain

The site is served at **https://soldbyjean.com** — a GitHub Pages custom domain.

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
- **In the repo** the origin is set in `tools/agent.mjs` and `tools/build-articles.mjs`
  (both overridable with `JEANIFY_SITE`), and written out in `index.html`, `llms.txt`,
  `robots.txt` and `404.html`. Change them together.

`https://youfun88.github.io/jeanify/…` redirects to the custom domain with the path kept.
