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
| `src/components/Sections.jsx` | Evidence, Systems, Built, Tools, and the footer. |
| `src/index.css` | Design tokens as component classes (`.display`, `.eyebrow`, `.chip`). |
| `tailwind.config.js` | Palette and typefaces. |
| `public/Keshav_Saini_Resume.pdf` | The résumé the buttons link to. |

## Keeping it current

The content mirrors `~/Desktop/Life/career/resume/main.tex`. When that changes, update
`src/data.js` and drop a fresh PDF at `public/Keshav_Saini_Resume.pdf` — the
filename is referenced from `profile.resume` in `src/data.js`.

`recentWork` contains the latest engineering case studies. Keep metrics tied to
verified evidence; distinguish app DAU, configured room limits and automated test
counts. Public case studies must omit internal repository names, ticket IDs and
colleague details.

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
