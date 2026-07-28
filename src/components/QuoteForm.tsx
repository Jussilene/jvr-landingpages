import { useState, type FormEvent } from 'react'
import { buildPlans } from '../data/pricing'
import { templates } from '../data/templates'
import { whatsappUrl } from '../config/site'
import WhatsAppIcon from './WhatsAppIcon'

export default function QuoteForm() {
  const [error, setError] = useState('')
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const required = ['nome','negocio','template','plano','dominio']
    if (required.some(key => !data.get(key))) { setError('Preencha os campos obrigatórios para continuar.'); return }
    const message = `Olá! Meu nome é ${data.get('nome')} e gostaria de solicitar um orçamento.\n\nNegócio: ${data.get('negocio')}\nTemplate: ${data.get('template')}\nPlano: ${data.get('plano')}\nJá possui domínio: ${data.get('dominio')}\nMensagem: ${data.get('mensagem') || 'Sem observações.'}`
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
    setError('')
  }
  return <form className="quote-form" onSubmit={submit} noValidate>
    <div className="field-row"><label>Nome*<input name="nome" autoComplete="name" /></label><label>Tipo de negócio*<input name="negocio" /></label></div>
    <div className="field-row"><label>Template escolhido*<select name="template" defaultValue=""><option value="" disabled>Selecione</option>{templates.map(t=><option key={t.slug}>{t.name}</option>)}</select></label><label>Plano*<select name="plano" defaultValue=""><option value="" disabled>Selecione</option>{buildPlans.map(p=><option key={p.name}>{p.name}</option>)}</select></label></div>
    <fieldset><legend>Já possui domínio?*</legend><label className="radio"><input type="radio" name="dominio" value="Sim" /> Sim</label><label className="radio"><input type="radio" name="dominio" value="Não" /> Não</label><label className="radio"><input type="radio" name="dominio" value="Não sei" /> Não sei</label></fieldset>
    <label>Mensagem<textarea name="mensagem" rows={4} placeholder="Conte um pouco sobre o que precisa." /></label>
    {error && <p className="form-error" role="alert">{error}</p>}
    <p className="form-note">Seus dados não são armazenados. Ao continuar, a mensagem será aberta no WhatsApp.</p>
    <button className="button" type="submit"><WhatsAppIcon size={19}/> Montar mensagem no WhatsApp</button>
  </form>
}
