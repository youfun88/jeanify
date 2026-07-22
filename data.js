// Data — listings, testimonials, videos, articles, copy
window.JR_DATA = {
  agent: {
    name: "Jean Riley",
    title: "Realtor® · San Diego Coastal Specialist",
    phone: "(858) 598-3888",
    email: "Jean@CentermacSD.com",
    license: "DRE# 02004228",
    brokerage: "Jeanify",
    years: 10,
    youtube: "https://www.youtube.com/@soldbyjean",
    youtubeHandle: "@soldbyjean",
    zillow: "https://www.zillow.com/profile/JeanSD",
    totalSold: "200+",
  },

  i18n: {
    en: {
      // `listings` / `videos` are no longer top-nav items — both live as sections on
      // the home page — but the labels are still used by the footer and breadcrumbs.
      nav: { home: "Home", listings: "Listings", videos: "Videos", about: "About", articles: "Resources", guides: "Guides", faq: "FAQ", exchange: "1031 Exchange", contact: "Contact" },
      hero: {
        eyebrow: "San Diego · Established 2015",
        h1: ["A discerning approach to", "California coastal living."],
        sub: "A decade guiding buyers, sellers and investors through San Diego's most coveted neighborhoods — from La Jolla bluff homes to Mission Hills craftsmans and 1031 portfolio plays.",
        cta1: "Schedule a Consultation",
        cta2: "View Featured Listings",
      },
      sections: {
        featuredEy: "Curated Portfolio",
        featuredH: "Currently Representing",
        soldEy: "Track Record",
        soldH: "Featured Homes",
        bioEy: "Meet Jean",
        bioH: "Ten years. One coastline. Hundreds of homes.",
        testEy: "Client Voices",
        testH: "What it's like to work together",
        videoEy: "From the Field",
        videoH: "Market briefings, neighborhood tours and seller stories",
        guidesEy: "Resources",
        guidesH: "Guides for buyers, sellers and investors",
        estEy: "What's it Worth",
        estH: "A bespoke valuation, prepared personally",
      },
    },
    zh: {
      nav: { home: "首頁", listings: "房源", videos: "影片", about: "關於", articles: "資源", guides: "指南", faq: "常見問題", exchange: "1031 交換", contact: "聯絡" },
      hero: {
        eyebrow: "聖地牙哥 · 始於 2015",
        h1: ["以專業態度", "服務加州海岸生活"],
        sub: "十年深耕聖地牙哥最受歡迎的社區：從 La Jolla 的海崖住宅、Mission Hills 的工藝美術風老宅，到 1031 投資配置，全程陪伴買家、賣家與投資人。",
        cta1: "預約諮詢",
        cta2: "檢視精選房源",
      },
      sections: {
        featuredEy: "精選房源",
        featuredH: "目前在售",
        soldEy: "成交記錄",
        soldH: "精選房源",
        bioEy: "認識 Jean",
        bioH: "十年專注，一片海岸，數百個家。",
        testEy: "客戶心聲",
        testH: "與我合作是怎樣的體驗",
        videoEy: "市場實錄",
        videoH: "市場簡報、社區導覽與賣家故事",
        guidesEy: "資源中心",
        guidesH: "買家、賣家與投資者指南",
        estEy: "您的房產價值",
        estH: "客製化估價，由 Jean 親自準備",
      },
    },
  },

  listings: [
    { id: "l1", status: "active", price: "$4,250,000", street: "1247 Coast Boulevard", area: "La Jolla, CA 92037", beds: 4, baths: 3.5, sqft: "3,210", lot: "0.21 ac", type: "Single Family", featured: true, ph: "Bluff-side modern with Pacific frontage" },
    { id: "l2", status: "active", price: "$2,895,000", street: "4502 Granada Avenue", area: "Mission Hills, CA 92103", beds: 4, baths: 3, sqft: "2,840", lot: "0.18 ac", type: "Craftsman", featured: true, ph: "Restored 1923 craftsman" },
    { id: "l3", status: "active", price: "$1,650,000", street: "812 Gravilla Street", area: "La Jolla, CA 92037", beds: 3, baths: 2, sqft: "1,790", lot: "0.12 ac", type: "Bungalow", featured: true, ph: "Walk-to-village bungalow" },
    { id: "l4", status: "active", price: "$5,980,000", street: "227 Ocean Front Walk", area: "Del Mar, CA 92014", beds: 5, baths: 4.5, sqft: "4,120", lot: "0.24 ac", type: "Coastal Estate" },
    { id: "l5", status: "active", price: "$1,295,000", street: "3408 Park Boulevard #401", area: "Hillcrest, CA 92103", beds: 2, baths: 2, sqft: "1,420", lot: "—", type: "Penthouse" },
    { id: "l6", status: "active", price: "$3,495,000", street: "5601 Calumet Avenue", area: "Bird Rock, CA 92037", beds: 4, baths: 3.5, sqft: "3,050", lot: "0.16 ac", type: "Contemporary" },

    // Real sold history from Zillow (jean's profile @JeanSD) — closings ≥ $1M
    // Total Zillow-verified sales: 197 (this list is the >$1M subset).
    // `side` = "list" (Jean represented seller) | "buy" | "both"
    // `videoId` = optional YouTube video tour (matches data.videos[].id)
    { id: "s1", status: "sold", price: "$1,340,000", street: "11149 Blythe Rd", area: "San Diego, CA 92126", soldDate: "2026 · 01", side: "buy", image: "uploads/house/11149 Blythe Rd.webp" },
    { id: "s2", status: "sold", price: "$2,050,000", street: "17134 Monterey Ridge Way", area: "San Diego, CA 92127", soldDate: "2025 · 11", side: "list", videoId: "dJWsjTBRoZs", image: "uploads/house/17134 Monterey Ridge Way.webp" },
    { id: "s3", status: "sold", price: "$1,240,000", street: "3145 Telaga Rd", area: "Carlsbad, CA 92010", soldDate: "2025 · 11", side: "buy", image: "uploads/house/3145 Telaga Rd.webp" },
    { id: "s4", status: "sold", price: "$1,500,000", street: "12666 Stone Canyon Rd", area: "Poway, CA 92064", soldDate: "2025 · 10", side: "buy", image: "uploads/house/12666 Stone Canyon Rd.webp" },
    { id: "s5", status: "sold", price: "$1,511,534", street: "14639 Dunleer Way", area: "San Diego, CA 92126", soldDate: "2025 · 09", side: "buy", image: "uploads/house/14639 Dunleer Way.webp" },
    { id: "s6", status: "sold", price: "$1,040,000", street: "8313 Hydra Ln", area: "San Diego, CA 92126", soldDate: "2025 · 08", side: "buy", image: "uploads/house/8313 Hydra Ln.webp" },
    { id: "s7", status: "sold", price: "$1,487,000", street: "13360 Russet Leaf Ln", area: "San Diego, CA 92129", soldDate: "2025 · 05", side: "list", image: "uploads/house/13360 Russet Leaf Ln.webp" },
    { id: "s8", status: "sold", price: "$1,085,000", street: "4563 Cleveland Ave", area: "San Diego, CA 92116", soldDate: "2025 · 05", side: "buy", image: "uploads/house/4563 Cleveland Ave.webp" },
    { id: "s9", status: "sold", price: "$2,530,000", street: "725 Henderson Ave", area: "Sunnyvale, CA 94086", soldDate: "2025 · 03", side: "list", image: "uploads/house/725 Henderson Ave.webp" },
    { id: "s10", status: "sold", price: "$2,650,000", street: "16208 Via Monterey", area: "Rancho Santa Fe, CA 92091", soldDate: "2025 · 01", side: "buy", image: "uploads/house/16208 Via Monterey.webp" },
    { id: "s11", status: "sold", price: "$1,080,000", street: "7155 Calabria Ct Unit D", area: "San Diego, CA 92122", soldDate: "2024 · 11", side: "list", videoId: "xig-8fQ3AjM", image: "uploads/house/7155 Calabria Ct Unit D.webp" },
    { id: "s12", status: "sold", price: "$1,250,000", street: "4814 Diane Ave", area: "San Diego, CA 92117", soldDate: "2024 · 10", side: "buy", image: "uploads/house/4814 Diane Ave.webp" },
    { id: "s13", status: "sold", price: "$1,495,000", street: "3251 Rancho Famosa", area: "Carlsbad, CA 92009", soldDate: "2024 · 10", side: "list", videoId: "l3FbdLmGV-c", image: "uploads/house/3251 Rancho Famosa.webp" },
    { id: "s14", status: "sold", price: "$1,215,000", street: "1720 Mission St Apt 17", area: "South Pasadena, CA 91030", soldDate: "2024 · 07", side: "buy", image: "uploads/house/1720 Mission St APT 17.webp" },
    { id: "s15", status: "sold", price: "$2,170,000", street: "12451 Carmel Pointe", area: "San Diego, CA 92130", soldDate: "2024 · 05", side: "buy", image: "uploads/house/12451 Carmel Pointe.webp" },
    { id: "s16", status: "sold", price: "$1,152,888", street: "7596 Tupelo Cv", area: "San Diego, CA 92126", soldDate: "2024 · 05", side: "buy", image: "uploads/house/7596 Tupelo Cv.webp" },
    { id: "s17", status: "sold", price: "$1,450,000", street: "11575 Phantom Ln", area: "San Diego, CA 92126", soldDate: "2024 · 04", side: "buy", image: "uploads/house/11575 Phantom Ln.webp" },
    { id: "s18", status: "sold", price: "$1,880,000", street: "6686 Torenia Trl", area: "San Diego, CA 92130", soldDate: "2024 · 02", side: "list", image: "uploads/house/6686 Torenia Trl.webp" },
    { id: "s19", status: "sold", price: "$1,671,167", street: "13060 Callcott Way", area: "San Diego, CA 92130", soldDate: "2023 · 09", side: "buy", image: "uploads/house/13060 Callcott Way.png" },
    { id: "s20", status: "sold", price: "$1,090,000", street: "16391 Veridian Cir", area: "San Diego, CA 92127", soldDate: "2023 · 08", side: "buy", image: "uploads/house/16391 Veridian Cir.webp" },
    { id: "s21", status: "sold", price: "$1,300,000", street: "1875 Gamay Ter", area: "Chula Vista, CA 91913", soldDate: "2023 · 07", side: "both", image: "uploads/house/1875 Gamay Ter.webp" },

    { id: "r1", status: "rent", price: "$8,500/mo", street: "612 Prospect Street", area: "La Jolla, CA 92037", beds: 3, baths: 2, sqft: "2,100", type: "Furnished" },
    { id: "r2", status: "rent", price: "$6,200/mo", street: "1108 Fort Stockton Drive", area: "Mission Hills, CA 92103", beds: 3, baths: 2, sqft: "1,840", type: "Long-term" },
  ],

  // Real client voices — first one (Yufan) is the homeowner; the rest are
  // verbatim Zillow reviews, lightly edited for grammar / length only.
  // Order matters: the home page shows the first three. Karen and Joanna L. lead.
  testimonials: [
    // Written in Chinese — `quoteZh` holds the original, `quote` the English
    // rendering. Attributed by initials, matching the convention below. These are
    // unsolicited written recommendations rather than collected star ratings, so
    // they are deliberately NOT counted in the aggregateRating JSON-LD in index.html.
    { name: "Karen", area: "Buyer & Seller · San Diego", initials: "K", rating: 5,
      areaZh: "買方與賣方 · 聖地牙哥",
      quote: "Buying and selling a home is one of life's major decisions, and I was fortunate to find an agent who is professional, honest and genuinely invested. From understanding what we needed, arranging showings and analysing the market, through negotiation, contract and closing — every stage showed real expertise. Whatever came up, she answered patiently and advised from our side of the table rather than simply pushing for a deal. What moved me most was her care: she had me prepare the necessary documents well in advance so nothing was left to the last minute. Her guidance gave me confidence in my decisions and took away a great deal of worry.",
      quoteZh: "買房、賣房是一件人生大事，而我很幸運遇到一位專業、誠信又用心的房屋仲介。從一開始了解需求、安排看屋、分析市場行情，到議價、簽約以及交屋，每一個環節都展現出高度的專業與豐富的經驗。無論遇到任何問題，都能耐心解答，並站在客戶的角度提供最合適的建議，而不是一味追求成交。最讓我感動的是，整個過程中 Jean 始終保持真誠、細心與負責任的態度，會讓我先把需要的文件提前準備好，才不會在最後一分鐘才處理。她的建議讓我的決定充滿信心，也減少了許多擔心與壓力。" },

    { name: "Joanna L.", area: "Buyer & Seller · San Diego", initials: "JL", rating: 5,
      areaZh: "買方與賣方 · 聖地牙哥",
      quote: "Jean is genuinely outstanding — we go to her for both buying and selling. She replies quickly and she knows her work. When we were buying, she asked whether I absolutely had to have that particular house; once I said yes, she told me not to worry and that she would deal with every complication herself. From offer accepted to closing was only 12 days, and that included a weekend. She cleared every obstacle to get us that home. An agent you can genuinely trust.",
      quoteZh: "Jean 真的很厲害，我們買房賣房都找她，回覆速度快而且專業。當初買房時，她問我是不是一定要買到那間房子，只要我回答說是，那所有的疑難雜症她都會幫我解決，要我不用擔心。我們從 offer 被接受到成交只有 12 天，這 12 天還包括週末兩天，她真的幫我們很快速排除萬難買到房子。很值得信賴的房仲。" },

    { name: "Yufan C.", area: "Buyer & Commercial Investor · National City + Sorrento Valley", initials: "YC", rating: 5,
      areaZh: "買方與商用不動產投資人 · National City + Sorrento Valley",
      quoteZh: "Jean 幫我在 National City 買了房子，後來我在 Sorrento Valley 的商用辦公室，買進和賣出也都由她全程協助。她非常注重細節，也始終把客戶的利益放在第一位。她的談判能力很強，幫我談到低於開價的好條件。跟她合作很輕鬆，而且不論我是買方還是賣方，她都一樣全力以赴。我很喜歡跟她合作，也介紹了很多朋友給她，每一位都讚不絕口。",
      quote: "Jean helped me buy a home in National City and then guided me through both the purchase and sale of my commercial office space in Sorrento Valley. She is a real detail person, and she consistently puts her client's interests first. She is also an excellent negotiator — she got me the best deal possible, below asking price. Easy to work with, and she fights just as hard whether I'm on the buyer or the seller side. I love working with her, and I've recommended her to many friends — every one of them has loved working with her too." },
    { name: "Y. Family", area: "Five-time client · Rancho Peñasquitos", initials: "YF", rating: 5,
      areaZh: "五度合作客戶 · Rancho Peñasquitos",
      quoteZh: "Jean 的專業知識非常豐富，也極有耐心。她親自為我們家處理過五筆房地產交易，靠著她的專業與談判能力，我們設定的目標每一次都達成了。她是我唯一信任的房仲。",
      quote: "Jean is incredibly knowledgeable and endlessly patient. She has personally handled five real estate transactions for my family — and thanks to her expertise and strong negotiation, we've reached every goal we set. She's the only agent I trust." },
    { name: "ShianRu K.", area: "Seller · Kearny Mesa", initials: "SK", rating: 5,
      areaZh: "賣方 · Kearny Mesa",
      quoteZh: "Jean 對工作充滿熱忱，每一個步驟都會仔細說明。她非常專業、注重細節，合約條款一項一項帶著我看過。有 Jean 在旁邊，你會很清楚自己簽的是什麼。",
      quote: "Jean is full of passion and explains every step along the way. She's deeply professional, detail-oriented, and walked me through every contract item line by line. With Jean by your side, you understand exactly what you're signing." },
    { name: "Lisa C.", area: "Property Owner · Diamond Bar", initials: "LC", rating: 5,
      areaZh: "屋主 · Diamond Bar",
      quoteZh: "Jean 是一位非常聰明的房仲，有耐心、有同理心、做事有效率，在房地產與物業管理上都很專精。她既有專業資歷，也有像家人一樣的真心。我真的把她當成自己人。",
      quote: "Jean is a remarkably smart agent — patient, compassionate, efficient, and deeply expert in real estate and property management. She has the credentials and the heart of a true family member. I feel like she's one of my own." },
    { name: "Joan B.", area: "Referring agent · 92126", initials: "JB", rating: 5,
      areaZh: "同業轉介經紀 · 92126",
      quoteZh: "我有客戶要搬到聖地牙哥，必須在開學前找到房子。他們聯絡 Jean 之後，對她的用心與細緻照顧非常滿意。Jean 是那種我願意把自己客戶交給她的房仲。",
      quote: "I had clients relocate to San Diego who needed a home before the school year started. After they contacted Jean, they couldn't have been more pleased with the care and attention she gave them. Jean is the kind of agent I trust to send my own clients to." },
    { name: "Long-Term Owner", area: "Property management · 5 years", initials: "LO", rating: 5,
      nameZh: "長期委託屋主", areaZh: "物業管理 · 五年",
      quoteZh: "Jean 真的很棒，專業知識豐富，又親切、又肯幫忙。我的公寓交給她管理五年了。她總是誠實告訴我實際狀況，把我的房子當成自己的在照顧。",
      quote: "Jean is absolutely amazing — extraordinarily knowledgeable, kind, and helpful. My condo has been managed by her for five years. She's always honest about the situation, and she takes care of my place as if it were her own." },
    { name: "Carmel Valley Landlord", area: "Property management since 2011", initials: "CV", rating: 5,
      nameZh: "Carmel Valley 房東", areaZh: "自 2011 年起委託管理",
      quoteZh: "Jean 從 2011 年就開始管理我們的房子，合作起來非常愉快。她對房地產市場的了解與專業都沒話說。我們甚至考慮再多買幾間，好讓她一起管理。",
      quote: "Jean has managed our property since 2011 and has been a delight to work with. She's deeply knowledgeable and professional in the real estate market. We're thinking about buying more properties just so she can manage them too." },

    { name: "Richard L.", area: "Community recommendation · San Diego", initials: "RL", rating: 5,
      areaZh: "社群推薦 · 聖地牙哥",
      quote: "I genuinely believe Jean is an outstanding agent — full of passion for her work, and someone who always puts the client's real, practical needs first.",
      quoteZh: "我真心覺得 Jean 是一位對工作充滿熱情，而且永遠以顧客實用需求為最優先考量的優秀房屋仲介。" },
  ],

  // Real videos from Jean's YouTube channel (@soldbyjean)
  // group: "tour" = listing/property tours, "voiceover" = client voice-over,
  // "testimonial" = agent testimonial. `start` = optional start-time in seconds.
  videos: [
    // Listing songs — an original song written for each listing, produced as a short
    // video. Jean's signature marketing piece; `vertical` marks YouTube Shorts.
    { id: "UautKSZDMUY", title: "Song for 3009 Union Street, #7", category: "Listing Song", group: "song", feature: true },
    { id: "5gXJIrhAGag", title: "Song for 12678 Carmel Country Rd, #27", category: "Listing Song", group: "song", vertical: true },

    { id: "HiFBssXmPUY", title: "Torrey Highlands — One of San Diego's Best Communities", category: "Client Voice-Over", group: "voiceover", start: 14, feature: true },
    { id: "mtOfVFMWAA4", title: "Tuscany Place — Rolando / College Area", category: "Client Voice-Over", group: "voiceover", start: 13 },
    { id: "xig-8fQ3AjM", title: "Dream Home in UTC — 7155 Calabria Ct, Unit D", category: "Listing Tour", group: "tour" },
    { id: "l3FbdLmGV-c", title: "Dream Home in Carlsbad — 3251 Rancho Famosa", category: "Listing Tour", group: "tour", start: 223 },
    { id: "dJWsjTBRoZs", title: "Dream Home in 4S Ranch — 17134 Monterey Ridge Way", category: "Listing Tour", group: "tour", start: 16 },
    { id: "3zFIAsaw6cg", title: "Escondido, CA — July 4th", category: "Neighborhood", group: "tour" },
    { id: "H4XkLDxTEPw", title: "Why you should hire Jean as your agent", category: "Agent Testimonial", group: "testimonial" },
    { id: "x0SCTO79CTY", title: "Why You Should Hire Jean as your Agent", category: "Agent Testimonial", group: "testimonial" },
  ],

  // Articles now live in articles-content.js (window.JR_ARTICLES) so that the SPA
  // route and the generated static /articles/*.html pages share one source of truth.
  // `credit` is required by the Unsplash license — display photographer name + link.

  guides: [
    { num: "01", title: "The Buyer's Guide", titleZh: "買家指南", descZh: "從貸款預審到拿到鑰匙，一套十二步驟的完整流程，專為聖地牙哥競爭激烈的沿海市場而寫。", ctaZh: "開啟買家指南", desc: "From pre-approval to keys in hand — a measured, twelve-step framework for buying in San Diego's competitive coastal market.", cta: "Open Buyer Guide" },
    { num: "02", title: "The Seller's Guide", titleZh: "賣家指南", descZh: "定價、準備、攝影、行銷與談判。十年、240 筆以上委託銷售累積出來的完整賣方作業手冊。", ctaZh: "開啟賣家指南", desc: "Pricing, preparation, photography, marketing and negotiation. The full seller playbook, refined over a decade and 240+ closed listings.", cta: "Open Seller Guide" },
    { num: "03", title: "1031 Exchange Primer", titleZh: "1031 交換入門", descZh: "識別期、合格中介與替代房產策略，寫給想遞延資本利得稅的投資人。", ctaZh: "開啟 1031 指南", desc: "Identification windows, qualified intermediaries and replacement property strategy for investors looking to defer capital gains.", cta: "Open 1031 Guide" },
  ],

  // Seasonal PDF guides, personalised with Jean's branding and hosted for download.
  // These are licensed market reports — we link the file and list its contents, but the
  // copy inside them is not reproduced as site content. Replace each quarter: drop the
  // new PDF in uploads/guides/, update `file`, `edition`, `size` and `updated`.
  marketGuides: [
    {
      id: "buyer",
      audience: "For Buyers",
      audienceZh: "買家專用",
      title: "Things to Consider When Buying a Home",
      titleZh: "購屋前該考慮的事",
      edition: "Summer 2026 Edition",
      editionZh: "2026 夏季版",
      file: "uploads/guides/things-to-consider-when-buying-a-home-summer-2026.pdf",
      pages: 20,
      size: "3.0 MB",
      updated: "2026-07",
      desc: "A seasonal briefing on rates, inventory and new construction — what is actually moving the market you're about to buy in, with the numbers behind it.",
      descZh: "針對利率、庫存與新建案的季度市場簡報，用數據說明您即將進入的市場，現在是什麼狀況。",
      contents: [
        "You Can't Control Mortgage Rates, But You Can Control This",
        "How Changing Mortgage Rates Affect Your Future Monthly Payment",
        "More Options for Your Search",
        "Newly Built Home Prices Hit a 5-Year Low",
        "Should You Buy an Existing Home or a Newly Built One?",
        "3 Things That Are Not Going To Happen in Today's Market",
        "The Top Two Buyer Mistakes Today",
        "Things To Avoid After Applying for a Mortgage",
        "Why You Need To Work with a Real Estate Agent",
      ],
      // The PDF itself is English; these let a Chinese reader judge whether it is
      // worth downloading. `pdfLangNote` below sets that expectation.
      contentsZh: [
        "房貸利率你控制不了，但這件事可以",
        "利率變動如何影響你未來的月付金",
        "可選的物件變多了",
        "新成屋價格創五年新低",
        "該買中古屋，還是新成屋？",
        "今年市場不會發生的三件事",
        "現在買家最常犯的兩個錯誤",
        "申請房貸後，千萬別做的事",
        "為什麼你需要一位房仲",
      ],
    },
    {
      id: "seller",
      audience: "For Sellers",
      audienceZh: "賣家專用",
      title: "Things to Consider When Selling Your House",
      titleZh: "售屋前該考慮的事",
      edition: "Summer 2026 Edition",
      editionZh: "2026 夏季版",
      file: "uploads/guides/things-to-consider-when-selling-your-house-summer-2026.pdf",
      pages: 20,
      size: "5.0 MB",
      updated: "2026-07",
      desc: "Pricing, staging, equity and the upgrades that actually return their cost — the seller-side briefing for this season's market.",
      descZh: "定價、佈置、房屋淨值，以及真正能回收成本的翻修項目：本季市場的賣方簡報。",
      contents: [
        "What Every Homeowner Needs To Know About Selling Now",
        "The Secret To Selling Fast, No Matter the Market",
        "Why Staging Your House Could Pay Off This Summer",
        "Home Upgrades That Actually Pay You Back When You Sell",
        "How Home Equity Could Change Everything About Your Move",
        "Your Equity Could Turn You into an All-Cash Buyer",
        "A Checklist for Selling Your House",
        "The #1 Regret Sellers Have When They Don't Use an Agent",
      ],
      contentsZh: [
        "現在賣房，每位屋主都該知道的事",
        "不論市況如何，快速成交的關鍵",
        "為什麼今年夏天佈置房屋特別值得",
        "賣房時，真正能回本的裝修項目",
        "房屋淨值如何改變你的換屋計畫",
        "你的房屋淨值，可能讓你成為全現金買家",
        "賣房前的檢查清單",
        "沒找房仲的賣家，最後悔的一件事",
      ],
    },
  ],

  process: [
    { n: "I", t: "Discovery", tZh: "了解需求", dZh: "一次不趕時間的初次對話：您的目標、時程，以及值得您花心思的區域。", d: "An unhurried first conversation — your goals, timeline, and the neighborhoods worth your attention." },
    { n: "II", t: "Strategy", tZh: "擬定策略", dZh: "一份書面計畫：定價區間或預算範圍、準備事項，以及 90 天的行銷或看屋節奏。", d: "A written plan: pricing band or budget envelope, preparation steps, and a 90-day campaign or search schedule." },
    { n: "III", t: "Execution", tZh: "實際執行", dZh: "攝影、佈置建議、MLS 上架、私人帶看；買方端則是精選看屋行程與出價策略。", d: "Photography, staging consult, MLS launch, private showings — or curated property tours and offer architecture." },
    { n: "IV", t: "Close", tZh: "完成交割", dZh: "驗屋安排、貸款進度追蹤、合約談判，以及親自完成的履約保證交接。", d: "Inspection orchestration, financing oversight, contract negotiation, and a personal escrow handoff." },
  ],

  // Grouped for the /faq page. `g` maps to a section heading there; the first four
  // entries are mirrored into the FAQPage JSON-LD in index.html — keep them in sync.
  faqs: [
    { g: "working", q: "What areas of San Diego do you focus on?", qZh: "聖地牙哥哪些區域是您的守備範圍？", aZh: "我主要經營沿海一帶：La Jolla、Bird Rock、Pacific Beach、Mission Beach、Point Loma、Del Mar，以及市區核心的 Mission Hills、Hillcrest、North Park 與 South Park。北郡的規劃社區我也熟悉：Carmel Valley、Pacific Highlands Ranch、4S Ranch、Del Sur、Carlsbad 與 Rancho Santa Fe。如果您要找的區域超出這個範圍，我會替您轉介信任的同業，而不是勉強接下。", a: "I work the coastal corridor primarily — La Jolla, Bird Rock, Pacific Beach, Mission Beach, Point Loma, Del Mar — along with the inner urban neighborhoods of Mission Hills, Hillcrest, North Park and South Park. I also work the North County master-planned communities: Carmel Valley, Pacific Highlands Ranch, 4S Ranch, Del Sur, Carlsbad and Rancho Santa Fe. If you're looking outside this footprint, I'm happy to refer you to a vetted colleague rather than stretch beyond my expertise." },
    { g: "working", q: "Do you work with first-time buyers?", qZh: "您接首購族嗎？", aZh: "經常。我的買方客戶大約三分之一是第一次買房。我會多留一些時間做說明、介紹貸款專員，並用白話帶您走過每一項條件與但書。", a: "Frequently. About a third of my buyer clients are buying their first home. I budget extra time for education, lender introductions, and walking you through every contingency without jargon." },
    { g: "working", q: "Do you offer services in Mandarin?", qZh: "可以用中文溝通嗎？", aZh: "可以。我約有四成客戶偏好以中文洽談。我能以英語、國語與台語溝通，文件也可以中英對照說明。", a: "I do. About 40% of my clients prefer to conduct business in Mandarin. I work in English, Mandarin and Taiwanese, and all documents can be reviewed in either language." },
    { g: "working", q: "How do you charge, and who pays your commission?", qZh: "佣金怎麼算？由誰支付？", aZh: "佣金可以談，而且一定會在我開始作業前以書面約定清楚，並沒有所謂的公定價。依 2024 年的產業和解結果，買方委託是您與我之間另行簽署的書面協議；實際由賣方支付、由您支付，或雙方分攤，取決於該筆交易怎麼談。在您簽任何文件之前，我會先把這筆交易的實際數字說明清楚。", a: "Commission is negotiable and always set out in writing before I do any work — there is no standard or fixed rate. Following the 2024 industry settlement, buyer representation is agreed directly between you and me in a written buyer agreement, and compensation may be paid by the seller, by you, or split, depending on what we negotiate in the transaction. I'll walk you through the specific numbers on your deal before you sign anything." },

    { g: "selling", q: "Why is the property estimator a form rather than an instant number?", qZh: "為什麼估價要填表，而不是直接給數字？", aZh: "自動估價模型常常抓不準聖地牙哥的微型市場。以 Zillow 自己公布的數據為例，未上市房屋的誤差中位數約 7.5%，換算到一間 200 萬美元的房子就是約 15 萬美元。與其給您一個可能誤導的數字，我寧可依照房屋實際的屋況、景觀與裝修，親自做一份 CMA，通常 48 小時內完成。", a: "Automated valuation models routinely miss San Diego's micro-markets. Zillow's own published median error rate is about 7.5% for off-market homes — roughly $150,000 on a $2 million property. Rather than give you a number that may mislead, I'll prepare a personal CMA, usually within 48 hours, based on the actual condition, view and finishes of your home." },
    { g: "selling", q: "How long does it take to sell a home in San Diego?", qZh: "在聖地牙哥賣一間房子要多久？", aZh: "2026 年 6 月全郡的市場停留天數中位數是 18 天，但各區差異很大，La Jolla 大約是 37 天。上市前的準備通常抓四週，接受出價後的交割約 30 天。從第一次洽談到完成交割，比較實際的估計是八到十週。", a: "As of June 2026 the county median was 18 days on market, though that varies enormously by submarket — La Jolla has been running closer to 37 days. Add about four weeks of preparation before listing, and roughly 30 days of escrow after you accept an offer. A realistic end-to-end plan is eight to ten weeks from first conversation to closing." },
    { g: "selling", q: "What is a listing song?", qZh: "什麼是房源主題曲？", aZh: "我接下的每一套房源，都會為那間房子量身創作一首原創歌曲，製作成短影片放在 YouTube 與社群上。不是配上罐頭音樂的幻燈片，而是真的為那間房子寫的一首歌。這項服務包含在委託內容裡，不另外收費，而它帶來的關注與轉發，是一般房源影片做不到的。", a: "For every listing I take, I commission an original song written specifically about that property and produce it as a short video for YouTube and social media. Not a stock music bed under a slideshow — an actual song about your actual house. It is included in my listing package at no extra cost, and it earns the kind of attention and sharing that ordinary listing video does not." },
    { g: "selling", q: "Should I make repairs before listing?", qZh: "上市前需要先整修嗎？", aZh: "小修繕要，大裝修通常不必。建議抓房屋價值的 1% 到 3%，重點放在油漆、深度清潔、庭園整理與佈置。上市前先自己驗一次屋也很值得：這樣意外會變成您在自己的時間表上做的決定，而不是交易進行中被對方拿來殺價的籌碼。", a: "Small ones, yes; large renovations, usually not. Plan on 1–3% of the home's value, weighted toward paint, deep cleaning, landscaping and staging. A pre-listing inspection is worth doing so that surprises become decisions you make on your own timeline rather than repair requests made under mid-escrow pressure." },

    { g: "buying", q: "What is Mello-Roos and will I have to pay it?", qZh: "什麼是 Mello-Roos？我需要繳嗎？", aZh: "Mello-Roos 是加州較新開發社區用來支應公共建設的特別稅。在 4S Ranch、Del Sur、Pacific Highlands Ranch 這類新規劃社區，每年常見落在 1,000 到 5,000 美元以上；Carmel Valley 較早期的社區則往往完全沒有。它是逐筆地號認定的，會併入房屋稅代收，也會直接影響您能貸到多少，所以下斡旋前務必先查清楚。", a: "Mello-Roos is a special tax funding infrastructure in newer California developments. In San Diego's newer master-planned communities — 4S Ranch, Del Sur, Pacific Highlands Ranch — it commonly runs $1,000 to $5,000+ per year, while older Carmel Valley tracts often have none. It is parcel-specific, it is escrowed with your property tax, and it directly reduces how much home you qualify for, so check it before you write an offer." },
    { g: "buying", q: "Can I buy in San Diego from overseas?", qZh: "人在海外可以買聖地牙哥的房子嗎？", aZh: "可以。美國購屋沒有公民、居留或簽證的限制；即使沒有美國信用紀錄或社會安全碼，也能透過外國人專案或 DSCR 貸款取得融資，頭期款通常是兩成到三成。要提前規劃的是日後出售時的 FIRPTA 預扣，以及美國遺產稅——非居民的免稅額只有六萬美元。", a: "Yes. There is no citizenship, residency or visa requirement to buy US property, and financing is available without a US credit history or Social Security number through foreign national and DSCR loan programs, typically at 20–30% down. Plan ahead for FIRPTA withholding when you eventually sell, and for US estate tax exposure, which for non-residents begins above just $60,000 of US assets." },

    { g: "investing", q: "I'm an investor considering a 1031 exchange. Can you help?", qZh: "我是投資人，正在考慮 1031 交換，您能協助嗎？", aZh: "可以，這正是我的專長之一。獨立住宅、小型多戶到 DST 替代標的，我都實際完成過，也長期與幾位值得信賴的合格中介合作，24 小時內就能介入。最關鍵的一點是：合格中介必須在您的房子交割之前就位；一旦款項先進到您手上，這筆交換就救不回來了。", a: "Yes — this is a focus of my practice. I've closed exchanges across single-family, small multifamily and DST replacement structures, and I work closely with several trusted qualified intermediaries who can step in within 24 hours. The critical thing is engaging the intermediary before your sale closes: if the proceeds touch your hands, the exchange cannot be repaired." },
    { g: "investing", q: "Is Section 1031 still available in 2026?", qZh: "2026 年還能做 1031 交換嗎？", aZh: "可以。2025 年 7 月 4 日簽署生效的 One Big Beautiful Bill Act 完整保留了 1031 條款，先前提案的 50 萬美元遞延上限並未入法。45 天識別期、180 天交割期與合格中介的角色都維持不變。", a: "Yes. The One Big Beautiful Bill Act, signed 4 July 2025, left Section 1031 fully intact — the proposed $500,000 deferral cap did not become law. The 45-day identification period, the 180-day exchange period and the qualified intermediary requirement are all unchanged." },

    // Added for search and answer-engine coverage — these are the questions with the
    // highest intent that the site previously had no answer for. Figures carry an
    // "as of" where they move; verify before quoting them to a client.
    { g: "working", q: "Do I have to sign an agreement before you show me homes?", qZh: "看房前一定要先簽約嗎？", aZh: "是的。自 2024 年產業和解後，使用 MLS 的經紀人在帶看之前，必須先與買方簽署書面委託。這不是陷阱，內容也完全可以談：協議會寫明我提供什麼服務、期間多長、報酬怎麼算。我也很樂意從單一物件或短期的委託開始，讓您先看看我的做事方式。", a: "Yes — since the 2024 NAR settlement, agents using the MLS must have a written buyer agreement in place before touring a home with you. It is not a trap and it is fully negotiable: it states what I do, how long it runs, and exactly how I'm paid. I'm happy to start with a short, single-property or limited-term agreement so you can see how I work before committing to anything longer." },

    { g: "buying", q: "How much do I need for a down payment in San Diego?", qZh: "在聖地牙哥買房，頭期款要準備多少？", aZh: "比多數人想像的少。一般貸款最低約 3%，FHA 為 3.5%，但低於兩成就需要負擔房貸保險。加州 CalHFA 的 MyHome 方案另外提供最高相當於房價 3.5% 的零利率、可遞延第二順位貸款，用於頭期款與過戶費用；Dream For All 則曾提供最高兩成（上限 15 萬美元）的增值共享貸款。各郡設有所得上限，且每年一月調整，請以最新公告為準。", a: "Less than most people assume. Conventional loans start around 3% down and FHA at 3.5%, though under 20% means paying mortgage insurance. California's CalHFA MyHome program adds a deferred, zero-interest second loan of up to 3.5% of the price for down payment and closing costs, and the Dream For All shared-appreciation program has offered up to 20% (capped at $150,000) in exchange for a share of future appreciation. Income caps apply by county and CalHFA revises them each January, so check current limits before planning around them." },

    { g: "buying", q: "What are closing costs for a buyer in San Diego?", qZh: "在聖地牙哥買房，過戶費用大概多少？", aZh: "通常是房價的 2% 到 5%。內容包括貸款相關費用（開辦、鑑價、核貸、信用調查）、貸方產權保險，以及您負擔的履約保證費用——聖地牙哥常見的算法是每 1,000 美元約 2 美元再加一筆基本費，買賣雙方各付各的。另外要單獨預留補充房屋稅：它在交割後 3 到 9 個月才寄來，而且不會由貸款方代收。", a: "Typically 2%–5% of the purchase price. That covers lender charges (origination, appraisal, underwriting, credit), the lender's title policy, and your share of escrow — San Diego escrow commonly runs about $2 per $1,000 of price plus a base fee, with buyer and seller each paying their own. Budget separately for the supplemental property tax bill that arrives 3–9 months after closing, which your lender does not escrow for." },

    { g: "buying", q: "Can I still get homeowners insurance in San Diego?", qZh: "聖地牙哥現在還買得到房屋保險嗎？", aZh: "買得到，但比以前費工，建議提早處理。聖地牙哥的保費近來大約落在每年 1,500 到 2,000 美元，視保額與地點而定；高野火風險區的保險公司持續退出市場，全郡加入加州 FAIR Plan 的件數也因此增加。沿海的 La Jolla、Pacific Beach 與內陸的 Poway、Ramona，價格結構完全不同。請在驗屋條件期內就取得正式報價，不要拖到之後——有些物件真正決定成交與否的，是保不保得到，而不是保費多少。", a: "Yes, but it takes more work than it used to and you should start early. Average San Diego premiums have been running roughly $1,500–$2,000 a year depending on coverage and location, and carriers have pulled back in higher fire-risk areas — enrollment in California's FAIR Plan has grown across the county as a result. Coastal La Jolla and Pacific Beach price very differently from inland Poway or Ramona. Get a real quote during your inspection contingency, not after: on some properties insurability, not price, is the thing that decides whether the deal works." },

    { g: "buying", q: "Do I need earthquake or flood insurance in San Diego?", qZh: "在聖地牙哥需要買地震險或洪水險嗎？", aZh: "兩者都不包含在一般房屋保險裡。地震險是另外的保單，費用不低，以聖地牙哥中位數房價來說常見落在每年數千美元；多數屋主會衡量自付額與自有權益後再決定，而不是一律投保。洪水險同樣獨立，而且比以前更需要注意：FEMA 更新後的洪泛區圖把不少沿海物件劃入較高風險區，只要落在區內，貸款方就會要求投保。", a: "Neither is included in a standard homeowners policy. Earthquake coverage is a separate policy and is not cheap — often in the low thousands per year on a median-priced San Diego home — and many owners weigh it against their deductible and equity rather than buying automatically. Flood is separate too, and matters more than it used to: updated FEMA maps have moved a number of coastal San Diego properties into higher-risk categories, and if your property sits in one, your lender will require flood coverage." },

    { g: "selling", q: "What are closing costs when I sell in San Diego?", qZh: "在聖地牙哥賣房，過戶費用大概多少？", aZh: "整體大約抓售價的 6% 到 8%。其中最大一筆是經紀報酬，可以談，並會事先書面約定。此外，加州賣方習慣負擔文件移轉稅（約每 1,000 美元 1.1 美元）、買方的產權保險、自己那部分的履約保證費用，以及按比例分攤的房屋稅與管理費。我會在上市前給每位賣方一份書面淨收益試算，讓交割時的數字不會是意外。", a: "Plan on roughly 6%–8% of the sale price all in. The largest line is agent compensation, which is negotiable and agreed in writing up front. Beyond that, California sellers customarily pay the documentary transfer tax at about $1.10 per $1,000 of price, the buyer's owner's title policy, their own escrow share, and any county or city transfer taxes, plus prorated taxes and HOA dues. I give every seller a written net-proceeds estimate before we list, so the number at closing is not a surprise." },

    { g: "investing", q: "Can I add an ADU, and can I sell it separately?", qZh: "可以加蓋 ADU 嗎？可以單獨出售嗎？", aZh: "聖地牙哥市的所有住宅分區都允許 ADU，且不要求屋主自住，因此可以出租；獨立式 ADU 最大可到 1,200 平方英尺。單獨出售是新開放的：聖地牙哥郡實施 AB 1033 的條例已於 2026 年 4 月 4 日生效，ADU 可以用區分所有權（condominium）方式出售。但這並非自動適用，需要登記區分所有權計畫、獨立水電錶，並依 Davis-Stirling 法成立管理組織。如果您加蓋的目的包含日後轉售，值得先做完整評估。", a: "ADUs are permitted in all residential zones in the City of San Diego, owner-occupancy is not required so you can rent it out, and detached units can run up to 1,200 square feet. Selling one separately is newly possible: San Diego County adopted an ordinance implementing AB 1033 that took effect 4 April 2026, allowing ADUs to be sold as condominiums. It is not automatic — it requires recording a condominium plan, independent utility metering, and creating an HOA under the Davis-Stirling Act. Worth real analysis before you build with resale in mind." },

    { g: "investing", q: "I'm inheriting my parents' home — will the property taxes go up?", qZh: "繼承父母的房子，房屋稅會變高嗎？", aZh: "通常會，而且可能差很多。Proposition 19 大幅限縮了原本的父母子女免重估規定：現在只適用於父母的主要自住宅，且子女必須在一年內將它作為自己的主要住所，免重估額度上限則是原課稅價值再加上一筆逐年調整的金額——2025 年 2 月 16 日至 2027 年 2 月 15 日之間為 1,044,586 美元。出租房、度假屋與投資性房產完全不適用，因此一間持有多年、Prop 13 課稅基礎很低的家族房產，在移轉時可能被重估到市價。請務必在移轉之前就諮詢遺產律師，而不是之後。", a: "Usually yes, and often by a lot. Proposition 19 narrowed the old parent-child exclusion sharply. It now applies only to the parent's principal residence, only if the child makes it their own primary residence within one year, and only up to the prior taxable value plus an indexed amount — $1,044,586 for transfers between 16 February 2025 and 15 February 2027. Rentals, vacation homes and investment property no longer qualify at all, so a long-held family property with a very low Prop 13 basis can be reassessed to market value on transfer. Talk to an estate attorney before the transfer, not after." },
  ],
};
