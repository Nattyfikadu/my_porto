import { useEffect, useRef, type RefObject } from 'react'

// Mark <html> so CSS knows JS is running — enables scroll animations
let marked = false
function markJsReady() {
  if (marked) return
  marked = true
  document.documentElement.classList.add('js-reveal')
}

export function useReveal<T extends Element = HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T>(null)

  useEffect(() => {
    markJsReady()

    const el = ref.current
    if (!el) return

    // If already in view (e.g. top of page), show immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) {
      el.classList.add('visible')
      // also reveal any child .reveal elements
      el.querySelectorAll('.reveal').forEach((child) => child.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          // cascade to children
          entry.target.querySelectorAll('.reveal').forEach((child) =>
            child.classList.add('visible')
          )
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
