import { chromium } from '@playwright/test'

const slugs = ['tarot-aurora','beleza-lume','terapia-casa-calma','nutri-viva','voz-marca','frame-studio','pulso','belle-festa','pronto-lar','amparo-care','norte-seguros','solis-energia','alto-imoveis','metodo-claro','atlas-consultoria']
const browser = await chromium.launch()
const errors = []
for (const width of [375, 768, 1440]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } })
  page.on('console', message => { if (message.type() === 'error') errors.push(`${width}px console: ${message.text()}`) })
  await page.goto('http://127.0.0.1:4173/jvr-landingpages/', { waitUntil: 'networkidle' })
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)
  if (overflow) errors.push(`${width}px: rolagem horizontal`)
  const whatsappLinks = await page.locator('a[href^="https://wa.me/554195071438"]').count()
  if (whatsappLinks < 10) errors.push(`${width}px: links de WhatsApp insuficientes (${whatsappLinks})`)
  await page.locator('form button[type="submit"]').click()
  if (!(await page.getByRole('alert').isVisible())) errors.push(`${width}px: validação do formulário não apareceu`)
  await page.screenshot({ path: `public/previews/home-${width}.webp`, type: 'webp', quality: 75, fullPage: false })
  await page.close()
}
const page = await browser.newPage({ viewport: { width: 375, height: 812 } })
for (const slug of slugs) {
  const response = await page.goto(`http://127.0.0.1:4173/jvr-landingpages/templates/${slug}`, { waitUntil: 'networkidle' })
  if (!response?.ok()) errors.push(`${slug}: HTTP ${response?.status()}`)
  if (await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)) errors.push(`${slug}: rolagem horizontal no celular`)
  if (!(await page.getByText('Template demonstrativo', { exact: false }).first().isVisible())) {
    const heading = await page.locator('h1').first().textContent()
    errors.push(`${slug}: aviso ausente (${page.url()} · ${heading})`)
  }
  if ((await page.locator('a[href*="wa.me/554195071438"]').count()) < 2) errors.push(`${slug}: CTA WhatsApp ausente`)
  const sections = await page.locator('main section[data-section]').count()
  if (sections < 7) errors.push(`${slug}: apenas ${sections} seções substanciais`)
}
await browser.close()
if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}
console.log('Validação concluída: home em 375/768/1440, 15 templates, overflow, console, CTAs e formulário.')
