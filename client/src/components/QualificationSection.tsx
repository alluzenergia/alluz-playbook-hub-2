import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function QualificationSection() {
  const [expandedLead, setExpandedLead] = useState<string | null>('A');

  const leads = [
    {
      id: 'A',
      title: 'Lead A — Prioridade Máxima',
      subtitle: '(Quente e com fit)',
      description: 'Pronto para comprar e com alta chance de fechar.',
      icon: '🔥',
      color: 'from-red-500 to-red-600',
      criteria: [
        'Conta ≥ R$ 300',
        'Imóvel próprio',
        'Telhado viável (validado na pré-vistoria)',
        'Decisão em até 30 dias',
        'Envia o básico (conta + fotos na vistoria)',
      ],
      action: 'Atendimento imediato, proposta rápida e visita/pré-vistoria em até 48h.',
      meta: 'Fechar rápido (sem deixar esfriar).',
    },
    {
      id: 'B',
      title: 'Lead B — Bom, mas Morno',
      subtitle: '(Precisa de condução)',
      description: 'Tem fit, mas ainda está comparando, enrolado, ou sem urgência.',
      icon: '⏳',
      color: 'from-yellow-500 to-yellow-600',
      criteria: [
        'Conta ≥ R$ 300 e imóvel próprio',
        'Quer, mas está "pesquisando"',
        'Não tem decisão clara em 30 dias',
        'Pode demorar para mandar documentos',
      ],
      action: 'Proposta + cadência de follow-up (D0/D1/D2/D4/D6/D8/D15). Visita só quando: ele pediu, ou travou em confiança/técnico e a visita destrava.',
      meta: 'Manter engajado e converter com paciência.',
    },
    {
      id: 'C',
      title: 'Lead C — Sem Fit Agora',
      subtitle: '(Arquivar e nutrir)',
      description: 'Não tem perfil ou não tem condição de avançar agora.',
      icon: '📦',
      color: 'from-gray-500 to-gray-600',
      criteria: [
        'Conta baixa (abaixo de R$ 300)',
        'Imóvel alugado / não pode instalar',
        'Sem telhado viável (ou já dá pra prever inviável)',
        '"Ano que vem", "só curiosidade", "só cotando"',
      ],
      action: 'Arquivar/nutrir e reativar depois (30/60/90 dias). Lead C não consome visita.',
      meta: 'Não desperdiçar tempo agora, reativar quando fizer sentido.',
    },
  ];

  return (
    <section id="qualification" className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Como Qualificar Leads?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium mb-2">
            Classificação de Leads: A, B e C
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Classifique seus leads em três categorias para focar tempo e energia nos que realmente convertem.
          </p>
        </div>

        {/* Lead Cards */}
        <div className="space-y-6 mb-12">
          {leads.map((lead) => (
            <div
              key={lead.id}
              className="border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-alluz transition-all"
            >
              {/* Header */}
              <button
                onClick={() => setExpandedLead(expandedLead === lead.id ? null : lead.id)}
                className={`w-full px-6 py-6 flex items-center justify-between bg-gradient-to-r ${lead.color} text-white`}
              >
                <div className="flex items-center gap-4 text-left flex-1">
                  <span className="text-4xl">{lead.icon}</span>
                  <div>
                    <p className="text-2xl font-bold">{lead.title}</p>
                    <p className="text-sm font-medium text-white/80">{lead.subtitle}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 transition-transform ${expandedLead === lead.id ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Content */}
              {expandedLead === lead.id && (
                <div className="px-6 py-6 bg-gray-50 space-y-6">
                  <div>
                    <p className="text-gray-700 italic font-medium mb-4">{lead.description}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Critérios:</h4>
                    <div className="space-y-2">
                      {lead.criteria.map((criterion, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                          <span className="text-gray-700">{criterion}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white border-l-4 border-blue-600 p-4 rounded">
                    <p className="text-sm font-bold text-gray-900 mb-2">Ação Recomendada:</p>
                    <p className="text-sm text-gray-700">{lead.action}</p>
                  </div>

                  <div className="bg-white border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-sm font-bold text-gray-900 mb-2">Meta:</p>
                    <p className="text-sm text-gray-700">{lead.meta}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Reference Table */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Resumo Rápido</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Lead</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Perfil</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Urgência</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Próximo Passo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="py-3 px-4 font-bold text-red-600">Lead A</td>
                  <td className="py-3 px-4 text-gray-700">Pronto para comprar</td>
                  <td className="py-3 px-4 text-gray-700">Máxima (30 dias)</td>
                  <td className="py-3 px-4 text-gray-700">Visita em 48h</td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="py-3 px-4 font-bold text-yellow-600">Lead B</td>
                  <td className="py-3 px-4 text-gray-700">Comparando/Indeciso</td>
                  <td className="py-3 px-4 text-gray-700">Média (60+ dias)</td>
                  <td className="py-3 px-4 text-gray-700">Follow-up cadenciado</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 font-bold text-gray-600">Lead C</td>
                  <td className="py-3 px-4 text-gray-700">Sem fit ou sem urgência</td>
                  <td className="py-3 px-4 text-gray-700">Nenhuma agora</td>
                  <td className="py-3 px-4 text-gray-700">Arquivar e nutrir</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6">
            <p className="text-sm font-bold text-red-900 uppercase mb-2">💡 Dica 1</p>
            <p className="text-sm text-red-800">
              Lead A é seu ouro. Responda em menos de 2 horas. Cada minuto que passa, ele está falando com concorrentes.
            </p>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
            <p className="text-sm font-bold text-yellow-900 uppercase mb-2">💡 Dica 2</p>
            <p className="text-sm text-yellow-800">
              Lead B precisa de nutrição constante. Use o follow-up cadenciado para manter a Alluz na mente dele.
            </p>
          </div>
          <div className="bg-gray-50 border-l-4 border-gray-400 rounded-lg p-6">
            <p className="text-sm font-bold text-gray-900 uppercase mb-2">💡 Dica 3</p>
            <p className="text-sm text-gray-800">
              Lead C não é perda. Arquive com respeito e reative em 60/90 dias. Situações mudam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
