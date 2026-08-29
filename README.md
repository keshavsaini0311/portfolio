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
| `src/components/Shell.jsx` | The prompt, the section wrapper, and the top bar. |
| `src/components/Session.jsx` | Every block of the session, in order. |
| `src/index.css` | Design tokens as component classes (`.cmd`, `.dim`, `.tag`). |
| `tailwind.config.js` | Palette and typefaces. |
| `public/Keshav_Saini_Resume.pdf` | The résumé the buttons link to. |

## Keeping it current

The content mirrors `~/Desktop/Resume/main.tex`. When that changes, update
`src/data.js` and drop a fresh PDF at `public/Keshav_Saini_Resume.pdf` — the
filename is referenced from `profile.resume` in `src/data.js`.

## Design notes

The whole page is one terminal session. Sections are not headings — they are
commands, and the content is what those commands printed. `whoami`,
`cat changed.tsv`, `ls -l systems/`.

**Amber phosphor, not acid green.** Every dev terminal reaches for green on
black; this one is warm. The single non-amber colour on the page is `wire`
blue, and it means exactly one thing: this is a link.

The measure is capped at 56rem. A terminal is about eighty columns wide, and
a page that stretches to 1400px stops reading as one.

Everything is Spline Sans Mono. A session has one typeface.

The cursor stops blinking under `prefers-reduced-motion: reduce`.
