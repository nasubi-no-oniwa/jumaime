import { build } from "esbuild"; import fs from "fs";
const [entry, html, out] = process.argv.slice(2);
const r = await build({ entryPoints: [entry], bundle: true, format: "esm", minify: true, write: false, target: "es2020", legalComments: "none" });
const js = r.outputFiles[0].text.replace(/<\/script/g, "<\\/script");
fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync(out, fs.readFileSync(html, "utf8").replace("/*BUNDLE*/", () => js));
console.log(out, (fs.statSync(out).size / 1024 | 0) + "KB");
