import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'
import styles from './Resume.module.css'

const items = [
  {
    tag: 'Internship · 2026',
    title: "Ge'ez Verb Derivation Tool",
    subtitle: 'Rule-based linguistic processing platform',
    stack: 'React · TypeScript · Vite · NLP',
    role: 'Lead Frontend Developer',
    liveUrl: 'https://geez-verb-derivation.vercel.app/',
    sourceUrl: 'https://github.com/Nattyfikadu/',
  },
  {
    tag: 'Completed · 2025',
    title: 'AI Personal Financial Management',
    subtitle: 'AI-powered personal finance application',
    stack: 'Flutter · Node.js · MongoDB · AI',
    role: 'Full-Stack Developer',
    liveUrl: null,
    sourceUrl: 'https://github.com/Nattyfikadu/',
  },
  {
    tag: 'Completed · 2025',
    title: 'Campus Complaint Management System',
    subtitle: 'Role-based complaint management platform',
    stack: 'MERN Stack · React Native · REST API',
    role: 'Full-Stack Developer',
    liveUrl: 'https://campus-compliant-system-cscms.vercel.app/',
    sourceUrl: 'https://github.com/Nattyfikadu/',
  },
  {
    tag: 'Education · 2020 – 2026',
    title: 'Bachelor of Science in Software Engineering',
    subtitle: 'Bahir Dar University',
    stack: '',
    role: '',
    liveUrl: null,
    sourceUrl: null,
  },
]

export default function Resume() {
  const ref = useReveal<HTMLElement>()
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mx', `${x - 160}px`)
    card.style.setProperty('--my', `${y - 160}px`)
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (card) {
      card.style.setProperty('--mx', '-160px')
      card.style.setProperty('--my', '-160px')
    }
  }

  return (
    <section id="resume" ref={ref} className={`reveal ${styles.section}`}>
      <SectionLabel
        label="Projects & Experience"
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        }
      />
      <div
        ref={cardRef}
        className={styles.card}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.timeline}>
          {items.map((item, i) => (
            <div
              key={i}
              className={`${styles.item} reveal reveal-d${Math.min(i + 1, 3)}`}
            >
              <div className={styles.itemLeft}>
                <span className={styles.tag}>{item.tag}</span>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.subtitle}>{item.subtitle}</div>
                {item.stack && <div className={styles.stack}>{item.stack}</div>}
                {item.role && <div className={styles.role}>{item.role}</div>}
              </div>
              {(item.liveUrl || item.sourceUrl) && (
                <div className={styles.itemActions}>
                  {item.liveUrl && (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.btn} ${styles.btnPrimary}`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {item.sourceUrl && (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btn}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
