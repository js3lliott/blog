# Jordan Samek — Portfolio v2

A standalone, dependency-free portfolio. The original Next.js blog in the parent directory is unchanged.

## Preview locally

From this directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://localhost:4173. No installation or build step is needed.

## Hosting

Deploy this directory as a static site. For Vercel, select **Other** as the framework preset, set **Root Directory** to `portfolio-v2`, leave the build command empty, and use `.` as the output directory. Do not use the parent blog's Next.js settings for this site.

No environment variables, accounts, databases, or API keys are required. The site does not include analytics or forms. Contact opens the visitor's email application.

## Editing

- `index.html`: all professional copy, projects, links, and career history.
- `styles.css`: design tokens, responsive layouts, and illustration styling.
- `script.js`: progressively enhanced project filters, project fragment links, copy-email feedback, and footer year.
- `favicon.svg`: original typographic mark.

Native disclosure elements make project studies usable without JavaScript. Without JavaScript, filters and the copy button stay hidden and all five projects remain visible. Motion preferences are respected.

## Content sources and editorial choices

Read on September 5, 2026:

- LinkedIn: https://www.linkedin.com/in/jordan-samek/ — read from the user's signed-in Chrome tab. Public professional information only was used.
- Role context: https://teamwass.wd5.myworkdayjobs.com/en-US/WassermanCareers/details/Senior-Manager--Performance---Insights_R5340
- Inspiration collection: https://www.are.na/kelindi/personal-sites-_sxervw2jmu
- Primary visual reference: https://www.raygaeta.com/ (Are.na block 50138263). The expressive serif type, dark ground, and project storytelling informed an original layout and original SVG artwork. No reference assets or code were copied.
- Also reviewed: https://www.chrisrodriguez.me/ (Are.na block 50074186).
- Project context and repository URLs: the existing `data/projectsData.js` in the parent blog, cross-checked with LinkedIn's featured projects and experience descriptions.

LinkedIn identifies the current position as **Manager, Performance & Insights**, THE·TEAM, September 2025–present. The supplied job posting is for a **Senior Manager** position; its broad themes inform the approach section but are not presented as the user's title, achievements, or proof of team management. No client identities, confidential work, invented results, or numerical performance claims were added. All project graphics are explicitly conceptual.

The old résumé was not linked because it predates the current role. LinkedIn serves as the up-to-date professional reference. The original blog, résumé, content, and dependencies remain intact.

## Review before publishing

The work descriptions are paraphrases of the sources above. Current agency work is represented at a high level. Add approved client studies only when appropriate source material is available. This site has not been deployed.
