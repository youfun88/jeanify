(function(){
/* global React */
const {
  useState: uS,
  useEffect: uE
} = React;
const {
  D,
  ListingCard,
  VideoCard
} = window.JR_CORE;

// ---------- HOME ----------
function HomePage({
  lang,
  go
}) {
  const t = D.i18n[lang];
  const sold = D.listings.filter(l => l.status === "sold").slice(0, 3);
  const songs = D.videos.filter(v => v.group === "song");
  const reel = D.videos.filter(v => v.group !== "song").slice(0, 5);
  const articles = (window.JR_ARTICLES || []).slice(0, 3);
  // pages.jsx loads after this file, so resolve at render time rather than import time.
  const {
    ArticleCard
  } = window.JR_PAGES;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-fade"
  }, /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-credit"
  }, lang === "en" ? "Photo by " : "照片：", /*#__PURE__*/React.createElement("a", {
    href: "https://unsplash.com/@chrismags0520?utm_source=jean_riley&utm_medium=referral",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Christopher Magat"), " ", lang === "en" ? "on " : "，來源 ", /*#__PURE__*/React.createElement("a", {
    href: "https://unsplash.com/?utm_source=jean_riley&utm_medium=referral",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Unsplash")), /*#__PURE__*/React.createElement("div", {
    className: "container hero-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, t.hero.eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "hero-headline",
    style: {
      marginTop: 24
    }
  }, t.hero.h1[0], " ", /*#__PURE__*/React.createElement("em", null, t.hero.h1[1])), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta"
  }, /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, t.hero.sub), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary arrow-right",
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      go("contact");
    }
  }, t.hero.cta1), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "#/listings",
    onClick: e => {
      e.preventDefault();
      go("listings");
    }
  }, t.hero.cta2)))), /*#__PURE__*/React.createElement("div", {
    className: "hero-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, D.agent.totalSold), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, lang === "en" ? "Verified Closings" : "已驗證成交")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "$1M+"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, lang === "en" ? "Avg. Sale Price" : "平均成交價")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, D.agent.years), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, lang === "en" ? "Years San Diego" : "聖地牙哥經驗")))), /*#__PURE__*/React.createElement("div", {
    className: "strip",
    style: {
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "strip-track"
  }, /*#__PURE__*/React.createElement("span", null, "La Jolla", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), "Bird Rock", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), "Del Mar", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), "Mission Hills", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), "Point Loma", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), "Hillcrest", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), "North Park", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), "Coronado", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), "Pacific Beach", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  })), /*#__PURE__*/React.createElement("span", null, "La Jolla", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), "Bird Rock", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), "Del Mar", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), "Mission Hills", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), "Point Loma", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), "Hillcrest", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), "North Park", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), "Coronado", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  }), "Pacific Beach", /*#__PURE__*/React.createElement("i", {
    className: "dot"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      background: "var(--bg-elev)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bio-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bio-portrait",
    style: {
      backgroundImage: "url(uploads/coastline-aerial.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, t.sections.bioEy), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "20px 0 32px"
    }
  }, t.sections.bioH), /*#__PURE__*/React.createElement("div", {
    className: "bio-quote"
  }, lang === "en" ? "Buying or selling a home can feel overwhelming. My role is to make it feel inevitable — calm, clear, and on your terms." : "買房或賣房常令人不知所措。我的工作，是讓這一切變得從容、清晰、由您主導。"), /*#__PURE__*/React.createElement("div", {
    className: "bio-sig"
  }, "\u2014 Jean Riley"), /*#__PURE__*/React.createElement("div", {
    className: "bio-credits"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bio-credit"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "10"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, lang === "en" ? "Years Practicing" : "從業年數")), /*#__PURE__*/React.createElement("div", {
    className: "bio-credit"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, D.agent.totalSold), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, lang === "en" ? "Closed Transactions" : "成交數")), /*#__PURE__*/React.createElement("div", {
    className: "bio-credit"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "EN/\u4E2D"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, lang === "en" ? "Bilingual Service" : "雙語服務"))), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost arrow-right",
    href: "#/about",
    onClick: e => {
      e.preventDefault();
      go("about");
    },
    style: {
      marginTop: 36
    }
  }, lang === "en" ? "More About Jean" : "瞭解更多"))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, t.sections.soldEy), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("em", null, t.sections.soldH))), /*#__PURE__*/React.createElement("a", {
    className: "btn-text arrow-right",
    href: "#/listings/sold",
    onClick: e => {
      e.preventDefault();
      go("listings/sold");
    }
  }, lang === "en" ? "All " + D.agent.totalSold + " Closings on Zillow" : "Zillow 上全部 " + D.agent.totalSold + " 套成交")), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, sold.map(l => /*#__PURE__*/React.createElement(ListingCard, {
    key: l.id,
    l: l,
    go: go,
    lang: lang
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "specialty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "specialty-img",
    style: {
      backgroundImage: "url(uploads/1031-investment.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "specialty-credit"
  }, lang === "en" ? "Photo by " : "照片：", /*#__PURE__*/React.createElement("a", {
    href: "https://unsplash.com/@aalolens?utm_source=jean_riley&utm_medium=referral",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Aalo Lens"), " ", lang === "en" ? "on " : "，來源 ", /*#__PURE__*/React.createElement("a", {
    href: "https://unsplash.com/?utm_source=jean_riley&utm_medium=referral",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Unsplash"))), /*#__PURE__*/React.createElement("div", {
    className: "specialty-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Investor Specialty" : "投資專長"), /*#__PURE__*/React.createElement("h2", null, lang === "en" ? "1031 Exchange — done with discipline." : "1031 交換 —— 嚴謹執行"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-dim)',
      fontSize: 17,
      lineHeight: 1.7
    }
  }, lang === "en" ? "The 45-day identification window is unforgiving. I work with two qualified intermediaries on standby and pre-vet replacement properties before your close — so the calendar serves your strategy, not the other way around." : "1031 交換的 45 天識別期不容出錯。我與兩位合格中介長期合作，在您交割前先篩出替代房產，讓時程配合您的策略，而不是反過來被時程綁住。"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary arrow-right",
    href: "#/exchange",
    onClick: e => {
      e.preventDefault();
      go("exchange");
    }
  }, lang === "en" ? "1031 Strategy Page" : "瞭解 1031 策略")))))), /*#__PURE__*/React.createElement("section", {
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
  }, t.sections.testEy), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, t.sections.testH))), /*#__PURE__*/React.createElement("div", {
    className: "test-grid"
  }, D.testimonials.slice(0, 3).map((tt, i) => /*#__PURE__*/React.createElement("div", {
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
  }, lang === "zh" && tt.nameZh ? tt.nameZh : tt.name), /*#__PURE__*/React.createElement("div", {
    className: "test-meta"
  }, lang === "zh" && tt.areaZh ? tt.areaZh : tt.area)))))))), songs.length > 0 && /*#__PURE__*/React.createElement("section", {
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
  }, lang === "en" ? "Signature Marketing" : "獨家行銷"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Every listing gets its ", /*#__PURE__*/React.createElement("em", null, "own song"), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u6BCF\u5957\u623F\u6E90\uFF0C\u90FD\u6709 ", /*#__PURE__*/React.createElement("em", null, "\u5C08\u5C6C\u6B4C\u66F2"))), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 20,
      maxWidth: '58ch'
    }
  }, lang === "en" ? "Not a stock music bed under a slideshow. An original song written about your property — its street, its setting, what it feels like to live there. It is the listing video people actually watch to the end, and send to a friend." : "不是配上罐頭音樂的幻燈片，而是為您的房子量身創作的一首歌：唱它的街道、它的環境，以及住在那裡的感覺。這樣的影片，人們會看完，也會轉給朋友。")), /*#__PURE__*/React.createElement("a", {
    className: "btn-text arrow-right",
    href: "#/videos",
    onClick: e => {
      e.preventDefault();
      go("videos");
    }
  }, lang === "en" ? "All Videos" : "完整影片")), /*#__PURE__*/React.createElement("div", {
    className: "video-grid"
  }, songs.map(v => /*#__PURE__*/React.createElement(VideoCard, {
    key: v.id,
    v: v,
    feature: v.feature,
    lang: lang
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary arrow-right",
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      go("contact");
    }
  }, lang === "en" ? "Get a song for your listing" : "為您的房源製作專屬歌曲")))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, t.sections.videoEy), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, t.sections.videoH)), /*#__PURE__*/React.createElement("a", {
    className: "btn-text arrow-right",
    href: "#/videos",
    onClick: e => {
      e.preventDefault();
      go("videos");
    }
  }, lang === "en" ? "Full Library" : "完整影片")), /*#__PURE__*/React.createElement("div", {
    className: "video-grid"
  }, reel.map(v => /*#__PURE__*/React.createElement(VideoCard, {
    key: v.id,
    v: v,
    lang: lang
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost arrow-right",
    href: D.agent.youtube,
    target: "_blank",
    rel: "noopener noreferrer"
  }, lang === "en" ? "Subscribe on YouTube — " : "訂閱 YouTube · ", D.agent.youtubeHandle)))), articles.length > 0 && /*#__PURE__*/React.createElement("section", {
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
  }, lang === "en" ? "Reading for buyers, sellers and investors" : "買家、賣家與投資人的閱讀清單")), /*#__PURE__*/React.createElement("a", {
    className: "btn-text arrow-right",
    href: "#/articles",
    onClick: e => {
      e.preventDefault();
      go("articles");
    }
  }, lang === "en" ? "All Articles" : "全部文章")), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, articles.map(a => /*#__PURE__*/React.createElement(ArticleCard, {
    key: a.slug,
    a: a,
    go: go,
    lang: lang
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "estimator"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, t.sections.estEy), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "20px 0 28px"
    }
  }, /*#__PURE__*/React.createElement("em", null, t.sections.estH)), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-dim)',
      fontSize: 17,
      lineHeight: 1.7,
      maxWidth: '40ch'
    }
  }, lang === "en" ? "Automated estimates routinely miss San Diego's coastal micro-markets. Share a few details and I'll prepare a personal CMA — usually within 48 hours." : "自動估價常忽略聖地牙哥沿海微市場的真實價值。請填寫以下資訊，我將在 48 小時內為您準備客製化市場分析（CMA）。")), /*#__PURE__*/React.createElement("form", {
    className: "est-form",
    onSubmit: e => {
      e.preventDefault();
      go("estimator");
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "est-step-label"
  }, "\u2014 ", lang === "en" ? "Step 1 of 3" : "第 1 / 3 步"), /*#__PURE__*/React.createElement("h4", null, lang === "en" ? "Your property address" : "您的房產地址"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-dim)',
      fontSize: 14,
      margin: '8px 0 24px'
    }
  }, lang === "en" ? "Begin with the address. Next steps cover condition and contact details." : "從地址開始。後續將瞭解房產狀況與聯絡方式。"), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, lang === "en" ? "Street Address" : "街道地址"), /*#__PURE__*/React.createElement("input", {
    placeholder: "1247 Coast Boulevard, La Jolla CA 92037"
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary arrow-right",
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, lang === "en" ? "Begin Valuation" : "開始評估"), /*#__PURE__*/React.createElement("p", {
    className: "est-note"
  }, lang === "en" ? "No automatic valuation — Jean reviews every request personally." : "不提供自動估價。每一份請求都由 Jean 親自審閱。"))))));
}
window.JR_HOME = {
  HomePage
};
})();
