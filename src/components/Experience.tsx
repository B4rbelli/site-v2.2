import { Wrench, ShieldCheck, Code, Database } from 'lucide-react';

const ferramentas = [
  {
    title: "Desenvolvimento Web",
    icon: <Code className="text-purple-500 w-6 h-6" />,
    descricao: "Sites, APIs e sistemas personalizados com foco em performance, segurança e escalabilidade.",
    tecnologias: ["React", "Next.js", "Tailwind CSS", "FastAPI", "GitHub Actions"]
  },
  {
    title: "Segurança da Informação",
    icon: <ShieldCheck className="text-green-500 w-6 h-6" />,
    descricao: "Proteção de ambientes, endpoints e redes com soluções de ponta e monitoramento.",
    tecnologias: ["FortiGate", "Wazuh", "ESET Protect", "Firewall UTM", "VPNs"]
  },
  {
    title: "Banco de Dados e Backup",
    icon: <Database className="text-blue-500 w-6 h-6" />,
    descricao: "Gestão de dados e políticas de backup com foco em disponibilidade e integridade.",
    tecnologias: ["PostgreSQL", "SQL Server", "Veeam", "NAS", "pgAdmin"]
  },
  {
    title: "Infraestrutura e Monitoramento",
    icon: <Wrench className="text-orange-500 w-6 h-6" />,
    descricao: "Gestão de servidores, redes e ativos com soluções locais e em nuvem.",
    tecnologias: ["Windows Server", "Linux", "Zabbix", "Grafana", "VMware ESXi"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Nossas Ferramentas
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça as tecnologias e áreas de expertise que utilizamos para entregar resultados reais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {ferramentas.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-white shadow">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
              </div>
              <p className="text-gray-600 mb-4">{item.descricao}</p>
              <div className="flex flex-wrap gap-2">
                {item.tecnologias.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-100 text-purple-600 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
