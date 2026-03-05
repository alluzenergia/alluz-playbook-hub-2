import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function SimulacaoVendasSection() {
  const [expandedScenario, setExpandedScenario] = useState<number | null>(1);
  const [expandedScene, setExpandedScene] = useState<string | null>('scene-1');

  const scenarios = [
    {
      id: 1,
      title: 'À Vista, Buscando Qualidade (Ponta a Ponta)',
      profile: 'Cliente com conta ~R$ 550, imóvel próprio, quer instalar logo. Já viu concorrentes, não quer "mais barato", quer certeza e pós-venda.',
      context: 'Cliente com conta ~R$ 550, imóvel próprio, quer instalar logo. Já viu concorrentes, não quer "mais barato", quer certeza e pós-venda.',
      objective: 'Vender redução de conta + segurança + padrão de execução (sem falar de payback como argumento principal).',
      color: 'bg-yellow-100 border-yellow-400'
    },
    {
      id: 2,
      title: 'Cliente Quer Guerra de Preço',
      profile: 'Cliente já pegou 3 orçamentos. Só pergunta: "quanto fica?" e "cobre o preço do outro". Tenta colocar em leilão.',
      context: 'Cliente já pegou 3 orçamentos. Só pergunta: "quanto fica?" e "cobre o preço do outro". Tenta colocar em leilão.',
      objective: 'Sair da guerra de preço e reposicionar em valor.',
      color: 'bg-red-100 border-red-400'
    },
    {
      id: 3,
      title: 'Cliente sem Dinheiro à Vista (Financiamento)',
      profile: 'Cliente quer solar, está desanimado com juros/Selic. Não tem dinheiro à vista, mas tem bom nome e renda não comprometida.',
      context: 'Cliente quer solar, está desanimado com juros/Selic. Não tem dinheiro à vista, mas tem bom nome e renda não comprometida.',
      objective: 'Vender redução de conta + segurança + padrão de execução.',
      color: 'bg-blue-100 border-blue-400'
    }
  ];

  const scenes = [
    {
      number: 1,
      title: 'Cena 1 — Approach Presencial (Início)',
      description: 'Primeiro contato, qualificação rápida',
      dialogue: [
        { speaker: 'CONSULTOR ALLUZ', text: 'Boa tarde! Eu sou consultor da Alluz. Posso fazer uma pergunta rápida? Sua conta de energia vem em mais quanto por mês?' },
        { speaker: 'CLIENTE', text: 'Uns 500... 600.' },
        { speaker: 'CONSULTOR ALLUZ', text: 'Perfeito, você está no perfil. Só um ponto importante: a Alluz não vende kit solar. A gente vende redução de conta com processo, homologação e monitoramento. Você pretende resolver isso agora, nos próximos 30 dias?' },
        { speaker: 'CLIENTE', text: 'Sim. Eu tenho o dinheiro, mas quero fazer com alguém que seja bom. Não quero odir de cabeça.' },
        { speaker: 'CONSULTOR ALLUZ', text: 'Ótimo. Você é o tipo de cliente que a Alluz gosta, porque aqui a prioridade é qualidade e resultado. Se você me mandar uma foto da sua conta de luz, eu monto uma proposta com 3 cenários e te apresento pessoalmente — e já faço a pré-vistoria na hora ter surpresa.' },
        { speaker: 'CLIENTE', text: 'Pode ser.' }
      ]
    },
    {
      number: 2,
      title: 'Cena 2 — WhatsApp (Qualificação Mínima)',
      description: 'Coleta de dados iniciais via mensagem',
      dialogue: [
        { speaker: 'CONSULTOR ALLUZ', text: 'Oi! Conseguiu a foto da conta? Preciso também de uma foto do telhado e do padrão (caixa de disjuntores).' },
        { speaker: 'CLIENTE', text: 'Vou tirar agora, um momento.' },
        { speaker: 'CONSULTOR ALLUZ', text: 'Perfeito! Quando você tiver, me manda. Assim eu já começo a análise e a gente marca a visita.' }
      ]
    },
    {
      number: 3,
      title: 'Cena 3 — Visita + Pré-vistoria (Construindo Confiança)',
      description: 'Execução da pré-vistoria completa no local',
      dialogue: [
        { speaker: 'CONSULTOR ALLUZ', text: 'Oi! Cheguei aí. Vou tirar as fotos do telhado, estrutura e padrão. Isso leva uns 15 minutos, tá bom?' },
        { speaker: 'CLIENTE', text: 'Tá certo. Quer um café?' },
        { speaker: 'CONSULTOR ALLUZ', text: 'Fico feliz! Enquanto tomo, a gente conversa sobre a proposta que montei pra você.' }
      ]
    },
    {
      number: 4,
      title: 'Cena 4 — Apresentação da Proposta',
      description: 'Foco em qualidade e resultado',
      dialogue: [
        { speaker: 'CONSULTOR ALLUZ', text: 'Olha só: você está pagando R$ 550 por mês em energia. Em 10 anos, isso é R$ 66 mil. Com a Alluz, você economiza R$ 100 mil. Isso é liberdade.' },
        { speaker: 'CLIENTE', text: 'Caramba! E quanto custa?' },
        { speaker: 'CONSULTOR ALLUZ', text: 'R$ 35 mil. Você paga uma vez e a energia fica barata para sempre. A Alluz garante o mínimo de geração, monitora tudo e você só aproveita.' }
      ]
    },
    {
      number: 5,
      title: 'Cena 5 — Objeção "Qualidade"',
      description: 'Garantias e risco',
      dialogue: [
        { speaker: 'CLIENTE', text: 'Mas e se der problema? Quem vai arrumar?' },
        { speaker: 'CONSULTOR ALLUZ', text: 'Ótima pergunta. A Alluz mede por kWh e por fatura. Se não entregar o mínimo que prometemos, a gente arca. Além disso, você tem 25 anos de garantia nos painéis e 10 anos no inversor. Pós-venda com dono: você fala comigo e eu acompanho.' }
      ]
    },
    {
      number: 6,
      title: 'Cena 6 — Fechamento',
      description: 'À vista, sem empurrar desconto',
      dialogue: [
        { speaker: 'CONSULTOR ALLUZ', text: 'Então, a gente fecha? Você vai economizar R$ 100 mil em 10 anos com segurança total.' },
        { speaker: 'CLIENTE', text: 'Sim, vamos. Quanto preciso assinar?' },
        { speaker: 'CONSULTOR ALLUZ', text: 'Perfeito! Vou trazer o contrato. Depois a gente agenda a pré-vistoria técnica e você fica tranquilo.' }
      ]
    },
    {
      number: 7,
      title: 'Cena 7 — Assinatura + Alinhamento Final',
      description: 'Reforço de confiança',
      dialogue: [
        { speaker: 'CONSULTOR ALLUZ', text: 'Pronto! Tudo assinado. Agora a Alluz vai fazer a pré-vistoria técnica, aprovar com a distribuidora e instalar. Você fica sabendo de tudo.' },
        { speaker: 'CLIENTE', text: 'Ótimo! Quando começa?' },
        { speaker: 'CONSULTOR ALLUZ', text: 'Em até 30 dias. E depois que instalar, você monitora tudo pelo app. Qualquer dúvida, você liga pra mim.' }
      ]
    }
  ];

  return (
    <section id="simulacao-vendas" className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Como entender o meu cliente?
          </h2>
          <p className="text-lg text-gray-600">Simulação de Vendas</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore cenários reais e aprenda como lidar com diferentes tipos de clientes através de diálogos autênticos.
          </p>
        </div>

        {/* Scenarios */}
        <div className="space-y-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Selecione um Cenário</h3>
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              className={`border-2 rounded-lg p-6 cursor-pointer transition-all hover:shadow-lg ${scenario.color}`}
              onClick={() => setExpandedScenario(expandedScenario === scenario.id ? null : scenario.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{scenario.title}</h4>
                  <p className="text-sm text-gray-700">{scenario.profile}</p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-700 transition-transform flex-shrink-0 ${
                    expandedScenario === scenario.id ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {expandedScenario === scenario.id && (
                <div className="mt-6 pt-6 border-t-2 border-current border-opacity-20 space-y-4">
                  <div>
                    <p className="text-sm font-bold text-gray-800 mb-2">CONTEXTO:</p>
                    <p className="text-sm text-gray-700">{scenario.context}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800 mb-2">OBJETIVO DO CONSULTOR:</p>
                    <p className="text-sm text-gray-700">{scenario.objective}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Scenes with Dialogues */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Cenas do Diálogo</h3>
          {scenes.map((scene) => (
            <div
              key={scene.number}
              className="border-2 border-yellow-300 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedScene(expandedScene === `scene-${scene.number}` ? null : `scene-${scene.number}`)}
                className="w-full p-6 flex items-center justify-between hover:bg-yellow-50 transition-colors"
              >
                <div className="flex items-center gap-4 text-left flex-1">
                  <div className="bg-yellow-400 text-gray-900 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    {scene.number}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{scene.title}</h4>
                    <p className="text-sm text-gray-600">{scene.description}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-yellow-400 transition-transform flex-shrink-0 ${
                    expandedScene === `scene-${scene.number}` ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedScene === `scene-${scene.number}` && (
                <div className="bg-yellow-50 border-t-2 border-yellow-300 p-6 space-y-4">
                  {scene.dialogue.map((line, idx) => (
                    <div key={idx} className={`p-4 rounded-lg ${line.speaker === 'CONSULTOR ALLUZ' ? 'bg-yellow-100 border-l-4 border-yellow-400' : 'bg-blue-100 border-l-4 border-blue-400'}`}>
                      <p className="text-xs font-bold text-gray-700 uppercase mb-1">{line.speaker}</p>
                      <p className="text-sm text-gray-800">{line.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Phrases */}
        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 border border-green-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Frases-Chave para Este Perfil</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
              <p className="text-sm text-gray-700">"Você não está comprando kit, está comprando redução de conta."</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
              <p className="text-sm text-gray-700">"Pré-vistoria evita surpresa e retrabalho."</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
              <p className="text-sm text-gray-700">"A Alluz mede por kWh e por fatura; compromisso é entregar no mínimo o pessimista."</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
              <p className="text-sm text-gray-700">"Pós-venda com dono: você fala comigo e eu acompanho."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
