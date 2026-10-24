import { ledger, systems, projects, stack, proof, profile } from '../data'

function Section({ id, title, children }) {
  return (
    <section id={id} className="screen-section">
      <h2 className="section-title">{title}</h2>
      <div className="mt-7 w-full sm:mt-9">{children}</div>
    </section>
  )
}

function Evidence() {
  return (
    <div id="evidence" className="impact-grid">
      {ledger.map((row) => (
        <div key={row.metric} className="min-w-0 border-t border-rule py-5">
          <h3 className="text-sm text-graphite">{row.metric}</h3>
          <p className="mt-3 font-display text-lg text-graphite">{row.before}</p>
          <p className="mt-1 font-display text-[clamp(1.45rem,2.5vw,2.4rem)] font-semibold leading-tight text-ink">
            <span className="mr-2 text-cobalt" aria-label="became">→</span>{row.after}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-graphite">{row.note}</p>
        </div>
      ))}
    </div>
  )
}

export function Systems() {
  return (
    <Section id="systems" title="Selected work">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
        <div className="min-w-0">
          {systems.map((system) => (
            <article key={system.name} className="work-row">
              <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
                <h3 className="font-display text-xl font-semibold">{system.name}</h3>
                <span className="text-xs text-graphite">{system.scale}</span>
              </div>
              <p className="mt-3 max-w-xl leading-relaxed text-ink/80">{system.body}</p>
              <ul className="mt-2 space-y-1 text-sm leading-relaxed text-graphite">
                {system.highlights.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <Evidence />
      </div>
    </Section>
  )
}

function SyncVisual() {
  return (
    <figure className="sync-visual" aria-label="Diagram of SyncSofa playback and peer-to-peer calls">
      <div className="flex items-center justify-between gap-4 border-b border-white/15 px-5 py-4 text-sm text-slate-300">
        <span className="font-display font-semibold text-white">SyncSofa</span>
        <span>Room concept</span>
      </div>
      <div className="px-6 py-7 sm:px-9 sm:py-9">
        <div className="video-diagram">
          <svg viewBox="0 0 72 72" className="h-16 w-16" aria-hidden="true">
            <circle cx="36" cy="36" r="34" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M29 23 49 36 29 49Z" fill="currentColor" />
          </svg>
          <span className="absolute bottom-5 left-5 text-sm text-slate-300">YouTube playback</span>
        </div>
        <div className="relative mt-5 h-1 rounded bg-white/15" aria-hidden="true">
          <div className="h-full w-2/5 rounded bg-sky-300" />
          <div className="absolute left-[40%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-sky-300" />
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
          <div className="flex -space-x-2" aria-label="Up to six peers">
            {['#7DD3FC', '#C4B5FD', '#A7F3D0', '#FDBA74', '#FDA4AF', '#CBD5E1'].map((color) => (
              <span key={color} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-console" style={{ background: color }}>
                <svg viewBox="0 0 20 20" className="h-5 w-5 text-console" aria-hidden="true"><circle cx="10" cy="6" r="3" fill="currentColor" /><path d="M4 17v-2a6 6 0 0 1 12 0v2" fill="currentColor" /></svg>
              </span>
            ))}
          </div>
          <p className="text-sm text-slate-300">Peer-to-peer calls</p>
        </div>
        <figcaption className="mt-7 border-t border-white/15 pt-4 text-xs leading-relaxed text-slate-400">
          Playback and chat sync over WebSockets. Calls connect browsers directly.
        </figcaption>
      </div>
    </figure>
  )
}

export function Built() {
  return (
    <Section id="built" title="Built for myself">
      {projects.map((project) => (
        <article key={project.name} className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
          <a href={project.live} aria-label="Open SyncSofa live demo" className="block min-w-0 rounded-xl"><SyncVisual /></a>
          <div className="min-w-0">
            <p className="text-sm text-graphite">{project.period}</p>
            <h3 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{project.name}</h3>
            <p className="mt-5 max-w-lg text-xl leading-relaxed text-ink/80">{project.body}</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-graphite">
              {project.highlights.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-graphite">{project.stack.join(' / ')}</p>
            <div className="mt-7 flex flex-wrap gap-5 text-sm">
              <a href={project.live} className="inline-flex min-h-11 items-center rounded bg-ink px-5 font-semibold text-paper transition-colors hover:bg-cobalt">Try SyncSofa</a>
              <a href={project.code} className="link inline-flex min-h-11 items-center">View source</a>
            </div>
            <p className="mt-4 text-xs text-graphite">Free demo: rooms reset when the server restarts.</p>
          </div>
        </article>
      ))}
    </Section>
  )
}

export function Toolkit() {
  return (
    <Section id="toolkit" title="Tools and background">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
        <dl>
          {stack.map((group) => (
            <div key={group.group} className="grid gap-x-6 gap-y-2 border-t border-rule py-4 sm:grid-cols-[8rem_1fr]">
              <dt className="text-sm text-graphite">{group.group}</dt>
              <dd className="min-w-0 text-sm leading-relaxed text-ink">{group.items.join(' / ')}</dd>
            </div>
          ))}
        </dl>
        <dl>
          {proof.map((item) => (
            <div key={item.label} className="border-t border-rule py-4">
              <dt className="text-sm text-graphite">{item.label}</dt>
              <dd className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                {item.href ? <a href={item.href} className="link font-display text-lg font-semibold">{item.value}</a> : <span className="font-display text-lg font-semibold">{item.value}</span>}
                <span className="text-sm text-graphite">{item.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <footer id="contact" className="mt-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-t border-ink pt-6 sm:mt-10">
        <div className="min-w-0">
          <p className="text-sm text-graphite">Open to backend roles. Based in Bengaluru, open to relocation.</p>
          <a href={`mailto:${profile.email}`} className="mt-2 block break-words font-display text-[clamp(1.2rem,2.6vw,2rem)] font-semibold hover:text-cobalt">{profile.email}</a>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <a href={profile.github} className="link inline-flex min-h-11 items-center">GitHub</a>
          <a href={profile.linkedin} className="link inline-flex min-h-11 items-center">LinkedIn</a>
          <a href={profile.resume} className="link inline-flex min-h-11 items-center">Resume</a>
        </div>
      </footer>
    </Section>
  )
}
