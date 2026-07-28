import { chromium } from '@playwright/test'

const slugs = ['tarot-aurora','beleza-lume','terapia-casa-calma','nutri-viva','voz-marca','frame-studio','pulso','belle-festa','pronto-lar','amparo-care','norte-seguros','solis-energia','alto-imoveis','metodo-claro','atlas-consultoria']
const browser = await chromium.launch()
const errors = []
for (const width of [320, 360, 375, 390, 768, 1024, 1366, 1440]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } })
  page.on('console', message => { if (message.type() === 'error') errors.push(`${width}px console: ${message.text()}`) })
  await page.goto('http://127.0.0.1:4173/jvr-landingpages/', { waitUntil: 'networkidle' })
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)
  if (overflow) errors.push(`${width}px: rolagem horizontal`)
  const whatsappLinks = await page.locator('a[href^="https://wa.me/5541995071438"]').count()
  if (whatsappLinks < 10) errors.push(`${width}px: links de WhatsApp insuficientes (${whatsappLinks})`)
  const templateCards = page.locator('.template-card')
  if (await templateCards.count() !== 15) errors.push(`${width}px: quantidade de templates diferente de 15`)
  const planHeights = await page.locator('.price-card').evaluateAll(cards => cards.map(card => Math.round(card.getBoundingClientRect().height)))
  if (width > 620 && Math.max(...planHeights) - Math.min(...planHeights) > 1) errors.push(`${width}px: cards de planos desalinhados (${planHeights.join(', ')})`)
  if (width === 390) {
    await page.locator('.menu-button').click()
    if (!(await page.locator('.nav-links').evaluate(nav => nav.classList.contains('open')))) errors.push('390px: menu não abriu')
    await page.mouse.click(12, 760)
    if (await page.locator('.nav-links').evaluate(nav => nav.classList.contains('open'))) errors.push('390px: menu não fechou ao clicar fora')
  }
  await page.getByRole('button', { name: 'Beleza' }).click()
  if (await templateCards.count() !== 1) errors.push(`${width}px: filtro Beleza não retornou um template`)
  await page.getByRole('button', { name: 'Todos' }).click()
  if (await templateCards.count() !== 15) errors.push(`${width}px: filtro Todos não restaurou os 15 templates`)
  if ([320, 360, 375, 768, 1024, 1440].includes(width)) {
    await page.screenshot({ path: `public/previews/home-${width}.webp`, type: 'webp', quality: 75, fullPage: false })
  }
  await page.locator('form button[type="submit"]').click()
  if (!(await page.getByRole('alert').isVisible())) errors.push(`${width}px: validação do formulário não apareceu`)
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
  if ((await page.locator('a[href*="wa.me/5541995071438"]').count()) < 2) errors.push(`${slug}: CTA WhatsApp ausente`)
  const sections = await page.locator('main section[data-section]').count()
  if (sections < 7) errors.push(`${slug}: apenas ${sections} seções substanciais`)
}
await browser.close()
if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}
console.log('Validação concluída: home em 320/360/375/390/768/1024/1366/1440, 15 templates, filtros, menu, planos, overflow, console, CTAs e formulário.')
