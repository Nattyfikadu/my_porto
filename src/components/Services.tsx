import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'
import styles from './Services.module.css'
import type { ReactNode } from 'react'

interface Service {
  icon: ReactNode
  title: string
  desc: string
}

const services: Service[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Web Development',
    desc: 'Full-stack apps with React, Node.js, Express, MongoDB & MySQL — from API design to deployed UI.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Mobile Apps',
    desc: 'Cross-platform React Native apps for Android & iOS — camera, QR scanning, push notifications.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: 'API Development',
    desc: 'RESTful APIs with Node/Express — auth, rate-limiting, MongoDB Atlas & Cloudinary integration.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'UI / UX Design',
    desc: 'Intentional interfaces built to convert — from wireframe to production-ready component.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3S3 13.66 3 12M21 19c0 1.66-4 3-9 3S3 20.66 3 19" />
        <path d="M3 5v14M21 5v14" />
      </svg>
    ),
    title: 'Database Design',
    desc: 'Schema design & optimisation for MongoDB, MySQL and Supabase — indexing, migrations, queries.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Project Management',
    desc: 'End-to-end coordination — requirements gathering, task tracking, stakeholder communication.',
  },
]

export default function Services() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <SectionLabel
        label="Services"
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 00-4 0v2M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
          </svg>
        }
      />
      <div className={styles.grid}>
        {services.map((svc, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.iconWrap}>{svc.icon}</div>
            <div className={styles.title}>{svc.title}</div>
            <div className={styles.desc}>{svc.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
