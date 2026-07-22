(function(){
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
const {
  useState: uS4
} = React;
const {
  D: D4,
  VideoCard: VC4
} = window.JR_CORE;

// Web3Forms relays submissions to Jean's inbox. The key is a public submission
// token, not a secret — it only permits posting to this one destination address.
const WEB3FORMS_KEY = "b5f6ae82-dc56-42c1-b3a0-79ee29d3586d";

// Shared submit helper. Every form on the site goes through this so that a lead can
// never be silently dropped — the caller must render the returned status.
async function submitLead(fields, {
  subject,
  formName
}) {
  const body = new FormData();
  Object.entries(fields).forEach(([k, v]) => body.set(k, v == null ? "" : String(v)));
  body.set("access_key", WEB3FORMS_KEY);
  body.set("subject", subject);
  body.set("from_name", formName);
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body
  });
  const data = await res.json().catch(() => ({}));
  if (!(res.ok && data.success)) throw new Error(data.message || "submit failed");
  return data;
}

// ---------- ESTIMATOR (3-step lead capture) ----------
function EstimatorPage({
  lang,
  go
}) {
  const [step, setStep] = uS4(1);
  const [status, setStatus] = uS4("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = uS4("");
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

  // Previously this fired an alert() and navigated home without sending anything —
  // every valuation request was silently discarded. It now posts to Jean's inbox.
  const submit = async () => {
    if (!data.name.trim() || !(data.email.trim() || data.phone.trim())) {
      setStatus("error");
      setErrorMsg(lang === "en" ? "Please add your name and either an email or a phone number so Jean can reach you." : "請填寫姓名，以及電子郵件或電話其中一項，以便 Jean 與您聯絡。");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
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
        best_time_to_contact: data.time
      }, {
        subject: "JeanRiley.com — Home valuation request: " + (data.address || data.name || "no address given"),
        formName: "JeanRiley.com Home Valuation"
      });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(lang === "en" ? "That didn't send. Please call (858) 598-3888 or email Jean@CentermacSD.com and your request will be handled right away." : "傳送失敗。請致電 (858) 598-3888 或來信 Jean@CentermacSD.com，我們將立即為您處理。");
    }
  };
  if (status === "sent") {
    return /*#__PURE__*/React.createElement("div", {
      className: "page-fade"
    }, /*#__PURE__*/React.createElement("header", {
      className: "page-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container-tight"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, lang === "en" ? "Request Received" : "已收到請求"), /*#__PURE__*/React.createElement("h1", {
      style: {
        marginTop: 20
      }
    }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Thank you \u2014 it's ", /*#__PURE__*/React.createElement("em", null, "with Jean"), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u5DF2\u9001\u9054 ", /*#__PURE__*/React.createElement("em", null, "Jean"))), /*#__PURE__*/React.createElement("p", {
      className: "lede"
    }, lang === "en" ? "Your valuation request has been sent. Jean reviews each one personally and returns a written CMA, usually within 48 hours." : "您的估價需求已送出。Jean 會親自看過每一份請求，通常在 48 小時內提供書面 CMA。"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--ink-dim)',
        marginTop: 20
      }
    }, lang === "en" ? "Need it sooner? Call " : "需要更快回覆？請致電 ", /*#__PURE__*/React.createElement("a", {
      href: "tel:" + D4.agent.phone.replace(/[^0-9+]/g, ""),
      style: {
        color: 'var(--brass)'
      }
    }, D4.agent.phone), "."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 32,
        display: 'flex',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("a", {
      className: "btn btn-primary arrow-right",
      href: "#/articles",
      onClick: e => {
        e.preventDefault();
        go("articles");
      }
    }, lang === "en" ? "Read the seller guide" : "閱讀賣家指南"), /*#__PURE__*/React.createElement("a", {
      className: "btn btn-ghost",
      href: "#/home",
      onClick: e => {
        e.preventDefault();
        go("home");
      }
    }, lang === "en" ? "Back to home" : "返回首頁")))));
  }
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
  }, lang === "en" ? "Home" : "首頁"), /*#__PURE__*/React.createElement("span", null, "/"), lang === "en" ? "Home Valuation" : "房屋估價"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Personal Valuation" : "客製化估價"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 20
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "What's your ", /*#__PURE__*/React.createElement("em", null, "home"), " worth?") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u60A8\u7684\u623F\u5B50 ", /*#__PURE__*/React.createElement("em", null, "\u503C\u591A\u5C11"), "\uFF1F")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, lang === "en" ? "No automated number — Jean reviews each request personally and prepares a written CMA, usually within 48 hours." : "不提供自動估價。每一份請求都由 Jean 親自審閱，通常在 48 小時內提供書面 CMA。"))), /*#__PURE__*/React.createElement("section", {
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
  }, (lang === "en" ? ["Property", "Condition", "Contact"] : ["房產", "屋況", "聯絡方式"]).map((s, i) => /*#__PURE__*/React.createElement("div", {
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
  }, "\u2014 ", lang === "en" ? "Step" : "第", " ", i + 1, " ", lang === "en" ? "·" : "步 ·", " ", s))), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("label", null, lang === "en" ? "Street Address" : "街道地址"), /*#__PURE__*/React.createElement("input", {
    value: data.address,
    onChange: e => update("address", e.target.value),
    placeholder: "1247 Coast Boulevard, La Jolla CA 92037"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-row-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, lang === "en" ? "Beds" : "臥室"), /*#__PURE__*/React.createElement("select", {
    value: data.beds,
    onChange: e => update("beds", e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "\u2014"), /*#__PURE__*/React.createElement("option", null, "1"), /*#__PURE__*/React.createElement("option", null, "2"), /*#__PURE__*/React.createElement("option", null, "3"), /*#__PURE__*/React.createElement("option", null, "4"), /*#__PURE__*/React.createElement("option", null, "5+"))), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, lang === "en" ? "Baths" : "衛浴"), /*#__PURE__*/React.createElement("select", {
    value: data.baths,
    onChange: e => update("baths", e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "\u2014"), /*#__PURE__*/React.createElement("option", null, "1"), /*#__PURE__*/React.createElement("option", null, "1.5"), /*#__PURE__*/React.createElement("option", null, "2"), /*#__PURE__*/React.createElement("option", null, "2.5"), /*#__PURE__*/React.createElement("option", null, "3+"))), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, lang === "en" ? "Sq Ft" : "室內面積"), /*#__PURE__*/React.createElement("input", {
    value: data.sqft,
    onChange: e => update("sqft", e.target.value),
    placeholder: "2,400"
  })))), step === 2 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 32
    }
  }, lang === "en" ? "How would you describe its condition?" : "房產狀況如何？"), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, lang === "en" ? "Overall Condition" : "房屋整體狀況"), /*#__PURE__*/React.createElement("select", {
    value: data.condition,
    onChange: e => update("condition", e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "Excellent \u2014 recently renovated"
  }, lang === "en" ? "Excellent — recently renovated" : "極佳 — 近期整修過"), /*#__PURE__*/React.createElement("option", {
    value: "Good \u2014 well maintained"
  }, lang === "en" ? "Good — well maintained" : "良好 — 維護得宜"), /*#__PURE__*/React.createElement("option", {
    value: "Fair \u2014 some updates needed"
  }, lang === "en" ? "Fair — some updates needed" : "尚可 — 需要部分更新"), /*#__PURE__*/React.createElement("option", {
    value: "Needs work"
  }, lang === "en" ? "Needs work" : "需要整修"))), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, lang === "en" ? "Notable features (views, finishes, recent improvements)" : "房屋特色（景觀、裝修、近期改善）"), /*#__PURE__*/React.createElement("textarea", {
    value: data.notes || "",
    onChange: e => update("notes", e.target.value),
    placeholder: lang === "en" ? "Pacific view, kitchen renovated 2023, primary bath 2024..." : "太平洋景觀、廚房 2023 年翻新、主浴 2024 年整修…"
  }))), step === 3 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 32
    }
  }, lang === "en" ? "How should Jean reach you?" : "Jean 該如何聯絡您？"), /*#__PURE__*/React.createElement("div", {
    className: "form-row-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, lang === "en" ? "Name" : "姓名"), /*#__PURE__*/React.createElement("input", {
    value: data.name,
    onChange: e => update("name", e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, lang === "en" ? "Phone" : "電話"), /*#__PURE__*/React.createElement("input", {
    value: data.phone,
    onChange: e => update("phone", e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, lang === "en" ? "Email" : "電子郵件"), /*#__PURE__*/React.createElement("input", {
    value: data.email,
    onChange: e => update("email", e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, lang === "en" ? "Best Time to Contact" : "方便聯絡的時段"), /*#__PURE__*/React.createElement("select", {
    value: data.time,
    onChange: e => update("time", e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "Anytime"
  }, lang === "en" ? "Anytime" : "任何時間"), /*#__PURE__*/React.createElement("option", {
    value: "Morning (8am \u2013 12pm)"
  }, lang === "en" ? "Morning (8am – 12pm)" : "上午（8:00–12:00）"), /*#__PURE__*/React.createElement("option", {
    value: "Afternoon (12pm \u2013 5pm)"
  }, lang === "en" ? "Afternoon (12pm – 5pm)" : "下午（12:00–17:00）"), /*#__PURE__*/React.createElement("option", {
    value: "Evening (5pm \u2013 8pm)"
  }, lang === "en" ? "Evening (5pm – 8pm)" : "晚上（17:00–20:00）"))), /*#__PURE__*/React.createElement("p", {
    className: "est-note"
  }, lang === "en" ? "A written CMA is prepared personally and delivered within 48 hours. No public listing exposure." : "書面 CMA 由 Jean 親自製作，48 小時內送達。不會對外公開您的房屋資訊。")), status === "error" && /*#__PURE__*/React.createElement("div", {
    className: "form-status error",
    role: "alert"
  }, errorMsg), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 40,
      paddingTop: 32,
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    disabled: step === 1 || status === "sending",
    onClick: () => setStep(s => Math.max(1, s - 1)),
    style: {
      opacity: step === 1 ? 0.4 : 1
    }
  }, "\u2190 ", lang === "en" ? "Back" : "上一步"), step < 3 ? /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary arrow-right",
    onClick: () => setStep(s => s + 1)
  }, lang === "en" ? "Continue" : "繼續") : /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary arrow-right",
    onClick: submit,
    disabled: status === "sending"
  }, status === "sending" ? lang === "en" ? "Sending…" : "傳送中…" : lang === "en" ? "Submit Request" : "送出請求"))))));
}

// ---------- CONTACT ----------
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
  }, lang === "en" ? "Home" : "首頁"), /*#__PURE__*/React.createElement("span", null, "/"), lang === "en" ? "Contact" : "聯絡"), /*#__PURE__*/React.createElement("span", {
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
  }, [[lang === "en" ? "Phone" : "電話", D4.agent.phone, lang === "en" ? "Direct line, 9am – 7pm PT" : "直線，太平洋時間 9 - 19 時", "tel:" + D4.agent.phone.replace(/[^0-9+]/g, "")], [lang === "en" ? "Email" : "電子郵件", D4.agent.email, lang === "en" ? "Replies within one business day" : "一個工作日內回覆", "mailto:" + D4.agent.email], [lang === "en" ? "Office" : "辦公室", "9888 Carroll Centre Rd, Ste 200", "San Diego, California 92126", "https://maps.google.com/?q=9888+Carroll+Centre+Rd+Ste+200+San+Diego+CA+92126"], [lang === "en" ? "Languages" : "語言", "English · 中文 · 台語", lang === "en" ? "All documents reviewable in either language" : "所有檔案支援中英雙語審閱", null]].map(([k, v, d, href]) => /*#__PURE__*/React.createElement("div", {
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
  }, href ? /*#__PURE__*/React.createElement("a", _extends({
    className: "contact-link",
    href: href
  }, href.startsWith("http") ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {}), v) : v), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-dim)',
      fontSize: 14,
      marginTop: 4
    }
  }, d))), /*#__PURE__*/React.createElement("div", {
    className: "contact-qr"
  }, /*#__PURE__*/React.createElement("img", {
    loading: "lazy",
    src: "uploads/card-qr.svg",
    alt: lang === "en" ? "QR code linking to Jean Riley's digital business card" : "掃描開啟 Jean Riley 的電子名片",
    width: "116",
    height: "116"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, lang === "en" ? "Save Jean to your phone" : "將 Jean 存入手機通訊錄"), /*#__PURE__*/React.createElement("p", null, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Point your camera at the code to open Jean's digital card, then tap ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Save to Contacts"), ". Or ", /*#__PURE__*/React.createElement("a", {
    href: "card/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "open the card"), " directly.") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u7528\u624B\u6A5F\u76F8\u6A5F\u6383\u63CF\u6B64\u78BC\u5373\u53EF\u958B\u555F\u96FB\u5B50\u540D\u7247\uFF0C\u9EDE\u9078 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "\u5B58\u5165\u901A\u8A0A\u9304"), " \u5373\u53EF\u5132\u5B58\u3002\u4E5F\u53EF ", /*#__PURE__*/React.createElement("a", {
    href: "card/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\u76F4\u63A5\u958B\u555F\u540D\u7247"), "\u3002")))))), /*#__PURE__*/React.createElement("form", {
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
  }, /*#__PURE__*/React.createElement("label", null, lang === "en" ? "Name" : "姓名"), /*#__PURE__*/React.createElement("input", {
    name: "name",
    required: true,
    autoComplete: "name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, lang === "en" ? "Phone" : "電話"), /*#__PURE__*/React.createElement("input", {
    name: "phone",
    type: "tel",
    autoComplete: "tel"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, lang === "en" ? "Email" : "電子郵件"), /*#__PURE__*/React.createElement("input", {
    name: "email",
    type: "email",
    required: true,
    autoComplete: "email"
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, lang === "en" ? "I'm interested in" : "我想諮詢"), /*#__PURE__*/React.createElement("select", {
    name: "interest",
    defaultValue: "Buying in San Diego"
  }, /*#__PURE__*/React.createElement("option", {
    value: "Buying in San Diego"
  }, lang === "en" ? "Buying in San Diego" : "在聖地牙哥購屋"), /*#__PURE__*/React.createElement("option", {
    value: "Selling my home"
  }, lang === "en" ? "Selling my home" : "出售我的房子"), /*#__PURE__*/React.createElement("option", {
    value: "1031 Exchange"
  }, lang === "en" ? "1031 Exchange" : "1031 交換"), /*#__PURE__*/React.createElement("option", {
    value: "Home valuation"
  }, lang === "en" ? "Home valuation" : "房屋估價"), /*#__PURE__*/React.createElement("option", {
    value: "Just exploring"
  }, lang === "en" ? "Just exploring" : "目前只是先了解"))), /*#__PURE__*/React.createElement("div", {
    className: "input-row"
  }, /*#__PURE__*/React.createElement("label", null, lang === "en" ? "Message" : "訊息"), /*#__PURE__*/React.createElement("textarea", {
    name: "message",
    placeholder: lang === "en" ? "Tell me a little about your timeline, neighborhoods, or anything else helpful..." : "請簡單說明您的時程、想找的區域，或其他任何有幫助的資訊…"
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
  const songs = D4.videos.filter(v => v.group === "song");
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
  }, lang === "en" ? "Home" : "首頁"), /*#__PURE__*/React.createElement("span", null, "/"), lang === "en" ? "Videos" : "影片"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, lang === "en" ? "Video Library" : "影片中心"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 20
    }
  }, lang === "en" ? /*#__PURE__*/React.createElement(React.Fragment, null, "From the ", /*#__PURE__*/React.createElement("em", null, "field"), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u5E02\u5834 ", /*#__PURE__*/React.createElement("em", null, "\u5BE6\u9304"))), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, lang === "en" ? "Original songs written for individual listings, property tours, neighborhood walkthroughs and stories from clients and fellow agents — straight from Jean's YouTube channel." : "為個別房源創作的原創歌曲、房源實地走訪、社區導覽，以及客戶與同業經紀人的真實分享，全部來自 Jean 的 YouTube 頻道。"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary arrow-right",
    href: D4.agent.youtube,
    target: "_blank",
    rel: "noopener noreferrer"
  }, lang === "en" ? "Visit YouTube Channel — " : "訪問 YouTube 頻道 · ", D4.agent.youtubeHandle)))), songs.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, sectionHeader(lang === "en" ? "Listing Songs" : "房源主題曲", lang === "en" ? "Every listing gets its own song" : "每套房源，都有專屬歌曲", lang === "en" ? "Not a stock music bed under a slideshow — an original song written about the actual property, its street and its setting. It is the piece of marketing that people watch to the end and send to a friend, and it is included with every listing I take." : "不是配上罐頭音樂的幻燈片，而是為該物業、街道與周邊環境量身創作的一首歌。這樣的內容人們會看完、會轉發，而我接下的每一套房源都包含這項服務。"), /*#__PURE__*/React.createElement("div", {
    className: "video-grid"
  }, songs.map(v => /*#__PURE__*/React.createElement(VC4, {
    key: v.id,
    v: v,
    feature: v.feature,
    lang: lang
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary arrow-right",
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      go("contact");
    }
  }, lang === "en" ? "Get a song for your listing" : "為您的房源製作專屬歌曲")))), voiceovers.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-elev)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, sectionHeader(lang === "en" ? "Client Voice-Overs" : "客戶配音", lang === "en" ? "Heard from the people who lived it" : "由親歷者講述", lang === "en" ? "Property tours narrated by Jean's actual clients — about the homes and communities they came to love." : "由 Jean 的真實客戶親自配音，講述他們所喜愛的家與社區。"), /*#__PURE__*/React.createElement("div", {
    className: "video-grid"
  }, voiceovers.map(v => /*#__PURE__*/React.createElement(VC4, {
    key: v.id,
    v: v,
    feature: v === voiceovers[0],
    lang: lang
  }))))), tours.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, sectionHeader(lang === "en" ? "Property & Neighborhood Tours" : "房源與社區導覽", lang === "en" ? "Inside San Diego's homes, from Jean" : "聖地牙哥家居實景，由 Jean 親自介紹", lang === "en" ? "Walkthroughs of recent listings and the neighborhoods that surround them." : "近期房源走訪與周邊社區導覽。"), /*#__PURE__*/React.createElement("div", {
    className: "video-grid"
  }, tours.map(v => /*#__PURE__*/React.createElement(VC4, {
    key: v.id,
    v: v,
    lang: lang
  }))))), testimonials.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-elev)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, sectionHeader(lang === "en" ? "Agent Testimonials" : "同業推薦", lang === "en" ? "What other agents say about working with Jean" : "同業經紀人對與 Jean 合作的評價", lang === "en" ? "Fellow agents on what it's like to be on the other side of the table from Jean." : "同業經紀人講述與 Jean 在談判桌兩端共事的體驗。"), /*#__PURE__*/React.createElement("div", {
    className: "video-grid"
  }, testimonials.map(v => /*#__PURE__*/React.createElement(VC4, {
    key: v.id,
    v: v,
    lang: lang
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
