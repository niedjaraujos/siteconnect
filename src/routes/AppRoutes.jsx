import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// lazy imports
const Home = lazy(() => import("../pages/home/Home"));
const Voluntariado = lazy(() => import("../pages/voluntariado/Voluntariado"));
const Doacao = lazy(() => import("../pages/doacao/Doacao"));
const EventosEP = lazy(() => import("../pages/eventosEP/EventosEP"));
const Usuario = lazy(() => import("../pages/usuario/Usuario"));
const Mentoria = lazy(() => import("../pages/mentoria/Mentoria"));
const Conta = lazy(() => import("../pages/conta/Conta"));
const Cadastro = lazy(() => import("../pages/cadastro/Cadastro"));

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
        <Route path="conta" element={<Conta />} />
        <Route path="cadastro" element={<Cadastro />} />
      </Routes>
    </Suspense>
  );
};
