import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'
import ProjectCard from './ProjectCard'
import styles from './Portfolio.module.css'
import cscmsImg from '../assets/cscms.png'
import geezImg from '../assets/geez-project.png'
import { projects } from '../data/site'

const images = {
  cscms: cscmsImg,
  geez: geezImg,
} as const

export default function Portfolio() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="projects" ref={ref} className={`reveal ${styles.section}`}>
      <SectionLabel
        label="Projects"
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        }
      />
      <div className={styles.stack}>
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            tags={p.tags}
            desc={p.desc}
            image={images[p.imageKey]}
            liveUrl={p.liveUrl}
            sourceUrl={p.sourceUrl}
            delayClass={`reveal-d${Math.min(i + 1, 3)}`}
          />
        ))}
      </div>
    </section>
  )
}
