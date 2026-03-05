import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function SimulacaoVendasSection() {
  const [selectedScenario, setSelectedScenario] = useState<number>(1);
  const [expandedScene, setExpandedScene] = useState<string | null>('scene-1');

  // Diálogos específicos para cada cenário
  const scenarioDialogues = {
    1: { // Ponta a Ponta
      title: 'À Vista, Buscando Qualidade (Ponta a Ponta)',
      profile: 'Cliente com conta ~R$ 550, imóvel próprio, quer instalar logo. Já viu concorrentes, não quer "mais barato", quer certeza e pós-venda.',
      scenes: [
        {
          number: 1,
          title: 'Cena 1 — Approach Presencial (Início)',
          dialogue: [
            { speaker: 'CONSULTOR ALLUZ', text: 'Boa tarde! Eu sou consultor da Alluz. Posso fazer uma pergunta rápida? Sua conta de energia vem em mais quanto por mês?' },
            { speaker: 'CLIENTE', text: 'Uns 500... 600.' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Perfeito, você está no perfil. Só um ponto importante: a Alluz não vende kit solar. A gente vende redução de conta com processo, homologação e monitoramento. Você pretende resolver isso agora, nos próximos 30 dias?' },
            { speaker: 'CLIENTE', text: 'Sim. Eu tenho o dinheiro, mas quero fazer com alguém que seja bom. Não quero odir de cabeça.' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Ótimo. Você é o tipo de cliente que a Alluz gosta, porque aqui a prioridade é qualidade e resultado. Se você me mandar uma foto da sua conta de luz, eu monto uma proposta com 3 cenários e te apresento pessoalmente — e já faço a pré-vistoria na hora ter surpresa.' },
          ]
        },
        {
          number: 2,
          title: 'Cena 2 — WhatsApp (Qualificação Mínima)',
          dialogue: [
            { speaker: 'CONSULTOR ALLUZ', text: 'Oi! Conseguiu a foto da conta? Preciso também de uma foto do telhado e do padrão (caixa de disjuntores).' },
            { speaker: 'CLIENTE', text: 'Vou tirar agora, um momento.' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Perfeito! Quando você tiver, me manda. Assim eu já começo a análise e a gente marca a visita para amanhã ou depois.' }
          ]
        },
        {
          number: 3,
          title: 'Cena 3 — Visita + Pré-vistoria (Construindo Confiança)',
          dialogue: [
            { speaker: 'CONSULTOR ALLUZ', text: 'Oi! Cheguei aí. Vou tirar as fotos do telhado, estrutura e padrão. Isso leva uns 15 minutos, tá bom?' },
            { speaker: 'CLIENTE', text: 'Tá certo. Quer um café?' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Fico feliz! Enquanto tomo, a gente conversa sobre a proposta que montei pra você. Olha só: você está pagando R$ 550 por mês. Em 10 anos, isso é R$ 66 mil. Com a Alluz, você economiza R$ 100 mil.' }
          ]
        },
        {
          number: 4,
          title: 'Cena 4 — Apresentação da Proposta',
          dialogue: [
            { speaker: 'CONSULTOR ALLUZ', text: 'Você vai receber 3 cenários: conservador, realista e otimista. Todos com a Alluz gerando e monitorando. O que importa é que você tem segurança total.' },
            { speaker: 'CLIENTE', text: 'E quanto custa?' },
            { speaker: 'CONSULTOR ALLUZ', text: 'R$ 35 mil. Você paga uma vez e a energia fica barata para sempre. A Alluz garante o mínimo de geração, monitora tudo e você só aproveita.' }
          ]
        },
        {
          number: 5,
          title: 'Cena 5 — Objeção "Qualidade"',
          dialogue: [
            { speaker: 'CLIENTE', text: 'Mas e se der problema? Quem vai arrumar?' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Ótima pergunta. A Alluz mede por kWh e por fatura. Se não entregar o mínimo que prometemos, a gente arca. Além disso, você tem 25 anos de garantia nos painéis e 10 anos no inversor. Pós-venda com dono: você fala comigo e eu acompanho.' }
          ]
        },
        {
          number: 6,
          title: 'Cena 6 — Fechamento',
          dialogue: [
            { speaker: 'CONSULTOR ALLUZ', text: 'Então, a gente fecha? Você vai economizar R$ 100 mil em 10 anos com segurança total.' },
            { speaker: 'CLIENTE', text: 'Sim, vamos. Quanto preciso assinar?' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Perfeito! Vou trazer o contrato. Depois a gente agenda a pré-vistoria técnica e você fica tranquilo.' }
          ]
        }
      ]
    },
    2: { // Guerra de Preço
      title: 'Cliente Quer Guerra de Preço',
      profile: 'Cliente já pegou 3 orçamentos. Só pergunta: "quanto fica?" e "cobre o preço do outro". Tenta colocar em leilão.',
      scenes: [
        {
          number: 1,
          title: 'Cena 1 — Approach Presencial (Início)',
          dialogue: [
            { speaker: 'CONSULTOR ALLUZ', text: 'Boa tarde! Eu sou consultor da Alluz. Você já tem orçamentos de outras empresas?' },
            { speaker: 'CLIENTE', text: 'Tenho sim. Você cobre o preço deles?' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Ótimo que você esteja comparando. Mas deixa eu fazer uma pergunta: você está buscando o menor preço ou o maior lucro?' },
            { speaker: 'CLIENTE', text: 'Claro que o maior lucro.' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Então me mostra os orçamentos. Vou te mostrar por que um 10% mais barato pode custar 3x mais caro no longo prazo.' }
          ]
        },
        {
          number: 2,
          title: 'Cena 2 — Análise Comparativa',
          dialogue: [
            { speaker: 'CONSULTOR ALLUZ', text: 'Vejo que pegou orçamento de X, Y e Z. Todos com preço diferente. Mas qual deles oferece garantia de performance? Qual tem monitoramento 24h?' },
            { speaker: 'CLIENTE', text: 'Nenhum falou isso.' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Exatamente. Preço é o que você paga, valor é o que você recebe. Um sistema 10% mais barato que gera 20% menos energia custa o triplo no longo prazo.' }
          ]
        },
        {
          number: 3,
          title: 'Cena 3 — Engenharia vs Preço',
          dialogue: [
            { speaker: 'CONSULTOR ALLUZ', text: 'A Alluz trabalha com equipamentos de Tier 1, instalação com padrão de qualidade e monitoramento. Isso tem custo. Mas você recupera em 2 anos a diferença de preço.' },
            { speaker: 'CLIENTE', text: 'Como assim?' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Um sistema barato perde 5% de eficiência ao ano por falta de manutenção. O nosso perde 0,5%. Em 10 anos, você ganha R$ 50 mil só em geração extra.' }
          ]
        },
        {
          number: 4,
          title: 'Cena 4 — Reposicionamento de Valor',
          dialogue: [
            { speaker: 'CONSULTOR ALLUZ', text: 'Você quer o menor preço ou quer sair dessa guerra de preço e focar no resultado real?' },
            { speaker: 'CLIENTE', text: 'Resultado real, óbvio.' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Então vamos falar de economia garantida, não de preço. A Alluz promete X de economia e mede por fatura. Se não entregar, a gente paga a diferença.' }
          ]
        },
        {
          number: 5,
          title: 'Cena 5 — Fechamento com Valor',
          dialogue: [
            { speaker: 'CONSULTOR ALLUZ', text: 'Então, você prefere economizar R$ 100 mil em 10 anos com segurança ou economizar R$ 5 mil agora e perder R$ 50 mil em eficiência?' },
            { speaker: 'CLIENTE', text: 'Vendo assim... faz sentido.' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Perfeito! Vamos assinar e você fica tranquilo com a melhor solução, não a mais barata.' }
          ]
        }
      ]
    },
    3: { // Financiamento
      title: 'Cliente sem Dinheiro à Vista (Financiamento)',
      profile: 'Cliente quer solar, está desanimado com juros/Selic. Não tem dinheiro à vista, mas tem bom nome e renda não comprometida.',
      scenes: [
        {
          number: 1,
          title: 'Cena 1 — Approach Presencial (Início)',
          dialogue: [
            { speaker: 'CONSULTOR ALLUZ', text: 'Boa tarde! Você tem interesse em energia solar?' },
            { speaker: 'CLIENTE', text: 'Tenho, mas não tenho dinheiro à vista agora.' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Entendo. Mas você tem bom nome no banco? Renda estável?' },
            { speaker: 'CLIENTE', text: 'Tenho sim.' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Perfeito! Então a gente pode financiar. E aqui está o legal: a economia da conta paga a parcela do financiamento e ainda sobra dinheiro.' }
          ]
        },
        {
          number: 2,
          title: 'Cena 2 — Matemática do Financiamento',
          dialogue: [
            { speaker: 'CONSULTOR ALLUZ', text: 'Sua conta é de quanto?' },
            { speaker: 'CLIENTE', text: 'Uns R$ 400.' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Com solar, você paga R$ 100. A diferença é R$ 300. Se a parcela do financiamento for R$ 250, você ainda economiza R$ 50 por mês. Entendeu?' },
            { speaker: 'CLIENTE', text: 'Ah, entendi! Não é custo, é investimento que se paga sozinho.' }
          ]
        },
        {
          number: 3,
          title: 'Cena 3 — Comparação com Mercado',
          dialogue: [
            { speaker: 'CONSULTOR ALLUZ', text: 'Seu sistema rende 2,5% ao mês sobre o capital investido. Onde mais você consegue esse rendimento com risco zero e isento de imposto?' },
            { speaker: 'CLIENTE', text: 'Verdade. CDB não dá nem 1% ao mês.' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Exatamente. E o CDB você paga imposto. Aqui você economiza e ainda fica com o sistema como bem de capital.' }
          ]
        },
        {
          number: 4,
          title: 'Cena 4 — Objeção "Juros Altos"',
          dialogue: [
            { speaker: 'CLIENTE', text: 'Mas os juros estão muito altos agora.' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Verdade. Mas enquanto você espera o juro cair 0,2%, você joga 100% do valor da sua conta no lixo todo mês. A economia imediata paga o juro e ainda sobra. Você perde mais esperando.' }
          ]
        },
        {
          number: 5,
          title: 'Cena 5 — Substituição de Passivo',
          dialogue: [
            { speaker: 'CONSULTOR ALLUZ', text: 'Você já tem uma dívida vitalícia: sua conta de luz. Só estamos trocando um boleto que não acaba nunca por um que tem data para acabar.' },
            { speaker: 'CLIENTE', text: 'Boa forma de ver. Faz sentido.' },
            { speaker: 'CONSULTOR ALLUZ', text: 'Então vamos assinar? Eu já encaminho para o banco e você fica com a economia desde o mês que vem.' }
          ]
        }
      ]
    }
  };

  const scenarios = [
    {
      id: 1,
      title: 'À Vista, Buscando Qualidade (Ponta a Ponta)',
      profile: 'Cliente com conta ~R$ 550, imóvel próprio, quer instalar logo. Já viu concorrentes, não quer "mais barato", quer certeza e pós-venda.',
      color: 'bg-yellow-100 border-yellow-400'
    },
    {
      id: 2,
      title: 'Cliente Quer Guerra de Preço',
      profile: 'Cliente já pegou 3 orçamentos. Só pergunta: "quanto fica?" e "cobre o preço do outro". Tenta colocar em leilão.',
      color: 'bg-red-100 border-red-400'
    },
    {
      id: 3,
      title: 'Cliente sem Dinheiro à Vista (Financiamento)',
      profile: 'Cliente quer solar, está desanimado com juros/Selic. Não tem dinheiro à vista, mas tem bom nome e renda não comprometida.',
      color: 'bg-blue-100 border-blue-400'
    }
  ];

  const currentScenario = scenarioDialogues[selectedScenario as keyof typeof scenarioDialogues];

  return (
    <section id="simulacao-vendas" className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Como atender o meu cliente?
          </h2>
          <p className="text-lg text-gray-600">Simulação de Vendas</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selecione um cenário e veja como os diálogos mudam. Cada tipo de cliente precisa de uma abordagem diferente.
          </p>
        </div>

        {/* Scenarios Selection */}
        <div className="space-y-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Selecione um Cenário</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => {
                  setSelectedScenario(scenario.id);
                  setExpandedScene('scene-1');
                }}
                className={`border-2 rounded-lg p-6 text-left transition-all ${
                  selectedScenario === scenario.id
                    ? `${scenario.color} shadow-lg`
                    : 'bg-white border-gray-200 hover:border-yellow-300'
                }`}
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{scenario.title}</h4>
                <p className="text-sm text-gray-700">{scenario.profile}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Scenes with Dialogues for Selected Scenario */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Cenas do Diálogo — {currentScenario.title}</h3>
          {currentScenario.scenes.map((scene) => (
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
              <p className="text-sm text-gray-700">"Preço é o que você paga, valor é o que você recebe."</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
              <p className="text-sm text-gray-700">"A economia da conta paga a parcela do financiamento e ainda sobra."</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
              <p className="text-sm text-gray-700">"Você está buscando o menor preço ou o maior lucro?"</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
              <p className="text-sm text-gray-700">"Seu sistema rende 2,5% ao mês com risco zero."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
