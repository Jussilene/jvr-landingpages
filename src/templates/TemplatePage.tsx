import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, ChevronDown, Headphones, Menu, Play, ShieldCheck, Sparkles, X } from 'lucide-react'
import { templates } from '../data/templates'
import { templateDetails } from '../data/templateDetails'
import { whatsappUrl } from '../config/site'
import WhatsAppIcon from '../components/WhatsAppIcon'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import PageMotion from '../components/PageMotion'

export default function TemplatePage() {
  const { slug } = useParams()
  const [menuOpen, setMenuOpen] = useState(false)
  const item = templates.find(t => t.slug === slug)
  const detail = slug ? templateDetails[slug] : undefined

  useEffect(() => {
    if (item) document.title = `${item.name} — Template demonstrativo | JVR`
  }, [item])

  if (!item || !detail) return <main className="not-found"><h1>Modelo não encontrado</h1><Link to="/">Voltar ao início</Link></main>

  const contact = whatsappUrl(`Olá! Gostei do template ${item.name} e gostaria de contratar esse modelo.`)
  return <div className={`demo theme-${item.palette} layout-${item.layout}`}>
    <PageMotion rootClass=".demo"/>
    <div className="demo-atmosphere" aria-hidden="true"><i/><i/><i/><span/><span/></div>
    <div className="demo-notice">Template demonstrativo · Marca, dados e informações fictícios</div>
    <nav className="demo-nav">
      <strong>{item.name}</strong>
      <button className="demo-menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen?'Fechar menu':'Abrir menu'}>{menuOpen?<X/>:<Menu/>}</button>
      <div className={menuOpen?'demo-links open':'demo-links'}><a href="#sobre" onClick={()=>setMenuOpen(false)}>Sobre</a><a href="#servicos" onClick={()=>setMenuOpen(false)}>Serviços</a><a href="#experiencia" onClick={()=>setMenuOpen(false)}>Experiência</a><a href="#duvidas" onClick={()=>setMenuOpen(false)}>Dúvidas</a><a href={contact} target="_blank" rel="noreferrer"><WhatsAppIcon size={16}/> Contato</a></div>
    </nav>

    <main>
      <section className="demo-hero" data-section="hero" data-motion>
        <div className="demo-copy">
          <span className="demo-eyebrow">{item.eyebrow}</span>
          <h1>{item.headline}</h1>
          <p>{item.subheadline}</p>
          <a className="demo-button" href={contact} target="_blank" rel="noreferrer"><WhatsAppIcon size={18}/> Solicitar informações <ArrowRight size={18}/></a>
        </div>
        <div className="demo-visual" data-glow aria-label={`Composição visual do template ${item.name}`}>
          <div className="orb"/><span>{item.name.charAt(0)}</span><small>{item.niche}</small>
        </div>
      </section>

      <section className="demo-intro" id="sobre" data-section="apresentacao" data-motion>
        <div className="intro-mark"><span>Sobre</span><b>{item.name.charAt(0)}</b></div>
        <div><span className="demo-eyebrow">Apresentação</span><h2>{detail.aboutTitle}</h2><p>{detail.aboutText}</p><p className="demo-proof"><ShieldCheck size={18}/>{item.proof}</p></div>
      </section>

      <section className="demo-services" id="servicos" data-section="servicos" data-motion>
        <span className="demo-eyebrow">Serviços e modalidades</span>
        <h2>Soluções apresentadas com clareza</h2>
        <div className="demo-service-grid">{item.services.map((service, index) =>
          <article data-glow key={service}><span>0{index+1}</span><h3>{service}</h3><p>Atendimento demonstrativo organizado para explicar possibilidades, escopo e próximos passos.</p><Check size={18}/></article>
        )}</div>
      </section>

      <section className="demo-benefits" data-section="beneficios" data-motion>
        <div><span className="demo-eyebrow">Por que escolher</span><h2>Uma experiência pensada para transmitir segurança</h2></div>
        <div className="benefit-list">{detail.benefits.map((benefit, index) =>
          <article key={benefit}><span>{String(index+1).padStart(2,'0')}</span><h3>{benefit}</h3></article>
        )}</div>
      </section>

      <section className={`demo-evidence evidence-${detail.proofType}`} id="experiencia" data-section="prova" data-motion>
        <div className="evidence-heading"><span className="demo-eyebrow">Confiança e experiência</span><h2>{detail.proofTitle}</h2><p>Conteúdo criado exclusivamente para demonstrar a composição deste modelo.</p></div>
        <div className="evidence-grid">{detail.proofItems.map((proof, index) =>
          <article data-glow key={proof}>
            {detail.proofType === 'audio' ? <button aria-label={`Reproduzir amostra ${proof}`}><Play fill="currentColor"/></button> : <span>{String(index+1).padStart(2,'0')}</span>}
            <div>{detail.proofType === 'audio' && <Headphones size={17}/>}<strong>{proof}</strong><small>{detail.proofType === 'gallery' ? 'Imagem conceitual demonstrativa' : 'Informação demonstrativa'}</small></div>
          </article>
        )}</div>
      </section>

      <section className="demo-process" data-section="processo" data-motion>
        <div className="process-heading"><span className="demo-eyebrow">Como funciona</span><h2>Do primeiro contato ao atendimento</h2></div>
        <ol>{detail.process.map((step, index) =>
          <li key={step}><span>{index+1}</span><div><h3>{step}</h3><p>Etapa alinhada com transparência para que você saiba o que acontece a seguir.</p></div></li>
        )}</ol>
      </section>

      <section className="demo-faq" id="duvidas" data-section="faq" data-motion>
        <div><span className="demo-eyebrow">Dúvidas frequentes</span><h2>Informação para decidir com tranquilidade</h2><p>As respostas são exemplos e devem ser adaptadas às condições reais do profissional.</p></div>
        <div>{detail.faqs.map(([question, answer], index) =>
          <details key={question} open={index === 0}><summary>{question}<ChevronDown/></summary><p>{answer}</p></details>
        )}</div>
      </section>

      <section className="demo-cta" data-section="cta" data-motion>
        <Sparkles className="cta-spark"/>
        <span>Pronto para adaptar este modelo à sua marca?</span>
        <h2>Vamos criar uma presença completa que tenha a sua cara.</h2>
        <p>Fale com a JVR e solicite um orçamento para personalizar textos, cores e conteúdo.</p>
        <a className="demo-button" href={contact} target="_blank" rel="noreferrer"><WhatsAppIcon size={18}/> Quero este modelo <ArrowRight size={18}/></a>
      </section>
    </main>

    <footer className="demo-footer"><strong>{item.name}</strong><span>Template demonstrativo · Conteúdo e contatos fictícios.</span><Link to="/"><ArrowLeft size={16}/> Voltar à JVR</Link></footer>
    <FloatingWhatsApp message={`Olá! Gostei do template ${item.name} e gostaria de contratar esse modelo.`} label="Quero este modelo"/>
  </div>
}
