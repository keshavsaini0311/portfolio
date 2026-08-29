import { profile } from '../data'

const links = [
  { href: '#changed', label: 'changed' },
  { href: '#systems', label: 'systems' },
  { href: '#built', label: 'built' },
  { href: '#contact', label: 'contact' },
]

/** The prompt line that opens every section. It is the section heading. */
export function Prompt({ children, id }) {
  return (
    <h2 id={id} className="scroll-mt-16 text-sm sm:text-base">
      <span className="dim select-none">keshav@habuild</span>
      <span className="dim select-none">:~$ </span>
      <span className="cmd font-medium">{children}</span>
    </h2>
  )
}

/** A prompt plus its output. Sections are commands; content is what they printed. */
export function Block({ id, command, children }) {
  return (
    <section className="border-t border-seam py-10 first:border-t-0 sm:py-14">
      <Prompt id={id}>{command}</Prompt>
      <div className="mt-6 sm:mt-8">{children}</div>
    </section>
  )
}

export function Bar() {
  return (
    <header className="sticky top-0 z-50 border-b border-seam bg-shell/95 backdrop-blur">
      <div className="mx-auto flex max-w-page items-center justify-between px-5 py-2.5 sm:px-8">
        <span className="text-xs">
          <span className="dim">keshav@habuild</span>
          <span className="dim">:</span>
          <span className="text-amber">~</span>
        </span>
        <nav className="flex items-center gap-4 text-xs sm:gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="dim hidden transition-colors hover:text-amber sm:inline"
            >
              {l.label}
            </a>
          ))}
          <a href={profile.resume} className="link">
            resume.pdf
          </a>
        </nav>
      </div>
    </header>
  )
}
