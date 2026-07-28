export const SITE = {
  name: 'JVR Landing Pages',
  tagline: 'Sua página profissional no ar, sem complicação.',
  subtitle: 'Escolha um modelo, envie seus textos e imagens e receba uma landing page personalizada, responsiva e pronta para divulgação.',
  serviceArea: 'Atendimento on-line para todo o Brasil',
  WHATSAPP_DISPLAY: '(41) 99507-1438',
  WHATSAPP_E164: '5541995071438',
  instagram: '',
  quoteMessage: 'Olá! Vi o site da JVR Landing Pages e gostaria de solicitar um orçamento.',
} as const

export const whatsappUrl = (message: string = SITE.quoteMessage) =>
  `https://wa.me/${SITE.WHATSAPP_E164}?text=${encodeURIComponent(message)}`
