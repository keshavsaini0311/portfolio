import { profile, ledger, systems, projects, stack, proof } from '../data'
import { Block, Prompt } from './Shell'

export function Whoami() {
  return (
    <section id="top" className="py-10 sm:py-14">
      <Prompt>whoami</Prompt>

      <div className="mt-8">
        <h1 className="text-[clamp(1.5rem,6vw,3rem)] font-bold uppercase leading-[1.1] tracking-[-0.04em] text-amber-bright">
          Keshav Saini
        </h1>
        <p className="dim mt-2 text-xs sm:text-sm">
          sde-1 · backend · {profile.company.toLowerCase()} · bengaluru, india
        </p>

        <p className="mt-7 max-w-2xl leading-relaxed">{profile.lede}</p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <a
            href={profile.resume}
            className="border border-amber px-3 py-2 text-amber-bright transition-colors hover:bg-amber hover:text-shell"
          >
            open resume.pdf
          </a>
          <a href={profile.github} className="link">
            github
          </a>
          <a href={profile.linkedin} className="link">
            linkedin
          </a>
        </div>
      </div>
    </section>
  )
}

export function Changed() {
  return (
    <Block id="changed" command="cat changed.tsv">
      <div className="dim hidden gap-x-8 border-b border-seam pb-2 text-[0.625rem] uppercase tracking-[0.12em] sm:grid sm:grid-cols-[14rem_1fr]">
        <span>metric</span>
        <span>before → after</span>
      </div>

      <dl>
        {ledger.map((row) => (
          <div
            key={row.metric}
            className="grid gap-x-8 gap-y-1 border-b border-seam py-5 sm:grid-cols-[14rem_1fr]"
          >
            <dt className="dim text-[0.625rem] uppercase tracking-[0.12em] sm:pt-1">
              {row.metric}
            </dt>
            <dd>
              <p className="text-sm sm:text-base">
                <span className="dim">{row.before}</span>
                <span className="mx-2 text-amber-bright" aria-label="became">
                  →
                </span>
                <span className="font-semibold text-amber-bright">{row.after}</span>
              </p>
              <p className="dim mt-2 max-w-3xl text-xs leading-relaxed sm:text-sm">{row.note}</p>
            </dd>
          </div>
        ))}
      </dl>
    </Block>
  )
}

export function Systems() {
  return (
    <Block id="systems" command="ls -l systems/">
      <ul className="space-y-7">
        {systems.map((s) => (
          <li key={s.name} className="border-l border-seam pl-4 sm:pl-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <span className="text-sm text-amber-bright sm:text-base">
                {s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/
              </span>
              <span className="dim shrink-0 text-[0.6875rem]">{s.scale}</span>
            </div>
            <p className="mt-2 max-w-3xl text-xs leading-relaxed sm:text-sm">{s.body}</p>
            {s.stack.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {s.stack.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Block>
  )
}

export function Built() {
  return (
    <Block id="built" command="cat projects/*.md">
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className="border border-seam bg-raised p-5 sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-sm text-amber-bright">
                {p.name.toLowerCase().replace(/\s+/g, '-')}.md
              </h3>
              <span className="dim shrink-0 text-[0.6875rem]">{p.period}</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed sm:text-sm">{p.body}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 flex gap-5 text-xs">
              <a href={p.code} className="link">
                source
              </a>
              <a href={p.live} className="link">
                live
              </a>
            </p>
          </article>
        ))}
      </div>
    </Block>
  )
}

export function Toolkit() {
  return (
    <Block id="toolkit" command="cat toolkit.md receipts.txt">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <dl>
          {stack.map((g) => (
            <div
              key={g.group}
              className="grid gap-x-8 gap-y-1 border-b border-seam py-4 sm:grid-cols-[8rem_1fr]"
            >
              <dt className="dim text-[0.625rem] uppercase tracking-[0.12em] sm:pt-1">
                {g.group}
              </dt>
              <dd className="whitespace-pre-wrap text-xs leading-loose sm:text-sm">
                {g.items.join('  ')}
              </dd>
            </div>
          ))}
        </dl>

        <dl>
          {proof.map((p) => {
            const body = (
              <>
                <dt className="dim text-[0.625rem] uppercase tracking-[0.12em]">{p.label}</dt>
                <dd className="mt-1 flex flex-wrap items-baseline gap-x-3">
                  <span className="text-sm font-semibold text-amber-bright">{p.value}</span>
                  <span className="dim text-xs">{p.note}</span>
                </dd>
              </>
            )
            return (
              <div key={p.label} className="border-b border-seam py-4">
                {p.href ? (
                  <a href={p.href} className="block transition-colors hover:text-wire">
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
    </Block>
  )
}

export function Contact() {
  return (
    <footer className="border-t border-seam py-10 sm:py-14">
      <Prompt id="contact">mail {profile.email}</Prompt>

      <div className="mt-7">
        <p className="dim text-xs sm:text-sm">
          Open to SDE-1 and backend roles. India, or relocating anywhere.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-4 block break-words text-[clamp(1rem,3.4vw,1.75rem)] font-semibold tracking-[-0.03em] text-amber-bright transition-colors hover:text-wire"
        >
          {profile.email.split('@')[0]}
          <wbr />@{profile.email.split('@')[1]}
        </a>

        <div className="dim mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs">
          <span>{profile.location.toLowerCase()}</span>
          {[
            [profile.github, 'github'],
            [profile.linkedin, 'linkedin'],
            [profile.resume, 'resume.pdf'],
            [`tel:${profile.phone.replace(/\s/g, '')}`, profile.phone],
          ].map(([href, text]) => (
            <a key={text} href={href} className="transition-colors hover:text-amber">
              {text}
            </a>
          ))}
        </div>

        <p className="dim mt-10 text-sm" aria-hidden="true">
          keshav@habuild:~${' '}
          <span className="motion-safe:animate-[blink_1.1s_steps(1)_infinite]">▌</span>
        </p>
      </div>
    </footer>
  )
}
