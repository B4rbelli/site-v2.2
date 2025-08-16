import { Server } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Server className="h-8 w-8 text-purple-400 animate-pulse" />
              <h1 className="text-2xl font-bold">Tecnologia que Impulsiona Resultados</h1>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Especialistas em soluções tecnológicas profissionais. Oferecemos serviços de backup, 
              virtualização, desenvolvimento, documentação técnica e muito mais para empresas de todos os tamanhos.
            </p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Secure Bridge Technology. Todos os direitos reservados.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Estrutura de Backups</li>
              <li>Virtualização</li>
              <li>Desenvolvimento</li>
              <li>Documentação Técnica</li>
              <li>Suporte 24/7</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>comercial@securebridge.com.br</li>
              <li>(92) 98510-4616</li>
              <li>Manaus, AM</li>
              <li>www.securebridge.com.br</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
