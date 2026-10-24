import { profile } from '../data'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-page px-5 pb-10 pt-10 sm:px-8 sm:pt-14">
      <p className="label">
        {profile.role} · {profile.company} · {profile.location}
      </p>

      <h1 className="display mt-5 text-[clamp(1.75rem,5.6vw,3.5rem)]">
        Keshav
        <br />
        Saini
      </h1>

      <p className="mt-6 max-w-2xl leading-relaxed text-ink/80">{profile.lede}</p>

      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href={profile.resume}
          className="label bg-ink px-4 py-2.5 text-draft transition-colors hover:bg-viridian"
        >
          Read the résumé
        </a>
        <a href={profile.github} className="label link">
          GitHub
        </a>
        <a href={profile.linkedin} className="label link">
          LinkedIn
        </a>
      </div>
    </section>
  )
}
