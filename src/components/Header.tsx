import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SITE, whatsappUrl } from '../config/site'
import WhatsAppIcon from './WhatsAppIcon'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const home = import.meta.env.BASE_URL
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update(); window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  useEffect(() => {
    if (!open) return
    const closeOutside = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const closeWithKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', closeOutside)
    document.addEventListener('keydown', closeWithKeyboard)
    return () => {
      document.removeEventListener('pointerdown', closeOutside)
      document.removeEventListener('keydown', closeWithKeyboard)
    }
  }, [open])
  return <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
    <div className="nav-wrap" ref={navRef}>
      <Link className="brand wordmark" to="/" aria-label="JVR Landing Pages — início"><span>JVR</span><b>Landing Pages</b></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Navegação principal">
        <a href={`${home}#modelos`} onClick={() => setOpen(false)}>Modelos</a>
        <a href={`${home}#planos`} onClick={() => setOpen(false)}>Planos</a>
        <a href={`${home}#como-funciona`} onClick={() => setOpen(false)}>Como funciona</a>
        <a href={`${home}#duvidas`} onClick={() => setOpen(false)}>Dúvidas</a>
        <a className="button button-small" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={17}/> Solicitar orçamento</a>
      </nav>
    </div><span className="sr-only">{SITE.tagline}</span>
  </header>
}
