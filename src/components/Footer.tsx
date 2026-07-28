import { Link } from 'react-router-dom'
import { SITE, whatsappUrl } from '../config/site'

export default function Footer() {
  return <footer>
    <div className="footer-grid">
      <div><a className="brand" href="/"><span>JVR</span> Landing Pages</a><p>{SITE.tagline}</p></div>
      <div><strong>Atendimento</strong><p>{SITE.serviceArea}</p><a href={whatsappUrl()} target="_blank" rel="noreferrer">{SITE.WHATSAPP_DISPLAY}</a></div>
      <div><strong>Informações</strong><Link to="/politica-de-privacidade">Política de Privacidade</Link><Link to="/termos-de-servico">Termos de Serviço</Link>{SITE.instagram && <a href={SITE.instagram}>Instagram</a>}</div>
    </div>
    <div className="footer-bottom">© {new Date().getFullYear()} JVR Landing Pages. Todos os direitos reservados.</div>
  </footer>
}
