import S from "./usuario.module.scss";

const Usuario = () => {
  return (
    <main>
      <section className={S.usuario}>
        <div className={S.usuario__image}>
          <img
            src="https://github.com/niedjaraujos.png"
            alt="Imagem do usuário logado"
          />
        </div>
        <div className={S.usuario__content}>
          <div className={S.usuario__header}>
            <h3 className={S.usuario__name}>Niedja Araujo</h3>
            <p className={S.usuario__function}>Voluntário Ativo</p>
          </div>

          <p className={S.usuario__bio}>
            Apaixonado por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>

          <ul className={S.infoList}>
            <li className={S.infoList__infoLocal}>Cabo, Pernambuco</li>
            <li className={S.infoList__infoEmail}>niedjaaraujo91@gmail.com</li>
            <li className={S.infoList__infoDate}>Membro desde Outubro 2025</li>
          </ul>
          <ul className={S.usuario__tagList}>
            <li className={S.usuario__tagList_item}>Educação</li>
            <li className={S.usuario__tagList_item}>Meio Ambiente</li>
            <li className={S.usuario__tagList_item}>Assistencia Social</li>
            <li className={S.usuario__tagList_item}>Design</li>
          </ul>
        </div>
      </section>
    </main>
  );
};
export default Usuario;
