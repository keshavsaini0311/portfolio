import { ledger, systems, projects, stack, proof, profile } from '../data'

// The eyebrow names the kind of claim the section makes, so the labels carry
// information rather than counting to five.
function Section({ id, label, title, children, className = '' }) {
  return (
    <section id={id} className={`screen-section ${className}`}>
      <div className="section-head">
        <span className="eyebrow shrink-0">{label}</span>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="mt-8 w-full sm:mt-10">{children}</div>
    </section>
  )
}

export function Evidence() {
  return (
    <Section id="evidence" label="Measured" title="What changed">
      <dl className="grid gap-x-12 sm:grid-cols-2">
        {ledger.map((row) => (
          <div
            key={row.metric}
            className="min-w-0 border-b border-rule py-6"
          >
            <dt className="font-mono text-xs uppercase tracking-[0.14em] text-graphite">
              {row.metric}
            </dt>
            <dd>
              <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-display text-[clamp(1.35rem,2.3vw,2rem)]" style={{ fontVariationSettings: "'wdth' 108, 'wght' 600" }}>
                <span className="text-graphite">{row.before}</span>
                <span className="text-rust" aria-label="became">
                  →
                </span>
                <span className="font-semibold text-ink">{row.after}</span>
              </p>
              <p className="mt-2 max-w-2xl leading-relaxed text-ink/70">{row.note}</p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export function Systems() {
  return (
    <Section id="systems" label="Owned" title="Selected work">
      <div className="grid gap-px overflow-hidden rounded-lg border border-rule bg-rule md:grid-cols-3">
        {systems.map((s) => (
          <article
            key={s.name}
            className="min-w-0 bg-paper p-5 lg:p-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-display text-xl" style={{ fontVariationSettings: "'wdth' 108, 'wght' 700" }}>
                {s.name}
              </h3>
              <span className="shrink-0 font-mono text-[0.6875rem] tracking-tight text-rust">
                {s.scale}
              </span>
            </div>
            <p className="mt-3 leading-relaxed text-ink/75">{s.body}</p>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-graphite">
              {s.highlights.map((point) => <li key={point}>{point}</li>)}
            </ul>
            {s.stack.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {s.stack.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}

export function Built() {
  return (
    <Section id="built" label="Side work" title="Built for myself">
      <div className="w-full">
        {projects.map((p) => (
          <article key={p.name} className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
            <div className="min-w-0">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-display text-4xl sm:text-5xl" style={{ fontVariationSettings: "'wdth' 108, 'wght' 700" }}>
                {p.name}
              </h3>
              <span className="shrink-0 font-mono text-[0.6875rem] text-graphite">{p.period}</span>
            </div>
            <p className="mt-5 max-w-xl text-xl leading-relaxed text-ink/75">{p.body}</p>
            <p className="mt-6 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.1em]">
              <a href={p.live} className="inline-flex min-h-11 items-center rounded bg-ink px-5 text-paper transition-colors hover:bg-cobalt">Try live demo ↗</a>
              <a href={p.code} className="link inline-flex min-h-11 items-center">View source ↗</a>
            </p>
            </div>
            <div className="min-w-0 border-t border-rule pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <ul className="list-disc space-y-3 pl-4 leading-relaxed text-ink/75">
              {p.highlights.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-graphite">Free demo: rooms reset when the server restarts.</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export function Toolkit() {
  return (
    <Section id="toolkit" label="Verified" title="Tools and receipts">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <dl className="border-t border-rule">
          {stack.map((g) => (
            <div key={g.group} className="grid gap-x-8 gap-y-2 border-b border-rule py-5 sm:grid-cols-[10rem_1fr]">
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-graphite">
                {g.group}
              </dt>
              <dd className="min-w-0 font-mono text-sm leading-relaxed text-ink">{g.items.join('  ·  ')}</dd>
            </div>
          ))}
        </dl>

        <dl className="border-t border-rule">
          {proof.map((p) => {
            const value = (
              <>
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-graphite">
                  {p.label}
                </dt>
                <dd className="mt-1">
                  <span className="font-display text-lg" style={{ fontVariationSettings: "'wdth' 106, 'wght' 600" }}>
                    {p.value}
                  </span>
                  <span className="ml-3 text-sm text-graphite">{p.note}</span>
                </dd>
              </>
            )
            return (
              <div key={p.label} className="border-b border-rule py-5">
                {p.href ? (
                  <a href={p.href} className="block transition-colors hover:text-cobalt">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </div>
            )
          })}
        </dl>
      </div>
    </Section>
  )
}

export function Contact() {
  return (
    <footer id="contact" className="bg-console text-paper">
      <div className="screen-section">
        <h2 className="font-display text-3xl font-semibold sm:text-5xl">Let’s talk.</h2>
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-console-dim">
          Open to SDE-1 and backend roles · India or relocating
        </p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-300">Interested in backend platforms, distributed systems and product engineering.</p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-6 block break-words font-display text-[clamp(1.5rem,4.5vw,3.25rem)] font-semibold text-paper transition-colors hover:text-sky-300"
        >
          {/* One line on a laptop; on a phone it folds at the @, not mid-word. */}
          {profile.email.split('@')[0]}
          <wbr />@{profile.email.split('@')[1]}
        </a>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-console-line pt-6 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-console-dim">
          <span>{profile.location}</span>
          <div className="flex flex-wrap gap-6">
            <a href={profile.github} className="transition-colors hover:text-paper">
              GitHub
            </a>
            <a href={profile.linkedin} className="transition-colors hover:text-paper">
              LinkedIn
            </a>
            <a href={profile.resume} className="transition-colors hover:text-paper">
              Résumé
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-paper">
              {profile.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
