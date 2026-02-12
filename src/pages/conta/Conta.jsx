import S from "./conta.module.scss";

import Input from "../../components/input/Input";

const Conta = () => {
  return (
    <main>
      <section className={S.container}>
        <h1>Configurações da Conta</h1>
        <form action="">
          <div className={S.fotoUser}>
            <Input type="file" label="Foto Perfil: " />
          </div>

          <Input type="text" label="Nome Completo:" />

          <Input
            type="text"
            label="Email:"
            placeholder="enderecodeemail@mail.com"
          />

          <Input type="text" label="Endereço:" placeholder="cidade, estado" />

          <Input
            type="password"
            label="Senha:"
            placeholder="min 8 caracteres"
          />

          <button className={S.btnEnviar}>Enviar</button>
        </form>
      </section>
    </main>
  );
};

export default Conta;
