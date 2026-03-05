import { AlertTriangle, CheckCircle } from 'lucide-react';

export default function ComplianceSection() {
  const rules = [
    {
      id: 1,
      title: 'Sistema Obrigatorio',
      description: 'Nenhuma proposta vale se não estiver no Sistema Alluz',
      icon: '🖥️',
      severity: 'critical',
      details: [
        'Toda proposta DEVE ser lançada no Sistema Alluz',
        'Propostas offline não são válidas para comissão',
        'O sistema registra data, hora e dados do cliente',
        'Sem registro no sistema = sem pagamento',
      ],
    },
    {
      id: 2,
      title: 'Fotos de Pre-Vistoria',
      description: 'Sem fotos do telhado e do quadro elétrico, o projeto não sobe',
      icon: '📸',
      severity: 'critical',
      details: [
        'Foto clara do telhado (ângulo, dimensões, obstáculos)',
        'Foto do quadro elétrico (padrão de entrada)',
        'Fotos da fatura de energia (últimos 3 meses)',
        'É sua responsabilidade garantir isso no ato da visita',
      ],
    },
    {
      id: 3,
      title: 'Comissao - Pagamento',
      description: 'Pagamento toda sexta-feira após a entrada do valor na conta da empresa',
      icon: '💳',
      severity: 'critical',
      details: [
        'Comissão paga toda sexta-feira',
        'Apenas após entrada de pagamento na conta Alluz',
        'Cálculo automático no Sistema Alluz',
        'Comprovante enviado por email',
      ],
    },
    {
      id: 4,
      title: 'Dados do Cliente',
      description: 'Proteja informações pessoais e financeiras do cliente',
      icon: '🔒',
      severity: 'high',
      details: [
        'Nunca compartilhe dados com terceiros',
        'Armazene documentos com segurança',
        'Respeite LGPD e privacidade',
        'Confidencialidade é obrigação contratual',
      ],
    },
    {
      id: 5,
      title: 'Promessas Realistas',
      description: 'Não prometa economia além do que o sistema pode gerar',
      icon: '⚡',
      severity: 'high',
      details: [
        'Use simulador oficial da Alluz',
        'Não exagere em projeções',
        'Documente todas as premissas',
        'Deixe margem para variações climáticas',
      ],
    },
    {
      id: 6,
      title: 'Representacao da Marca',
      description: 'Você é embaixador da Alluz. Aja com profissionalismo',
      icon: '🎖️',
      severity: 'high',
      details: [
        'Use uniforme/identificação Alluz',
        'Comunique-se profissionalmente',
        'Respeite horários e compromissos',
        'Feedback negativo afeta toda a empresa',
      ],
    },
  ];

  return (
    <section id="compliance" className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            6 Regras Inegociaveis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compliance é não-negociável. Essas 6 regras protegem você, o cliente e a Alluz. Viole-as e sua carreira aqui termina.
          </p>
        </div>

        {/* Alert Banner */}
        <div className="mb-12 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-8 shadow-alluz-lg">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Aviso Importante</h3>
              <p className="text-red-100 leading-relaxed">
                O descumprimento de qualquer uma dessas regras pode resultar em suspensão imediata, perda de comissões e rescisão de contrato. Compliance não é opcional — é a base da nossa operação.
              </p>
            </div>
          </div>
        </div>

        {/* Rules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rules.map((rule) => (
            <div key={rule.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-alluz transition-all">
              {/* Header */}
              <div className={`px-6 py-4 ${
                rule.severity === 'critical'
                  ? 'bg-red-600 text-white'
                  : 'bg-orange-500 text-white'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold opacity-90">Regra #{rule.id}</p>
                    <p className="text-lg font-bold mt-1">{rule.title}</p>
                  </div>
                  <span className="text-3xl">{rule.icon}</span>
                </div>
              </div>
              {/* Content */}
              <div className="px-6 py-6">
                <p className="font-semibold text-gray-900 mb-4">{rule.description}</p>
                <div className="space-y-2">
                  {rule.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Checklist */}
        <div className="bg-white rounded-xl shadow-alluz p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold text-blue-600 mb-8">Checklist Pre-Proposta</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📋</span> Documentacao
              </h4>
              <div className="space-y-3">
                {[
                  'Fotos do telhado (mínimo 3 ângulos)',
                  'Foto do quadro elétrico',
                  'Cópias das últimas 3 faturas',
                  'Dados completos do cliente',
                  'Comprovante de endereço',
                  'Documento de identidade',
                ].map((item, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">✅</span> Validacao
              </h4>
              <div className="space-y-3">
                {[
                  'Proposta lançada no Sistema Alluz',
                  'Dados do cliente verificados',
                  'Cálculos de economia revisados',
                  'Autorização do cliente obtida',
                  'Próxima ação agendada',
                  'Cliente recebeu cópia da proposta',
                ].map((item, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 text-green-600 rounded" />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-8 text-center">
            <p className="text-4xl font-bold mb-2">100%</p>
            <p className="text-sm font-semibold text-blue-100">Propostas no Sistema</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-8 text-center">
            <p className="text-4xl font-bold mb-2">100%</p>
            <p className="text-sm font-semibold text-green-100">Fotos Obrigatorias</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-8 text-center">
            <p className="text-4xl font-bold mb-2">100%</p>
            <p className="text-sm font-semibold text-purple-100">Confidencialidade</p>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Sua Reputacao é Seu Ativo</h3>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-6">
            Cada cliente que você atende bem se torna um embaixador da Alluz. Cada cliente mal atendido se torna um crítico. Compliance não é burocracia, é profissionalismo.
          </p>
          <p className="text-sm text-blue-200">
            Dúvidas? Consulte o gestor da sua região. Não arrisque sua carreira por falta de clareza.
          </p>
        </div>
      </div>
    </section>
  );
}
