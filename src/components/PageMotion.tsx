import { useEffect } from 'react'

export default function PageMotion({ rootClass }: { rootClass: string }) {
  useEffect(() => {
    const root = document.querySelector(rootClass)
    if (!root) return
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    const reveals = root.querySelectorAll('[data-motion]')
    if (!reduced) {
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('motion-visible'); observer.unobserve(entry.target) }
      }), { threshold: .08 })
      reveals.forEach(item => { item.classList.add('motion-item'); observer.observe(item) })
      const glowCards = root.querySelectorAll<HTMLElement>('[data-glow]')
      const move = (event: Event) => {
        const pointer = event as PointerEvent
        const card = event.currentTarget as HTMLElement
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--glow-x', `${pointer.clientX - rect.left}px`)
        card.style.setProperty('--glow-y', `${pointer.clientY - rect.top}px`)
        card.style.setProperty('--tilt-x', `${((pointer.clientY - rect.top) / rect.height - .5) * -2}deg`)
        card.style.setProperty('--tilt-y', `${((pointer.clientX - rect.left) / rect.width - .5) * 2}deg`)
      }
      const leave = (event: Event) => {
        const card = event.currentTarget as HTMLElement
        card.style.setProperty('--tilt-x', '0deg'); card.style.setProperty('--tilt-y', '0deg')
      }
      glowCards.forEach(card => { card.addEventListener('pointermove', move); card.addEventListener('pointerleave', leave) })
      return () => {
        observer.disconnect()
        glowCards.forEach(card => { card.removeEventListener('pointermove', move); card.removeEventListener('pointerleave', leave) })
      }
    }
    reveals.forEach(item => item.classList.add('motion-visible'))
  }, [rootClass])
  return null
}
