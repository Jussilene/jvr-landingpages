import { whatsappUrl } from '../config/site'
import WhatsAppIcon from './WhatsAppIcon'

export default function FloatingWhatsApp({ message, label = 'Solicitar orçamento' }: { message?: string; label?: string }) {
  return <a className="floating-whatsapp" href={whatsappUrl(message)} target="_blank" rel="noreferrer" aria-label={`${label} pelo WhatsApp`}>
    <WhatsAppIcon size={26}/><span>{label}</span>
  </a>
}
