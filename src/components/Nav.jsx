import { profile } from '../data'

const links = [
  { href: '#systems', label: 'Work' },
  { href: '#built', label: 'Projects' },
  { href: '#toolkit', label: 'Tools' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:bg-paper focus:p-2">Skip to content</a>
      <nav aria-label="Main navigation" className="mx-auto grid h-[var(--nav-height)] max-w-page grid-cols-[1fr_auto] items-center gap-x-6 px-5 sm:flex sm:justify-between sm:px-8">
        <a href="#top" className="inline-flex min-h-11 items-center font-mono text-sm font-semibold tracking-tight sm:mr-auto">
          keshav<span className="text-cobalt">.</span>saini
        </a>
        <ul className="order-3 col-span-2 flex w-full items-center justify-between gap-2 sm:order-none sm:w-auto sm:gap-5 lg:gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-flex min-h-11 items-center text-sm text-graphite transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
            <a
              href={profile.resume}
              className="inline-flex min-h-11 items-center font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-cobalt underline decoration-cobalt/30 underline-offset-4 hover:decoration-cobalt"
            >
              Résumé
            </a>
      </nav>
    </header>
  )
}
