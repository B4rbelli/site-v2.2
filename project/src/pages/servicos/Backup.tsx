// src/pages/servicos/Backup.tsx
import { ShieldCheck, Cloud, Repeat, ServerCrash } from 'lucide-react';
import ParticleBackground from '../../components/ParticleBackground';
import Formulario from '../../components/Formulario';
import { motion } from 'framer-motion';

export default function Backup() {
  const tecnologias = [
    'Veeam Backup', 'BorgBackup', 'rsync', 'Duplicati',
    'Bacula', 'Rclone', 'Acronis', 'Synology Active Backup',
    'Google Workspace Backup', 'Azure Backup', 'Amazon S3 Glacier'
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <ParticleBackground />

      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
        {/* Introdução */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-purple-700 mb-4">Soluções de Backup</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Um backup seguro é essencial para garantir a continuidade do seu negócio. 
            Em um cenário de ataques cibernéticos, falhas humanas e desastres naturais, manter seus dados protegidos 
            com soluções confiáveis é uma prioridade estratégica.
          </p>
        </motion.div>

        {/* Benefícios */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {[
            {
              icon: <ShieldCheck className="text-purple-600 w-8 h-8" />,
              title: 'Segurança de Dados',
              desc: 'Criptografia ponta-a-ponta e autenticação reforçada para máxima proteção.'
            },
            {
              icon: <Cloud className="text-purple-600 w-8 h-8" />,
              title: 'Backup em Nuvem',
              desc: 'Redundância geográfica com armazenamento seguro e escalável.'
            },
            {
              icon: <Repeat className="text-purple-600 w-8 h-8" />,
              title: 'Automação Inteligente',
              desc: 'Execução de backups programados, com alertas e relatórios automáticos.'
            },
            {
              icon: <ServerCrash className="text-purple-600 w-8 h-8" />,
              title: 'Recuperação Rápida',
              desc: 'Planos de RTO e RPO otimizados para retomada imediata em caso de falha.'
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

        {/* Carrossel animado */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-purple-700 text-center mb-8">Tecnologias de Backup</h2>
          <div className="overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap gap-6">
              {tecnologias.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-white shadow-md px-6 py-3 rounded-full text-gray-800 font-medium text-sm"
                >
                  {tech}
                </span>
              ))}
              {tecnologias.map((tech, index) => (
                <span
                  key={index + tecnologias.length}
                  className="inline-block bg-white shadow-md px-6 py-3 rounded-full text-gray-800 font-medium text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Formulário */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-purple-700 mb-6 text-center">Solicite uma Proposta</h3>
          <Formulario cor="purple" />
        </div>
      </section>
    </div>
  );
}
