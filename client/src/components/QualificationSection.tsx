export default function QualificationSection() {
  const bant = [
    {
      letter: 'B',
      title: 'Budget (Orcamento)',
      question: 'O cliente gasta mais de R$ 400? Tem score de crédito ou capital?',
      color: 'from-blue-500 to-blue-600',
      icon: '💰',
      details: [
        'Verifique a fatura de energia do cliente',
        'Calcule o investimento necessário',
        'Avalie capacidade de pagamento',
        'Considere financiamento se necessário',
      ],
    },
    {
      letter: 'A',
      title: 'Authority (Autoridade)',
      question: 'Estou falando com o dono do imóvel ou quem paga a conta?',
      color: 'from-green-500 to-green-600',
      icon: '👤',
      details: [
        'Confirme quem é o tomador de decisão',
        'Identifique outros stakeholders',
        'Entenda a hierarquia de aprovação',
        'Agende com a pessoa certa',
      ],
    },
    {
      letter: 'N',
      title: 'Need (Necessidade)',
      question: 'Ele quer investir ou só saber "quanto custa"?',
      color: 'from-orange-500 to-orange-600',
      icon: '🎯',
      details: [
        'Diferencie curiosos de compradores',
        'Qualifique a urgência da necessidade',
        'Identifique dores e motivações',
        'Foque em benefícios reais',
      ],
    },
    {
      letter: 'T',
      title: 'Timeline (Tempo)',
      question: 'Ele quer resolver isso este mês?',
      color: 'from-red-500 to-red-600',
      icon: '⏰',
      details: [
        'Estabeleça prazos realistas',
        'Identifique urgências sazonais',
        'Crie senso de urgência apropriado',
        'Agende follow-ups estratégicos',
      ],
    },
  ];

  return (
    <section id="qualification" className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Como Qualificar o Cliente?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium mb-2">
            Qualificacao e Diagnostico
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Use o método BANT para filtrar leads de qualidade e focar seu tempo nos verdadeiros compradores.
          </p>
        </div>

        {/* BANT Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {bant.map((item, index) => (
            <div
              key={item.letter}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-alluz transition-all duration-300 transform hover:scale-105"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`,
              }}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${item.color} text-white p-6 text-center`}>
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="text-3xl font-bold">{item.letter}</p>
                <p className="text-sm font-semibold mt-2">{item.title}</p>
              </div>
              {/* Content */}
              <div className="p-6">
                <p className="font-bold text-gray-900 mb-4 text-sm leading-snug">
                  {item.question}
                </p>
                <div className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                      <span className="text-sm text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Qualification Checklist */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold text-blue-600 mb-8">Checklist de Qualificacao</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 mb-4">Lead Qualificado ✅</h4>
              <div className="space-y-3">
                {[
                  'Gasta mais de R$ 400/mês em energia',
                  'Falei com o tomador de decisão',
                  'Tem urgência real (próximos 30 dias)',
                  'Tem capacidade de investimento',
                  'Entende o valor da economia',
                  'Quer agendar visita técnica',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 mb-4">Lead Desqualificado ❌</h4>
              <div className="space-y-3">
                {[
                  'Gasta menos de R$ 400/mês',
                  'Falei com intermediário (não decisor)',
                  'Apenas "quer saber quanto custa"',
                  'Sem capacidade de investimento',
                  'Quer pensar indefinidamente',
                  'Não quer agendar próxima ação',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">
                      ✕
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
            <p className="text-sm font-bold text-yellow-900 uppercase mb-2">💡 Dica 1</p>
            <p className="text-sm text-yellow-800">
              Se o lead não passa em 3 dos 4 critérios BANT, reclassifique como "futuro" e dê follow-up em 90 dias.
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-6">
            <p className="text-sm font-bold text-blue-900 uppercase mb-2">💡 Dica 2</p>
            <p className="text-sm text-blue-800">
              Pergunte BANT em ordem: Budget → Authority → Need → Timeline. Isso cria fluxo natural na conversa.
            </p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-6">
            <p className="text-sm font-bold text-green-900 uppercase mb-2">💡 Dica 3</p>
            <p className="text-sm text-green-800">
              Leads com Timeline curto (próximos 30 dias) têm 3x mais chance de conversão. Priorize-os.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
