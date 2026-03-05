import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProspectionSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const strategies = [
    {
      id: 1,
      title: 'Loop de Indicacao (Psicologica)',
      description: 'Nunca peça indicação no fim da venda. Peça no momento do êxtase da proposta.',
      steps: [
        'Após mostrar que o cliente vai economizar R$ 100 mil em 10 anos, diga: "Sr. [Nome], estou feliz em te entregar essa liberdade. Meu compromisso é livrar mais 3 empresários desse custo. Quem são os 2 amigos que o senhor mais respeita e que odiariam saber que você está economizando e eles não?"',
        'Pegue o WhatsApp e peça para o cliente enviar um áudio apresentando você.',
      ],
      icon: '🎯',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      id: 2,
      title: 'Google Maps (O Sniper B2B)',
      description: 'Foco em telhados industriais, mercados e academias.',
      steps: [
        'Abra o Google Maps no modo Satélite.',
        'Procure por galpões com telhado de fibrocimento ou metálico (excelentes para instalação).',
        'Verifique se há aparelhos de ar-condicionado ou câmaras frias (alto consumo).',
        'Abordagem: Vá ao local. Peça para falar com o gerente. Diga: "Vi que sua estrutura tem um potencial de geração solar de alto impacto. Já calculamos que empresas do seu porte estão jogando fora X% do lucro por mês na conta de luz."',
      ],
      icon: '🗺️',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 3,
      title: 'Influenciadores de Bolso',
      description: 'Faça parcerias com Contadores e Administradores de Condomínio.',
      steps: [
        'Identifique contadores e administradores de condomínio em sua região.',
        'Pitch: "Você cuida dos impostos do seu cliente, eu cuido do maior custo fixo dele: a energia. Se eu reduzir a conta dele em 95%, sua gestão fica ainda melhor. Vamos fazer um diagnóstico gratuito para seus 5 maiores clientes?"',
        'Estabeleça parcerias de longo prazo com comissões compartilhadas.',
      ],
      icon: '🤝',
      color: 'from-green-400 to-green-600',
    },
    {
      id: 4,
      title: 'LinkedIn (Alto Ticket - R$ 200k+)',
      description: 'Foco em diretores de indústrias e agronegócio.',
      steps: [
        'Identifique diretores e gestores em indústrias e agronegócio.',
        'Script: "Olá [Nome], sou consultor na Alluz. Vi o crescimento da sua empresa. Trabalhamos com engenharia financeira para transformar o passivo de energia em lucro líquido. Gostaria de te enviar um estudo de viabilidade baseado no seu setor."',
        'Envie estudos personalizados e agende chamadas de qualificação.',
      ],
      icon: '💼',
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      id: 5,
      title: 'Raio X de Vizinhanca',
      description: 'Sempre que fechar uma venda, visite os 10 vizinhos mais próximos.',
      steps: [
        'Após cada venda, identifique os 10 vizinhos mais próximos do cliente.',
        'Gatilho: "Olá, sou da Alluz. Estamos instalando um sistema de redução de conta no seu vizinho da frente. Como a incidência solar aqui é idêntica, sua casa também se qualifica para o desconto máximo. Posso analisar sua fatura?"',
        'Converta vizinhos em clientes aproveitando a prova social.',
      ],
      icon: '🏘️',
      color: 'from-pink-400 to-red-500',
    },
  ];

  return (
    <section id="prospection" className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Como Prospectar?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium mb-2">
            Prospeccao: O Mapa da Mina
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Seu objetivo é gerar leads qualificados. Aqui estão as 5 formas de fazer isso com precisão.
          </p>
        </div>

        {/* Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-alluz">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663407321325/FD8oJ6AEJjSx2iucGRgoCW/cartilha-2_3a126b23.png"
            alt="5 Estratégias de Prospecção - Exemplos"
            className="w-full h-auto"
          />
        </div>

        {/* Accordions */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {strategies.map((strategy, index) => (
            <div
              key={strategy.id}
              className="border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-400 hover:shadow-alluz"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 50}ms both`,
              }}
            >
              {/* Accordion Header */}
              <button
                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                className={`w-full px-6 py-5 flex items-center justify-between bg-gradient-to-r ${strategy.color} text-white font-bold text-lg transition-all hover:shadow-lg`}
              >
                <div className="flex items-center gap-4 text-left">
                  <span className="text-3xl">{strategy.icon}</span>
                  <div>
                    <p className="font-bold">{strategy.title}</p>
                    <p className="text-sm font-normal text-white/80">{strategy.description}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openAccordion === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Accordion Content */}
              {openAccordion === index && (
                <div className="px-6 py-6 bg-gray-50 border-t-2 border-gray-200 animate-fadeInUp">
                  <div className="space-y-4">
                    {strategy.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                            {stepIndex + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 leading-relaxed">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Pro Tip */}
                  <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                    <p className="text-sm font-semibold text-yellow-900">💡 Pulo do Gato:</p>
                    <p className="text-sm text-yellow-800 mt-1">
                      {strategy.id === 1 && 'O momento do êxtase é quando o cliente vê a economia. Nesse pico emocional, ele está mais disposto a indicar.'}
                      {strategy.id === 2 && 'Use o modo satélite do Google Maps para identificar padrões de consumo energético. Telhados maiores = maior potencial.'}
                      {strategy.id === 3 && 'Contadores e administradores já têm relacionamento de confiança. Use isso a seu favor para abrir portas.'}
                      {strategy.id === 4 && 'Personalize o estudo de viabilidade para o setor específico. Dados do agronegócio são diferentes da indústria.'}
                      {strategy.id === 5 && 'A prova social é poderosa. "Seu vizinho já está economizando" é mais convincente que qualquer argumento.'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Qualquer uma dessas estratégias pode gerar 5+ propostas por mês. Escolha a que mais faz sentido para você e domine-a.
          </p>
          <div className="inline-block bg-blue-50 border-2 border-blue-600 rounded-lg p-4">
            <p className="text-blue-900 font-bold">Meta Bronze: 5 propostas/mês</p>
            <p className="text-sm text-blue-700">Combine 2-3 estratégias para atingir consistentemente</p>
          </div>
        </div>
      </div>
    </section>
  );
}
