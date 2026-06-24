(function(){
/* global React */
const {
  useState: uS3
} = React;
const {
  D: D3
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
  }, "Home"), /*#__PURE__*/React.createElement("span", null, "/"), "About"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Meet Jean" : "認識 Jean"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 20
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Treating clients ", /*#__PURE__*/React.createElement("em", null, "like royalty"), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u8996\u5BA2\u6236 ", /*#__PURE__*/React.createElement("em", null, "\u5982\u7687\u5BA4"))), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Realtor\xAE Jean Riley \xB7 ", D3.agent.license, " \xB7 Centermac SD, Inc. \xB7 San Diego's Rising Star Real Estate Agent.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Realtor\xAE Jean Riley \xB7 ", D3.agent.license, " \xB7 Centermac SD, Inc. \xB7 \u8056\u5730\u4E9E\u54E5\u65B0\u661F\u5730\u7522\u7D93\u7D00\u3002")))), /*#__PURE__*/React.createElement("section", {
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
  }, lang === "en" ? "Buying or selling a home can be overwhelming — my work is to relieve that, and to make sure my clients feel like royalty from the first conversation through the last signature." : "買房或賣房可能令人不堪重負 —— 我的工作是消除這份壓力，讓我的客戶從第一次對話到最後一次簽字，全程感受到皇室般的禮遇。"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-dim)',
      marginTop: 28,
      lineHeight: 1.8
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "At ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Centermac SD, Inc."), " \u2014 one of the most trusted real estate groups in California \u2014 we consult, negotiate, and handle every detail so our clients successfully buy or sell what is, for most of them, the largest asset they will ever own. That orientation guides everything I do.") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u5728 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Centermac SD, Inc."), " \u2014\u2014 \u52A0\u5DDE\u6700\u53D7\u4FE1\u8CF4\u7684\u623F\u5730\u7522\u5718\u968A\u4E4B\u4E00 \u2014\u2014 \u6211\u5011\u63D0\u4F9B\u8AEE\u8A62\u3001\u8AC7\u5224\uFF0C\u4E26\u8655\u7406\u6BCF\u4E00\u500B\u7D30\u7BC0\uFF0C\u78BA\u4FDD\u5BA2\u6236\u6210\u529F\u8CB7\u8CE3\u4ED6\u5011\u4E00\u751F\u4E2D\u6700\u91CD\u8981\u7684\u8CC7\u7522\u3002\u9019\u4E00\u7406\u5FF5\u6307\u5F15\u8457\u6211\u7684\u6BCF\u4E00\u9805\u5DE5\u4F5C\u3002")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-dim)',
      marginTop: 20,
      lineHeight: 1.8
    }
  }, lang === "en" ? "I came to real estate out of a passion for helping others pursue their dreams with clarity and confidence. I speak English, Mandarin and Taiwanese — and I specialize in the buying and selling of single-family homes and commercial properties across San Diego." : "我從事房地產，源於幫助他人以清晰與自信追尋夢想的熱忱。我精通英語、普通話與臺語 —— 專注於聖地亞哥地區獨立住宅與商業物業的買賣。"), /*#__PURE__*/React.createElement("div", {
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
  }, lang === "en" ? "San Diego Award" : "聖地亞哥獎項")), /*#__PURE__*/React.createElement("div", {
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
  }, lang === "en" ? "The Centermac Practice" : "Centermac 業務"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, lang === "en" ? "A full-service real estate group." : "全方位房地產服務團隊"), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 20,
      maxWidth: '60ch'
    }
  }, lang === "en" ? "Beyond traditional sales — Centermac SD offers a complete suite of services for owners, investors and aspiring agents." : "不止於傳統交易 —— Centermac SD 為業主、投資人與有志經紀人提供完整的服務體系。")), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, [{
    t: lang === "en" ? "Real Estate Sales" : "房產銷售",
    d: lang === "en" ? "Single-family homes and commercial property — Jean's primary specialty." : "獨立住宅與商業地產 —— Jean 的核心專長。"
  }, {
    t: lang === "en" ? "Business Sales" : "企業出售",
    d: lang === "en" ? "Confidential business brokerage with valuation and buyer vetting." : "機密企業經紀服務，含估值與買方稽核。"
  }, {
    t: lang === "en" ? "Property Management" : "物業管理",
    d: lang === "en" ? "Tenant placement, maintenance coordination and financial reporting." : "租客匹配、維護協調與財務報告。"
  }, {
    t: lang === "en" ? "Investment Advisory" : "投資諮詢",
    d: lang === "en" ? "Portfolio strategy, 1031 exchange execution and replacement diligence." : "投資組合策略、1031 交換執行與替代房產盡調。"
  }, {
    t: lang === "en" ? "Legal Consultation" : "法律諮詢",
    d: lang === "en" ? "In-house consultation on real estate contracts, disclosures and disputes." : "內部房地產合同、披露與爭議諮詢。"
  }, {
    t: lang === "en" ? "Real Estate School" : "地產學院",
    d: lang === "en" ? "Licensing prep and career mentorship for the next generation of agents." : "執照培訓與新一代經紀人職業輔導。"
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
  }, p.n), /*#__PURE__*/React.createElement("h4", null, p.t), /*#__PURE__*/React.createElement("p", null, p.d)))))), /*#__PURE__*/React.createElement("section", {
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
  }, lang === "en" ? "In their words" : "客戶原聲"))), /*#__PURE__*/React.createElement("div", {
    className: "test-grid"
  }, D3.testimonials.map((tt, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "test-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "test-stars"
  }, "\u2605 \u2605 \u2605 \u2605 \u2605"), /*#__PURE__*/React.createElement("div", {
    className: "test-quote"
  }, "\"", tt.quote, "\""), /*#__PURE__*/React.createElement("div", {
    className: "test-author"
  }, /*#__PURE__*/React.createElement("div", {
    className: "test-avatar"
  }, tt.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "test-name"
  }, tt.name), /*#__PURE__*/React.createElement("div", {
    className: "test-meta"
  }, tt.area)))))))));
}

// ---------- GUIDES INDEX ----------
function GuidesPage({
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
  }, "Home"), /*#__PURE__*/React.createElement("span", null, "/"), "Guides"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Resources" : "資源中心"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 20
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Guides for the ", /*#__PURE__*/React.createElement("em", null, "committed"), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u5C08\u696D ", /*#__PURE__*/React.createElement("em", null, "\u6307\u5357"))), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, lang === "en" ? "Working playbooks for buyers, sellers and 1031 investors — the same frameworks I use with private clients, made public." : "為買家、賣家與 1031 投資者準備的實操指南 —— 我服務私人客戶所用的同一套方法論。"))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, D3.guides.map(g => /*#__PURE__*/React.createElement("a", {
    key: g.num,
    className: "guide-card",
    href: "#/guides/" + g.title.toLowerCase().split(" ")[1],
    onClick: e => {
      e.preventDefault();
      go("guides/" + (g.num === "01" ? "buyer" : g.num === "02" ? "seller" : "1031"));
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, g.num), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow no-rule"
  }, lang === "en" ? "Guide" : "指南"), /*#__PURE__*/React.createElement("h3", null, g.title), /*#__PURE__*/React.createElement("p", {
    className: "desc"
  }, g.desc), /*#__PURE__*/React.createElement("span", {
    className: "btn-text arrow-right",
    style: {
      marginTop: 'auto'
    }
  }, g.cta)))))), /*#__PURE__*/React.createElement("section", {
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
  }, lang === "en" ? "Field Notes" : "札記"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, lang === "en" ? "Articles & briefings" : "文章與簡報"))), /*#__PURE__*/React.createElement("div", {
    className: "grid-4"
  }, D3.articles.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    className: "article-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "article-img" + (a.image ? " has-image" : ""),
    style: a.image ? {
      backgroundImage: "url(" + encodeURI(a.image) + ")",
      backgroundSize: "cover",
      backgroundPosition: "center"
    } : null
  }), /*#__PURE__*/React.createElement("div", {
    className: "article-meta"
  }, a.category, " \xB7 ", a.read), /*#__PURE__*/React.createElement("h3", null, a.title), a.credit && /*#__PURE__*/React.createElement("div", {
    className: "article-credit"
  }, "Photo by ", /*#__PURE__*/React.createElement("a", {
    href: a.credit.url + "?utm_source=jean_riley&utm_medium=referral",
    target: "_blank",
    rel: "noopener noreferrer"
  }, a.credit.name), " ", "on ", /*#__PURE__*/React.createElement("a", {
    href: "https://unsplash.com/?utm_source=jean_riley&utm_medium=referral",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Unsplash"))))))));
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
    href: "#/guides",
    onClick: e => {
      e.preventDefault();
      go("guides");
    }
  }, "Guides"), /*#__PURE__*/React.createElement("span", null, "/"), meta.en), /*#__PURE__*/React.createElement("span", {
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
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-dim)',
      lineHeight: 1.7
    }
  }, desc))))), /*#__PURE__*/React.createElement("div", {
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
  }, lang === "en" ? "Schedule a Consultation" : "預約諮詢")))));
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
  }, "Home"), /*#__PURE__*/React.createElement("span", null, "/"), "1031 Exchange"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Investor Specialty" : "投資專長"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 20
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "The ", /*#__PURE__*/React.createElement("em", null, "1031"), " Exchange.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("em", null, "1031"), " \u4EA4\u63DB")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, lang === "en" ? "Defer capital gains on investment property — provided the calendar, paperwork and intermediary structure are exact. I handle each." : "投資性房產的資本利得遞延 —— 前提是時間、檔案與中介結構均精確無誤。這些細節，由我把控。"))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, [{
    n: "45",
    l: lang === "en" ? "Days to identify" : "天識別期",
    d: lang === "en" ? "From the close of your relinquished property — written identification of replacement candidates." : "自交割之日起 —— 須以書面形式識別替代房產候選。"
  }, {
    n: "180",
    l: lang === "en" ? "Days to close" : "天完成交割",
    d: lang === "en" ? "From the same close date — the replacement transaction must fund." : "自同一交割日起 —— 替代交易必須完成放款。"
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
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, lang === "en" ? "Frequently asked" : "常見問題"))), /*#__PURE__*/React.createElement(FAQList, {
    items: D3.faqs.slice(2, 5)
  }))));
}
function FAQList({
  items
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
  }, /*#__PURE__*/React.createElement("span", null, f.q), /*#__PURE__*/React.createElement("span", {
    className: "toggle"
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "faq-a"
  }, f.a))));
}
window.JR_PAGES = {
  AboutPage,
  GuidesPage,
  GuideDetail,
  ExchangePage,
  FAQList
};
})();
