import { Card } from "../../components/card/Card";
import S from "./doacao.module.scss";

//imagens
import institutoImagem from "../../assets/instituto.png";
import conectaImagem from "../../assets/conecta.png";
import futuroImagem from "../../assets/futuro.png";

export const Doacao = () => {
  return (
    <main>
      <section className={S.container}>
        <h1>Doação</h1>

        <div className={S.cards}>
          <Card
            image={institutoImagem}
            title="Instituto grande familia"
            text="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            button="Quero Doar"
          />
          <Card
            image={futuroImagem}
            title="Projeto Futuro na Escola"
            text="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            button="Quero Doar"
          />
          <Card
            image={conectaImagem}
            title="Instituto Conecta Jovem"
            text="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            button="Quero Doar"
          />
        </div>
      </section>
    </main>
  );
};
