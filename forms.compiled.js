(function(){
/* global React */
const {
  useState: uS4
} = React;
const {
  D: D4,
  VideoCard: VC4
} = window.JR_CORE;

// ---------- ESTIMATOR (3-step lead capture) ----------
function EstimatorPage({
  lang,
  go
}) {
  const [step, setStep] = uS4(1);
  const [data, setData] = uS4({
    address: "",
    beds: "",
    baths: "",
    sqft: "",
    condition: "Good",
    name: "",
    email: "",
    phone: "",
    time: "Anytime"
  });
  const update = (k, v) => setData(d => ({
    ...d,
    [k]: v
  }));
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
  }, "Home"), /*#__PURE__*/React.createElement("span", null, "/"), "Home Valuation"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Personal Valuation" : "個性化估值"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 20
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "What's your ", /*#__PURE__*/React.createElement("em", null, "home"), " worth?") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u60A8\u7684 ", /*#__PURE__*/React.createElement("em", null, "\u623F\u7522"), " \u50F9\u503C\u5E7E\u4F55\uFF1F")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, lang === "en" ? "No automated number — Jean reviews each request personally and prepares a written CMA, usually within 48 hours." : "不提供自動估值 —— Jean 親自審閱每份請求，通常 48 小時內提供書面 CMA。"))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-tight"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      marginBottom: 40,
      borderBottom: '1px solid var(--line)'
    }
  }, ["Property", "Condition", "Contact"].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      flex: 1,
      padding: '20px 0',
      textAlign: 'center',
      borderBottom: step === i + 1 ? '2px solid var(--brass)' : '2px solid transparent',
      color: step === i + 1 ? 'var(--brass)' : 'var(--ink-faint)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.2em',
      textTransform: 'uppercase'
    }
  }, "\u2014 Step ", i + 1, " \xB7 ", s))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-elev)',
      padding: 56,
      border: '1px solid var(--line)'
    }
  }, step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 32
    }
  }, lang === "en" ? "Where is your property?" : "您的房產位於哪裡？"), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, "Street Address"), /*#__PURE__*/React.createElement("input", {
    value: data.address,
    onChange: e => update("address", e.target.value),
    placeholder: "1247 Coast Boulevard, La Jolla CA 92037"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-row-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, "Beds"), /*#__PURE__*/React.createElement("select", {
    value: data.beds,
    onChange: e => update("beds", e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "\u2014"), /*#__PURE__*/React.createElement("option", null, "1"), /*#__PURE__*/React.createElement("option", null, "2"), /*#__PURE__*/React.createElement("option", null, "3"), /*#__PURE__*/React.createElement("option", null, "4"), /*#__PURE__*/React.createElement("option", null, "5+"))), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, "Baths"), /*#__PURE__*/React.createElement("select", {
    value: data.baths,
    onChange: e => update("baths", e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "\u2014"), /*#__PURE__*/React.createElement("option", null, "1"), /*#__PURE__*/React.createElement("option", null, "1.5"), /*#__PURE__*/React.createElement("option", null, "2"), /*#__PURE__*/React.createElement("option", null, "2.5"), /*#__PURE__*/React.createElement("option", null, "3+"))), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, "Sq Ft"), /*#__PURE__*/React.createElement("input", {
    value: data.sqft,
    onChange: e => update("sqft", e.target.value),
    placeholder: "2,400"
  })))), step === 2 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 32
    }
  }, lang === "en" ? "How would you describe its condition?" : "房產狀況如何？"), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, "Overall Condition"), /*#__PURE__*/React.createElement("select", {
    value: data.condition,
    onChange: e => update("condition", e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "Excellent \u2014 recently renovated"), /*#__PURE__*/React.createElement("option", null, "Good \u2014 well maintained"), /*#__PURE__*/React.createElement("option", null, "Fair \u2014 some updates needed"), /*#__PURE__*/React.createElement("option", null, "Needs work"))), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, "Notable features (views, finishes, recent improvements)"), /*#__PURE__*/React.createElement("textarea", {
    value: data.notes || "",
    onChange: e => update("notes", e.target.value),
    placeholder: "Pacific view, kitchen renovated 2023, primary bath 2024..."
  }))), step === 3 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 32
    }
  }, lang === "en" ? "How should Jean reach you?" : "Jean 該如何聯絡您？"), /*#__PURE__*/React.createElement("div", {
    className: "form-row-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, "Name"), /*#__PURE__*/React.createElement("input", {
    value: data.name,
    onChange: e => update("name", e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, "Phone"), /*#__PURE__*/React.createElement("input", {
    value: data.phone,
    onChange: e => update("phone", e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    value: data.email,
    onChange: e => update("email", e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, "Best Time to Contact"), /*#__PURE__*/React.createElement("select", {
    value: data.time,
    onChange: e => update("time", e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "Anytime"), /*#__PURE__*/React.createElement("option", null, "Morning (8am \u2013 12pm)"), /*#__PURE__*/React.createElement("option", null, "Afternoon (12pm \u2013 5pm)"), /*#__PURE__*/React.createElement("option", null, "Evening (5pm \u2013 8pm)"))), /*#__PURE__*/React.createElement("p", {
    className: "est-note"
  }, "A written CMA is prepared personally and delivered within 48 hours. No public listing exposure.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 40,
      paddingTop: 32,
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    disabled: step === 1,
    onClick: () => setStep(s => Math.max(1, s - 1)),
    style: {
      opacity: step === 1 ? 0.4 : 1
    }
  }, "\u2190 Back"), step < 3 ? /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary arrow-right",
    onClick: () => setStep(s => s + 1)
  }, "Continue") : /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary arrow-right",
    onClick: () => {
      alert(lang === "en" ? "Thank you. Jean will follow up within 48 hours." : "已收到，Jean 將在 48 小時內聯絡您。");
      go("home");
    }
  }, "Submit Request"))))));
}

// ---------- CONTACT ----------
const WEB3FORMS_KEY = "b5f6ae82-dc56-42c1-b3a0-79ee29d3586d";
function ContactPage({
  lang,
  go
}) {
  const [status, setStatus] = uS4("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = uS4("");
  const onSubmit = async e => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    fd.set("access_key", WEB3FORMS_KEY);
    fd.set("subject", "JeanRiley.com — New inquiry from " + (fd.get("name") || "site visitor"));
    fd.set("from_name", "JeanRiley.com Contact Form");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: fd
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please call or email Jean directly.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please call or email Jean directly.");
    }
  };
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
  }, "Home"), /*#__PURE__*/React.createElement("span", null, "/"), "Contact"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Get in Touch" : "聯絡"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 20
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Begin a ", /*#__PURE__*/React.createElement("em", null, "conversation"), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u958B\u555F ", /*#__PURE__*/React.createElement("em", null, "\u5C0D\u8A71"))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-layout"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginBottom: 40
    }
  }, lang === "en" ? "Whether you're considering a move next month or next year — the conversation begins the same way. Reach out, and we'll find time for an unhurried first call." : "無論您計劃下月還是明年置業，對話的起點都一樣。請聯絡我，我們安排一次從容的初次通話。"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, [["Phone", D4.agent.phone, lang === "en" ? "Direct line, 9am – 7pm PT" : "直線，太平洋時間 9 - 19 時"], ["Email", D4.agent.email, lang === "en" ? "Replies within one business day" : "一個工作日內回覆"], ["Office", "9888 Carroll Centre Rd, Ste 200", "San Diego, California 92126"], ["Languages", "English · 中文 (Mandarin) · 台語 (Taiwanese)", lang === "en" ? "All documents reviewable in either language" : "所有檔案支援中英雙語審閱"]].map(([k, v, d]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      paddingBottom: 24,
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      color: 'var(--ink)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-dim)',
      fontSize: 14,
      marginTop: 4
    }
  }, d))))), /*#__PURE__*/React.createElement("form", {
    style: {
      background: 'var(--bg-elev)',
      padding: 48,
      border: '1px solid var(--line)'
    },
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 24
    }
  }, lang === "en" ? "Send a message" : "傳送訊息"), status === "sent" ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      border: '1px solid var(--brass)',
      background: 'rgba(201,165,103,0.08)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      color: 'var(--brass)',
      marginBottom: 8
    }
  }, lang === "en" ? "Thank you." : "已收到，謝謝您。"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-dim)',
      fontSize: 15,
      lineHeight: 1.6,
      margin: 0
    }
  }, lang === "en" ? "Your message went straight to Jean's inbox. She'll be in touch within one business day." : "您的訊息已送達 Jean 的信箱，將於一個工作日內回覆。"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-ghost",
    style: {
      marginTop: 24
    },
    onClick: () => setStatus("idle")
  }, lang === "en" ? "Send another" : "再傳送一則")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "form-row-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, "Name"), /*#__PURE__*/React.createElement("input", {
    name: "name",
    required: true,
    autoComplete: "name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, "Phone"), /*#__PURE__*/React.createElement("input", {
    name: "phone",
    type: "tel",
    autoComplete: "tel"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    name: "email",
    type: "email",
    required: true,
    autoComplete: "email"
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, "I'm interested in"), /*#__PURE__*/React.createElement("select", {
    name: "interest",
    defaultValue: "Buying in San Diego"
  }, /*#__PURE__*/React.createElement("option", null, "Buying in San Diego"), /*#__PURE__*/React.createElement("option", null, "Selling my home"), /*#__PURE__*/React.createElement("option", null, "1031 Exchange"), /*#__PURE__*/React.createElement("option", null, "Home valuation"), /*#__PURE__*/React.createElement("option", null, "Just exploring"))), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, "Message"), /*#__PURE__*/React.createElement("textarea", {
    name: "message",
    placeholder: "Tell me a little about your timeline, neighborhoods, or anything else helpful..."
  })), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "botcheck",
    style: {
      display: "none"
    },
    tabIndex: "-1",
    autoComplete: "off"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary arrow-right",
    style: {
      width: '100%',
      justifyContent: 'center',
      marginTop: 12,
      opacity: status === "sending" ? 0.6 : 1
    },
    disabled: status === "sending"
  }, status === "sending" ? lang === "en" ? "Sending…" : "傳送中…" : lang === "en" ? "Send Message" : "傳送"), status === "error" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      color: '#e08b8b',
      fontSize: 13,
      fontFamily: 'var(--font-mono)'
    }
  }, errorMsg || (lang === "en" ? "Send failed. Please call (858) 598-3888 or email Jean@CentermacSD.com." : "傳送失敗，請致電 (858) 598-3888 或寄信至 Jean@CentermacSD.com。")), /*#__PURE__*/React.createElement("p", {
    className: "est-note"
  }, lang === "en" ? "Goes directly to Jean's inbox. No auto-replies." : "直送 Jean 信箱，無自動回覆。")))))));
}

// ---------- VIDEOS ----------
function VideosPage({
  lang,
  go
}) {
  const tours = D4.videos.filter(v => v.group === "tour");
  const voiceovers = D4.videos.filter(v => v.group === "voiceover");
  const testimonials = D4.videos.filter(v => v.group === "testimonial");
  const sectionHeader = (eyebrow, title, blurb) => /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, title), blurb && /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 20,
      maxWidth: '60ch'
    }
  }, blurb));
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
  }, "Home"), /*#__PURE__*/React.createElement("span", null, "/"), "Videos"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Video Library" : "影片中心"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 20
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "From the ", /*#__PURE__*/React.createElement("em", null, "field"), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u5E02\u5834 ", /*#__PURE__*/React.createElement("em", null, "\u5BE6\u9304"))), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, lang === "en" ? "Property tours, neighborhood walkthroughs and stories from clients and fellow agents — straight from Jean's YouTube channel." : "房源實地走訪、社群導覽，以及來自客戶與同業經紀人的真實分享 —— 全部來自 Jean 的 YouTube 頻道。"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary arrow-right",
    href: D4.agent.youtube,
    target: "_blank",
    rel: "noopener noreferrer"
  }, lang === "en" ? "Visit YouTube Channel — " : "訪問 YouTube 頻道 · ", D4.agent.youtubeHandle)))), voiceovers.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, sectionHeader(lang === "en" ? "Client Voice-Overs" : "客戶配音", lang === "en" ? "Heard from the people who lived it" : "由親歷者講述", lang === "en" ? "Property tours narrated by Jean's actual clients — about the homes and communities they came to love." : "由 Jean 的真實客戶配音介紹 —— 講述他們所喜愛的家與社群。"), /*#__PURE__*/React.createElement("div", {
    className: "video-grid"
  }, voiceovers.map(v => /*#__PURE__*/React.createElement(VC4, {
    key: v.id,
    v: v,
    feature: v === voiceovers[0]
  }))))), tours.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-elev)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, sectionHeader(lang === "en" ? "Property & Neighborhood Tours" : "房源與社群導覽", lang === "en" ? "Inside San Diego's homes, from Jean" : "聖地亞哥家居實景，由 Jean 親自介紹", lang === "en" ? "Walkthroughs of recent listings and the neighborhoods that surround them." : "近期房源走訪與周邊社群導覽。"), /*#__PURE__*/React.createElement("div", {
    className: "video-grid"
  }, tours.map(v => /*#__PURE__*/React.createElement(VC4, {
    key: v.id,
    v: v
  }))))), testimonials.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, sectionHeader(lang === "en" ? "Agent Testimonials" : "同業推薦", lang === "en" ? "What other agents say about working with Jean" : "同業經紀人對與 Jean 合作的評價", lang === "en" ? "Fellow agents on what it's like to be on the other side of the table from Jean." : "同業經紀人講述與 Jean 在談判桌兩端共事的體驗。"), /*#__PURE__*/React.createElement("div", {
    className: "video-grid"
  }, testimonials.map(v => /*#__PURE__*/React.createElement(VC4, {
    key: v.id,
    v: v
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-tight",
    style: {
      padding: '48px 32px',
      textAlign: 'center',
      border: '1px solid var(--line)',
      background: 'var(--bg-elev)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow no-rule"
  }, lang === "en" ? "More on YouTube" : "更多 YouTube 內容"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 24px'
    }
  }, lang === "en" ? "Subscribe to follow the next listing." : "訂閱，關注下一套房源"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary arrow-right",
    href: D4.agent.youtube,
    target: "_blank",
    rel: "noopener noreferrer"
  }, D4.agent.youtubeHandle, " ", lang === "en" ? "on YouTube" : "YouTube 頻道"))));
}
window.JR_FORMS = {
  EstimatorPage,
  ContactPage,
  VideosPage
};
})();
