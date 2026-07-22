(function(){
/* global React */
const {
  useState: uS2,
  useEffect: uE2
} = React;
const {
  D: D2,
  ListingCard: LC
} = window.JR_CORE;

// ---------- LISTINGS ----------
function ListingsPage({
  lang,
  go,
  sub
}) {
  // Default = sold (Jean's track record). Active is opt-in via /listings/active.
  const resolve = s => s === "active" ? "active" : "sold";
  const [filter, setFilter] = uS2(resolve(sub));
  uE2(() => {
    setFilter(resolve(sub));
  }, [sub]);
  const items = D2.listings.filter(l => l.status === filter);
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
  }, lang === "en" ? "Home" : "首頁"), /*#__PURE__*/React.createElement("span", null, "/"), lang === "en" ? "Listings" : "房源"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Curated Portfolio · San Diego" : "精選房源 · 聖地牙哥"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 20
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "The ", /*#__PURE__*/React.createElement("em", null, "Listings")) : /*#__PURE__*/React.createElement(React.Fragment, null, "\u5168\u90E8 ", /*#__PURE__*/React.createElement("em", null, "\u623F\u6E90"))), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, lang === "en" ? "Active representation, recent closings and rental opportunities across San Diego's coastal corridor and core urban neighborhoods." : "涵蓋聖地牙哥沿海與市區核心社區的在售、近期成交與出租房源。"))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filter-bar"
  }, [["sold", lang === "en" ? "Featured Homes" : "精選房源"], ["active", lang === "en" ? "For Sale" : "在售"]].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: "filter-pill" + (filter === k ? " active" : ""),
    onClick: () => {
      setFilter(k);
      go("listings" + (k === "sold" ? "" : "/" + k));
    }
  }, l)), /*#__PURE__*/React.createElement("span", {
    className: "filter-count"
  }, filter === "active" ? lang === "en" ? "none currently" : "暫無" : items.length + " " + (lang === "en" ? "properties" : "套房產"))), filter === "active" ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 32px',
      textAlign: 'center',
      border: '1px solid var(--line)',
      background: 'var(--bg-elev)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow no-rule"
  }, lang === "en" ? "Coming Soon" : "敬請期待"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '20px 0 16px'
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "New listings ", /*#__PURE__*/React.createElement("em", null, "on the way"), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u65B0\u623F\u6E90 ", /*#__PURE__*/React.createElement("em", null, "\u5373\u5C07\u4E0A\u7DDA"))), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      maxWidth: '52ch',
      margin: '0 auto 32px'
    }
  }, lang === "en" ? "Jean isn't actively representing any properties for sale at the moment. Get in touch to be the first to hear when the next listing comes to market — or to talk about selling your own home." : "Jean 目前暫無在售房源。歡迎與我聯絡，下一套物件上市時第一時間通知您；若您正考慮出售自己的房子，也歡迎聊聊。"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary arrow-right",
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      go("contact");
    }
  }, lang === "en" ? "Get on Jean's List" : "加入 Jean 的優先名單")) : /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, items.map(l => /*#__PURE__*/React.createElement(LC, {
    key: l.id,
    l: l,
    go: go,
    lang: lang
  }))), filter === "sold" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)'
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Showing ", items.length, " closings \u2265 $1M \xB7 ", D2.agent.totalSold, " total sales on Zillow") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u986F\u793A ", items.length, " \u5957 100 \u842C\u7F8E\u5143\u4EE5\u4E0A\u6210\u4EA4 \xB7 Zillow \u7E3D\u8A08 ", D2.agent.totalSold, " \u5957")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      padding: 32,
      border: '1px solid var(--line)',
      background: 'var(--bg-elev)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Full Track Record" : "完整成交記錄"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '12px 0 6px'
    }
  }, lang === "en" ? D2.agent.totalSold + " closings on Zillow" : "在 Zillow 檢視 " + D2.agent.totalSold + " 套成交"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-dim)',
      fontSize: 14,
      maxWidth: '52ch'
    }
  }, lang === "en" ? "For complete deal history, photography and verified client reviews — my Zillow profile mirrors my full transaction archive." : "完整的成交紀錄、房源照片與經驗證的客戶評價，都同步在我的 Zillow 主頁。")), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost arrow-right",
    href: D2.agent.zillow,
    target: "_blank",
    rel: "noopener noreferrer"
  }, lang === "en" ? "View Zillow Profile" : "檢視 Zillow 主頁"))))));
}

// ---------- LISTING DETAIL ----------
function ListingDetail({
  id,
  lang,
  go
}) {
  // Previously this fell back to listings[0] — so any unknown or stale URL rendered
  // a completely different property as though it were the one requested.
  const l = D2.listings.find(x => x.id === id);
  if (!l) {
    return /*#__PURE__*/React.createElement("div", {
      className: "page-fade"
    }, /*#__PURE__*/React.createElement("header", {
      className: "page-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container-tight"
    }, /*#__PURE__*/React.createElement("div", {
      className: "breadcrumbs"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#/listings",
      onClick: e => {
        e.preventDefault();
        go("listings");
      }
    }, lang === "en" ? "Listings" : "房源")), /*#__PURE__*/React.createElement("h1", {
      style: {
        marginTop: 20
      }
    }, lang === "en" ? "Listing not found" : "找不到這筆房源"), /*#__PURE__*/React.createElement("p", {
      className: "lede"
    }, lang === "en" ? "That listing may have closed or been removed. Jean's recent closings are on the listings page." : "這筆房源可能已成交或已下架。Jean 近期的成交紀錄都在房源頁面上。"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28,
        display: 'flex',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("a", {
      className: "btn btn-primary arrow-right",
      href: "#/listings",
      onClick: e => {
        e.preventDefault();
        go("listings");
      }
    }, lang === "en" ? "View closings" : "檢視成交紀錄"), /*#__PURE__*/React.createElement("a", {
      className: "btn btn-ghost",
      href: "#/contact",
      onClick: e => {
        e.preventDefault();
        go("contact");
      }
    }, lang === "en" ? "Ask Jean" : "詢問 Jean")))));
  }
  const SIDE = {
    list: lang === "zh" ? "賣方" : "Listing side",
    buy: lang === "zh" ? "買方" : "Buy side",
    both: lang === "zh" ? "買賣雙方" : "Both sides"
  };
  const specs = [[lang === "en" ? "Type" : "類型", l.type], [lang === "en" ? "Beds" : "臥室", l.beds], [lang === "en" ? "Baths" : "衛浴", l.baths], [lang === "en" ? "Interior" : "室內面積", l.sqft && l.sqft + (lang === "en" ? " sq ft" : " 平方英尺")], [lang === "en" ? "Lot" : "地坪", l.lot], [lang === "en" ? "Closed" : "成交時間", l.soldDate && l.soldDate.replace(" · ", "/")], [lang === "en" ? "Represented" : "代理方", l.side && SIDE[l.side]]].filter(([, v]) => v !== undefined && v !== null && v !== "" && v !== "—");
  const heroImg = l.image ? encodeURI(l.image) : null;
  const heroStyle = heroImg ? {
    marginTop: 80,
    backgroundImage: "url(" + heroImg + ")",
    backgroundSize: "cover",
    backgroundPosition: "center"
  } : {
    marginTop: 80
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page-fade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "detail-hero" + (heroImg ? " has-image" : ""),
    style: heroStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "detail-hero-overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "detail-hero-content container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "breadcrumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/listings",
    onClick: e => {
      e.preventDefault();
      go("listings");
    }
  }, lang === "en" ? "Listings" : "房源"), /*#__PURE__*/React.createElement("span", null, "/"), l.street), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "zh" ? l.status === "sold" ? "已成交" : l.status === "rent" ? "出租中" : "在售" : l.status === "sold" ? "Closed" : l.status === "rent" ? "For Rent" : "Active", " \xB7 ", l.area.split(",")[0]), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 10px',
      fontSize: 'clamp(40px, 5vw, 64px)'
    }
  }, l.street), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-dim)',
      fontSize: 17
    }
  }, l.area)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "listing-price",
    style: {
      fontSize: 48
    }
  }, l.price), /*#__PURE__*/React.createElement("div", {
    className: "listing-meta",
    style: {
      borderTop: 'none',
      justifyContent: 'flex-end'
    }
  }, l.beds && /*#__PURE__*/React.createElement("span", null, l.beds, " ", lang === "zh" ? "房" : "BD"), l.baths && /*#__PURE__*/React.createElement("span", null, l.baths, " ", lang === "zh" ? "衛" : "BA"), l.sqft && /*#__PURE__*/React.createElement("span", null, l.sqft, " ", lang === "zh" ? "平方英尺" : "SF"), l.soldDate && /*#__PURE__*/React.createElement("span", null, lang === "zh" ? "成交" : "Closed", " ", l.soldDate.replace(" · ", "/"))))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "listing-detail-layout"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Property" : "物件資料"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '20px 0 32px'
    }
  }, l.ph || (l.status === "sold" ? lang === "en" ? "Closed by Jean Riley" : "由 Jean Riley 成交" : lang === "en" ? "Represented by Jean Riley" : "由 Jean Riley 代理")), specs.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 24,
      marginTop: 8,
      paddingTop: 32,
      borderTop: '1px solid var(--line)'
    }
  }, specs.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)'
    }
  }, k), /*#__PURE__*/React.createElement("span", null, v)))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-dim)',
      fontSize: 15,
      lineHeight: 1.8,
      marginTop: 32
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Full details, photography and the verified transaction record for this and every other closing are on ", /*#__PURE__*/React.createElement("a", {
    href: D2.agent.zillow,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'var(--brass)'
    }
  }, "Jean's Zillow profile"), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u672C\u7269\u4EF6\u8207\u5176\u4ED6\u6240\u6709\u6210\u4EA4\u7684\u5B8C\u6574\u8CC7\u6599\u3001\u7167\u7247\u8207\u7D93\u9A57\u8B49\u7684\u4EA4\u6613\u7D00\u9304\uFF0C\u90FD\u5728 ", /*#__PURE__*/React.createElement("a", {
    href: D2.agent.zillow,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'var(--brass)'
    }
  }, "Jean \u7684 Zillow \u4E3B\u9801"), "\u3002"))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--bg-elev)',
      padding: 32,
      border: '1px solid var(--line)',
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "test-avatar",
    style: {
      width: 64,
      height: 64,
      fontSize: 24,
      marginBottom: 16
    }
  }, "JR"), /*#__PURE__*/React.createElement("h4", null, "Jean Riley"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-dim)',
      fontSize: 13,
      marginBottom: 24
    }
  }, lang === "en" ? "Listing Agent" : "委託經紀", " \xB7 ", D2.agent.brokerage), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary arrow-right",
    style: {
      width: '100%',
      justifyContent: 'center',
      marginBottom: 12
    },
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      go("contact");
    }
  }, lang === "en" ? "Schedule Tour" : "預約看屋"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, D2.agent.phone))))));
}
window.JR_LISTINGS = {
  ListingsPage,
  ListingDetail
};
})();
