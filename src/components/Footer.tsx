import { Link } from 'react-router-dom'
import { SITE, whatsappUrl } from '../config/site'
import WhatsAppIcon from './WhatsAppIcon'

export default function Footer() {
  return <footer>
    <div className="footer-grid">
      <div><Link className="brand wordmark footer-wordmark" to="/"><span>JVR</span><b>Landing Pages</b></Link><p>{SITE.tagline}</p></div>
      <div><strong>Atendimento</strong><p>{SITE.serviceArea}</p><a className="footer-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon size={18}/>{SITE.WHATSAPP_DISPLAY}</a></div>
      <div><strong>Informações</strong><Link to="/politica-de-privacidade">Política de Privacidade</Link><Link to="/termos-de-servico">Termos de Serviço</Link>{SITE.instagram && <a href={SITE.instagram}>Instagram</a>}</div>
    </div>
    <div className="footer-bottom">© {new Date().getFullYear()} JVR Landing Pages. Todos os direitos reservados.</div>
  </footer>
}
