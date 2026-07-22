/* Verify the Chinese article overlay lines up with the English source.
 *
 * The renderer zips the two by index, so a length or type mismatch would silently
 * show the wrong paragraph under a heading. Run after editing either file:
 *   npm run check:zh
 */
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const load = async (f, key) => {
  const src = await readFile(join(ROOT, f), "utf8");
  const w = {};
  new Function("window", src)(w);
  return w[key];
};

const EN = await load("articles-content.js", "JR_ARTICLES");
const ZH = await load("articles-content-zh.js", "JR_ARTICLES_ZH");

const problems = [];
for (const a of EN) {
  const z = ZH[a.slug];
  if (!z) { problems.push(`${a.slug}: no Chinese entry`); continue; }

  if (z.sections.length !== a.sections.length)
    problems.push(`${a.slug}: sections ${z.sections.length} vs ${a.sections.length}`);
  a.sections.forEach((s, i) => {
    const t = z.sections[i];
    if (!t) return;
    if (t.t !== s.t) problems.push(`${a.slug}: section ${i} type "${t.t}" vs "${s.t}"`);
    if (s.t === "table") {
      if ((t.head || []).length !== s.head.length)
        problems.push(`${a.slug}: section ${i} table head ${(t.head||[]).length} vs ${s.head.length}`);
      if ((t.rows || []).length !== s.rows.length)
        problems.push(`${a.slug}: section ${i} table rows ${(t.rows||[]).length} vs ${s.rows.length}`);
      (s.rows || []).forEach((r, j) => {
        const zr = (t.rows || [])[j];
        if (zr && zr.length !== r.length)
          problems.push(`${a.slug}: section ${i} row ${j} cells ${zr.length} vs ${r.length}`);
      });
    }
    if ((s.t === "ul" || s.t === "ol") && (t.x || []).length !== s.x.length)
      problems.push(`${a.slug}: section ${i} list items ${(t.x||[]).length} vs ${s.x.length}`);
  });

  if (z.faqs.length !== a.faqs.length)
    problems.push(`${a.slug}: faqs ${z.faqs.length} vs ${a.faqs.length}`);

  // Anything still untranslated?
  const cjk = s => /[一-鿿]/.test(String(s));
  z.sections.forEach((s, i) => {
    const text = s.t === "table" ? [...(s.head||[]), ...(s.rows||[]).flat()].join("") : [].concat(s.x || "").join("");
    // Tables and short cells are mostly numbers and place names; only flag prose.
    if (s.t !== "table" && text.length > 12 && !cjk(text))
      problems.push(`${a.slug}: section ${i} looks untranslated — "${text.slice(0,40)}"`);
  });
  z.faqs.forEach((f, i) => {
    if (!cjk(f.q) || !cjk(f.a)) problems.push(`${a.slug}: faq ${i} looks untranslated`);
  });
}

const totals = EN.reduce((acc, a) => {
  acc.sections += a.sections.length; acc.faqs += a.faqs.length; return acc;
}, { sections: 0, faqs: 0 });

if (problems.length) {
  console.error(`✗ ${problems.length} problem(s):`);
  problems.forEach(p => console.error("   " + p));
  process.exit(1);
}
console.log(`✓ ${EN.length} articles aligned — ${totals.sections} sections, ${totals.faqs} FAQ pairs, EN and ZH match`);
