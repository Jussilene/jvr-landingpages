export type TemplateDetail = {
  aboutTitle: string
  aboutText: string
  benefits: string[]
  process: string[]
  proofTitle: string
  proofType: 'gallery' | 'numbers' | 'audio' | 'showcase'
  proofItems: string[]
  faqs: [string, string][]
}

export const templateDetails: Record<string, TemplateDetail> = {
  'tarot-aurora': {
    aboutTitle: 'Escuta sensível para olhar possibilidades com mais clareza',
    aboutText: 'Aurora é uma personagem demonstrativa que conduz leituras simbólicas com respeito, confidencialidade e espaço para reflexão. As cartas apoiam a conversa, sem substituir decisões pessoais ou orientação profissional.',
    benefits: ['Atendimento reservado e sem julgamentos', 'Perguntas trabalhadas com objetividade', 'Leitura responsável, sem previsões infalíveis'],
    process: ['Escolha o tipo de leitura', 'Envie sua pergunta principal', 'Receba as orientações para o encontro', 'Participe da consulta on-line'],
    proofTitle: 'Um espaço de acolhimento e confiança',
    proofType: 'showcase',
    proofItems: ['Atendimento individual', 'Conversa confidencial', 'Tempo para suas perguntas'],
    faqs: [['A leitura garante acontecimentos?', 'Não. A proposta é simbólica e reflexiva, sem garantia de acontecimentos ou resultados.'], ['Preciso entender de tarô?', 'Não. O significado das cartas é apresentado durante a conversa.'], ['O atendimento é on-line?', 'Sim, neste exemplo as consultas são realizadas por videochamada.']]
  },
  'beleza-lume': {
    aboutTitle: 'Um estúdio criado para valorizar sua beleza natural',
    aboutText: 'O Lume Studio é uma marca fictícia de estética que combina atendimento cuidadoso, protocolos individualizados e um ambiente leve. Cada procedimento começa com uma conversa sobre objetivos e cuidados.',
    benefits: ['Avaliação antes de cada procedimento', 'Protocolos adaptados à rotina', 'Orientações claras de cuidados posteriores'],
    process: ['Conversa inicial', 'Avaliação individual', 'Procedimento escolhido', 'Orientações de manutenção'],
    proofTitle: 'Resultados demonstrativos com delicadeza',
    proofType: 'gallery',
    proofItems: ['Pele iluminada', 'Sobrancelhas naturais', 'Cuidado facial'],
    faqs: [['Preciso fazer avaliação?', 'Sim. A avaliação ajuda a escolher um procedimento compatível com suas necessidades.'], ['Quanto tempo dura uma sessão?', 'O tempo varia conforme o procedimento e é confirmado no agendamento.'], ['Os resultados são iguais para todos?', 'Não. Cada pessoa responde de maneira individual aos cuidados.']]
  },
  'terapia-casa-calma': {
    aboutTitle: 'Acolhimento profissional para falar sobre o que importa',
    aboutText: 'A Casa Calma apresenta uma profissional fictícia de psicologia com escuta ética, respeitosa e centrada na singularidade de cada pessoa. O processo terapêutico é construído em conjunto e no ritmo possível.',
    benefits: ['Escuta sem julgamentos', 'Sigilo e responsabilidade profissional', 'Atendimento on-line com horário combinado'],
    process: ['Contato inicial', 'Conversa sobre a demanda', 'Definição de horários', 'Acompanhamento contínuo'],
    proofTitle: 'Áreas que podem ser trabalhadas',
    proofType: 'showcase',
    proofItems: ['Autoconhecimento', 'Mudanças e transições', 'Relações e limites'],
    faqs: [['Como funciona a primeira consulta?', 'É um encontro para compreender sua demanda e explicar a forma de trabalho.'], ['Existe promessa de cura?', 'Não. Psicoterapia é um processo individual e não envolve promessas de cura ou resultados.'], ['Atende situações de emergência?', 'Não. Em urgências, procure imediatamente os serviços públicos de emergência da sua região.']]
  },
  'nutri-viva': {
    aboutTitle: 'Nutrição prática, individual e conectada à vida real',
    aboutText: 'A Nutri Viva é uma demonstração de atendimento nutricional que considera rotina, preferências, cultura e objetivos possíveis. Nada de cardápios genéricos ou promessas milagrosas.',
    benefits: ['Estratégias compatíveis com sua rotina', 'Acompanhamento e ajustes progressivos', 'Educação alimentar sem terrorismo nutricional'],
    process: ['Entrevista e rotina', 'Avaliação nutricional', 'Plano de ação individual', 'Retornos e ajustes'],
    proofTitle: 'Para diferentes momentos e necessidades',
    proofType: 'showcase',
    proofItems: ['Organização alimentar', 'Nutrição esportiva', 'Mudança de hábitos'],
    faqs: [['Recebo um plano alimentar?', 'Quando indicado, o plano é elaborado após avaliação individual.'], ['O atendimento é on-line?', 'Este modelo permite apresentar modalidades on-line e presencial.'], ['Há garantia de resultado?', 'Não. Resultados variam e dependem de diversos fatores individuais.']]
  },
  'voz-marca': {
    aboutTitle: 'Versatilidade vocal com direção e intenção',
    aboutText: 'Voz de Marca apresenta um locutor fictício preparado para interpretar roteiros institucionais, comerciais e educacionais, com gravação limpa e comunicação organizada.',
    benefits: ['Interpretação alinhada ao briefing', 'Áudio tratado e pronto para edição', 'Entrega organizada nos formatos combinados'],
    process: ['Envie o roteiro', 'Defina estilo e referência', 'Aprovação de amostra', 'Gravação e entrega'],
    proofTitle: 'Ouça estilos de interpretação',
    proofType: 'audio',
    proofItems: ['Comercial energético · 00:24', 'Institucional próximo · 00:31', 'Narração educativa · 00:28'],
    faqs: [['Posso enviar uma referência?', 'Sim. Referências ajudam a alinhar ritmo, intenção e estilo.'], ['Há ajustes incluídos?', 'A quantidade de ajustes é definida no orçamento.'], ['Como o valor é calculado?', 'Depende de uso, duração, canais de veiculação e prazo.']]
  },
  'frame-studio': {
    aboutTitle: 'Direção visual para histórias que merecem permanecer',
    aboutText: 'O Frame Studio é um portfólio fictício de fotografia e vídeo com olhar editorial, planejamento de cena e direção tranquila para pessoas e marcas.',
    benefits: ['Planejamento visual antes da produção', 'Direção durante fotos e filmagens', 'Seleção e tratamento cuidadosos'],
    process: ['Conversa e referências', 'Proposta e agenda', 'Produção', 'Seleção e entrega'],
    proofTitle: 'Portfólio em destaque',
    proofType: 'gallery',
    proofItems: ['Retratos autorais', 'Histórias de marca', 'Celebrações'],
    faqs: [['Vocês ajudam com poses?', 'Sim. A direção faz parte da experiência e respeita o estilo de cada pessoa.'], ['Quando recebo o material?', 'O prazo varia pelo tipo de produção e é informado na proposta.'], ['Os pacotes são fixos?', 'Os pacotes exibidos são demonstrativos e podem ser adaptados.']]
  },
  'pulso': {
    aboutTitle: 'Curadoria musical para transformar atmosfera em memória',
    aboutText: 'Pulso é um projeto artístico fictício que combina pesquisa musical, leitura de pista e produção técnica para eventos privados, experiências de marca e festas autorais.',
    benefits: ['Repertório construído para cada evento', 'Alinhamento técnico com a produção', 'Experiência adaptável do início ao auge da pista'],
    process: ['Conte sobre o evento', 'Alinhamento de repertório', 'Checklist técnico', 'Apresentação'],
    proofTitle: 'Experiências sonoras demonstrativas',
    proofType: 'audio',
    proofItems: ['Sunset orgânico · 01:12', 'Pista vibrante · 00:48', 'Recepção elegante · 00:55'],
    faqs: [['Posso escolher músicas?', 'Sim. Preferências e restrições são alinhadas antes do evento.'], ['Leva equipamento?', 'A estrutura necessária depende do local e entra na proposta.'], ['Atende fora da cidade?', 'Deslocamento e disponibilidade são avaliados no orçamento.']]
  },
  'belle-festa': {
    aboutTitle: 'Planejamento atento para celebrar com presença',
    aboutText: 'Belle Festa é uma assessoria fictícia que organiza fornecedores, cronograma e ambientação para que cada celebração tenha coerência, beleza e tranquilidade.',
    benefits: ['Cronograma e fornecedores organizados', 'Conceito visual conectado à história', 'Acompanhamento próximo até o evento'],
    process: ['Reunião de descoberta', 'Proposta personalizada', 'Planejamento', 'Coordenação do grande dia'],
    proofTitle: 'Cenários para celebrar',
    proofType: 'gallery',
    proofItems: ['Cerimônia intimista', 'Mesa de celebração', 'Recepção ao ar livre'],
    faqs: [['Fazem apenas casamentos?', 'O modelo pode apresentar aniversários, celebrações e eventos sociais.'], ['Posso contratar só a assessoria?', 'As modalidades são definidas conforme a necessidade do evento.'], ['Como recebo o orçamento?', 'Após uma conversa sobre data, local, convidados e serviços desejados.']]
  },
  'pronto-lar': {
    aboutTitle: 'Uma equipe demonstrativa para resolver com organização',
    aboutText: 'Pronto Lar reúne serviços residenciais em uma comunicação direta: descrição do problema, triagem, orçamento e agendamento. A disponibilidade e a região são sempre confirmadas antes da visita.',
    benefits: ['Contato rápido pelo WhatsApp', 'Orçamento explicado antes do serviço', 'Atendimento organizado por especialidade'],
    process: ['Envie fotos e descrição', 'Receba a triagem inicial', 'Aprove o orçamento', 'Agende o atendimento'],
    proofTitle: 'Indicadores meramente demonstrativos',
    proofType: 'numbers',
    proofItems: ['5 especialidades reunidas', 'Atendimento sob agendamento', 'Orçamento antes da execução'],
    faqs: [['Atende emergências?', 'A disponibilidade precisa ser confirmada pelo WhatsApp.'], ['Quais regiões são atendidas?', 'As regiões são informadas conforme a localização da empresa real.'], ['O orçamento é gratuito?', 'As condições de visita e orçamento devem ser confirmadas no contato.']]
  },
  'amparo-care': {
    aboutTitle: 'Equipe atenta à rotina, à autonomia e à dignidade',
    aboutText: 'Amparo Care é uma marca fictícia de cuidadores que apresenta apoio humano e organizado para famílias. O plano de cuidado depende de avaliação, necessidades e orientações dos profissionais responsáveis.',
    benefits: ['Seleção cuidadosa de profissionais', 'Rotina registrada e alinhada à família', 'Respeito à autonomia e às orientações de saúde'],
    process: ['Conversa com a família', 'Avaliação das necessidades', 'Definição do plano', 'Início e acompanhamento'],
    proofTitle: 'Cuidado pensado para diferentes rotinas',
    proofType: 'showcase',
    proofItems: ['Companhia e rotina', 'Acompanhamento externo', 'Apoio familiar'],
    faqs: [['O cuidador realiza procedimentos de saúde?', 'Somente atividades compatíveis com sua formação e com as orientações responsáveis.'], ['Como é escolhido o profissional?', 'O perfil é avaliado conforme rotina, horários e necessidades informadas.'], ['Há atendimento noturno?', 'Escalas e disponibilidade são definidas após avaliação.']]
  },
  'norte-seguros': {
    aboutTitle: 'Consultoria para comparar coberturas com clareza',
    aboutText: 'Norte Seguros é uma corretora fictícia que traduz condições, limites e assistências para apoiar escolhas conscientes, sempre sujeitas à análise e às regras das seguradoras.',
    benefits: ['Comparação de opções disponíveis', 'Explicação de coberturas e exclusões', 'Apoio durante a vigência da apólice'],
    process: ['Envie os dados necessários', 'Receba opções de cotação', 'Compare as condições', 'Escolha e formalize'],
    proofTitle: 'Proteção para diferentes momentos',
    proofType: 'showcase',
    proofItems: ['Auto e mobilidade', 'Casa e patrimônio', 'Vida e projetos'],
    faqs: [['A cotação garante contratação?', 'Não. A contratação está sujeita à análise e aceitação da seguradora.'], ['O seguro começa imediatamente?', 'A vigência consta na proposta e na apólice emitida.'], ['Posso comparar seguradoras?', 'Sim, conforme disponibilidade para o perfil analisado.']]
  },
  'solis-energia': {
    aboutTitle: 'Projeto solar dimensionado a partir do seu consumo',
    aboutText: 'Solis Energia é uma empresa demonstrativa que analisa histórico de consumo, local de instalação e condições técnicas antes de apresentar uma solução fotovoltaica.',
    benefits: ['Estudo técnico antes da proposta', 'Equipamentos dimensionados ao projeto', 'Monitoramento após a instalação'],
    process: ['Envie sua conta de energia', 'Análise técnica preliminar', 'Proposta e visita', 'Instalação e homologação'],
    proofTitle: 'Simulação visual demonstrativa',
    proofType: 'numbers',
    proofItems: ['Consumo analisado: 620 kWh/mês', 'Sistema estimado: 5,4 kWp', 'Estimativa sujeita à vistoria'],
    faqs: [['A economia é garantida?', 'Não. Ela varia com consumo, clima, tarifas, sombreamento e dimensionamento.'], ['Precisa de visita técnica?', 'A confirmação técnica depende da avaliação do local.'], ['O sistema funciona à noite?', 'A geração ocorre com luz solar; o consumo segue a configuração da rede e do projeto.']]
  },
  'alto-imoveis': {
    aboutTitle: 'Curadoria imobiliária com atendimento próximo',
    aboutText: 'Alto Imóveis apresenta um corretor e imóveis totalmente fictícios para demonstrar como uma landing page pode organizar oportunidades, perfil de busca e etapas de negociação.',
    benefits: ['Seleção alinhada ao perfil de busca', 'Informações organizadas para cada visita', 'Apoio documental durante a negociação'],
    process: ['Defina seu perfil', 'Receba uma curadoria', 'Agende visitas', 'Analise e negocie'],
    proofTitle: 'Imóveis demonstrativos em seleção',
    proofType: 'gallery',
    proofItems: ['Casa Horizonte · valor fictício', 'Apartamento Nexo · valor fictício', 'Loft Aurora · valor fictício'],
    faqs: [['Os imóveis exibidos estão disponíveis?', 'Não. São exemplos fictícios usados somente nesta demonstração.'], ['Atende compra e locação?', 'O modelo pode ser adaptado às modalidades oferecidas pelo profissional.'], ['Há garantia de aprovação de crédito?', 'Não. Crédito depende da análise da instituição financeira.']]
  },
  'metodo-claro': {
    aboutTitle: 'Experiência organizada em uma jornada aplicável',
    aboutText: 'Método Claro é uma formação fictícia para especialistas que desejam organizar conhecimento. A página demonstra módulos, público, dinâmica e informações de inscrição sem prometer resultados.',
    benefits: ['Conteúdo dividido em etapas objetivas', 'Exercícios para aplicar durante a jornada', 'Encontros para dúvidas e troca de experiências'],
    process: ['Inscrição', 'Acesso ao material', 'Encontros ao vivo', 'Aplicação do plano'],
    proofTitle: 'Conteúdo demonstrativo da jornada',
    proofType: 'showcase',
    proofItems: ['Módulo 1 · Clareza', 'Módulo 2 · Estrutura', 'Módulo 3 · Comunicação'],
    faqs: [['As aulas são gravadas?', 'A disponibilidade de gravações deve ser informada nas condições reais do curso.'], ['Existe certificado?', 'Somente se isso fizer parte da oferta real do professor.'], ['O curso garante resultados?', 'Não. A aplicação e os resultados variam conforme cada participante.']]
  },
  'atlas-consultoria': {
    aboutTitle: 'Análise técnica com comunicação clara e responsável',
    aboutText: 'Atlas Consultoria é uma apresentação fictícia de atuação jurídica consultiva. Cada situação exige análise individual, documentos adequados e observância às normas profissionais.',
    benefits: ['Escopo e próximos passos explicados', 'Tratamento responsável das informações', 'Análise individual de cada demanda'],
    process: ['Contato inicial', 'Verificação de possível atendimento', 'Análise de documentos', 'Proposta e orientação'],
    proofTitle: 'Frentes consultivas demonstrativas',
    proofType: 'showcase',
    proofItems: ['Contratos empresariais', 'Análise documental', 'Consultoria preventiva'],
    faqs: [['O primeiro contato é uma consulta?', 'Não necessariamente. Ele serve para entender a demanda e verificar o atendimento possível.'], ['Existe garantia de resultado?', 'Não. A atuação jurídica responsável não garante resultados.'], ['Quais documentos devo enviar?', 'A lista é informada após a compreensão inicial da demanda.']]
  }
}
