export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Alluz Energia</h3>
            <p className="text-gray-600 text-sm">
              Transformando contas de energia em lucro líquido.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Navegacao</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#hero" className="hover:text-yellow-400 transition">Inicio</a></li>
              <li><a href="#prospection" className="hover:text-yellow-400 transition">Prospeccao</a></li>
              <li><a href="#qualification" className="hover:text-yellow-400 transition">Qualificacao</a></li>
              <li><a href="#closing" className="hover:text-yellow-400 transition">Fechamento</a></li>
              <li><a href="#compliance" className="hover:text-yellow-400 transition">Compliance</a></li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Recursos</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-yellow-400 transition">Sistema Alluz</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Suporte</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Treinamento</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">FAQ</a></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Contato</h4>
            <p className="text-sm text-gray-600 mb-2">
              📧 suporte@alluzenergia.com.br
            </p>
            <p className="text-sm text-gray-600">
              📱 (11) 9999-9999
            </p>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />
        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2026 Alluz Energia. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400 transition">Privacidade</a>
            <a href="#" className="hover:text-yellow-400 transition">Termos</a>
            <a href="#" className="hover:text-yellow-400 transition">Compliance</a>
          </div>
        </div>
        {/* Tagline */}
        <div className="mt-8 text-center text-gray-600 italic font-medium">
          "A Alluz não vende kit solar, vende redução de conta"
        </div>
      </div>
    </footer>
  );
}
