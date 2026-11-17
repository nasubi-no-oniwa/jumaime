# 十枚目

番町皿屋敷のホラーゲーム（なすびのお庭）。 https://nasubi-no-oniwa.github.io/jumaime/

- 見下ろしの3D。毎回間取りの変わる屋敷（広さは同じ）で鍵をさがし、門から出る
- 頭に十枚目の皿。走りすぎると落ちて割れ、お菊の速さが十倍になる
- 押し入れに隠れて、すき間からのぞける。音なしでも遊べる
- ランキングは「門を出るまでの時間」（ft-blue）。日本語・英語・繁体中文・韓国語

## 作りかた
- `npm i` のあと `node build.mjs src/game.js src/game.html index.html` で公開する1枚の index.html ができる
  - 4つ目に `dev` をつけると、調べるための入口（window.__g）が入る。公開するものには入れない
  - 5つ目に `ads` をつけると、広告の部分（src/ads.html）が入る
- `okiku/index.html` は、お菊さんと捕まる場面だけを見るページ
- `database.rules.jumaime.json` を上げると、自動で ft-blue に反映される（.github/workflows/rules.yml）
- `node test/rules-test.mjs` で、ルールを手元でまねて確かめられる

## 使っているもの
- three.js / GSAP / pixelfx（MIT。vendor/pixelfx に同梱）
- 絵・音・声はすべてプログラムで作っている（AI生成の絵は使っていない）
