/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakSelect */
const { useRoute, pageMeta, LANG_KEY, TWEAK_DEFAULTS, FONT_PAIRS, ACCENT_OPTIONS, Nav, Footer, scrollToId } = window.JR_CORE;
const { HomePage } = window.JR_HOME;
const { ListingsPage, ListingDetail } = window.JR_LISTINGS;
const { AboutPage, ArticlesPage, ArticleDetail, GuideDetail, ExchangePage, FAQPage } = window.JR_PAGES;
const { EstimatorPage, ContactPage, VideosPage } = window.JR_FORMS;

// The page's language comes from its URL (/zh/… is Chinese), so the prerendered HTML
// and the app always agree. The toggle moves to the other language's URL and also
// records the choice, which tools/build-pages.mjs uses to send old #/hash links from
// a Chinese reader to the Chinese page.
//
// `initial` ({ route, lang }) is passed only by the prerender (tools/build-pages.mjs).
function App({ initial }) {
  const [{ route, lang }, go] = useRoute(initial);
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const setLang = (l) => {
    try { localStorage.setItem(LANG_KEY, l); } catch { /* storage unavailable */ }
    if (l !== lang) go(route, l);
  };

  // In-app navigation doesn't load a new document, so keep the tab title in step.
  const first = React.useRef(true);
  React.useEffect(() => {
    if (first.current) { first.current = false; return; }
    document.title = pageMeta(route, lang).title;
  }, [route, lang]);

  // Keep <html lang> in step so screen readers pronounce the page correctly and
  // search engines see the right language.
  React.useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  }, [lang]);

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
    case "listings":  page = <ListingsPage lang={lang} go={go} sub={sub} />; break;
    case "listing":   page = <ListingDetail id={sub} lang={lang} go={go} />; break;
    case "about":     page = <AboutPage lang={lang} go={go} />; break;
    case "articles":  page = sub ? <ArticleDetail slug={sub} lang={lang} go={go} /> : <ArticlesPage lang={lang} go={go} />; break;
    // #/guides is the old index URL — keep it resolving to the articles page so
    // existing links and bookmarks don't 404. #/guides/<kind> still opens the guide.
    case "guides":    page = sub ? <GuideDetail kind={sub} lang={lang} go={go} /> : <ArticlesPage lang={lang} go={go} />; break;
    case "faq":       page = <FAQPage lang={lang} go={go} />; break;
    case "exchange":  page = <ExchangePage lang={lang} go={go} />; break;
    case "estimator": page = <EstimatorPage lang={lang} go={go} />; break;
    case "contact":   page = <ContactPage lang={lang} go={go} />; break;
    case "videos":    page = <VideosPage lang={lang} go={go} />; break;
    default:          page = <HomePage lang={lang} go={go} />;
  }

  return (
    <div data-screen-label={"Page · " + (main || "home")}>
      <a className="skip-link" href={go.link(route).href + "#main"} onClick={(e) => scrollToId(e, "main")}>
        {lang === "en" ? "Skip to content" : "跳至主要內容"}
      </a>
      <Nav route={route} go={go} lang={lang} setLang={setLang} />
      <main id="main" key={route}>{page}</main>
      <Footer lang={lang} go={go} />
      <TweaksPanel title="Tweaks">
        <TweakSection title="Language">
          <TweakRadio value={tweaks.lang} onChange={(v) => { setTweak("lang", v); setLang(v); }} options={[["en", "EN"], ["zh", "中文"]]} />
        </TweakSection>
        <TweakSection title="Accent">
          <TweakColor value={tweaks.accent} onChange={(v) => setTweak("accent", v)} options={ACCENT_OPTIONS} />
        </TweakSection>
        <TweakSection title="Density">
          <TweakRadio value={tweaks.density} onChange={(v) => setTweak("density", v)} options={[["spacious", "Spacious"], ["compact", "Compact"]]} />
        </TweakSection>
        <TweakSection title="Type pairing">
          <TweakSelect value={tweaks.fontPair} onChange={(v) => setTweak("fontPair", v)} options={Object.entries(FONT_PAIRS).map(([k, v]) => [k, v.label])} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

window.JR_APP = App;

// Pages are prerendered (tools/build-pages.mjs), so React adopts the existing markup
// rather than drawing it again. An empty root (the v2 review build) renders fresh.
if (typeof document !== "undefined") {
  const el = document.getElementById("root");
  if (el.firstElementChild) ReactDOM.hydrateRoot(el, <App />);
  else ReactDOM.createRoot(el).render(<App />);
}
