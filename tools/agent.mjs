/* Single source of truth for Jean's details across the generated static pages
 * (articles/*.html and card/*). The SPA reads the same values from data.js —
 * if you change one, change the other.
 */

// Production origin — canonical URLs, sitemap, Open Graph images and schema @ids.
//
// This MUST point at a host that actually serves the site: telling search engines the
// canonical version of every page lives somewhere with no content invites them to drop
// the real pages from the index.
//
// www.soldbyjean.com is the GitHub Pages custom domain for this repo; the bare
// soldbyjean.com redirects to it (see the CNAME file and
// the "Domain" section of the README). The old https://youfun88.github.io/jeanify/ URLs
// redirect to it, path included, so links and QR codes printed before the move still work.
// To move domains again, change the defaults here and in build-articles.mjs, the CNAME
// file, the Pages setting, and the absolute URLs in index.html, llms.txt and robots.txt.
export const SITE = process.env.JEANIFY_SITE || "https://www.soldbyjean.com";

// The card URL is encoded into a QR code that gets printed, texted and scanned, so
// it is kept separately settable: a printed QR cannot be re-pointed later.
export const CARD_URL = process.env.JEANIFY_CARD_URL || "https://www.soldbyjean.com/card/";

export const AGENT = {
  name: "Jean Riley",
  first: "Jean",
  last: "Riley",
  title: "Realtor®",
  license: "DRE# 02004228",
  team: "Jeanify",
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
