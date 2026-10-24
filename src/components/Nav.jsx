import { profile } from '../data'

const links = [
  { href: '#evidence', label: 'Evidence' },
  { href: '#systems', label: 'Systems' },
  { href: '#built', label: 'Built' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex max-w-page items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          keshav<span className="text-cobalt">.</span>saini
        </a>
        {/* ponytail: no hamburger. Five anchors on a one-page site aren't worth a
            drawer — on mobile the page is the menu, so only the résumé stays. */}
        <ul className="flex items-center gap-5 sm:gap-7">
          {links.map((l) => (
            <li key={l.href} className="hidden sm:block">
              <a
                href={l.href}
                className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-graphite transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resume}
              className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-cobalt underline decoration-cobalt/30 underline-offset-4 hover:decoration-cobalt"
            >
              Résumé
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
