import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function Section({
  id,
  index,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string
  index: string
  eyebrow: string
  title: ReactNode
  subtitle?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <Reveal className="mb-12 max-w-2xl">
        <p className="mb-3 font-mono text-sm text-accent">
          <span className="text-muted">{index}.</span> {eyebrow}
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
      </Reveal>
      {children}
    </section>
  )
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="chip">{children}</span>
}
