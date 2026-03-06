import { useState } from 'react';
import { Menu, X, Zap, Home, Target, CheckCircle, Handshake, AlertCircle, Clock, Shield } from 'lucide-react';

interface SidebarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export default function Sidebar({ onNavigate, activeSection }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Inicio', icon: Home },
    { id: 'levels', label: 'Niveis', icon: Target },
    { id: 'prospection', label: 'Prospeccao', icon: Target },
    { id: 'qualification', label: 'Qualificacao', icon: CheckCircle },
    { id: 'follow-up-vendas', label: 'Follow-up', icon: Clock },
    { id: 'simulacao-vendas', label: 'Simulador', icon: Zap },
    { id: 'objections', label: 'Contorno de Objecoes', icon: Shield },
    { id: 'closing', label: 'Fechamento', icon: Handshake },
    { id: 'compliance', label: 'Compliance', icon: AlertCircle },
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-lg transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Desktop - Amarelo Clean */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-yellow-400 text-gray-900 shadow-lg transform transition-transform duration-300 z-40 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-yellow-500">
          <button
            onClick={() => handleNavigate('hero')}
            className="flex items-center gap-3 w-full hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-left">
              <p className="font-bold text-lg text-gray-900">Alluz</p>
              <p className="text-xs text-gray-700">Playbook</p>
            </div>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6">
          <div className="space-y-2 px-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-white text-yellow-400 font-bold shadow-md'
                      : 'text-gray-800 hover:bg-yellow-500 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-yellow-500">
          <p className="text-xs text-gray-800 text-center leading-relaxed font-medium">
            "A Alluz nao vende kit solar, vende reducao de conta"
          </p>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
