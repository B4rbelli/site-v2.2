import { Code, ServerCog, Globe2, ShieldCheck } from 'lucide-react';
import ParticleBackground from '../../components/ParticleBackground';
import Formulario from '../../components/Formulario';
import { motion } from 'framer-motion';

export default function Desenvolvimento() {
  const tecnologias = [
    'React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS',
    'Strapi', 'NestJS', 'FastAPI', 'MongoDB', 'PostgreSQL',
    'Stripe', 'Vercel', 'Firebase', 'Docker'
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-100 to-white">
      <ParticleBackground />

      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
        {/* Introdução */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-indigo-700 mb-4">Desenvolvimento Web e Aplicações</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Em um mundo cada vez mais digital, a presença online profissional é essencial. 
            Criamos soluções sob medida — de sites institucionais a sistemas web complexos — com foco em performance, segurança e escalabilidade.
          </p>
        </motion.div>

        {/* Benefícios */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {[
            {
              icon: <Code className="text-indigo-600 w-8 h-8" />,
              title: 'Código de Alta Qualidade',
              desc: 'Desenvolvimento com padrões modernos, utilizando TypeScript e frameworks atualizados.'
            },
            {
              icon: <ServerCog className="text-indigo-600 w-8 h-8" />,
              title: 'Integrações Backend',
              desc: 'Integração com bancos de dados, APIs externas e sistemas ERP.'
            },
            {
              icon: <Globe2 className="text-indigo-600 w-8 h-8" />,
              title: 'Sites e Sistemas Otimizados',
              desc: 'WebApps rápidos, responsivos e com excelente experiência do usuário.'
            },
            {
              icon: <ShieldCheck className="text-indigo-600 w-8 h-8" />,
              title: 'Segurança Aplicada',
              desc: 'Adoção de boas práticas como autenticação segura, criptografia e proteção contra ataques.'
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
          <h2 className="text-3xl font-bold text-indigo-700 text-center mb-8">Tecnologias que utilizamos</h2>
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
          <h3 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Fale com a gente</h3>
          <Formulario cor="indigo" />
        </div>
      </section>
    </div>
  );
}
