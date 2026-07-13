import { useReveal } from '../hooks/useReveal'
import styles from './TechStrip.module.css'
import { skills } from '../data/site'

export default function TechStrip() {
  const ref = useReveal<HTMLDivElement>()
  const chips = [...skills, ...skills]

  return (
    <div ref={ref} className={`reveal ${styles.outer}`}>
      <div className={styles.track}>
        {chips.map((label, i) => (
          <div key={`${label}-${i}`} className={styles.chip}>
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}
