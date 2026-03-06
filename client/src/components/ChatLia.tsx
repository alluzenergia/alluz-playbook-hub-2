import { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatLia() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Oi! Sou a Lia, sua Consultora de Inteligência Comercial da Alluz 🚀\n\nEstou aqui para ajudar você com:\n✓ Scripts prontos para vender\n✓ Contorno de objeções\n✓ Cálculos de ROI\n✓ Motivação e estratégia\n\nQual é sua dúvida agora?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const systemPrompt = `Você é a Lia, a Consultora de Inteligência Comercial Sênior da Alluz Energia. Sua missão é ser a mentora de campo dos vendedores terceiros, ajudando-os a bater metas e subir de nível (Bronze, Prata e Ouro).

PERSONALIDADE:
- Prática e Direta: Você não gosta de enrolação. Suas respostas devem ser operacionais e focadas em "como fazer".
- Motivadora, mas Firme: Você incentiva o vendedor, mas lembra sempre das regras e das metas mínimas.
- Estrategista de ROI: Você pensa como um investidor. Sua linguagem é sobre economia, lucro, retorno e patrimônio.

BASE DE CONHECIMENTO (Regras de Ouro):
- Essência: A Alluz não vende kit solar, vende redução de conta.
- Níveis: Bronze (5 propostas + 1 venda), Prata (10 propostas + 2 vendas), Ouro (R$ 200k/mês).
- Inegociáveis: Propostas apenas no Sistema Alluz, fotos de pré-vistoria obrigatórias, comissão na sexta-feira, desconto máximo de 3%.

COMO VOCÊ DEVE AGIR:
1. Se o vendedor pedir um script: Forneça um texto pronto para copiar e colar, adaptado à estratégia solicitada (LinkedIn, WhatsApp, Indicação, etc.).
2. Se o vendedor trouxer uma objeção: Responda com a técnica de contorno de objeção específica do playbook, sempre terminando com uma pergunta de fechamento.
3. Se o vendedor estiver desmotivado: Lembre-o dos ganhos (6%, 8% ou 10%) e mostre o caminho matemático.

EXEMPLO DE RESPOSTA A OBJEÇÃO:
Vendedor: "Lia, o cliente disse que o preço da Alluz está caro."
Lia: "Foco no valor, consultor! Use isso: 'Sr. Cliente, entendo que o preço inicial pareça maior, mas na Alluz você paga pela engenharia que garante a geração. Se o sistema deles gerar 10% a menos por falta de qualidade, você perderá o triplo dessa diferença em 10 anos. Você prefere economizar na compra ou lucrar na geração?' — Tente isolar a dúvida agora: Além do preço, algo mais te impede de começarmos?"

TÓPICOS PRINCIPAIS DO PLAYBOOK:
- Prospecção: 5 estratégias (Indicação, Google Maps, Influenciadores, LinkedIn, Raio X de Vizinhança)
- Qualificação: Lead A (prioridade máxima), Lead B (bom mas morno), Lead C (sem fit)
- Processo de Vendas: 5 etapas estruturadas
- Follow-up: 7 toques (D0, D1, D2, D4, D6, D8, D15)
- Simulação de Vendas: 3 cenários (Ponta a Ponta, Guerra de Preço, Financiamento)
- Checklist Pré-Vistoria: Fotos obrigatórias do telhado, padrão, medidor, etc.
- Compliance: 6 regras inegociáveis

Sempre seja motivador, prático e focado em resultados. Use linguagem direta e exemplos numéricos.`;

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Simular resposta da LIA com delay
      // Em produção, isso seria uma chamada para uma API de IA real
      await new Promise(resolve => setTimeout(resolve, 1500));

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateLiaResponse(input),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateLiaResponse = (userInput: string): string => {
    const input_lower = userInput.toLowerCase();

    // Respostas para objeções comuns
    if (input_lower.includes('caro') || input_lower.includes('preço')) {
      return `Foco no valor, consultor! 💰\n\nUse isso com seu cliente:\n\n"Sr. Cliente, entendo que o preço inicial pareça maior, mas na Alluz você paga pela engenharia que garante a geração. Um sistema 10% mais barato que gera 20% menos energia custa o triplo no longo prazo.\n\nVocê prefere economizar na compra ou lucrar na geração?"\n\nDepois, isole a dúvida: "Além do preço, algo mais te impede de começarmos?"`;
    }

    if (input_lower.includes('script') || input_lower.includes('como abordar')) {
      return `Perfeito! Aqui está um script pronto para copiar e colar:\n\n📱 WHATSAPP - PROSPECÇÃO:\n"Oi [Nome]! Sou consultor da Alluz Energia. Vi que sua empresa está no ramo de [SETOR]. Você já calculou quanto está pagando de conta de luz por mês? Geralmente empresas do seu porte estão jogando fora 30-40% do lucro nessa conta. Posso fazer um diagnóstico rápido para você?"\n\n🔗 LINKEDIN - ALTO TICKET:\n"Olá [Nome], sou consultor na Alluz. Vi o crescimento da sua empresa. Trabalhamos com engenharia financeira para transformar o passivo de energia em lucro líquido. Gostaria de te enviar um estudo de viabilidade?"\n\nQual estratégia você quer usar?`;
    }

    if (input_lower.includes('lead') || input_lower.includes('qualificação')) {
      return `Ótimo! Vamos classificar seus leads corretamente:\n\n🔴 LEAD A - Prioridade Máxima (Quente e com fit):\n• Conta ≥ R$ 300\n• Imóvel próprio\n• Telhado viável\n• Decisão em até 30 dias\n→ Ação: Atendimento imediato, proposta rápida, visita em até 48h\n\n🟡 LEAD B - Bom mas Morno (Precisa de condução):\n• Tem fit, mas está comparando\n• Sem urgência clara\n• Pode demorar para mandar docs\n→ Ação: Proposta + cadência de follow-up (D0/D1/D2/D4/D6/D8)\n\n⚪ LEAD C - Sem Fit (Não consome visita):\n• Conta baixa (< R$ 300)\n• Imóvel alugado\n• Telhado inviável\n→ Ação: Arquivar/nutrir e reativar depois (30/60/90 dias)\n\nQual é o perfil do seu cliente agora?`;
    }

    if (input_lower.includes('follow-up') || input_lower.includes('toque')) {
      return `Excelente! Aqui está a cadência de follow-up de 7 toques:\n\n📅 D0 - Primeiro Contato:\n"Você quer reduzir a conta ao máximo possível ou prefere menor investimento inicial?"\n\n📅 D1 - Verificação:\n"Você conseguiu olhar? Quer que eu compare com o que te mandaram?"\n\n📅 D2 - Qualificação:\n"Você está mais perto do sim ou do não? Só pra eu organizar aqui."\n\n📅 D4 - Prova Social:\n"Fechamos um caso parecido e o cliente já está monitorando a geração."\n\n📅 D6 - Requalificação:\n"Você está mais perto do sim ou do não?"\n\n📅 D8 - Arquivamento:\n"Vamos arquivar por enquanto? Quando sua situação mudar, você me liga."\n\n📅 D15 - Reativação:\n"Oi! Mudou algo aí? Vamos conversar?"\n\nQual é o dia do seu cliente?`;
    }

    if (input_lower.includes('motivação') || input_lower.includes('meta') || input_lower.includes('desmotivado')) {
      return `Vamos colocar você de volta nos trilhos! 🎯\n\nLembre-se dos números:\n• Bronze: 5 propostas + 1 venda = Comissão 6%\n• Prata: 10 propostas + 2 vendas = Comissão 8%\n• Ouro: R$ 200k/mês = Comissão 10%\n\nMATEMÁTICA SIMPLES:\nPara fechar 1 venda, você precisa de 5 propostas.\nPara fechar 2 vendas (Prata), você precisa de 10 propostas.\n\nPERGUNTA IMPORTANTE: Quantas propostas você já fez essa semana?\n\nSe a resposta é "poucas", vamos voltar ao básico:\n1. Escolha 1 estratégia de prospecção (Indicação, Google Maps, LinkedIn, etc.)\n2. Faça 5 abordagens hoje\n3. Amanhã, mais 5\n\nEm 2 semanas, você terá 50 propostas e pelo menos 10 vendas. Vamos começar agora?`;
    }

    if (input_lower.includes('roi') || input_lower.includes('economia') || input_lower.includes('retorno')) {
      return `Ótimo! Vamos falar de ROI e economia:\n\n💰 EXEMPLO PRÁTICO:\nCliente com conta de R$ 500/mês\n\nEM 10 ANOS:\n• Sem solar: 500 × 12 × 10 = R$ 60 mil gastos\n• Com solar (investimento R$ 35 mil): Economiza R$ 100 mil\n• Lucro líquido: R$ 65 mil\n\n📊 RENDIMENTO DO SISTEMA:\n• 2,5% ao mês sobre o capital investido\n• Risco zero (não é CDB)\n• Isento de imposto\n• Bem de capital que valoriza o imóvel\n\n🎯 ARGUMENTO FINAL:\n"Seu sistema rende 2,5% ao mês com risco zero. Onde mais você consegue isso? No banco você ganha 10% ao ano; com a Alluz você ganha 25% ou mais."\n\nQual é a conta do seu cliente? Posso calcular a economia exata!`;
    }

    if (input_lower.includes('pré-vistoria') || input_lower.includes('foto') || input_lower.includes('checklist')) {
      return `Atenção! Fotos de pré-vistoria são OBRIGATÓRIAS! 📸\n\nSEM ELAS, A PROPOSTA NÃO SOBE!\n\nFOTOS OBRIGATÓRIAS:\n✓ Croqui do telhado\n✓ Foto do telhado (visão geral)\n✓ Estrutura do telhado\n✓ Padrão (tampa fechada e aberta)\n✓ Disjuntor principal\n✓ Medidor\n✓ Quadro de distribuição\n✓ Local do inversor\n✓ Poste de energia\n✓ Bússola (orientação solar)\n✓ Fachada do imóvel\n\n💡 DICAS:\n• Tire fotos com boa iluminação\n• Enquadramento claro\n• Inversor deve ficar a ~1,6m de altura\n• Evite forros, locais quentes ou com sol direto\n\nVocê já coletou todas as fotos do seu cliente?`;
    }

    // Resposta padrão para outras perguntas
    return `Ótima pergunta, consultor! 🚀\n\nAqui na Alluz, tudo é sobre números e resultados. Deixa eu detalhar melhor:\n\n📌 O que você precisa:\n1. Escolha uma estratégia de prospecção\n2. Faça 5+ abordagens por dia\n3. Qualifique bem seus leads (A, B ou C)\n4. Siga o script de follow-up\n5. Coleta todas as fotos obrigatórias\n\n💰 Seu ganho:\n• Bronze: 6% de comissão\n• Prata: 8% de comissão\n• Ouro: 10% de comissão\n\nQual é sua dúvida específica? Posso ajudar com:\n✓ Scripts prontos\n✓ Contorno de objeções\n✓ Cálculo de ROI\n✓ Estratégia de prospecção\n✓ Qualificação de leads\n✓ Follow-up`;
  };

  return (
    <>
      {/* Botão Flutuante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          title="Falar com a Lia"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-xl shadow-2xl flex flex-col border-2 border-yellow-400">
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 p-4 rounded-t-lg flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Lia 🧠</h3>
              <p className="text-xs text-gray-800">Consultora de Inteligência Comercial</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-yellow-600 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-yellow-400 text-gray-900 rounded-br-none'
                      : 'bg-white border-2 border-yellow-300 text-gray-900 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border-2 border-yellow-300 px-4 py-3 rounded-lg rounded-bl-none">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4 bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Sua dúvida aqui..."
                className="flex-1 px-4 py-2 border-2 border-yellow-300 rounded-lg focus:outline-none focus:border-yellow-500 text-sm"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-yellow-400 hover:bg-yellow-500 disabled:opacity-50 text-gray-900 rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
