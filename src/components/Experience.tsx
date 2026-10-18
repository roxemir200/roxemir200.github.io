import { Briefcase, Calendar, ExternalLink, MapPin } from 'lucide-react'
import { experiences } from '../data/portfolio'
import { Chip, Reveal, Section } from './ui'

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Expérience"
      title="Parcours professionnel"
      subtitle="Des stages qui couvrent tout le cycle de vie logiciel : développement, qualité, déploiement et infrastructure."
    >
      <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-10">
        {experiences.map((exp, i) => (
          <li key={exp.company} className="relative">
            <span className="absolute top-6 -left-[31px] flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-accent bg-bg sm:-left-[47px]" />
            <Reveal delay={i * 0.05} className="card card-hover p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 font-medium text-accent">
                    <Briefcase size={15} /> {exp.company}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-1 text-sm text-muted sm:items-end">
                  <span className="inline-flex items-center gap-1.5 font-mono">
                    <Calendar size={14} /> {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {exp.points.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed text-muted">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {exp.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
                {exp.link && (
                  <a
                    href={exp.link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                  >
                    {exp.link.label} <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
