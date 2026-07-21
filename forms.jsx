/* global React */
const { useState: uS4 } = React;
const { D: D4, VideoCard: VC4 } = window.JR_CORE;

// Web3Forms relays submissions to Jean's inbox. The key is a public submission
// token, not a secret — it only permits posting to this one destination address.
const WEB3FORMS_KEY = "b5f6ae82-dc56-42c1-b3a0-79ee29d3586d";

// Shared submit helper. Every form on the site goes through this so that a lead can
// never be silently dropped — the caller must render the returned status.
async function submitLead(fields, { subject, formName }) {
  const body = new FormData();
  Object.entries(fields).forEach(([k, v]) => body.set(k, v == null ? "" : String(v)));
  body.set("access_key", WEB3FORMS_KEY);
  body.set("subject", subject);
  body.set("from_name", formName);
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { Accept: "application/json" },
    body,
  });
  const data = await res.json().catch(() => ({}));
  if (!(res.ok && data.success)) throw new Error(data.message || "submit failed");
  return data;
}

// ---------- ESTIMATOR (3-step lead capture) ----------
function EstimatorPage({ lang, go }) {
  const [step, setStep] = uS4(1);
  const [status, setStatus] = uS4("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = uS4("");
  const [data, setData] = uS4({ address: "", beds: "", baths: "", sqft: "", condition: "Good", name: "", email: "", phone: "", time: "Anytime" });
  const update = (k, v) => setData(d => ({ ...d, [k]: v }));

  // Previously this fired an alert() and navigated home without sending anything —
  // every valuation request was silently discarded. It now posts to Jean's inbox.
  const submit = async () => {
    if (!data.name.trim() || !(data.email.trim() || data.phone.trim())) {
      setStatus("error");
      setErrorMsg(lang==="en"
        ? "Please add your name and either an email or a phone number so Jean can reach you."
        : "請填寫姓名，以及電子郵件或電話其中一項，以便 Jean 與您聯絡。");
      return;
    }
    setStatus("sending"); setErrorMsg("");
    try {
      await submitLead({
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        beds: data.beds,
        baths: data.baths,
        sqft: data.sqft,
        condition: data.condition,
        features: data.notes || "",
        best_time_to_contact: data.time,
      }, {
        subject: "JeanRiley.com — Home valuation request: " + (data.address || data.name || "no address given"),
        formName: "JeanRiley.com Home Valuation",
      });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(lang==="en"
        ? "That didn't send. Please call (858) 598-3888 or email Jean@CentermacSD.com and your request will be handled right away."
        : "傳送失敗。請致電 (858) 598-3888 或來信 Jean@CentermacSD.com，我們將立即為您處理。");
    }
  };

  if (status === "sent") {
    return (
      <div className="page-fade">
        <header className="page-head">
          <div className="container-tight">
            <span className="eyebrow">{lang==="en"?"Request Received":"已收到請求"}</span>
            <h1 style={{ marginTop: 20 }}>{lang==="en" ? <>Thank you — it's <em>with Jean</em>.</> : <>已送達 <em>Jean</em></>}</h1>
            <p className="lede">
              {lang==="en"
                ? "Your valuation request has been sent. Jean reviews each one personally and returns a written CMA, usually within 48 hours."
                : "您的估值請求已送出。Jean 會親自審閱每一份請求，通常於 48 小時內提供書面 CMA。"}
            </p>
            <p style={{ color:'var(--ink-dim)', marginTop: 20 }}>
              {lang==="en" ? "Need it sooner? Call " : "需要更快回覆？請致電 "}
              <a href={"tel:" + D4.agent.phone.replace(/[^0-9+]/g, "")} style={{color:'var(--brass)'}}>{D4.agent.phone}</a>.
            </p>
            <div style={{ marginTop: 32, display:'flex', gap: 16, flexWrap:'wrap' }}>
              <a className="btn btn-primary arrow-right" href="#/articles" onClick={(e)=>{e.preventDefault();go("articles");}}>
                {lang==="en"?"Read the seller guide":"閱讀賣家指南"}
              </a>
              <a className="btn btn-ghost" href="#/home" onClick={(e)=>{e.preventDefault();go("home");}}>
                {lang==="en"?"Back to home":"返回首頁"}
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
  return (
    <div className="page-fade">
      <header className="page-head">
        <div className="container">
          <div className="breadcrumbs"><a href="#/home" onClick={(e)=>{e.preventDefault();go("home");}}>Home</a><span>/</span>Home Valuation</div>
          <span className="eyebrow">{lang==="en"?"Personal Valuation":"個性化估值"}</span>
          <h1 style={{ marginTop: 20 }}>{lang==="en" ? <>What's your <em>home</em> worth?</> : <>您的 <em>房產</em> 價值幾何？</>}</h1>
          <p className="lede">{lang==="en"?"No automated number — Jean reviews each request personally and prepares a written CMA, usually within 48 hours.":"不提供自動估值 —— Jean 親自審閱每份請求，通常 48 小時內提供書面 CMA。"}</p>
        </div>
      </header>
      <section className="section">
        <div className="container-tight">
          <div style={{ display:'flex', gap: 0, marginBottom: 40, borderBottom:'1px solid var(--line)' }}>
            {["Property", "Condition", "Contact"].map((s, i) => (
              <div key={s} style={{ flex: 1, padding:'20px 0', textAlign:'center', borderBottom: step===i+1 ? '2px solid var(--brass)' : '2px solid transparent', color: step===i+1 ? 'var(--brass)' : 'var(--ink-faint)', fontFamily:'var(--font-mono)', fontSize: 11, letterSpacing:'.2em', textTransform:'uppercase' }}>
                — Step {i+1} · {s}
              </div>
            ))}
          </div>
          <div style={{ background:'var(--bg-elev)', padding: 56, border:'1px solid var(--line)' }}>
            {step === 1 && (
              <div>
                <h3 style={{ marginBottom: 32 }}>{lang==="en"?"Where is your property?":"您的房產位於哪裡？"}</h3>
                <div className="input-row"><label>Street Address</label><input value={data.address} onChange={e=>update("address", e.target.value)} placeholder="1247 Coast Boulevard, La Jolla CA 92037" /></div>
                <div className="form-row-3">
                  <div className="input-row"><label>Beds</label><select value={data.beds} onChange={e=>update("beds", e.target.value)}><option>—</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></select></div>
                  <div className="input-row"><label>Baths</label><select value={data.baths} onChange={e=>update("baths", e.target.value)}><option>—</option><option>1</option><option>1.5</option><option>2</option><option>2.5</option><option>3+</option></select></div>
                  <div className="input-row"><label>Sq Ft</label><input value={data.sqft} onChange={e=>update("sqft", e.target.value)} placeholder="2,400" /></div>
                </div>
              </div>
            )}
            {step === 2 && (
              <div>
                <h3 style={{ marginBottom: 32 }}>{lang==="en"?"How would you describe its condition?":"房產狀況如何？"}</h3>
                <div className="input-row"><label>Overall Condition</label>
                  <select value={data.condition} onChange={e=>update("condition", e.target.value)}>
                    <option>Excellent — recently renovated</option>
                    <option>Good — well maintained</option>
                    <option>Fair — some updates needed</option>
                    <option>Needs work</option>
                  </select>
                </div>
                <div className="input-row"><label>Notable features (views, finishes, recent improvements)</label><textarea value={data.notes||""} onChange={e=>update("notes", e.target.value)} placeholder="Pacific view, kitchen renovated 2023, primary bath 2024..." /></div>
              </div>
            )}
            {step === 3 && (
              <div>
                <h3 style={{ marginBottom: 32 }}>{lang==="en"?"How should Jean reach you?":"Jean 該如何聯絡您？"}</h3>
                <div className="form-row-2">
                  <div className="input-row"><label>Name</label><input value={data.name} onChange={e=>update("name", e.target.value)} /></div>
                  <div className="input-row"><label>Phone</label><input value={data.phone} onChange={e=>update("phone", e.target.value)} /></div>
                </div>
                <div className="input-row"><label>Email</label><input value={data.email} onChange={e=>update("email", e.target.value)} /></div>
                <div className="input-row"><label>Best Time to Contact</label>
                  <select value={data.time} onChange={e=>update("time", e.target.value)}><option>Anytime</option><option>Morning (8am – 12pm)</option><option>Afternoon (12pm – 5pm)</option><option>Evening (5pm – 8pm)</option></select>
                </div>
                <p className="est-note">A written CMA is prepared personally and delivered within 48 hours. No public listing exposure.</p>
              </div>
            )}
            {status === "error" && (
              <div className="form-status error" role="alert">{errorMsg}</div>
            )}
            <div style={{ display:'flex', justifyContent:'space-between', marginTop: 40, paddingTop: 32, borderTop:'1px solid var(--line)' }}>
              <button className="btn btn-ghost" disabled={step===1 || status==="sending"} onClick={()=>setStep(s=>Math.max(1, s-1))} style={{ opacity: step===1 ? 0.4 : 1 }}>← Back</button>
              {step < 3 ? (
                <button className="btn btn-primary arrow-right" onClick={()=>setStep(s=>s+1)}>{lang==="en"?"Continue":"繼續"}</button>
              ) : (
                <button className="btn btn-primary arrow-right" onClick={submit} disabled={status==="sending"}>
                  {status === "sending"
                    ? (lang==="en"?"Sending…":"傳送中…")
                    : (lang==="en"?"Submit Request":"送出請求")}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------- CONTACT ----------
function ContactPage({ lang, go }) {
  const [status, setStatus] = uS4("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = uS4("");
  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending"); setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    fd.set("access_key", WEB3FORMS_KEY);
    fd.set("subject", "JeanRiley.com — New inquiry from " + (fd.get("name") || "site visitor"));
    fd.set("from_name", "JeanRiley.com Contact Form");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) { setStatus("sent"); e.target.reset(); }
      else { setStatus("error"); setErrorMsg(data.message || "Something went wrong. Please call or email Jean directly."); }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please call or email Jean directly.");
    }
  };
  return (
    <div className="page-fade">
      <header className="page-head">
        <div className="container">
          <div className="breadcrumbs"><a href="#/home" onClick={(e)=>{e.preventDefault();go("home");}}>Home</a><span>/</span>Contact</div>
          <span className="eyebrow">{lang==="en"?"Get in Touch":"聯絡"}</span>
          <h1 style={{ marginTop: 20 }}>{lang==="en" ? <>Begin a <em>conversation</em>.</> : <>開啟 <em>對話</em></>}</h1>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div>
              <p className="lede" style={{ marginBottom: 40 }}>{lang==="en"?"Whether you're considering a move next month or next year — the conversation begins the same way. Reach out, and we'll find time for an unhurried first call.":"無論您計劃下月還是明年置業，對話的起點都一樣。請聯絡我，我們安排一次從容的初次通話。"}</p>
              <div style={{ display:'flex', flexDirection:'column', gap: 32 }}>
                {/* Phone and email are links — on mobile these are the primary conversion. */}
                {[
                  ["Phone", D4.agent.phone, lang==="en"?"Direct line, 9am – 7pm PT":"直線，太平洋時間 9 - 19 時", "tel:" + D4.agent.phone.replace(/[^0-9+]/g, "")],
                  ["Email", D4.agent.email, lang==="en"?"Replies within one business day":"一個工作日內回覆", "mailto:" + D4.agent.email],
                  ["Office", "9888 Carroll Centre Rd, Ste 200", "San Diego, California 92126", "https://maps.google.com/?q=9888+Carroll+Centre+Rd+Ste+200+San+Diego+CA+92126"],
                  ["Languages", "English · 中文 (Mandarin) · 台語 (Taiwanese)", lang==="en"?"All documents reviewable in either language":"所有檔案支援中英雙語審閱", null],
                ].map(([k, v, d, href]) => (
                  <div key={k} style={{ paddingBottom: 24, borderBottom:'1px solid var(--line)' }}>
                    <div className="eyebrow" style={{ marginBottom: 12 }}>{k}</div>
                    <div style={{ fontFamily:'var(--font-display)', fontSize: 26, color:'var(--ink)' }}>
                      {href
                        ? <a className="contact-link" href={href} {...(href.startsWith("http") ? { target:"_blank", rel:"noopener noreferrer" } : {})}>{v}</a>
                        : v}
                    </div>
                    <div style={{ color:'var(--ink-dim)', fontSize: 14, marginTop: 4 }}>{d}</div>
                  </div>
                ))}
              </div>
            </div>
            <form style={{ background:'var(--bg-elev)', padding: 48, border:'1px solid var(--line)' }} onSubmit={onSubmit}>
              <h3 style={{ marginBottom: 24 }}>{lang==="en"?"Send a message":"傳送訊息"}</h3>
              {status === "sent" ? (
                <div style={{ padding: 32, border: '1px solid var(--brass)', background: 'rgba(201,165,103,0.08)', textAlign: 'center' }}>
                  <div style={{ fontFamily:'var(--font-display)', fontSize: 28, color:'var(--brass)', marginBottom: 8 }}>{lang==="en"?"Thank you.":"已收到，謝謝您。"}</div>
                  <p style={{ color:'var(--ink-dim)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                    {lang==="en"?"Your message went straight to Jean's inbox. She'll be in touch within one business day.":"您的訊息已送達 Jean 的信箱，將於一個工作日內回覆。"}
                  </p>
                  <button type="button" className="btn btn-ghost" style={{ marginTop: 24 }} onClick={() => setStatus("idle")}>
                    {lang==="en"?"Send another":"再傳送一則"}
                  </button>
                </div>
              ) : (
                <>
                  <div className="form-row-2">
                    <div className="input-row"><label>Name</label><input name="name" required autoComplete="name" /></div>
                    <div className="input-row"><label>Phone</label><input name="phone" type="tel" autoComplete="tel" /></div>
                  </div>
                  <div className="input-row"><label>Email</label><input name="email" type="email" required autoComplete="email" /></div>
                  <div className="input-row"><label>I'm interested in</label>
                    <select name="interest" defaultValue="Buying in San Diego">
                      <option>Buying in San Diego</option>
                      <option>Selling my home</option>
                      <option>1031 Exchange</option>
                      <option>Home valuation</option>
                      <option>Just exploring</option>
                    </select>
                  </div>
                  <div className="input-row"><label>Message</label><textarea name="message" placeholder="Tell me a little about your timeline, neighborhoods, or anything else helpful..." /></div>
                  {/* Honeypot — hidden from real users; bots fill it and Web3Forms drops the submission */}
                  <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
                  <button
                    type="submit"
                    className="btn btn-primary arrow-right"
                    style={{ width:'100%', justifyContent:'center', marginTop: 12, opacity: status === "sending" ? 0.6 : 1 }}
                    disabled={status === "sending"}
                  >
                    {status === "sending"
                      ? (lang==="en"?"Sending…":"傳送中…")
                      : (lang==="en"?"Send Message":"傳送")}
                  </button>
                  {status === "error" && (
                    <p style={{ marginTop: 16, color: '#e08b8b', fontSize: 13, fontFamily: 'var(--font-mono)' }}>
                      {errorMsg || (lang==="en"?"Send failed. Please call (858) 598-3888 or email Jean@CentermacSD.com.":"傳送失敗，請致電 (858) 598-3888 或寄信至 Jean@CentermacSD.com。")}
                    </p>
                  )}
                  <p className="est-note">{lang==="en"?"Goes directly to Jean's inbox. No auto-replies.":"直送 Jean 信箱，無自動回覆。"}</p>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------- VIDEOS ----------
function VideosPage({ lang, go }) {
  const songs = D4.videos.filter(v => v.group === "song");
  const tours = D4.videos.filter(v => v.group === "tour");
  const voiceovers = D4.videos.filter(v => v.group === "voiceover");
  const testimonials = D4.videos.filter(v => v.group === "testimonial");
  const sectionHeader = (eyebrow, title, blurb) => (
    <div style={{ marginBottom: 56 }}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 style={{ marginTop: 16 }}>{title}</h2>
      {blurb && <p className="lede" style={{ marginTop: 20, maxWidth: '60ch' }}>{blurb}</p>}
    </div>
  );
  return (
    <div className="page-fade">
      <header className="page-head">
        <div className="container">
          <div className="breadcrumbs"><a href="#/home" onClick={(e)=>{e.preventDefault();go("home");}}>Home</a><span>/</span>Videos</div>
          <span className="eyebrow">{lang==="en"?"Video Library":"影片中心"}</span>
          <h1 style={{ marginTop: 20 }}>{lang==="en" ? <>From the <em>field</em>.</> : <>市場 <em>實錄</em></>}</h1>
          <p className="lede">{lang==="en"?"Original songs written for individual listings, property tours, neighborhood walkthroughs and stories from clients and fellow agents — straight from Jean's YouTube channel.":"為個別房源創作的原創歌曲、房源實地走訪、社群導覽，以及來自客戶與同業經紀人的真實分享 —— 全部來自 Jean 的 YouTube 頻道。"}</p>
          <div style={{ marginTop: 24 }}>
            <a className="btn btn-primary arrow-right" href={D4.agent.youtube} target="_blank" rel="noopener noreferrer">
              {lang==="en"?"Visit YouTube Channel — ":"訪問 YouTube 頻道 · "}{D4.agent.youtubeHandle}
            </a>
          </div>
        </div>
      </header>

      {songs.length > 0 && (
        <section className="section">
          <div className="container">
            {sectionHeader(
              lang==="en"?"Listing Songs":"房源主題曲",
              lang==="en"?"Every listing gets its own song":"每套房源，都有專屬歌曲",
              lang==="en"?"Not a stock music bed under a slideshow — an original song written about the actual property, its street and its setting. It is the piece of marketing that people watch to the end and send to a friend, and it is included with every listing I take.":"不是套用罐頭配樂的幻燈片 —— 而是為該物業、街道與環境量身創作的原創歌曲。這是真正會被看完、被轉發的行銷內容，且我接下的每一套房源都包含此服務。"
            )}
            <div className="video-grid">
              {songs.map(v => <VC4 key={v.id} v={v} feature={v.feature} />)}
            </div>
            <div style={{ marginTop: 40, textAlign: 'center' }}>
              <a className="btn btn-primary arrow-right" href="#/contact" onClick={(e)=>{e.preventDefault();go("contact");}}>
                {lang==="en"?"Get a song for your listing":"為您的房源製作專屬歌曲"}
              </a>
            </div>
          </div>
        </section>
      )}

      {voiceovers.length > 0 && (
        <section className="section" style={{ background: 'var(--bg-elev)' }}>
          <div className="container">
            {sectionHeader(
              lang==="en"?"Client Voice-Overs":"客戶配音",
              lang==="en"?"Heard from the people who lived it":"由親歷者講述",
              lang==="en"?"Property tours narrated by Jean's actual clients — about the homes and communities they came to love.":"由 Jean 的真實客戶配音介紹 —— 講述他們所喜愛的家與社群。"
            )}
            <div className="video-grid">
              {voiceovers.map(v => <VC4 key={v.id} v={v} feature={v === voiceovers[0]} />)}
            </div>
          </div>
        </section>
      )}

      {tours.length > 0 && (
        <section className="section">
          <div className="container">
            {sectionHeader(
              lang==="en"?"Property & Neighborhood Tours":"房源與社群導覽",
              lang==="en"?"Inside San Diego's homes, from Jean":"聖地亞哥家居實景，由 Jean 親自介紹",
              lang==="en"?"Walkthroughs of recent listings and the neighborhoods that surround them.":"近期房源走訪與周邊社群導覽。"
            )}
            <div className="video-grid">
              {tours.map(v => <VC4 key={v.id} v={v} />)}
            </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="section" style={{ background: 'var(--bg-elev)' }}>
          <div className="container">
            {sectionHeader(
              lang==="en"?"Agent Testimonials":"同業推薦",
              lang==="en"?"What other agents say about working with Jean":"同業經紀人對與 Jean 合作的評價",
              lang==="en"?"Fellow agents on what it's like to be on the other side of the table from Jean.":"同業經紀人講述與 Jean 在談判桌兩端共事的體驗。"
            )}
            <div className="video-grid">
              {testimonials.map(v => <VC4 key={v.id} v={v} />)}
            </div>
          </div>
        </section>
      )}

      <section className="section-sm">
        <div className="container-tight" style={{ padding:'48px 32px', textAlign:'center', border:'1px solid var(--line)', background:'var(--bg-elev)' }}>
          <span className="eyebrow no-rule">{lang==="en"?"More on YouTube":"更多 YouTube 內容"}</span>
          <h2 style={{ margin:'16px 0 24px' }}>{lang==="en"?"Subscribe to follow the next listing.":"訂閱，關注下一套房源"}</h2>
          <a className="btn btn-primary arrow-right" href={D4.agent.youtube} target="_blank" rel="noopener noreferrer">
            {D4.agent.youtubeHandle} {lang==="en"?"on YouTube":"YouTube 頻道"}
          </a>
        </div>
      </section>
    </div>
  );
}

window.JR_FORMS = { EstimatorPage, ContactPage, VideosPage };
