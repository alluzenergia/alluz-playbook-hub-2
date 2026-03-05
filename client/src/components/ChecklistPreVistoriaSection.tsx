import { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

export default function ChecklistPreVistoriaSection() {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const checklistItems = [
    { id: 'croqui', title: 'Croqui', description: 'Desenho da planta do telhado com dimensões' },
    { id: 'telhado', title: 'Foto do Telhado', description: 'Visão geral do telhado do imóvel' },
    { id: 'estrutura', title: 'Foto da Estrutura do Telhado', description: 'Detalhe da estrutura (telhas, vigas, etc)' },
    { id: 'padrao-fechada', title: 'Foto do Padrão (Tampa Fechada)', description: 'Padrão de entrada com tampa fechada' },
    { id: 'padrao-aberta', title: 'Foto do Padrão (Tampa Aberta)', description: 'Interior do padrão com disjuntores visíveis' },
    { id: 'disjuntor', title: 'Foto do Disjuntor do Padrão', description: 'Close do disjuntor principal' },
    { id: 'medidor', title: 'Foto do Medidor', description: 'Medidor de energia elétrica' },
    { id: 'quadro-distribuicao', title: 'Foto do Quadro de Distribuição', description: 'Quadro de distribuição interna' },
    { id: 'local-inversor', title: 'Foto do Local do Inversor', description: 'Área onde o inversor será instalado' },
    { id: 'poste', title: 'Foto do Poste', description: 'Poste de energia frontal do imóvel' },
    { id: 'bussola', title: 'Foto ou Print da Bússola', description: 'Orientação solar (norte/sul/leste/oeste)' },
    { id: 'fachada', title: 'Foto da Fachada do Imóvel', description: 'Visão frontal completa da casa' },
    { id: 'localizacao-inversor', title: 'Localização do Inversor', description: 'O inversor deve ficar em local de fácil acesso, a uma altura aproximada de 1,6m' },
    { id: 'documentacao', title: 'Documentação', description: 'Solicite cópia da conta de energia para validar consumo' }
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
            Todas as fotos e documentos abaixo são obrigatórios. Nenhuma proposta é válida sem eles.
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
            <div
              key={item.id}
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
              </div>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
          <div className="flex gap-4">
            <div className="text-2xl">⚠️</div>
            <div>
              <h4 className="font-bold text-red-900 mb-2">Obrigatório para Proposta Válida</h4>
              <p className="text-red-800 text-sm leading-relaxed">
                Sem fotos do telhado e do quadro elétrico, o projeto não sobe. É sua responsabilidade garantir que todas as fotos obrigatórias sejam coletadas no ato da visita. Propostas incompletas serão rejeitadas e você não receberá comissão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
