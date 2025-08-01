import React from 'react';
import { Server, Shield, FileText, Users, Phone, Mail, MapPin, CheckCircle, ArrowRight, Database, HardDrive, Cloud } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Server className="h-8 w-8 text-purple-600 animate-pulse" />
              <h1 className="text-2xl font-bold text-gray-900">SB Tech Support</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Início</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Serviços</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">Sobre</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contato</a>
            </nav>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Fale Conosco
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Soluções Tecnológicas 
                <span className="text-purple-600"> Profissionais</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Especialistas em infraestrutura de TI, backups, virtualização e documentação técnica. 
                Protegemos e otimizamos seus sistemas com tecnologia de ponta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-all transform hover:scale-105 flex items-center justify-center">
                  Conhecer Serviços
                  <ArrowRight className="ml-2 h-5 w-5 animate-bounce" />
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-600 hover:text-white transition-all">
                  Consultoria Gratuita
                </button>
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-purple-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em tecnologia da informação para empresas de todos os tamanhos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Saiba mais →
              </button>
            </div>

            {/* Virtualization */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 hover:animate-bounce transition-all">
                <Server className="h-8 w-8 text-white animate-pulse" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Virtualização</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Otimizamos sua infraestrutura com tecnologias de virtualização, reduzindo custos 
                e aumentando a eficiência operacional.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  VMware e Hyper-V
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Migração de servidores
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Monitoramento avançado
                </li>
              </ul>
              <button className="text-green-600 font-semibold hover:text-green-800 transition-colors">
                Saiba mais →
              </button>
            </div>

            {/* Documentation */}
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
              <button className="text-orange-600 font-semibold hover:text-orange-800 transition-colors">
                Saiba mais →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Especialistas em Tecnologia
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Com anos de experiência no mercado de TI, oferecemos soluções personalizadas 
                que atendem às necessidades específicas de cada cliente. Nossa equipe é 
                certificada nas principais tecnologias do mercado.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
                  <div className="text-gray-600">Projetos Concluídos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-gray-600">Suporte Técnico</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Uptime Garantido</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full hover:animate-spin transition-all">
                      <Shield className="h-6 w-6 text-purple-600 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Segurança Garantida</h4>
                      <p className="text-gray-600">Protocolos de segurança rigorosos</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full hover:animate-bounce transition-all">
                      <Users className="h-6 w-6 text-green-600 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Equipe Especializada</h4>
                      <p className="text-gray-600">Profissionais certificados</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full hover:animate-ping transition-all">
                      <Cloud className="h-6 w-6 text-orange-600 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Tecnologia Avançada</h4>
                      <p className="text-gray-600">Soluções de ponta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pronto para transformar sua infraestrutura de TI? Entre em contato conosco hoje mesmo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover:animate-bounce transition-all">
                <Phone className="h-8 w-8 text-white animate-pulse" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Telefone</h4>
              <p className="text-gray-600 mb-4">Ligue para nós</p>
              <p className="text-purple-600 font-semibold text-lg">(11) 9999-9999</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover:animate-spin transition-all">
                <Mail className="h-8 w-8 text-white animate-pulse" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">E-mail</h4>
              <p className="text-gray-600 mb-4">Envie uma mensagem</p>
              <p className="text-green-600 font-semibold text-lg">contato@sbtechsupport.com.br</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover:animate-ping transition-all">
                <MapPin className="h-8 w-8 text-white animate-pulse" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Localização</h4>
              <p className="text-gray-600 mb-4">Venha nos visitar</p>
              <p className="text-orange-600 font-semibold text-lg">São Paulo, SP</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="bg-purple-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105">
              Solicitar Orçamento Gratuito
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Server className="h-8 w-8 text-purple-400 animate-pulse" />
                <h1 className="text-2xl font-bold">SB Tech Support</h1>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Especialistas em soluções tecnológicas profissionais. Oferecemos serviços de backup, 
                virtualização e documentação técnica para empresas de todos os tamanhos.
              </p>
              <p className="text-gray-400">
                © 2025 SB Tech Support. Todos os direitos reservados.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Estrutura de Backups</li>
                <li>Virtualização</li>
                <li>Documentação Técnica</li>
                <li>Suporte 24/7</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@sbtechsupport.com.br</li>
                <li>(11) 9999-9999</li>
                <li>São Paulo, SP</li>
                <li>www.sbtechsupport.com.br</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;