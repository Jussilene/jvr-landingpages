import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SITE, whatsappUrl } from '../config/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const home = import.meta.env.BASE_URL
  return <header className="site-header">
    <div className="nav-wrap">
      <Link className="brand" to="/" aria-label="JVR Landing Pages — início"><span>JVR</span> Landing Pages</Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Navegação principal">
        <a href={`${home}#modelos`} onClick={() => setOpen(false)}>Modelos</a>
        <a href={`${home}#planos`} onClick={() => setOpen(false)}>Planos</a>
        <a href={`${home}#como-funciona`} onClick={() => setOpen(false)}>Como funciona</a>
        <a href={`${home}#duvidas`} onClick={() => setOpen(false)}>Dúvidas</a>
        <a className="button button-small" href={whatsappUrl()} target="_blank" rel="noreferrer">Pedir orçamento</a>
      </nav>
    </div>
    <span className="sr-only">{SITE.tagline}</span>
  </header>
}
