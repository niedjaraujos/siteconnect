import { Link } from "react-router-dom";

import S from "./home.module.scss";
import banner from "../../assets/images/img_1.png";

export const Home = () => {
  return (
    <main className={S.hero}>
      <div className={S.hero__content}>
        <h1 className={S.hero__title}>Projetos Sociais que transformam </h1>
        <p className={S.hero__description}>
          Conectamos sua empresa com projetos sociais impactantes. Juntos,
          criamos mudanças reais na comunidade.
        </p>
        {/* CTA significa "Call to Action" (Chamada para Ação em português).
        o botão "Cadastrar empresa" é um CTA porque está incentivando o visitante a tomar uma ação (se cadastrar). */}
        <Link className={S.hero__cta}>Cadastrar empresa</Link>
        <div className={S.hero__stats}>
          <article className={S.stats__item}>
            <h2 className={S.stats__number}>500+</h2>
            <p className={S.stats__label}>Empresas Voluntárias</p>
          </article>
          <article className={S.stats__item}>
            <h2 className={S.stats__number}>1.2K+</h2>
            <p className={S.stats__label}>Projetos Realizados</p>
          </article>
          <article className={S.stats__item}>
            <h2 className={S.stats__number}>50K+</h2>
            <p className={S.stats__label}>Vidas Impactadas</p>
          </article>
        </div>
      </div>
      <div className={S.hero__image}>
        <img
          src={banner}
          alt="imagem de mãos segurando pessoas de papel e um globo terrestre"
        />
      </div>
    </main>
  );
};
