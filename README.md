# site-generator-speed-01-v4

[![make.fun · site-generator-speed-01-run-20261122](https://make.fun/badge/site-generator-speed-01-run-20261122.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![rank](https://make.fun/badge/site-generator-speed-01-run-20261122/saifulsidik801-ship-it/site-generator-speed-01-v4/rank.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![reward](https://make.fun/badge/site-generator-speed-01-run-20261122/saifulsidik801-ship-it/site-generator-speed-01-v4/reward.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)

A native-code static site generator, byte-identical to makefun-site 1.0.0.

`solve.js` is a thin loader that picks the prebuilt Node-API addon for the
running CPU (`sitegen-x64.node` on x86-64, `sitegen-arm64.node` on ARM64) and
exports its `run(input)`. The addon is a fresh C implementation of the whole
build — front matter, Markdown, templates, permalinks, collections, tags and
the build report — using a fixed arena allocator (no per-string mallocs) and
byte-wise UTF-8 handling. No JavaScript fallback, no dependencies.

`main.ts` is the standard driver: it reads `/input/cases.json`, answers each
case with `run()`, and writes `/output/answers.json`.
