import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function SimulacaoVendasSection() {
  const [expandedScenario, setExpandedScenario] = useState<number | null>(null);
  const [expandedScene, setExpandedScene] = useState<string | null>(null);

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
      title: 'Approach Presencial (Início)',
      description: 'Primeiro contato, qualificação rápida',
      tips: [
        'Apresente-se com confiança',
        'Qualifique rapidamente o cliente',
        'Identifique a dor principal (conta alta)',
        'Agende próximo contato'
      ]
    },
    {
      number: 2,
      title: 'WhatsApp (Qualificação Mínima)',
      description: 'Coleta de dados iniciais via mensagem',
      tips: [
        'Peça foto da conta de energia',
        'Peça foto do telhado',
        'Confirme dados de contato',
        'Agende visita técnica'
      ]
    },
    {
      number: 3,
      title: 'Visita + Pré-vistoria (Construindo Confiança)',
      description: 'Execução da pré-vistoria completa no local',
      tips: [
        'Tire todas as fotos obrigatórias',
        'Valide a viabilidade técnica',
        'Construa rapport com o cliente',
        'Agende apresentação da proposta'
      ]
    },
    {
      number: 4,
      title: 'Apresentação da Proposta',
      description: 'Foco em qualidade e resultado',
      tips: [
        'Mostre o custo da inação',
        'Apresente o valor do sistema',
        'Use a "Troca de Boleto"',
        'Deixe proposta escrita'
      ]
    },
    {
      number: 5,
      title: 'Objeção "Qualidade"',
      description: 'Garantias e risco',
      tips: [
        'Reforce a qualidade da Alluz',
        'Mostre cases de sucesso',
        'Explique as garantias',
        'Responda com confiança'
      ]
    },
    {
      number: 6,
      title: 'Fechamento',
      description: 'À vista, sem empurrar desconto',
      tips: [
        'Reafirme o valor',
        'Não reduza preço sem valor agregado',
        'Peça a assinatura',
        'Confirme próximas etapas'
      ]
    },
    {
      number: 7,
      title: 'Assinatura + Alinhamento Final',
      description: 'Reforço de confiança',
      tips: [
        'Colete documentação necessária',
        'Agende a pré-vistoria técnica',
        'Reforce o cronograma',
        'Deixe cliente tranquilo'
      ]
    }
  ];

  return (
    <section id="simulacao-vendas" className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Simulação de Vendas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore cenários reais e aprenda como lidar com diferentes tipos de clientes.
          </p>
        </div>

        {/* Scenarios */}
        <div className="space-y-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Cenários de Cliente</h3>
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${scenario.color}`}
              onClick={() => setExpandedScenario(expandedScenario === scenario.id ? null : scenario.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{scenario.title}</h4>
                  <p className="text-sm text-gray-700">{scenario.profile}</p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-700 transition-transform ${
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

        {/* Scenes */}
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
                  className={`w-6 h-6 text-yellow-400 transition-transform ${
                    expandedScene === `scene-${scene.number}` ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedScene === `scene-${scene.number}` && (
                <div className="bg-yellow-50 border-t-2 border-yellow-300 p-6">
                  <p className="text-sm font-bold text-gray-800 mb-3">DICAS PRÁTICAS:</p>
                  <ul className="space-y-2">
                    {scene.tips.map((tip, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-yellow-400 font-bold">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
