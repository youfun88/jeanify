/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakSelect */
const { useHashRoute, TWEAK_DEFAULTS, FONT_PAIRS, ACCENT_OPTIONS, Nav, Footer } = window.JR_CORE;
const { HomePage } = window.JR_HOME;
const { ListingsPage, ListingDetail } = window.JR_LISTINGS;
const { AboutPage, ArticlesPage, ArticleDetail, GuideDetail, ExchangePage, FAQPage } = window.JR_PAGES;
const { EstimatorPage, ContactPage, VideosPage } = window.JR_FORMS;

function App() {
  const [route, go] = useHashRoute();
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLangLocal] = React.useState(tweaks.lang || "en");
  React.useEffect(() => { setLangLocal(tweaks.lang); }, [tweaks.lang]);
  const setLang = (l) => { setLangLocal(l); setTweak("lang", l); };

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
      <a className="skip-link" href="#main">{lang === "en" ? "Skip to content" : "跳至主要內容"}</a>
      <Nav route={route} go={go} lang={lang} setLang={setLang} />
      <main id="main" key={route}>{page}</main>
      <Footer lang={lang} go={go} />
      <TweaksPanel title="Tweaks">
        <TweakSection title="Language">
          <TweakRadio value={tweaks.lang} onChange={(v) => setTweak("lang", v)} options={[["en", "EN"], ["zh", "中文"]]} />
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

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
