import { useState } from 'react';
import { CheckCircle2, Circle, Image } from 'lucide-react';

export default function ChecklistPreVistoriaSection() {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const [expandedExamples, setExpandedExamples] = useState<string | null>(null);

  const checklistItems = [
    { 
      id: 'croqui', 
      title: 'Croqui', 
      description: 'Desenho da planta do telhado com dimensões',
      example: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407321325/FD8oJ6AEJjSx2iucGRgoCW/cartilha-1_acbf8074.png'
    },
    { 
      id: 'telhado', 
      title: 'Foto do Telhado', 
      description: 'Visão geral do telhado do imóvel',
      example: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407321325/FD8oJ6AEJjSx2iucGRgoCW/cartilha-2_3a126b23.png'
    },
    { 
      id: 'estrutura', 
      title: 'Foto da Estrutura do Telhado', 
      description: 'Detalhe da estrutura (telhas, vigas, etc)',
      example: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407321325/FD8oJ6AEJjSx2iucGRgoCW/cartilha-2_3a126b23.png'
    },
    { 
      id: 'padrao-fechada', 
      title: 'Foto do Padrão (Tampa Fechada)', 
      description: 'Padrão de entrada com tampa fechada',
      example: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407321325/FD8oJ6AEJjSx2iucGRgoCW/cartilha-2_3a126b23.png'
    },
    { 
      id: 'padrao-aberta', 
      title: 'Foto do Padrão (Tampa Aberta)', 
      description: 'Interior do padrão com disjuntores visíveis',
      example: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407321325/FD8oJ6AEJjSx2iucGRgoCW/cartilha-2_3a126b23.png'
    },
    { 
      id: 'disjuntor', 
      title: 'Foto do Disjuntor do Padrão', 
      description: 'Close do disjuntor principal',
      example: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407321325/FD8oJ6AEJjSx2iucGRgoCW/cartilha-2_3a126b23.png'
    },
    { 
      id: 'medidor', 
      title: 'Foto do Medidor', 
      description: 'Medidor de energia elétrica',
      example: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407321325/FD8oJ6AEJjSx2iucGRgoCW/cartilha-2_3a126b23.png'
    },
    { 
      id: 'quadro-distribuicao', 
      title: 'Foto do Quadro de Distribuição', 
      description: 'Quadro de distribuição interna',
      example: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407321325/FD8oJ6AEJjSx2iucGRgoCW/cartilha-2_3a126b23.png'
    },
    { 
      id: 'local-inversor', 
      title: 'Foto do Local do Inversor', 
      description: 'Área onde o inversor será instalado',
      example: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407321325/FD8oJ6AEJjSx2iucGRgoCW/cartilha-3_90beb329.png'
    },
    { 
      id: 'poste', 
      title: 'Foto do Poste', 
      description: 'Poste de energia frontal do imóvel',
      example: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407321325/FD8oJ6AEJjSx2iucGRgoCW/cartilha-3_90beb329.png'
    },
    { 
      id: 'bussola', 
      title: 'Foto ou Print da Bússola', 
      description: 'Orientação solar (norte/sul/leste/oeste)',
      example: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407321325/FD8oJ6AEJjSx2iucGRgoCW/cartilha-3_90beb329.png'
    },
    { 
      id: 'fachada', 
      title: 'Foto da Fachada do Imóvel', 
      description: 'Visão frontal completa da casa',
      example: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663407321325/FD8oJ6AEJjSx2iucGRgoCW/cartilha-3_90beb329.png'
    },
    { 
      id: 'localizacao-inversor', 
      title: 'Localização do Inversor', 
      description: 'O inversor deve ficar em local de fácil acesso, a uma altura aproximada de 1,6m'
    },
    { 
      id: 'documentacao', 
      title: 'Documentação', 
      description: 'Solicite cópia da conta de energia para validar consumo'
    }
  ];

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercentage = (completedCount / checklistItems.length) * 100;

  const markAllComplete = () => {
    const allChecked = checklistItems.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {} as { [key: string]: boolean });
    setCheckedItems(allChecked);
  };

  const clearAll = () => {
    setCheckedItems({});
  };

  return (
    <section id="checklist-previstoria" className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Checklist Pré-Vistoria
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todas as fotos e documentos abaixo são obrigatórios. Nenhuma proposta é válida sem eles. Clique em cada item para ver exemplos.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-bold text-gray-700">Progresso de Conclusão</p>
            <p className="text-sm font-bold text-yellow-600">{completedCount}/{checklistItems.length}</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-yellow-400 h-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={markAllComplete}
            className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-colors"
          >
            Marcar Todos como Concluído
          </button>
          <button
            onClick={clearAll}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold rounded-lg transition-colors"
          >
            Limpar Seleção
          </button>
        </div>

        {/* Checklist Items */}
        <div className="space-y-3 mb-12">
          {checklistItems.map((item) => (
            <div key={item.id} className="space-y-2">
              <div
                onClick={() => toggleItem(item.id)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  checkedItems[item.id]
                    ? 'bg-yellow-50 border-yellow-400'
                    : 'bg-white border-gray-200 hover:border-yellow-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {checkedItems[item.id] ? (
                      <CheckCircle2 className="w-6 h-6 text-yellow-400" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-300" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold ${checkedItems[item.id] ? 'text-yellow-700 line-through' : 'text-gray-900'}`}>
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                  {item.example && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedExamples(expandedExamples === item.id ? null : item.id);
                      }}
                      className="flex-shrink-0 p-2 hover:bg-yellow-100 rounded-lg transition-colors"
                      title="Ver exemplo"
                    >
                      <Image className="w-5 h-5 text-yellow-600" />
                    </button>
                  )}
                </div>
              </div>

              {/* Example Image */}
              {expandedExamples === item.id && item.example && (
                <div className="ml-12 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <img
                    src={item.example}
                    alt={`Exemplo: ${item.title}`}
                    className="w-full rounded-lg max-h-96 object-cover"
                  />
                  <p className="text-xs text-gray-600 mt-2 text-center italic">Exemplo de {item.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
          <div className="flex gap-4">
            <div className="text-2xl flex-shrink-0">⚠️</div>
            <div>
              <h4 className="font-bold text-red-900 mb-2">Obrigatório para Proposta Válida</h4>
              <p className="text-red-800 text-sm leading-relaxed">
                Sem fotos do telhado e do quadro elétrico, o projeto não sobe. É sua responsabilidade garantir que todas as fotos obrigatórias sejam coletadas no ato da visita. Propostas incompletas serão rejeitadas e você não receberá comissão.
              </p>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <div className="flex gap-4">
            <div className="text-2xl flex-shrink-0">💡</div>
            <div>
              <h4 className="font-bold text-blue-900 mb-2">Dicas Importantes</h4>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>• Tire fotos com boa iluminação e enquadramento claro</li>
                <li>• O inversor deve ficar em local de fácil acesso, a uma altura aproximada de 1,6m</li>
                <li>• Evite forros, lugares quentes ou com incidência direta do sol para o inversor</li>
                <li>• Todas as fotos devem estar em português conforme a cartilha de pré-vistoria</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
