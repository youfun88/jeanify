/* Article bodies — single source of truth.
 *
 * Consumed twice:
 *   1. pages.jsx  → ArticleDetail, the in-app route #/articles/<slug>
 *   2. tools/build-articles.mjs → static /articles/<slug>.html with its own
 *      canonical URL, meta description and Article + FAQPage + BreadcrumbList
 *      JSON-LD. Hash routes are invisible to crawlers, so the static pages are
 *      what actually gets indexed and cited.
 *
 * Block types understood by both renderers:
 *   { t:"p",  x:"…" }                    paragraph
 *   { t:"h",  x:"…" }                    section heading (h2, becomes an anchor)
 *   { t:"ul", x:[…] } / { t:"ol", x:[…] } list
 *   { t:"table", head:[…], rows:[[…]] }  comparison table — answer engines
 *                                        extract these far more reliably than prose
 *   { t:"callout", x:"…" }               pull-aside
 *
 * Editing notes:
 *   - `answer` is the quick-answer block. Keep it to 2–3 sentences that stand
 *     alone if lifted out of context, because that is exactly what an AI
 *     overview will do with it.
 *   - Market figures carry an "as of" date in the prose on purpose. When they
 *     go stale, update the figure AND the date, then bump `updated`.
 */
window.JR_ARTICLES = [

  // ---------------------------------------------------------------- 01
  {
    slug: "buying-in-la-jolla",
    titleZh: "在 La Jolla 買房，該有的心理準備",
    dekZh: "沿海開發許可這一層、多數人拖到成交前才想到的地質調查，以及 92037 的真實數字。",
    answerZh: "在 La Jolla 買房與聖地牙哥其他區域有三個具體差異：房價約為全郡中位數的三倍；多數區域落在沿海管制區內，外觀變更需先取得沿海開發許可；靠近海崖的地號還需要一般驗屋不涵蓋的地質調查。交割期抓 30 到 45 天，並記得交割後 3 到 9 個月會另外收到一筆補充房屋稅單，貸款方不會代收。",
    category: "Buyer Guide",
    title: "What to expect when buying in La Jolla",
    dek: "The coastal permit layer, the geotechnical questions nobody asks until escrow, and what the 92037 numbers actually look like.",
    read: "8 min",
    date: "2026-06-12",
    updated: "2026-07-18",
    image: "hero-la-jolla.jpg",
    metaTitle: "Buying a Home in La Jolla (92037): A 2026 Buyer's Guide",
    metaDesc: "What buying in La Jolla actually involves in 2026 — median prices, the Coastal Overlay Zone permit layer, bluff and geotechnical diligence, and the property-tax bill that arrives after you close.",
    answer:
      "Buying in La Jolla differs from the rest of San Diego in three concrete ways: prices run roughly three times the county median, much of the neighborhood sits inside the Coastal Overlay Zone where exterior changes need a Coastal Development Permit, and bluff-adjacent parcels need geotechnical review that a standard home inspection does not cover. Budget 30–45 days for escrow and expect a supplemental property tax bill 3–9 months after closing that your lender does not escrow for.",
    sections: [
      { t: "h", x: "What does a home in La Jolla actually cost in 2026?" },
      { t: "p", x: "La Jolla is not one market, it is several stacked on top of each other, and the single \"median\" number you see quoted is usually blending them. As of mid-2026 the neighborhood-wide median sale price sits around $2.7 million. Split by property type the picture is sharper: single-family homes have been running a year-to-date median in the mid-$3 millions, while condominiums and townhomes cluster closer to $1.2 million." },
      { t: "p", x: "For context, the San Diego County median was $950,000 in June 2026 with a median 18 days on market. La Jolla trades at roughly a 3x premium to the county and, importantly, moves slower — median days on market has been running near 37, up from about 21 a year earlier. That gap matters. A well-priced Clairemont house is a five-day decision; a La Jolla purchase is one you are usually allowed to think about." },
      { t: "table",
        head: ["", "La Jolla (92037)", "San Diego County"],
        rows: [
          ["Median sale price", "~$2.7M (all types, mid-2026)", "$950,000 (June 2026)"],
          ["Single-family median", "~$3.5M YTD", "—"],
          ["Condo / townhome median", "~$1.22M", "—"],
          ["Median days on market", "~37 days", "18 days"],
          ["Direction vs. prior year", "Slower — was ~21 days", "Faster — was 21 days"],
        ] },
      { t: "p", x: "Read that table as a negotiating posture rather than a price list. In a submarket where inventory sits longer than the county average, the buyer who has done their diligence in advance is the one who can move on a tired listing with terms the seller actually wants." },

      { t: "h", x: "What is the Coastal Overlay Zone and does it affect my house?" },
      { t: "p", x: "Much of La Jolla — the beachfront, the bluff tops, La Jolla Shores and the shoreline neighborhoods — falls within California's Coastal Zone. Property inside it sits under a Coastal Overlay Zone, which means a broad range of exterior work requires a Coastal Development Permit before you can begin. That includes things buyers routinely assume are trivial: additions, significant remodels, grading, retaining walls, and in some cases landscaping and hardscape that changes drainage or public views." },
      { t: "p", x: "This is the single most common surprise I see with buyers relocating into La Jolla from elsewhere in the county. They tour a 1960s house, mentally budget a second-story addition, and only discover during escrow that the permit path adds months and meaningful cost. The permit is usually obtainable. The timeline is the thing that breaks plans." },
      { t: "callout", x: "If your purchase depends on renovating, price the permit path before you remove your contingencies — not after. A pre-offer conversation with a coastal-experienced architect costs a few hundred dollars and has saved my clients six figures." },
      { t: "ol", x: [
        "Confirm from the preliminary title report and city zoning whether the parcel is inside the Coastal Overlay Zone.",
        "Ask the seller, in writing, for the permit history on any work already done — unpermitted coastal work becomes your enforcement problem the day you take title.",
        "If you intend to build, get a coastal-experienced architect to sketch the permit path and timeline during your inspection contingency.",
        "Build the expected permit timeline into your financing and your move-in plan, not just your budget.",
      ] },

      { t: "h", x: "Do I need a geotechnical report for a La Jolla home?" },
      { t: "p", x: "If the property is bluff-top, on a slope, near the shoreline, or shows any sign of erosion or movement — yes, and a general home inspection is not a substitute. A home inspector evaluates the structure. A geotechnical engineer evaluates whether the ground under the structure is going to stay where it is." },
      { t: "p", x: "Bluff retreat and sea level rise are not reliably captured in California's standard Natural Hazard Disclosure statement unless a specific local map applies or the seller has actual knowledge to disclose. Absence from the NHD report is not evidence of absence of risk. For bluff-adjacent purchases I treat a current geotechnical report as mandatory diligence, alongside the usual roof, sewer lateral and foundation work." },
      { t: "ul", x: [
        "Geotechnical / soils report — bluff-top, slope, or any visible movement.",
        "Sewer lateral camera scope — La Jolla's older housing stock has original clay laterals; replacement runs five figures.",
        "Roof and drainage — coastal exposure is harder on materials than inland San Diego.",
        "Permit history pull from the City of San Diego — verify the square footage you are paying for is legal square footage.",
      ] },

      { t: "h", x: "How much will my property taxes be?" },
      { t: "p", x: "Under Proposition 13, California's base property tax rate is 1% of assessed value, and your assessed value is reset to your purchase price when you buy. Annual increases to that assessed value are then capped at 2%. In practice the effective San Diego rate lands somewhere around 1.1%–1.25% once voter-approved bonds and any local assessments are added. On a $3 million La Jolla purchase, plan on roughly $33,000–$37,500 per year." },
      { t: "p", x: "The part that catches nearly every first-time California buyer: the supplemental assessment. When you buy, the county re-assesses from the prior owner's (often much lower) assessed value up to your purchase price, and sends a one-time pro-rated supplemental bill covering the remainder of the fiscal year. It arrives 3–9 months after closing, and — this is the trap — it is generally not paid out of your mortgage escrow account. It comes to you directly, and on a La Jolla purchase it can be a five-figure bill you were not expecting." },
      { t: "callout", x: "Good news, mostly: the older La Jolla housing stock means many sellers carry a very low Prop 13 basis. That is why a neighbor's tax bill tells you almost nothing about what yours will be. Always underwrite off your own purchase price." },

      { t: "h", x: "How long does a La Jolla escrow take?" },
      { t: "p", x: "Thirty to forty-five days is typical with financing, and I would rather have 45 than 30 here. The extra time is not padding — it absorbs the geotechnical report, the permit history pull, and, on higher-value properties, an appraisal process that has fewer clean comparables to work with than a tract neighborhood does. Cash purchases can close in two weeks, and in a competitive situation that speed is often worth more to a seller than another $50,000 on the price." },
    ],
    faqs: [
      { q: "Is La Jolla a good investment in 2026?",
        a: "La Jolla has historically held value better than inland San Diego during downturns because supply is structurally constrained — the Coastal Overlay Zone limits new development. The tradeoff is lower liquidity: with median days on market near 37 versus 18 countywide, exiting takes longer. It suits buyers with a 7-plus year horizon better than short-term investors." },
      { q: "What is the difference between La Jolla Shores, Bird Rock and the Village?",
        a: "La Jolla Shores is the flat, beach-adjacent area with the most family-oriented feel and the strictest coastal review. Bird Rock is the southern end toward Pacific Beach — smaller lots, a walkable stretch of La Jolla Boulevard, and generally the most accessible entry pricing in 92037. The Village is the commercial and historic core, where you find both the highest-priced bluff properties and most of the condo inventory." },
      { q: "Can I buy in La Jolla without an all-cash offer?",
        a: "Yes. Financed offers close in La Jolla constantly. What matters more than cash is certainty — a fully underwritten pre-approval, a realistic appraisal contingency strategy, and a listing agent who believes your lender will perform. In a submarket where homes sit for a month-plus, sellers are frequently more motivated by a clean, credible offer than by cash alone." },
      { q: "Do I need a Coastal Development Permit to remodel a La Jolla kitchen?",
        a: "Generally no — interior work that does not alter the building envelope, change intensity of use, or affect public coastal access typically falls outside coastal permitting. The trigger is usually exterior: additions, height or footprint changes, grading, retaining walls, and work affecting views or drainage. Confirm with the City of San Diego before you demolish anything." },
    ],
    sources: [
      { name: "Redfin — La Jolla housing market data", url: "https://redfin.com/neighborhood/1445/CA/San-Diego/La-Jolla/housing-market" },
      { name: "Greater San Diego Association of Realtors — 92037 market report", url: "http://sdar.stats.10kresearch.com/docs/lmu/x/92037-LaJolla" },
      { name: "California Coastal Commission — coastal development permits", url: "https://www.coastal.ca.gov/cdp/cdp-forms.html" },
      { name: "San Diego County Assessor — supplemental assessments", url: "https://www.sdarcc.gov/content/arcc/home/divisions/assessor.html" },
    ],
    related: ["mello-roos-san-diego", "reading-a-cma"],
  },

  // ---------------------------------------------------------------- 02
  {
    slug: "pre-listing-preparation",
    titleZh: "上市前的七項準備",
    dekZh: "準備的錢花在哪裡才回得來、能替您省下多少市場停留天數，以及一項全聖地牙哥沒有第二個房仲在做的行銷。",
    answerZh: "上市前的準備預算，抓房屋價值的 1% 到 3%，重點放在油漆、深度清潔、庭園整理與佈置，這四項的回收最穩定。美國房屋佈置協會（RESA）的資料顯示，平均佈置花費約 3,800 美元，換得的是明顯縮短的市場停留天數。整體流程安排四週，攝影一定排在最後，等所有工項都完成再拍。",
    category: "Seller Guide",
    title: "Pre-listing essentials: the seven-point preparation",
    dek: "Where preparation money actually returns, what it buys you in days on market, and the one marketing piece no other San Diego agent is making.",
    read: "9 min",
    date: "2026-05-28",
    updated: "2026-07-20",
    image: "uploads/articles/pre-listing.jpg",
    credit: { name: "Zac Gudakov", url: "https://unsplash.com/@zacgudakov" },
    metaTitle: "Pre-Listing Home Preparation: The Seven-Point Checklist (2026)",
    metaDesc: "A seven-point pre-listing preparation framework for San Diego sellers — what to spend, what returns, staging ROI data, and how to sequence the four weeks before your home hits the MLS.",
    answer:
      "Plan to spend 1–3% of your home's value preparing it for market, weighted toward paint, deep cleaning, landscaping and staging — the four items with the most consistent return. Industry data from the Real Estate Staging Association puts average staging spend near $3,800 against materially shorter time on market. Sequence the work over about four weeks so photography happens last, after everything is finished.",
    sections: [
      { t: "h", x: "How much should I spend preparing my home to sell?" },
      { t: "p", x: "One to three percent of the home's value is the working range, and where you land inside it depends almost entirely on condition rather than price point. A well-maintained Carmel Valley house that needs paint and a deep clean sits at the bottom of the range. A tenant-occupied property that has not been touched in fifteen years sits at the top, and occasionally above it." },
      { t: "p", x: "The discipline is in refusing to spend money that does not come back. Sellers consistently over-invest in the things they personally disliked about the house — the kitchen they always meant to redo — and under-invest in the things buyers register in the first eleven seconds. Paint, cleanliness, light and smell drive more of the offer than any single renovation at this stage." },
      { t: "table",
        head: ["Item", "Typical San Diego cost", "Priority"],
        rows: [
          ["Deep clean (incl. windows)", "$400 – $900", "Non-negotiable"],
          ["Interior paint, neutral", "$3,000 – $9,000", "Highest return"],
          ["Landscaping refresh / mulch", "$800 – $3,000", "High — it is the first photo"],
          ["Professional staging", "$3,500 – $4,400", "High on vacant homes"],
          ["Garage door replacement", "$1,200 – $2,600", "High, if visibly dated"],
          ["Minor repairs / handyman day", "$600 – $2,000", "High — removes buyer objections"],
          ["Kitchen or bath remodel", "$25,000+", "Rarely returns pre-sale"],
        ] },

      { t: "h", x: "Does staging actually work, or is that just an agent upsell?" },
      { t: "p", x: "It works, and the effect shows up in time on market more dramatically than in price. Real Estate Staging Association data from late 2025 put average staging spend around $3,813, with staged homes achieving an average sale-to-list ratio of 109% and days on market in the single digits to high teens. Independent surveys consistently find staged properties spending dramatically less time on market than unstaged equivalents." },
      { t: "p", x: "Two caveats worth stating plainly. First, those return-on-investment figures circulating in the industry — some quoted in the thousands of percent — are computed against staging cost alone, not against total selling cost, so treat them as directional rather than literal. Second, staging matters most on vacant homes and homes with unusual layouts. An occupied, well-furnished, tastefully decorated house often needs editing and decluttering rather than a full staging contract." },
      { t: "callout", x: "Virtual staging runs $59–$129 per image versus $3,500+ for physical staging. It is a legitimate tool for online presentation, but it must be disclosed, and it cannot do the job at an in-person showing. I use it to supplement, never to substitute." },

      { t: "h", x: "The seven points, in order" },
      { t: "ol", x: [
        "Pre-inspection. Order your own inspection before listing. You would rather find the failing water heater than have a buyer's inspector find it and reprice your deal from a position of leverage.",
        "Declutter and depersonalize. Remove roughly a third of the furniture and nearly all family photography. The goal is for a buyer to imagine their life here, which is difficult while looking at yours.",
        "Repair the small things. Sticking doors, running toilets, cracked switch plates, burnt bulbs. Individually trivial; collectively they read as deferred maintenance and invite a lower offer.",
        "Paint. Neutral, current, and complete — a half-painted house looks worse than an unpainted one. This is the highest-return dollar in the entire process.",
        "Deep clean, including windows, grout and inside the appliances. Then have it cleaned again the day before photography.",
        "Curb appeal. Fresh mulch, edged beds, a clean walkway, a working porch light and a painted front door. This is the photo that determines whether anyone clicks your listing at all.",
        "Stage, then photograph. Photography is always last. Every dollar spent above it is wasted if the camera arrives first.",
      ] },

      { t: "h", x: "What does the marketing actually consist of?" },
      { t: "p", x: "Once the house is ready, presentation is where listings separate. My standard package is architectural photography, twilight exteriors, drone where the setting justifies it, a 3D walkthrough, MLS and full syndication, broker preview, and a targeted digital campaign. That is the professional baseline, and any competent listing agent in San Diego should be offering something close to it." },
      { t: "h", x: "The listing song" },
      { t: "p", x: "Here is the part that is not standard. For my listings I commission an original song written specifically about that property — its street, its setting, what it feels like to live there — and produce it as a short video that runs on YouTube and social. Not a stock track laid under a slideshow. An actual song about your actual house." },
      { t: "p", x: "The reason is straightforward: a listing video with a generic music bed is skippable, and every agent has one. A song about the address is not skippable. People watch it to the end, they send it to friends, and it circulates in a way that ordinary listing content simply does not. For a seller, that is incremental reach at the exact moment reach converts into showings — and showings are what produce competing offers." },
      { t: "callout", x: "You can hear two of them on the video page: \"Song for 12678 Carmel Country Rd, #27\" and \"Song for 3009 Union Street, #7\". Every listing I take gets one." },

      { t: "h", x: "How long does preparation take?" },
      { t: "p", x: "Four weeks is the realistic planning number for an occupied home in reasonable condition. Week one is the pre-inspection and the repair list. Week two is decluttering and any pre-listing repairs. Week three is paint and landscaping. Week four is deep clean, staging, photography and the song production, with the listing going live at the end of it. Compress it if you must, but understand that every compression shows up in the photographs." },
    ],
    faqs: [
      { q: "Should I renovate my kitchen before selling?",
        a: "Almost never, immediately before selling. A full kitchen remodel rarely returns its cost in a pre-sale window, and you are making design decisions on behalf of a buyer you have not met. The exception is a kitchen so dated or non-functional that it materially reduces the buyer pool — in that case a targeted cosmetic refresh (paint, hardware, countertops) beats a gut renovation." },
      { q: "Should I get a pre-listing inspection?",
        a: "Yes, in most cases. It converts surprises into decisions. You either fix the item, disclose it and price for it, or budget a credit — all on your timeline rather than under repair-request pressure mid-escrow, when a buyer has maximum leverage." },
      { q: "Is virtual staging allowed?",
        a: "Yes, and it is widely used, but it must be clearly disclosed as virtually staged. Presenting virtually staged photos as actual condition is a misrepresentation issue. It also does nothing for the in-person showing, which is where the offer usually gets decided." },
      { q: "What is a listing song and does it cost me extra?",
        a: "It is an original song written about your specific property, produced as a short video for YouTube and social. It is included in my listing package at no additional cost to the seller — it is part of how I market, not an upsell." },
      { q: "How long before listing should I start preparing?",
        a: "About four weeks for an occupied home in reasonable condition — one week for pre-inspection and planning, one for decluttering and repairs, one for paint and landscaping, and one for cleaning, staging and photography. Vacant homes needing significant repair should plan on six to eight." },
    ],
    sources: [
      { name: "Real Estate Staging Association — staging ROI reporting", url: "https://www.rubyhome.com/blog/home-staging-stats/" },
      { name: "Home staging statistics compilation, The Zebra", url: "https://www.thezebra.com/resources/research/home-staging-statistics/" },
      { name: "Sold By Jean — listing songs on YouTube", url: "https://www.youtube.com/@soldbyjean" },
    ],
    related: ["reading-a-cma", "buying-in-la-jolla"],
  },

  // ---------------------------------------------------------------- 03
  {
    slug: "1031-exchange-timing",
    titleZh: "1031 交換的時程，投資人最常栽在哪裡",
    dekZh: "期限本身很單純。真正出事的幾乎都不是算錯天數，而是順序，以及一條多數投資人沒聽過的規定。",
    answerZh: "1031 交換給您的是：自原房產交割日起 45 個日曆天內以書面指定替代房產，180 個日曆天內完成交割。兩個時鐘同一天起算、同時進行，180 天並不是 45 天之後才開始。最常見的失敗不是算術，而是合格中介介入得太晚：只要售屋款項曾經進到您手上，哪怕只是短暫，這筆交換就作廢，而且無法補救。",
    category: "Investor",
    title: "1031 Exchange timing — what trips up most investors",
    dek: "The deadlines are simple. The failures are almost never about arithmetic — they are about sequencing, and about one rule most investors have never heard of.",
    read: "10 min",
    date: "2026-04-30",
    updated: "2026-07-15",
    image: "uploads/articles/1031-exchange.jpg",
    credit: { name: "Clemens van Lay", url: "https://unsplash.com/@clemensvanlay" },
    metaTitle: "1031 Exchange Timing Rules in 2026: 45-Day and 180-Day Deadlines",
    metaDesc: "The 45-day and 180-day 1031 exchange deadlines explained for 2026, including the tax-return trap that shortens your window, identification rules, and what the One Big Beautiful Bill Act did and did not change.",
    answer:
      "A 1031 exchange gives you 45 calendar days from the close of your relinquished property to identify replacement property in writing, and 180 calendar days to close on it. Both clocks start the same day and run concurrently — the 180 is not an extension of the 45. The most common failure is not missing a deadline by arithmetic but engaging a qualified intermediary too late: if you take receipt of the sale proceeds, even briefly, the exchange is dead and cannot be repaired.",
    sections: [
      { t: "h", x: "Is Section 1031 still available in 2026?" },
      { t: "p", x: "Yes, and it survived a genuine scare. The One Big Beautiful Bill Act, signed 4 July 2025, left Section 1031 fully intact — the proposed $500,000 annual deferral cap that had circulated during drafting did not make it into law. The 45-day and 180-day periods are unchanged, the identification rules are unchanged, and the role of the qualified intermediary is unchanged." },
      { t: "p", x: "One older change still catches people: since the 2017 Tax Cuts and Jobs Act, Section 1031 applies to real property only. Exchanges of equipment, vehicles, aircraft and similar personal property were eliminated effective 1 January 2018. Within real estate, though, the like-kind definition remains extremely broad — U.S. real property held for investment or productive use is generally like-kind to other U.S. real property, improved or unimproved. A San Diego rental condo can be exchanged into raw land in Texas." },

      { t: "h", x: "The two deadlines, precisely" },
      { t: "table",
        head: ["Clock", "Length", "Starts", "What must happen"],
        rows: [
          ["Identification", "45 calendar days", "Day of relinquished property close", "Written, signed identification of replacement candidates delivered to your QI"],
          ["Exchange", "180 calendar days", "Same day — runs concurrently", "Replacement property must actually close and fund"],
        ] },
      { t: "p", x: "Calendar days, not business days. No extension for weekends or federal holidays. There is no hardship exception, no good-faith exception, and no discretionary relief from the IRS outside of formally declared disaster postponements. The deadlines are, in practice, absolute." },

      { t: "h", x: "The trap: your 180 days may not be 180 days" },
      { t: "p", x: "This is the rule that surprises even experienced investors. The exchange period ends on the earlier of 180 days, or the due date of your tax return for the year in which the relinquished property sold — including extensions." },
      { t: "p", x: "Work through what that means for a late-year sale. Close your relinquished property on 15 November, and 180 days lands in mid-May. But your individual return is due 15 April. If you do not file an extension, your exchange window silently collapses from 180 days to about 151. Investors have lost exchanges to this and only discovered it at filing time." },
      { t: "callout", x: "If you sell in the fourth quarter, file the extension. It is a routine form, it costs nothing, and it is the difference between having your full 180 days and not. Coordinate this with your CPA before you close, not after." },

      { t: "h", x: "How do the identification rules work?" },
      { t: "p", x: "By day 45 you must deliver a written, unambiguous, signed identification to your qualified intermediary. Unambiguous means a legal description or a street address — not \"a fourplex in Chula Vista.\" You may then use one of three rules:" },
      { t: "table",
        head: ["Rule", "How many you may identify", "Constraint"],
        rows: [
          ["Three-property rule", "Up to 3 properties", "No limit on their combined value. This is what most exchanges use."],
          ["200% rule", "Any number", "Combined fair market value cannot exceed 200% of what you sold."],
          ["95% rule", "Any number, any value", "You must actually acquire at least 95% of the total value identified. A fallback, rarely used."],
        ] },
      { t: "p", x: "You can revoke and re-identify freely within the 45 days, in writing, to the same party. After day 45 the list is frozen. If everything on it falls out of escrow, the exchange fails — which is the argument for identifying three properties rather than one, even when you are confident about the first." },

      { t: "h", x: "Where exchanges actually fail" },
      { t: "ol", x: [
        "Engaging the qualified intermediary too late. The QI agreement must be in place before the relinquished property closes. If proceeds touch your hands or your own escrow, the exchange is void — and this cannot be unwound after the fact. Engage the QI while you are still in escrow on the sale.",
        "Identifying only one property, then losing it on inspection. You had two more slots and did not use them.",
        "Receiving boot without planning for it. Cash taken out, debt reduced and not replaced, or seller-paid non-transaction costs are all taxable to the extent received. A partial exchange is legitimate; an accidental one is an unwelcome tax bill.",
        "Missing the tax-return date described above.",
        "Buying a replacement of lower value or with less debt than the relinquished property, and being surprised that the difference is taxable. To defer fully you generally need to trade equal-or-up in both value and debt.",
      ] },

      { t: "h", x: "What California adds on top" },
      { t: "p", x: "Two California-specific items that out-of-state exchanges routinely miss. First, if you exchange California property into replacement property outside California, the Franchise Tax Board requires ongoing annual reporting on Form 3840 for as long as the deferred gain remains — and California will assert its claim to that deferred gain when you eventually cash out. Investors who move gain to Texas or Nevada and stop filing California returns create a problem for themselves." },
      { t: "p", x: "Second, on the replacement purchase in California, remember that your Proposition 13 basis resets to the new purchase price. A long-held San Diego rental with a very low assessed value carries a property tax bill that will not survive the exchange. Model the new carrying cost before you commit — I have seen otherwise sound exchanges become cash-flow negative purely on the reassessment." },
      { t: "p", x: "At the federal level, the exchange is reported on Form 8824 with the return for the year the relinquished property sold. This is CPA territory, and none of the above is tax advice — it is the operational sequence a broker needs you to understand so that the transaction does not break on my side of the table." },
    ],
    faqs: [
      { q: "Can I extend the 45-day or 180-day 1031 deadline?",
        a: "No. There is no ordinary extension mechanism, no hardship relief and no IRS discretion. The only exception is a formally declared federal disaster where the IRS issues a notice postponing deadlines for affected taxpayers. Plan as though the dates are immovable, because they are." },
      { q: "Do the 45 and 180 days run at the same time?",
        a: "Yes. Both start on the day the relinquished property closes and run concurrently. Day 45 falls inside the 180-day period, not before it. You do not get 45 days plus 180 days." },
      { q: "What happens if my 1031 exchange fails?",
        a: "The transaction is treated as an ordinary taxable sale in the year the relinquished property closed. You owe federal capital gains tax, depreciation recapture at up to 25%, net investment income tax if applicable, and California state tax on the full gain. If the failure occurs in the following tax year, some investors can defer recognition to that later year under the installment sale rules — a question for your CPA, and one worth asking immediately." },
      { q: "Can I do a 1031 exchange on my primary residence?",
        a: "No. Section 1031 requires property held for investment or productive use in a trade or business. A primary residence typically uses the Section 121 exclusion instead ($250,000 single / $500,000 married filing jointly). Properties that have been both — a former residence converted to a rental — have specific holding-period rules and need professional review." },
      { q: "How much does a qualified intermediary cost?",
        a: "Typically $800 to $1,500 for a standard delayed exchange, plus modest per-property fees for additional replacements. Reverse and improvement exchanges cost substantially more. Choose on the strength of the QI's bonding, insurance and segregated-account practices rather than on price — you are handing this firm your entire sale proceeds." },
    ],
    sources: [
      { name: "IRS — Like-kind exchanges under IRC Section 1031", url: "https://www.irs.gov/newsroom/like-kind-exchanges-real-estate-tax-tips" },
      { name: "IPX1031 — Section 1031 tax reform updates", url: "https://www.ipx1031.com/1031-tax-reform-updates/" },
      { name: "Accruit — 1031 reporting deadlines and the impact of H.R.1", url: "https://www.accruit.com/blog/tax-day-2026-1031-exchange-reporting-deadlines-and-the-impact-of-h-r-1/" },
      { name: "California FTB — Form 3840, like-kind exchanges", url: "https://www.ftb.ca.gov/forms/2024/2024-3840.pdf" },
    ],
    related: ["reading-a-cma", "international-buyers-san-diego"],
  },

  // ---------------------------------------------------------------- 04
  {
    slug: "reading-a-cma",
    titleZh: "怎麼看懂一份 CMA",
    dekZh: "如何分辨真正的估價與一份爭取委託的話術，以及手機上那個自動估價數字，究竟差多少。",
    answerZh: "CMA 是以附近條件相近房屋的近期成交為基礎，再依屋況、坪數、景觀與地坪差異調整後得出的價格意見。判斷一份 CMA 的好壞，要看它挑的比較標的與調整過程，而不是最後那個數字。以未上市房屋而言，Zillow 自己公布的誤差中位數約 7.5%——換算到一間 200 萬美元的聖地牙哥房子約是 15 萬美元，這正是 CMA 與自動估價不能互相取代的原因。",
    category: "Market",
    title: "Reading a comparative market analysis",
    dek: "How to tell a real valuation from a listing pitch — and why the automated number on your phone is off by more than you think.",
    read: "7 min",
    date: "2026-03-19",
    updated: "2026-07-10",
    image: "uploads/articles/cma.jpg",
    credit: { name: "Jakub Żerdzicki", url: "https://unsplash.com/@jakubzerdzicki" },
    metaTitle: "How to Read a Comparative Market Analysis (CMA) — 2026 Guide",
    metaDesc: "How to evaluate a comparative market analysis: which comparables count, how adjustments work, what sale-to-list ratio reveals, and how CMA accuracy compares to Zillow's Zestimate median error rate.",
    answer:
      "A comparative market analysis prices your home from recent sales of genuinely similar nearby properties, adjusted for differences in condition, size, view and lot. Judge one by its comparables and its adjustments, not by its conclusion. For off-market homes Zillow's own published median error rate is about 7.5% — roughly $150,000 on a $2 million San Diego property — which is why a CMA and an automated estimate are not interchangeable.",
    sections: [
      { t: "h", x: "What is a CMA, and what is it not?" },
      { t: "p", x: "A comparative market analysis is an agent's opinion of value, built by finding recent sales of properties similar to yours and adjusting for the ways they differ. It is not an appraisal — an appraisal is performed by a licensed appraiser, usually for a lender, and carries a different standard and liability. It is also not an automated valuation model, which is a statistical estimate produced without anyone entering your house." },
      { t: "p", x: "The distinction matters because those three numbers routinely disagree, and sellers who do not understand why assume someone is wrong. Usually nobody is. They are answering different questions." },
      { t: "table",
        head: ["", "CMA", "Appraisal", "Automated estimate"],
        rows: [
          ["Prepared by", "Real estate agent", "Licensed appraiser", "Algorithm"],
          ["Interior inspected", "Yes", "Yes", "No"],
          ["Primary purpose", "Pricing strategy", "Lender collateral", "Consumer lead generation"],
          ["Typical cost", "Free", "$600 – $1,200", "Free"],
          ["Accounts for condition", "Yes", "Yes", "No"],
        ] },

      { t: "h", x: "How accurate is a Zestimate compared to a CMA?" },
      { t: "p", x: "Zillow publishes its own accuracy data, and it is more revealing than most people realize. For homes currently listed for sale, the nationwide median error rate runs roughly 1.7%–2.4%, with about 70% of Zestimates landing within 5% of the eventual sale price. That is genuinely good." },
      { t: "p", x: "But for off-market homes — which is what your house is, right now, before you list — the median error jumps to about 7.5%. More than triple. The reason is not mysterious: once a home is listed, the model gets the listing price, the photographs and the description as inputs. Before that, it is working from public records, tax data and its own prior guesses." },
      { t: "callout", x: "Median error of 7.5% means half of estimates are off by more than that. On a $2,000,000 property that is a $150,000 miss — in either direction. Underprice by that and you leave money behind. Overprice by that and you spend six weeks going stale before you reduce." },
      { t: "p", x: "Automated models struggle hardest exactly where San Diego is most idiosyncratic: micro-markets separated by a canyon, view premiums, and the condition gap between an original 1978 interior and a full renovation that county records show identically." },

      { t: "h", x: "What makes a comparable actually comparable?" },
      { t: "p", x: "This is where you should spend your attention when reviewing a CMA. Weak comparable selection can be made to support essentially any conclusion, which is how a seller ends up with three CMAs spanning half a million dollars." },
      { t: "ul", x: [
        "Closed, not listed. Asking prices are aspirations. Only closed sales are evidence. Pending sales are useful for direction but the price is unconfirmed.",
        "Recent — ideally within 90 days, and within 180 at the outside. In a moving market, a nine-month-old sale is a different market.",
        "Genuinely nearby. Same neighborhood, ideally the same tract, and on the same side of any real boundary — a school attendance line, a canyon, a freeway, a busy arterial.",
        "Similar in size, within roughly 10–15% of square footage, with the same bedroom and bathroom count where possible.",
        "Similar in the things that do not show in records: condition, view, lot orientation, and whether it backs to open space or to a road.",
        "Arm's-length. Trustee sales, foreclosures and family transfers are not market evidence.",
      ] },

      { t: "h", x: "How do adjustments work?" },
      { t: "p", x: "No two homes are identical, so each comparable is adjusted to account for differences. The logic runs one direction and confuses people until it clicks: you adjust the comparable, not your home. If the comparable has an extra bathroom that your home lacks, you subtract value from the comparable to make it equivalent to yours." },
      { t: "p", x: "A credible CMA shows you these adjustments as line items with dollar amounts. A CMA that shows you three sold prices and then simply asserts a recommended list price has skipped the actual analysis. Ask to see the adjustment grid. If there is not one, you have received a marketing document rather than a valuation." },
      { t: "ol", x: [
        "Look at the comparables first — before you look at the conclusion. Do you recognize these houses? Would you have picked them?",
        "Check the dates. Anything over six months old needs a stated reason.",
        "Look for the adjustment grid and read the dollar amounts.",
        "Check the sale-to-list ratios. If comparables are consistently closing above list, the market is absorbing more than list price and the pricing strategy should reflect that.",
        "Check days on market on the comparables. That tells you the cost of pricing wrong in this specific submarket.",
        "Ask what was excluded and why. The honest answer to this question tells you a great deal about the agent.",
      ] },

      { t: "h", x: "The number at the end" },
      { t: "p", x: "A good CMA does not produce a single price. It produces a range, with a recommendation inside it and an explicit statement of the tradeoff: price here and you likely sell in this many days; price at the top of the range and you are betting on a specific buyer showing up." },
      { t: "p", x: "Be alert to the oldest problem in this business — an agent who arrives at a number noticeably above everyone else's. Sometimes they see something the others missed. More often it is a listing-appointment tactic, and the reduction arrives in week four, after the listing has spent its most valuable weeks going stale. The market does not care what price you listed at. It only responds to what the house is worth." },
    ],
    faqs: [
      { q: "How accurate is Zillow's Zestimate?",
        a: "Zillow's published nationwide median error rate is roughly 1.7%–2.4% for homes actively listed for sale, but about 7.5% for off-market homes. Since your home is off-market before you list, the higher figure is the relevant one — around a $150,000 swing on a $2 million property. Median error also means half of all estimates are worse than that." },
      { q: "How much does a CMA cost?",
        a: "Nothing. Any working agent will prepare one at no charge and no obligation. If someone wants to charge you for a CMA, what they are actually offering is an appraisal, which is a different product and typically runs $600–$1,200." },
      { q: "Why did three agents give me three different prices?",
        a: "Almost always because they selected different comparables. Ask each one which properties they used and why, and the spread usually explains itself immediately. Occasionally the highest number is an attempt to win the listing rather than an assessment of value — the tell is whether the agent can defend the comparable selection when questioned." },
      { q: "Can I do my own CMA?",
        a: "You can get partway. Public sold data will show you the neighborhood range. What you cannot easily replicate is interior condition on the comparables — you have not been inside them — and the adjustment judgments that follow. That interior knowledge is most of the value an experienced local agent adds." },
      { q: "Should I price above my CMA to leave negotiating room?",
        a: "Usually no. Modern buyers search by price band, so overpricing removes you from the search results of the buyers most likely to purchase. The data consistently shows that homes priced correctly at launch sell faster and closer to list than homes that start high and reduce. Your negotiating room comes from competing interest, and competing interest comes from correct pricing." },
    ],
    sources: [
      { name: "Zillow — Zestimate accuracy and median error rate", url: "https://www.zillow.com/z/zestimate/" },
      { name: "Zestimate accuracy analysis 2026", url: "https://irinanorrell.com/how-accurate-is-zillows-zestimate/" },
      { name: "Greater San Diego Association of Realtors — market statistics", url: "https://sdar.stats.10kresearch.com/docs/mmi/x/report" },
    ],
    related: ["pre-listing-preparation", "buying-in-la-jolla"],
  },

  // ---------------------------------------------------------------- 05
  {
    slug: "mello-roos-san-diego",
    titleZh: "Mello-Roos：92127、92130、92131 的買家實際要繳多少",
    dekZh: "這一筆會改變您貸得到多少，也解釋了為什麼隔兩條街的兩間房子稅單完全不同，以及下斡旋前該怎麼查。",
    answerZh: "Mello-Roos 是社區設施特別區（CFD）為支應新開發社區公共建設而課徵的特別稅。在聖地牙哥較新的規劃社區——4S Ranch、Del Sur、Santaluz、Pacific Highlands Ranch——每年常見落在 1,000 到 5,000 美元以上，而 Carmel Valley 較早期的社區則往往完全沒有。由於它會併入房屋稅由貸款方代收，實質上會直接壓縮您的貸款額度。",
    category: "Buyer Guide",
    title: "Mello-Roos in San Diego: what buyers in 92127, 92130 and 92131 actually pay",
    dek: "The line item that changes what you qualify for, why two identical houses two streets apart carry different bills, and how to check before you write an offer.",
    read: "8 min",
    date: "2026-07-08",
    updated: "2026-07-20",
    // 17134 Monterey Ridge Way — one of Jean's own 92127 closings, and exactly the
    // master-planned housing stock this article is about. No stock photo needed.
    image: "uploads/articles/mello-roos.jpg",
    metaTitle: "Mello-Roos in San Diego (92127, 92130, 92131): 2026 Buyer's Guide",
    metaDesc: "What Mello-Roos costs San Diego buyers in 4S Ranch, Del Sur, Carmel Valley and Pacific Highlands Ranch — typical annual amounts, how it affects mortgage qualification, when it expires, and how to verify a specific parcel before offering.",
    answer:
      "Mello-Roos is a special tax levied by a Community Facilities District to pay for infrastructure in newer California developments. In San Diego's newer master-planned communities — 4S Ranch, Del Sur, Santaluz and Pacific Highlands Ranch — it commonly runs $1,000 to $5,000+ per year on top of your regular property tax, while older Carmel Valley neighborhoods often carry none at all. Because lenders include it in your escrowed payment, it directly reduces how much home you qualify for.",
    sections: [
      { t: "h", x: "What is Mello-Roos?" },
      { t: "p", x: "Mello-Roos is the common name for a special tax authorized by California's Community Facilities Act of 1982. It lets a city, county or district form a Community Facilities District — a CFD — and levy a tax on the parcels inside it to fund public infrastructure: roads, sewers, water, parks, streetlights, fire stations, sometimes schools, plus the interest and financing costs on the bonds issued to build all of it." },
      { t: "p", x: "The reason it exists is Proposition 13. By capping property tax growth in 1978, Prop 13 removed the mechanism California cities had used to fund infrastructure for new development. The CFD was the legislature's replacement: rather than spreading the cost across all existing taxpayers, the residents of the new development pay for the infrastructure that serves them. Which is defensible policy and an unwelcome surprise on a mortgage statement." },
      { t: "callout", x: "Mello-Roos is not based on your home's assessed value. It is set by a formula in the CFD's rate and method of apportionment — often driven by lot size, square footage or unit type. This is why it does not behave like the rest of your tax bill and why it does not automatically fall when values fall." },

      { t: "h", x: "Which San Diego communities have Mello-Roos?" },
      { t: "p", x: "As a rule of thumb: if the neighborhood was built after roughly 1985, assume there is a CFD until you confirm otherwise. The heaviest concentrations in San Diego County are in the North County master-planned communities and the newer South Bay developments." },
      { t: "table",
        head: ["Area", "ZIP", "Typical annual Mello-Roos"],
        rows: [
          ["4S Ranch", "92127", "~$1,000 – $5,000+"],
          ["Del Sur", "92127", "~$1,000 – $5,000+"],
          ["Santaluz", "92127", "Varies widely by parcel"],
          ["Pacific Highlands Ranch", "92130", "~$2,000 – $5,000+"],
          ["Carmel Valley (older tracts)", "92130", "Often $0"],
          ["Scripps Ranch (newer phases)", "92131", "Varies by phase"],
          ["Chula Vista (Otay Ranch, EastLake)", "91913 / 91915", "Commonly $2,000 – $4,000+"],
        ] },
      { t: "p", x: "Treat these as ranges for orientation, not quotes. The actual amount is parcel-specific, and this is the single most important thing to understand about Mello-Roos: two structurally identical houses two streets apart can carry materially different bills because they were built in different phases and fall into different CFDs." },
      { t: "p", x: "Carmel Valley is the clearest illustration. Buyers looking in 92130 frequently assume one tax picture across the ZIP. In practice the older Carmel Valley tracts often carry no CFD tax at all, while newer Pacific Highlands Ranch homes a few minutes away carry $2,000–$5,000+ annually. Over a ten-year hold that difference compounds to somewhere between $20,000 and $50,000-plus — real money that never appears in the list price comparison." },

      { t: "h", x: "How does Mello-Roos affect what I can borrow?" },
      { t: "p", x: "More than most buyers expect, and this is the practical reason to check it early rather than during escrow. Lenders escrow property taxes, and the Mello-Roos special tax is generally included in that escrow. So the annual amount divided by twelve is added to your monthly housing payment — and underwriters count that full amount when computing your debt-to-income ratio." },
      { t: "p", x: "A $4,000 annual CFD tax is about $333 a month of qualifying capacity consumed. At prevailing rates that is roughly $50,000–$60,000 of purchase price you can no longer borrow. I have seen pre-approvals that were accurate for Carmel Valley come up short in Del Sur for exactly this reason, discovered late, with the buyer already emotionally committed to a house." },
      { t: "callout", x: "If you are shopping across both CFD and non-CFD neighborhoods, ask your lender to run your pre-approval both ways. The maximum price you can support is genuinely different in each, and knowing that before you tour is worth more than knowing it after you offer." },

      { t: "h", x: "Does Mello-Roos ever go away?" },
      { t: "p", x: "The bond-financed portion does, eventually. CFD bonds are typically issued with terms in the range of 25 to 40 years, and once they are retired that component of the tax ends. So a 1998 4S Ranch home is meaningfully further through its bond term than a 2019 Del Sur home — a real financial difference between two houses that look comparable." },
      { t: "p", x: "Two important qualifications. First, some CFDs also levy an ongoing services component for maintenance and operations, and that portion does not expire. Second, districts can and do issue refunding bonds, which can extend the timeline. Never assume a specific end date without seeing it in the district's documentation." },
      { t: "p", x: "You can generally pay off the bond portion in a lump sum, and some sellers have. Whether that is worth doing depends on your holding period and the payoff amount — it is a real calculation, not an automatic yes, and it is worth running before you assume a prepaid parcel is worth its premium." },

      { t: "h", x: "How do I check Mello-Roos on a specific property?" },
      { t: "ol", x: [
        "Get the APN — the Assessor's Parcel Number — from the listing, the county assessor's site, or the preliminary title report.",
        "Pull the current secured property tax bill from the San Diego County Treasurer-Tax Collector using that APN. Mello-Roos appears under direct levies or special assessments, itemized separately from the 1% ad valorem tax.",
        "Read the Notice of Special Tax. California law requires the seller to provide it. It states the maximum authorized tax, the escalation rate, and the term.",
        "Check the escalation clause specifically. Many CFDs allow annual increases of up to 2%. Your first-year number is a floor, not a ceiling.",
        "Confirm the total effective tax rate. Add the base 1%, voter-approved bonds, and the CFD together — in heavy-CFD neighborhoods the all-in rate can approach or exceed 1.8% of purchase price.",
        "Give the real number to your lender before you write the offer, not after.",
      ] },
      { t: "p", x: "None of this makes a Mello-Roos community a bad purchase. These districts bought genuinely good infrastructure — the schools, parks and roads in 4S Ranch and Pacific Highlands Ranch are a substantial part of why people want to live there. The mistake is not buying into a CFD. The mistake is buying into one without having priced it." },
    ],
    faqs: [
      { q: "How much is Mello-Roos in 4S Ranch?",
        a: "Commonly $1,000 to $5,000+ per year in 4S Ranch and Del Sur (92127), varying by parcel, lot type and the development phase the home falls in. It is not value-based, so you cannot estimate it from the purchase price — you have to pull the actual tax bill for that specific APN." },
      { q: "Does Carmel Valley have Mello-Roos?",
        a: "It depends on which part. Older Carmel Valley tracts in 92130 frequently have no CFD tax at all, while newer Pacific Highlands Ranch homes in the same ZIP commonly carry $2,000–$5,000+ per year. Never assume based on the ZIP code — verify the parcel." },
      { q: "Is Mello-Roos tax deductible?",
        a: "Generally not, or not fully. The IRS position is that deductible real property taxes must be levied at a uniform rate for general public purposes. Mello-Roos is typically levied by formula to fund specific local improvements, which often makes it non-deductible. Ask your CPA about your specific district rather than assuming the whole tax bill is deductible." },
      { q: "When does Mello-Roos expire?",
        a: "The bond-financed portion typically runs 25 to 40 years from issuance and ends when the bonds are retired. Any ongoing services and maintenance component does not expire. Check the Notice of Special Tax for the specific district, and be aware that refunding bonds can extend the schedule." },
      { q: "Can I negotiate or refuse Mello-Roos?",
        a: "No. It attaches to the parcel and runs with the land, and it is enforced through the property tax system — non-payment can lead to an accelerated foreclosure process that is faster than ordinary tax delinquency. You can sometimes pay off the bond portion in a lump sum, and you can negotiate a seller credit reflecting it, but you cannot opt out." },
      { q: "Does Mello-Roos hurt resale value?",
        a: "It is priced in, though imperfectly. Buyers comparing two similar homes generally do account for a $4,000 annual difference in carrying cost. Where it hurts is at the margin — a heavily taxed home competes against non-CFD alternatives for the same monthly payment, which can narrow your buyer pool. Homes further through their bond term have a genuine advantage that is often under-marketed." },
    ],
    sources: [
      { name: "California Community Facilities Act of 1982 (Mello-Roos)", url: "https://leginfo.legislature.ca.gov/faces/codes_displayexpandedbranch.xhtml?tocCode=GOV&division=2.&title=5.&part=1.&chapter=2.5." },
      { name: "San Diego County Treasurer-Tax Collector — property tax bills", url: "https://www.sdttc.com/" },
      { name: "California State Treasurer — Mello-Roos disclosure guidance", url: "https://www.treasurer.ca.gov/cdiac/" },
    ],
    related: ["buying-in-la-jolla", "reading-a-cma"],
  },

  // ---------------------------------------------------------------- 06
  {
    slug: "international-buyers-san-diego",
    titleZh: "海外買家在聖地牙哥置產指南",
    dekZh: "沒有美國信用紀錄要怎麼貸款、出售時會被預扣的那一筆，以及幾乎沒有人事先提醒的遺產稅風險。",
    answerZh: "在美國購置不動產沒有公民、居留或簽證的限制，外國人可以直接買下聖地牙哥的房子。即使沒有美國信用紀錄或社會安全碼，也能透過外國人專案或 DSCR 貸款取得融資，頭期款通常是兩成到三成。買進之前要先規劃好的有兩件事：日後出售時的 FIRPTA 預扣，以及美國遺產稅——非居民僅有六萬美元的免稅額。",
    category: "International",
    title: "Buying San Diego property as an international buyer",
    dek: "Financing without a US credit file, the withholding rule that applies when you sell, and the estate-tax exposure almost nobody mentions until it is too late.",
    read: "10 min",
    date: "2026-07-02",
    updated: "2026-07-20",
    // Coastal San Diego from the air — the view an overseas buyer forms of the
    // market before they ever stand in it. Cropped from uploads/coastline-aerial.jpg.
    image: "uploads/articles/international.jpg",
    metaTitle: "Buying San Diego Real Estate as a Foreign National (2026 Guide)",
    metaDesc: "A 2026 guide for international buyers of San Diego property — foreign national mortgages without US credit, FIRPTA withholding on resale, the $60,000 non-resident estate tax threshold, and the documents to prepare before you offer.",
    answer:
      "There is no citizenship, residency or visa requirement to buy property in the United States — a foreign national can purchase San Diego real estate outright. Financing is available without a US credit history or Social Security number through foreign national and DSCR loan programs, typically requiring 20–30% down. The two things to plan for before buying are FIRPTA withholding when you eventually sell, and US estate tax exposure, which for non-resident aliens begins above just $60,000 of US-situated assets.",
    sections: [
      { t: "h", x: "Can a foreign national buy property in San Diego?" },
      { t: "p", x: "Yes, without qualification. The United States places no citizenship or residency restriction on real property ownership. You do not need a green card, a visa, or any particular immigration status to take title to a home in San Diego, and buying property does not confer any immigration benefit — the two systems are entirely separate, and I mention it because the question comes up in nearly every first conversation." },
      { t: "p", x: "What you do need is a plan for four things: how you will pay, how you will hold title, what happens tax-wise while you own it, and what happens when you sell or when the property passes to your family. Buyers who address all four before they offer have straightforward transactions. Buyers who address only the first spend escrow solving problems under time pressure." },

      { t: "h", x: "Can I get a US mortgage without US credit history?" },
      { t: "p", x: "Yes. Foreign national lending is an established niche, and as of 2026 it is possible to obtain financing without a Social Security number, without a US credit file, without a US visa and without US-based income. The rates are higher than conventional agency loans and the down payment is larger, but the programs are real and they close routinely." },
      { t: "table",
        head: ["", "Foreign national full-doc", "DSCR loan"],
        rows: [
          ["Qualifies on", "Verified foreign income and assets", "The property's own rental income"],
          ["US credit required", "No", "No"],
          ["SSN / ITIN required", "No (ITIN often helpful)", "No"],
          ["Typical down payment", "25% – 30%", "20% – 30%"],
          ["Personal income documents", "Yes — translated, often notarized", "Not typically"],
          ["Best suited to", "Primary or second home use", "Pure investment purchase"],
        ] },
      { t: "p", x: "Expect 21 to 45 days to close, and start assembling documents early. Foreign income verification takes longer than domestic — statements frequently need certified translation, employer or accountant letters need to be on letterhead, and source-of-funds documentation is scrutinized carefully under anti-money-laundering rules. The delays in these transactions are almost never underwriting decisions; they are documents in transit." },
      { t: "ul", x: [
        "Valid passport, and a second government photo ID.",
        "Two to three months of bank statements showing the down payment funds, with a documented paper trail for the source of those funds.",
        "Proof of income — employment letter, tax filings from your home country, or business ownership documentation, translated.",
        "A credit reference letter from your home-country bank, which some lenders accept in lieu of a US credit file.",
        "An ITIN if you will hold rental income — apply early, as processing is slow.",
      ] },
      { t: "callout", x: "All-cash purchases avoid the financing complexity entirely and are common among international buyers here. They still require full source-of-funds documentation — cash simplifies underwriting, not compliance." },

      { t: "h", x: "What is FIRPTA and when does it affect me?" },
      { t: "p", x: "FIRPTA — the Foreign Investment in Real Property Tax Act — is how the United States ensures it collects tax when a foreign person sells US real estate. It does not affect your purchase. It affects your eventual sale, and you should understand it on the way in rather than on the way out." },
      { t: "p", x: "The mechanism: when a foreign person sells US real property, the buyer, not the seller, is the withholding agent. The buyer must withhold a percentage of the gross sale price and remit it to the IRS using Forms 8288 and 8288-A. The standard rate is 15%." },
      { t: "table",
        head: ["Sale price", "Buyer will use as residence", "Withholding"],
        rows: [
          ["$300,000 or less", "Yes", "None"],
          ["$300,001 – $1,000,000", "Yes", "10%"],
          ["Over $1,000,000", "Yes or no", "15%"],
          ["Any amount", "No", "15%"],
        ] },
      { t: "p", x: "The critical detail is that withholding applies to the gross sale price, not to your gain. Sell a $1.5 million San Diego property and $225,000 goes to the IRS at closing regardless of whether you made money on it. You reconcile the actual liability when you file a US return, and any excess is refunded — but that refund can take a year or more to arrive." },
      { t: "p", x: "If your actual tax liability will be materially less than the withholding, you can apply for a withholding certificate on Form 8288-B to reduce it. This must be filed at or before closing, and the IRS normally acts within 90 days of receiving a complete application. Start it early — this is the most common way international sellers avoid having a large sum sit with the IRS for a year, and it is routinely missed because nobody raised it until the week of closing." },

      { t: "h", x: "The $60,000 problem" },
      { t: "p", x: "This is the item that gets overlooked most often, and it carries the largest potential cost. A US citizen or domiciliary has a federal estate tax exemption in the millions. A non-resident alien has an exemption of $60,000 on US-situated assets — and US real estate is unambiguously a US-situated asset." },
      { t: "p", x: "Concretely: if a non-resident owner of a $2 million San Diego home dies holding it in their personal name, the estate can face US estate tax on roughly $1.94 million of value, at rates reaching 40%. Estate tax treaties between the US and certain countries can modify this significantly, and Taiwan does not have such a treaty with the United States — which is directly relevant to a meaningful share of my clients." },
      { t: "callout", x: "There are established structures that address this — holding entities, certain trust arrangements, financing structures that reduce net US-situated value. All of them must be put in place before purchase, and all of them require a cross-border tax attorney, not a real estate agent. I raise this at the first meeting and refer you to counsel. Please do not skip it because it is inconvenient." },

      { t: "h", x: "What are the ongoing costs of owning?" },
      { t: "p", x: "Property tax under Proposition 13 is 1% of your purchase price as a base, with an effective San Diego rate around 1.1%–1.25% once local bonds are included, and increases to assessed value capped at 2% per year. If you buy in a newer master-planned community, add Mello-Roos on top. Budget separately for insurance, and for HOA dues, which in San Diego condominiums commonly run $400–$900 per month." },
      { t: "p", x: "If you rent the property out, the net rental income is subject to US federal income tax and California state income tax, filed on Form 1040-NR. There is an important election available under which you are taxed on net income after expenses and depreciation rather than facing a flat 30% withholding on gross rents — making that election properly, and on time, is usually worth substantially more than it costs to have a CPA handle it." },

      { t: "h", x: "Working across time zones and languages" },
      { t: "p", x: "Practically speaking, most of my international clients never see the property in person before offering. That works when the diligence is genuinely thorough: full video walkthroughs on live calls rather than edited tours, complete inspection reports with the findings explained rather than forwarded, honest assessment of the street and the neighbors, and a candid opinion about whether the property is worth what it is asking." },
      { t: "p", x: "Signing is handled electronically for most documents. Where a wet signature and notarization are required, a US embassy or consulate can notarize, or an apostille process can be used depending on your country. Wire transfers should be initiated with a buffer of several days — international wires clear more slowly than domestic ones, and escrow timelines do not adjust for that." },
      { t: "p", x: "I conduct business in English, Mandarin and Taiwanese, and documents can be reviewed in either language. About 40% of my clients prefer to work in Mandarin. When the transaction involves cross-border tax questions, I would rather slow down and involve the right professional than move quickly and have you discover the structure was wrong three years later." },
    ],
    faqs: [
      { q: "Can foreigners buy property in California?",
        a: "Yes. There is no citizenship, residency or visa requirement to purchase real property in California or anywhere in the United States. Foreign nationals can buy in their own name or through an entity, and can purchase with cash or with financing designed for borrowers without US credit history." },
      { q: "Do I need a Social Security number to buy a house in the US?",
        a: "No. You can purchase with a passport as identification. Foreign national mortgage programs are specifically designed for borrowers without an SSN or US credit file. You will likely want an ITIN if you plan to rent the property out, since you will have US tax filing obligations — apply early, as processing takes time." },
      { q: "How much is FIRPTA withholding in 2026?",
        a: "The standard rate is 15% of the gross sale price when a foreign person sells US real property. It drops to 10% for sales between $300,001 and $1,000,000 where the buyer will use the property as a residence, and to zero at $300,000 or less with residence use. Withholding is calculated on the gross price, not on your gain." },
      { q: "Does buying property in the US give me a visa or green card?",
        a: "No. Real property ownership confers no immigration status or benefit. The systems are entirely separate. Investment-based immigration programs such as EB-5 have their own requirements that ordinary residential real estate purchases do not satisfy." },
      { q: "What happens to my US property if I die?",
        a: "US real estate held by a non-resident alien is a US-situated asset subject to federal estate tax above a $60,000 exemption, at rates up to 40%. Some countries have estate tax treaties with the US that modify this; Taiwan does not. Ownership structures exist to address the exposure, but they must be established before purchase, with cross-border tax counsel." },
      { q: "Can I buy a San Diego home without visiting in person?",
        a: "Yes, and it is common. It requires disciplined remote diligence — live video walkthroughs rather than edited tours, full inspection reports explained in detail, and an agent willing to tell you what is wrong with a property. Documents are signed electronically; where notarization is required, a US consulate or an apostille process handles it." },
    ],
    sources: [
      { name: "IRS — FIRPTA withholding", url: "https://www.irs.gov/individuals/international-taxpayers/firpta-withholding" },
      { name: "Congressional Research Service — Foreign Investment in Real Property Tax Act", url: "https://www.congress.gov/crs-product/IF12498" },
      { name: "IRS — Estate tax for nonresidents not citizens of the United States", url: "https://www.irs.gov/businesses/small-businesses-self-employed/estate-tax-for-nonresidents-not-citizens-of-the-united-states" },
      { name: "IRS — Form 1040-NR, US nonresident alien income tax return", url: "https://www.irs.gov/forms-pubs/about-form-1040-nr" },
    ],
    related: ["1031-exchange-timing", "mello-roos-san-diego"],
  },
];
