import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './globalStyles.scss';

import { PaginaInicial } from './pages/paginaInicial/PaginaInicial';
import { Voluntariado } from './pages/voluntariado/Voluntariado';
import { Doacao } from './pages/doacao/Doacao';
import { EventosEP } from './pages/eventosEP/EventosEP';
import { Usuario } from './pages/usuario/Usuario';
import { Mentoria } from './pages/mentoria/Mentoria';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="doacao" element={<Doacao />} />
        <Route path="eventosEP" element={<EventosEP />} />
        <Route path="mentoria" element={<Mentoria />} />
        <Route path="usuario" element={<Usuario />} />
        <Route path="voluntariado" element={<Voluntariado />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
