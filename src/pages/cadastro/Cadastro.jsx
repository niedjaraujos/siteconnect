import Input from "../../components/input/Input";
import S from "./cadastro.module.scss";

const Cadastro = () => {
  return (
    <main>
      <section className={S.container}>
        <form action="">
          <Input label="Email da empresa:" />
          <button className={S.btnEnviar}>Cadastrar</button>
        </form>
      </section>
    </main>
  );
};

export default Cadastro;
