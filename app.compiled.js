(function(){
/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakSelect */
const {
  useHashRoute,
  TWEAK_DEFAULTS,
  FONT_PAIRS,
  ACCENT_OPTIONS,
  Nav,
  Footer,
  scrollToId
} = window.JR_CORE;
const {
  HomePage
} = window.JR_HOME;
const {
  ListingsPage,
  ListingDetail
} = window.JR_LISTINGS;
const {
  AboutPage,
  ArticlesPage,
  ArticleDetail,
  GuideDetail,
  ExchangePage,
  FAQPage
} = window.JR_PAGES;
const {
  EstimatorPage,
  ContactPage,
  VideosPage
} = window.JR_FORMS;
function App() {
  const [route, go] = useHashRoute();
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLangLocal] = React.useState(tweaks.lang || "en");
  React.useEffect(() => {
    setLangLocal(tweaks.lang);
  }, [tweaks.lang]);
  const setLang = l => {
    setLangLocal(l);
    setTweak("lang", l);
  };
  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--brass", tweaks.accent);
    r.style.setProperty("--brass-bright", tweaks.accent);
    const pair = FONT_PAIRS[tweaks.fontPair] || FONT_PAIRS["cormorant-inter"];
    r.style.setProperty("--font-display", pair.display);
    r.style.setProperty("--font-body", pair.body);
    if (tweaks.density === "compact") {
      r.style.setProperty("--pad-sect", "80px");
      r.style.setProperty("--pad-sect-sm", "48px");
    } else {
      r.style.setProperty("--pad-sect", "120px");
      r.style.setProperty("--pad-sect-sm", "72px");
    }
  }, [tweaks]);
  const [main, sub] = route.split("/");
  let page;
  switch (main) {
    case "listings":
      page = /*#__PURE__*/React.createElement(ListingsPage, {
        lang: lang,
        go: go,
        sub: sub
      });
      break;
    case "listing":
      page = /*#__PURE__*/React.createElement(ListingDetail, {
        id: sub,
        lang: lang,
        go: go
      });
      break;
    case "about":
      page = /*#__PURE__*/React.createElement(AboutPage, {
        lang: lang,
        go: go
      });
      break;
    case "articles":
      page = sub ? /*#__PURE__*/React.createElement(ArticleDetail, {
        slug: sub,
        lang: lang,
        go: go
      }) : /*#__PURE__*/React.createElement(ArticlesPage, {
        lang: lang,
        go: go
      });
      break;
    // #/guides is the old index URL — keep it resolving to the articles page so
    // existing links and bookmarks don't 404. #/guides/<kind> still opens the guide.
    case "guides":
      page = sub ? /*#__PURE__*/React.createElement(GuideDetail, {
        kind: sub,
        lang: lang,
        go: go
      }) : /*#__PURE__*/React.createElement(ArticlesPage, {
        lang: lang,
        go: go
      });
      break;
    case "faq":
      page = /*#__PURE__*/React.createElement(FAQPage, {
        lang: lang,
        go: go
      });
      break;
    case "exchange":
      page = /*#__PURE__*/React.createElement(ExchangePage, {
        lang: lang,
        go: go
      });
      break;
    case "estimator":
      page = /*#__PURE__*/React.createElement(EstimatorPage, {
        lang: lang,
        go: go
      });
      break;
    case "contact":
      page = /*#__PURE__*/React.createElement(ContactPage, {
        lang: lang,
        go: go
      });
      break;
    case "videos":
      page = /*#__PURE__*/React.createElement(VideosPage, {
        lang: lang,
        go: go
      });
      break;
    default:
      page = /*#__PURE__*/React.createElement(HomePage, {
        lang: lang,
        go: go
      });
  }
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Page · " + (main || "home")
  }, /*#__PURE__*/React.createElement("a", {
    className: "skip-link",
    href: "#main",
    onClick: e => scrollToId(e, "main")
  }, lang === "en" ? "Skip to content" : "跳至主要內容"), /*#__PURE__*/React.createElement(Nav, {
    route: route,
    go: go,
    lang: lang,
    setLang: setLang
  }), /*#__PURE__*/React.createElement("main", {
    id: "main",
    key: route
  }, page), /*#__PURE__*/React.createElement(Footer, {
    lang: lang,
    go: go
  }), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    title: "Language"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    value: tweaks.lang,
    onChange: v => setTweak("lang", v),
    options: [["en", "EN"], ["zh", "中文"]]
  })), /*#__PURE__*/React.createElement(TweakSection, {
    title: "Accent"
  }, /*#__PURE__*/React.createElement(TweakColor, {
    value: tweaks.accent,
    onChange: v => setTweak("accent", v),
    options: ACCENT_OPTIONS
  })), /*#__PURE__*/React.createElement(TweakSection, {
    title: "Density"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    value: tweaks.density,
    onChange: v => setTweak("density", v),
    options: [["spacious", "Spacious"], ["compact", "Compact"]]
  })), /*#__PURE__*/React.createElement(TweakSection, {
    title: "Type pairing"
  }, /*#__PURE__*/React.createElement(TweakSelect, {
    value: tweaks.fontPair,
    onChange: v => setTweak("fontPair", v),
    options: Object.entries(FONT_PAIRS).map(([k, v]) => [k, v.label])
  }))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
