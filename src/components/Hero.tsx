import { ArrowRight, Database, Server, Shield, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Soluções Tecnológicas <span className="text-purple-600">Profissionais</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Especialistas em infraestrutura de TI, backups, virtualização, desenvolvimento e documentação técnica.
              Protegemos e otimizamos seus sistemas com tecnologia de ponta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-all transform hover:scale-105 flex items-center justify-center">
                Conhecer Serviços
                <ArrowRight className="ml-2 h-5 w-5 animate-bounce" />
              </button>
              <a href="#contact">
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-600 hover:text-white transition-all">
                  Consultoria Gratuita
                </button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <Database className="h-8 w-8 text-purple-600 mx-auto mb-2 animate-spin" />
                  <p className="text-sm font-semibold text-gray-700">Backups Seguros</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <Server className="h-8 w-8 text-green-600 mx-auto mb-2 animate-pulse" />
                  <p className="text-sm font-semibold text-gray-700">Virtualização</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2 animate-bounce" />
                  <p className="text-sm font-semibold text-gray-700">Segurança</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2 animate-ping" />
                  <p className="text-sm font-semibold text-gray-700">Documentação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
