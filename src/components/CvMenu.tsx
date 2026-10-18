import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Download, FileText } from 'lucide-react'
import { profile } from '../data/portfolio'

/** Bouton de téléchargement du CV avec choix de la langue (FR / EN). */
export default function CvMenu({ variant = 'large' }: { variant?: 'large' | 'compact' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const buttonClass =
    variant === 'large'
      ? 'inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-semibold text-accent-contrast transition-transform hover:-translate-y-0.5'
      : 'inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-contrast transition-opacity hover:opacity-90'

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen((o) => !o)} aria-haspopup="menu" aria-expanded={open} className={buttonClass}>
        <Download size={variant === 'large' ? 18 : 15} />
        {variant === 'large' ? 'Télécharger mon CV' : 'CV'}
        <ChevronDown size={variant === 'large' ? 16 : 14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-50 mt-2 w-56 overflow-hidden rounded-xl border border-line bg-surface p-1.5 shadow-2xl ${
              variant === 'large' ? 'left-0' : 'right-0'
            }`}
          >
            {profile.cvs.map((cv) => (
              <li key={cv.lang} role="none">
                <a
                  role="menuitem"
                  href={cv.file}
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-surface-2"
                >
                  <FileText size={16} className="text-accent" />
                  <span className="flex-1">{cv.label}</span>
                  <span className="chip">{cv.lang}</span>
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
