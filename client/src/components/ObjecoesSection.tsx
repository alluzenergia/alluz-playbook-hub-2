import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ObjecoesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const objections = [
    {
      id: 'preco-caro',
      category: '💰 Objeções Financeiras',
      question: '"Está muito caro, o concorrente é mais barato."',
      strategy: 'Foque na Engenharia',
      response: '"Preço é o que você paga, valor é o que você recebe. Um sistema 10% mais barato que gera 20% menos energia custa o triplo no longo prazo. Você quer o menor preço ou o maior lucro?"'
    },
    {
      id: 'payback-longo',
      category: '💰 Objeções Financeiras',
      question: '"O Payback (tempo de retorno) é muito longo."',
      strategy: 'Compare com o mercado financeiro',
      response: '"Seu sistema rende 2,5% ao mês sobre o capital investido. Onde mais você consegue esse rendimento com risco zero e isento de imposto?"'
    },
    {
      id: 'juros-caros',
      category: '💰 Objeções Financeiras',
      question: '"Vou esperar os juros do financiamento baixarem."',
      strategy: 'O custo da espera',
      response: '"Enquanto você espera o juro cair 0,2%, você joga 100% do valor da sua conta no lixo todo mês. A economia imediata paga o juro e ainda sobra."'
    },
    {
      id: 'nao-quer-divida',
      category: '💰 Objeções Financeiras',
      question: '"Não quero contrair uma dívida agora."',
      strategy: 'Substituição de passivo',
      response: '"Você já tem uma dívida vitalícia e com juros abusivos: sua conta de luz. Só estamos trocando um boleto que não acaba nunca por um que tem data para acabar."'
    },
    {
      id: 'dinheiro-banco',
      category: '💰 Objeções Financeiras',
      question: '"Prefiro deixar meu dinheiro aplicado no banco."',
      strategy: 'Inflação energética',
      response: '"Nenhum CDB ganha da inflação da conta de luz somada ao rendimento do sistema. O banco te dá 10% ao ano; o sol te dá 25% ou mais."'
    },
    {
      id: 'placas-quebram',
      category: '🛠️ Objeções Técnicas',
      question: '"E se as placas quebrarem ou derem defeito?"',
      strategy: 'Garantia de performance',
      response: '"Trabalhamos com equipamentos de Tier 1 com 25 anos de garantia de geração. É um bem de capital feito para durar décadas."'
    },
    {
      id: 'estraga-telhado',
      category: '🛠️ Objeções Técnicas',
      question: '"Isso vai estragar meu telhado ou causar infiltração?"',
      strategy: 'Profissionalismo Alluz',
      response: '"Nossa instalação segue normas rígidas de vedação. Inclusive, os painéis protegem as telhas contra o ressecamento do sol e granizo leve."'
    },
    {
      id: 'placas-feias',
      category: '🛠️ Objeções Técnicas',
      question: '"As placas são feias e vão estragar a estética da casa."',
      strategy: 'Status e Sustentabilidade',
      response: '"Hoje, o painel solar é o novo símbolo de status e modernidade. Ele valoriza o imóvel em média 10% a 15% na hora da venda."'
    },
    {
      id: 'muita-chuva',
      category: '🛠️ Objeções Técnicas',
      question: '"Moro em uma região com muita chuva/nuvens, não vai funcionar."',
      strategy: 'Física básica',
      response: '"O sistema precisa de luz, não de calor. Países como a Alemanha, com muito menos sol que o Brasil, são líderes mundiais. O estudo que fiz já considera o clima da sua região."'
    },
    {
      id: 'tecnologia-obsoleta',
      category: '🛠️ Objeções Técnicas',
      question: '"A tecnologia vai evoluir e as placas vão ficar obsoletas logo."',
      strategy: 'Custo da inação',
      response: '"A tecnologia fotovoltaica é madura. Esperar 2 anos por uma placa 2% melhor fará você perder 24 meses de economia total. A conta não fecha."'
    },
    {
      id: 'taxa-do-sol',
      category: '⚖️ Legislação',
      question: '"Agora tem a \'Taxa do Sol\' (Lei 14.300), não vale mais a pena."',
      strategy: 'Realidade matemática',
      response: '"A lei apenas regulamentou o setor. Mesmo com a taxação gradativa do fio, o sistema continua sendo o melhor investimento do Brasil, com ROI imbatível."'
    },
    {
      id: 'concessionaria-muda',
      category: '⚖️ Legislação',
      question: '"E se a concessionária mudar as regras de novo?"',
      strategy: 'Segurança Jurídica',
      response: '"O direito ao protocolo de consulta garante as regras por décadas. Além disso, quanto mais a energia sobe, mais o seu sistema se valoriza."'
    },
    {
      id: 'black-friday',
      category: '⚖️ Legislação',
      question: '"Vou esperar uma promoção ou a Black Friday."',
      strategy: 'Urgência Real',
      response: '"O dólar e o preço do frete oscilam diariamente. O preço que consigo segurar hoje para você é baseado no lote atual. Amanhã o custo de importação pode subir."'
    },
    {
      id: 'falar-socio',
      category: '⏳ Procrastinação',
      question: '"Preciso falar com meu sócio/esposa."',
      strategy: 'O consultor como aliado',
      response: '"Claro! Geralmente as dúvidas deles são sobre segurança e retorno. Vamos marcar um café de 10 minutos com eles para eu explicar os números?"'
    },
    {
      id: 'pensar-mais',
      category: '⏳ Procrastinação',
      question: '"Vou pensar mais um pouco."',
      strategy: 'Isole o problema',
      response: '"Entendo. Mas me diga: você precisa pensar no projeto técnico ou no fluxo financeiro? Se eu resolver essa dúvida agora, podemos seguir?"'
    },
    {
      id: 'outras-prioridades',
      category: '⏳ Procrastinação',
      question: '"Ainda não é o momento, estou com outras prioridades."',
      strategy: 'Prioridade financeira',
      response: '"Entendo que tenha outros planos, mas qual deles te devolve R$ [Valor da conta] por mês para ajudar a pagar esses outros projetos?"'
    },
    {
      id: 'vou-mudar',
      category: '⏳ Procrastinação',
      question: '"Vou me mudar em 2 ou 3 anos."',
      strategy: 'Valorização imobiliária',
      response: '"Excelente! Casas com energia solar vendem muito mais rápido e por um valor maior. Você recupera o investimento no ágio da venda."'
    },
    {
      id: 'condominio-nao-autoriza',
      category: '🏢 Objeções B2B',
      question: '"O condomínio/prédio não vai autorizar."',
      strategy: 'Solução remota',
      response: '"Se não pudermos usar este telhado, podemos avaliar o autoconsumo remoto ou o uso de uma área comum com rateio de benefício."'
    },
    {
      id: 'imovel-alugado',
      category: '🏢 Objeções B2B',
      question: '"Minha empresa é alugada, não vou investir no imóvel dos outros."',
      strategy: 'Portabilidade',
      response: '"O sistema é seu (CPF ou CNPJ). Se você mudar de endereço, nós desinstalamos e levamos para o novo local. O lucro é da sua operação, não do prédio."'
    },
    {
      id: 'contador-disse',
      category: '🏢 Objeções B2B',
      question: '"Meu contador disse que não é vantagem agora."',
      strategy: 'Alinhamento contábil',
      response: '"Muitos contadores focam no balanço imediato. Peça para ele analisar o solar como \'despesa operacional que vira lucro líquido\'. Eu posso enviar os dados de depreciação para ele."'
    }
  ];

  const categories = ['💰 Objeções Financeiras', '🛠️ Objeções Técnicas', '⚖️ Legislação', '⏳ Procrastinação', '🏢 Objeções B2B'];

  return (
    <section id="objections" className="py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Contorno de Objeções
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            20 objeções mais comuns e como respondê-las com confiança. Clique em cada uma para ver a estratégia de contorno.
          </p>
        </div>

        {/* Objections by Category */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category}</h3>
              <div className="space-y-4">
                {objections
                  .filter((obj) => obj.category === category)
                  .map((objection) => (
                    <div
                      key={objection.id}
                      className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-yellow-300 transition-all"
                    >
                      <button
                        onClick={() => setExpandedId(expandedId === objection.id ? null : objection.id)}
                        className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                      >
                        <div className="flex-1">
                          <p className="text-lg font-bold text-gray-900">{objection.question}</p>
                        </div>
                        <ChevronDown
                          className={`w-6 h-6 text-yellow-400 transition-transform flex-shrink-0 ${
                            expandedId === objection.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {expandedId === objection.id && (
                        <div className="bg-gradient-to-r from-yellow-50 to-blue-50 border-t-2 border-yellow-300 p-6 space-y-4">
                          <div>
                            <p className="text-sm font-bold text-yellow-700 uppercase mb-2">Estratégia</p>
                            <p className="text-lg font-semibold text-gray-900">{objection.strategy}</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-400">
                            <p className="text-sm font-bold text-gray-700 uppercase mb-2">Como Responder</p>
                            <p className="text-gray-800">{objection.response}</p>
                          </div>
                          <div className="bg-blue-100 rounded-lg p-4 border-l-4 border-blue-400">
                            <p className="text-xs font-bold text-blue-700 uppercase mb-2">💡 Dica de Ouro</p>
                            <p className="text-sm text-blue-800">Para cada objeção, o segredo é escutar, validar e devolver com uma pergunta. Nunca discorde do cliente; concorde com o sentimento dele e apresente o fato técnico.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4">Padrão de Resposta Universal</h3>
          <div className="space-y-4">
            <p className="text-lg text-blue-100">
              Para qualquer objeção, siga este padrão:
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm font-bold text-blue-200 mb-2">1️⃣ ESCUTE</p>
                <p className="text-sm text-blue-100">Deixe o cliente falar completamente sem interrupções.</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm font-bold text-blue-200 mb-2">2️⃣ VALIDE</p>
                <p className="text-sm text-blue-100">Reconheça o sentimento: "Entendo sua preocupação..."</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm font-bold text-blue-200 mb-2">3️⃣ RESPONDA</p>
                <p className="text-sm text-blue-100">Apresente o fato técnico ou financeiro com clareza.</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm font-bold text-blue-200 mb-2">4️⃣ PERGUNTE</p>
                <p className="text-sm text-blue-100">Faça uma pergunta que leve ao sim.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
