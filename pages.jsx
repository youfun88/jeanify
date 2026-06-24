/* global React */
const { useState: uS3 } = React;
const { D: D3 } = window.JR_CORE;

// ---------- ABOUT ----------
function AboutPage({ lang, go }) {
  return (
    <div className="page-fade">
      <header className="page-head">
        <div className="container">
          <div className="breadcrumbs"><a href="#/home" onClick={(e)=>{e.preventDefault();go("home");}}>Home</a><span>/</span>About</div>
          <span className="eyebrow">{lang==="en"?"Meet Jean":"認識 Jean"}</span>
          <h1 style={{ marginTop: 20 }}>{lang==="en" ? <>Treating clients <em>like royalty</em>.</> : <>視客戶 <em>如皇室</em></>}</h1>
          <p className="lede">{lang==="en"?<>Realtor® Jean Riley · {D3.agent.license} · Centermac SD, Inc. · San Diego's Rising Star Real Estate Agent.</>:<>Realtor® Jean Riley · {D3.agent.license} · Centermac SD, Inc. · 聖地亞哥新星地產經紀。</>}</p>
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
                  : "買房或賣房可能令人不堪重負 —— 我的工作是消除這份壓力，讓我的客戶從第一次對話到最後一次簽字，全程感受到皇室般的禮遇。"}
              </p>
              <p style={{ color:'var(--ink-dim)', marginTop: 28, lineHeight: 1.8 }}>
                {lang==="en"
                  ? <>At <strong style={{color:'var(--ink)'}}>Centermac SD, Inc.</strong> — one of the most trusted real estate groups in California — we consult, negotiate, and handle every detail so our clients successfully buy or sell what is, for most of them, the largest asset they will ever own. That orientation guides everything I do.</>
                  : <>在 <strong style={{color:'var(--ink)'}}>Centermac SD, Inc.</strong> —— 加州最受信賴的房地產團隊之一 —— 我們提供諮詢、談判，並處理每一個細節，確保客戶成功買賣他們一生中最重要的資產。這一理念指引著我的每一項工作。</>}
              </p>
              <p style={{ color:'var(--ink-dim)', marginTop: 20, lineHeight: 1.8 }}>
                {lang==="en"
                  ? "I came to real estate out of a passion for helping others pursue their dreams with clarity and confidence. I speak English, Mandarin and Taiwanese — and I specialize in the buying and selling of single-family homes and commercial properties across San Diego."
                  : "我從事房地產，源於幫助他人以清晰與自信追尋夢想的熱忱。我精通英語、普通話與臺語 —— 專注於聖地亞哥地區獨立住宅與商業物業的買賣。"}
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

      {/* Centermac services */}
      <section className="section" style={{ background:'var(--bg-elev)' }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <span className="eyebrow">{lang==="en"?"The Centermac Practice":"Centermac 業務"}</span>
            <h2 style={{ marginTop: 16 }}>{lang==="en"?"A full-service real estate group.":"全方位房地產服務團隊"}</h2>
            <p className="lede" style={{ marginTop: 20, maxWidth: '60ch' }}>{lang==="en"?"Beyond traditional sales — Centermac SD offers a complete suite of services for owners, investors and aspiring agents.":"不止於傳統交易 —— Centermac SD 為業主、投資人與有志經紀人提供完整的服務體系。"}</p>
          </div>
          <div className="grid-3">
            {[
              { t: lang==="en"?"Real Estate Sales":"房產銷售", d: lang==="en"?"Single-family homes and commercial property — Jean's primary specialty.":"獨立住宅與商業地產 —— Jean 的核心專長。" },
              { t: lang==="en"?"Business Sales":"企業出售", d: lang==="en"?"Confidential business brokerage with valuation and buyer vetting.":"機密企業經紀服務，含估值與買方稽核。" },
              { t: lang==="en"?"Property Management":"物業管理", d: lang==="en"?"Tenant placement, maintenance coordination and financial reporting.":"租客匹配、維護協調與財務報告。" },
              { t: lang==="en"?"Investment Advisory":"投資諮詢", d: lang==="en"?"Portfolio strategy, 1031 exchange execution and replacement diligence.":"投資組合策略、1031 交換執行與替代房產盡調。" },
              { t: lang==="en"?"Legal Consultation":"法律諮詢", d: lang==="en"?"In-house consultation on real estate contracts, disclosures and disputes.":"內部房地產合同、披露與爭議諮詢。" },
              { t: lang==="en"?"Real Estate School":"地產學院", d: lang==="en"?"Licensing prep and career mentorship for the next generation of agents.":"執照培訓與新一代經紀人職業輔導。" },
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
              <h2 style={{ marginTop: 16 }}>{lang==="en"?"In their words":"客戶原聲"}</h2>
            </div>
          </div>
          <div className="test-grid">
            {D3.testimonials.map((tt, i) => (
              <div key={i} className="test-card">
                <div className="test-stars">★ ★ ★ ★ ★</div>
                <div className="test-quote">"{tt.quote}"</div>
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

// ---------- GUIDES INDEX ----------
function GuidesPage({ lang, go }) {
  return (
    <div className="page-fade">
      <header className="page-head">
        <div className="container">
          <div className="breadcrumbs"><a href="#/home" onClick={(e)=>{e.preventDefault();go("home");}}>Home</a><span>/</span>Guides</div>
          <span className="eyebrow">{lang==="en"?"Resources":"資源中心"}</span>
          <h1 style={{ marginTop: 20 }}>{lang==="en" ? <>Guides for the <em>committed</em>.</> : <>專業 <em>指南</em></>}</h1>
          <p className="lede">{lang==="en"?"Working playbooks for buyers, sellers and 1031 investors — the same frameworks I use with private clients, made public.":"為買家、賣家與 1031 投資者準備的實操指南 —— 我服務私人客戶所用的同一套方法論。"}</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {D3.guides.map(g => (
              <a key={g.num} className="guide-card" href={"#/guides/" + g.title.toLowerCase().split(" ")[1]} onClick={(e)=>{e.preventDefault(); go("guides/" + (g.num === "01" ? "buyer" : g.num === "02" ? "seller" : "1031"));}}>
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

      {/* Articles */}
      <section className="section" style={{ background:'var(--bg-elev)' }}>
        <div className="container">
          <div className="sect-head">
            <div className="sect-head-title">
              <span className="eyebrow">{lang==="en"?"Field Notes":"札記"}</span>
              <h2 style={{ marginTop: 16 }}>{lang==="en"?"Articles & briefings":"文章與簡報"}</h2>
            </div>
          </div>
          <div className="grid-4">
            {D3.articles.map(a => (
              <div key={a.id} className="article-card">
                <div
                  className={"article-img" + (a.image ? " has-image" : "")}
                  style={a.image ? { backgroundImage: "url(" + encodeURI(a.image) + ")", backgroundSize: "cover", backgroundPosition: "center" } : null}
                ></div>
                <div className="article-meta">{a.category} · {a.read}</div>
                <h3>{a.title}</h3>
                {a.credit && (
                  <div className="article-credit">
                    Photo by <a href={a.credit.url + "?utm_source=jean_riley&utm_medium=referral"} target="_blank" rel="noopener noreferrer">{a.credit.name}</a>{" "}
                    on <a href="https://unsplash.com/?utm_source=jean_riley&utm_medium=referral" target="_blank" rel="noopener noreferrer">Unsplash</a>
                  </div>
                )}
              </div>
            ))}
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
          <div className="breadcrumbs"><a href="#/guides" onClick={(e)=>{e.preventDefault();go("guides");}}>Guides</a><span>/</span>{meta.en}</div>
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
          <FAQList items={D3.faqs.slice(2, 5)} />
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

window.JR_PAGES = { AboutPage, GuidesPage, GuideDetail, ExchangePage, FAQList };
