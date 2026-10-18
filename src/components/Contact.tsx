import { useState } from 'react'
import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/portfolio'
import ContactForm from './ContactForm'
import { Reveal, Section } from './ui'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* presse-papiers indisponible */
    }
  }

  const channels = [
    { Icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: 'Téléphone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { Icon: MapPin, label: 'Localisation', value: profile.location },
  ]

  return (
    <Section
      id="contact"
      index="07"
      eyebrow="Contact"
      title={
        <>
          Travaillons <span className="text-gradient">ensemble</span>
        </>
      }
      subtitle="Je recherche un stage PFE en développement Full-Stack ou DevOps. Une opportunité, une question ou simplement envie d'échanger ? Écrivez-moi."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <Reveal className="card flex flex-col p-6 sm:p-8">
          <ul className="space-y-5">
            {channels.map(({ Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="rounded-xl bg-accent/10 p-3 text-accent">
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-muted">{label}</p>
                  {href ? (
                    <a href={href} className="break-all font-medium hover:text-accent">
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <button
            onClick={copyEmail}
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-fg"
          >
            {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
            {copied ? 'Email copié !' : "Copier l'email"}
          </button>

          <div className="mt-auto flex gap-3 pt-8">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-line py-3 text-sm font-medium transition-colors hover:border-accent"
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-line py-3 text-sm font-medium transition-colors hover:border-accent"
            >
              <FaGithub size={18} /> GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="card p-6 sm:p-8">
          <h3 className="mb-5 text-lg font-semibold">Envoyez-moi un message</h3>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  )
}
