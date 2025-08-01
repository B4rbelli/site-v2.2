import { CheckCircle, HardDrive, Server, FileText, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-purple-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia da informação para empresas de todos os tamanhos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Backup Solutions */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 hover:animate-spin transition-all">
              <HardDrive className="h-8 w-8 text-white animate-pulse" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Estrutura de Backups</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Implementamos soluções robustas de backup com redundância, automação e monitoramento 24/7
              para garantir a segurança dos seus dados.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Backup automático diário
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Armazenamento em nuvem segura
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Recuperação rápida de dados
              </li>
            </ul>
            <Link
              to="/servicos/backup"
              className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
            >
              Saiba mais →
            </Link>
          </div>

          {/* Virtualização */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 hover:animate-bounce transition-all">
              <Server className="h-8 w-8 text-white animate-pulse" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Virtualização</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Otimizamos sua infraestrutura com tecnologias de virtualização e gerenciamento, reduzindo custos
              e aumentando a eficiência operacional.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                VMware, Hyper-V, Proxmox
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Migração de servidores
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Configuração de Ativos
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Monitoramento avançado
              </li>
            </ul>
            <Link
              to="/servicos/virtualizacao"
              className="text-green-600 font-semibold hover:text-green-800 transition-colors"
            >
              Saiba mais →
            </Link>
          </div>

          {/* Documentações */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 hover:animate-ping transition-all">
              <FileText className="h-8 w-8 text-white animate-bounce" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Documentações</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Criamos documentações técnicas detalhadas, manuais de procedimentos e
              diagramas de rede para sua empresa.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Manuais técnicos
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Diagramas de rede
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Políticas de TI
              </li>
            </ul>
            <Link
              to="/servicos/Documentacoes"
              className="text-orange-600 font-semibold hover:text-orange-800 transition-colors"
            >
              Saiba mais →
            </Link>
          </div>

          {/* Desenvolvimento Web e Aplicações */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 hover:animate-fade transition-all">
              <Code className="h-8 w-8 text-white animate-pulse" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Desenvolvimento Web e Aplicações</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Desenvolvemos soluções digitais como sites, sistemas internos, APIs e aplicações sob demanda.
              Foco total em performance, escalabilidade, segurança e design moderno.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Sites institucionais e landing pages
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Desenvolvimento de APIs e WebApps
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Integrações com bancos e sistemas
              </li>
            </ul>
            <Link
              to="/servicos/Desenvolvimento"
              className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              Saiba mais →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
