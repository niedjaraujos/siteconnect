import { Link } from "react-router-dom";
import S from "./navBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={S.nav}>
      <Link className={S.link} to="/doacao">
        Doação
      </Link>
      <Link className={S.link} to="/voluntariado">
        Voluntariado
      </Link>
      <Link className={S.link} to="/mentoria">
        Mentoria
      </Link>
      <Link className={S.link} to="/eventosEP">
        Eventos & Palestras
      </Link>
    </nav>
  );
};
