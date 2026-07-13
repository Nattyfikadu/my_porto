import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'
import styles from './About.module.css'
import { profile, skills } from '../data/site'

export default function About() {
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
    <section id="about" ref={ref} className={`reveal ${styles.section}`}>
      <SectionLabel
        label="About"
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        }
      />
      <div
        ref={cardRef}
        className={styles.card}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <p className={styles.bio}>
          I'm <strong>{profile.shortName}</strong> — a full-stack developer, mobile app developer,
          and software architect based in Ethiopia. I build complete digital products from
          database schema to deployed interface:{' '}
          <strong>MERN stack web apps</strong>,{' '}
          <strong>React Native based mobile apps</strong>, and{' '}
          <strong>RESTful APIs</strong> that scale.
        </p>
        <p className={styles.bio} style={{ marginTop: '16px' }}>
          I studied Software Engineering at{' '}
          <strong>Bahir Dar University</strong> and spent that time building real systems
          alongside the coursework. I take ownership of every project I work on, ensuring it is completed with attention to quality, usability, and maintainability—not just functionality.
        </p>
        <div className={styles.skillTags}>
          {skills.map((s) => (
            <span key={s} className={styles.skillTag}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
