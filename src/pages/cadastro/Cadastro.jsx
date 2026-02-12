import Input from "../../components/input/Input";
import S from "./cadastro.module.scss";

const Cadastro = () => {
  return (
    <main>
      <form action="">
        <div className={S.formGroup}>
          <Input label="Email da empresa:" />
        </div>
        <button className={S.btnEnviar}>Cadastrar</button>
      </form>
    </main>
  );
};

export default Cadastro;
