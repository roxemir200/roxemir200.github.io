import { CheckCircle2, ExternalLink, Star, Trophy } from 'lucide-react'
import { SiCodeforces, SiHackerrank } from 'react-icons/si'
import { competitive } from '../data/portfolio'
import { Reveal, Section } from './ui'

const platformIcons = {
  HackerRank: { Icon: SiHackerrank, color: '#00EA64' },
  Codeforces: { Icon: SiCodeforces, color: '#1F8ACB' },
} as const

function Stars({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count} étoiles`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={12} className={i < count ? 'fill-amber-400 text-amber-400' : 'text-line'} />
      ))}
    </span>
  )
}

export default function Competitive() {
  const { tcpc, platforms } = competitive

  return (
    <Section
      id="competitive"
      index="05"
      eyebrow="Programmation compétitive"
      title="L'algorithmique comme terrain d'entraînement"
      subtitle={competitive.intro}
    >
      <Reveal className="card grid overflow-hidden lg:grid-cols-[1.15fr_1fr]">
        <figure className="relative min-w-0">
          <img src={tcpc.photo} alt={tcpc.photoAlt} loading="lazy" className="h-full max-h-[460px] w-full object-cover" />
          <figcaption className="absolute bottom-3 left-3 rounded-lg bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur">
            TCPC — équipe ESPRIT
          </figcaption>
        </figure>
        <div className="flex min-w-0 flex-col p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-amber-500/10 p-2.5 text-amber-500">
              <Trophy size={22} />
            </span>
            <div className="flex gap-2">
              {tcpc.editions.map((y) => (
                <span key={y} className="chip">
                  Édition {y}
                </span>
              ))}
            </div>
          </div>
          <h3 className="mt-5 text-2xl font-bold">{tcpc.title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{tcpc.description}</p>
          <ul className="mt-5 space-y-2.5">
            {tcpc.points.map((p) => (
              <li key={p} className="flex gap-2.5 text-sm">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {platforms.map((p, i) => {
          const { Icon, color } = platformIcons[p.platform as keyof typeof platformIcons]
          return (
            <Reveal key={p.platform} delay={i * 0.08} className="card card-hover flex flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-3">
                  <Icon size={28} style={{ color }} />
                  <span>
                    <span className="block font-semibold">{p.platform}</span>
                    <span className="font-mono text-xs text-muted">{p.handle}</span>
                  </span>
                </span>
                <span className="text-right">
                  <span className="block text-3xl font-extrabold text-gradient">{p.value}</span>
                  <span className="text-xs text-muted">{p.label}</span>
                </span>
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
              {p.badges.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.badges.map((b) => (
                    <li key={b.name} className="flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm">
                      {b.name} <Stars count={b.stars} />
                    </li>
                  ))}
                </ul>
              )}
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                Voir le profil <ExternalLink size={14} />
              </a>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
