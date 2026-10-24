import { useEffect, useState } from 'react'
import { profile, stream } from '../data'

const WINDOW = 8
const BASE = 1042
const TICK = 2100

// ponytail: one interval, no library. matchMedia keeps the log static for
// anyone who has asked the OS to stop things moving.
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

function Console() {
  const reduced = usePrefersReducedMotion()
  const [cursor, setCursor] = useState(0)

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => setCursor((c) => c + 1), TICK)
    return () => clearInterval(id)
  }, [reduced])

  const rows = Array.from({ length: WINDOW }, (_, i) => {
    const record = stream[(cursor + i) % stream.length]
    return { ...record, offset: BASE + cursor + i, depth: i }
  })

  return (
    <div className="overflow-hidden rounded-lg border border-console bg-console shadow-[0_24px_48px_-24px_rgba(18,22,29,0.55)]">
      <div className="flex items-center justify-between border-b border-console-line px-4 py-2.5">
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-console-dim">
          engineering work
        </span>
        <span className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-console-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          replaying
        </span>
      </div>

      <ol className="px-4 py-4 font-mono text-[0.6875rem] leading-relaxed sm:text-xs">
        {rows.map((row, i) => (
          <li
            key={row.offset}
            style={{
              opacity: 0.6 + (0.4 * row.depth) / (WINDOW - 1),
              animationDelay: cursor === 0 ? `${i * 70}ms` : '0ms',
            }}
            /* The three oldest records only exist to give the log depth — on a
               phone they cost two lines each, so they drop out. */
            className={`${row.depth < 3 ? 'hidden sm:grid' : 'grid'} min-w-0 grid-cols-[auto_1fr] gap-x-3 py-[3px] motion-safe:animate-[logIn_420ms_ease-out_both] xl:grid-cols-[auto_10.5rem_1fr]`}
          >
            <span className="tabular-nums text-console-dim">{row.offset}</span>
            <span className="text-sky-300">{row.topic}</span>
            <span className="col-span-2 break-words text-slate-300 xl:col-span-1">{row.detail}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="screen-section">
      <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
        <div className="min-w-0">
          <p className="eyebrow">
            {profile.role} · {profile.company} · {profile.location}
          </p>

          <h1 className="display mt-5 text-[clamp(3rem,8vw,6.5rem)]">
            Keshav
            <br />
            Saini
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-ink/80 sm:text-xl">
            {profile.lede}
          </p>
          <p className="mt-4 text-sm text-graphite">Intern to full-time at HaBuild · Open to relocation</p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs">
            <a
              href={profile.resume}
              className="rounded-sm bg-ink px-4 py-2.5 uppercase tracking-[0.14em] text-paper transition-colors hover:bg-cobalt"
            >
              Read the résumé
            </a>
            <a href="https://syncsofa.onrender.com/" className="link inline-flex min-h-10 items-center uppercase tracking-[0.14em]">
              Try SyncSofa
            </a>
            <a href={profile.github} className="link inline-flex min-h-10 items-center uppercase tracking-[0.14em]">
              GitHub
            </a>
          </div>
        </div>

        <div className="hidden w-full min-w-0 max-w-2xl md:block">
          <Console />
          <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-graphite">
            {stream.length} things I shipped, replaying on a loop
          </p>
        </div>
      </div>
    </section>
  )
}
