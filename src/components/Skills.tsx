import { skillGroups } from '../data/portfolio'
import { skillIcons, uiIcons } from './icons'
import { Reveal, Section } from './ui'

export default function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Compétences"
      title="Ma boîte à outils technique"
      subtitle="Les langages, frameworks et outils que j'utilise pour concevoir, tester et déployer."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, gi) => {
          const GroupIcon = uiIcons[group.icon]
          return (
            <Reveal key={group.title} delay={gi * 0.08} className="card p-6">
              <h3 className="mb-5 flex items-center gap-2.5 font-semibold">
                <span className="rounded-lg bg-accent/10 p-2 text-accent">
                  <GroupIcon size={18} />
                </span>
                {group.title}
              </h3>
              <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {group.skills.map((s) => {
                  const { Icon, color } = skillIcons[s.icon]
                  return (
                    <li
                      key={s.name}
                      className="group flex items-center gap-2.5 rounded-xl border border-line bg-surface-2 px-3 py-2.5 text-sm transition-all hover:-translate-y-0.5 hover:border-accent"
                    >
                      <Icon size={18} style={{ color }} className="shrink-0 transition-transform group-hover:scale-110" />
                      <span className="truncate">{s.name}</span>
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
