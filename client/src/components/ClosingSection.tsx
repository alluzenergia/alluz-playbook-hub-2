import { useState } from 'react';

interface Step {
  title: string;
  description: string;
  example: string;
  color: string;
}

interface Objection {
  objection: string;
  response: string;
  psychology: string;
  color: string;
}

interface ScheduleSlot {
  time: string;
  activity: string;
  description: string;
  focus: string;
  color: string;
}

interface SectionContent {
  intro: string;
  steps?: Step[];
  objections?: Objection[];
  schedule?: ScheduleSlot[];
}

interface Section {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  content: SectionContent;
}

export default function ClosingSection() {
  const [openTab, setOpenTab] = useState<string | null>('presentation');

  const sections: Section[] = [
    {
      id: 'presentation',
      title: 'Apresentacao e Ancoragem',
      subtitle: 'Vendendo Dinheiro',
      icon: '📊',
      content: {
        intro: 'O consultor Alluz não mostra "placas", mostra lucro.',
        steps: [
          {
            title: 'Custo da Inacao',
            description: 'Mostre quanto ele vai pagar para a concessionária em 25 anos.',
            example: 'Ex: R$ 300.000',
            color: 'from-red-500 to-red-600',
          },
          {
            title: 'O Valor do Sistema',
            description: 'Apresente o sistema e seu investimento.',
            example: 'Ex: R$ 40.000',
            color: 'from-blue-500 to-blue-600',
          },
          {
            title: 'A Troca de Boleto',
            description: 'Sr. Cliente, o senhor não vai gastar R$ 40 mil. O senhor vai apenas parar de dar R$ 1.000 por mês para a concessionária e passar a investir R$ 800 na sua própria usina. É dinheiro que já sai do seu bolso hoje, só vamos mudar o endereço.',
            example: 'Reframing psicológico poderoso',
            color: 'from-green-500 to-green-600',
          },
        ],
      },
    },
    {
      id: 'objections',
      title: 'Tecnicas de Fechamento',
      subtitle: 'Respondendo Objecoes',
      icon: '🛡️',
      content: {
        intro: 'Prepare-se para as objeções mais comuns com respostas comprovadas.',
        objections: [
          {
            objection: 'Vou pensar.',
            response: 'Claro, é um passo importante. Mas me diga, o senhor quer pensar se economizar R$ 1.500 por mês é bom, ou se a Alluz é a empresa certa? Se for a economia, cada mês que o senhor "pensa", o senhor perde R$ 1.500 que não voltam mais.',
            psychology: 'Reframing: transforma pensamento indefinido em urgência',
            color: 'from-orange-500 to-orange-600',
          },
          {
            objection: 'O concorrente é mais barato.',
            response: 'Entendo. Mas na energia solar, o barato sai caro se a engenharia for ruim. Se o sistema do concorrente gerar 10% a menos por causa de uma instalação mal feita, em 10 anos você perdeu o triplo da diferença de preço de hoje. A Alluz garante a geração real.',
            psychology: 'Foco em ROI de longo prazo, não preço inicial',
            color: 'from-yellow-500 to-yellow-600',
          },
        ],
      },
    },
    {
      id: 'routine',
      title: 'Rotina de Alta Performance',
      subtitle: 'A Agenda do Ouro',
      icon: '⏰',
      content: {
        intro: 'Estruture seu dia para máxima produtividade e conversão.',
        schedule: [
          {
            time: '08:00 - 09:00',
            activity: 'Organizacao',
            description: 'Listar leads e revisar propostas pendentes',
            focus: 'Planejamento estratégico',
            color: 'from-blue-400 to-blue-500',
          },
          {
            time: '09:00 - 11:30',
            activity: 'Foco Total em Prospeccao',
            description: 'Mínimo 30 contatos ativos',
            focus: 'Geração de leads',
            color: 'from-yellow-400 to-yellow-500',
          },
          {
            time: '11:30 - 12:30',
            activity: 'Follow-up',
            description: 'Cobrar respostas de propostas enviadas',
            focus: 'Conversão de pendentes',
            color: 'from-green-400 to-green-500',
          },
          {
            time: '14:00 - 17:00',
            activity: 'Visitas Externas e Apresentacoes',
            description: 'Mínimo 2 por dia',
            focus: 'Qualificação e fechamento',
            color: 'from-purple-400 to-purple-500',
          },
          {
            time: '17:00 - 18:30',
            activity: 'Lancamento no Sistema e Estudo',
            description: 'Documentar e analisar novas contas',
            focus: 'Organização e análise',
            color: 'from-red-400 to-red-500',
          },
        ],
      },
    },
  ];

  return (
    <section id="closing" className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Fechamento e Performance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Domine a apresentação, responda objeções com confiança e estruture sua rotina para máxima produtividade.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 overflow-x-auto pb-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setOpenTab(section.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold whitespace-nowrap transition-all ${
                openTab === section.id
                  ? 'bg-blue-600 text-white shadow-alluz'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-xl">{section.icon}</span>
              <span>{section.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {sections.map((section) => (
          openTab === section.id && (
            <div key={section.id} className="animate-fadeInUp">
              {section.id === 'presentation' && (
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
                    <p className="text-lg text-blue-900 font-semibold">{section.content.intro}</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {section.content.steps && section.content.steps.map((step, idx) => (
                      <div
                        key={idx}
                        className={`bg-gradient-to-br ${step.color} text-white rounded-xl p-8 shadow-lg hover:shadow-alluz-lg transition-all transform hover:scale-105`}
                      >
                        <div className="text-4xl font-bold mb-2">{idx + 1}</div>
                        <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                        <p className="mb-4 text-white/90">{step.description}</p>
                        <div className="bg-white/20 rounded-lg p-3 border border-white/30">
                          <p className="text-sm font-semibold">{step.example}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Key Insight */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
                    <p className="font-bold text-yellow-900 mb-2">💡 Insight Chave</p>
                    <p className="text-yellow-800">
                      A "Troca de Boleto" é o reframing psicológico mais poderoso. Não é um gasto, é uma realocação de dinheiro que já sai do bolso. Isso reduz a resistência psicológica ao investimento.
                    </p>
                  </div>
                </div>
              )}

              {section.id === 'objections' && (
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-red-50 to-orange-100 rounded-xl p-8">
                    <p className="text-lg text-red-900 font-semibold">{section.content.intro}</p>
                  </div>
                  <div className="space-y-6">
                    {section.content.objections && section.content.objections.map((obj, idx) => (
                      <div
                        key={idx}
                        className={`bg-gradient-to-br ${obj.color} text-white rounded-xl p-8 shadow-lg`}
                      >
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-white/80 uppercase">Objecao #{idx + 1}</p>
                          <p className="text-2xl font-bold mt-2">"{obj.objection}"</p>
                        </div>
                        <div className="bg-white/20 rounded-lg p-6 mb-4 border border-white/30">
                          <p className="font-semibold mb-2">Resposta Recomendada:</p>
                          <p className="text-white/95">{obj.response}</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <p className="text-sm font-semibold text-white/90">🧠 Psicologia:</p>
                          <p className="text-sm text-white/80 mt-1">{obj.psychology}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Pro Tip */}
                  <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-6">
                    <p className="font-bold text-blue-900 mb-2">💡 Pulo do Gato</p>
                    <p className="text-blue-800">
                      Nunca discorde da objeção. Sempre valide primeiro ("Entendo", "Faz sentido") e depois reframe. Isso mantém o cliente aberto ao seu argumento.
                    </p>
                  </div>
                </div>
              )}

              {section.id === 'routine' && (
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-100 rounded-xl p-8">
                    <p className="text-lg text-purple-900 font-semibold">{section.content.intro}</p>
                  </div>
                  <div className="space-y-4">
                    {section.content.schedule && section.content.schedule.map((slot, idx) => (
                      <div
                        key={idx}
                        className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-alluz transition-all"
                      >
                        <div className={`bg-gradient-to-r ${slot.color} text-white px-6 py-4`}>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-semibold text-white/80">{slot.time}</p>
                              <p className="text-xl font-bold mt-1">{slot.activity}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs font-semibold text-white/80 uppercase">{slot.focus}</p>
                            </div>
                          </div>
                        </div>
                        <div className="px-6 py-4">
                          <p className="text-gray-700">{slot.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Summary */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200">
                    <h4 className="font-bold text-green-900 mb-4">📈 Resultado Esperado</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-green-700">Contatos/Dia</p>
                        <p className="text-3xl font-bold text-green-900">30+</p>
                      </div>
                      <div>
                        <p className="text-sm text-green-700">Propostas/Mes</p>
                        <p className="text-3xl font-bold text-green-900">10+</p>
                      </div>
                      <div>
                        <p className="text-sm text-green-700">Taxa de Conversao</p>
                        <p className="text-3xl font-bold text-green-900">20%+</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        ))}
      </div>
    </section>
  );
}
