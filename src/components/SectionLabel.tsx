import type { ReactNode } from 'react'
import styles from './SectionLabel.module.css'

interface Props {
  icon: ReactNode
  label: string
}

export default function SectionLabel({ icon, label }: Props) {
  return (
    <div className={styles.label}>
      <div className={styles.iconWrap}>{icon}</div>
      <span>{label}</span>
    </div>
  )
}
