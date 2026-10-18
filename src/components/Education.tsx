import { useCallback, useState } from 'react'
import { Award, BadgeCheck, ExternalLink, GraduationCap, Languages, Users, ZoomIn } from 'lucide-react'
import { certifications, education, engagement, languages } from '../data/portfolio'
import Lightbox from './Lightbox'
import { Reveal, Section } from './ui'

export default function Education() {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null)
  const closePreview = useCallback(() => setPreview(null), [])

  return (
    <Section id="education" index="06" eyebrow="Formation" title="Formation & distinctions">
      <div className="grid gap-5 lg:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.08} className="card card-hover flex gap-5 p-6">
            <div className="h-fit rounded-xl bg-accent/10 p-3 text-accent">
              <GraduationCap size={24} />
            </div>
            <div>
              <p className="font-mono text-sm text-accent">{e.period}</p>
              <h3 className="mt-1 text-lg font-semibold">{e.degree}</h3>
              <p className="mt-1 text-muted">{e.school}</p>
              <p className="text-sm text-muted">{e.location}</p>
              {e.detail && <p className="mt-3 text-sm">{e.detail}</p>}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        <Reveal className="card p-6">
          <h3 className="mb-5 flex items-center gap-2 font-semibold">
            <Award size={18} className="text-accent" /> Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.title} className="overflow-hidden rounded-xl border border-line bg-surface-2">
                {c.image && (
                  <button
                    onClick={() => setPreview({ src: c.image, alt: `Certificat ${c.title} — ${c.issuer}` })}
                    aria-label={`Agrandir le certificat ${c.title}`}
                    className="group relative block w-full overflow-hidden"
                  >
                    <img
                      src={c.image}
                      alt={`Certificat ${c.title} — ${c.issuer}`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition-all group-hover:bg-black/45 group-hover:opacity-100">
                      <ZoomIn size={28} />
                    </span>
                  </button>
                )}
                <div className="p-4">
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-muted">
                    {c.issuer} · {c.date}
                  </p>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm text-accent hover:underline"
                  >
                    <BadgeCheck size={14} /> Vérifier le certificat <ExternalLink size={13} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08} className="card p-6">
          <h3 className="mb-5 flex items-center gap-2 font-semibold">
            <Languages size={18} className="text-accent" /> Langues
          </h3>
          <ul className="space-y-4">
            {languages.map((l) => (
              <li key={l.name}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="font-medium">{l.name}</span>
                  <span className="text-muted">{l.level}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                    style={{ width: `${l.value}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.16} className="card p-6">
          <h3 className="mb-5 flex items-center gap-2 font-semibold">
            <Users size={18} className="text-accent" /> Engagement associatif
          </h3>
          <ul className="space-y-3">
            {engagement.map((g) => (
              <li key={g.name} className="flex flex-col items-start gap-1.5 border-b border-line pb-3 last:border-0">
                <span className="font-medium">{g.name}</span>
                <span className="chip">{g.detail}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Lightbox src={preview?.src ?? null} alt={preview?.alt ?? ''} onClose={closePreview} />
    </Section>
  )
}
