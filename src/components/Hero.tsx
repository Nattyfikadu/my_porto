import avatarImg from '../assets/photo_of_me.png'
import cvFile from '../assets/Natnael_Fekadu_Hunde_CV.pdf'
import { profile } from '../data/site'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* ── LEFT: text content ── */}
      <div className={styles.content}>
        <h1 className={styles.name}>{profile.shortName}</h1>
        <p className={styles.title}>
          the Engineer, <em>with purpose</em>
        </p>
        <p className={styles.tagline}>{profile.tagline}</p>

        <div className={styles.roles}>
          {profile.roles.map((r) => (
            <span key={r} className={styles.roleChip}>{r}</span>
          ))}
        </div>

        <div className={styles.ctas}>
          <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
            View my work
          </a>
          <a href="#contact" className={styles.btn}>
            Get in Touch
          </a>
          <a
            href={cvFile}
            download="Natnael_Fekadu_CV.pdf"
            className={`${styles.btn} ${styles.btnCv}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Look my CV
          </a>
        </div>

        <div className={styles.stats}>
          {profile.stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.statNum}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT: big photo ── */}
      <div className={styles.avatarCol}>
        <div className={styles.avatarWrap}>
          <div className={styles.glow} />
          <div className={styles.statusChip}>
            <span className={styles.dot} />
            Open to work
          </div>
          <img className={styles.avatar} src={avatarImg} alt={profile.name} />
        </div>
      </div>

    </section>
  )
}
