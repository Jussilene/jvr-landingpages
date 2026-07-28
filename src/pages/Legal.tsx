import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Legal({ type }: { type: 'privacy'|'terms' }) {
  const privacy = type === 'privacy'
  return <><Header/><main className="legal container">
    <span className="eyebrow">Informação importante</span><h1>{privacy ? 'Política de Privacidade' : 'Termos de Serviço'}</h1>
    <p className="lead">Este texto é um modelo básico e deverá ser revisado antes da publicação definitiva.</p>
    {privacy ? <>
      <h2>Contato e dados</h2><p>Este site não possui cadastro nem banco de dados. Ao preencher o formulário de orçamento, as informações são apenas organizadas no seu navegador e abertas no WhatsApp. Nada é armazenado por este site.</p>
      <h2>Serviços de terceiros</h2><p>Ao escolher falar pelo WhatsApp, você passa a utilizar um serviço externo, sujeito aos termos e à política de privacidade da respectiva plataforma.</p>
      <h2>Seus materiais</h2><p>Dados e arquivos enviados durante a contratação serão usados somente para atendimento e execução do serviço combinado, observadas as condições acertadas entre as partes.</p>
    </> : <>
      <h2>Escopo</h2><p>A proposta comercial definirá modelo, seções, personalizações, prazo, rodadas de alteração, hospedagem e demais itens incluídos. Funcionalidades complexas são orçadas separadamente.</p>
      <h2>Conteúdo do cliente</h2><p>O cliente é responsável por fornecer informações corretas e materiais que tenha autorização para utilizar, incluindo textos, imagens, marcas, vídeos, áudios e depoimentos.</p>
      <h2>Prazos e aprovação</h2><p>O prazo começa após o recebimento de todo o material solicitado. Publicação, manutenção, domínio e alterações posteriores seguem as condições da proposta aceita.</p>
    </>}
    <h2>Contato</h2><p>Dúvidas podem ser encaminhadas pelo WhatsApp informado neste site.</p>
  </main><Footer/></>
}
