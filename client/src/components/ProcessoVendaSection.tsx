import { CheckCircle, Camera, FileText, Handshake, Send } from 'lucide-react';

export default function ProcessoVendaSection() {
  const steps = [
    {
      number: 1,
      title: 'Qualificação Mínima',
      objective: 'Validar se o cliente é um bom fit',
      requirements: [
        'Conta > R$ 300',
        'Imóvel próprio',
        'Foto da conta',
        'Foto do telhado e padrão'
      ],
      icon: CheckCircle,
      color: 'bg-yellow-100 text-yellow-700'
    },
    {
      number: 2,
      title: 'Emissão da Proposta',
      objective: 'Enviar proposta até 48h',
      requirements: [
        'Usar o Sistema Gerador de Propostas Alluz',
        'Meta: apresentar presencialmente'
      ],
      icon: FileText,
      color: 'bg-blue-100 text-blue-700'
    },
    {
      number: 3,
      title: 'Pré-Vistoria',
      objective: 'Validar viabilidade técnica',
      requirements: [
        'Preencher abá de vistoria',
        'Anexar todas as fotos obrigatórias da cartilha'
      ],
      icon: Camera,
      color: 'bg-green-100 text-green-700'
    },
    {
      number: 4,
      title: 'Fechamento',
      objective: 'Coletar documentação para contrato',
      requirements: [
        'Conta de luz',
        'Fotos da pré-vistoria',
        'Documento do titular'
      ],
      icon: Handshake,
      color: 'bg-purple-100 text-purple-700'
    },
    {
      number: 5,
      title: 'Handoff para Alluz',
      objective: 'Transferir projeto para execução',
      requirements: [
        'Confirmar endereço',
        'Confirmar titular',
        'Forma de pagamento',
        'Restrições técnicas'
      ],
      icon: Send,
      color: 'bg-orange-100 text-orange-700'
    }
  ];

  return (
    <section id="processo-venda" className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Como funciona o Processo de vendas na Alluz?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Siga o passo a passo estruturado para vender com confiança. Cada etapa é crucial para o sucesso.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-yellow-400 transition-all">
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-lg ${step.color} flex items-center justify-center`}>
                    <div className="text-center">
                      <p className="text-2xl font-bold">{step.number}</p>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 font-medium mb-4">
                      <span className="font-bold">OBJETIVO:</span> {step.objective}
                    </p>
                    <div>
                      <p className="text-sm font-bold text-gray-700 mb-2">REQUISITOS:</p>
                      <ul className="space-y-1">
                        {step.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-yellow-400 font-bold mt-1">✓</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <p className="text-blue-900 text-sm leading-relaxed">
            <span className="font-bold">💡 Dica Importante:</span> Cada etapa deve ser completada com rigor. Pular etapas ou fazer de forma incompleta compromete o fechamento e a qualidade do projeto.
          </p>
        </div>
      </div>
    </section>
  );
}
