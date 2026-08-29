import { profile } from '../data'

const links = [
  { href: '#map', label: 'Map' },
  { href: '#changed', label: 'Changed' },
  { href: '#built', label: 'Built' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-draft/90 backdrop-blur">
      <nav className="mx-auto flex max-w-page items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="font-mono text-xs font-semibold tracking-[-0.02em]">
          keshav<span className="text-viridian">/</span>saini
        </a>
        <ul className="flex items-center gap-5 sm:gap-7">
          {links.map((l) => (
            <li key={l.href} className="hidden sm:block">
              <a href={l.href} className="label transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resume}
              className="label text-viridian underline decoration-viridian/30 underline-offset-4 hover:decoration-viridian"
            >
              Résumé
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
