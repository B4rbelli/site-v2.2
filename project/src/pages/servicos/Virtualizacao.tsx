// src/pages/servicos/Virtualizacao.tsx
import { ServerCog, TrendingUp, RefreshCw, ShieldCheck } from 'lucide-react';
import ParticleBackground from '../../components/ParticleBackground';
import Formulario from '../../components/Formulario';
import { motion } from 'framer-motion';

export default function Virtualizacao() {
  const tecnologias = [
    'Proxmox VE', 'VMware ESXi', 'Hyper-V', 'XCP-ng',
    'Virt-Manager', 'oVirt', 'KVM/QEMU', 'Azure VM',
    'AWS EC2', 'Docker', 'LXC', 'VirtualBox'
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-100 to-white">
      <ParticleBackground />

      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-green-700 mb-4">Soluções de Virtualização</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A virtualização oferece maior flexibilidade, economia e segurança para sua infraestrutura.
            Permite consolidar servidores físicos, escalar serviços com agilidade e reduzir riscos de falha com alta disponibilidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {[
            {
              icon: <ServerCog className="text-green-600 w-8 h-8" />,
              title: 'Gerenciamento Centralizado',
              desc: 'Controle total dos recursos e máquinas virtuais com plataformas eficientes.'
            },
            {
              icon: <TrendingUp className="text-green-600 w-8 h-8" />,
              title: 'Alta Performance',
              desc: 'Redução de consumo físico com ganho de performance e escalabilidade.'
            },
            {
              icon: <RefreshCw className="text-green-600 w-8 h-8" />,
              title: 'Migração e Recuperação',
              desc: 'Migração de VMs entre hosts sem downtime e planos de recuperação otimizados.'
            },
            {
              icon: <ShieldCheck className="text-green-600 w-8 h-8" />,
              title: 'Isolamento e Segurança',
              desc: 'Ambientes separados e protegidos para serviços críticos.'
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
          <h2 className="text-3xl font-bold text-green-700 text-center mb-8">Tecnologias de Virtualização</h2>
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
          <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">Solicite uma Proposta</h3>
          <Formulario cor="green" />
        </div>
      </section>
    </div>
  );
}
