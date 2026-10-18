import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, ExternalLink, Folder, Star } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { profile, projectFilters, projects, type Project } from '../data/portfolio'
import { Chip, Reveal, Section } from './ui'

function ProjectLinks({ links }: { links: Project['links'] }) {
  return (
    <div className="flex items-center gap-3">
      {links.code && (
        <a
          href={links.code}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          <FaGithub size={16} /> Code
        </a>
      )}
      {links.demo && (
        <a
          href={links.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          <ExternalLink size={16} /> Démo
        </a>
      )}
    </div>
  )
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} className="h-full w-full object-cover" />
  }
  return (
    <div className="bg-grid relative flex h-full w-full items-center justify-center bg-surface-2">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent-2/20" />
      <div className="relative w-4/5 rounded-xl border border-line bg-bg/80 p-4 font-mono text-xs shadow-2xl backdrop-blur sm:text-sm">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        <p className="text-muted">
          <span className="text-accent-2">const</span> <span className="text-fg">project</span> = {'{'}
        </p>
        <p className="pl-4 text-muted">
          name: <span className="text-emerald-400">'{project.title}'</span>,
        </p>
        <p className="truncate pl-4 text-muted">
          stack: [<span className="text-accent">{project.tags.slice(0, 3).map((t) => `'${t}'`).join(', ')}</span>],
        </p>
        <p className="text-muted">{'}'}</p>
      </div>
    </div>
  )
}

function FeaturedProject({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <Reveal className="card card-hover grid overflow-hidden md:grid-cols-2">
      <div className={`aspect-video min-w-0 md:aspect-auto ${reverse ? 'md:order-2' : ''}`}>
        <ProjectVisual project={project} />
      </div>
      <div className="flex min-w-0 flex-col p-6 sm:p-8">
        <p className="mb-2 inline-flex items-center gap-1.5 font-mono text-xs text-accent">
          <Star size={13} className="fill-current" /> Projet phare {project.period && `· ${project.period}`}
        </p>
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
        {project.highlights && (
          <ul className="mt-4 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
        <div className="mt-auto pt-6">
          <ProjectLinks links={project.links} />
        </div>
      </div>
    </Reveal>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="card card-hover flex flex-col p-6"
    >
      <div className="mb-5 flex items-center justify-between">
        <Folder size={34} className="text-accent" strokeWidth={1.5} />
        <ProjectLinks links={project.links} />
      </div>
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-1 text-sm text-accent/90">{project.subtitle}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>('Tous')
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured && (filter === 'Tous' || p.categories.includes(filter)))
  const usedFilters = projectFilters.filter(
    (f) => f === 'Tous' || projects.some((p) => !p.featured && p.categories.includes(f)),
  )

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projets"
      title="Ce que j'ai construit"
      subtitle="Une sélection de projets professionnels et académiques, du full-stack à l'infrastructure."
    >
      <div className="space-y-8">
        {featured.map((p, i) => (
          <FeaturedProject key={p.title} project={p} reverse={i % 2 === 1} />
        ))}
      </div>

      <Reveal className="mt-20 mb-8 flex flex-wrap items-end justify-between gap-4">
        <h3 className="text-2xl font-bold">Autres projets</h3>
        <div className="flex flex-wrap gap-2" role="tablist">
          {usedFilters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                filter === f
                  ? 'border-accent bg-accent text-accent-contrast'
                  : 'border-line text-muted hover:border-accent hover:text-fg'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {others.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>

      <Reveal className="mt-12 text-center">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 font-medium transition-colors hover:border-accent"
        >
          <FaGithub size={18} /> Voir tout sur GitHub
        </a>
      </Reveal>
    </Section>
  )
}
