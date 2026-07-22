(function(){
/* global React, ReactDOM */
const {
  useState,
  useEffect,
  useRef
} = React;
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
  return [route, r => {
    window.location.hash = "#/" + r;
  }];
}

// ---------- Tweaks defaults ----------
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "en",
  "accent": "#c9a567",
  "density": "spacious",
  "fontPair": "cormorant-inter"
} /*EDITMODE-END*/;
const FONT_PAIRS = {
  "cormorant-inter": {
    display: '"Cormorant Garamond", Garamond, "Times New Roman", serif',
    body: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
    label: "Cormorant + Inter"
  },
  "playfair-inter": {
    display: '"Playfair Display", Garamond, serif',
    body: '"Inter", Helvetica, sans-serif',
    label: "Playfair + Inter"
  },
  "fraunces-mono": {
    display: '"Fraunces", Garamond, serif',
    body: '"IBM Plex Sans", Helvetica, sans-serif',
    label: "Fraunces + Plex"
  }
};
const ACCENT_OPTIONS = ["#c9a567",
// brass
"#b08968",
// bronze
"#9aa67f",
// sage
"#a17a8a" // dusty rose
];

// ---------- Top nav ----------
function Nav({
  route,
  go,
  lang,
  setLang
}) {
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
    const onKey = e => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);
  useEffect(() => {
    setOpen(false);
  }, [route]);
  const t = D.i18n[lang].nav;
  // Listings and Videos are deliberately absent — both are sections on the home
  // page, each with a "view all" link into their still-live /listings and /videos
  // routes. Keeps the bar to six items without orphaning any content.
  const links = [{
    id: "home",
    label: t.home
  }, {
    id: "about",
    label: t.about
  }, {
    id: "articles",
    label: t.articles
  }, {
    id: "faq",
    label: t.faq
  }, {
    id: "exchange",
    label: t.exchange
  }, {
    id: "contact",
    label: t.contact
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: "nav" + (scrolled ? " scrolled" : "")
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-brand",
    href: "#/home",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    "aria-label": lang === "zh" ? "Jeanify — Jean Riley，聖地牙哥地產經紀 — 首頁" : "Jeanify — Jean Riley, San Diego Realtor — Home"
  }, /*#__PURE__*/React.createElement("img", {
    className: "nav-brand-img",
    src: "uploads/jeanify-logo-brass.png",
    alt: "Jeanify"
  }), /*#__PURE__*/React.createElement("span", {
    className: "nav-brand-name"
  }, /*#__PURE__*/React.createElement("strong", null, "Jean Riley"), /*#__PURE__*/React.createElement("small", null, lang === "en" ? "Realtor® · " : "地產經紀 · ", D.agent.license))), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: "#/" + l.id,
    onClick: e => {
      e.preventDefault();
      go(l.id);
    },
    className: "nav-link" + (route.split("/")[0] === l.id ? " active" : "")
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-phone",
    href: "tel:" + D.agent.phone.replace(/[^0-9+]/g, "")
  }, D.agent.phone), /*#__PURE__*/React.createElement("div", {
    className: "lang-toggle"
  }, /*#__PURE__*/React.createElement("button", {
    className: lang === "en" ? "active" : "",
    onClick: () => setLang("en")
  }, "EN"), /*#__PURE__*/React.createElement("button", {
    className: lang === "zh" ? "active" : "",
    onClick: () => setLang("zh")
  }, "\u4E2D\u6587"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nav-burger" + (open ? " open" : ""),
    "aria-label": open ? "Close menu" : "Open menu",
    "aria-expanded": open,
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), open && /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile-backdrop",
    onClick: () => setOpen(false)
  }), /*#__PURE__*/React.createElement("aside", {
    className: "nav-mobile-panel"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nav-mobile-close",
    "aria-label": "Close menu",
    onClick: () => setOpen(false)
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile-links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: "#/" + l.id,
    onClick: e => {
      e.preventDefault();
      go(l.id);
    },
    className: "nav-mobile-link" + (route.split("/")[0] === l.id ? " active" : "")
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "nav-mobile-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lang-toggle"
  }, /*#__PURE__*/React.createElement("button", {
    className: lang === "en" ? "active" : "",
    onClick: () => setLang("en")
  }, "EN"), /*#__PURE__*/React.createElement("button", {
    className: lang === "zh" ? "active" : "",
    onClick: () => setLang("zh")
  }, "\u4E2D\u6587")), /*#__PURE__*/React.createElement("a", {
    className: "nav-mobile-call",
    href: "tel:" + D.agent.phone.replace(/[^0-9+]/g, "")
  }, lang === "en" ? "Call " : "撥打 ", D.agent.phone), /*#__PURE__*/React.createElement("a", {
    className: "nav-mobile-email",
    href: "mailto:" + D.agent.email
  }, D.agent.email)))));
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
  el.focus({
    preventScroll: true
  });
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({
    behavior: reduce ? "auto" : "smooth",
    block: "start"
  });
}

// ---------- Newsletter ----------
// This used to be a bare input + button with no handler — it accepted an email
// address and did nothing with it. It now posts to the same inbox as the contact form.
function NewsletterSignup({
  lang
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onSubmit = async e => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const body = new FormData();
      body.set("access_key", "b5f6ae82-dc56-42c1-b3a0-79ee29d3586d");
      body.set("email", email);
      body.set("subject", "JeanRiley.com — Market briefing signup: " + email);
      body.set("from_name", "JeanRiley.com Newsletter");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus("sent");
        setEmail("");
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };
  if (status === "sent") {
    return /*#__PURE__*/React.createElement("p", {
      className: "footer-newsletter-done"
    }, lang === "en" ? "You're on the list — the next quarterly briefing will come straight from Jean." : "訂閱完成。下一期季度市場簡報，Jean 會直接寄給您。");
  }
  return /*#__PURE__*/React.createElement("form", {
    className: "footer-newsletter",
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement("label", {
    className: "sr-only",
    htmlFor: "nl-email"
  }, lang === "en" ? "Email address for quarterly market briefings" : "訂閱季度市場簡報的電子郵件"), /*#__PURE__*/React.createElement("input", {
    id: "nl-email",
    type: "email",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      if (status === "error") setStatus("idle");
    },
    placeholder: lang === "en" ? "Quarterly market briefings" : "季度市場簡報",
    "aria-invalid": status === "error"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: status === "sending"
  }, status === "sending" ? lang === "en" ? "…" : "…" : lang === "en" ? "Subscribe" : "訂閱"), status === "error" && /*#__PURE__*/React.createElement("span", {
    className: "footer-newsletter-err",
    role: "alert"
  }, lang === "en" ? "Please check that email address." : "請確認電子郵件是否正確。"));
}

// ---------- Footer ----------
function Footer({
  lang,
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    className: "nav-brand footer-brand",
    href: "#/home",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "nav-brand-img",
    src: "uploads/jeanify-logo-brass.png",
    alt: "Jeanify"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-dim)",
      fontSize: 14,
      maxWidth: 36 + "ch",
      lineHeight: 1.7
    }
  }, lang === "en" ? "A boutique San Diego real estate practice for buyers, sellers and 1031 investors who value precision, discretion and a steady hand." : "專為重視精準、分寸與穩健的買家、賣家與 1031 投資人而設的聖地牙哥精緻房地產團隊。"), /*#__PURE__*/React.createElement(NewsletterSignup, {
    lang: lang
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, lang === "en" ? "Explore" : "探索"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/listings",
    onClick: e => {
      e.preventDefault();
      go("listings");
    }
  }, lang === "en" ? "Featured Homes" : "精選房源")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/listings/active",
    onClick: e => {
      e.preventDefault();
      go("listings/active");
    }
  }, lang === "en" ? "Active Listings" : "在售房源")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/estimator",
    onClick: e => {
      e.preventDefault();
      go("estimator");
    }
  }, lang === "en" ? "Home Valuation" : "房屋估價")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, lang === "en" ? "Resources" : "資源"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/articles",
    onClick: e => {
      e.preventDefault();
      go("articles");
    }
  }, lang === "en" ? "Articles & Guides" : "專欄與指南")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/guides/buyer",
    onClick: e => {
      e.preventDefault();
      go("guides/buyer");
    }
  }, lang === "en" ? "Buyer Guide" : "買家指南")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/guides/seller",
    onClick: e => {
      e.preventDefault();
      go("guides/seller");
    }
  }, lang === "en" ? "Seller Guide" : "賣家指南")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/faq",
    onClick: e => {
      e.preventDefault();
      go("faq");
    }
  }, lang === "en" ? "FAQ" : "常見問題")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/exchange",
    onClick: e => {
      e.preventDefault();
      go("exchange");
    }
  }, lang === "en" ? "1031 Exchange" : "1031 交換")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/videos",
    onClick: e => {
      e.preventDefault();
      go("videos");
    }
  }, lang === "en" ? "Video Library" : "影片中心")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: D.agent.youtube,
    target: "_blank",
    rel: "noopener noreferrer"
  }, lang === "en" ? "YouTube — " : "YouTube · ", D.agent.youtubeHandle)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, lang === "en" ? "Contact" : "聯絡"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "tel:" + D.agent.phone.replace(/[^0-9+]/g, "")
  }, D.agent.phone)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:" + D.agent.email
  }, D.agent.email)), /*#__PURE__*/React.createElement("li", {
    style: {
      color: "var(--ink-faint)",
      fontSize: 13
    }
  }, "9888 Carroll Centre Rd, Ste 200", /*#__PURE__*/React.createElement("br", null), "San Diego, CA 92126")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Jean Riley \xB7 ", D.agent.license, " \xB7 ", D.agent.brokerage), /*#__PURE__*/React.createElement("span", null, lang === "en" ? "Equal Housing Opportunity · MLS Member" : "公平住房機會 · MLS 會員"))));
}

// ---------- Video card + YouTube lightbox ----------
const VIDEO_CAT_ZH = {
  "Listing Song": "房源主題曲",
  "Client Voice-Over": "客戶配音",
  "Listing Tour": "房源導覽",
  "Neighborhood": "社區介紹",
  "Agent Testimonial": "同業推薦"
};
function ytThumb(id) {
  return "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg";
}
function ytEmbed(id, start) {
  return "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0&modestbranding=1" + (start ? "&start=" + start : "");
}
function ytWatch(id, start) {
  return "https://www.youtube.com/watch?v=" + id + (start ? "&t=" + start + "s" : "");
}
function VideoCard({
  v,
  feature,
  lang
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);
  const isFeature = feature || v.feature;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "video-card" + (isFeature ? " feature" : ""),
    onClick: () => setOpen(true),
    style: {
      backgroundImage: "url(" + ytThumb(v.id) + ")"
    },
    "aria-label": (lang === "zh" ? "播放影片：" : "Play video: ") + v.title
  }, /*#__PURE__*/React.createElement("span", {
    className: "play"
  }, "\u25B6"), /*#__PURE__*/React.createElement("span", {
    className: "video-overlay"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ttl"
  }, v.title), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, lang === "zh" ? VIDEO_CAT_ZH[v.category] || v.category : v.category))), open && /*#__PURE__*/React.createElement("div", {
    className: "video-modal",
    onClick: () => setOpen(false),
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "video-modal-close",
    onClick: () => setOpen(false),
    "aria-label": "Close"
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    className: "video-modal-frame",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("iframe", {
    src: ytEmbed(v.id, v.start),
    title: v.title,
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }))));
}

// ---------- Listing card ----------
const SIDE_LABEL = {
  list: "Listing Side",
  buy: "Buy Side",
  both: "Both Sides"
};
const SIDE_LABEL_ZH = {
  list: "賣方",
  buy: "買方",
  both: "買賣雙方"
};
function ListingCard({
  l,
  go,
  lang
}) {
  const hasSpecs = l.beds || l.baths || l.sqft;
  // Photo source: explicit image > YouTube tour thumbnail > none (typographic placeholder).
  const photoSrc = l.image ? encodeURI(l.image) : l.videoId ? ytThumb(l.videoId) : null;
  const photoStyle = photoSrc ? {
    backgroundImage: "url(" + photoSrc + ")",
    backgroundSize: "cover",
    backgroundPosition: "center"
  } : null;
  // For typographic placeholder, parse neighborhood / city from "City, ST 92127"
  const cityMatch = l.area && l.area.match(/^([^,]+),\s*([A-Z]{2})\s*(\d{5})?/);
  const cityName = cityMatch ? cityMatch[1] : null;
  const zipName = cityMatch ? cityMatch[3] : null;
  return /*#__PURE__*/React.createElement("a", {
    className: "listing-card",
    href: "#/listing/" + l.id,
    onClick: e => {
      e.preventDefault();
      go("listing/" + l.id);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "listing-photo" + (photoSrc ? " has-image" : ""),
    style: photoStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "listing-status " + (l.status === "sold" ? "sold" : l.status === "rent" ? "rent" : "")
  }, lang === "zh" ? l.status === "sold" ? "已成交" : l.status === "rent" ? "出租中" : "在售" : l.status === "sold" ? "Sold" : l.status === "rent" ? "For Rent" : "Active"), /*#__PURE__*/React.createElement("div", {
    className: "listing-fav"
  }, "\u2661"), !photoSrc && (l.ph ? /*#__PURE__*/React.createElement("div", {
    className: "ph-label"
  }, l.ph) : cityName ? /*#__PURE__*/React.createElement("div", {
    className: "ph-mark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph-mark-city"
  }, cityName), zipName && /*#__PURE__*/React.createElement("div", {
    className: "ph-mark-zip"
  }, zipName)) : /*#__PURE__*/React.createElement("div", {
    className: "ph-label"
  }, l.type || "Property")), l.videoId && /*#__PURE__*/React.createElement("div", {
    className: "listing-video-pill"
  }, "\u25B6 ", lang === "zh" ? "影片導覽" : "Video Tour")), /*#__PURE__*/React.createElement("div", {
    className: "listing-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "listing-price"
  }, l.price), /*#__PURE__*/React.createElement("div", {
    className: "listing-addr"
  }, /*#__PURE__*/React.createElement("strong", null, l.street), l.area), /*#__PURE__*/React.createElement("div", {
    className: "listing-meta"
  }, hasSpecs ? /*#__PURE__*/React.createElement(React.Fragment, null, l.beds && /*#__PURE__*/React.createElement("span", null, l.beds, " ", lang === "zh" ? "房" : "BD"), l.baths && /*#__PURE__*/React.createElement("span", null, l.baths, " ", lang === "zh" ? "衛" : "BA"), l.sqft && /*#__PURE__*/React.createElement("span", null, l.sqft, " ", lang === "zh" ? "平方英尺" : "SF")) : l.side && /*#__PURE__*/React.createElement("span", {
    className: "listing-side"
  }, (lang === "zh" ? SIDE_LABEL_ZH[l.side] : SIDE_LABEL[l.side]) || l.side), l.overAsk && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      color: 'var(--brass)'
    }
  }, l.overAsk))));
}
window.JR_CORE = {
  useHashRoute,
  TWEAK_DEFAULTS,
  FONT_PAIRS,
  ACCENT_OPTIONS,
  Nav,
  Footer,
  ListingCard,
  VideoCard,
  ytThumb,
  ytEmbed,
  ytWatch,
  scrollToId,
  D
};
})();
