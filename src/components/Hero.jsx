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
          habuild · production
        </span>
        <span className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-console-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          consuming
        </span>
      </div>

      <ol className="px-4 py-4 font-mono text-[0.6875rem] leading-relaxed sm:text-xs">
        {rows.map((row, i) => (
          <li
            key={row.offset}
            style={{
              opacity: 0.34 + (0.66 * row.depth) / (WINDOW - 1),
              animationDelay: cursor === 0 ? `${i * 70}ms` : '0ms',
            }}
            /* The three oldest records only exist to give the log depth — on a
               phone they cost two lines each, so they drop out. */
            className={`${row.depth < 3 ? 'hidden sm:grid' : 'grid'} grid-cols-[auto_1fr] gap-x-3 py-[3px] motion-safe:animate-[logIn_420ms_ease-out_both] sm:grid-cols-[auto_10.5rem_1fr] sm:whitespace-nowrap`}
          >
            <span className="tabular-nums text-console-dim">{row.offset}</span>
            <span className="text-sky-300">{row.topic}</span>
            <span className="col-span-2 text-slate-400 sm:col-span-1">{row.detail}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-page px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
      {/* Side by side only at xl. The name and the console each have a hard
          min-content floor (526px + 572px + gap); below 1280 they don't both
          fit, and a grid can't shrink past min-content — it pushes the page
          sideways instead. So they stack. */}
      <div className="grid items-center gap-12 xl:grid-cols-[1fr_1.05fr] xl:gap-16">
        <div>
          <p className="eyebrow">
            {profile.role} · {profile.company} · {profile.location}
          </p>

          <h1 className="display mt-5 text-[clamp(3.25rem,11vw,6.5rem)]">
            Keshav
            <br />
            Saini
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-ink/80 sm:text-xl">
            {profile.lede}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs">
            <a
              href={profile.resume}
              className="rounded-sm bg-ink px-4 py-2.5 uppercase tracking-[0.14em] text-paper transition-colors hover:bg-cobalt"
            >
              Read the résumé
            </a>
            <a href={profile.github} className="link uppercase tracking-[0.14em]">
              GitHub
            </a>
            <a href={profile.linkedin} className="link uppercase tracking-[0.14em]">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Capped so the stacked layout doesn't stretch a 572px-wide log
            across a 960px column. At xl the track is narrower than this anyway. */}
        <div className="max-w-2xl">
          <Console />
          <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-graphite">
            {stream.length} things I shipped, replaying on a loop
          </p>
        </div>
      </div>
    </section>
  )
}
