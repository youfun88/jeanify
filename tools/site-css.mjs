/* styles.css, ready to inline into a generated page's <head>.
 *
 * Inlined rather than linked because the stylesheet was the one request standing
 * between the HTML and the first paint: on a phone connection it cost roughly a second
 * of First Contentful Paint (measured with Lighthouse, devtools throttling, A/B on the
 * same page). It is ~14 KB gzipped. styles.css stays the source of truth and is still
 * linked by 404.html, card/ and v2/.
 *
 * Relative url()s are made root-absolute so the CSS works at any page depth.
 */
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

export async function siteCss() {
  const css = (await readFile(join(ROOT, "styles.css"), "utf8"))
    .replace(/\/\*[\s\S]*?\*\//g, "")                       // comments
    .replace(/url\((["']?)(?!data:|https?:|\/)/g, "url($1/")   // relative url() -> /…
    .replace(/\n\s*\n+/g, "\n")
    .replace(/^\s+/gm, "")
    .trim();
  if (/<\/style/i.test(css)) throw new Error("styles.css contains </style — cannot inline");
  return `<style id="site-css">\n${css}\n</style>`;
}
