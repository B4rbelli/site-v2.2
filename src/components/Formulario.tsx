import { useState } from 'react';
import { Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useModalContato } from './ModalContatoProvider'; // ajuste o path se necessário

type FormularioProps = {
  cor: string; // deve ser bg-purple-600, bg-indigo-600 etc.
};

export default function Formulario({ cor }: FormularioProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const { fechar } = useModalContato();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        'service_m95p9xk',
        'template_76dthye',
        formData,
        'RGSqRJA9mE5wOM1u_'
      )
      .then(() => {
        toast.success('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        fechar();
      })
      .catch((error: unknown) => {
        console.error('Erro ao enviar:', error);
        toast.error('Erro ao enviar. Tente novamente mais tarde.');
      })
      .finally(() => setIsSending(false));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded border border-gray-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded border border-gray-300"
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Assunto"
        value={formData.subject}
        onChange={handleChange}
        required
        className="w-full p-3 rounded border border-gray-300"
      />
      <textarea
        name="message"
        placeholder="Mensagem"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-3 rounded border border-gray-300"
      />
      <button
        type="submit"
        disabled={isSending}
        className={`w-full ${cor} text-white py-3 rounded hover:opacity-90 transition-colors flex justify-center items-center gap-2 ${isSending ? 'animate-pulse' : ''
          } disabled:opacity-50`}
      >
        <Mail className="w-5 h-5" />
        {isSending ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
    </form>
  );
}
