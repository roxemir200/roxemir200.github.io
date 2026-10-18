import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, MapPin } from 'lucide-react'
import CvMenu from './CvMenu'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiCodeforces, SiHackerrank } from 'react-icons/si'
import { heroStats, profile } from '../data/portfolio'

const socialLinks = [
  { label: 'GitHub', href: profile.socials.github, Icon: FaGithub },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: FaLinkedin },
  { label: 'HackerRank', href: profile.socials.hackerrank, Icon: SiHackerrank },
  { label: 'Codeforces', href: profile.socials.codeforces, Icon: SiCodeforces },
]

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
      return
    }
    const t = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? 35 : 70,
    )
    return () => clearTimeout(t)
  }, [text, deleting, index, words])

  return text
}

export default function Hero() {
  const role = useTypewriter(profile.roles)

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-4 pt-24 pb-16 sm:px-6 md:grid-cols-[1.3fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </span>

          <p className="font-mono text-accent">Bonjour, je suis</p>
          <h1 className="mt-2 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {profile.firstName} <span className="text-gradient">{profile.lastName}</span>
          </h1>
          <p className="mt-4 h-8 font-mono text-xl text-fg/90 sm:text-2xl">
            {role}
            <span className="ml-0.5 inline-block w-2 animate-pulse text-accent">|</span>
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} /> {profile.location}
            </span>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-accent">
              <Mail size={15} /> {profile.email}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CvMenu />
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 font-semibold transition-colors hover:border-accent"
            >
              Voir mes projets
            </a>
            <div className="ml-1 flex gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="rounded-xl border border-line p-3 text-muted transition-colors hover:border-accent hover:text-fg"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-64 sm:w-80 md:w-full md:max-w-sm"
        >
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-accent to-accent-2 opacity-70 blur-lg" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-2">
            <img
              src={profile.photo}
              alt={`${profile.firstName} ${profile.lastName}`}
              className="aspect-square w-full rounded-[1.6rem] object-cover"
            />
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:col-span-2"
        >
          {heroStats.map((s) => (
            <div key={s.label} className="card px-5 py-4">
              <dt className="text-xs text-muted">{s.label}</dt>
              <dd className="mt-1 text-3xl font-bold text-gradient">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <a
        href="#about"
        aria-label="Défiler"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted md:block"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
