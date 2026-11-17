import { build } from "esbuild"; import fs from "fs";
// 使い方: node build.mjs <入口.js> <ひな形.html> <出力.html> [dev]   （dev をつけると、調べるための入口 window.__g が入る。公開するものには入れない）
const [entry, html, out, dev] = process.argv.slice(2);
const r = await build({ entryPoints: [entry], bundle: true, format: "esm", minify: true, write: false, target: "es2020", legalComments: "none", define: { __DEV__: dev === "dev" ? "true" : "false" } });
const js = r.outputFiles[0].text.replace(/<\/script/g, "<\\/script");
fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync(out, fs.readFileSync(html, "utf8").replace("/*BUNDLE*/", () => js));
console.log(out, (fs.statSync(out).size / 1024 | 0) + "KB");
