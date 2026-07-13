import avatarImg from '../assets/photo_of_me.png'
import { profile } from '../data/site'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.avatarWrap}>
        <div className={styles.glow} />
        <div className={styles.statusChip}>
          <span className={styles.dot} />
          Open to work
        </div>
        <img className={styles.avatar} src={avatarImg} alt={profile.name} />
      </div>

      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.title}>{profile.title}</p>
      <p className={styles.tagline}>{profile.tagline}</p>

      <div className={styles.roles}>
        {profile.roles.map((r) => (
          <span key={r} className={styles.roleChip}>{r}</span>
        ))}
      </div>

      <div className={styles.ctas}>
        <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
          View Projects
        </a>
        <a href="#contact" className={styles.btn}>
          Get in Touch
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
    </section>
  )
}
