/* Compile every *.jsx in the repo root to *.compiled.js.
 *
 * The browser loads the .compiled.js files directly — there is no bundler and no
 * runtime Babel. Output is the plain preset-react transform wrapped in an IIFE so
 * that each module's top-level consts stay off `window`; modules publish their
 * public surface explicitly (window.JR_CORE, window.JR_PAGES, …).
 *
 * Run after editing any .jsx:  npm run build
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { transformAsync } from "@babel/core";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const files = (await readdir(ROOT)).filter((f) => f.endsWith(".jsx")).sort();
if (!files.length) {
  console.error("No .jsx files found in", ROOT);
  process.exit(1);
}

let changed = 0;
for (const file of files) {
  const src = await readFile(join(ROOT, file), "utf8");
  const { code } = await transformAsync(src, {
    filename: file,
    presets: [["@babel/preset-react", {}]],
    babelrc: false,
    configFile: false,
  });

  const out = `(function(){\n${code}\n})();\n`;
  const dest = join(ROOT, file.replace(/\.jsx$/, ".compiled.js"));

  const prev = await readFile(dest, "utf8").catch(() => null);
  if (prev === out) {
    console.log(`  =  ${file}`);
    continue;
  }
  await writeFile(dest, out, "utf8");
  console.log(`  →  ${file}  ⇒  ${file.replace(/\.jsx$/, ".compiled.js")}`);
  changed++;
}

console.log(`\n${files.length} file(s) checked, ${changed} rewritten.`);
