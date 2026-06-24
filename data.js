// Data — listings, testimonials, videos, articles, copy
window.JR_DATA = {
  agent: {
    name: "Jean Riley",
    title: "Realtor® · San Diego Coastal Specialist",
    phone: "(858) 598-3888",
    email: "Jean@CentermacSD.com",
    license: "DRE# 02004228",
    brokerage: "Pacific Crest Realty",
    years: 10,
    youtube: "https://www.youtube.com/@soldbyjean",
    youtubeHandle: "@soldbyjean",
    zillow: "https://www.zillow.com/profile/JeanSD",
    totalSold: "200+",
  },

  i18n: {
    en: {
      nav: { home: "Home", listings: "Listings", videos: "Videos", about: "About", guides: "Guides", exchange: "1031 Exchange", contact: "Contact" },
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
      nav: { home: "首頁", listings: "房源", videos: "影片", about: "關於", guides: "指南", exchange: "1031 交換", contact: "聯絡" },
      hero: {
        eyebrow: "聖地亞哥 · 始於 2015",
        h1: ["以專業態度", "服務加州海岸生活"],
        sub: "十年深耕聖地亞哥最受歡迎的社群——從 La Jolla 海崖豪宅到 Mission Hills 工藝風住宅，再到 1031 投資組合，全程陪伴買家、賣家與投資人。",
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
        videoH: "市場簡報、社群導覽與賣家故事",
        guidesEy: "資源中心",
        guidesH: "買家、賣家與投資者指南",
        estEy: "您的房產價值",
        estH: "定製化估值，親自為您準備",
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
  testimonials: [
    { name: "Yufan C.", area: "Buyer & Commercial Investor · National City + Sorrento Valley", initials: "YC", rating: 5,
      quote: "Jean helped me buy a home in National City and then guided me through both the purchase and sale of my commercial office space in Sorrento Valley. She is meticulous, easy to work with, and fights for the best deal — whether I'm on the buyer or the seller side. I've recommended her to many friends, and every one of them has loved working with her too." },
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
  ],

  // Real videos from Jean's YouTube channel (@soldbyjean)
  // group: "tour" = listing/property tours, "voiceover" = client voice-over,
  // "testimonial" = agent testimonial. `start` = optional start-time in seconds.
  videos: [
    { id: "HiFBssXmPUY", title: "Torrey Highlands — One of San Diego's Best Communities", category: "Client Voice-Over", group: "voiceover", start: 14, feature: true },
    { id: "mtOfVFMWAA4", title: "Tuscany Place — Rolando / College Area", category: "Client Voice-Over", group: "voiceover", start: 13 },
    { id: "xig-8fQ3AjM", title: "Dream Home in UTC — 7155 Calabria Ct, Unit D", category: "Listing Tour", group: "tour" },
    { id: "l3FbdLmGV-c", title: "Dream Home in Carlsbad — 3251 Rancho Famosa", category: "Listing Tour", group: "tour", start: 223 },
    { id: "dJWsjTBRoZs", title: "Dream Home in 4S Ranch — 17134 Monterey Ridge Way", category: "Listing Tour", group: "tour", start: 16 },
    { id: "3zFIAsaw6cg", title: "Escondido, CA — July 4th", category: "Neighborhood", group: "tour" },
    { id: "H4XkLDxTEPw", title: "Why you should hire Jean as your agent", category: "Agent Testimonial", group: "testimonial" },
    { id: "x0SCTO79CTY", title: "Why You Should Hire Jean as your Agent", category: "Agent Testimonial", group: "testimonial" },
  ],

  // `credit` is required by the Unsplash license (CC-style) — display photographer name + link.
  articles: [
    { id: "a1", category: "Buyer Guide", title: "What to expect when buying in La Jolla", read: "8 min", image: "hero-la-jolla.jpg" },
    { id: "a2", category: "Seller Guide", title: "Pre-listing essentials: the seven-point preparation", read: "6 min", image: "uploads/articles/pre-listing.jpg", credit: { name: "Zac Gudakov", url: "https://unsplash.com/@zacgudakov" } },
    { id: "a3", category: "Investor", title: "1031 Exchange timing — what trips up most investors", read: "10 min", image: "uploads/articles/1031-exchange.jpg", credit: { name: "Clemens van Lay", url: "https://unsplash.com/@clemensvanlay" } },
    { id: "a4", category: "Market", title: "Reading a comparative market analysis", read: "5 min", image: "uploads/articles/cma.jpg", credit: { name: "Jakub Żerdzicki", url: "https://unsplash.com/@jakubzerdzicki" } },
  ],

  guides: [
    { num: "01", title: "The Buyer's Guide", desc: "From pre-approval to keys in hand — a measured, twelve-step framework for buying in San Diego's competitive coastal market.", cta: "Open Buyer Guide" },
    { num: "02", title: "The Seller's Guide", desc: "Pricing, preparation, photography, marketing and negotiation. The full seller playbook, refined over a decade and 240+ closed listings.", cta: "Open Seller Guide" },
    { num: "03", title: "1031 Exchange Primer", desc: "Identification windows, qualified intermediaries and replacement property strategy for investors looking to defer capital gains.", cta: "Open 1031 Guide" },
  ],

  process: [
    { n: "I", t: "Discovery", d: "An unhurried first conversation — your goals, timeline, and the neighborhoods worth your attention." },
    { n: "II", t: "Strategy", d: "A written plan: pricing band or budget envelope, preparation steps, and a 90-day campaign or search schedule." },
    { n: "III", t: "Execution", d: "Photography, staging consult, MLS launch, private showings — or curated property tours and offer architecture." },
    { n: "IV", t: "Close", d: "Inspection orchestration, financing oversight, contract negotiation, and a personal escrow handoff." },
  ],

  faqs: [
    { q: "What areas of San Diego do you focus on?", a: "I work the coastal corridor primarily — La Jolla, Bird Rock, Pacific Beach, Mission Beach, Point Loma, Del Mar — along with the inner urban neighborhoods of Mission Hills, Hillcrest, North Park and South Park. If you're looking outside this footprint, I'm happy to refer you to a vetted colleague rather than stretch beyond my expertise." },
    { q: "Do you work with first-time buyers?", a: "Frequently. About a third of my buyer clients are buying their first home. I budget extra time for education, lender introductions, and walking you through every contingency without jargon." },
    { q: "I'm an investor considering a 1031 exchange. Can you help?", a: "Yes — this is a focus of my practice. I've closed exchanges across single-family, small multifamily and DST replacement structures, and I work closely with several trusted qualified intermediaries who can step in within 24 hours." },
    { q: "Do you offer services in Mandarin?", a: "I do. About 40% of my clients prefer to conduct business in Mandarin. All documents can be reviewed in either language." },
    { q: "Why is the property estimator a form rather than an instant number?", a: "Automated valuation models (Zillow, Redfin) routinely miss San Diego's micro-markets by 8–15%. Rather than give you a number that may mislead, I'll prepare a personal CMA — usually within 48 hours — based on the actual condition, view and finishes of your home." },
  ],
};
