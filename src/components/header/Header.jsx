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

  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // useEffect(() => {
  //   function menuMobile() {
  //     setIsMobile(window.innerWidth <= 768);
  //     if (window.innerWidth > 768) {
  //       setMenuAberto(false);
  //     }
  //   }
  //   window.addEventListener('resize', menuMobile);
  //   return () => window.removeEventListener('resize', menuMobile);
  // }, []);
  return (
    <header className={S.header}>
      <div className={S.headerContainer}>
        <Link to="/">
          <img
            className={S.logo}
            src={logo}
            alt="Imagem de logo do projeto connect sendo representada por uma mão segurando um coração, simbolizando apoio"
          />
        </Link>
        <div className={S.navbar}>
          <NavBar />
        </div>

        <img
          className={S.imgUser}
          src="https://github.com/niedjaraujos.png"
          alt="Imagem do usuário logado"
          onClick={toggleMenu}
        />

        <nav className={`${S.navUser} ${menuAberto ? S.open : ""}`}>
          <Link to={"/usuario"} onClick={() => setMenuAberto(false)}>
            Niedja Araujo
          </Link>
          <div className={S.navUser__nav}>
            <NavBar />
          </div>

          <Link onClick={() => setMenuAberto(false)}>Meu voluntariado</Link>
          <Link onClick={() => setMenuAberto(false)}>
            Configurações da conta
          </Link>

          <Link onClick={() => setMenuAberto(false)}>Sair</Link>
        </nav>
      </div>
    </header>
  );
};
