# keshav.saini — portfolio

One page. React + Vite + Tailwind, two runtime dependencies.

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
| `src/components/Map.jsx` | The interactive service map and its detail panel. |
| `src/components/Sections.jsx` | Changed, Built, Tools, and the footer. |
| `src/index.css` | Design tokens as component classes (`.display`, `.eyebrow`, `.chip`). |
| `tailwind.config.js` | Palette and typefaces. |
| `public/Keshav_Saini_Resume.pdf` | The résumé the buttons link to. |

## Keeping it current

The content mirrors `~/Desktop/Resume/main.tex`. When that changes, update
`src/data.js` and drop a fresh PDF at `public/Keshav_Saini_Resume.pdf` — the
filename is referenced from `profile.resume` in `src/data.js`.

## Design notes

The page is an engineering print: drafting-paper ground with a faint grid,
and the service map as the one thing it is built around.

Colours have jobs, not moods. **Viridian** is the plotter pen — structure,
links, the selected node. **Hot rust** marks an event in flight and nothing
else. Type is Martian Mono for anything technical and Instrument Sans for
prose.

Node coordinates are hand-placed in `src/data.js` on a fixed layout grid.
Eight nodes do not need a physics engine, and a fixed layout stays legible at
every width. Below `md` the graph becomes a list — a node diagram is
unreadable at 360px.

Kafka edges stop marching under `prefers-reduced-motion: reduce`.
