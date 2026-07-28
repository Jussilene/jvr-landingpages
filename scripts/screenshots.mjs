import { chromium } from '@playwright/test'
import { mkdir } from 'node:fs/promises'

const slugs = ['tarot-aurora','beleza-lume','terapia-casa-calma','nutri-viva','voz-marca','frame-studio','pulso','belle-festa','pronto-lar','amparo-care','norte-seguros','solis-energia','alto-imoveis','metodo-claro','atlas-consultoria']
await mkdir('public/previews', { recursive: true })
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 })
for (const slug of slugs) {
  await page.goto(`http://127.0.0.1:4173/templates/${slug}`, { waitUntil: 'networkidle' })
  await page.screenshot({ path: `public/previews/${slug}.webp`, type: 'webp', quality: 78 })
}
await browser.close()
console.log(`Geradas ${slugs.length} miniaturas em public/previews.`)
