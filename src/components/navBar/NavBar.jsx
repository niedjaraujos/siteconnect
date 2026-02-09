import { NavLink } from "react-router-dom";
import S from "./navBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={S.nav}>
      <NavLink className={S.link} to="/doacao">
        Doação
      </NavLink>
      <NavLink className={S.link} to="/voluntariado">
        Voluntariado
      </NavLink>
      <NavLink className={S.link} to="/mentoria">
        Mentoria
      </NavLink>
      <NavLink className={S.link} to="/eventosEP">
        Eventos & Palestras
      </NavLink>
    </nav>
  );
};
