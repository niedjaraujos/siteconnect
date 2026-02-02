import { Link } from 'react-router-dom';

import S from './paginaInicial.module.scss';
import banner from '../../assets/img_1.png';

export const PaginaInicial = () => {
  return (
    <main className={S.main}>
      <div className={S.mainContent}>
        <h1>Projetos Sociais que transformam </h1>
        <p>
          Conectamos sua empresa com projetos sociais impactantes. Juntos,
          criamos mudanças reais na comunidade.
        </p>
        <Link>Cadastrar empresa</Link>
        <div className={S.datas}>
          <div className={S.data}>
            <h2>500+</h2>
            <p>Empresas Voluntárias</p>
          </div>
          <div className={S.data}>
            <h2>1.2K+</h2>
            <p>Projetos Realizados</p>
          </div>
          <div className={S.data}>
            <h2>50K+</h2>
            <p>Vidas Impactadas</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src={banner}
          alt="imagem de mãos segurando pessoas de papel e um globo terrestre"
        />
      </div>
    </main>
  );
};
