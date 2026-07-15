import { useEffect, useRef } from 'react'
import styles from './CursorGlow.module.css'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -999, y: -999 })
  const current = useRef({ x: -999, y: -999 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    // Smooth follow with lerp
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.1)
      current.current.y = lerp(current.current.y, pos.current.y, 0.1)

      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`
      }

      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return <div ref={glowRef} className={styles.glow} aria-hidden="true" />
}
