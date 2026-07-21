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

Canonical URLs point at `https://jeanriley.com`. It is set in two places — the `<link
rel="canonical">` tags in `index.html`, and the `SITE` constant in
`tools/build-articles.mjs` (overridable with `JEANIFY_SITE`). Change both together.
