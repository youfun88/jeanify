/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

const D = window.JR_DATA;

// ---------- Routing ----------
// Every page is a real, prerendered URL (tools/build-pages.mjs): /about/, /faq/,
// /1031-exchange/ …, with the Chinese pages under /zh/. A "route" is the app's
// internal name for a page ("about", "listings/active", "guides/buyer", "exchange");
// routePath() turns it into the URL and pathRoute() turns a URL back into it.
// Navigation inside the app uses history.pushState, so it stays a single-page app for
// visitors while every URL also exists as a static file for crawlers.
//
// routePath must stay self-contained (no outside references): the build inlines its
// source into each page's <head> to forward old #/hash links to the real path.
function routePath(route, lang) {
  var r = String(route || "").replace(/^#?\/?/, "").replace(/\/+$/, "");
  var p = r.split("/"), m = p[0], s = p[1], out;
  if (!m || m === "home") out = "/";
  else if (m === "exchange") out = "/1031-exchange/";
  else if (m === "guides") out = s ? "/guides/" + s + "/" : "/articles/";
  else if (m === "articles") out = s ? "/articles/" + s + ".html" : "/articles/";
  else if (m === "listings") out = s === "active" ? "/listings/active/" : "/listings/";
  else if (m === "listing") out = s ? "/listing/" + s + "/" : "/listings/";
  else if (/^(about|faq|estimator|contact|videos)$/.test(m)) out = "/" + m + "/";
  else out = "/";
  return (lang === "zh" ? "/zh" : "") + out;
}

function pathRoute(pathname) {
  var p = String(pathname || "/").replace(/index\.html$/, "");
  var lang = "en";
  if (/^\/zh(\/|$)/.test(p)) { lang = "zh"; p = p.slice(3); }
  p = p.replace(/^\/+|\/+$/g, "").replace(/\.html$/, "");
  var route = p === "" ? "home" : p === "1031-exchange" ? "exchange" : p;
  return { route: route, lang: lang };
}

// The v2 review build (v2/index.html) keeps the old hash routing: it is one file
// under /v2/, so real paths would leave it for the live site.
const HASH_MODE = typeof window !== "undefined" && window.JR_ROUTER === "hash";
const LANG_KEY = "jeanify.lang";
function storedLang() {
  try { const v = localStorage.getItem(LANG_KEY); return (v === "en" || v === "zh") ? v : null; }
  catch { return null; }   // private mode / storage disabled / prerender
}
function currentRoute() {
  if (HASH_MODE) return { route: window.location.hash.replace(/^#\/?/, "") || "home", lang: storedLang() || "en" };
  return pathRoute(window.location.pathname);
}

// Returns [{ route, lang }, go]. go(route) navigates; go(route, lang) also switches
// language. go.link(route) gives an <a>'s href + onClick, so links are real URLs that
// crawlers can follow and that open in a new tab, while a plain click stays in-app.
// `initial` is passed by the prerender, which has no window.location.
function useRoute(initial) {
  const [st, setSt] = useState(() => initial || currentRoute());
  const stRef = useRef(st);
  stRef.current = st;
  useEffect(() => {
    const ev = HASH_MODE ? "hashchange" : "popstate";
    const on = () => { setSt(currentRoute()); window.scrollTo(0, 0); };
    window.addEventListener(ev, on);
    return () => window.removeEventListener(ev, on);
  }, []);
  const go = (r, l) => {
    const cur = stRef.current;
    const lang = l || cur.lang;
    if (HASH_MODE) {
      if (l && l !== cur.lang) setSt((s) => ({ ...s, lang: l }));
      if (r !== cur.route) window.location.hash = "#/" + r;
      return;
    }
    const path = routePath(r, lang);
    // Articles are standalone static pages (tools/build-articles.mjs), not app routes.
    if (/^articles\/./.test(r)) { window.location.href = path; return; }
    const next = pathRoute(path);
    if (path !== window.location.pathname) window.history.pushState(null, "", path);
    setSt(next);
    if (next.route !== cur.route) window.scrollTo(0, 0);
  };
  go.link = (r, l) => ({
    href: HASH_MODE ? "#/" + r : routePath(r, l || st.lang),
    onClick: (e) => {
      if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      go(r, l);
    },
  });
  return [st, go];
}

// ---------- Per-page <title> and description ----------
// Read by tools/build-pages.mjs for each prerendered page's <head>, and by the app to
// keep document.title right while navigating in-app. Titles stay within 60 characters.
// Every string is taken from the page's own copy (its heading and lede).
const SUFFIX = { en: " | Jean Riley, San Diego Realtor®", zh: " | Jean Riley 聖地牙哥地產經紀" };
const PAGE_META = {
  home: {
    en: ["Jean Riley — San Diego Realtor® · Mandarin & Taiwanese", "San Diego Realtor® Jean Riley (DRE# 02004228) works in English, Mandarin and Taiwanese: homes, commercial property and 1031 exchanges. 200+ Zillow closings."],
    zh: ["Jean Riley — 聖地牙哥地產經紀 · 國語、台語、英語服務", "聖地牙哥地產經紀 Jean Riley（DRE# 02004228）可用國語、台語與英語服務：住宅、商業不動產與 1031 交換，Zillow 已驗證成交 200+。"],
  },
  about: {
    en: ["About Jean Riley · San Diego Realtor® · Mandarin & Taiwanese", "Realtor® Jean Riley · DRE# 02004228 · Jeanify · San Diego's Rising Star Real Estate Agent. I speak English, Mandarin and Taiwanese — and I specialize in the buying and selling of single-family homes and commercial properties across San Diego."],
    zh: ["認識 Jean Riley · 聖地牙哥中文房仲（國語、台語）", "Realtor® Jean Riley · DRE# 02004228 · Jeanify · 聖地牙哥新星地產經紀。我能以英語、國語與台語溝通，專注於聖地牙哥地區的獨立住宅與商業不動產買賣。"],
  },
  articles: {
    en: ["San Diego Real Estate Guides & Articles | Jean Riley", "Working playbooks and field notes for buyers, sellers and 1031 investors — the same frameworks I use with private clients, made public."],
    zh: ["資源中心" + SUFFIX.zh, "為買家、賣家與 1031 投資人整理的實務指南與市場札記，與我服務私人客戶時所用的是同一套方法。"],
  },
  faq: {
    en: ["San Diego Real Estate FAQ | Jean Riley, Realtor®", "Straight answers on commission, closing costs, down payments, insurance, Mello-Roos, Prop 19, 1031 exchanges and buying from overseas. If yours isn't here, call me — I'd rather answer it directly."],
    zh: ["常見問題" + SUFFIX.zh, "關於佣金、過戶費用、頭期款、房屋保險、Mello-Roos、Prop 19、1031 交換與海外購屋的直接解答。若未涵蓋您的問題，歡迎直接來電。"],
  },
  exchange: {
    en: ["1031 Exchange in San Diego | Jean Riley, Realtor®", "Defer capital gains on investment property — provided the calendar, paperwork and intermediary structure are exact. I handle each."],
    zh: ["1031 交換" + SUFFIX.zh, "投資性房產的資本利得遞延，前提是時程、文件與中介架構都精確無誤。這些細節，交給我來掌握。"],
  },
  listings: {
    en: ["Featured Homes" + SUFFIX.en, "Active representation, recent closings and rental opportunities across San Diego's coastal corridor and core urban neighborhoods."],
    zh: ["精選房源" + SUFFIX.zh, "涵蓋聖地牙哥沿海與市區核心社區的在售、近期成交與出租房源。"],
  },
  "listings/active": {
    en: ["Active Listings" + SUFFIX.en, "Jean isn't actively representing any properties for sale at the moment. Get in touch to be the first to hear when the next listing comes to market — or to talk about selling your own home."],
    zh: ["在售房源" + SUFFIX.zh, "Jean 目前暫無在售房源。歡迎與我聯絡，下一套物件上市時第一時間通知您；若您正考慮出售自己的房子，也歡迎聊聊。"],
  },
  videos: {
    en: ["Video Library" + SUFFIX.en, "Original songs written for individual listings, property tours, neighborhood walkthroughs and stories from clients and fellow agents — straight from Jean's YouTube channel."],
    zh: ["影片中心" + SUFFIX.zh, "為個別房源創作的原創歌曲、房源實地走訪、社區導覽，以及客戶與同業經紀人的真實分享，全部來自 Jean 的 YouTube 頻道。"],
  },
  "guides/buyer": {
    en: ["How to Buy a House in San Diego | Jean Riley, Realtor®", "Buying a house in San Diego, step by step: pre-approval, discovery, search, diligence, offer, inspection, appraisal and close. From Realtor® Jean Riley."],
    zh: ["買家指南" + SUFFIX.zh, "買家指南：從預先批貸到拿到鑰匙。貸款預審、了解需求、搜尋物件、盡職查核、出價、驗屋、鑑價與交割。"],
  },
  "guides/seller": {
    en: ["The Seller's Guide" + SUFFIX.en, "The Seller's Guide: pricing, preparation, marketing and negotiation. Valuation, preparation, photography, marketing, showings, negotiation, escrow and hand-off."],
    zh: ["聖地牙哥賣房指南 · 中文房仲 Jean Riley", "想賣掉聖地牙哥的房子？賣家指南：估價、整理準備、攝影、行銷、帶看、談判、履約保證與交屋。Jean Riley 可用國語、台語與英語服務。"],
  },
  "guides/1031": {
    en: ["1031 Exchange Primer" + SUFFIX.en, "1031 Exchange Primer: identification windows and replacement strategy. Pre-sale planning, qualified intermediary, Day 0, identification, replacement close and filing."],
    zh: ["1031 交換入門" + SUFFIX.zh, "1031 交換入門：識別期與替代房產策略。售前規劃、合格中介、第 0 天、書面指定、替代標的交割與申報。"],
  },
  contact: {
    en: ["Contact Jean Riley | San Diego Realtor®", "Whether you're considering a move next month or next year — the conversation begins the same way. Reach out, and we'll find time for an unhurried first call."],
    zh: ["聯絡 Jean" + SUFFIX.zh, "無論您計劃下月還是明年置業，對話的起點都一樣。請聯絡我，我們安排一次從容的初次通話。"],
  },
  estimator: {
    en: ["Home Valuation" + SUFFIX.en, "No automated number — Jean reviews each request personally and prepares a written CMA, usually within 48 hours."],
    zh: ["房屋估價" + SUFFIX.zh, "不提供自動估價。每一份請求都由 Jean 親自審閱，通常在 48 小時內提供書面 CMA。"],
  },
};
// Returns { title, description } for a route. Listing pages are built from the data.
function pageMeta(route, lang) {
  const L = lang === "zh" ? "zh" : "en";
  const [main, sub] = String(route).split("/");
  if (main === "listing") {
    const l = D.listings.find((x) => x.id === sub);
    if (l) {
      const closed = l.status === "sold" ? (L === "en" ? "Closed by Jean Riley" : "由 Jean Riley 成交") : (L === "en" ? "Represented by Jean Riley" : "由 Jean Riley 代理");
      let title = l.street + ", " + l.area.split(",")[0] + SUFFIX[L];
      if (title.length > 60) title = l.street + SUFFIX[L];
      if (title.length > 60) title = l.street + " | Jean Riley";
      return { title, description: l.street + ", " + l.area + " — " + l.price + ". " + closed + ", " + D.agent.brokerage + " · " + D.agent.license + "." };
    }
  }
  const key = PAGE_META[route] ? route : PAGE_META[main] ? main : "home";
  const [title, description] = PAGE_META[key][L];
  return { title, description };
}

// ---------- Tweaks defaults ----------
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "en",
  "accent": "#c9a567",
  "density": "spacious",
  "fontPair": "cormorant-inter"
}/*EDITMODE-END*/;

const FONT_PAIRS = {
  "cormorant-inter": { display: '"Cormorant Garamond", Garamond, "Times New Roman", serif', body: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif', label: "Cormorant + Inter" },
  "playfair-inter": { display: '"Playfair Display", Garamond, serif', body: '"Inter", Helvetica, sans-serif', label: "Playfair + Inter" },
  "fraunces-mono": { display: '"Fraunces", Garamond, serif', body: '"IBM Plex Sans", Helvetica, sans-serif', label: "Fraunces + Plex" },
};

const ACCENT_OPTIONS = [
  "#c9a567", // brass
  "#b08968", // bronze
  "#9aa67f", // sage
  "#a17a8a", // dusty rose
];

// ---------- Language toggle ----------
// Real links to the same page in the other language (/faq/ <-> /zh/faq/), so crawlers
// find both versions; a plain click switches in place.
function LangToggle({ route, go, lang, setLang }) {
  const item = (l, label) => {
    const { href } = go.link(route, l);
    return (
      <a href={href} hrefLang={l === "zh" ? "zh-Hant" : "en"} lang={l === "zh" ? "zh-Hant" : "en"}
         className={lang === l ? "active" : ""} aria-current={lang === l ? "true" : undefined}
         onClick={(e) => {
           if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
           e.preventDefault();
           setLang(l);
         }}>{label}</a>
    );
  };
  return <div className="lang-toggle">{item("en", "EN")}{item("zh", "中文")}</div>;
}

// ---------- Top nav ----------
function Nav({ route, go, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Lock body scroll + close on route change / Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open]);
  useEffect(() => { setOpen(false); }, [route]);
  const t = D.i18n[lang].nav;
  // Listings and Videos are deliberately absent — both are sections on the home
  // page, each with a "view all" link into their still-live /listings and /videos
  // routes. Keeps the bar to six items without orphaning any content.
  const links = [
    { id: "home", label: t.home },
    { id: "about", label: t.about },
    { id: "articles", label: t.articles },
    { id: "faq", label: t.faq },
    { id: "exchange", label: t.exchange },
    { id: "contact", label: t.contact },
  ];
  return (
    <>
      <nav className={"nav" + (scrolled ? " scrolled" : "")}>
        {/* The wordmark alone never says whose practice this is. The name sits beside
            it as a lockup — visible on mobile too, where the links and phone are
            hidden and the bar is mostly empty anyway. */}
        <a className="nav-brand" {...go.link("home")} aria-label={lang === "zh" ? "Jeanify — Jean Riley，聖地牙哥地產經紀 — 首頁" : "Jeanify — Jean Riley, San Diego Realtor — Home"}>
          <img className="nav-brand-img" src="uploads/jeanify-logo-brass.webp" alt="Jeanify" width="300" height="133" />
          <span className="nav-brand-name">
            <strong>Jean Riley</strong>
            <small>{lang === "en" ? "Realtor® · " : "地產經紀 · "}{D.agent.license}</small>
          </span>
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.id} {...go.link(l.id)}
               className={"nav-link" + (route.split("/")[0] === l.id ? " active" : "")}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <a className="nav-phone" href={"tel:" + D.agent.phone.replace(/[^0-9+]/g, "")}>{D.agent.phone}</a>
          <LangToggle route={route} go={go} lang={lang} setLang={setLang} />
        </div>
        <button
          type="button"
          className={"nav-burger" + (open ? " open" : "")}
          aria-label={lang === "zh" ? (open ? "關閉選單" : "開啟選單") : (open ? "Close menu" : "Open menu")}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
      {open && (
        <div className="nav-mobile" role="dialog" aria-modal="true">
          <div className="nav-mobile-backdrop" onClick={() => setOpen(false)}></div>
          <aside className="nav-mobile-panel">
            <button
              type="button"
              className="nav-mobile-close"
              aria-label={lang === "zh" ? "關閉選單" : "Close menu"}
              onClick={() => setOpen(false)}
            >×</button>
            <div className="nav-mobile-links">
              {links.map((l) => (
                <a key={l.id} {...go.link(l.id)}
                   className={"nav-mobile-link" + (route.split("/")[0] === l.id ? " active" : "")}>
                  {l.label}
                </a>
              ))}
            </div>
            <div className="nav-mobile-foot">
              <LangToggle route={route} go={go} lang={lang} setLang={setLang} />
              <a className="nav-mobile-call" href={"tel:" + D.agent.phone.replace(/[^0-9+]/g, "")}>
                {lang === "en" ? "Call " : "撥打 "}{D.agent.phone}
              </a>
              <a className="nav-mobile-email" href={"mailto:" + D.agent.email}>{D.agent.email}</a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

// In-page anchors, without breaking the router.
//
// A bare href="#some-heading" replaces the whole location hash, so the hash router
// reads "some-heading" as a route, finds nothing, and falls through to the home
// page. Anchors therefore scroll manually and never touch the URL. (The generated
// static article pages have no router, so their plain #anchors are fine as-is.)
function scrollToId(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  // Focus first: moving focus can abort an in-flight smooth scroll, and the skip
  // link is useless if focus doesn't travel with the viewport.
  if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

// ---------- Newsletter ----------
// This used to be a bare input + button with no handler — it accepted an email
// address and did nothing with it. It now posts to the same inbox as the contact form.
function NewsletterSignup({ lang, go }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setStatus("error"); return; }
    setStatus("sending");
    try {
      const body = new FormData();
      body.set("access_key", "b5f6ae82-dc56-42c1-b3a0-79ee29d3586d");
      body.set("email", email);
      body.set("subject", "JeanRiley.com — Market briefing signup: " + email);
      body.set("from_name", "JeanRiley.com Newsletter");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST", headers: { Accept: "application/json" }, body,
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) { setStatus("sent"); setEmail(""); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  if (status === "sent") {
    return (
      <p className="footer-newsletter-done">
        {lang === "en"
          ? <>You're on the list. The current Summer 2026 briefings are <a {...go.link("articles")} style={{color:"var(--brass)"}}>ready to download now</a>, and Jean sends the next one each season.</>
          : <>訂閱完成。目前的 2026 夏季簡報 <a {...go.link("articles")} style={{color:"var(--brass)"}}>現在就可以下載</a>，下一期 Jean 會在每季寄給您。</>}
      </p>
    );
  }

  return (
    <form className="footer-newsletter" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="nl-email">
        {lang === "en" ? "Email address for quarterly market briefings" : "訂閱季度市場簡報的電子郵件"}
      </label>
      <input
        id="nl-email"
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
        placeholder={lang === "en" ? "Quarterly market briefings" : "季度市場簡報"}
        aria-invalid={status === "error"}
      />
      <button type="submit" disabled={status === "sending"}>
        {status === "sending"
          ? (lang === "en" ? "…" : "…")
          : (lang === "en" ? "Subscribe" : "訂閱")}
      </button>
      {status === "error" && (
        <span className="footer-newsletter-err" role="alert">
          {lang === "en" ? "Please check that email address." : "請確認電子郵件是否正確。"}
        </span>
      )}
    </form>
  );
}

// ---------- Footer ----------
function Footer({ lang, go }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="nav-brand footer-brand" {...go.link("home")} style={{ marginBottom: 16 }}>
              <img className="nav-brand-img" src="uploads/jeanify-logo-brass.webp" alt="Jeanify" width="300" height="133" loading="lazy" />
            </a>
            <p style={{ color: "var(--ink-dim)", fontSize: 14, maxWidth: 36 + "ch", lineHeight: 1.7 }}>
              {lang === "en"
                ? "A boutique San Diego real estate practice for buyers, sellers and 1031 investors who value precision, discretion and a steady hand."
                : "專為重視精準、分寸與穩健的買家、賣家與 1031 投資人而設的聖地牙哥精緻房地產團隊。"}
            </p>
            <NewsletterSignup lang={lang} go={go} />
          </div>
          <div>
            <h2>{lang === "en" ? "Explore" : "探索"}</h2>
            <ul>
              <li><a {...go.link("listings")}>{lang === "en" ? "Featured Homes" : "精選房源"}</a></li>
              <li><a {...go.link("listings/active")}>{lang === "en" ? "Active Listings" : "在售房源"}</a></li>
              <li><a {...go.link("estimator")}>{lang === "en" ? "Home Valuation" : "房屋估價"}</a></li>
            </ul>
          </div>
          <div>
            <h2>{lang === "en" ? "Resources" : "資源"}</h2>
            <ul>
              <li><a {...go.link("articles")}>{lang === "en" ? "Articles & Guides" : "專欄與指南"}</a></li>
              <li><a {...go.link("guides/buyer")}>{lang === "en" ? "Buyer Guide" : "買家指南"}</a></li>
              <li><a {...go.link("guides/seller")}>{lang === "en" ? "Seller Guide" : "賣家指南"}</a></li>
              <li><a {...go.link("faq")}>{lang === "en" ? "FAQ" : "常見問題"}</a></li>
              <li><a {...go.link("exchange")}>{lang === "en" ? "1031 Exchange" : "1031 交換"}</a></li>
              <li><a {...go.link("videos")}>{lang === "en" ? "Video Library" : "影片中心"}</a></li>
              <li><a href={D.agent.youtube} target="_blank" rel="noopener noreferrer">{lang === "en" ? "YouTube — " : "YouTube · "}{D.agent.youtubeHandle}</a></li>
            </ul>
          </div>
          <div>
            <h2>{lang === "en" ? "Contact" : "聯絡"}</h2>
            <ul>
              <li><a href={"tel:" + D.agent.phone.replace(/[^0-9+]/g, "")}>{D.agent.phone}</a></li>
              <li><a href={"mailto:" + D.agent.email}>{D.agent.email}</a></li>
              <li style={{ color: "var(--ink-faint)", fontSize: 13 }}>9888 Carroll Centre Rd, Ste 200<br/>San Diego, CA 92126</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Jean Riley · {D.agent.license} · {D.agent.brokerage}</span>
          <span>{lang === "en" ? "Equal Housing Opportunity · MLS Member" : "公平住房機會 · MLS 會員"}</span>
        </div>
      </div>
    </footer>
  );
}

// ---------- Video card + YouTube lightbox ----------
const VIDEO_CAT_ZH = {
  "Listing Song": "房源主題曲",
  "Client Voice-Over": "客戶配音",
  "Listing Tour": "房源導覽",
  "Neighborhood": "社區介紹",
  "Agent Testimonial": "同業推薦",
};
// ---------- Lazy background images ----------
// The photos on these pages are CSS backgrounds, which the browser fetches as soon as
// the element renders — so the home page used to pull every listing photo, video
// thumbnail and article image (about 1 MB) at once, competing with the hero and fonts.
// This hands back the url only once the element is within 400px of the viewport.
// Returns [ref, cssUrlOrNull]; without IntersectionObserver it loads straight away.
function useLazyBg(src) {
  const ref = useRef(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    if (!src || near) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") { setNear(true); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { setNear(true); io.disconnect(); }
    }, { rootMargin: "400px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [src, near]);
  return [ref, src && near ? "url(" + src + ")" : undefined];
}

function ytThumb(id) { return "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg"; }
function ytEmbed(id, start) {
  return "https://www.youtube-nocookie.com/embed/" + id +
    "?autoplay=1&rel=0&modestbranding=1" + (start ? "&start=" + start : "");
}
function ytWatch(id, start) {
  return "https://www.youtube.com/watch?v=" + id + (start ? "&t=" + start + "s" : "");
}

function VideoCard({ v, feature, lang }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open]);
  const isFeature = feature || v.feature;
  const [thumbRef, thumbBg] = useLazyBg(ytThumb(v.id));
  return (
    <>
      <button
        type="button"
        ref={thumbRef}
        className={"video-card" + (isFeature ? " feature" : "")}
        onClick={() => setOpen(true)}
        style={{ backgroundImage: thumbBg }}
      >
        {/* The accessible name comes from the visible title and category, with the
            "Play video" verb read out first. An aria-label here replaced the visible
            text instead, which voice-control users can't match (WCAG 2.5.3). */}
        <span className="sr-only">{lang === "zh" ? "播放影片：" : "Play video: "}</span>
        <span className="play" aria-hidden="true">▶</span>
        <span className="video-overlay">
          <span className="ttl">{v.title}</span>
          <span className="meta">{lang === "zh" ? (VIDEO_CAT_ZH[v.category] || v.category) : v.category}</span>
        </span>
      </button>
      {open && (
        <div className="video-modal" onClick={() => setOpen(false)} role="dialog" aria-modal="true">
          <button type="button" className="video-modal-close" onClick={() => setOpen(false)} aria-label={lang === "zh" ? "關閉" : "Close"}>×</button>
          <div className="video-modal-frame" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={ytEmbed(v.id, v.start)}
              title={v.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

// ---------- Listing card ----------
const SIDE_LABEL = { list: "Listing Side", buy: "Buy Side", both: "Both Sides" };
const SIDE_LABEL_ZH = { list: "賣方", buy: "買方", both: "買賣雙方" };
function ListingCard({ l, go, lang }) {
  const hasSpecs = l.beds || l.baths || l.sqft;
  // Photo source: explicit image > YouTube tour thumbnail > none (typographic placeholder).
  const photoSrc = l.image ? encodeURI(l.image) : (l.videoId ? ytThumb(l.videoId) : null);
  const [photoRef, photoBg] = useLazyBg(photoSrc);
  const photoStyle = photoSrc
    ? { backgroundImage: photoBg, backgroundSize: "cover", backgroundPosition: "center" }
    : null;
  // For typographic placeholder, parse neighborhood / city from "City, ST 92127"
  const cityMatch = l.area && l.area.match(/^([^,]+),\s*([A-Z]{2})\s*(\d{5})?/);
  const cityName = cityMatch ? cityMatch[1] : null;
  const zipName = cityMatch ? cityMatch[3] : null;
  return (
    <a className="listing-card" {...go.link("listing/" + l.id)}>
      <div ref={photoRef} className={"listing-photo" + (photoSrc ? " has-image" : "")} style={photoStyle}>
        <div className={"listing-status " + (l.status === "sold" ? "sold" : l.status === "rent" ? "rent" : "")}>
          {lang === "zh"
            ? (l.status === "sold" ? "已成交" : l.status === "rent" ? "出租中" : "在售")
            : (l.status === "sold" ? "Sold" : l.status === "rent" ? "For Rent" : "Active")}
        </div>
        <div className="listing-fav">♡</div>
        {!photoSrc && (
          l.ph
            ? <div className="ph-label">{l.ph}</div>
            : cityName
              ? <div className="ph-mark"><div className="ph-mark-city">{cityName}</div>{zipName && <div className="ph-mark-zip">{zipName}</div>}</div>
              : <div className="ph-label">{l.type || "Property"}</div>
        )}
        {l.videoId && <div className="listing-video-pill">▶ {lang==="zh"?"影片導覽":"Video Tour"}</div>}
      </div>
      <div className="listing-body">
        <div className="listing-price">{l.price}</div>
        <div className="listing-addr"><strong>{l.street}</strong>{l.area}</div>
        <div className="listing-meta">
          {hasSpecs ? (
            <>
              {l.beds && <span>{l.beds} {lang==="zh"?"房":"BD"}</span>}
              {l.baths && <span>{l.baths} {lang==="zh"?"衛":"BA"}</span>}
              {l.sqft && <span>{l.sqft} {lang==="zh"?"平方英尺":"SF"}</span>}
            </>
          ) : (
            l.side && <span className="listing-side">{(lang==="zh" ? SIDE_LABEL_ZH[l.side] : SIDE_LABEL[l.side]) || l.side}</span>
          )}
          {l.overAsk && <span style={{marginLeft:'auto', color:'var(--brass)'}}>{l.overAsk}</span>}
        </div>
      </div>
    </a>
  );
}

window.JR_CORE = { useRoute, routePath, pathRoute, pageMeta, storedLang, LANG_KEY, HASH_MODE, TWEAK_DEFAULTS, FONT_PAIRS, ACCENT_OPTIONS, Nav, Footer, ListingCard, VideoCard, useLazyBg, ytThumb, ytEmbed, ytWatch, scrollToId, D };
