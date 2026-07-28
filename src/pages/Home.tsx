import { useState } from 'react'
import { ArrowRight, BadgeCheck, Check, ChevronDown, Clock3, Globe2, HeartHandshake, MessageCircle, MonitorSmartphone, Search, ShieldCheck, Sparkles } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import QuoteForm from '../components/QuoteForm'
import { SITE, whatsappUrl } from '../config/site'
import { templates, categories } from '../data/templates'
import { buildPlans, carePlans, extras } from '../data/pricing'

const faqs = [
  ['O domínio está incluído?', 'Não. Domínio e hospedagem são serviços diferentes. O valor do domínio depende do nome, extensão e disponibilidade e será informado antes da contratação.'],
  ['Preciso já ter os textos?', 'Não necessariamente. Você pode contratar a organização e melhoria dos textos como adicional.'],
  ['Posso trocar as cores do template?', 'Sim. A personalização de cores está incluída no plano com template.'],
  ['A landing page funciona no celular?', 'Sim. Todas as páginas são desenvolvidas para celular, tablet e computador.'],
  ['Posso colocar vídeos e áudios?', 'Sim, desde que o material seja fornecido por você e esteja dentro do escopo contratado.'],
  ['O site aparecerá no Google?', 'A página recebe SEO básico para facilitar a indexação. O tempo e a posição dependem de fatores externos.'],
  ['O SEO garante a primeira posição?', 'Não. Nenhum serviço de SEO responsável pode garantir a primeira posição nos resultados de busca.'],
  ['Quantas alterações posso solicitar?', 'O plano com template inclui uma rodada; o personalizado inclui duas. Rodadas extras podem ser contratadas.'],
  ['O que acontece se eu cancelar a manutenção?', 'As condições de continuidade da hospedagem e entrega dos arquivos serão tratadas conforme a proposta contratada.'],
  ['Posso pedir uma página diferente dos templates?', 'Sim. A landing básica personalizada adapta componentes disponíveis. Projetos complexos recebem orçamento separado.'],
  ['Em quanto tempo a página fica pronta?', 'O template tem estimativa de 3 a 5 dias úteis após o envio de todo o material. Outros projetos têm prazo definido após análise.'],
  ['A landing page inclui Perfil da Empresa no Google?', 'Não. Perfil da Empresa no Google, tráfego pago e gestão de redes sociais não estão incluídos.']
]

export default function Home() {
  const [filter, setFilter] = useState('Todos')
  const visible = filter === 'Todos' ? templates : templates.filter(t => t.category === filter)
  return <div className="home">
    <Header/>
    <main>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy"><span className="eyebrow"><Sparkles size={16}/> Presença digital sem complicação</span><h1>Sua landing page profissional, <em>bonita e pronta para vender.</em></h1><p>Escolha um dos nossos modelos, envie seus textos, imagens, vídeos ou áudios e receba sua página personalizada e publicada com rapidez.</p><div className="hero-actions"><a className="button" href="#modelos">Ver templates <ArrowRight size={18}/></a><a className="button secondary" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={19}/> Pedir orçamento</a></div>
          <div className="trust-row"><span><BadgeCheck/> A partir de R$ 500</span><span><Clock3/> Entrega rápida</span><span><MonitorSmartphone/> Responsiva</span></div></div>
          <div className="hero-art"><img src="/assets/hero-showcase.png" alt="Diferentes landing pages apresentadas em celulares, tablets e computadores" /><div className="float-card"><span>15 modelos</span><strong>prontos para personalizar</strong></div></div>
        </div>
        <div className="feature-strip"><span><MessageCircle/> WhatsApp</span><span><Search/> SEO básico</span><span><ShieldCheck/> Suporte disponível</span><span><Globe2/> Todo o Brasil</span></div>
      </section>

      <section className="light-section audience"><div className="container split-title"><div><span className="eyebrow dark">Feito para quem faz acontecer</span><h2>Seu trabalho merece um espaço que passe confiança.</h2></div><p>Para profissionais autônomos, prestadores de serviço, especialistas, pequenos negócios e quem hoje divulga seu trabalho principalmente pelo Instagram e WhatsApp.</p></div><div className="container audience-grid">{['Autônomos','Pequenos negócios','Especialistas','Prestadores de serviço'].map((x,i)=><article key={x}><span>0{i+1}</span><h3>{x}</h3><p>Uma apresentação profissional, clara e pronta para compartilhar.</p></article>)}</div></section>

      <section className="templates-section" id="modelos"><div className="container section-heading"><span className="eyebrow">Escolha seu ponto de partida</span><h2>Modelos com personalidade.<br/>Personalizados para a sua marca.</h2><p>Cada demonstração é uma página funcional completa. Abra, explore e imagine seu conteúdo ali.</p></div>
        <div className="filters" aria-label="Filtrar modelos">{categories.map(c=><button key={c} className={filter===c?'active':''} onClick={()=>setFilter(c)}>{c}</button>)}</div>
        <div className="container template-grid">{visible.map(t=><article className={`template-card card-${t.palette}`} key={t.slug}><a className="preview" href={`/templates/${t.slug}`} aria-label={`Ver demonstração ${t.name}`}><img src={`/previews/${t.slug}.webp`} alt={`Prévia real do template ${t.name}`} loading="lazy" /></a><div className="template-info"><span className="tag">{t.category}</span><h3>{t.name}</h3><p>{t.niche} · {t.style}</p><div className="card-actions"><a href={`/templates/${t.slug}`}>Ver demonstração</a><a href={whatsappUrl(`Olá! Gostei do template ${t.name} e gostaria de contratar esse modelo.`)} target="_blank" rel="noreferrer">Quero este modelo <ArrowRight size={15}/></a></div></div></article>)}</div>
      </section>

      <section className="light-section" id="planos"><div className="container section-heading dark-heading"><span className="eyebrow dark">Planos e valores</span><h2>Simples de entender.<br/>Fácil de começar.</h2><p>*O prazo começa após o recebimento de todo o material solicitado.</p></div><div className="container pricing-grid">{buildPlans.map(p=><article className={p.featured?'price-card featured':'price-card'} key={p.name}>{p.featured&&<span className="popular">Mais escolhido</span>}<h3>{p.name}</h3><strong className="price">{p.price}</strong><p>{p.description}</p><ul>{p.items.map(x=><li key={x}><Check/>{x}</li>)}</ul><a className="button" href={whatsappUrl(`Olá! Gostaria de contratar o plano ${p.name}.`)} target="_blank" rel="noreferrer">Escolher este plano</a></article>)}</div><div className="container scope-note"><ShieldCheck/><p><strong>Escopo objetivo:</strong> sistemas, lojas virtuais, login, painéis, automações e integrações avançadas precisam de orçamento separado.</p></div></section>

      <section className="care-section"><div className="container section-heading"><span className="eyebrow">Hospedagem e manutenção</span><h2>Seu site cuidado depois de ir ao ar.</h2></div><div className="container care-grid">{carePlans.map(p=><article key={p.name}><div><h3>{p.name}</h3><strong>{p.price}</strong></div><ul>{p.items.map(x=><li key={x}><Check/>{x}</li>)}</ul><p>{p.note}</p></article>)}</div></section>

      <section className="domain-section"><div className="container domain-box"><div className="domain-icon"><Globe2/></div><div><span className="eyebrow dark">Importante sobre o domínio</span><h2>O endereço exclusivo do seu site é contratado à parte.</h2><p>Domínio personalizado não está incluído nos valores apresentados. O preço varia conforme o nome desejado, a extensão escolhida e a disponibilidade. Para contratar com domínio personalizado, solicite um orçamento.</p><ul><li>Possui renovação periódica, normalmente anual</li><li>O orçamento é informado antes da contratação</li><li>Preferencialmente registrado em nome do cliente</li><li>Hospedagem e domínio são serviços diferentes</li></ul></div></div></section>

      <section className="extras-section"><div className="container split-title"><div><span className="eyebrow">Ajuste ao seu projeto</span><h2>Adicionais, quando você precisar.</h2></div><p>O escopo é combinado antes de começar, para você saber exatamente o que está contratando.</p></div><div className="container extras-grid">{extras.map(([name,value])=><div key={name}><span>{name}</span><strong>{value}</strong></div>)}</div></section>

      <section className="process light-section" id="como-funciona"><div className="container section-heading dark-heading"><span className="eyebrow dark">Como funciona</span><h2>Da escolha à publicação,<br/>um caminho bem simples.</h2></div><div className="container steps">{['Escolha o template','Solicite o orçamento','Envie todo o conteúdo','A página é personalizada','Aprove e vá para o ar'].map((x,i)=><article key={x}><span>{i+1}</span><h3>{x}</h3><p>{i===2?'Textos, imagens, vídeos, áudios e contatos. O prazo começa após esta etapa.':'Acompanhamos você em cada etapa, com clareza.'}</p></article>)}</div></section>

      <section className="checklist-section"><div className="container checklist-wrap"><div><span className="eyebrow">Prepare seu material</span><h2>O que você precisa enviar</h2><p>Não se preocupe se ainda não tiver tudo organizado. Este checklist ajuda a começar.</p></div><div className="checklist">{['Nome do negócio','Logo, se possuir','Cores desejadas','Textos e fotos','Vídeos ou áudios','Serviços e preços','WhatsApp','Redes sociais','Depoimentos verdadeiros','Link de agendamento'].map(x=><span key={x}><Check/>{x}</span>)}</div></div></section>

      <section className="faq light-section" id="duvidas"><div className="container faq-wrap"><div><span className="eyebrow dark">Perguntas frequentes</span><h2>Antes de começar, tire suas dúvidas.</h2><p>Tráfego pago e gestão de redes sociais não estão incluídos. O cliente deve fornecer materiais que tenha autorização para utilizar.</p></div><div className="accordion">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}</div></div></section>

      <section className="quote-section"><div className="container quote-wrap"><div><span className="eyebrow">Orçamento pelo WhatsApp</span><h2>Conte um pouco sobre o que você precisa.</h2><p>Preencha os campos e nós montamos a mensagem. Nenhum dado é enviado ou armazenado pelo site.</p><div className="quote-badge"><HeartHandshake/><span><strong>Atendimento humano</strong>{SITE.serviceArea}</span></div></div><QuoteForm/></div></section>
      <section className="final-cta"><div><span className="eyebrow">Seu próximo passo</span><h2>Vamos colocar seu trabalho no ar?</h2><p>Escolha seu modelo preferido e fale pelo WhatsApp para receber um orçamento.</p><a className="button light-button" href={whatsappUrl()} target="_blank" rel="noreferrer">Quero minha landing page <ArrowRight/></a></div></section>
    </main><Footer/>
  </div>
}
