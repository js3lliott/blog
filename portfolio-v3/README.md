# Jordan Samek — Portfolio v3 ("Control Room")

A standalone, dependency-free portfolio built as a **dashboard**: the page reads like an
instrument panel, which is the work itself — audience intelligence, partnership measurement, and
data storytelling.

`portfolio-v2/` and the original Next.js blog in the parent directory are untouched.

## Preview locally

From this directory:

```sh
python3 -m http.server 4175 --bind 127.0.0.1
```

Open http://localhost:4175. No installation or build step.

## Hosting

Deploy this directory as a static site. On Vercel: framework preset **Other**, **Root Directory**
`portfolio-v3`, empty build command, output directory `.`. Do not reuse the parent blog's Next.js
settings.

No environment variables, accounts, databases, analytics, or forms. Contact opens the visitor's
email client; the copy button uses the local clipboard only.

## Design direction

Reference: **https://ana.sh/** (Are.na channel
[Personal Sites](https://www.are.na/kelindi/personal-sites-_sxervw2jmu)) — a personal dashboard of
live modules. The layout concept, palette, typography, and all artwork here are original; no
reference assets or code were copied.

- **Ground** — deep blue-black control-room surface (`#0b0e13`) with two faint signal washes.
- **Accent** — sodium/scoreboard amber (`#f2a93b`), with periwinkle and rose reserved for data
  series in the timeline. One dominant accent; everything else stays quiet.
- **Type** — Fraunces (self-hosted variable serif) for the human voice, the system sans for prose,
  and monospace for every label, value, and readout — the instrument voice.
- **Theme** — deliberately single-theme dark, matching the reference's committed visual world.

Fraunces is licensed under the SIL Open Font License 1.1 and is self-hosted in `fonts/`, so the
page makes no third-party requests and satisfies the strict CSP in `vercel.json`.

## Files

- `index.html` — all copy, projects, career timeline, and links.
- `styles.css` — design tokens, bento grid, panel styling, responsive rules.
- `script.js` — progressive enhancement only: Toronto clock, tenure, work filters, copy button,
  panel reveal.
- `fonts/fraunces-var.woff2` — self-hosted display face.
- `favicon.svg` — original signal-bars mark.

Without JavaScript the page is fully readable: every project study is a native `<details>`
element, and the filter bar and copy button stay hidden rather than appearing inert. Panels
force-reveal shortly after load so content can never be stranded invisible by a failed observer.
Motion preferences are respected throughout.

## Content sources and editorial choices

Read on September 12, 2026:

- LinkedIn: https://www.linkedin.com/in/jordan-samek/ — public profile only.
- Role context: the Wasserman/THE·TEAM posting for
  [Senior Manager, Performance & Insights](https://teamwass.wd5.myworkdayjobs.com/en-US/WassermanCareers/details/Senior-Manager--Performance---Insights_R5340),
  retrieved via the public Workday job API.
- Project copy, career history, and positioning carried forward from `portfolio-v2/index.html`,
  which was itself checked against LinkedIn and the project repositories on September 5, 2026.

Editorial rules kept from v2:

- The title shown is **Manager, Performance & Insights** (LinkedIn, THE·TEAM, September 2025–
  present). The Senior Manager posting informs the framing of the method and focus areas only — it
  is not presented as a held title, and no team-management or client-ownership claims are made.
- No client identities, confidential work, invented results, or numerical performance claims.
  Current agency work is described at a high level only.
- The only "live" figures are genuinely computed in the browser: Toronto local time, tenure in the
  current role, and the footer year. Nothing is simulated.
- The career timeline plots real role spans and dates; the legend distinguishes operations roles,
  data roles, and the current position.
- The old résumé is not linked because it predates the current role.

## Review before publishing

Confirm the title, the career timeline dates, and the "off the clock" details still hold, then
deploy. This site has not been deployed.
