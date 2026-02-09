import S from "./conta.module.scss";

const Conta = () => {
  return (
    <main>
      <section className={S.container}>
        <h1>Configurações da Conta</h1>
        <form action="">
          <div>input para imagem</div>

          <div>
            <label htmlFor="name">name</label>
            <input type="text" />
          </div>
        </form>
      </section>
    </main>
  );
};

export default Conta;
