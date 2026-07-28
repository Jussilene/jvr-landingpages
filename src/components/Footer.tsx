import { Link } from 'react-router-dom'
import { SITE, whatsappUrl } from '../config/site'

export default function Footer() {
  const base = import.meta.env.BASE_URL
  return <footer>
    <div className="footer-grid">
      <div><Link className="brand footer-brand" to="/"><img src={`${base}assets/jvr-logo.png`} alt="JVR Landing Pages" /></Link><p>{SITE.tagline}</p></div>
      <div><strong>Atendimento</strong><p>{SITE.serviceArea}</p><a href={whatsappUrl()} target="_blank" rel="noreferrer">{SITE.WHATSAPP_DISPLAY}</a></div>
      <div><strong>Informações</strong><Link to="/politica-de-privacidade">Política de Privacidade</Link><Link to="/termos-de-servico">Termos de Serviço</Link>{SITE.instagram && <a href={SITE.instagram}>Instagram</a>}</div>
    </div>
    <div className="footer-bottom">© {new Date().getFullYear()} JVR Landing Pages. Todos os direitos reservados.</div>
  </footer>
}
