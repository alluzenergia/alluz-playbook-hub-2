import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-auto py-12 bg-white">
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Video Section */}
          <div className="w-full">
            <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Nv3yK0dd32s"
                title="Alluz Energia - Não vendemos kit solar, vendemos resultado"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center italic">
              📹 Vídeo Institucional - Assista para entender melhor a proposta de redução de conta
            </p>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Sua Bíblia de Vendas
              </h1>
              <p className="text-lg md:text-xl font-light text-gray-700">
                A Alluz não vende kit solar, vende <span className="font-bold text-yellow-400">redução de conta</span>
              </p>
            </div>
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
              Tudo que você precisa para dominar o funil de vendas: estratégias comprovadas, scripts poderosos, gamificação e compliance. De Bronze a Ouro, seu caminho para o sucesso está aqui.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onNavigate('prospection')}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-md"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('compliance')}
                className="bg-white hover:bg-gray-50 text-gray-900 font-bold py-4 px-8 rounded-lg border-2 border-gray-300 transition-all"
              >
                Ver Compliance
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-yellow-400">5</p>
                <p className="text-sm text-gray-600">Estratégias</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-400">3</p>
                <p className="text-sm text-gray-600">Níveis</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-400">100%</p>
                <p className="text-sm text-gray-600">Compliance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
