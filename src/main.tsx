import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { ModalContatoProvider } from './components/ModalContatoProvider'; // ✅ import

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalContatoProvider> {/* ✅ contexto englobando a aplicação */}
      <RouterProvider router={router} />
    </ModalContatoProvider>
  </StrictMode>
);
