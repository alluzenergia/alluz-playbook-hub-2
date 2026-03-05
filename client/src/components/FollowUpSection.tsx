import { useState } from 'react';

export default function FollowUpSection() {
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  const followUpDays = [
    {
      day: 'D0',
      title: 'Primeiro Contato',
      script: '"Você quer reduzir a conta ao máximo possível ou prefere menor investimento inicial?"',
      purpose: 'Entender a prioridade do cliente'
    },
    {
      day: 'D1',
      title: 'Verificação de Recebimento',
      script: '"Você conseguiu olhar? Quer que eu compare com o que te mandaram (se tiver concorrente)?"',
      purpose: 'Confirmar recebimento e oferecer comparação'
    },
    {
      day: 'D2',
      title: 'Qualificação de Intenção',
      script: '"Você está mais perto do sim ou do não? Só pra eu organizar aqui."',
      purpose: 'Entender o nível de interesse'
    },
    {
      day: 'D4',
      title: 'Prova Social',
      script: '"Prova social + reforço de resultado: \'Fechamos um caso parecido e o cliente já está monitorando a geração.\'"',
      purpose: 'Aumentar confiança com casos similares'
    },
    {
      day: 'D6',
      title: 'Requalificação',
      script: '"Você está mais perto do sim ou do não? Só pra eu organizar aqui."',
      purpose: 'Reafirmar intenção de compra'
    },
    {
      day: 'D8',
      title: 'Oferta de Arquivamento',
      script: '"Vamos arquivar por enquanto? Quando sua situação mudar, você me liga."',
      purpose: 'Preparar para arquivamento respeitoso'
    },
    {
      day: 'D15',
      title: 'Reativação',
      script: '"Oi! Mudou algo aí? Vamos conversar?"',
      purpose: 'Reativar o lead após 15 dias'
    }
  ];

  return (
    <section id="follow-up" className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Como fazer o Follow-up do cliente?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            O follow-up é a arte de manter o cliente engajado. Realize 7 toques estratégicos antes de considerar uma proposta como perdida.
          </p>
        </div>

        {/* Follow-up Timeline */}
        <div className="space-y-4 mb-12">
          {followUpDays.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-yellow-300 rounded-lg overflow-hidden hover:shadow-lg transition-all"
            >
              <button
                onClick={() => setExpandedDay(expandedDay === item.day ? null : item.day)}
                className="w-full px-6 py-4 flex items-center justify-between bg-yellow-50 hover:bg-yellow-100 transition-colors"
              >
                <div className="flex items-center gap-4 text-left flex-1">
                  <span className="text-2xl font-bold text-yellow-600 bg-yellow-200 px-3 py-1 rounded">
                    {item.day}
                  </span>
                  <div>
                    <p className="font-bold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.purpose}</p>
                  </div>
                </div>
              </button>

              {expandedDay === item.day && (
                <div className="px-6 py-4 bg-gray-50 border-t border-yellow-200">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-2">Script:</p>
                      <p className="text-sm text-gray-700 italic">{item.script}</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-2">Objetivo:</p>
                      <p className="text-sm text-gray-700">{item.purpose}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pro Tips */}
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-6 mb-12">
          <p className="text-sm font-bold text-blue-900 uppercase mb-2">💡 Regra de Ouro</p>
          <p className="text-sm text-blue-800">
            Nunca deixe mais de 2 dias sem contato com um Lead A. Para Lead B, respeite o ritmo mas mantenha a cadência. Lead C pode esperar 30+ dias.
          </p>
        </div>

        {/* Follow-up Strategy */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg p-6 border border-yellow-200">
            <p className="text-lg font-bold text-yellow-900 mb-3">Lead A</p>
            <p className="text-sm text-yellow-800 mb-3">Responda em menos de 2 horas. Máximo 1 dia entre toques.</p>
            <p className="text-xs text-yellow-700 font-medium">Cadência: D0 → D1 (24h) → Visita</p>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg p-6 border border-orange-200">
            <p className="text-lg font-bold text-orange-900 mb-3">Lead B</p>
            <p className="text-sm text-orange-800 mb-3">Use a cadência completa: D0/D1/D2/D4/D6/D8/D15.</p>
            <p className="text-xs text-orange-700 font-medium">Cadência: 7 toques estratégicos</p>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg p-6 border border-gray-200">
            <p className="text-lg font-bold text-gray-900 mb-3">Lead C</p>
            <p className="text-sm text-gray-800 mb-3">Arquive com respeito. Reative em 30/60/90 dias.</p>
            <p className="text-xs text-gray-700 font-medium">Cadência: Arquivar → Nutrir → Reativar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
