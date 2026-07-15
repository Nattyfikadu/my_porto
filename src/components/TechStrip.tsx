import { useReveal } from '../hooks/useReveal'
import styles from './TechStrip.module.css'
import { skills } from '../data/site'

// Use all skills for both rows so neither runs out
// 6 copies ensures seamless loop on any screen width
const fill = 6

export default function TechStrip() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className={`reveal ${styles.outer}`}>
      {/* Row 1 — left to right */}
      <div className={styles.trackLtr}>
        {Array.from({ length: fill }, (_, fi) =>
          skills.map((label, i) => (
            <div key={`r1-${fi}-${i}`} className={styles.chip}>{label}</div>
          ))
        )}
      </div>
      {/* Row 2 — right to left */}
      <div className={styles.trackRtl}>
        {Array.from({ length: fill }, (_, fi) =>
          skills.map((label, i) => (
            <div key={`r2-${fi}-${i}`} className={styles.chip}>{label}</div>
          ))
        )}
      </div>
    </div>
  )
}
