import { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';
import { trpc } from '@/lib/trpc';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatLia() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId] = useState(() => `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Oi! Sou a Lia, sua Consultora de Inteligência Comercial da Alluz 🚀\n\nEstou aqui para ajudar você com:\n✓ Scripts prontos para vender\n✓ Contorno de objeções\n✓ Cálculos de ROI\n✓ Motivação e estratégia\n\nQual é sua dúvida agora?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // tRPC mutation para chat
  const chatMutation = trpc.lia.chat.useMutation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

    try {
      const response = await chatMutation.mutateAsync({
        message: input,
        sessionId: sessionId,
      });

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      console.error('Detalhes do erro:', error);
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        role: 'assistant',
        content: 'Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente. (' + (error instanceof Error ? error.message : 'Erro desconhecido') + ')',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
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
            {chatMutation.isPending && (
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
                onKeyPress={(e) => e.key === 'Enter' && !chatMutation.isPending && handleSendMessage()}
                placeholder="Sua dúvida aqui..."
                className="flex-1 px-4 py-2 border-2 border-yellow-300 rounded-lg focus:outline-none focus:border-yellow-500 text-sm"
                disabled={chatMutation.isPending}
              />
              <button
                onClick={handleSendMessage}
                disabled={chatMutation.isPending || !input.trim()}
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
