import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// // import { Home } from "../pages/home/Home";
// import { Voluntariado } from "../pages/voluntariado/Voluntariado";
// import { Doacao } from "../pages/doacao/Doacao";
// import { EventosEP } from "../pages/eventosEP/EventosEP";
// import { Usuario } from "../pages/usuario/Usuario";
// import { Mentoria } from "../pages/mentoria/Mentoria";

// lazy imports
const Home = lazy(() => import("../pages/home/Home"));
const Voluntariado = lazy(() => import("../pages/voluntariado/Voluntariado"));
const Doacao = lazy(() => import("../pages/doacao/Doacao"));
const EventosEP = lazy(() => import("../pages/eventosEP/EventosEP"));
const Usuario = lazy(() => import("../pages/usuario/Usuario"));
const Mentoria = lazy(() => import("../pages/mentoria/Mentoria"));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="doacao" element={<Doacao />} />
        <Route path="eventosEP" element={<EventosEP />} />
        <Route path="mentoria" element={<Mentoria />} />
        <Route path="usuario" element={<Usuario />} />
        <Route path="voluntariado" element={<Voluntariado />} />
      </Routes>
    </Suspense>
  );
};
