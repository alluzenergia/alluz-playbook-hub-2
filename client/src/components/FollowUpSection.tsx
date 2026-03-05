import { AlertCircle } from 'lucide-react';
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
      script: '"Posso arquivar sua proposta para você parar de receber comunicados?"',
      purpose: 'Permitir que cliente se desconecte ou reafirme interesse'
    },
    {
      day: 'D15',
      title: 'Última Tentativa',
      script: '"Se ainda fizer sentido, consigo retomar sem você começar do zero."',
      purpose: 'Deixar porta aberta para futuro'
    }
  ];

  return (
    <section id="follow-up" className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Estratégia de Follow-up
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
                className="w-full p-6 flex items-center justify-between hover:bg-yellow-50 transition-colors"
              >
                <div className="flex items-center gap-4 text-left flex-1">
                  <div className="bg-yellow-400 text-gray-900 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    {item.day}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.purpose}</p>
                  </div>
                </div>
                <span className="text-yellow-400 text-2xl ml-4">
                  {expandedDay === item.day ? '−' : '+'}
                </span>
              </button>
              {expandedDay === item.day && (
                <div className="bg-yellow-50 border-t-2 border-yellow-300 p-6">
                  <p className="text-sm font-bold text-gray-700 mb-2">SCRIPT:</p>
                  <p className="text-base text-gray-800 italic font-medium">
                    {item.script}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Minimum Before Losing */}
        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-8">
          <div className="flex gap-4">
            <div className="text-2xl">✓</div>
            <div>
              <h4 className="font-bold text-green-900 mb-2">Mínimo Antes de Perder</h4>
              <p className="text-green-800 text-sm leading-relaxed">
                Realize pelo menos <span className="font-bold">7 toques</span> (D0, D1, D2, D4, D6, D8, D15) antes de considerar a proposta como perdida. Isso demonstra persistência profissional e aumenta suas chances de fechamento. Cada contato deve ter um propósito claro — não é apenas "cobrar", é agregar valor, responder dúvidas e demonstrar profissionalismo.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Note */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-blue-900 mb-2">Estratégia de Contato</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                Cada contato deve ter um propósito claro. Não é apenas "cobrar", é agregar valor, responder dúvidas e demonstrar persistência. O objetivo é manter o cliente engajado e aumentar a probabilidade de conversão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
