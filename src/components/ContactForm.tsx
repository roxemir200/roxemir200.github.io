import { useState, type ChangeEvent, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { contactForm, profile } from '../data/portfolio'

type Field = 'name' | 'email' | 'subject' | 'message'
type Values = Record<Field, string>
type Errors = Partial<Record<Field, string>>
type Status = 'idle' | 'sending' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const LIMITS = { name: 80, subject: 120, message: 2000 }
const MIN_MESSAGE = 20

const empty: Values = { name: '', email: '', subject: '', message: '' }

function validate(v: Values): Errors {
  const e: Errors = {}
  const name = v.name.trim()
  if (!name) e.name = 'Veuillez indiquer votre nom.'
  else if (name.length < 2) e.name = 'Le nom doit contenir au moins 2 caractères.'
  else if (!/^[\p{L}\s'.-]+$/u.test(name)) e.name = 'Le nom ne doit contenir que des lettres.'

  const email = v.email.trim()
  if (!email) e.email = 'Veuillez indiquer votre email.'
  else if (!EMAIL_RE.test(email)) e.email = 'Adresse email invalide (ex : nom@domaine.com).'

  if (v.subject.trim().length > LIMITS.subject) e.subject = `Le sujet ne doit pas dépasser ${LIMITS.subject} caractères.`

  const message = v.message.trim()
  if (!message) e.message = 'Veuillez écrire un message.'
  else if (message.length < MIN_MESSAGE) e.message = `Le message doit contenir au moins ${MIN_MESSAGE} caractères.`
  return e
}

const inputBase =
  'w-full rounded-xl border bg-surface-2 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted disabled:opacity-60'

export default function ContactForm() {
  const [values, setValues] = useState<Values>(empty)
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [feedback, setFeedback] = useState('')
  const [honey, setHoney] = useState('')

  const errors = validate(values)
  const showError = (f: Field) => (touched[f] ? errors[f] : undefined)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (status !== 'sending') setStatus('idle')
  }
  const onBlur = (f: Field) => setTouched((t) => ({ ...t, [f]: true }))

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, subject: true, message: true })
    if (Object.keys(errors).length > 0) {
      const first = (['name', 'email', 'subject', 'message'] as Field[]).find((f) => errors[f])
      document.getElementById(`contact-${first}`)?.focus()
      return
    }
    // Champ piège invisible : rempli uniquement par les robots.
    if (honey) return

    setStatus('sending')
    try {
      const name = values.name.trim()
      const email = values.email.trim()
      const message = values.message.trim()
      const subject = `${contactForm.subjectPrefix} ${values.subject.trim() || `Nouveau message de ${name}`}`

      const [url, payload] = contactForm.web3formsKey
        ? [
            'https://api.web3forms.com/submit',
            { access_key: contactForm.web3formsKey, subject, from_name: name, name, email, replyto: email, message },
          ]
        : [
            contactForm.formsubmitEndpoint,
            { name, email, message, _subject: subject, _replyto: email, _template: 'table', _captcha: 'false' },
          ]

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || String(data.success) !== 'true') throw new Error(data.message || `HTTP ${res.status}`)

      setStatus('success')
      setFeedback('Merci ! Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.')
      setValues(empty)
      setTouched({})
    } catch (err) {
      // Raison exacte visible dans la console (ex : formulaire FormSubmit non activé).
      console.error('[Contact] Envoi échoué :', err instanceof Error ? err.message : err)
      setStatus('error')
      setFeedback("L'envoi a échoué. Réessayez dans un instant, ou écrivez-moi directement :")
    }
  }

  const sending = status === 'sending'

  const fieldClass = (f: Field) =>
    `${inputBase} ${showError(f) ? 'border-red-500/70 focus:border-red-500' : 'border-line focus:border-accent'}`

  const ErrorText = ({ f }: { f: Field }) =>
    showError(f) ? (
      <p id={`contact-${f}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
        <AlertCircle size={13} /> {showError(f)}
      </p>
    ) : null

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-muted">
            Nom <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            maxLength={LIMITS.name}
            placeholder="Votre nom"
            value={values.name}
            onChange={onChange}
            onBlur={() => onBlur('name')}
            disabled={sending}
            aria-invalid={!!showError('name')}
            aria-describedby={showError('name') ? 'contact-name-error' : undefined}
            className={fieldClass('name')}
          />
          <ErrorText f="name" />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-muted">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nom@domaine.com"
            value={values.email}
            onChange={onChange}
            onBlur={() => onBlur('email')}
            disabled={sending}
            aria-invalid={!!showError('email')}
            aria-describedby={showError('email') ? 'contact-email-error' : undefined}
            className={fieldClass('email')}
          />
          <ErrorText f="email" />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-1.5 block text-xs font-medium text-muted">
          Sujet
        </label>
        <input
          id="contact-subject"
          name="subject"
          maxLength={LIMITS.subject}
          placeholder="Proposition de stage PFE, collaboration…"
          value={values.subject}
          onChange={onChange}
          onBlur={() => onBlur('subject')}
          disabled={sending}
          aria-invalid={!!showError('subject')}
          className={fieldClass('subject')}
        />
        <ErrorText f="subject" />
      </div>

      <div>
        <div className="mb-1.5 flex items-baseline justify-between">
          <label htmlFor="contact-message" className="block text-xs font-medium text-muted">
            Message <span className="text-red-400">*</span>
          </label>
          <span className={`font-mono text-xs ${values.message.length > LIMITS.message * 0.9 ? 'text-amber-400' : 'text-muted'}`}>
            {values.message.length}/{LIMITS.message}
          </span>
        </div>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          maxLength={LIMITS.message}
          placeholder="Bonjour Amir, …"
          value={values.message}
          onChange={onChange}
          onBlur={() => onBlur('message')}
          disabled={sending}
          aria-invalid={!!showError('message')}
          aria-describedby={showError('message') ? 'contact-message-error' : undefined}
          className={`${fieldClass('message')} resize-none`}
        />
        <ErrorText f="message" />
      </div>

      {/* Champ piège anti-spam, invisible pour les humains */}
      <input
        type="text"
        name="_honey"
        value={honey}
        onChange={(e) => setHoney(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <button
        type="submit"
        disabled={sending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 font-semibold text-accent-contrast transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-70"
      >
        {sending ? <Loader2 size={17} className="animate-spin" /> : <Send size={17} />}
        {sending ? 'Envoi en cours…' : 'Envoyer le message'}
      </button>

      {status === 'success' && (
        <p role="status" className="flex items-start gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-400">
          <CheckCircle2 size={17} className="mt-0.5 shrink-0" /> {feedback}
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
          <AlertCircle size={17} className="mt-0.5 shrink-0" />
          <span>
            {feedback}{' '}
            <a href={`mailto:${profile.email}`} className="font-medium underline">
              {profile.email}
            </a>
          </span>
        </p>
      )}
    </form>
  )
}
