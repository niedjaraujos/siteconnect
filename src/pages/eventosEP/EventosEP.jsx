import { Card } from "../../components/card/Card";
import S from "./eventosEP.module.scss";

//imagens
import institutoImagem from "../../assets/instituto-grande-familia.png";
import conectaImagem from "../../assets/instituto-conecta-jovem.png";
import futuroImagem from "../../assets/projeto-futuro-escola.png";

export const EventosEP = () => {
  return (
    <main>
      <section className={S.container}>
        <h1>Eventos & Palestras</h1>

        <div className={S.cards}>
          <Card
            image={institutoImagem}
            title="Empoderando Jovens para o Futuro"
            text="Atividade: Palestra motivacional sobre liderança jovem e transformação social."
            // text="Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
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
