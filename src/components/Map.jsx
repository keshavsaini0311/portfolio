import { useEffect, useState } from 'react'
import { services, links } from '../data'

// Cropped to the ink: nodes span x 71..754, y 51..460 on the layout grid.
const VIEW = '52 34 700 452'
const byId = Object.fromEntries(services.map((s) => [s.id, s]))

// Martian Mono is wide, so a fixed box overflows on the longer names. Size each
// box to its own label instead. ponytail: an advance-width constant beats
// measuring text in the DOM for eight static labels.
const size = (s) => {
  const hub = s.id === 'sdk'
  return { w: Math.max(92, s.short.length * (hub ? 9.8 : 8.9) + 34), h: hub ? 46 : 38 }
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const on = () => setReduced(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return reduced
}

function Detail({ node }) {
  return (
    <div className="border border-rule bg-panel p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-mono text-base font-semibold tracking-[-0.02em] sm:text-lg">
          {node.label}
        </h3>
        <span className="label text-viridian">{node.role}</span>
      </div>
      <p className="mt-4 max-w-3xl leading-relaxed text-ink/80">{node.detail}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {node.tags.map((t) => (
          <li key={t} className="tag">
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Map() {
  const [selected, setSelected] = useState('sdk')
  const reduced = usePrefersReducedMotion()
  const node = byId[selected]
  const touches = (l) => l.from === selected || l.to === selected

  return (
    <section id="map" className="mx-auto max-w-page px-5 pb-16 sm:px-8">
      <div className="flex items-baseline gap-4 border-t border-ink pt-4">
        <span className="label shrink-0">Owned</span>
        <h2 className="section-title">The map</h2>
      </div>

      <p className="mt-4 max-w-2xl leading-relaxed text-graphite">
        Seven services and the shared library in the middle that every one of them imports.
        Dashed lines are Kafka topics. Pick a box to read what I built inside it.
      </p>

      {/* The diagram itself. A viewBox means it scales cleanly to any width. */}
      <svg
        viewBox={VIEW}
        /* Capped: filling 1184px would blow the boxes up to poster size. */
        className="mx-auto mt-6 hidden h-auto w-full max-w-3xl md:block"
        role="group"
        aria-label="Service map. Use the list below on smaller screens."
      >
        {links.map((l) => {
          const a = byId[l.from]
          const b = byId[l.to]
          const lit = touches(l)
          const kafka = l.kind === 'kafka'
          return (
            <line
              key={`${l.from}-${l.to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={kafka ? '#B03A1A' : '#0B6E4F'}
              strokeWidth={lit ? 2 : 1}
              strokeOpacity={lit ? 0.95 : 0.28}
              strokeDasharray={kafka ? '6 6' : undefined}
            >
              {kafka && lit && !reduced && (
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-24"
                  dur="0.9s"
                  repeatCount="indefinite"
                />
              )}
            </line>
          )
        })}

        {services.map((s) => {
          const { w, h } = size(s)
          const on = s.id === selected
          return (
            <g
              key={s.id}
              className="node cursor-pointer"
              tabIndex={0}
              role="button"
              aria-pressed={on}
              aria-label={`${s.label}. ${s.role}`}
              onClick={() => setSelected(s.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelected(s.id)
                }
              }}
            >
              <rect
                x={s.x - w / 2}
                y={s.y - h / 2}
                width={w}
                height={h}
                fill={on ? '#0B6E4F' : '#F3F4EF'}
                stroke={on ? '#0B6E4F' : '#C3C9BE'}
                strokeWidth={1.5}
              />
              <text
                x={s.x}
                y={s.y + 4}
                textAnchor="middle"
                className="font-mono"
                fontSize={s.id === 'sdk' ? 12 : 11}
                fontWeight={s.id === 'sdk' ? 600 : 400}
                fill={on ? '#E9EBE5' : '#1A1E1B'}
              >
                {s.short}
              </text>
            </g>
          )
        })}
      </svg>

      {/* A node graph is unreadable at 360px, so below md the same data is a list. */}
      <ul className="mt-8 grid gap-px border border-rule bg-rule md:hidden">
        {services.map((s) => {
          const on = s.id === selected
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => setSelected(s.id)}
                aria-pressed={on}
                className={`flex w-full items-baseline justify-between gap-4 px-4 py-3 text-left transition-colors ${
                  on ? 'bg-viridian text-draft' : 'bg-panel'
                }`}
              >
                <span className="font-mono text-[0.6875rem]">{s.label}</span>
                <span
                  className={`label shrink-0 ${on ? 'text-draft/80' : ''}`}
                >
                  {s.id === 'sdk' ? 'hub' : 'service'}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <div className="mt-6">
        <Detail node={node} />
      </div>

      <p className="label mt-4 flex flex-wrap gap-x-6 gap-y-1">
        <span>
          <span className="text-viridian">——</span> imports the shared SDK
        </span>
        <span>
          <span className="text-hot">– – –</span> Kafka topic
        </span>
      </p>
    </section>
  )
}
