import { ledger, systems, projects, stack, proof, profile } from '../data'

// The eyebrow names the kind of claim the section makes, so the labels carry
// information rather than counting to five.
function Section({ id, label, title, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto max-w-page px-5 py-14 sm:px-8 sm:py-20 ${className}`}>
      <div className="section-head">
        <span className="eyebrow shrink-0">{label}</span>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  )
}

export function Evidence() {
  return (
    <Section id="evidence" label="Measured" title="What changed">
      <p className="mb-10 max-w-xl text-lg leading-relaxed text-graphite">
        Every line here is a before and an after. The middle part — the weeks of reading
        traces and arguing about indexes — is the actual job.
      </p>

      <dl className="border-t border-rule">
        {ledger.map((row) => (
          <div
            key={row.metric}
            /* The 16rem label track only earns its keep at lg; at md it steals
               the width the before→after pair needs and forces a wrap. */
            className="grid gap-x-10 gap-y-3 border-b border-rule py-7 lg:grid-cols-[16rem_1fr]"
          >
            <dt className="font-mono text-xs uppercase tracking-[0.14em] text-graphite">
              {row.metric}
            </dt>
            <dd>
              <p className="font-display text-2xl sm:text-3xl" style={{ fontVariationSettings: "'wdth' 108, 'wght' 600" }}>
                <span className="text-graphite">{row.before}</span>
                <span className="mx-3 text-rust" aria-label="became">
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
    <Section id="systems" label="Owned" title="Systems I run">
      <div className="grid gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-2">
        {systems.map((s, i) => (
          <article
            key={s.name}
            /* The grid's hairlines come from a bg-rule backing, so an unfilled
               cell paints as a grey box. With an odd count the last card takes
               the whole row instead. */
            className={`bg-paper p-6 sm:p-8 ${
              systems.length % 2 === 1 && i === systems.length - 1 ? 'sm:col-span-2' : ''
            }`}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-xl" style={{ fontVariationSettings: "'wdth' 108, 'wght' 700" }}>
                {s.name}
              </h3>
              <span className="shrink-0 font-mono text-[0.6875rem] tracking-tight text-rust">
                {s.scale}
              </span>
            </div>
            <p className="mt-3 leading-relaxed text-ink/75">{s.body}</p>
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
      <div className="grid gap-10 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className="border-t border-ink pt-5">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-xl" style={{ fontVariationSettings: "'wdth' 108, 'wght' 700" }}>
                {p.name}
              </h3>
              <span className="shrink-0 font-mono text-[0.6875rem] text-graphite">{p.period}</span>
            </div>
            <p className="mt-3 leading-relaxed text-ink/75">{p.body}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 flex gap-5 font-mono text-[0.6875rem] uppercase tracking-[0.14em]">
              <a href={p.code} className="link">
                Source
              </a>
              <a href={p.live} className="link">
                Live
              </a>
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export function Toolkit() {
  return (
    <Section id="toolkit" label="Verified" title="Tools and receipts">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
        <dl className="border-t border-rule">
          {stack.map((g) => (
            <div key={g.group} className="grid gap-x-8 gap-y-2 border-b border-rule py-5 sm:grid-cols-[10rem_1fr]">
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-graphite">
                {g.group}
              </dt>
              <dd className="font-mono text-sm leading-relaxed text-ink">{g.items.join('  ·  ')}</dd>
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
    <footer id="contact" className="mt-8 bg-console text-paper">
      <div className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-console-dim">
          Open to SDE-1 and backend roles · India or relocating
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="display mt-6 block break-words text-[clamp(1.75rem,5.5vw,3.25rem)] text-paper transition-colors hover:text-sky-300"
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
