import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Backup from './pages/servicos/Backup';
import Virtualizacao from './pages/servicos/Virtualizacao';
import Documentacoes from './pages/servicos/Documentacoes';
import Desenvolvimento from './pages/servicos/Desenvolvimento';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/servicos/backup', element: <Backup /> },
  { path: '/servicos/virtualizacao', element: <Virtualizacao /> },
  { path: '/servicos/documentacoes', element: <Documentacoes /> },
  { path: '/servicos/desenvolvimento', element: <Desenvolvimento /> },
]);

export default router;
