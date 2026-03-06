import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { invokeLLM } from "./_core/llm";
import { getLiaConversation, createLiaConversation, updateLiaConversation } from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // LIA Chat Router
  lia: router({
    chat: protectedProcedure
      .input(z.object({
        message: z.string().min(1, "Mensagem não pode estar vazia"),
      }))
      .mutation(async ({ ctx, input }) => {
        const userId = ctx.user.id;
        const userMessage = input.message;

        // Get or create conversation
        let conversation = await getLiaConversation(userId);
        let messages: Array<{ role: 'user' | 'assistant'; content: string }> = [];

        if (conversation) {
          messages = JSON.parse(conversation.messages as unknown as string);
        }

        // Add user message
        messages.push({ role: 'user', content: userMessage });

        // System prompt for LIA
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

TÓPICOS PRINCIPAIS DO PLAYBOOK:
- Prospecção: 5 estratégias (Indicação, Google Maps, Influenciadores, LinkedIn, Raio X de Vizinhança)
- Qualificação: Lead A (prioridade máxima - quente e com fit), Lead B (bom mas morno - precisa de condução), Lead C (sem fit - não consome visita)
- Processo de Vendas: 5 etapas estruturadas
- Follow-up: 7 toques (D0, D1, D2, D4, D6, D8, D15)
- Simulação de Vendas: 3 cenários (Ponta a Ponta, Guerra de Preço, Financiamento)
- Checklist Pré-Vistoria: Fotos obrigatórias do telhado, padrão, medidor, etc.
- Compliance: 6 regras inegociáveis

IMPORTANTE:
- Sempre seja motivador, prático e focado em resultados
- Use linguagem direta e exemplos numéricos
- Responda de forma natural e conversacional, não como um bot
- Aprenda com o contexto da conversa anterior
- Faça perguntas de acompanhamento para entender melhor o vendedor
- Nunca repita exatamente a mesma resposta`;

        // Prepare messages for LLM
        const llmMessages: Array<{ role: 'user' | 'assistant' | 'system'; content: string }> = [
          { role: 'system', content: systemPrompt },
          ...messages,
        ];

        // Call LLM
        const response = await invokeLLM({
          messages: llmMessages as any,
        });

        const assistantMessageContent = response.choices[0]?.message?.content;
        const assistantMessage = typeof assistantMessageContent === 'string' 
          ? assistantMessageContent 
          : "Desculpe, não consegui processar sua pergunta.";

        // Update conversation with assistant response
        messages.push({ role: 'assistant', content: assistantMessage as string });

        if (conversation) {
          await updateLiaConversation(userId, messages);
        } else {
          await createLiaConversation(userId, messages);
        }

        return {
          message: assistantMessage,
          messages: messages,
        };
      }),
  }),

  // TODO: add feature routers here
});

export type AppRouter = typeof appRouter;
