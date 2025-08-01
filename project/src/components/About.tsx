import { Shield, Users, Cloud } from 'lucide-react';
import { Globe, MapPin, HeartHandshake, MonitorSmartphone, TimerReset, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Especialistas em Tecnologia
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Com sólida experiência no setor de TI, entregamos soluções personalizadas e eficientes,
              alinhadas às reais necessidades de cada cliente. Nossa equipe é altamente capacitada nas
              principais tecnologias do mercado, garantindo segurança, desempenho e inovação.
            </p>

            {/* Indicadores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-4">
                <HeartHandshake className="w-10 h-10 text-green-600" />
                <div>
                  <div className="text-lg font-semibold text-gray-800">Satisfação dos Clientes</div>
                  <p className="text-sm text-gray-600">Atendimento humanizado e transparente</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <TimerReset className="w-10 h-10 text-orange-600" />
                <div>
                  <div className="text-lg font-semibold text-gray-800">SLA 24h</div>
                  <p className="text-sm text-gray-600">Tempo médio de resposta em chamados</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="w-10 h-10 text-indigo-600" />
                <div>
                  <div className="text-lg font-semibold text-gray-800">Manaus e São Paulo</div>
                  <p className="text-sm text-gray-600">Atuação estratégica em regiões-chave</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MonitorSmartphone className="w-10 h-10 text-pink-600" />
                <div>
                  <div className="text-lg font-semibold text-gray-800">Monitoramento 24/7</div>
                  <p className="text-sm text-gray-600">Infraestrutura supervisionada em tempo real</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Globe className="w-10 h-10 text-blue-600" />
                <div>
                  <div className="text-lg font-semibold text-gray-800">Presença em crescimento</div>
                  <p className="text-sm text-gray-600">Expansão contínua de atuação e portfólio</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Zap className="w-10 h-10 text-yellow-500" />
                <div>
                  <div className="text-lg font-semibold text-gray-800">Automação de Processos</div>
                  <p className="text-sm text-gray-600">Redução de tarefas manuais com integração e eficiência</p>
                </div>
              </div>

            </div>
          </div>

          {/* Bloco lateral com diferenciais */}
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
  );
}
