/* Single source of truth for Jean's details across the generated static pages
 * (articles/*.html and card/*). The SPA reads the same values from data.js —
 * if you change one, change the other.
 */

// Production origin — canonical URLs, sitemap, Open Graph images and schema @ids.
//
// This MUST point at a host that actually serves the site. It previously pointed at
// jeanriley.com, which is a parked domain: every path there returns the same 114-byte
// stub that redirects to /lander. Telling search engines the canonical version of
// every page lives at a domain with no content is worse than having no canonical at
// all — it invites them to drop the real pages from the index.
//
// TO ADOPT jeanriley.com once its DNS points at GitHub Pages:
//   1. Verify it serves the real site:  curl -sI https://jeanriley.com/ | head -1
//   2. Add a CNAME file at the repo root containing:  jeanriley.com
//   3. Rebuild and commit:
//        JEANIFY_SITE=https://jeanriley.com \
//        JEANIFY_CARD_URL=https://jeanriley.com/card/ npm run build
//   4. Update the absolute URLs in index.html, llms.txt and robots.txt to match.
//   Do NOT add the CNAME file before DNS resolves — GitHub Pages will start
//   redirecting github.io to a domain that does not serve the site.
export const SITE = process.env.JEANIFY_SITE || "https://youfun88.github.io/jeanify";

// The card URL is encoded into a QR code that gets printed, texted and scanned, so
// it is kept separately settable: a printed QR cannot be re-pointed later.
export const CARD_URL = process.env.JEANIFY_CARD_URL || "https://youfun88.github.io/jeanify/card/";

export const AGENT = {
  name: "Jean Riley",
  first: "Jean",
  last: "Riley",
  title: "Realtor®",
  license: "DRE# 02004228",
  brokerage: "Jeanify",
  phone: "+18585983888",
  phoneDisplay: "(858) 598-3888",
  email: "Jean@CentermacSD.com",
  street: "9888 Carroll Centre Rd, Ste 200",
  city: "San Diego",
  region: "CA",
  postal: "92126",
  country: "USA",
  youtube: "https://www.youtube.com/@soldbyjean",
  youtubeHandle: "@soldbyjean",
  zillow: "https://www.zillow.com/profile/JeanSD",
  languages: "English · 中文 · 台語",
  tagline: "San Diego Realtor® — coastal homes, commercial property and 1031 Exchange. 200+ verified closings.",
  logo: SITE + "/uploads/jeanify-logo-brass.png",
};
