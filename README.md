# keshav.saini — portfolio

One page. React + Vite + Tailwind, two runtime dependencies.

Use Node.js 24.x (`nvm use` if nvm is installed). `package.json` pins the
deployment runtime; `.nvmrc` keeps local development on the same major version.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run lint
```

## Where things live

| File | What it holds |
| --- | --- |
| `src/data.js` | Every word of content on the page. Edit here, not in the components. |
| `src/components/Hero.jsx` | Name block and the live event console. |
| `src/components/Sections.jsx` | Work with impact results, SyncSofa, tools and contact. |
| `src/index.css` | Design tokens as component classes (`.display`, `.eyebrow`, `.chip`). |
| `tailwind.config.js` | Palette and typefaces. |
| `public/Keshav_Saini_Resume.pdf` | The résumé the buttons link to. |

## Keeping it current

The content mirrors `~/Desktop/Life/career/resume/main.tex`. When that changes, update
`src/data.js` and drop a fresh PDF at `public/Keshav_Saini_Resume.pdf` — the
filename is referenced from `profile.resume` in `src/data.js`.

Keep the copy short and aligned with the current resume. Metrics must have
verified evidence. Omit internal repository names, ticket IDs and colleague
details. A redesign belongs in a separate PR.

As of 24 October 2026, Vercel previews are enabled only for
`portfolio/recent-work-and-syncsofa`, at Keshav's request. Other branches,
including production `main`, remain disabled in `vercel.json`. SyncSofa's demo
remains hosted on Render.

## Design notes

Colours have jobs, not moods. **Cobalt** means "you can click this."
**Rust** appears only on the arrow between a before and an after. The dark
console in the hero is the one loud object on the page; everything around it
stays quiet on purpose.

Type is Archivo (display, width axis pushed wide), Newsreader (prose), and
IBM Plex Mono (data and labels).

The console pauses and renders its full list statically under
`prefers-reduced-motion: reduce`.

Four sections use a viewport minimum height below the sticky navigation, with
natural growth for longer content on small screens. Work and impact results
share a section; tools and contact share another. SyncSofa uses an original
interface concept illustration linked to its live demo, not a product screenshot.
Navigation remains available on phones; the decorative console is hidden below
the tablet breakpoint.

Layout references: [Brittany Chiang](https://brittanychiang.com/) for concise work
summaries, [Rauno Freiberg](https://rauno.me/) for restraint, and
[Lee Robinson](https://leerob.com/) for direct navigation. This retains the
existing visual identity rather than implementing the deferred redesign.
