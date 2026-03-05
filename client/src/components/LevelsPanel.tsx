import { Award, Zap, Target } from 'lucide-react';

export default function LevelsPanel() {
  const levels = [
    {
      name: 'Bronze',
      color: 'from-amber-700 to-amber-600',
      borderColor: 'border-amber-600',
      bgColor: 'bg-amber-50',
      sales: '1 venda',
      proposals: '5 propostas/mês',
      commission: '6%',
      benefits: 'Acesso ao Sistema Alluz',
      icon: 'bronze',
    },
    {
      name: 'Prata',
      color: 'from-slate-400 to-slate-500',
      borderColor: 'border-slate-400',
      bgColor: 'bg-slate-50',
      sales: '2 vendas',
      proposals: '10 propostas/mês',
      commission: '8%',
      benefits: 'Treinamento Individual',
      icon: 'silver',
    },
    {
      name: 'Ouro',
      color: 'from-yellow-500 to-yellow-600',
      borderColor: 'border-yellow-500',
      bgColor: 'bg-yellow-50',
      sales: 'R$ 200.000',
      proposals: 'Sem limite',
      commission: '10%',
      benefits: 'Drone + R$ 1.500 Mkt/mês',
      icon: 'gold',
    },
  ];

  return (
    <section id="levels" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Sistema de Níveis e Metas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Gamificação clara: cada nível traz benefícios exclusivos e reconhecimento. Sua jornada começa no Bronze e pode chegar ao Ouro.
          </p>
        </div>

        {/* Levels Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {levels.map((level, index) => (
            <div
              key={level.name}
              className={`relative group animate-fadeInUp`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className={`${level.bgColor} border-2 ${level.borderColor} rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-alluz-lg hover:scale-105 transform`}>
                {/* Badge */}
                <div className={`inline-block bg-gradient-to-r ${level.color} text-white px-4 py-2 rounded-full font-bold mb-6 text-sm`}>
                  {level.name}
                </div>
                {/* Medal Image */}
                <div className="mb-6 h-32 flex items-center justify-center">
                  <div className={`w-24 h-24 bg-gradient-to-br ${level.color} rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg`}>
                    {index === 0 && '1'}
                    {index === 1 && '2'}
                    {index === 2 && '3'}
                  </div>
                </div>
                {/* Content */}
                <div className="space-y-4">
                  {/* Sales Target */}
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Meta de Vendas</p>
                      <p className="text-lg font-bold text-gray-900">{level.sales}</p>
                    </div>
                  </div>
                  {/* Proposals */}
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Propostas</p>
                      <p className="text-lg font-bold text-gray-900">{level.proposals}</p>
                    </div>
                  </div>
                  {/* Commission */}
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Comissao</p>
                      <p className="text-lg font-bold text-gray-900">{level.commission}</p>
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="border-t-2 border-gray-200 my-4" />
                  {/* Elite Benefit */}
                  <div className="bg-white/60 rounded-lg p-4 border-l-4 border-blue-600">
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Beneficio de Elite</p>
                    <p className="text-base font-bold text-blue-600 mt-1">{level.benefits}</p>
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-600 mb-2">Progresso</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${level.color}`}
                      style={{ width: `${(index + 1) * 33}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Diamond Level Teaser */}
        <div className="bg-white border-2 border-yellow-400 rounded-2xl p-8 md:p-12 text-center mt-8">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Nível Diamante</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Requisitos e benefícios revelados exclusivamente para vendedores que atingem o nível Ouro. Você tem o que é preciso?
            </p>
            <div className="pt-4">
              <span className="inline-block bg-yellow-100 text-yellow-700 px-6 py-2 rounded-full font-semibold">
                🔒 Desbloqueado em Ouro
              </span>
            </div>
          </div>
        </div>

        {/* Alert Box */}
        <div className="mt-12 bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
          <div className="flex gap-4">
            <div className="text-2xl">⚠️</div>
            <div>
              <h4 className="font-bold text-red-900 mb-2">Alerta de Performance</h4>
              <p className="text-red-800">
                Abaixo de 5 propostas e 0 vendas, o consultor torna-se Inativo. O foco aqui é manter a máquina girando. Mantenha o ritmo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
