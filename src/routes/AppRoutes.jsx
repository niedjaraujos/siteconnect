import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home/Home";
import { Voluntariado } from "../pages/voluntariado/Voluntariado";
import { Doacao } from "../pages/doacao/Doacao";
import { EventosEP } from "../pages/eventosEP/EventosEP";
import { Usuario } from "../pages/usuario/Usuario";
import { Mentoria } from "../pages/mentoria/Mentoria";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="doacao" element={<Doacao />} />
      <Route path="eventosEP" element={<EventosEP />} />
      <Route path="mentoria" element={<Mentoria />} />
      <Route path="usuario" element={<Usuario />} />
      <Route path="voluntariado" element={<Voluntariado />} />
    </Routes>
  );
};
