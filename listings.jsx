/* global React */
const { useState: uS2, useEffect: uE2 } = React;
const { D: D2, ListingCard: LC } = window.JR_CORE;

// ---------- LISTINGS ----------
function ListingsPage({ lang, go, sub }) {
  // Default = sold (Jean's track record). Active is opt-in via /listings/active.
  const resolve = (s) => (s === "active" ? "active" : "sold");
  const [filter, setFilter] = uS2(resolve(sub));
  uE2(() => { setFilter(resolve(sub)); }, [sub]);
  const items = D2.listings.filter(l => l.status === filter);
  return (
    <div className="page-fade">
      <header className="page-head">
        <div className="container">
          <div className="breadcrumbs"><a href="#/home" onClick={(e)=>{e.preventDefault();go("home");}}>{lang==="en"?"Home":"首頁"}</a><span>/</span>{lang==="en"?"Listings":"房源"}</div>
          <span className="eyebrow">{lang==="en"?"Curated Portfolio · San Diego":"精選房源 · 聖地牙哥"}</span>
          <h1 style={{ marginTop: 20 }}>{lang==="en" ? <>The <em>Listings</em></> : <>全部 <em>房源</em></>}</h1>
          <p className="lede">{lang==="en"?"Active representation, recent closings and rental opportunities across San Diego's coastal corridor and core urban neighborhoods.":"涵蓋聖地牙哥沿海與市區核心社區的在售、近期成交與出租房源。"}</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {[["sold", lang==="en"?"Featured Homes":"精選房源"], ["active", lang==="en"?"For Sale":"在售"]].map(([k, l]) => (
              <button key={k} className={"filter-pill" + (filter===k?" active":"")} onClick={()=>{setFilter(k); go("listings" + (k==="sold"?"":"/"+k));}}>{l}</button>
            ))}
            <span className="filter-count">{filter === "active" ? (lang==="en"?"none currently":"暫無") : (items.length + " " + (lang==="en"?"properties":"套房產"))}</span>
          </div>
          {filter === "active" ? (
            <div style={{ padding: '80px 32px', textAlign: 'center', border: '1px solid var(--line)', background: 'var(--bg-elev)' }}>
              <span className="eyebrow no-rule">{lang==="en"?"Coming Soon":"敬請期待"}</span>
              <h2 style={{ margin: '20px 0 16px' }}>{lang==="en"?<>New listings <em>on the way</em>.</>:<>新房源 <em>即將上線</em></>}</h2>
              <p className="lede" style={{ maxWidth: '52ch', margin: '0 auto 32px' }}>
                {lang==="en"
                  ? "Jean isn't actively representing any properties for sale at the moment. Get in touch to be the first to hear when the next listing comes to market — or to talk about selling your own home."
                  : "Jean 目前暫無在售房源。歡迎與我聯絡，下一套物件上市時第一時間通知您；若您正考慮出售自己的房子，也歡迎聊聊。"}
              </p>
              <a className="btn btn-primary arrow-right" href="#/contact" onClick={(e)=>{e.preventDefault();go("contact");}}>
                {lang==="en"?"Get on Jean's List":"加入 Jean 的優先名單"}
              </a>
            </div>
          ) : (
            <div className="grid-3">{items.map(l => <LC key={l.id} l={l} go={go} lang={lang} />)}</div>
          )}
          {filter === "sold" && (
            <>
              <div style={{ marginTop: 32, fontFamily:'var(--font-mono)', fontSize: 11, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--ink-faint)' }}>
                {lang==="en"
                  ? <>Showing {items.length} closings ≥ $1M · {D2.agent.totalSold} total sales on Zillow</>
                  : <>顯示 {items.length} 套 100 萬美元以上成交 · Zillow 總計 {D2.agent.totalSold} 套</>}
              </div>
              <div style={{ marginTop: 24, padding: 32, border: '1px solid var(--line)', background: 'var(--bg-elev)', display:'flex', justifyContent:'space-between', alignItems:'center', gap: 24, flexWrap:'wrap' }}>
                <div>
                  <span className="eyebrow">{lang==="en"?"Full Track Record":"完整成交記錄"}</span>
                  <h3 style={{ margin: '12px 0 6px' }}>{lang==="en"?D2.agent.totalSold + " closings on Zillow":"在 Zillow 檢視 " + D2.agent.totalSold + " 套成交"}</h3>
                  <p style={{ color:'var(--ink-dim)', fontSize: 14, maxWidth:'52ch' }}>{lang==="en"?"For complete deal history, photography and verified client reviews — my Zillow profile mirrors my full transaction archive.":"完整的成交紀錄、房源照片與經驗證的客戶評價，都同步在我的 Zillow 主頁。"}</p>
                </div>
                <a className="btn btn-ghost arrow-right" href={D2.agent.zillow} target="_blank" rel="noopener noreferrer">{lang==="en"?"View Zillow Profile":"檢視 Zillow 主頁"}</a>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

// ---------- LISTING DETAIL ----------
function ListingDetail({ id, lang, go }) {
  const l = D2.listings.find(x => x.id === id) || D2.listings[0];
  const heroImg = l.image ? encodeURI(l.image) : null;
  const heroStyle = heroImg
    ? { marginTop: 80, backgroundImage: "url(" + heroImg + ")", backgroundSize: "cover", backgroundPosition: "center" }
    : { marginTop: 80 };
  return (
    <div className="page-fade">
      <div className={"detail-hero" + (heroImg ? " has-image" : "")} style={heroStyle}>
        <div className="detail-hero-overlay"></div>
        <div className="detail-hero-content container">
          <div className="breadcrumbs"><a href="#/listings" onClick={(e)=>{e.preventDefault();go("listings");}}>{lang==="en"?"Listings":"房源"}</a><span>/</span>{l.street}</div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap: 40, flexWrap:'wrap' }}>
            <div>
              <span className="eyebrow">{lang==="zh" ? (l.status === "sold" ? "已成交" : l.status === "rent" ? "出租中" : "在售") : (l.status === "sold" ? "Closed" : l.status === "rent" ? "For Rent" : "Active")} · {l.area.split(",")[0]}</span>
              <h1 style={{ margin:'18px 0 10px', fontSize:'clamp(40px, 5vw, 64px)' }}>{l.street}</h1>
              <div style={{ color:'var(--ink-dim)', fontSize: 17 }}>{l.area}</div>
            </div>
            <div style={{ textAlign:'right' }}>
              <div className="listing-price" style={{ fontSize: 48 }}>{l.price}</div>
              <div className="listing-meta" style={{ borderTop:'none', justifyContent:'flex-end' }}>
                <span>{l.beds} {lang==="zh"?"房":"BD"}</span><span>{l.baths} {lang==="zh"?"衛":"BA"}</span><span>{l.sqft} {lang==="zh"?"平方英尺":"SF"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="listing-detail-layout">
            <div>
              <span className="eyebrow">{lang==="en"?"Property Description":"房屋介紹"}</span>
              <h2 style={{ margin:'20px 0 32px' }}>{l.ph || (lang==="en" ? "An exceptional offering in San Diego's coastal corridor" : "聖地牙哥沿海地帶的難得物件")}</h2>
              <p style={{ color:'var(--ink-dim)', fontSize: 17, lineHeight: 1.8 }}>
                {lang==="en"
                  ? "A measured, light-filled residence positioned for indoor-outdoor California living. Open-plan principal rooms anchor the main level, with chef's kitchen, wine room, and seamless flow to a covered loggia. Primary suite occupies its own wing, with private terrace and a spa-grade bath finished in honed limestone. Lower level accommodates two ensuite bedrooms, media room and direct garage access."
                  : "一棟採光充足、比例得宜的住宅，為加州室內外相連的生活方式而設。主樓層以開放式公共空間為核心，配置專業級廚房與酒藏室，並可直接通往有頂露臺。主臥獨立成區，附私人陽台與磨光石灰岩打造的頂級衛浴。下層則有兩間附衛浴的臥室、視聽室，以及可直接進出的車庫。"}
              </p>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 24, marginTop: 48, paddingTop: 32, borderTop:'1px solid var(--line)' }}>
                {(lang==="en"
                  ? [["Type", l.type || "Single Family"], ["Year Built", "2018"], ["Lot", l.lot || "—"], ["Garage", "2-car attached"], ["Stories", "Two"], ["HOA", "None"]]
                  : [["類型", l.type || "獨立住宅"], ["建造年份", "2018"], ["地坪", l.lot || "—"], ["車庫", "雙車位，與主屋相連"], ["樓層", "兩層"], ["管理費", "無"]]
                 ).map(([k, v]) => (
                  <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px solid var(--line)' }}>
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--ink-faint)' }}>{k}</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <aside style={{ background:'var(--bg-elev)', padding: 32, border:'1px solid var(--line)', alignSelf:'start' }}>
              <div className="test-avatar" style={{ width:64, height:64, fontSize:24, marginBottom:16 }}>JR</div>
              <h4>Jean Riley</h4>
              <div style={{ color:'var(--ink-dim)', fontSize:13, marginBottom: 24 }}>{lang==="en"?"Listing Agent":"委託經紀"} · {D2.agent.brokerage}</div>
              <a className="btn btn-primary arrow-right" style={{ width:'100%', justifyContent:'center', marginBottom: 12 }} href="#/contact" onClick={(e)=>{e.preventDefault();go("contact");}}>{lang==="en"?"Schedule Tour":"預約看屋"}</a>
              <a className="btn btn-ghost" style={{ width:'100%', justifyContent:'center' }}>{D2.agent.phone}</a>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

window.JR_LISTINGS = { ListingsPage, ListingDetail };
