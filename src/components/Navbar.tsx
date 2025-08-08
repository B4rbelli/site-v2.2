import { Server } from 'lucide-react';
import { useModalContato } from './ModalContatoProvider';

export default function Navbar() {
  const { abrir } = useModalContato();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Server className="h-8 w-8 text-purple-600 animate-pulse" />
            <h1 className="text-2xl font-bold text-gray-900">SB Tech&Support</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Início</a>
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Serviços</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">Sobre</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contato</a>
          </nav>
          <button
            onClick={abrir}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </header>
  );
}
