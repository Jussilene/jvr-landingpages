import { whatsappUrl } from '../config/site'
import WhatsAppIcon from './WhatsAppIcon'

export default function FloatingWhatsApp() {
  return <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Solicitar orçamento pelo WhatsApp">
    <WhatsAppIcon size={26}/><span>Solicitar orçamento</span>
  </a>
}
