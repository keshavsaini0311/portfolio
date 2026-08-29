import { ledger, projects, stack, proof, profile } from '../data'

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-page px-5 py-14 sm:px-8 sm:py-20">
      <div className="flex items-baseline gap-4 border-t border-ink pt-4">
        <span className="label shrink-0">{label}</span>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  )
}

export function Changed() {
  return (
    <Section id="changed" label="Measured" title="What changed">
      <p className="mb-10 max-w-2xl leading-relaxed text-graphite">
        Every line here is a before and an after. The middle part — the weeks of reading traces
        and arguing about indexes — is the actual job.
      </p>

      <dl className="border-t border-rule">
        {ledger.map((row) => (
          <div
            key={row.metric}
            className="grid gap-x-10 gap-y-3 border-b border-rule py-7 lg:grid-cols-[15rem_1fr]"
          >
            <dt className="label pt-1">{row.metric}</dt>
            <dd>
              <p className="font-mono text-lg font-semibold tracking-[-0.02em] sm:text-xl">
                <span className="font-normal text-graphite">{row.before}</span>
                <span className="mx-3 text-hot" aria-label="became">
                  →
                </span>
                <span>{row.after}</span>
              </p>
              <p className="mt-2 max-w-3xl leading-relaxed text-ink/70">{row.note}</p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export function Built() {
  return (
    <Section id="built" label="Side work" title="Built for myself">
      <div className="grid gap-px border border-rule bg-rule sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className="bg-panel p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-mono text-sm font-semibold tracking-[-0.02em]">{p.name}</h3>
              <span className="label shrink-0">{p.period}</span>
            </div>
            <p className="mt-4 leading-relaxed text-ink/75">{p.body}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex gap-5">
              <a href={p.code} className="label link">
                Source
              </a>
              <a href={p.live} className="label link">
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
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <dl className="border-t border-rule">
          {stack.map((g) => (
            <div
              key={g.group}
              className="grid gap-x-8 gap-y-2 border-b border-rule py-5 sm:grid-cols-[9rem_1fr]"
            >
              <dt className="label pt-0.5">{g.group}</dt>
              <dd className="font-mono text-[0.6875rem] leading-loose">{g.items.join('  ·  ')}</dd>
            </div>
          ))}
        </dl>

        <dl className="border-t border-rule">
          {proof.map((p) => {
            const body = (
              <>
                <dt className="label">{p.label}</dt>
                <dd className="mt-1.5 flex flex-wrap items-baseline gap-x-3">
                  <span className="font-mono text-sm font-semibold tracking-[-0.02em]">
                    {p.value}
                  </span>
                  <span className="text-sm text-graphite">{p.note}</span>
                </dd>
              </>
            )
            return (
              <div key={p.label} className="border-b border-rule py-5">
                {p.href ? (
                  <a href={p.href} className="block transition-colors hover:text-viridian">
                    {body}
                  </a>
                ) : (
                  body
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
    <footer id="contact" className="bg-ink text-draft">
      <div className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-24">
        <p className="label text-draft/60">
          Open to SDE-1 and backend roles · India or relocating
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="display mt-6 block break-words text-[clamp(1.125rem,3.6vw,2.25rem)] transition-colors hover:text-viridian"
        >
          {profile.email.split('@')[0]}
          <wbr />@{profile.email.split('@')[1]}
        </a>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-draft/15 pt-6">
          <span className="label text-draft/60">{profile.location}</span>
          <div className="flex flex-wrap gap-6">
            {[
              [profile.github, 'GitHub'],
              [profile.linkedin, 'LinkedIn'],
              [profile.resume, 'Résumé'],
              [`tel:${profile.phone.replace(/\s/g, '')}`, profile.phone],
            ].map(([href, text]) => (
              <a
                key={text}
                href={href}
                className="label text-draft/60 transition-colors hover:text-draft"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
