import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/HeroSection';
import LevelsPanel from '@/components/LevelsPanel';
import ProspectionSection from '@/components/ProspectionSection';
import QualificationSection from '@/components/QualificationSection';
import ProcessoVendaSection from '@/components/ProcessoVendaSection';
import FollowUpSection from '@/components/FollowUpSection';
import SimulacaoVendasSection from '@/components/SimulacaoVendasSection';
import ChecklistPreVistoriaSection from '@/components/ChecklistPreVistoriaSection';
import ClosingSection from '@/components/ClosingSection';
import ComplianceSection from '@/components/ComplianceSection';
import ObjecoesSection from '@/components/ObjecoesSection';
import ChatLia from '@/components/ChatLia';
import Footer from '@/components/Footer';
import { useAuth } from '@/_core/hooks/useAuth';

export default function Home() {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar onNavigate={handleNavigate} activeSection={activeSection} />
      {/* Main Content - com margem esquerda no desktop */}
      <main className="lg:ml-64">
        <HeroSection onNavigate={handleNavigate} />
        <LevelsPanel />
        <ProspectionSection />
        <QualificationSection />
        <ProcessoVendaSection />
        <FollowUpSection />
        <SimulacaoVendasSection />
        <ObjecoesSection />
        <ChecklistPreVistoriaSection />
        <ClosingSection />
        <ComplianceSection />
        <Footer />
      </main>
      {/* Chat LIA - Consultora de Inteligência Comercial */}
      <ChatLia />
    </div>
  );
}
