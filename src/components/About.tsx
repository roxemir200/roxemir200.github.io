import { about } from '../data/portfolio'
import { uiIcons } from './icons'
import { Reveal, Section } from './ui'

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="À propos" title={about.headline}>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {about.highlights.map((h, i) => {
            const Icon = uiIcons[h.icon]
            return (
              <Reveal key={h.title} delay={i * 0.08} className="card card-hover p-5">
                <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-2.5 text-accent">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{h.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
