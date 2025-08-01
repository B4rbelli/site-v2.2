// src/pages/servicos/Documentacoes.tsx
import { FileText, Share2, Network, ListChecks } from 'lucide-react';
import ParticleBackground from '../../components/ParticleBackground';
import Formulario from '../../components/Formulario';
import { motion } from 'framer-motion';

export default function Documentacoes() {
  const tecnologias = [
    'Markdown', 'Draw.io', 'Lucidchart', 'Confluence', 'Notion', 'Google Docs',
    'GitBook', 'Docusaurus', 'PlantUML', 'Visio', 'Typora', 'Markdown PDF'
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-orange-100 to-white">
      <ParticleBackground />

      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-orange-700 mb-4">Criação de Documentações</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A documentação técnica é essencial para garantir padronização, continuidade e agilidade no suporte.
            Além de facilitar treinamentos e auditorias, ela é base para o crescimento escalável da sua infraestrutura.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {[
            {
              icon: <FileText className="text-orange-600 w-8 h-8" />,
              title: 'Manuais Técnicos',
              desc: 'Detalhamento de processos e configurações críticas.'
            },
            {
              icon: <Network className="text-orange-600 w-8 h-8" />,
              title: 'Diagramas de Rede',
              desc: 'Visualização da infraestrutura para fácil entendimento e controle.'
            },
            {
              icon: <Share2 className="text-orange-600 w-8 h-8" />,
              title: 'Compartilhamento Inteligente',
              desc: 'Acesso seguro em nuvem e controle de versões.'
            },
            {
              icon: <ListChecks className="text-orange-600 w-8 h-8" />,
              title: 'Políticas e Checklists',
              desc: 'Padronização de boas práticas e governança de TI.'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-3">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-orange-700 text-center mb-8">Ferramentas utilizadas</h2>
          <div className="overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap gap-6">
              {[...tecnologias, ...tecnologias].map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-white shadow-md px-6 py-3 rounded-full text-gray-800 font-medium text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-orange-700 mb-6 text-center">Solicite uma Proposta</h3>
          <Formulario cor="orange" />
        </div>
      </section>
    </div>
  );
}
