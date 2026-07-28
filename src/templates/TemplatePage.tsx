import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, Play, Sparkles } from 'lucide-react'
import { templates } from '../data/templates'
import { whatsappUrl } from '../config/site'

export default function TemplatePage() {
  const { slug } = useParams()
  const item = templates.find(t => t.slug === slug)
  useEffect(() => { if (item) document.title = `${item.name} — Template demonstrativo | JVR` }, [item])
  if (!item) return <main className="not-found"><h1>Modelo não encontrado</h1><Link to="/">Voltar ao início</Link></main>
  const contact = whatsappUrl(`Olá! Gostei do template ${item.name} e gostaria de contratar esse modelo.`)
  return <div className={`demo theme-${item.palette} layout-${item.layout}`}>
    <div className="demo-notice">Template demonstrativo · Dados fictícios</div>
    <nav className="demo-nav"><strong>{item.name}</strong><div><a href="#servicos">Serviços</a><a href="#sobre">Sobre</a><a href={contact} target="_blank" rel="noreferrer">Contato</a></div></nav>
    <main>
      <section className="demo-hero">
        <div className="demo-copy"><span className="demo-eyebrow">{item.eyebrow}</span><h1>{item.headline}</h1><p>{item.subheadline}</p><a className="demo-button" href={contact} target="_blank" rel="noreferrer">Agendar conversa <ArrowRight size={18}/></a></div>
        <div className="demo-visual" aria-label={`Composição visual do template ${item.name}`}><div className="orb"/><span>{item.name.charAt(0)}</span><small>{item.niche}</small></div>
      </section>
      <section className="demo-services" id="servicos"><span className="demo-eyebrow">O que fazemos</span><h2>Um atendimento pensado nos detalhes</h2><div className="demo-service-grid">{item.services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>Uma apresentação clara, acolhedora e adaptada às necessidades de cada pessoa.</p><Check size={18}/></article>)}</div></section>
      {item.palette === 'voice' || item.palette === 'music' ? <section className="demo-media"><button aria-label="Reproduzir amostra demonstrativa"><Play fill="currentColor"/></button><div><strong>Amostra demonstrativa</strong><span>00:00 — 00:32</span></div><div className="wave">▂▅▇▃▆▂▇▅▃▆▇▂▅▃▇▆▂▅</div></section> : null}
      <section className="demo-about" id="sobre"><div><span className="demo-eyebrow">Nossa abordagem</span><h2>Profissionalismo sem perder a proximidade</h2></div><div><p>Este é um conteúdo original criado para demonstrar possibilidades de estrutura, hierarquia e linguagem para o nicho.</p><p className="demo-proof"><Sparkles size={17}/>{item.proof}</p></div></section>
      <section className="demo-cta"><span>Pronto para adaptar este modelo à sua marca?</span><h2>Vamos criar uma presença que tenha a sua cara.</h2><a className="demo-button" href={contact} target="_blank" rel="noreferrer">Quero este modelo</a></section>
    </main>
    <footer className="demo-footer"><strong>{item.name}</strong><span>Conteúdo e contatos fictícios para demonstração.</span><Link to="/"><ArrowLeft size={16}/> Voltar à JVR</Link></footer>
    <a className="fixed-demo-cta" href={contact} target="_blank" rel="noreferrer">Quero este modelo <ArrowRight size={17}/></a>
  </div>
}
