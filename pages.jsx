/* global React */
const { useState: uS3, useEffect: uE3 } = React;
const { D: D3, scrollToId } = window.JR_CORE;

// ---------- ABOUT ----------
function AboutPage({ lang, go }) {
  return (
    <div className="page-fade">
      <header className="page-head">
        <div className="container">
          <div className="breadcrumbs"><a href="#/home" onClick={(e)=>{e.preventDefault();go("home");}}>Home</a><span>/</span>About</div>
          <span className="eyebrow">{lang==="en"?"Meet Jean":"認識 Jean"}</span>
          <h1 style={{ marginTop: 20 }}>{lang==="en" ? <>Treating clients <em>like royalty</em>.</> : <>視客戶 <em>為上賓</em></>}</h1>
          <p className="lede">{lang==="en"?<>Realtor® Jean Riley · {D3.agent.license} · Jeanify · San Diego's Rising Star Real Estate Agent.</>:<>Realtor® Jean Riley · {D3.agent.license} · Jeanify · 聖地亞哥新星地產經紀。</>}</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="bio-grid">
            <div className="bio-portrait" style={{backgroundImage:'url(assets/jean-portrait.jpg)', backgroundSize:'cover', backgroundPosition:'center top'}}></div>
            <div>
              <p className="lede" style={{ fontSize: 22, fontFamily: 'var(--font-display)', fontStyle:'italic', color:'var(--ink)' }}>
                {lang==="en"
                  ? "Buying or selling a home can be overwhelming — my work is to relieve that, and to make sure my clients feel like royalty from the first conversation through the last signature."
                  : "買房或賣房，常令人不知所措。我的工作就是化解這份壓力，讓客戶從第一次洽談到最後簽約，全程備受尊重與禮遇。"}
              </p>
              <p style={{ color:'var(--ink-dim)', marginTop: 28, lineHeight: 1.8 }}>
                {lang==="en"
                  ? <>At <strong style={{color:'var(--ink)'}}>Jeanify</strong> — one of the most trusted real estate groups in California — we consult, negotiate, and handle every detail so our clients successfully buy or sell what is, for most of them, the largest asset they will ever own. That orientation guides everything I do.</>
                  : <>在 <strong style={{color:'var(--ink)'}}>Jeanify</strong> —— 加州最受信賴的房地產團隊之一 —— 我們提供諮詢、談判，並處理每一個細節，確保客戶成功買賣他們一生中最重要的資產。這一理念指引著我的每一項工作。</>}
              </p>
              <p style={{ color:'var(--ink-dim)', marginTop: 20, lineHeight: 1.8 }}>
                {lang==="en"
                  ? "I came to real estate out of a passion for helping others pursue their dreams with clarity and confidence. I speak English, Mandarin and Taiwanese — and I specialize in the buying and selling of single-family homes and commercial properties across San Diego."
                  : "我從事房地產，源於幫助他人以清晰與自信追尋夢想的熱忱。我能以英語、國語與台語溝通 —— 專注於聖地亞哥地區獨立住宅與商業物業的買賣。"}
              </p>
              <div className="bio-credits">
                <div className="bio-credit"><div className="num" style={{fontSize:28, lineHeight:1.1}}>{lang==="en"?<>Rising<br/>Star</>:<>新星<br/>獎</>}</div><div className="lbl">{lang==="en"?"San Diego Award":"聖地亞哥獎項"}</div></div>
                <div className="bio-credit"><div className="num">3</div><div className="lbl">{lang==="en"?"Languages Spoken":"精通語言"}</div></div>
                <div className="bio-credit"><div className="num">SF + CRE</div><div className="lbl">{lang==="en"?"Specialty":"專長領域"}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The name — what "-ify" means and why the brand is a verb */}
      <section className="section" style={{ background:'var(--bg-elev)' }}>
        <div className="container-tight brand-story">
          <img className="brand-story-mark" src="uploads/jeanify-logo-brass.png" alt="Jeanify" />
          <span className="eyebrow">{lang==="en"?"The Name":"品牌命名"}</span>
          <h2 style={{ marginTop: 16 }}>
            {lang==="en"
              ? <>Jeanify is a <em>verb</em>, not a noun.</>
              : <>Jeanify 是一個 <em>動詞</em></>}
          </h2>

          {lang==="en" ? (
            <>
              <p className="brand-story-lede">Every other name on a For Sale sign is a noun. Ours is something you do.</p>
              <p>
                The suffix <em>-ify</em> means to bring into a state — to make something so.
                <strong> Clarify</strong>, to make clear. <strong>Simplify</strong>, to make simple.
                It is the grammar of transformation, and it never describes a moment. It always
                describes a passage from one condition to another.
              </p>
              <p>
                That is the whole idea. A house does not become a home at the closing table. It becomes
                one across every conversation, every walkthrough and every negotiation that leads there.
                <strong> Jeanify</strong> is the name for that passage — the work of turning what you are
                looking for into where you actually live.
              </p>
              <p>
                Through Jean, a listing becomes a shortlist. A shortlist becomes an offer. An offer
                becomes keys in your hand. Not a transaction you have to survive, but a process someone
                walks you through — which is precisely why the name ends the way it does.
              </p>
            </>
          ) : (
            <>
              <p className="brand-story-lede">別人的招牌上是名詞，我們的是一件正在進行的事。</p>
              <p>
                英文後綴 <em>-ify</em> 意為「使之成為」——<strong>clarify</strong> 是使之清晰，
                <strong>simplify</strong> 是使之簡單。它描述的從來不是某個瞬間，
                而是從一種狀態通往另一種狀態的過程。
              </p>
              <p>
                這正是品牌的核心。房子不是在簽約桌上成為家的，而是在通往那一刻的每一次對話、
                每一次看屋、每一次議價之中，一點一點成為家的。<strong>Jeanify</strong>，
                就是這段路程的名字——把您所尋找的，變成您真正居住的地方。
              </p>
              <p>
                透過 Jean，一則房源成為候選，候選成為出價，出價成為您手中的鑰匙。
                不是一場必須熬過去的交易，而是一段有人全程陪伴引導的過程——
                這正是這個名字如此結尾的原因。
              </p>
            </>
          )}

          <div className="brand-story-rule"></div>
          <p className="brand-story-kicker">
            {lang==="en"
              ? <>house <span>→</span> shortlist <span>→</span> offer <span>→</span> <em>home</em></>
              : <>房源 <span>→</span> 候選 <span>→</span> 出價 <span>→</span> <em>家</em></>}
          </p>
        </div>
      </section>

      {/* Pull-quote / mission */}
      <section className="section-sm">
        <div className="container-tight" style={{textAlign:'center', padding:'48px 32px'}}>
          <span className="eyebrow no-rule">{lang==="en"?"Our Mission":"我們的使命"}</span>
          <p style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:'clamp(28px, 3.4vw, 44px)', lineHeight:1.35, color:'var(--ink)', margin:'24px auto 0', maxWidth:'24ch'}}>
            "{lang==="en"
              ? <>Our mission is for you to be so <em style={{color:'var(--brass)'}}>outrageously happy</em> with your buying or selling experience that you naturally and gladly recommend us to friendly people who would also love our service.</>
              : <>讓您對買賣體驗 <em style={{color:'var(--brass)'}}>滿意至極</em>，自然而然樂意將我們推薦給同樣會欣賞這份服務的友人。</>}"
          </p>
          <div style={{marginTop:32, fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:24, color:'var(--brass)'}}>— Jean Riley</div>
        </div>
      </section>

      {/* Jeanify services */}
      <section className="section" style={{ background:'var(--bg-elev)' }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <span className="eyebrow">{lang==="en"?"The Jeanify Practice":"Jeanify 業務"}</span>
            <h2 style={{ marginTop: 16 }}>{lang==="en"?"A full-service real estate group.":"全方位房地產服務團隊"}</h2>
            <p className="lede" style={{ marginTop: 20, maxWidth: '60ch' }}>{lang==="en"?"Beyond traditional sales — Jeanify offers a complete suite of services for owners, investors and aspiring agents.":"不只是傳統交易 —— Jeanify 為業主、投資人與有志經紀人提供完整的服務體系。"}</p>
          </div>
          <div className="grid-4">
            {[
              { t: lang==="en"?"Real Estate Sales":"房產銷售", d: lang==="en"?"Single-family homes and commercial property — Jean's primary specialty.":"獨立住宅與商業地產 —— Jean 的核心專長。" },
              { t: lang==="en"?"Business Sales":"企業出售", d: lang==="en"?"Confidential business brokerage with valuation and buyer vetting.":"機密企業經紀服務，含估值與買方稽核。" },
              { t: lang==="en"?"Property Management":"物業管理", d: lang==="en"?"Tenant placement, maintenance coordination and financial reporting.":"租客匹配、維護協調與財務報告。" },
              { t: lang==="en"?"Investment Advisory":"投資諮詢", d: lang==="en"?"Portfolio strategy, 1031 exchange execution and replacement diligence.":"投資組合策略、1031 交換執行與替代房產盡調。" },
            ].map((s, i) => (
              <div key={i} style={{padding:32, border:'1px solid var(--line)', background:'var(--bg-deep)'}}>
                <div style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:32, color:'var(--brass)', marginBottom:8}}>{String(i+1).padStart(2,'0')}</div>
                <h4 style={{marginBottom:12}}>{s.t}</h4>
                <p style={{color:'var(--ink-dim)', fontSize:14, lineHeight:1.7}}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background:'var(--bg-elev)' }}>
        <div className="container">
          <div className="sect-head">
            <div className="sect-head-title">
              <span className="eyebrow">{lang==="en"?"How We Work":"合作方式"}</span>
              <h2 style={{ marginTop: 16 }}>{lang==="en"?"Four phases, one steady hand.":"四個階段，全程穩健"}</h2>
            </div>
          </div>
          <div className="process">
            {D3.process.map(p => (
              <div key={p.n} className="process-step">
                <div className="dot">{p.n}</div>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All testimonials */}
      <section className="section">
        <div className="container">
          <div className="sect-head">
            <div className="sect-head-title">
              <span className="eyebrow">{lang==="en"?"Client Voices":"客戶心聲"}</span>
              <h2 style={{ marginTop: 16 }}>{lang==="en"?"Client Testimonials — In their words":"客戶推薦 —— 客戶原聲"}</h2>
            </div>
          </div>
          <div className="test-grid">
            {D3.testimonials.map((tt, i) => (
              <div key={i} className="test-card">
                <div className="test-stars">★ ★ ★ ★ ★</div>
                <div className="test-quote">"{lang === "zh" && tt.quoteZh ? tt.quoteZh : tt.quote}"</div>
                <div className="test-author">
                  <div className="test-avatar">{tt.initials}</div>
                  <div>
                    <div className="test-name">{tt.name}</div>
                    <div className="test-meta">{tt.area}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const ARTICLES = window.JR_ARTICLES || [];
const bySlug = (s) => ARTICLES.find(a => a.slug === s);

// Long-form dates, rendered without a timezone shift (the ISO string is a plain date).
function articleDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

// One article card — used on the index and in the "related" strip.
function ArticleCard({ a, go }) {
  return (
    <a className="article-card" href={"#/articles/" + a.slug}
       onClick={(e) => { e.preventDefault(); go("articles/" + a.slug); }}>
      <div
        className={"article-img" + (a.image ? " has-image" : "")}
        style={a.image ? { backgroundImage: "url(" + encodeURI(a.image) + ")", backgroundSize: "cover", backgroundPosition: "center" } : null}
      ></div>
      <div className="article-meta">{a.category} · {a.read}</div>
      <h3>{a.title}</h3>
      <p className="article-dek">{a.dek}</p>
      <span className="btn-text arrow-right article-more">Read</span>
    </a>
  );
}

// Download card for the seasonal PDF market guides.
function MarketGuideCard({ g, lang }) {
  return (
    <div className="mg-card">
      <div className="mg-head">
        <span className="eyebrow no-rule">{lang==="en" ? g.audience : g.audienceZh}</span>
        <span className="mg-edition">{lang==="en" ? g.edition : g.editionZh}</span>
      </div>
      <h3>{lang==="en" ? g.title : g.titleZh}</h3>
      <p className="mg-desc">{lang==="en" ? g.desc : g.descZh}</p>
      <ul className="mg-contents">
        {g.contents.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
      <a className="btn btn-primary arrow-right mg-btn" href={g.file} target="_blank" rel="noopener noreferrer">
        {lang==="en" ? "Download PDF" : "下載 PDF"}
      </a>
      <div className="mg-meta">{g.pages} {lang==="en"?"pages":"頁"} · PDF · {g.size}</div>
    </div>
  );
}

function MarketGuidesSection({ lang, only }) {
  const guides = only ? D3.marketGuides.filter(g => g.id === only) : D3.marketGuides;
  if (!guides.length) return null;
  return (
    <div className="container">
      <div className="sect-head">
        <div className="sect-head-title">
          <span className="eyebrow">{lang==="en"?"Seasonal Briefings":"季度簡報"}</span>
          <h2 style={{ marginTop: 16 }}>{lang==="en"?"Market guides, updated each season":"每季更新的市場指南"}</h2>
          {!only && (
            <p className="lede" style={{ marginTop: 20, maxWidth: '60ch' }}>
              {lang==="en"
                ? "Twenty-page briefings on where the market actually stands this quarter — rates, inventory, equity and pricing, with the charts behind each claim. Free, no email required."
                : "二十頁的季度市場簡報 —— 利率、庫存、房屋淨值與定價，每項論點皆附圖表佐證。免費下載，無需填寫電郵。"}
            </p>
          )}
        </div>
      </div>
      <div className={only ? "grid-1" : "grid-2"}>
        {guides.map(g => <MarketGuideCard key={g.id} g={g} lang={lang} />)}
      </div>
    </div>
  );
}

// ---------- ARTICLES INDEX ----------
function ArticlesPage({ lang, go }) {
  return (
    <div className="page-fade">
      <header className="page-head">
        <div className="container">
          <div className="breadcrumbs"><a href="#/home" onClick={(e)=>{e.preventDefault();go("home");}}>Home</a><span>/</span>Articles</div>
          <span className="eyebrow">{lang==="en"?"Resources":"資源中心"}</span>
          <h1 style={{ marginTop: 20 }}>{lang==="en" ? <>Written for the <em>committed</em>.</> : <>專業 <em>專欄</em></>}</h1>
          <p className="lede">{lang==="en"?"Working playbooks and field notes for buyers, sellers and 1031 investors — the same frameworks I use with private clients, made public.":"為買家、賣家與 1031 投資者準備的實操指南與市場札記 —— 我服務私人客戶所用的同一套方法論。"}</p>
        </div>
      </header>

      {/* The three long-form guides stay featured at the top */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {D3.guides.map(g => (
              <a key={g.num} className="guide-card" href={"#/guides/" + (g.num === "01" ? "buyer" : g.num === "02" ? "seller" : "1031")} onClick={(e)=>{e.preventDefault(); go("guides/" + (g.num === "01" ? "buyer" : g.num === "02" ? "seller" : "1031"));}}>
                <div className="num">{g.num}</div>
                <span className="eyebrow no-rule">{lang==="en"?"Guide":"指南"}</span>
                <h3>{g.title}</h3>
                <p className="desc">{g.desc}</p>
                <span className="btn-text arrow-right" style={{ marginTop:'auto' }}>{g.cta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable seasonal PDF guides */}
      <section className="section" style={{ background:'var(--bg-elev)' }}>
        <MarketGuidesSection lang={lang} />
      </section>

      {/* Articles */}
      <section className="section">
        <div className="container">
          <div className="sect-head">
            <div className="sect-head-title">
              <span className="eyebrow">{lang==="en"?"Field Notes":"札記"}</span>
              <h2 style={{ marginTop: 16 }}>{lang==="en"?"Articles & briefings":"文章與簡報"}</h2>
            </div>
          </div>
          <div className="grid-3">
            {ARTICLES.map(a => <ArticleCard key={a.slug} a={a} go={go} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------- ARTICLE DETAIL ----------
// Mirrors tools/build-articles.mjs, which renders the same blocks to static HTML.
// If you add a block type, add it in both places.
function ArticleBlock({ b }) {
  switch (b.t) {
    case "h":
      return <h2 className="art-h" id={slugifyHeading(b.x)}>{b.x}</h2>;
    case "ul":
      return <ul className="art-list">{b.x.map((li, i) => <li key={i}>{li}</li>)}</ul>;
    case "ol":
      return <ol className="art-list art-list-num">{b.x.map((li, i) => <li key={i}>{li}</li>)}</ol>;
    case "callout":
      return <aside className="art-callout">{b.x}</aside>;
    case "table":
      return (
        <div className="art-table-wrap">
          <table className="art-table">
            <thead><tr>{b.head.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
            <tbody>{b.rows.map((r, i) => <tr key={i}>{r.map((c, j) => j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}>{c}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
    default:
      return <p className="art-p">{b.x}</p>;
  }
}

function slugifyHeading(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function ArticleDetail({ slug, lang, go }) {
  const a = bySlug(slug);
  uE3(() => { window.scrollTo(0, 0); }, [slug]);

  if (!a) {
    return (
      <div className="page-fade">
        <header className="page-head">
          <div className="container">
            <div className="breadcrumbs"><a href="#/articles" onClick={(e)=>{e.preventDefault();go("articles");}}>Articles</a></div>
            <h1 style={{ marginTop: 20 }}>Article not found</h1>
            <p className="lede">That article may have been renamed. Everything currently published is on the articles page.</p>
            <div style={{ marginTop: 24 }}>
              <a className="btn btn-primary arrow-right" href="#/articles" onClick={(e)=>{e.preventDefault();go("articles");}}>All articles</a>
            </div>
          </div>
        </header>
      </div>
    );
  }

  const headings = a.sections.filter(s => s.t === "h");
  const related = (a.related || []).map(bySlug).filter(Boolean);

  return (
    <div className="page-fade">
      <header className="page-head">
        <div className="container-tight">
          <div className="breadcrumbs">
            <a href="#/home" onClick={(e)=>{e.preventDefault();go("home");}}>Home</a><span>/</span>
            <a href="#/articles" onClick={(e)=>{e.preventDefault();go("articles");}}>Articles</a><span>/</span>{a.category}
          </div>
          <span className="eyebrow">{a.category}</span>
          <h1 style={{ marginTop: 20 }}>{a.title}</h1>
          <p className="lede">{a.dek}</p>
          <div className="art-byline">
            <span>By <strong>Jean Riley</strong> · {D3.agent.license}</span>
            <span>{articleDate(a.date)}{a.updated && a.updated !== a.date ? " · Updated " + articleDate(a.updated) : ""}</span>
            <span>{a.read} read</span>
          </div>
        </div>
      </header>

      <article className="section">
        <div className="container-tight">
          {/* Quick answer — the block an AI overview is most likely to lift */}
          <div className="art-answer">
            <span className="eyebrow no-rule">{lang==="en"?"The short answer":"重點摘要"}</span>
            <p>{a.answer}</p>
          </div>

          {headings.length > 2 && (
            <nav className="art-toc" aria-label="On this page">
              <span className="eyebrow no-rule">{lang==="en"?"On this page":"本頁內容"}</span>
              <ol>
                {headings.map((h, i) => (
                  <li key={i}>
                    <a href={"#" + slugifyHeading(h.x)}
                       onClick={(e) => scrollToId(e, slugifyHeading(h.x))}>{h.x}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="art-body">
            {a.sections.map((b, i) => <ArticleBlock key={i} b={b} />)}
          </div>

          {a.credit && (
            <div className="article-credit" style={{ marginTop: 32 }}>
              Photo by <a href={a.credit.url + "?utm_source=jean_riley&utm_medium=referral"} target="_blank" rel="noopener noreferrer">{a.credit.name}</a>{" "}
              on <a href="https://unsplash.com/?utm_source=jean_riley&utm_medium=referral" target="_blank" rel="noopener noreferrer">Unsplash</a>
            </div>
          )}
        </div>
      </article>

      {a.faqs && a.faqs.length > 0 && (
        <section className="section" style={{ background:'var(--bg-elev)' }}>
          <div className="container">
            <div className="sect-head">
              <div className="sect-head-title">
                <span className="eyebrow">FAQ</span>
                <h2 style={{ marginTop: 16 }}>{lang==="en"?"Frequently asked":"常見問題"}</h2>
              </div>
            </div>
            <FAQList items={a.faqs} />
          </div>
        </section>
      )}

      {a.sources && a.sources.length > 0 && (
        <section className="section-sm">
          <div className="container-tight">
            <span className="eyebrow">{lang==="en"?"Sources":"資料來源"}</span>
            <ul className="art-sources">
              {a.sources.map((s, i) => (
                <li key={i}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a></li>
              ))}
            </ul>
            <p className="art-disclaimer">
              {lang==="en"
                ? "Market figures are current as of the date shown and change frequently. Nothing here is tax or legal advice — for your specific situation, consult a CPA or attorney."
                : "文中市場數據截至標示日期，並會持續變動。本文不構成稅務或法律建議，請就個人情況諮詢會計師或律師。"}
            </p>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="sect-head">
              <div className="sect-head-title">
                <span className="eyebrow">{lang==="en"?"Keep reading":"延伸閱讀"}</span>
                <h2 style={{ marginTop: 16 }}>{lang==="en"?"Related articles":"相關文章"}</h2>
              </div>
            </div>
            <div className="grid-3">
              {related.map(r => <ArticleCard key={r.slug} a={r} go={go} />)}
            </div>
          </div>
        </section>
      )}

      <section className="section-sm">
        <div className="container-tight" style={{ padding:'48px 32px', textAlign:'center', border:'1px solid var(--line)', background:'var(--bg-elev)' }}>
          <span className="eyebrow no-rule">{lang==="en"?"Next Step":"下一步"}</span>
          <h2 style={{ margin:'16px 0 24px' }}>{lang==="en"?"Questions about your own situation?":"想討論您的個人情況？"}</h2>
          <a className="btn btn-primary arrow-right" href="#/contact" onClick={(e)=>{e.preventDefault();go("contact");}}>{lang==="en"?"Schedule a Consultation":"預約諮詢"}</a>
        </div>
      </section>
    </div>
  );
}

// ---------- FAQ ----------
const FAQ_GROUPS = [
  { id: "working", en: "Working with Jean", zh: "與 Jean 合作" },
  { id: "buying",  en: "Buying",            zh: "購屋" },
  { id: "selling", en: "Selling",           zh: "售屋" },
  { id: "investing", en: "Investing & 1031", zh: "投資與 1031" },
];

function FAQPage({ lang, go }) {
  return (
    <div className="page-fade">
      <header className="page-head">
        <div className="container">
          <div className="breadcrumbs"><a href="#/home" onClick={(e)=>{e.preventDefault();go("home");}}>Home</a><span>/</span>FAQ</div>
          <span className="eyebrow">{lang==="en"?"Frequently Asked":"常見問題"}</span>
          <h1 style={{ marginTop: 20 }}>{lang==="en" ? <>The questions I get <em>most</em>.</> : <>最常被 <em>問到</em> 的問題</>}</h1>
          <p className="lede">{lang==="en"?"Straight answers on commission, closing costs, down payments, insurance, Mello-Roos, Prop 19, 1031 exchanges and buying from overseas. If yours isn't here, call me — I'd rather answer it directly.":"關於佣金、過戶費用、頭期款、房屋保險、Mello-Roos、Prop 19、1031 交換與海外購屋的直接解答。若未涵蓋您的問題，歡迎直接來電。"}</p>
        </div>
      </header>

      {FAQ_GROUPS.map((grp, gi) => {
        const items = D3.faqs.filter(f => f.g === grp.id);
        if (!items.length) return null;
        return (
          <section key={grp.id} className="section" style={gi % 2 ? { background:'var(--bg-elev)' } : null}>
            <div className="container">
              <div className="sect-head">
                <div className="sect-head-title">
                  <span className="eyebrow">{String(gi + 1).padStart(2, "0")}</span>
                  <h2 style={{ marginTop: 16 }}>{lang==="en" ? grp.en : grp.zh}</h2>
                </div>
              </div>
              <FAQList items={items} />
            </div>
          </section>
        );
      })}

      <section className="section-sm">
        <div className="container-tight" style={{ padding:'48px 32px', textAlign:'center', border:'1px solid var(--line)', background:'var(--bg-elev)' }}>
          <span className="eyebrow no-rule">{lang==="en"?"Still unanswered":"仍有疑問"}</span>
          <h2 style={{ margin:'16px 0 24px' }}>{lang==="en"?"Ask me directly.":"歡迎直接詢問"}</h2>
          <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
            <a className="btn btn-primary arrow-right" href="#/contact" onClick={(e)=>{e.preventDefault();go("contact");}}>{lang==="en"?"Schedule a Consultation":"預約諮詢"}</a>
            <a className="btn btn-ghost" href={"tel:" + D3.agent.phone.replace(/[^0-9+]/g, "")}>{D3.agent.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------- GUIDE DETAIL (buyer / seller / 1031) ----------
function GuideDetail({ kind, lang, go }) {
  const titles = {
    buyer: { en: "The Buyer's Guide", zh: "買家指南", sub: { en: "From pre-approval to keys in hand.", zh: "從預先批貸到拿到鑰匙" } },
    seller: { en: "The Seller's Guide", zh: "賣家指南", sub: { en: "Pricing, preparation, marketing and negotiation.", zh: "定價、準備、營銷與談判" } },
    "1031": { en: "1031 Exchange Primer", zh: "1031 交換入門", sub: { en: "Identification windows and replacement strategy.", zh: "識別期與替代房產策略" } },
  };
  const meta = titles[kind] || titles.buyer;
  const steps = {
    buyer: [
      ["Pre-approval", "Lender introductions, qualification beyond rate-shopping, and writing your buying envelope."],
      ["Discovery", "What you actually want vs. what you think you want — refined over 2-3 conversations."],
      ["Search", "Curated MLS feeds, off-market introductions, and weekend tour itineraries."],
      ["Diligence", "School data, micro-climate, HOA review, comp set."],
      ["Offer", "Pricing, terms, and the contingency architecture that wins without overpaying."],
      ["Inspection", "Roof, foundation, sewer, environmental — with vetted San Diego specialists."],
      ["Appraisal", "Lender coordination and gap strategy if it comes in low."],
      ["Close", "Walk-through, escrow handoff, and a key delivery worth photographing."],
    ],
    seller: [
      ["Valuation", "A written CMA — three pricing scenarios with timeline implications for each."],
      ["Preparation", "Touch-up scope, staging plan, and which improvements actually return their cost."],
      ["Photography", "Magazine-grade architectural photography, drone, twilight, and 3D walkthroughs."],
      ["Marketing", "MLS, syndication, broker preview, private mailers, and digital campaign."],
      ["Showings", "Open houses calibrated to your neighborhood, plus private appointments by request."],
      ["Negotiation", "Offer review, counter strategy, and contingency removal pacing."],
      ["Escrow", "Inspection responses, appraisal management, and pre-close coordination."],
      ["Hand-off", "Final walkthrough, key handover, and post-close follow-up."],
    ],
    "1031": [
      ["Pre-sale planning", "Identify investment thesis and replacement universe before listing the relinquished property."],
      ["Qualified intermediary", "Engage a QI before close. I work with two on standby."],
      ["Sale of relinquished", "Standard listing — but with strict escrow choreography to preserve exchange status."],
      ["Day 0", "Funds wired to QI. The 45/180-day clocks begin."],
      ["Identification", "Three-property rule (or 200% rule) — written identification by Day 45."],
      ["Replacement diligence", "Inspections, financing, partnership structure if applicable."],
      ["Replacement close", "Within 180 days. Boot calculations and reporting walk-through."],
      ["Filing", "Coordinate with your CPA on Form 8824."],
    ],
  }[kind];

  return (
    <div className="page-fade">
      <header className="page-head">
        <div className="container">
          <div className="breadcrumbs"><a href="#/articles" onClick={(e)=>{e.preventDefault();go("articles");}}>Articles</a><span>/</span>{meta.en}</div>
          <span className="eyebrow">{lang==="en"?"Guide":"指南"}</span>
          <h1 style={{ marginTop: 20 }}><em>{lang==="en" ? meta.en : meta.zh}</em></h1>
          <p className="lede">{lang==="en" ? meta.sub.en : meta.sub.zh}</p>
        </div>
      </header>
      <section className="section">
        <div className="container-tight">
          <div style={{ display:'flex', flexDirection:'column', gap: 4 }}>
            {steps.map(([title, desc], i) => (
              <div key={i} style={{ display:'grid', gridTemplateColumns:'80px 1fr', gap: 32, padding:'32px 0', borderBottom:'1px solid var(--line)' }}>
                <div style={{ fontFamily:'var(--font-display)', fontSize: 36, fontStyle:'italic', color:'var(--brass)' }}>{String(i+1).padStart(2, "0")}</div>
                <div>
                  <h3 style={{ fontSize: 28, marginBottom: 8 }}>{title}</h3>
                  <p style={{ color:'var(--ink-dim)', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 64, padding: 48, background:'var(--bg-elev)', border:'1px solid var(--line)', textAlign:'center' }}>
            <span className="eyebrow no-rule">{lang==="en"?"Next Step":"下一步"}</span>
            <h2 style={{ margin:'16px 0 24px' }}>{lang==="en"?"Ready when you are.":"隨時為您服務"}</h2>
            <a className="btn btn-primary arrow-right" href="#/contact" onClick={(e)=>{e.preventDefault();go("contact");}}>{lang==="en"?"Schedule a Consultation":"預約諮詢"}</a>
          </div>
        </div>
      </section>

      {/* The matching seasonal PDF, where one exists for this guide */}
      {(kind === "buyer" || kind === "seller") && (
        <section className="section" style={{ background:'var(--bg-elev)' }}>
          <MarketGuidesSection lang={lang} only={kind} />
        </section>
      )}
    </div>
  );
}

// ---------- 1031 EXCHANGE landing ----------
function ExchangePage({ lang, go }) {
  return (
    <div className="page-fade">
      <header className="page-head">
        <div className="container">
          <div className="breadcrumbs"><a href="#/home" onClick={(e)=>{e.preventDefault();go("home");}}>Home</a><span>/</span>1031 Exchange</div>
          <span className="eyebrow">{lang==="en"?"Investor Specialty":"投資專長"}</span>
          <h1 style={{ marginTop: 20 }}>{lang==="en" ? <>The <em>1031</em> Exchange.</> : <><em>1031</em> 交換</>}</h1>
          <p className="lede">{lang==="en"?"Defer capital gains on investment property — provided the calendar, paperwork and intermediary structure are exact. I handle each.":"投資性房產的資本利得遞延 —— 前提是時間、檔案與中介結構均精確無誤。這些細節，由我把控。"}</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {[
              { n: "45", l: lang==="en"?"Days to identify":"天識別期", d: lang==="en"?"From the close of your relinquished property — written identification of replacement candidates.":"自交割之日起 —— 須以書面形式識別替代房產候選。" },
              { n: "180", l: lang==="en"?"Days to close":"天完成交割", d: lang==="en"?"From the same close date — the replacement transaction must fund.":"自同一交割日起 —— 替代交易必須完成放款。" },
              { n: "200%", l: lang==="en"?"Identification cap":"識別上限", d: lang==="en"?"Combined value of identified properties cannot exceed 200% of relinquished value (unless 95% rule).":"識別房產合計價值不超過原房產 200%（除非適用 95% 規則）。" },
            ].map(c => (
              <div key={c.n} style={{ padding: 40, border:'1px solid var(--line)', background:'var(--bg-elev)' }}>
                <div style={{ fontFamily:'var(--font-display)', fontSize: 96, color:'var(--brass)', lineHeight: 1, marginBottom: 8 }}>{c.n}</div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize: 11, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--ink-dim)', marginBottom: 16 }}>{c.l}</div>
                <p style={{ color:'var(--ink-dim)', lineHeight: 1.7 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ background:'var(--bg-elev)' }}>
        <div className="container">
          <div className="sect-head">
            <div className="sect-head-title">
              <span className="eyebrow">FAQ</span>
              <h2 style={{ marginTop: 16 }}>{lang==="en"?"Frequently asked":"常見問題"}</h2>
            </div>
          </div>
          <FAQList items={D3.faqs.filter(f => f.g === "investing")} />
        </div>
      </section>
    </div>
  );
}

function FAQList({ items }) {
  const [open, setOpen] = uS3(0);
  return (
    <div className="container-tight" style={{ padding: 0 }}>
      {items.map((f, i) => (
        <div key={i} className={"faq-item" + (open === i ? " open" : "")} onClick={() => setOpen(open === i ? -1 : i)}>
          <div className="faq-q"><span>{f.q}</span><span className="toggle">+</span></div>
          <div className="faq-a">{f.a}</div>
        </div>
      ))}
    </div>
  );
}

window.JR_PAGES = { AboutPage, ArticlesPage, ArticleDetail, ArticleCard, GuideDetail, ExchangePage, FAQPage, FAQList };
