import { Card } from "../../components/card/Card";
import S from "./mentoria.module.scss";

//imagens
import mentoriaImagem from "../../assets/mentoria.png";
import experienciaImagem from "../../assets/experiencia.png";
import acompanhamentoImagem from "../../assets/acompanhamento.png";

export const Mentoria = () => {
  return (
    <main>
      <section className={S.container}>
        <h1>Mentoria</h1>

        <div className={S.cards}>
          <Card
            image={mentoriaImagem}
            title="Mentoria de Carreira e Emprego"
            text="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
            button="Quero Participar"
          />
          <Card
            image={experienciaImagem}
            title="Compartilhe Experiência"
            text="Oriente jovens e profissionais iniciantes em sua área."
            button="Quero Participar"
          />
          <Card
            image={acompanhamentoImagem}
            title="Acompanhamento"
            text="Participe como guia em jornadas de aprendizado e desenvolvimento."
            button="Quero Participar"
          />
        </div>
      </section>
    </main>
  );
};
