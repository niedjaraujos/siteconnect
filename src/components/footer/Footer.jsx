import S from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={S.footer}>
      <p className={S.footerText}>
        © 2025 Vai na Web & Empower. Todos os direitos reservados. Projeto
        destinado exclusivamente a fins educativos.
      </p>
    </footer>
  );
};
