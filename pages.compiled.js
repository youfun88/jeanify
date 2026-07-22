(function(){
/* global React */
const {
  useState: uS3,
  useEffect: uE3
} = React;
const {
  D: D3,
  scrollToId
} = window.JR_CORE;

// ---------- ABOUT ----------
function AboutPage({
  lang,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-fade"
  }, /*#__PURE__*/React.createElement("header", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "breadcrumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/home",
    onClick: e => {
      e.preventDefault();
      go("home");
    }
  }, lang === "en" ? "Home" : "首頁"), /*#__PURE__*/React.createElement("span", null, "/"), lang === "en" ? "About" : "關於"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Meet Jean" : "認識 Jean"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 20
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Treating clients ", /*#__PURE__*/React.createElement("em", null, "like royalty"), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u59CB\u7D42 ", /*#__PURE__*/React.createElement("em", null, "\u4EE5\u5BA2\u70BA\u5C0A"))), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Realtor\xAE Jean Riley \xB7 ", D3.agent.license, " \xB7 Jeanify \xB7 San Diego's Rising Star Real Estate Agent.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Realtor\xAE Jean Riley \xB7 ", D3.agent.license, " \xB7 Jeanify \xB7 \u8056\u5730\u7259\u54E5\u65B0\u661F\u5730\u7522\u7D93\u7D00\u3002")))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bio-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bio-portrait",
    style: {
      backgroundImage: 'url(assets/jean-portrait.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center top'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      fontSize: 22,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      color: 'var(--ink)'
    }
  }, lang === "en" ? "Buying or selling a home can be overwhelming — my work is to relieve that, and to make sure my clients feel like royalty from the first conversation through the last signature." : "買房或賣房，常令人不知所措。我的工作就是化解這份壓力，讓客戶從第一次洽談到最後簽約，全程備受尊重與禮遇。"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-dim)',
      marginTop: 28,
      lineHeight: 1.8
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "At ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Jeanify"), " \u2014 one of the most trusted real estate groups in California \u2014 we consult, negotiate, and handle every detail so our clients successfully buy or sell what is, for most of them, the largest asset they will ever own. That orientation guides everything I do.") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u5728 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Jeanify"), "\u2014\u2014\u52A0\u5DDE\u6700\u53D7\u4FE1\u8CF4\u7684\u623F\u5730\u7522\u5718\u968A\u4E4B\u4E00\u2014\u2014\u6211\u5011\u63D0\u4F9B\u8AEE\u8A62\u3001\u4EE3\u70BA\u8AC7\u5224\uFF0C\u4E26\u7167\u9867\u6BCF\u4E00\u500B\u7D30\u7BC0\uFF0C\u8B93\u5BA2\u6236\u9806\u5229\u8CB7\u8CE3\u4ED6\u5011\u4E00\u751F\u4E2D\u6700\u91CD\u8981\u7684\u8CC7\u7522\u3002\u9019\u6A23\u7684\u4FE1\u5FF5\uFF0C\u8CAB\u7A7F\u6211\u6240\u505A\u7684\u6BCF\u4E00\u4EF6\u4E8B\u3002")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-dim)',
      marginTop: 20,
      lineHeight: 1.8
    }
  }, lang === "en" ? "I came to real estate out of a passion for helping others pursue their dreams with clarity and confidence. I speak English, Mandarin and Taiwanese — and I specialize in the buying and selling of single-family homes and commercial properties across San Diego." : "我之所以投入房地產，是因為喜歡幫助別人把夢想看得更清楚、走得更篤定。我能以英語、國語與台語溝通，專注於聖地牙哥地區的獨立住宅與商業不動產買賣。"), /*#__PURE__*/React.createElement("div", {
    className: "bio-credits"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bio-credit"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      fontSize: 28,
      lineHeight: 1.1
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Rising", /*#__PURE__*/React.createElement("br", null), "Star") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u65B0\u661F", /*#__PURE__*/React.createElement("br", null), "\u734E")), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, lang === "en" ? "San Diego Award" : "聖地牙哥獎項")), /*#__PURE__*/React.createElement("div", {
    className: "bio-credit"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "3"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, lang === "en" ? "Languages Spoken" : "精通語言")), /*#__PURE__*/React.createElement("div", {
    className: "bio-credit"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "SF + CRE"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, lang === "en" ? "Specialty" : "專長領域"))))))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-elev)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-tight brand-story"
  }, /*#__PURE__*/React.createElement("img", {
    className: "brand-story-mark",
    src: "uploads/jeanify-logo-brass.png",
    alt: "Jeanify"
  }), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "The Name" : "品牌命名"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Jeanify is a ", /*#__PURE__*/React.createElement("em", null, "verb"), ", not a noun.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Jeanify \u662F\u4E00\u500B ", /*#__PURE__*/React.createElement("em", null, "\u52D5\u8A5E"))), lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "brand-story-lede"
  }, "Every other name on a For Sale sign is a noun. Ours is something you do."), /*#__PURE__*/React.createElement("p", null, "The suffix ", /*#__PURE__*/React.createElement("em", null, "-ify"), " means to bring into a state \u2014 to make something so.", /*#__PURE__*/React.createElement("strong", null, " Clarify"), ", to make clear. ", /*#__PURE__*/React.createElement("strong", null, "Simplify"), ", to make simple. It is the grammar of transformation, and it never describes a moment. It always describes a passage from one condition to another."), /*#__PURE__*/React.createElement("p", null, "That is the whole idea. A house does not become a home at the closing table. It becomes one across every conversation, every walkthrough and every negotiation that leads there.", /*#__PURE__*/React.createElement("strong", null, " Jeanify"), " is the name for that passage \u2014 the work of turning what you are looking for into where you actually live."), /*#__PURE__*/React.createElement("p", null, "Through Jean, a listing becomes a shortlist. A shortlist becomes an offer. An offer becomes keys in your hand. Not a transaction you have to survive, but a process someone walks you through \u2014 which is precisely why the name ends the way it does.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "brand-story-lede"
  }, "\u5225\u4EBA\u7684\u62DB\u724C\u4E0A\u662F\u540D\u8A5E\uFF0C\u6211\u5011\u7684\u662F\u4E00\u4EF6\u6B63\u5728\u9032\u884C\u7684\u4E8B\u3002"), /*#__PURE__*/React.createElement("p", null, "\u82F1\u6587\u5F8C\u7DB4 ", /*#__PURE__*/React.createElement("em", null, "-ify"), " \u610F\u70BA\u300C\u4F7F\u4E4B\u6210\u70BA\u300D\u2014\u2014", /*#__PURE__*/React.createElement("strong", null, "clarify"), " \u662F\u4F7F\u4E4B\u6E05\u6670\uFF0C", /*#__PURE__*/React.createElement("strong", null, "simplify"), " \u662F\u4F7F\u4E4B\u7C21\u55AE\u3002\u5B83\u63CF\u8FF0\u7684\u5F9E\u4F86\u4E0D\u662F\u67D0\u500B\u77AC\u9593\uFF0C \u800C\u662F\u5F9E\u4E00\u7A2E\u72C0\u614B\u901A\u5F80\u53E6\u4E00\u7A2E\u72C0\u614B\u7684\u904E\u7A0B\u3002"), /*#__PURE__*/React.createElement("p", null, "\u9019\u6B63\u662F\u54C1\u724C\u7684\u6838\u5FC3\u3002\u623F\u5B50\u4E0D\u662F\u5728\u7C3D\u7D04\u684C\u4E0A\u6210\u70BA\u5BB6\u7684\uFF0C\u800C\u662F\u5728\u901A\u5F80\u90A3\u4E00\u523B\u7684\u6BCF\u4E00\u6B21\u5C0D\u8A71\u3001 \u6BCF\u4E00\u6B21\u770B\u5C4B\u3001\u6BCF\u4E00\u6B21\u8B70\u50F9\u4E4B\u4E2D\uFF0C\u4E00\u9EDE\u4E00\u9EDE\u6210\u70BA\u5BB6\u7684\u3002", /*#__PURE__*/React.createElement("strong", null, "Jeanify"), "\uFF0C \u5C31\u662F\u9019\u6BB5\u8DEF\u7A0B\u7684\u540D\u5B57\u2014\u2014\u628A\u60A8\u6240\u5C0B\u627E\u7684\uFF0C\u8B8A\u6210\u60A8\u771F\u6B63\u5C45\u4F4F\u7684\u5730\u65B9\u3002"), /*#__PURE__*/React.createElement("p", null, "\u900F\u904E Jean\uFF0C\u4E00\u5247\u623F\u6E90\u6210\u70BA\u5019\u9078\uFF0C\u5019\u9078\u6210\u70BA\u51FA\u50F9\uFF0C\u51FA\u50F9\u6210\u70BA\u60A8\u624B\u4E2D\u7684\u9470\u5319\u3002 \u4E0D\u662F\u4E00\u5834\u5FC5\u9808\u71AC\u904E\u53BB\u7684\u4EA4\u6613\uFF0C\u800C\u662F\u4E00\u6BB5\u6709\u4EBA\u5168\u7A0B\u966A\u4F34\u5F15\u5C0E\u7684\u904E\u7A0B\u2014\u2014 \u9019\u6B63\u662F\u9019\u500B\u540D\u5B57\u5982\u6B64\u7D50\u5C3E\u7684\u539F\u56E0\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "brand-story-rule"
  }), /*#__PURE__*/React.createElement("p", {
    className: "brand-story-kicker"
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "house ", /*#__PURE__*/React.createElement("span", null, "\u2192"), " shortlist ", /*#__PURE__*/React.createElement("span", null, "\u2192"), " offer ", /*#__PURE__*/React.createElement("span", null, "\u2192"), " ", /*#__PURE__*/React.createElement("em", null, "home")) : /*#__PURE__*/React.createElement(React.Fragment, null, "\u623F\u6E90 ", /*#__PURE__*/React.createElement("span", null, "\u2192"), " \u5019\u9078 ", /*#__PURE__*/React.createElement("span", null, "\u2192"), " \u51FA\u50F9 ", /*#__PURE__*/React.createElement("span", null, "\u2192"), " ", /*#__PURE__*/React.createElement("em", null, "\u5BB6"))))), /*#__PURE__*/React.createElement("section", {
    className: "section-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-tight",
    style: {
      textAlign: 'center',
      padding: '48px 32px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow no-rule"
  }, lang === "en" ? "Our Mission" : "我們的使命"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'clamp(28px, 3.4vw, 44px)',
      lineHeight: 1.35,
      color: 'var(--ink)',
      margin: '24px auto 0',
      maxWidth: '24ch'
    }
  }, "\"", lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Our mission is for you to be so ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--brass)'
    }
  }, "outrageously happy"), " with your buying or selling experience that you naturally and gladly recommend us to friendly people who would also love our service.") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u8B93\u60A8\u5C0D\u8CB7\u8CE3\u9AD4\u9A57 ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--brass)'
    }
  }, "\u6EFF\u610F\u81F3\u6975"), "\uFF0C\u81EA\u7136\u800C\u7136\u6A02\u610F\u5C07\u6211\u5011\u63A8\u85A6\u7D66\u540C\u6A23\u6703\u6B23\u8CDE\u9019\u4EFD\u670D\u52D9\u7684\u53CB\u4EBA\u3002"), "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 24,
      color: 'var(--brass)'
    }
  }, "\u2014 Jean Riley"))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-elev)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "The Jeanify Practice" : "Jeanify 業務"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, lang === "en" ? "A full-service real estate group." : "全方位房地產服務團隊"), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 20,
      maxWidth: '60ch'
    }
  }, lang === "en" ? "Beyond traditional sales — Jeanify offers a complete suite of services for owners, investors and aspiring agents." : "不只是買賣成交。Jeanify 為屋主、投資人，以及有志投入房仲業的夥伴，提供完整的服務。")), /*#__PURE__*/React.createElement("div", {
    className: "grid-4"
  }, [{
    t: lang === "en" ? "Real Estate Sales" : "房產銷售",
    d: lang === "en" ? "Single-family homes and commercial property — Jean's primary specialty." : "獨立住宅與商業不動產，Jean 的核心專長。"
  }, {
    t: lang === "en" ? "Business Sales" : "企業出售",
    d: lang === "en" ? "Confidential business brokerage with valuation and buyer vetting." : "企業出售全程保密，並提供估價與買方資格審核。"
  }, {
    t: lang === "en" ? "Property Management" : "物業管理",
    d: lang === "en" ? "Tenant placement, maintenance coordination and financial reporting." : "招募租客、維修協調與財務報表。"
  }, {
    t: lang === "en" ? "Investment Advisory" : "投資諮詢",
    d: lang === "en" ? "Portfolio strategy, 1031 exchange execution and replacement diligence." : "投資組合規劃、1031 交換執行與替代房產查核。"
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 32,
      border: '1px solid var(--line)',
      background: 'var(--bg-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 32,
      color: 'var(--brass)',
      marginBottom: 8
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h4", {
    style: {
      marginBottom: 12
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-dim)',
      fontSize: 14,
      lineHeight: 1.7
    }
  }, s.d)))))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-elev)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "How We Work" : "合作方式"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, lang === "en" ? "Four phases, one steady hand." : "四個階段，全程穩健"))), /*#__PURE__*/React.createElement("div", {
    className: "process"
  }, D3.process.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.n,
    className: "process-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dot"
  }, p.n), /*#__PURE__*/React.createElement("h4", null, zh(lang, p.tZh, p.t)), /*#__PURE__*/React.createElement("p", null, zh(lang, p.dZh, p.d))))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Client Voices" : "客戶心聲"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, lang === "en" ? "Client Testimonials — In their words" : "客戶推薦 —— 他們怎麼說"))), /*#__PURE__*/React.createElement("div", {
    className: "test-grid"
  }, D3.testimonials.map((tt, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "test-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "test-stars"
  }, "\u2605 \u2605 \u2605 \u2605 \u2605"), /*#__PURE__*/React.createElement("div", {
    className: "test-quote"
  }, "\"", lang === "zh" && tt.quoteZh ? tt.quoteZh : tt.quote, "\""), /*#__PURE__*/React.createElement("div", {
    className: "test-author"
  }, /*#__PURE__*/React.createElement("div", {
    className: "test-avatar"
  }, tt.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "test-name"
  }, zh(lang, tt.nameZh, tt.name)), /*#__PURE__*/React.createElement("div", {
    className: "test-meta"
  }, zh(lang, tt.areaZh, tt.area))))))))));
}
const ARTICLES = window.JR_ARTICLES || [];
const ARTICLES_ZH = window.JR_ARTICLES_ZH || {};

// Prefer the Chinese field, fall back to English — a missing translation degrades
// to readable rather than blank.
const zh = (lang, cn, en) => lang === "zh" && cn ? cn : en;
const CAT_ZH = {
  "Buyer Guide": "買家指南",
  "Seller Guide": "賣家指南",
  "Investor": "投資人",
  "Market": "市場分析",
  "International": "海外買家"
};
const readZh = (lang, r) => lang === "zh" ? r.replace(/\s*min$/, " 分鐘") : r;
const bySlug = s => ARTICLES.find(a => a.slug === s);

// Long-form dates, rendered without a timezone shift (the ISO string is a plain date).
function articleDate(iso, lang) {
  const [y, m, d] = iso.split("-").map(Number);
  if (lang === "zh") return `${y} 年 ${m} 月 ${d} 日`;
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

// One article card — used on the index and in the "related" strip.
function ArticleCard({
  a,
  go,
  lang
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "article-card",
    href: "#/articles/" + a.slug,
    onClick: e => {
      e.preventDefault();
      go("articles/" + a.slug);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "article-img" + (a.image ? " has-image" : ""),
    style: a.image ? {
      backgroundImage: "url(" + encodeURI(a.image) + ")",
      backgroundSize: "cover",
      backgroundPosition: "center"
    } : null
  }), /*#__PURE__*/React.createElement("div", {
    className: "article-meta"
  }, zh(lang, CAT_ZH[a.category], a.category), " \xB7 ", readZh(lang, a.read)), /*#__PURE__*/React.createElement("h3", null, zh(lang, a.titleZh, a.title)), /*#__PURE__*/React.createElement("p", {
    className: "article-dek"
  }, zh(lang, a.dekZh, a.dek)), /*#__PURE__*/React.createElement("span", {
    className: "btn-text arrow-right article-more"
  }, lang === "en" ? "Read" : "閱讀"));
}

// Download card for the seasonal PDF market guides.
function MarketGuideCard({
  g,
  lang
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mg-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mg-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow no-rule"
  }, lang === "en" ? g.audience : g.audienceZh), /*#__PURE__*/React.createElement("span", {
    className: "mg-edition"
  }, lang === "en" ? g.edition : g.editionZh)), /*#__PURE__*/React.createElement("h3", null, lang === "en" ? g.title : g.titleZh), /*#__PURE__*/React.createElement("p", {
    className: "mg-desc"
  }, lang === "en" ? g.desc : g.descZh), /*#__PURE__*/React.createElement("ul", {
    className: "mg-contents"
  }, (lang === "zh" && g.contentsZh ? g.contentsZh : g.contents).map((c, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, c))), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary arrow-right mg-btn",
    href: g.file,
    target: "_blank",
    rel: "noopener noreferrer"
  }, lang === "en" ? "Download PDF" : "下載 PDF"), /*#__PURE__*/React.createElement("div", {
    className: "mg-meta"
  }, g.pages, " ", lang === "en" ? "pages" : "頁", " \xB7 PDF \xB7 ", g.size, lang === "zh" ? " · 內容為英文" : ""));
}
function MarketGuidesSection({
  lang,
  only
}) {
  const guides = only ? D3.marketGuides.filter(g => g.id === only) : D3.marketGuides;
  if (!guides.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Seasonal Briefings" : "季度簡報"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, lang === "en" ? "Market guides, updated each season" : "每季更新的市場指南"), !only && /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 20,
      maxWidth: '60ch'
    }
  }, lang === "en" ? "Twenty-page briefings on where the market actually stands this quarter — rates, inventory, equity and pricing, with the charts behind each claim. Free, no email required." : "二十頁的季度市場簡報：利率、庫存、房屋淨值與定價，每項論點都附上圖表佐證。免費下載，不必留下 Email。"))), /*#__PURE__*/React.createElement("div", {
    className: only ? "grid-1" : "grid-2"
  }, guides.map(g => /*#__PURE__*/React.createElement(MarketGuideCard, {
    key: g.id,
    g: g,
    lang: lang
  }))));
}

// ---------- ARTICLES INDEX ----------
function ArticlesPage({
  lang,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-fade"
  }, /*#__PURE__*/React.createElement("header", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "breadcrumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/home",
    onClick: e => {
      e.preventDefault();
      go("home");
    }
  }, lang === "en" ? "Home" : "首頁"), /*#__PURE__*/React.createElement("span", null, "/"), lang === "en" ? "Resources" : "資源"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Resources" : "資源中心"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 20
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Written for the ", /*#__PURE__*/React.createElement("em", null, "committed"), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u5C08\u696D ", /*#__PURE__*/React.createElement("em", null, "\u5C08\u6B04"))), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, lang === "en" ? "Working playbooks and field notes for buyers, sellers and 1031 investors — the same frameworks I use with private clients, made public." : "為買家、賣家與 1031 投資人整理的實務指南與市場札記，與我服務私人客戶時所用的是同一套方法。"))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, D3.guides.map(g => /*#__PURE__*/React.createElement("a", {
    key: g.num,
    className: "guide-card",
    href: "#/guides/" + (g.num === "01" ? "buyer" : g.num === "02" ? "seller" : "1031"),
    onClick: e => {
      e.preventDefault();
      go("guides/" + (g.num === "01" ? "buyer" : g.num === "02" ? "seller" : "1031"));
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "num",
    "aria-hidden": "true"
  }, g.num), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow no-rule"
  }, lang === "en" ? "Guide" : "指南"), /*#__PURE__*/React.createElement("h3", null, zh(lang, g.titleZh, g.title)), /*#__PURE__*/React.createElement("p", {
    className: "desc"
  }, zh(lang, g.descZh, g.desc)), /*#__PURE__*/React.createElement("span", {
    className: "btn-text arrow-right",
    style: {
      marginTop: 'auto'
    }
  }, zh(lang, g.ctaZh, g.cta))))))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-elev)'
    }
  }, /*#__PURE__*/React.createElement(MarketGuidesSection, {
    lang: lang
  })), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Field Notes" : "札記"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, lang === "en" ? "Articles & briefings" : "文章與簡報"))), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, ARTICLES.map(a => /*#__PURE__*/React.createElement(ArticleCard, {
    key: a.slug,
    a: a,
    go: go,
    lang: lang
  }))))));
}

// ---------- ARTICLE DETAIL ----------
// Mirrors tools/build-articles.mjs, which renders the same blocks to static HTML.
// If you add a block type, add it in both places.
function ArticleBlock({
  b,
  z
}) {
  // Anchor ids always come from the English heading, so article URLs stay ASCII
  // and keep working when the reader switches language.
  const d = z || b;
  switch (b.t) {
    case "h":
      return /*#__PURE__*/React.createElement("h2", {
        className: "art-h",
        id: slugifyHeading(b.x)
      }, d.x);
    case "ul":
      return /*#__PURE__*/React.createElement("ul", {
        className: "art-list"
      }, d.x.map((li, i) => /*#__PURE__*/React.createElement("li", {
        key: i
      }, li)));
    case "ol":
      return /*#__PURE__*/React.createElement("ol", {
        className: "art-list art-list-num"
      }, d.x.map((li, i) => /*#__PURE__*/React.createElement("li", {
        key: i
      }, li)));
    case "callout":
      return /*#__PURE__*/React.createElement("aside", {
        className: "art-callout"
      }, d.x);
    case "table":
      return /*#__PURE__*/React.createElement("div", {
        className: "art-table-wrap"
      }, /*#__PURE__*/React.createElement("table", {
        className: "art-table"
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, d.head.map((h, i) => /*#__PURE__*/React.createElement("th", {
        key: i
      }, h)))), /*#__PURE__*/React.createElement("tbody", null, d.rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
        key: i
      }, r.map((c, j) => j === 0 ? /*#__PURE__*/React.createElement("th", {
        key: j,
        scope: "row"
      }, c) : /*#__PURE__*/React.createElement("td", {
        key: j
      }, c)))))));
    default:
      return /*#__PURE__*/React.createElement("p", {
        className: "art-p"
      }, d.x);
  }
}
function slugifyHeading(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function ArticleDetail({
  slug,
  lang,
  go
}) {
  const a = bySlug(slug);
  uE3(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (!a) {
    return /*#__PURE__*/React.createElement("div", {
      className: "page-fade"
    }, /*#__PURE__*/React.createElement("header", {
      className: "page-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "breadcrumbs"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#/articles",
      onClick: e => {
        e.preventDefault();
        go("articles");
      }
    }, lang === "en" ? "Resources" : "資源")), /*#__PURE__*/React.createElement("h1", {
      style: {
        marginTop: 20
      }
    }, lang === "en" ? "Article not found" : "找不到這篇文章"), /*#__PURE__*/React.createElement("p", {
      className: "lede"
    }, lang === "en" ? "That article may have been renamed. Everything currently published is on the articles page." : "這篇文章可能已更名。目前所有已發表的內容，都在資源頁面上。"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement("a", {
      className: "btn btn-primary arrow-right",
      href: "#/articles",
      onClick: e => {
        e.preventDefault();
        go("articles");
      }
    }, lang === "en" ? "All articles" : "所有文章")))));
  }
  const zhBody = lang === "zh" ? ARTICLES_ZH[a.slug] : null;
  const headings = a.sections.map((s, i) => ({
    s,
    i
  })).filter(({
    s
  }) => s.t === "h").map(({
    s,
    i
  }) => ({
    id: slugifyHeading(s.x),
    label: zhBody && zhBody.sections[i] ? zhBody.sections[i].x : s.x
  }));
  const related = (a.related || []).map(bySlug).filter(Boolean);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-fade"
  }, /*#__PURE__*/React.createElement("header", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "breadcrumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/home",
    onClick: e => {
      e.preventDefault();
      go("home");
    }
  }, lang === "en" ? "Home" : "首頁"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("a", {
    href: "#/articles",
    onClick: e => {
      e.preventDefault();
      go("articles");
    }
  }, lang === "en" ? "Resources" : "資源"), /*#__PURE__*/React.createElement("span", null, "/"), zh(lang, CAT_ZH[a.category], a.category)), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, zh(lang, CAT_ZH[a.category], a.category)), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 20
    }
  }, zh(lang, a.titleZh, a.title)), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, zh(lang, a.dekZh, a.dek)), /*#__PURE__*/React.createElement("div", {
    className: "art-byline"
  }, /*#__PURE__*/React.createElement("span", null, lang === "en" ? "By" : "作者", " ", /*#__PURE__*/React.createElement("strong", null, "Jean Riley"), " \xB7 ", D3.agent.license), /*#__PURE__*/React.createElement("span", null, articleDate(a.date, lang), a.updated && a.updated !== a.date ? (lang === "en" ? " · Updated " : " · 更新於 ") + articleDate(a.updated, lang) : ""), /*#__PURE__*/React.createElement("span", null, lang === "en" ? a.read + " read" : readZh(lang, a.read) + "閱讀")))), /*#__PURE__*/React.createElement("article", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "art-answer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow no-rule"
  }, lang === "en" ? "The short answer" : "重點摘要"), /*#__PURE__*/React.createElement("p", null, zh(lang, a.answerZh, a.answer))), headings.length > 2 && /*#__PURE__*/React.createElement("nav", {
    className: "art-toc",
    "aria-label": lang === "en" ? "On this page" : "本頁內容"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow no-rule"
  }, lang === "en" ? "On this page" : "本頁內容"), /*#__PURE__*/React.createElement("ol", null, headings.map((h, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#" + h.id,
    onClick: e => scrollToId(e, h.id)
  }, h.label))))), /*#__PURE__*/React.createElement("div", {
    className: "art-body"
  }, a.sections.map((b, i) => /*#__PURE__*/React.createElement(ArticleBlock, {
    key: i,
    b: b,
    z: zhBody ? zhBody.sections[i] : null
  }))), a.credit && /*#__PURE__*/React.createElement("div", {
    className: "article-credit",
    style: {
      marginTop: 32
    }
  }, lang === "en" ? "Photo by " : "照片：", /*#__PURE__*/React.createElement("a", {
    href: a.credit.url + "?utm_source=jean_riley&utm_medium=referral",
    target: "_blank",
    rel: "noopener noreferrer"
  }, a.credit.name), " ", lang === "en" ? "on " : "，來源 ", /*#__PURE__*/React.createElement("a", {
    href: "https://unsplash.com/?utm_source=jean_riley&utm_medium=referral",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Unsplash")))), a.faqs && a.faqs.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-elev)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "FAQ" : "常見問題"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, lang === "en" ? "Frequently asked" : "常見問題"))), /*#__PURE__*/React.createElement(FAQList, {
    items: zhBody ? zhBody.faqs : a.faqs,
    lang: lang
  }))), a.sources && a.sources.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "section-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-tight"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Sources" : "資料來源"), /*#__PURE__*/React.createElement("ul", {
    className: "art-sources"
  }, a.sources.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: s.url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, s.name)))), /*#__PURE__*/React.createElement("p", {
    className: "art-disclaimer"
  }, lang === "en" ? "Market figures are current as of the date shown and change frequently. Nothing here is tax or legal advice — for your specific situation, consult a CPA or attorney." : "文中市場數據截至標示日期，並會持續變動。本文不構成稅務或法律建議，請就個人情況諮詢會計師或律師。"))), related.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Keep reading" : "延伸閱讀"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, lang === "en" ? "Related articles" : "相關文章"))), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, related.map(r => /*#__PURE__*/React.createElement(ArticleCard, {
    key: r.slug,
    a: r,
    go: go,
    lang: lang
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-tight",
    style: {
      padding: '48px 32px',
      textAlign: 'center',
      border: '1px solid var(--line)',
      background: 'var(--bg-elev)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow no-rule"
  }, lang === "en" ? "Next Step" : "下一步"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 24px'
    }
  }, lang === "en" ? "Questions about your own situation?" : "想討論您的個人情況？"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary arrow-right",
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      go("contact");
    }
  }, lang === "en" ? "Schedule a Consultation" : "預約諮詢"))));
}

// ---------- FAQ ----------
const FAQ_GROUPS = [{
  id: "working",
  en: "Working with Jean",
  zh: "與 Jean 合作"
}, {
  id: "buying",
  en: "Buying",
  zh: "購屋"
}, {
  id: "selling",
  en: "Selling",
  zh: "售屋"
}, {
  id: "investing",
  en: "Investing & 1031",
  zh: "投資與 1031"
}];
function FAQPage({
  lang,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-fade"
  }, /*#__PURE__*/React.createElement("header", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "breadcrumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/home",
    onClick: e => {
      e.preventDefault();
      go("home");
    }
  }, lang === "en" ? "Home" : "首頁"), /*#__PURE__*/React.createElement("span", null, "/"), lang === "en" ? "FAQ" : "常見問題"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Frequently Asked" : "常見問題"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 20
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "The questions I get ", /*#__PURE__*/React.createElement("em", null, "most"), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u6700\u5E38\u88AB ", /*#__PURE__*/React.createElement("em", null, "\u554F\u5230"), " \u7684\u554F\u984C")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, lang === "en" ? "Straight answers on commission, closing costs, down payments, insurance, Mello-Roos, Prop 19, 1031 exchanges and buying from overseas. If yours isn't here, call me — I'd rather answer it directly." : "關於佣金、過戶費用、頭期款、房屋保險、Mello-Roos、Prop 19、1031 交換與海外購屋的直接解答。若未涵蓋您的問題，歡迎直接來電。"))), FAQ_GROUPS.map((grp, gi) => {
    const items = D3.faqs.filter(f => f.g === grp.id);
    if (!items.length) return null;
    return /*#__PURE__*/React.createElement("section", {
      key: grp.id,
      className: "section",
      style: gi % 2 ? {
        background: 'var(--bg-elev)'
      } : null
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sect-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sect-head-title"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, String(gi + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h2", {
      style: {
        marginTop: 16
      }
    }, lang === "en" ? grp.en : grp.zh))), /*#__PURE__*/React.createElement(FAQList, {
      items: items,
      lang: lang
    })));
  }), /*#__PURE__*/React.createElement("section", {
    className: "section-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-tight",
    style: {
      padding: '48px 32px',
      textAlign: 'center',
      border: '1px solid var(--line)',
      background: 'var(--bg-elev)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow no-rule"
  }, lang === "en" ? "Still unanswered" : "仍有疑問"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 24px'
    }
  }, lang === "en" ? "Ask me directly." : "歡迎直接詢問"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary arrow-right",
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      go("contact");
    }
  }, lang === "en" ? "Schedule a Consultation" : "預約諮詢"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "tel:" + D3.agent.phone.replace(/[^0-9+]/g, "")
  }, D3.agent.phone)))));
}

// ---------- GUIDE DETAIL (buyer / seller / 1031) ----------
function GuideDetail({
  kind,
  lang,
  go
}) {
  const titles = {
    buyer: {
      en: "The Buyer's Guide",
      zh: "買家指南",
      sub: {
        en: "From pre-approval to keys in hand.",
        zh: "從預先批貸到拿到鑰匙"
      }
    },
    seller: {
      en: "The Seller's Guide",
      zh: "賣家指南",
      sub: {
        en: "Pricing, preparation, marketing and negotiation.",
        zh: "定價、準備、營銷與談判"
      }
    },
    "1031": {
      en: "1031 Exchange Primer",
      zh: "1031 交換入門",
      sub: {
        en: "Identification windows and replacement strategy.",
        zh: "識別期與替代房產策略"
      }
    }
  };
  const meta = titles[kind] || titles.buyer;
  // Chinese steps, keyed the same way. Falls back to English if a kind is missing.
  const stepsZh = {
    buyer: [["貸款預審", "介紹貸款專員，做的是真正的資格評估而不只是比利率，並一起定出您的出價上限。"], ["了解需求", "您真正想要的，和您以為自己想要的，往往不同；這通常要兩三次對話才會清楚。"], ["搜尋物件", "精選的 MLS 條件通知、未公開物件的引介，以及週末的看屋路線安排。"], ["盡職查核", "學區資料、微氣候、管委會文件審閱與可比較成交分析。"], ["出價", "價格、條件，以及一套能贏但不會讓您買貴的但書架構。"], ["驗屋", "屋頂、地基、污水管線與環境檢測，配合聖地牙哥在地的專業廠商。"], ["鑑價", "與貸款方協調；萬一鑑價不足，也先想好因應方式。"], ["交割", "最後點交、履約保證交接，以及一個值得拍照留念的交屋時刻。"]],
    seller: [["估價", "一份書面 CMA：三種定價情境，並說明各自對應的銷售時程。"], ["整理準備", "修繕範圍、佈置計畫，以及哪些工項的錢真的收得回來。"], ["攝影", "雜誌等級的建築攝影、空拍、黃昏光線與 3D 環景。"], ["行銷", "MLS 上架、跨平台同步、同業預覽、紙本 DM 與數位廣告投放。"], ["帶看", "依社區特性安排開放參觀，另可預約私人看屋。"], ["談判", "審閱出價、擬定還價策略，以及但書解除的節奏掌控。"], ["履約保證", "驗屋回覆、鑑價處理，以及交割前的各項協調。"], ["交屋", "最後點交、鑰匙交付，以及交割後的後續追蹤。"]],
    "1031": [["售前規劃", "在原房產上市之前，就先確立投資方向與替代標的的範圍。"], ["合格中介", "務必在交割前完成委任。我有兩位長期配合的合格中介隨時可以接手。"], ["原房產出售", "流程與一般委託銷售相同，但履約保證的每一步都須嚴格安排，以維持交換資格。"], ["第 0 天", "款項匯入合格中介帳戶，45 天與 180 天的時鐘同時開始。"], ["書面指定", "三物件原則（或 200% 原則），須於第 45 天前完成書面指定。"], ["替代標的查核", "驗屋、貸款，必要時還包括持有架構的安排。"], ["替代標的交割", "須在 180 天內完成。同時說明 boot 的計算與申報方式。"], ["申報", "與您的會計師協調 Form 8824 的填報。"]]
  }[kind];
  const steps = {
    buyer: [["Pre-approval", "Lender introductions, qualification beyond rate-shopping, and writing your buying envelope."], ["Discovery", "What you actually want vs. what you think you want — refined over 2-3 conversations."], ["Search", "Curated MLS feeds, off-market introductions, and weekend tour itineraries."], ["Diligence", "School data, micro-climate, HOA review, comp set."], ["Offer", "Pricing, terms, and the contingency architecture that wins without overpaying."], ["Inspection", "Roof, foundation, sewer, environmental — with vetted San Diego specialists."], ["Appraisal", "Lender coordination and gap strategy if it comes in low."], ["Close", "Walk-through, escrow handoff, and a key delivery worth photographing."]],
    seller: [["Valuation", "A written CMA — three pricing scenarios with timeline implications for each."], ["Preparation", "Touch-up scope, staging plan, and which improvements actually return their cost."], ["Photography", "Magazine-grade architectural photography, drone, twilight, and 3D walkthroughs."], ["Marketing", "MLS, syndication, broker preview, private mailers, and digital campaign."], ["Showings", "Open houses calibrated to your neighborhood, plus private appointments by request."], ["Negotiation", "Offer review, counter strategy, and contingency removal pacing."], ["Escrow", "Inspection responses, appraisal management, and pre-close coordination."], ["Hand-off", "Final walkthrough, key handover, and post-close follow-up."]],
    "1031": [["Pre-sale planning", "Identify investment thesis and replacement universe before listing the relinquished property."], ["Qualified intermediary", "Engage a QI before close. I work with two on standby."], ["Sale of relinquished", "Standard listing — but with strict escrow choreography to preserve exchange status."], ["Day 0", "Funds wired to QI. The 45/180-day clocks begin."], ["Identification", "Three-property rule (or 200% rule) — written identification by Day 45."], ["Replacement diligence", "Inspections, financing, partnership structure if applicable."], ["Replacement close", "Within 180 days. Boot calculations and reporting walk-through."], ["Filing", "Coordinate with your CPA on Form 8824."]]
  }[kind];
  return /*#__PURE__*/React.createElement("div", {
    className: "page-fade"
  }, /*#__PURE__*/React.createElement("header", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "breadcrumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/articles",
    onClick: e => {
      e.preventDefault();
      go("articles");
    }
  }, lang === "en" ? "Resources" : "資源"), /*#__PURE__*/React.createElement("span", null, "/"), lang === "en" ? meta.en : meta.zh), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Guide" : "指南"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("em", null, lang === "en" ? meta.en : meta.zh)), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, lang === "en" ? meta.sub.en : meta.sub.zh))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-tight"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, steps.map(([title, desc], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      gap: 32,
      padding: '32px 0',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      fontStyle: 'italic',
      color: 'var(--brass)'
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 28,
      marginBottom: 8
    }
  }, lang === "zh" && stepsZh && stepsZh[i] ? stepsZh[i][0] : title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-dim)',
      lineHeight: 1.7
    }
  }, lang === "zh" && stepsZh && stepsZh[i] ? stepsZh[i][1] : desc))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      padding: 48,
      background: 'var(--bg-elev)',
      border: '1px solid var(--line)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow no-rule"
  }, lang === "en" ? "Next Step" : "下一步"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 24px'
    }
  }, lang === "en" ? "Ready when you are." : "隨時為您服務"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary arrow-right",
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      go("contact");
    }
  }, lang === "en" ? "Schedule a Consultation" : "預約諮詢")))), (kind === "buyer" || kind === "seller") && /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-elev)'
    }
  }, /*#__PURE__*/React.createElement(MarketGuidesSection, {
    lang: lang,
    only: kind
  })));
}

// ---------- 1031 EXCHANGE landing ----------
function ExchangePage({
  lang,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-fade"
  }, /*#__PURE__*/React.createElement("header", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "breadcrumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/home",
    onClick: e => {
      e.preventDefault();
      go("home");
    }
  }, lang === "en" ? "Home" : "首頁"), /*#__PURE__*/React.createElement("span", null, "/"), lang === "en" ? "1031 Exchange" : "1031 交換"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Investor Specialty" : "投資專長"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 20
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "The ", /*#__PURE__*/React.createElement("em", null, "1031"), " Exchange.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("em", null, "1031"), " \u4EA4\u63DB")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, lang === "en" ? "Defer capital gains on investment property — provided the calendar, paperwork and intermediary structure are exact. I handle each." : "投資性房產的資本利得遞延，前提是時程、文件與中介架構都精確無誤。這些細節，交給我來掌握。"))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, [{
    n: "45",
    l: lang === "en" ? "Days to identify" : "天識別期",
    d: lang === "en" ? "From the close of your relinquished property — written identification of replacement candidates." : "自交割日起算，須以書面指定替代房產。"
  }, {
    n: "180",
    l: lang === "en" ? "Days to close" : "天完成交割",
    d: lang === "en" ? "From the same close date — the replacement transaction must fund." : "自同一交割日起算，替代房產必須完成交割。"
  }, {
    n: "200%",
    l: lang === "en" ? "Identification cap" : "識別上限",
    d: lang === "en" ? "Combined value of identified properties cannot exceed 200% of relinquished value (unless 95% rule)." : "識別房產合計價值不超過原房產 200%（除非適用 95% 規則）。"
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.n,
    style: {
      padding: 40,
      border: '1px solid var(--line)',
      background: 'var(--bg-elev)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 96,
      color: 'var(--brass)',
      lineHeight: 1,
      marginBottom: 8
    }
  }, c.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-dim)',
      marginBottom: 16
    }
  }, c.l), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-dim)',
      lineHeight: 1.7
    }
  }, c.d)))))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-elev)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "FAQ" : "常見問題"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, lang === "en" ? "Frequently asked" : "常見問題"))), /*#__PURE__*/React.createElement(FAQList, {
    items: D3.faqs.filter(f => f.g === "investing"),
    lang: lang
  }))));
}
function FAQList({
  items,
  lang
}) {
  const [open, setOpen] = uS3(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "container-tight",
    style: {
      padding: 0
    }
  }, items.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "faq-item" + (open === i ? " open" : ""),
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-q"
  }, /*#__PURE__*/React.createElement("span", null, zh(lang, f.qZh, f.q)), /*#__PURE__*/React.createElement("span", {
    className: "toggle"
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "faq-a"
  }, zh(lang, f.aZh, f.a)))));
}
window.JR_PAGES = {
  AboutPage,
  ArticlesPage,
  ArticleDetail,
  ArticleCard,
  GuideDetail,
  ExchangePage,
  FAQPage,
  FAQList
};
})();
