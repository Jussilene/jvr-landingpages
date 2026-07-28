# JVR Landing Pages

Site comercial responsivo com 15 templates demonstrativos funcionais, planos, formulário que monta uma mensagem no WhatsApp, páginas legais e SEO básico. Construído com React, Vite, TypeScript, Tailwind CSS, React Router e Lucide.

## Executar

```bash
npm install
npm run dev
```

Produção e validação:

```bash
npm run lint
npm run build
npm run preview
```

O build estático será criado em `dist/` e pode ser publicado em Vercel, Netlify, Cloudflare Pages ou qualquer hospedagem estática. O comando de build é `npm run build` e a pasta de saída é `dist`.

O repositório também inclui o workflow `.github/workflows/deploy.yml`, que publica automaticamente no GitHub Pages após cada envio para a branch `main`. O projeto está configurado para funcionar no caminho `/jvr-landingpages/`, inclusive ao abrir diretamente as rotas dos templates.

## Onde alterar

- Marca, WhatsApp, Instagram e mensagens: `src/config/site.ts`
- Planos, valores e adicionais: `src/data/pricing.ts`
- Templates, nichos, textos e identidade: `src/data/templates.ts`
- Conteúdo da página principal: `src/pages/Home.tsx`
- Estilos e temas: `src/styles.css`
- Imagem principal: `public/assets/hero-showcase.png`

Para adicionar um template, inclua um item em `src/data/templates.ts`. A rota `/templates/:slug`, o filtro e o botão do WhatsApp são gerados automaticamente.

## WhatsApp — confirmar antes de publicar

O briefing informou a exibição `+55 41 9507-1438`, que pode estar sem um dígito. Nenhum dígito foi inventado. Confirme o contato e então altere **os dois campos** `WHATSAPP_DISPLAY` e `WHATSAPP_E164` em `src/config/site.ts`. Todos os botões usam essa configuração central.

## Domínio e publicação

O domínio não está incluído nos planos. Após registrar preferencialmente em nome do cliente, configure os registros DNS indicados pela plataforma de hospedagem. Domínio e hospedagem são serviços separados.

## Miniaturas

Com o preview rodando na porta 4173 e o navegador do Playwright instalado:

```bash
npx playwright install chromium
npm run screenshots
```

O script captura as 15 demonstrações em `public/previews/`. Os cards atuais são composições fiéis geradas em CSS e não dependem dessas capturas para funcionar.

## Antes da publicação definitiva

- Confirmar o número completo do WhatsApp.
- Preencher o Instagram somente se houver um perfil oficial.
- Definir a URL pública no sitemap e metadados Open Graph.
- Revisar Política de Privacidade e Termos de Serviço com orientação jurídica adequada.
- Confirmar regras comerciais, prazos e forma de pagamento.
- Substituir conteúdos e dados demonstrativos pelos dados aprovados.
- Garantir que todo material fornecido pelo cliente tenha autorização de uso.

O site não inclui banco de dados e o formulário não envia nem armazena dados: ele monta a mensagem localmente e abre o WhatsApp.
