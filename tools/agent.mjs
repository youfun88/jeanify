/* Single source of truth for Jean's details across the generated static pages
 * (articles/*.html and card/*). The SPA reads the same values from data.js —
 * if you change one, change the other.
 */

// Production origin used for canonical URLs and schema.
export const SITE = process.env.JEANIFY_SITE || "https://jeanriley.com";

// Where the digital business card actually lives. Kept separate from SITE on
// purpose: this URL gets encoded into a QR code that ends up printed, texted and
// scanned, so it must point somewhere that is verified live rather than somewhere
// we intend to move to. GitHub Pages serves this today.
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
