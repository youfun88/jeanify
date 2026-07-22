/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

const D = window.JR_DATA;

// ---------- Routing ----------
function useHashRoute() {
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#\/?/, "") || "home");
  useEffect(() => {
    const onHash = () => {
      setRoute(window.location.hash.replace(/^#\/?/, "") || "home");
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return [route, (r) => { window.location.hash = "#/" + r; }];
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
        <a className="nav-brand" href="#/home" onClick={(e) => { e.preventDefault(); go("home"); }} aria-label="Jeanify — Jean Riley, San Diego Realtor — Home">
          <img className="nav-brand-img" src="uploads/jeanify-logo-brass.png" alt="Jeanify" />
          <span className="nav-brand-name">
            <strong>Jean Riley</strong>
            <small>{lang === "en" ? "Realtor® · " : "地產經紀 · "}{D.agent.license}</small>
          </span>
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.id} href={"#/" + l.id}
               onClick={(e) => { e.preventDefault(); go(l.id); }}
               className={"nav-link" + (route.split("/")[0] === l.id ? " active" : "")}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <a className="nav-phone" href={"tel:" + D.agent.phone.replace(/[^0-9+]/g, "")}>{D.agent.phone}</a>
          <div className="lang-toggle">
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
            <button className={lang === "zh" ? "active" : ""} onClick={() => setLang("zh")}>中文</button>
          </div>
        </div>
        <button
          type="button"
          className={"nav-burger" + (open ? " open" : "")}
          aria-label={open ? "Close menu" : "Open menu"}
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
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >×</button>
            <div className="nav-mobile-links">
              {links.map((l) => (
                <a key={l.id} href={"#/" + l.id}
                   onClick={(e) => { e.preventDefault(); go(l.id); }}
                   className={"nav-mobile-link" + (route.split("/")[0] === l.id ? " active" : "")}>
                  {l.label}
                </a>
              ))}
            </div>
            <div className="nav-mobile-foot">
              <div className="lang-toggle">
                <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
                <button className={lang === "zh" ? "active" : ""} onClick={() => setLang("zh")}>中文</button>
              </div>
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
function NewsletterSignup({ lang }) {
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
          ? "You're on the list — the next quarterly briefing will come straight from Jean."
          : "訂閱完成。下一期季度市場簡報，Jean 會直接寄給您。"}
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
            <a className="nav-brand footer-brand" href="#/home" onClick={(e)=>{e.preventDefault();go("home");}} style={{ marginBottom: 16 }}>
              <img className="nav-brand-img" src="uploads/jeanify-logo-brass.png" alt="Jeanify" />
            </a>
            <p style={{ color: "var(--ink-dim)", fontSize: 14, maxWidth: 36 + "ch", lineHeight: 1.7 }}>
              {lang === "en"
                ? "A boutique San Diego real estate practice for buyers, sellers and 1031 investors who value precision, discretion and a steady hand."
                : "專為重視精準、分寸與穩健的買家、賣家與 1031 投資人而設的聖地牙哥精緻房地產團隊。"}
            </p>
            <NewsletterSignup lang={lang} />
          </div>
          <div>
            <h5>{lang === "en" ? "Explore" : "探索"}</h5>
            <ul>
              <li><a href="#/listings" onClick={(e)=>{e.preventDefault();go("listings");}}>{lang === "en" ? "Featured Homes" : "精選房源"}</a></li>
              <li><a href="#/listings/active" onClick={(e)=>{e.preventDefault();go("listings/active");}}>{lang === "en" ? "Active Listings" : "在售房源"}</a></li>
              <li><a href="#/estimator" onClick={(e)=>{e.preventDefault();go("estimator");}}>{lang === "en" ? "Home Valuation" : "房屋估價"}</a></li>
            </ul>
          </div>
          <div>
            <h5>{lang === "en" ? "Resources" : "資源"}</h5>
            <ul>
              <li><a href="#/articles" onClick={(e)=>{e.preventDefault();go("articles");}}>{lang === "en" ? "Articles & Guides" : "專欄與指南"}</a></li>
              <li><a href="#/guides/buyer" onClick={(e)=>{e.preventDefault();go("guides/buyer");}}>{lang === "en" ? "Buyer Guide" : "買家指南"}</a></li>
              <li><a href="#/guides/seller" onClick={(e)=>{e.preventDefault();go("guides/seller");}}>{lang === "en" ? "Seller Guide" : "賣家指南"}</a></li>
              <li><a href="#/faq" onClick={(e)=>{e.preventDefault();go("faq");}}>{lang === "en" ? "FAQ" : "常見問題"}</a></li>
              <li><a href="#/exchange" onClick={(e)=>{e.preventDefault();go("exchange");}}>{lang === "en" ? "1031 Exchange" : "1031 交換"}</a></li>
              <li><a href="#/videos" onClick={(e)=>{e.preventDefault();go("videos");}}>{lang === "en" ? "Video Library" : "影片中心"}</a></li>
              <li><a href={D.agent.youtube} target="_blank" rel="noopener noreferrer">{lang === "en" ? "YouTube — " : "YouTube · "}{D.agent.youtubeHandle}</a></li>
            </ul>
          </div>
          <div>
            <h5>{lang === "en" ? "Contact" : "聯絡"}</h5>
            <ul>
              <li><a href={"tel:" + D.agent.phone.replace(/[^0-9+]/g, "")}>{D.agent.phone}</a></li>
              <li><a href={"mailto:" + D.agent.email}>{D.agent.email}</a></li>
              <li style={{ color: "var(--ink-faint)", fontSize: 13 }}>9888 Carroll Centre Rd, Ste 200<br/>San Diego, CA 92126</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Jean Riley · {D.agent.license} · {D.agent.brokerage}</span>
          <span>Equal Housing Opportunity · MLS Member</span>
        </div>
      </div>
    </footer>
  );
}

// ---------- Video card + YouTube lightbox ----------
function ytThumb(id) { return "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg"; }
function ytEmbed(id, start) {
  return "https://www.youtube-nocookie.com/embed/" + id +
    "?autoplay=1&rel=0&modestbranding=1" + (start ? "&start=" + start : "");
}
function ytWatch(id, start) {
  return "https://www.youtube.com/watch?v=" + id + (start ? "&t=" + start + "s" : "");
}

function VideoCard({ v, feature }) {
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
  return (
    <>
      <button
        type="button"
        className={"video-card" + (isFeature ? " feature" : "")}
        onClick={() => setOpen(true)}
        style={{ backgroundImage: "url(" + ytThumb(v.id) + ")" }}
        aria-label={"Play video: " + v.title}
      >
        <span className="play">▶</span>
        <span className="video-overlay">
          <span className="ttl">{v.title}</span>
          <span className="meta">{v.category}</span>
        </span>
      </button>
      {open && (
        <div className="video-modal" onClick={() => setOpen(false)} role="dialog" aria-modal="true">
          <button type="button" className="video-modal-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
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
function ListingCard({ l, go }) {
  const hasSpecs = l.beds || l.baths || l.sqft;
  // Photo source: explicit image > YouTube tour thumbnail > none (typographic placeholder).
  const photoSrc = l.image ? encodeURI(l.image) : (l.videoId ? ytThumb(l.videoId) : null);
  const photoStyle = photoSrc
    ? { backgroundImage: "url(" + photoSrc + ")", backgroundSize: "cover", backgroundPosition: "center" }
    : null;
  // For typographic placeholder, parse neighborhood / city from "City, ST 92127"
  const cityMatch = l.area && l.area.match(/^([^,]+),\s*([A-Z]{2})\s*(\d{5})?/);
  const cityName = cityMatch ? cityMatch[1] : null;
  const zipName = cityMatch ? cityMatch[3] : null;
  return (
    <a className="listing-card" href={"#/listing/" + l.id} onClick={(e) => { e.preventDefault(); go("listing/" + l.id); }}>
      <div className={"listing-photo" + (photoSrc ? " has-image" : "")} style={photoStyle}>
        <div className={"listing-status " + (l.status === "sold" ? "sold" : l.status === "rent" ? "rent" : "")}>
          {l.status === "sold" ? "Sold" : l.status === "rent" ? "For Rent" : "Active"}
        </div>
        <div className="listing-fav">♡</div>
        {!photoSrc && (
          l.ph
            ? <div className="ph-label">{l.ph}</div>
            : cityName
              ? <div className="ph-mark"><div className="ph-mark-city">{cityName}</div>{zipName && <div className="ph-mark-zip">{zipName}</div>}</div>
              : <div className="ph-label">{l.type || "Property"}</div>
        )}
        {l.videoId && <div className="listing-video-pill">▶ Video Tour</div>}
      </div>
      <div className="listing-body">
        <div className="listing-price">{l.price}</div>
        <div className="listing-addr"><strong>{l.street}</strong>{l.area}</div>
        <div className="listing-meta">
          {hasSpecs ? (
            <>
              {l.beds && <span>{l.beds} BD</span>}
              {l.baths && <span>{l.baths} BA</span>}
              {l.sqft && <span>{l.sqft} SF</span>}
            </>
          ) : (
            l.side && <span className="listing-side">{SIDE_LABEL[l.side] || l.side}</span>
          )}
          {l.overAsk && <span style={{marginLeft:'auto', color:'var(--brass)'}}>{l.overAsk}</span>}
        </div>
      </div>
    </a>
  );
}

window.JR_CORE = { useHashRoute, TWEAK_DEFAULTS, FONT_PAIRS, ACCENT_OPTIONS, Nav, Footer, ListingCard, VideoCard, ytThumb, ytEmbed, ytWatch, scrollToId, D };
