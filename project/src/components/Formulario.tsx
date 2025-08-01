import { Mail } from 'lucide-react';

type FormularioProps = {
  cor: string;
};

export default function Formulario({ cor }: FormularioProps) {
  return (
    <form className="bg-white rounded-xl shadow-lg p-8 space-y-4 max-w-4xl mx-auto mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="Nome" className="p-3 rounded border border-gray-300" />
        <input type="email" placeholder="Email" className="p-3 rounded border border-gray-300" />
      </div>
      <input type="text" placeholder="Assunto" className="w-full p-3 rounded border border-gray-300" />
      <textarea placeholder="Mensagem" rows={5} className="w-full p-3 rounded border border-gray-300" />
      <button
        type="submit"
        className={`w-full ${cor} text-white py-3 rounded hover:opacity-90 transition-colors flex justify-center items-center gap-2`}
      >
        <Mail className="w-5 h-5" />
        Enviar Mensagem
      </button>
    </form>
  );
}
