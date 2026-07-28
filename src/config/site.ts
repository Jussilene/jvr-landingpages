export const SITE = {
  name: 'JVR Landing Pages',
  tagline: 'Sua página profissional no ar, sem complicação.',
  subtitle: 'Escolha um modelo, envie seus textos e imagens e receba uma landing page personalizada, responsiva e pronta para divulgação.',
  serviceArea: 'Atendimento on-line para todo o Brasil',
  WHATSAPP_DISPLAY: '+55 41 9507-1438',
  // ATENÇÃO: confirmar antes da publicação. O contato informado pode estar sem um dígito.
  WHATSAPP_E164: '554195071438',
  instagram: '',
  quoteMessage: 'Olá! Conheci a JVR Landing Pages e gostaria de solicitar um orçamento.',
} as const

export const whatsappUrl = (message: string = SITE.quoteMessage) =>
  `https://wa.me/${SITE.WHATSAPP_E164}?text=${encodeURIComponent(message)}`
