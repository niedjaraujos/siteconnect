import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import S from "./header.module.scss";
import { useState } from "react";
import { NavBar } from "../navBar/NavBar";

export const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };
  const [userLogado, setUserLogado] = useState(false);
  return (
    <header className={S.header}>
      <div className={S.headerContainer}>
        <Link to="/" className={S.logo}>
          <img
            src={logo}
            alt="Imagem de logo do projeto connect sendo representada por uma mão segurando um coração, simbolizando apoio"
          />
          <span>siteconnect</span>
        </Link>

        <div className={S.navbar}>
          <NavBar />
        </div>
        <div className={S.header__user}>
          {!userLogado ? (
            <Link to={"/cadastro"} onClick={() => setUserLogado(true)}>
              Entrar
            </Link>
          ) : (
            <img
              className={S.imgUser}
              src="https://github.com/niedjaraujos.png"
              alt="Imagem do usuário logado"
              onClick={toggleMenu}
            />
          )}
        </div>

        <nav className={`${S.navUser} ${menuAberto ? S.open : ""}`}>
          <Link to={"/usuario"} onClick={() => setMenuAberto(false)}>
            Niedja Araujo
          </Link>

          <Link onClick={() => setMenuAberto(false)}>Meu voluntariado</Link>
          <Link to={"/conta"} onClick={() => setMenuAberto(false)}>
            Configurações da conta
          </Link>
          <div className={S.navUser__nav} onClick={() => setMenuAberto(false)}>
            <NavBar />
          </div>
          <Link onClick={() => setMenuAberto(false)}>Sair</Link>
        </nav>
      </div>
    </header>
  );
};
