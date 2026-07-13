import { useState } from 'react'
import { profile } from '../data/site'
import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'
import styles from './Contact.module.css'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

type Status = 'idle' | 'sending' | 'done' | 'error'

export default function Contact() {
  const ref = useReveal<HTMLElement>()
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 2500)
      return
    }
    setStatus('sending')
    const mailto =
      `mailto:${profile.email}` +
      `?subject=${encodeURIComponent(form.subject || 'Portfolio enquiry')}` +
      `&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setTimeout(() => {
      setStatus('done')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 600)
  }

  const btnLabel =
    status === 'sending' ? 'Opening mail…' :
    status === 'done'    ? 'Message ready ✓' :
    status === 'error'   ? 'Fill required fields' :
    'Send Message'

  return (
    <section id="contact" ref={ref} className={`reveal ${styles.section}`}>
      <SectionLabel
        label="Contact"
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        }
      />
      <div className={styles.card}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <div className={styles.group}>
              <label htmlFor="cf-name">Name *</label>
              <input
                id="cf-name" name="name" type="text"
                className={styles.input}
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>
            <div className={styles.group}>
              <label htmlFor="cf-email">Email *</label>
              <input
                id="cf-email" name="email" type="email"
                className={styles.input}
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>
          </div>
          <div className={styles.group}>
            <label htmlFor="cf-subject">Subject</label>
            <input
              id="cf-subject" name="subject" type="text"
              className={styles.input}
              placeholder="What's this about?"
              value={form.subject}
              onChange={handleChange}
            />
          </div>
          <div className={styles.group}>
            <label htmlFor="cf-message">Message *</label>
            <textarea
              id="cf-message" name="message"
              className={styles.input}
              placeholder="Tell me about your project…"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className={styles.btn}
            disabled={status === 'sending' || status === 'done'}
          >
            {btnLabel}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}
