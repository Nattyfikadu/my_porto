import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { social } from '../data/site'
import SectionLabel from './SectionLabel'
import styles from './Contact.module.css'

// Replace with your Formspree endpoint once you create the form at formspree.io
const FORMSPREE_URL = 'https://formspree.io/f/REPLACE_ME'

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
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 2500)
      return
    }

    setStatus('sending')

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || 'Portfolio enquiry',
          message: form.message,
        }),
      })

      if (res.ok) {
        setStatus('done')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const btnLabel =
    status === 'sending' ? 'Sending…' :
    status === 'done'    ? 'Message sent ✓' :
    status === 'error'   ? 'Something went wrong — try again' :
    'Send Message'

  if (status === 'done') {
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
          <div className={styles.successState}>
            <div className={styles.successIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className={styles.successTitle}>Message received</h3>
            <p className={styles.successText}>
              I'll get back to you soon. In the meantime, feel free to reach out directly.
            </p>
            <div className={styles.altLinks}>
              <a href={social.telegram} target="_blank" rel="noopener noreferrer" className={styles.altLink}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.8 14.196l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.848.363z" />
                </svg>
                Telegram
              </a>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.altLink}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
            <button className={styles.resetBtn} onClick={() => setStatus('idle')}>
              Send another message
            </button>
          </div>
        </div>
      </section>
    )
  }

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
        {/* quick-reach strip */}
        <div className={styles.quickReach}>
          <a href={social.email} className={styles.quickLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            natnaelfk@gmail.com
          </a>
          <a href={social.telegram} target="_blank" rel="noopener noreferrer" className={styles.quickLink}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.8 14.196l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.848.363z" />
            </svg>
            @Natnael_Fekadu_H
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.quickLink}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        <div className={styles.divider}><span>or send a message</span></div>

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
            className={`${styles.btn} ${status === 'error' ? styles.btnError : ''}`}
            disabled={status === 'sending'}
          >
            {btnLabel}
            {status === 'idle' && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
