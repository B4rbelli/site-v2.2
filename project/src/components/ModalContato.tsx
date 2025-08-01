import { createContext, useContext, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Formulario from './Formulario';

interface ModalContatoContextType {
  aberto: boolean;
  abrir: () => void;
  fechar: () => void;
}

const ModalContatoContext = createContext<ModalContatoContextType | undefined>(undefined);

export function useModalContato() {
  const context = useContext(ModalContatoContext);
  if (!context) throw new Error('useModalContato precisa estar dentro de ModalContatoProvider');
  return context;
}

export function ModalContatoProvider({ children }: { children: React.ReactNode }) {
  const [aberto, setAberto] = useState(false);

  const abrir = () => setAberto(true);
  const fechar = () => setAberto(false);

  return (
    <ModalContatoContext.Provider value={{ aberto, abrir, fechar }}>
      {children}
      {/* Modal flutuante */}
      <AnimatePresence>
        {aberto && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-lg relative shadow-xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
                onClick={fechar}
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
                Fale com a gente
              </h2>
              <p className="text-gray-600 mb-6 text-center text-sm">
                Envie sua dúvida, proposta ou sugestão. Retornaremos o mais breve possível.
              </p>
              <Formulario cor="purple" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante */}
      <div className="fixed top-20 right-6 z-40">
        <button
          onClick={abrir}
          className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all"
          title="Fale Conosco"
        >
          <MessageCircle className="w-6 h-6 animate-pulse" />
        </button>
      </div>
    </ModalContatoContext.Provider>
  );
}
