/* global React */
const { useState: uS, useEffect: uE } = React;
const { D, ListingCard, VideoCard } = window.JR_CORE;

// ---------- HOME ----------
function HomePage({ lang, go }) {
  const t = D.i18n[lang];
  const sold = D.listings.filter(l => l.status === "sold").slice(0, 3);
  const songs = D.videos.filter(v => v.group === "song");
  const reel = D.videos.filter(v => v.group !== "song").slice(0, 5);
  const articles = (window.JR_ARTICLES || []).slice(0, 3);
  // pages.jsx loads after this file, so resolve at render time rather than import time.
  const { ArticleCard } = window.JR_PAGES;

  return (
    <div className="page-fade">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-credit">
          Photo by <a href="https://unsplash.com/@chrismags0520?utm_source=jean_riley&utm_medium=referral" target="_blank" rel="noopener noreferrer">Christopher Magat</a>{" "}
          on <a href="https://unsplash.com/?utm_source=jean_riley&utm_medium=referral" target="_blank" rel="noopener noreferrer">Unsplash</a>
        </div>
        <div className="container hero-content">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="hero-headline" style={{ marginTop: 24 }}>
            {t.hero.h1[0]} <em>{t.hero.h1[1]}</em>
          </h1>
          <div className="hero-meta">
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-actions">
              <a className="btn btn-primary arrow-right" href="#/contact" onClick={(e)=>{e.preventDefault();go("contact");}}>{t.hero.cta1}</a>
              <a className="btn btn-ghost" href="#/listings" onClick={(e)=>{e.preventDefault();go("listings");}}>{t.hero.cta2}</a>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><div className="num">{D.agent.totalSold}</div><div className="lbl">{lang==="en"?"Verified Closings":"已驗證成交"}</div></div>
          <div className="hero-stat"><div className="num">$1M+</div><div className="lbl">{lang==="en"?"Avg. Sale Price":"平均成交價"}</div></div>
          <div className="hero-stat"><div className="num">{D.agent.years}</div><div className="lbl">{lang==="en"?"Years San Diego":"聖地亞哥經驗"}</div></div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="strip" style={{ marginTop: 80 }}>
        <div className="strip-track">
          <span>La Jolla<i className="dot"></i>Bird Rock<i className="dot"></i>Del Mar<i className="dot"></i>Mission Hills<i className="dot"></i>Point Loma<i className="dot"></i>Hillcrest<i className="dot"></i>North Park<i className="dot"></i>Coronado<i className="dot"></i>Pacific Beach<i className="dot"></i></span>
          <span>La Jolla<i className="dot"></i>Bird Rock<i className="dot"></i>Del Mar<i className="dot"></i>Mission Hills<i className="dot"></i>Point Loma<i className="dot"></i>Hillcrest<i className="dot"></i>North Park<i className="dot"></i>Coronado<i className="dot"></i>Pacific Beach<i className="dot"></i></span>
        </div>
      </div>

      {/* Bio */}
      <section className="section" style={{ background: "var(--bg-elev)" }}>
        <div className="container">
          <div className="bio-grid">
            <div className="bio-portrait" style={{ backgroundImage: "url(uploads/coastline-aerial.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div>
              <span className="eyebrow">{t.sections.bioEy}</span>
              <h2 style={{ margin: "20px 0 32px" }}>{t.sections.bioH}</h2>
              <div className="bio-quote">
                {lang==="en"
                  ? "Buying or selling a home can feel overwhelming. My role is to make it feel inevitable — calm, clear, and on your terms."
                  : "買房或賣房常令人不知所措。我的工作，是讓這一切變得從容、清晰、由您主導。"}
              </div>
              <div className="bio-sig">— Jean Riley</div>
              <div className="bio-credits">
                <div className="bio-credit"><div className="num">10</div><div className="lbl">{lang==="en"?"Years Practicing":"從業年數"}</div></div>
                <div className="bio-credit"><div className="num">{D.agent.totalSold}</div><div className="lbl">{lang==="en"?"Closed Transactions":"成交數"}</div></div>
                <div className="bio-credit"><div className="num">EN/中</div><div className="lbl">{lang==="en"?"Bilingual Service":"雙語服務"}</div></div>
              </div>
              <a className="btn btn-ghost arrow-right" href="#/about" onClick={(e)=>{e.preventDefault();go("about");}} style={{ marginTop: 36 }}>
                {lang==="en"?"More About Jean":"瞭解更多"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Sold */}
      <section className="section">
        <div className="container">
          <div className="sect-head">
            <div className="sect-head-title">
              <span className="eyebrow">{t.sections.soldEy}</span>
              <h2 style={{ marginTop: 16 }}><em>{t.sections.soldH}</em></h2>
            </div>
            <a className="btn-text arrow-right" href="#/listings/sold" onClick={(e)=>{e.preventDefault();go("listings/sold");}}>
              {lang==="en"?"All " + D.agent.totalSold + " Closings on Zillow":"Zillow 上全部 " + D.agent.totalSold + " 套成交"}
            </a>
          </div>
          <div className="grid-3">
            {sold.map(l => <ListingCard key={l.id} l={l} go={go} />)}
          </div>
        </div>
      </section>

      {/* Specialty / 1031 */}
      <section className="section-sm">
        <div className="container">
          <div className="specialty">
            <div className="specialty-img" style={{ backgroundImage: "url(uploads/1031-investment.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
              <div className="specialty-credit">
                Photo by <a href="https://unsplash.com/@aalolens?utm_source=jean_riley&utm_medium=referral" target="_blank" rel="noopener noreferrer">Aalo Lens</a>{" "}
                on <a href="https://unsplash.com/?utm_source=jean_riley&utm_medium=referral" target="_blank" rel="noopener noreferrer">Unsplash</a>
              </div>
            </div>
            <div className="specialty-body">
              <span className="eyebrow">{lang==="en"?"Investor Specialty":"投資專長"}</span>
              <h2>{lang==="en"?"1031 Exchange — done with discipline.":"1031 交換 —— 嚴謹執行"}</h2>
              <p style={{ color:'var(--ink-dim)', fontSize: 17, lineHeight: 1.7 }}>
                {lang==="en"
                  ? "The 45-day identification window is unforgiving. I work with two qualified intermediaries on standby and pre-vet replacement properties before your close — so the calendar serves your strategy, not the other way around."
                  : "1031 交換的 45 天識別期不容差錯。我與兩位合格中介長期合作，在您交割前預先篩選替代房產 —— 讓時間表服務於策略，而非相反。"}
              </p>
              <div style={{ display:'flex', gap: 16, marginTop: 8 }}>
                <a className="btn btn-primary arrow-right" href="#/exchange" onClick={(e)=>{e.preventDefault();go("exchange");}}>
                  {lang==="en"?"1031 Strategy Page":"瞭解 1031 策略"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background:'var(--bg-elev)' }}>
        <div className="container">
          <div className="sect-head">
            <div className="sect-head-title">
              <span className="eyebrow">{t.sections.testEy}</span>
              <h2 style={{ marginTop: 16 }}>{t.sections.testH}</h2>
            </div>
          </div>
          <div className="test-grid">
            {D.testimonials.slice(0, 3).map((tt, i) => (
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

      {/* Listing songs — the differentiator, so it gets its own section rather than
          being one card among many in the reel below. */}
      {songs.length > 0 && (
        <section className="section" style={{ background:'var(--bg-elev)' }}>
          <div className="container">
            <div className="sect-head">
              <div className="sect-head-title">
                <span className="eyebrow">{lang==="en"?"Signature Marketing":"獨家行銷"}</span>
                <h2 style={{ marginTop: 16 }}>{lang==="en"?<>Every listing gets its <em>own song</em>.</>:<>每套房源，都有 <em>專屬歌曲</em></>}</h2>
                <p className="lede" style={{ marginTop: 20, maxWidth: '58ch' }}>
                  {lang==="en"
                    ? "Not a stock music bed under a slideshow. An original song written about your property — its street, its setting, what it feels like to live there. It is the listing video people actually watch to the end, and send to a friend."
                    : "不是套用罐頭配樂的幻燈片，而是為您的物業量身創作的原創歌曲——關於它的街道、它的環境、住在那裡的感覺。這是真正會被看完、會被轉發給朋友的房源影片。"}
                </p>
              </div>
              <a className="btn-text arrow-right" href="#/videos" onClick={(e)=>{e.preventDefault();go("videos");}}>
                {lang==="en"?"All Videos":"完整影片"}
              </a>
            </div>
            <div className="video-grid">
              {songs.map(v => <VideoCard key={v.id} v={v} feature={v.feature} />)}
            </div>
            <div style={{ marginTop: 36, display:'flex', justifyContent:'center' }}>
              <a className="btn btn-primary arrow-right" href="#/contact" onClick={(e)=>{e.preventDefault();go("contact");}}>
                {lang==="en"?"Get a song for your listing":"為您的房源製作專屬歌曲"}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Video reel */}
      <section className="section">
        <div className="container">
          <div className="sect-head">
            <div className="sect-head-title">
              <span className="eyebrow">{t.sections.videoEy}</span>
              <h2 style={{ marginTop: 16 }}>{t.sections.videoH}</h2>
            </div>
            <a className="btn-text arrow-right" href="#/videos" onClick={(e)=>{e.preventDefault();go("videos");}}>{lang==="en"?"Full Library":"完整影片"}</a>
          </div>
          <div className="video-grid">
            {reel.map(v => (
              <VideoCard key={v.id} v={v} />
            ))}
          </div>
          <div style={{ marginTop: 32, display:'flex', justifyContent:'center' }}>
            <a className="btn btn-ghost arrow-right" href={D.agent.youtube} target="_blank" rel="noopener noreferrer">
              {lang==="en" ? "Subscribe on YouTube — " : "訂閱 YouTube · "}{D.agent.youtubeHandle}
            </a>
          </div>
        </div>
      </section>

      {/* Articles */}
      {articles.length > 0 && (
        <section className="section" style={{ background:'var(--bg-elev)' }}>
          <div className="container">
            <div className="sect-head">
              <div className="sect-head-title">
                <span className="eyebrow">{lang==="en"?"Field Notes":"札記"}</span>
                <h2 style={{ marginTop: 16 }}>{lang==="en"?"Reading for buyers, sellers and investors":"買家、賣家與投資人的閱讀清單"}</h2>
              </div>
              <a className="btn-text arrow-right" href="#/articles" onClick={(e)=>{e.preventDefault();go("articles");}}>
                {lang==="en"?"All Articles":"全部文章"}
              </a>
            </div>
            <div className="grid-3">
              {articles.map(a => <ArticleCard key={a.slug} a={a} go={go} />)}
            </div>
          </div>
        </section>
      )}

      {/* Estimator CTA */}
      <section className="section">
        <div className="container">
          <div className="estimator">
            <div>
              <span className="eyebrow">{t.sections.estEy}</span>
              <h2 style={{ margin: "20px 0 28px" }}><em>{t.sections.estH}</em></h2>
              <p style={{ color:'var(--ink-dim)', fontSize: 17, lineHeight: 1.7, maxWidth: '40ch' }}>
                {lang==="en"
                  ? "Automated estimates routinely miss San Diego's coastal micro-markets. Share a few details and I'll prepare a personal CMA — usually within 48 hours."
                  : "自動估值常忽略聖地亞哥沿海微市場的真實價值。請填寫以下資訊，我將在 48 小時內為您準備客製化市場分析（CMA）。"}
              </p>
            </div>
            <form className="est-form" onSubmit={(e)=>{e.preventDefault(); go("estimator");}}>
              <div className="est-step-label">— {lang==="en"?"Step 1 of 3":"第 1 / 3 步"}</div>
              <h4>{lang==="en"?"Your property address":"您的房產地址"}</h4>
              <p style={{color:'var(--ink-dim)', fontSize: 14, margin:'8px 0 24px'}}>{lang==="en"?"Begin with the address. Next steps cover condition and contact details.":"從地址開始。後續將瞭解房產狀況與聯絡方式。"}</p>
              <div className="input-row">
                <label>{lang==="en"?"Street Address":"街道地址"}</label>
                <input placeholder="1247 Coast Boulevard, La Jolla CA 92037" />
              </div>
              <button className="btn btn-primary arrow-right" style={{width:'100%', justifyContent:'center'}}>
                {lang==="en"?"Begin Valuation":"開始評估"}
              </button>
              <p className="est-note">{lang==="en"?"No automatic valuation — Jean reviews every request personally.":"不提供自動估值 —— Jean 將親自審閱每一份請求。"}</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

window.JR_HOME = { HomePage };
