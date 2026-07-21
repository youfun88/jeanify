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
      nav: { home: "Home", listings: "Listings", videos: "Videos", about: "About", articles: "Articles", guides: "Guides", faq: "FAQ", exchange: "1031 Exchange", contact: "Contact" },
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
      nav: { home: "首頁", listings: "房源", videos: "影片", about: "關於", articles: "專欄", guides: "指南", faq: "常見問題", exchange: "1031 交換", contact: "聯絡" },
      hero: {
        eyebrow: "聖地亞哥 · 始於 2015",
        h1: ["以專業態度", "服務加州海岸生活"],
        sub: "十年深耕聖地亞哥最受歡迎的社區——從 La Jolla 海崖豪宅到 Mission Hills 工藝風住宅，再到 1031 投資組合，全程陪伴買家、賣家與投資人。",
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
        estH: "客製化估值，親自為您準備",
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
      quote: "Buying and selling a home is one of life's major decisions, and I was fortunate to find an agent who is professional, honest and genuinely invested. From understanding what we needed, arranging showings and analysing the market, through negotiation, contract and closing — every stage showed real expertise. Whatever came up, she answered patiently and advised from our side of the table rather than simply pushing for a deal. What moved me most was her care: she had me prepare the necessary documents well in advance so nothing was left to the last minute. Her guidance gave me confidence in my decisions and took away a great deal of worry.",
      quoteZh: "買房、賣房是一件人生大事，而我很幸運遇到一位專業、誠信又用心的房屋仲介。從一開始了解需求、安排看屋、分析市場行情，到議價、簽約以及交屋，每一個環節都展現出高度的專業與豐富的經驗。無論遇到任何問題，都能耐心解答，並站在客戶的角度提供最合適的建議，而不是一味追求成交。最讓我感動的是，整個過程中 Jean 始終保持真誠、細心與負責任的態度，會讓我先把需要的文件提前準備好，才不會在最後一分鐘才處理。她的建議讓我的決定充滿信心，也減少了許多擔心與壓力。" },

    { name: "Joanna L.", area: "Buyer & Seller · San Diego", initials: "JL", rating: 5,
      quote: "Jean is genuinely outstanding — we go to her for both buying and selling. She replies quickly and she knows her work. When we were buying, she asked whether I absolutely had to have that particular house; once I said yes, she told me not to worry and that she would deal with every complication herself. From offer accepted to closing was only 12 days, and that included a weekend. She cleared every obstacle to get us that home. An agent you can genuinely trust.",
      quoteZh: "Jean 真的很厲害，我們買房賣房都找她，回覆速度快而且專業。當初買房時，她問我是不是一定要買到那間房子，只要我回答說是，那所有的疑難雜症她都會幫我解決，要我不用擔心。我們從 offer 被接受到成交只有 12 天，這 12 天還包括週末兩天，她真的幫我們很快速排除萬難買到房子。很值得信賴的房仲。" },

    { name: "Yufan C.", area: "Buyer & Commercial Investor · National City + Sorrento Valley", initials: "YC", rating: 5,
      quote: "Jean helped me buy a home in National City and then guided me through both the purchase and sale of my commercial office space in Sorrento Valley. She is a real detail person, and she consistently puts her client's interests first. She is also an excellent negotiator — she got me the best deal possible, below asking price. Easy to work with, and she fights just as hard whether I'm on the buyer or the seller side. I love working with her, and I've recommended her to many friends — every one of them has loved working with her too." },
    { name: "Y. Family", area: "Five-time client · Rancho Peñasquitos", initials: "YF", rating: 5,
      quote: "Jean is incredibly knowledgeable and endlessly patient. She has personally handled five real estate transactions for my family — and thanks to her expertise and strong negotiation, we've reached every goal we set. She's the only agent I trust." },
    { name: "ShianRu K.", area: "Seller · Kearny Mesa", initials: "SK", rating: 5,
      quote: "Jean is full of passion and explains every step along the way. She's deeply professional, detail-oriented, and walked me through every contract item line by line. With Jean by your side, you understand exactly what you're signing." },
    { name: "Lisa C.", area: "Property Owner · Diamond Bar", initials: "LC", rating: 5,
      quote: "Jean is a remarkably smart agent — patient, compassionate, efficient, and deeply expert in real estate and property management. She has the credentials and the heart of a true family member. I feel like she's one of my own." },
    { name: "Joan B.", area: "Referring agent · 92126", initials: "JB", rating: 5,
      quote: "I had clients relocate to San Diego who needed a home before the school year started. After they contacted Jean, they couldn't have been more pleased with the care and attention she gave them. Jean is the kind of agent I trust to send my own clients to." },
    { name: "Long-Term Owner", area: "Property management · 5 years", initials: "LO", rating: 5,
      quote: "Jean is absolutely amazing — extraordinarily knowledgeable, kind, and helpful. My condo has been managed by her for five years. She's always honest about the situation, and she takes care of my place as if it were her own." },
    { name: "Carmel Valley Landlord", area: "Property management since 2011", initials: "CV", rating: 5,
      quote: "Jean has managed our property since 2011 and has been a delight to work with. She's deeply knowledgeable and professional in the real estate market. We're thinking about buying more properties just so she can manage them too." },

    { name: "Richard L.", area: "Community recommendation · San Diego", initials: "RL", rating: 5,
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
    { num: "01", title: "The Buyer's Guide", desc: "From pre-approval to keys in hand — a measured, twelve-step framework for buying in San Diego's competitive coastal market.", cta: "Open Buyer Guide" },
    { num: "02", title: "The Seller's Guide", desc: "Pricing, preparation, photography, marketing and negotiation. The full seller playbook, refined over a decade and 240+ closed listings.", cta: "Open Seller Guide" },
    { num: "03", title: "1031 Exchange Primer", desc: "Identification windows, qualified intermediaries and replacement property strategy for investors looking to defer capital gains.", cta: "Open 1031 Guide" },
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
      descZh: "針對利率、庫存與新建案的季度市場簡報 —— 用數據說明您即將進入的市場正在發生什麼。",
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
      descZh: "定價、佈置、房屋淨值，以及真正能回收成本的翻修項目 —— 本季市場的賣方簡報。",
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
    },
  ],

  process: [
    { n: "I", t: "Discovery", d: "An unhurried first conversation — your goals, timeline, and the neighborhoods worth your attention." },
    { n: "II", t: "Strategy", d: "A written plan: pricing band or budget envelope, preparation steps, and a 90-day campaign or search schedule." },
    { n: "III", t: "Execution", d: "Photography, staging consult, MLS launch, private showings — or curated property tours and offer architecture." },
    { n: "IV", t: "Close", d: "Inspection orchestration, financing oversight, contract negotiation, and a personal escrow handoff." },
  ],

  // Grouped for the /faq page. `g` maps to a section heading there; the first four
  // entries are mirrored into the FAQPage JSON-LD in index.html — keep them in sync.
  faqs: [
    { g: "working", q: "What areas of San Diego do you focus on?", a: "I work the coastal corridor primarily — La Jolla, Bird Rock, Pacific Beach, Mission Beach, Point Loma, Del Mar — along with the inner urban neighborhoods of Mission Hills, Hillcrest, North Park and South Park. I also work the North County master-planned communities: Carmel Valley, Pacific Highlands Ranch, 4S Ranch, Del Sur, Carlsbad and Rancho Santa Fe. If you're looking outside this footprint, I'm happy to refer you to a vetted colleague rather than stretch beyond my expertise." },
    { g: "working", q: "Do you work with first-time buyers?", a: "Frequently. About a third of my buyer clients are buying their first home. I budget extra time for education, lender introductions, and walking you through every contingency without jargon." },
    { g: "working", q: "Do you offer services in Mandarin?", a: "I do. About 40% of my clients prefer to conduct business in Mandarin. I work in English, Mandarin and Taiwanese, and all documents can be reviewed in either language." },
    { g: "working", q: "How do you charge, and who pays your commission?", a: "Commission is negotiable and always set out in writing before I do any work — there is no standard or fixed rate. Following the 2024 industry settlement, buyer representation is agreed directly between you and me in a written buyer agreement, and compensation may be paid by the seller, by you, or split, depending on what we negotiate in the transaction. I'll walk you through the specific numbers on your deal before you sign anything." },

    { g: "selling", q: "Why is the property estimator a form rather than an instant number?", a: "Automated valuation models routinely miss San Diego's micro-markets. Zillow's own published median error rate is about 7.5% for off-market homes — roughly $150,000 on a $2 million property. Rather than give you a number that may mislead, I'll prepare a personal CMA, usually within 48 hours, based on the actual condition, view and finishes of your home." },
    { g: "selling", q: "How long does it take to sell a home in San Diego?", a: "As of June 2026 the county median was 18 days on market, though that varies enormously by submarket — La Jolla has been running closer to 37 days. Add about four weeks of preparation before listing, and roughly 30 days of escrow after you accept an offer. A realistic end-to-end plan is eight to ten weeks from first conversation to closing." },
    { g: "selling", q: "What is a listing song?", a: "For every listing I take, I commission an original song written specifically about that property and produce it as a short video for YouTube and social media. Not a stock music bed under a slideshow — an actual song about your actual house. It is included in my listing package at no extra cost, and it earns the kind of attention and sharing that ordinary listing video does not." },
    { g: "selling", q: "Should I make repairs before listing?", a: "Small ones, yes; large renovations, usually not. Plan on 1–3% of the home's value, weighted toward paint, deep cleaning, landscaping and staging. A pre-listing inspection is worth doing so that surprises become decisions you make on your own timeline rather than repair requests made under mid-escrow pressure." },

    { g: "buying", q: "What is Mello-Roos and will I have to pay it?", a: "Mello-Roos is a special tax funding infrastructure in newer California developments. In San Diego's newer master-planned communities — 4S Ranch, Del Sur, Pacific Highlands Ranch — it commonly runs $1,000 to $5,000+ per year, while older Carmel Valley tracts often have none. It is parcel-specific, it is escrowed with your property tax, and it directly reduces how much home you qualify for, so check it before you write an offer." },
    { g: "buying", q: "Can I buy in San Diego from overseas?", a: "Yes. There is no citizenship, residency or visa requirement to buy US property, and financing is available without a US credit history or Social Security number through foreign national and DSCR loan programs, typically at 20–30% down. Plan ahead for FIRPTA withholding when you eventually sell, and for US estate tax exposure, which for non-residents begins above just $60,000 of US assets." },

    { g: "investing", q: "I'm an investor considering a 1031 exchange. Can you help?", a: "Yes — this is a focus of my practice. I've closed exchanges across single-family, small multifamily and DST replacement structures, and I work closely with several trusted qualified intermediaries who can step in within 24 hours. The critical thing is engaging the intermediary before your sale closes: if the proceeds touch your hands, the exchange cannot be repaired." },
    { g: "investing", q: "Is Section 1031 still available in 2026?", a: "Yes. The One Big Beautiful Bill Act, signed 4 July 2025, left Section 1031 fully intact — the proposed $500,000 deferral cap did not become law. The 45-day identification period, the 180-day exchange period and the qualified intermediary requirement are all unchanged." },
  ],
};
